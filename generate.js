import * as TypeDoc from 'typedoc'
import fs from 'fs-extra'
import fetch from 'node-fetch'
import path from 'path'
import { ProjectParser } from 'typedoc-json-parser'

let LOG = []

function findValueInJSON(obj, value, keys = [], log = '', idx = 0) {
	for (const prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if (obj[prop] === value) {
				const str = [...keys, prop].join(".")
				LOG.push(str)
				// console.log(str)
				// console.log(obj.kindString)
				// console.log((obj?.signatures||[]).length)
			} else if (typeof obj[prop] === "object") {
				const key = !isNaN(prop) ? ((obj[prop]?.name||'')+':'+prop) : prop
				const str = findValueInJSON(obj[prop], value, [...keys, key], log, idx++)
			}
		}
	}
}


const SAY = (...args) => console.log('[generate]', ...args)

async function syncPackageVersions() {
	try {
		// Usage example
	const babylonDir = './Babylon.js'
	const changeLog = `${babylonDir}/.build/changelog.json`

	const changeLogString = await fs.readFileSync(changeLog)
	const changeLogJson = JSON.parse(changeLogString)
	const babylonVersion = Object.keys( changeLogJson.changelog )[0]

		const packageJsonString = await fs.readFile('./package.json', 'utf8')
		const packageJson = JSON.parse(packageJsonString)

		packageJson.version = babylonVersion
		await fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2), 'utf8')
		console.log(`Updated package.json with BabylonJS version ${babylonVersion}`)
	} catch (error) {
		console.error(error)
	}
}

export const fetchTypeDocs = async () => {


		try {
			// ============ FETCH DOCS.TS ============

			SAY('✨ fetching documentation...')

			const response = await fetch("https://preview.babylonjs.com/documentation.d.ts")
			const text = (await response.text()).replace(/declare module "[^}]*}/g, "")
			await fs.writeFileSync(`docs/docs.ts`, text)

			SAY(`✅ wrote docs/docs.ts`)
			// write tsconfig.json, required for TypeDoc

			fs.writeFileSync(
					`docs/tsconfig.json`,
					JSON.stringify({
							compilerOptions: {
								experimentalDecorators: true,
								noImplicitAny: true,
								noImplicitReturns: true,
								noImplicitThis: true,
								noUnusedLocals: true,
								strictNullChecks: true,
								strictFunctionTypes: true,
								skipLibCheck: true,
							},
					}, null, '\t'),
			)

			// ============ GENERATE DOCS.JSON ============

			SAY('✨ generating documentation...')

			const app = new TypeDoc.Application()
			app.options.addReader(new TypeDoc.TSConfigReader())
			app.options.addReader(new TypeDoc.TypeDocReader())

			app.bootstrap({
					name: "API",
					excludeExternals: true,
					excludePrivate: true,
					excludeProtected: true,
					excludeInternal: true,
					includes: path.resolve('docs'),
					hideGenerator: true,
					json: 'docs/docs.json',
					tsconfig: `docs/tsconfig.json`,
					readme: "none",
					entryPoints: [`docs/docs.ts`],
			})
			const proj = await app.convert()
			if (proj) await app.generateJson(proj, path.resolve('docs/docs.json'))
			SAY(`✅ wrote docs/docs.json`)
		} catch(err) {
			SAY(`❌ generating docs...`, err.message)
		}

}

export const parseTypeDocs = async () => {



		try {

			const source = 'typedoc-json-parser.ClassParser.js'
			const dest = 'node_modules/typedoc-json-parser/dist/lib/structures/class-parser/ClassParser.js'

			// ============ GENERATE DOCS.PARSED.JS ============

			SAY('✨ parsing documentation...')

			let data = JSON.parse( await fs.readFileSync('docs/docs.json') )

			function expandTitledArray( array, lookup ) {
				let out = {}
				for (const item of array) {
					out[item.title.toLowerCase()] = item.children.map(id=>{
						return lookup.find(c=>c.id==id)
					})
				}
				return out
			}

			const dataGroups = expandTitledArray( data.groups, data.children )
			const namespace = dataGroups.namespaces[0]
			const namespaceGroups = expandTitledArray( namespace.groups, namespace.children )


			let project = {
				classes: [],
				builders: []
			}


			for (let v of namespaceGroups.variables) {

				const { name, id } = v

				if (name.includes('Builder')) {
					let { comment, kind, kindString, groups, children } = v
					// groups = expandTitledArray(groups, children)
					let edited = {
						name,
						id,
						kind,
						kindString,
						comment: comment?.summary?.[0]?.text
					}
					edited.constructors = expandTitledArray(v.type.declaration.groups, v.type.declaration.children).properties.map(c=>{
						const lookupId = c.type?.queryType?.id
						c = namespace.children.find(l=>l.id == lookupId)
						c.parameters = c.signatures[0].parameters.map( p => {
							const og = {...p}
							p.comment = p.comment?.description || p.comment?.summary?.[0]?.text || og?.comment
							p.name = p.name
							delete p.sources

							if (p.type?.type == 'reference') {
								p.type = namespace.children.find(l=>l.id==p.type.id)?.name
							} else {
								p.type = p?.type?.name || p?.type
							}

							return p
						})
						c.baseType = c.signatures?.[0]?.type?.name
						c.parentBuilder = name
						return c
					})
					project.builders.push(edited)

				}
			}
			project.builders.forEach(b=>{

				b.constructors.forEach(c=>{
					delete c.sources
					delete c.signatures
				})
			})


			// project.builders.forEach(b=>console.log(b.constructors[0]))

			// project.builders.push({
			// 	name: 'CreateIrregularPolyhedra',
			// 	constructors: [
			// 		{
			// 			name: 'CreateIrregularPolyhedra',
			// 			baseType: 'Mesh',
			// 			parameters: [{
			// 				name: 'polyhedraType',
			// 				type: 'number'
			// 			}]
			// 		}
			// 	]
			// })

			for (const c of namespaceGroups.classes) {

				const { name, id } = c 
				let { comment, kind, kindString, groups, children } = c
				groups = expandTitledArray(groups, children)
				let edited = {
					name,
					id,
					kind,
					kindString,
					comment: comment?.summary?.[0]?.text
				}

				edited.constructors = (groups?.constructors?.[0]?.signatures?.[0]?.parameters || [])

				edited.methods = (groups.methods||[]).map( m => {
					const og = { ...m } 
					const s = m.signatures[0]
					m.parameters = (s.parameters || []).map( p => {
						const old = {...p}
						p.type = p?.type?.name || p?.type?.type
						p.comment = p?.comment?.summary?.[0]?.text
						return p
					})
					delete m.sources
					delete m.signatures
					return m
				})

				edited.constructors = edited.constructors.map(p => {
					const og = {...p}
					p.comment = p.comment?.description || p.comment?.summary?.[0]?.text
					p.name = p.name
					if (!p.flags) p.flags = {}
					p.flags.isSettable = true
					delete p.sources

					if (p.type?.type == 'reference') {
						p.type = og?.type?.name
					} else {
						p.type = og?.type?.name || og?.type?.type
					}
					return p
				})

				edited.accessors = (groups.accessors||[]).map( p => {
					const og = {...p}
					p.comment = p.comment?.description || p.comment?.summary?.[0]?.text
					p.name = p.name
					p.type = p?.getSignature?.type?.name || p?.getSignature?.type?.type
					if (!p.flags) p.flags = {}
					p.flags.isSettable = (p?.setSignature != undefined ? true : false)
					delete p.sources
					delete p.getSignature
					delete p.setSignature
					delete p.inheritedFrom
					return p
				})
				edited.properties = (groups.properties||[]).map( p => {
					const og = {...p}
					p.comment = p.comment?.description || p.comment?.summary?.[0]?.text
					p.name = p.name
					if (!p.flags) p.flags = {}
					p.flags.isSettable = true
					delete p.sources
					delete p.inheritedFrom

					if (p.type?.type == 'reference') {
						p.type = (namespace.children.find(c=>c.id==p.type.id)?.name) || og?.type?.name || og?.type?.type
					} else {
						p.type = p?.type?.name || og?.type?.type
					}
					return p
				})
				if (!edited.comment) {
					console.log('🚨', edited.name, `NO COMMENT`)
				} else {
					console.log('✅', `${edited.name}: ${edited.comment}`)
				}
				project.classes.push(edited)
			}

			await fs.writeFileSync('docs/docs.parsed.json', JSON.stringify(project,null,'\t'))
			SAY(`✅ wrote docs/docs.parsed.json`)
		} catch(err) {
			SAY(`❌ generating docs...`, err.message)
			console.error(err)
		}
}

function sortIntoFolders(names) {
	const folders = {}
	for (const name of names) {
		let current = folders
		const parts = name.match(/[A-Z][a-z]*|[A-Z]+/g) || [] // split by uppercase letters and acronyms
		const exceptions = ['GLSL', 'GLTF', 'WebXR', 'WebVR', 'PBR', 'TBN', 'KHR', 'STL', 'SSA', 'HDR', 'SSR', 'RGBD', 'GPU', 'EXT', 'DDS', 'CSG', 'VR', 'OBJ' ]
		const found = exceptions.find( exc => {
			return name.substring(0,exc.length) == exc
		})
		const folder = found ? found : parts[0]
		if (!folders[folder]) folders[folder] = []
		folders[folder].push(name)
	}
	let out = []
	Object.keys(folders).forEach( folder => {
		if (folders[folder].length == 1) {
			out.push( 'Misc/' + folders[folder][0] )
		} else {
			for (const file of folders[folder]) {
				out.push( [ folder, file ].join('/') )
			}
		}
	})
	return out
}

export const writeSvelteComponents = async e => {

	const docs = JSON.parse( await fs.readFileSync('docs/docs.parsed.json'))
	SAY('✨ writing svelte components...')

	let indexJS = []


	// ============ MERGE BUILDERS INTO CLASSES ============

	for (const b of docs.builders) {
		for ( const c of b.constructors ) {

			let name = c.name.replace('Create','')

			// ============ PROPERTIES CODE ============

			const merge = docs.classes.find(o=>o.name == c.baseType)
			let neu = {...c}
			neu.originalName = c.name
			neu.constructors = c.parameters
			neu.properties = merge.properties
			neu.accessors = merge.accessors || []
			docs.classes.push(neu)

		}
	}

	// ============ GET DESTINATIONS ============

	const classNames = docs.classes.map(c=>c.name)
	const destinations = sortIntoFolders(classNames)

	// ============ CLASSES CODE ============

	function parameters2Definition(params, needsRequired, isConstructor ) {
		return params.map(p=>{

			if (typeof p.type == 'object') p.type = p.type.declaration.kindString
			const isReadonly = p?.flags?.isReadonly
			const isOptional = p?.flags?.isOptional
			const isRequired = !isOptional&&needsRequired
			const equals = '= undefined' // isConstructor ? isRequired ? '= undefined' : '= undefined' : `= instance.${p.name} || undefined`
			const reactive = !isReadonly?`$: (${p.name} => (instance.${p.name} = ${p.name}))(${p.name})`:'// (readonly)'
			const commentVar = `// [${(p?.type || '').toLowerCase()}] ${isRequired?'* required':''}`
			return `
				export ${isReadonly?'let':'let'} ${p.name} ${equals} ${commentVar}
				// ${(p.comment||'').replaceAll('\n','').toLowerCase()}
				${''}`
		}).join('\n')
	}

	function assignParameters2Props( params ) {
		return params.filter(p => {

			const isReadonly = p?.flags?.isReadonly
			const isOptional = p?.flags?.isOptional
			const isStatic = p?.flags?.isStatic
			if (!isReadonly && !isStatic ) return true

		}).map( p => {

			const isSettable = p?.flags?.isSettable
			return [
				isSettable ?
`				if (${p.name} != undefined) instance.${p.name} = ${p.name}?.instance || ${p.name}` : '',
`				${p.name} = instance.${p.name}`
			].join('\n')
		}).join('\n')
	}

	function constructors2Instance(prop, constructors) {

		let call = `new BB.${prop.name}`
		if (prop.parentBuilder) call = `BB.${prop.parentBuilder}.${prop.name}`
		return `export let instance = browser ? ${call}(${constructors.map(c => {
			return c.name
		}).join(',')}) : {}`
	}

	function parameters2Summary( params, needsRequired ) {
		return params.map(p=>{
			return `
					${p.name} ${p?.flags?.isReadonly?'(readonly)':''} ${!p?.flags?.isOptional&&needsRequired?'* required':''}`
		}).join('')
	}

	function generateMountDestroy( c ) {
		// \${instance.uniqueId||'_'}:
		return ``
	}

	function methods2Definition( methods ) {
		return methods.map(m=> {
			return `
				export let ${m.name} = (...args) => instance.${m.name}(...args)`
		}).join('\n')
	}

	let written = []

	for (const c of docs.classes) {
		let { name, id, comment, properties, accessors, constructors, methods } = c

		// ============ PROPERTIES CODE ============

		const filteredProps = properties.filter(p=>{
			const inConstructor = constructors.find(c=>c.name==p.name)
			if (p?.flags?.isStatic || inConstructor) {
				return false
			} else {
				return true
			}
		})
		const filteredAccessors = (accessors || []).filter(p=>{
			const inConstructor = constructors.find(c=>c.name==p.name)
			if (p?.flags?.isStatic || inConstructor) {
				return false
			} else {
				return true
			}
		})
		const constructorSummary = parameters2Summary( constructors, true ) 
		const propertiesSummary = parameters2Summary( filteredProps, false ) 
		const accessorsSummary = parameters2Summary( filteredAccessors, false ) 

		const constructorDefinition = parameters2Definition( constructors, true, true )
		const propertiesDefinition = parameters2Definition(filteredProps, false, false )
		const accessorsDefinition = parameters2Definition(filteredAccessors, false, false )

		const methodsDefinition = methods2Definition( methods || [] )
		const instance = constructors2Instance(c, constructors)
		const mountDestroy = generateMountDestroy( c )

		const reassignParameters = assignParameters2Props([
			...constructors,
			...filteredAccessors,
			...filteredProps
		])

		// ============ COMPONENT CODE ============

		const code = `
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* ${constructorSummary} ${propertiesSummary}
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				${constructorDefinition}

				// ================ CLASS INSTANCE ================

				${instance}

				// ================ ACCESSORS ================

				${accessorsDefinition}

				// ================ PROPERTIES ================

				${propertiesDefinition}

				// ================ METHODS ================

				${methodsDefinition}
				
				// ================ LIFECYCLE ================
				${mountDestroy}

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(\`[\${name}:${c.name}]\`, ...args) : null

				const self = !import.meta.env.SSR && arguments[0]
				$bbLookup.set( self, false )
				bbIniting.set( true )
				DEBUG('✨ initing')

				onMount( async e => {
					$bbLookup.set( self, true )
					DEBUG('🌱 mounted')
					let timeout = null
					onMounted(instance)
					const unsubscribe = bbIniting.subscribe( v => {
						if (timeout) clearTimeout( timeout )
						timeout = setTimeout( e => {

							$bbIniting = !Array.from($bbLookup.values()).every(v => v)
							DEBUG('🌿 inited')
							onInited(instance)

							if (!$bbIniting) {

								${reassignParameters}

								// ================ AFRAME PARENT ================

								if (autoParent && !parent) {
									let counter = autoParent
									let parentNode = fieldset
									while( counter > 0 ) {
										parentNode = parentNode.parentNode
										counter-=1
									}
									const parentComponent = $bbLookup.get( parentNode )
									if (parentComponent) {
										instance.parent = parentComponent.instance
										DEBUG('👩‍👦 parent')
									}
								}
								DEBUG('🌴 aframe')
								onLoaded(instance)
							}
						}, 10)
					})
				})


				onDestroy( async e => {
					DEBUG('🔥 destroyed')
					if (instance.dispose) instance.dispose()
				})


				export let autoParent = null
				let fieldset
			</script>
			<svelte:options accessors/>
			<fieldset bind:this={fieldset}>
				<slot />
			</fieldset>

			`

		const destination = destinations.find(d=>{
			if (d == c.name) return d
			if ( d.split('/')[1] == c.name ) return d
		})
		const outFile = `src/lib/${destination}.svelte`
		const exists = indexJS.find(o=>o.destination==destination)
		if (!exists) indexJS.push({
			destination,
			name: c.name
		})
		await fs.outputFileSync(outFile, code)

		written += outFile
	}
	SAY(`✅ wrote ${written.length} svelte files`)

	const indexStr = indexJS.map( ({name, destination}) => {
		return `export { default as ${name} } from './${destination}.svelte';\n`
	}).join('\n')
	const indexDest = 'src/lib/index.js'

	await fs.outputFileSync(indexDest, indexStr)
	SAY(`✅ wrote ${indexDest}`)
}


const RUN_LIST = [
	// fetchTypeDocs,
	parseTypeDocs,
	writeSvelteComponents
]

const run = async e => {

	// await syncPackageVersions()

	for (const RUN in RUN_LIST) {
		await RUN_LIST[RUN]()
	}

}

run()