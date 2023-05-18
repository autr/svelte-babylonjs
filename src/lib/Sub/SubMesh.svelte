
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					materialIndex  * required
					verticesStart  * required
					verticesCount  * required
					indexStart  * required
					indexCount  * required
					mesh  * required
					renderingMesh  
					createBoundingBox  
					addToMesh   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let materialIndex = undefined // [number] * required
				// defines the material index to use
				

				export let verticesStart = undefined // [number] * required
				// defines vertex index start
				

				export let verticesCount = undefined // [number] * required
				// defines vertices count
				

				export let indexStart = undefined // [number] * required
				// defines index start
				

				export let indexCount = undefined // [number] * required
				// defines indices count
				

				export let mesh = undefined // [abstractmesh] * required
				// defines the parent mesh
				

				export let renderingMesh = undefined // [mesh] 
				// defines an optional rendering mesh
				

				export let createBoundingBox = undefined // [boolean] 
				// defines if bounding box should be created for this submesh
				

				export let addToMesh = undefined // [boolean] 
				// defines a boolean indicating that the submesh must be added to the mesh.submeshes array (true by default)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SubMesh(materialIndex,verticesStart,verticesCount,indexStart,indexCount,mesh,renderingMesh,createBoundingBox,addToMesh) : {}

				// ================ ACCESSORS ================

				
				export let IsGlobal = undefined // [boolean] 
				// 
				

				export let effect = undefined // [nullable] 
				// 
				

				export let materialDefines = undefined // [nullable] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let canIntersects = (...args) => instance.canIntersects(...args)

				export let clone = (...args) => instance.clone(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getBoundingInfo = (...args) => instance.getBoundingInfo(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getEffectiveMesh = (...args) => instance.getEffectiveMesh(...args)

				export let getMaterial = (...args) => instance.getMaterial(...args)

				export let getMesh = (...args) => instance.getMesh(...args)

				export let getRenderingMesh = (...args) => instance.getRenderingMesh(...args)

				export let getReplacementMesh = (...args) => instance.getReplacementMesh(...args)

				export let intersects = (...args) => instance.intersects(...args)

				export let isCompletelyInFrustum = (...args) => instance.isCompletelyInFrustum(...args)

				export let isInFrustum = (...args) => instance.isInFrustum(...args)

				export let projectToRef = (...args) => instance.projectToRef(...args)

				export let refreshBoundingInfo = (...args) => instance.refreshBoundingInfo(...args)

				export let render = (...args) => instance.render(...args)

				export let resetDrawCache = (...args) => instance.resetDrawCache(...args)

				export let setBoundingInfo = (...args) => instance.setBoundingInfo(...args)

				export let setEffect = (...args) => instance.setEffect(...args)

				export let updateBoundingInfo = (...args) => instance.updateBoundingInfo(...args)

				export let AddToMesh = (...args) => instance.AddToMesh(...args)

				export let CreateFromIndices = (...args) => instance.CreateFromIndices(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SubMesh]`, ...args) : null

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

												if (materialIndex != undefined) instance.materialIndex = materialIndex?.instance || materialIndex
				materialIndex = instance.materialIndex
				if (verticesStart != undefined) instance.verticesStart = verticesStart?.instance || verticesStart
				verticesStart = instance.verticesStart
				if (verticesCount != undefined) instance.verticesCount = verticesCount?.instance || verticesCount
				verticesCount = instance.verticesCount
				if (indexStart != undefined) instance.indexStart = indexStart?.instance || indexStart
				indexStart = instance.indexStart
				if (indexCount != undefined) instance.indexCount = indexCount?.instance || indexCount
				indexCount = instance.indexCount
				if (mesh != undefined) instance.mesh = mesh?.instance || mesh
				mesh = instance.mesh
				if (renderingMesh != undefined) instance.renderingMesh = renderingMesh?.instance || renderingMesh
				renderingMesh = instance.renderingMesh
				if (createBoundingBox != undefined) instance.createBoundingBox = createBoundingBox?.instance || createBoundingBox
				createBoundingBox = instance.createBoundingBox
				if (addToMesh != undefined) instance.addToMesh = addToMesh?.instance || addToMesh
				addToMesh = instance.addToMesh

				IsGlobal = instance.IsGlobal

				effect = instance.effect
				if (materialDefines != undefined) instance.materialDefines = materialDefines?.instance || materialDefines
				materialDefines = instance.materialDefines

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

			