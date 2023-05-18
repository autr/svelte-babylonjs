
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					material  * required
					name  * required
					priority  * required
					defines  
					addToPluginList  
					enable   
					markAllDefinesAsDirty (readonly) 
					registerForExtraEvents  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let material = undefined // [material] * required
				// parent material of the plugin
				

				export let name = undefined // [string] * required
				// name of the plugin
				

				export let priority = undefined // [number] * required
				// priority of the plugin
				

				export let defines = undefined // [reflection] 
				// list of defines used by the plugin. the value of the property is the default value for this property
				

				export let addToPluginList = undefined // [boolean] 
				// true to add the plugin to the list of plugins managed by the material plugin manager of the material (default: true)
				

				export let enable = undefined // [boolean] 
				// true to enable the plugin (it is handy if the plugin does not handle properties to switch its current activation)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.MaterialPluginBase(material,name,priority,defines,addToPluginList,enable) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let markAllDefinesAsDirty = undefined // [reflection] 
				// 
				

				export let registerForExtraEvents = undefined // [boolean] 
				// indicates that this plugin should be notified for the extra events (hasrendertargettextures / fillrendertargettextures / hardbindforsubmesh)
				

				// ================ METHODS ================

				
				export let addFallbacks = (...args) => instance.addFallbacks(...args)

				export let bindForSubMesh = (...args) => instance.bindForSubMesh(...args)

				export let collectDefines = (...args) => instance.collectDefines(...args)

				export let copyTo = (...args) => instance.copyTo(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let fillRenderTargetTextures = (...args) => instance.fillRenderTargetTextures(...args)

				export let getActiveTextures = (...args) => instance.getActiveTextures(...args)

				export let getAnimatables = (...args) => instance.getAnimatables(...args)

				export let getAttributes = (...args) => instance.getAttributes(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getCustomCode = (...args) => instance.getCustomCode(...args)

				export let getSamplers = (...args) => instance.getSamplers(...args)

				export let getUniformBuffersNames = (...args) => instance.getUniformBuffersNames(...args)

				export let getUniforms = (...args) => instance.getUniforms(...args)

				export let hardBindForSubMesh = (...args) => instance.hardBindForSubMesh(...args)

				export let hasRenderTargetTextures = (...args) => instance.hasRenderTargetTextures(...args)

				export let hasTexture = (...args) => instance.hasTexture(...args)

				export let isReadyForSubMesh = (...args) => instance.isReadyForSubMesh(...args)

				export let parse = (...args) => instance.parse(...args)

				export let prepareDefines = (...args) => instance.prepareDefines(...args)

				export let prepareDefinesBeforeAttributes = (...args) => instance.prepareDefinesBeforeAttributes(...args)

				export let serialize = (...args) => instance.serialize(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:MaterialPluginBase]`, ...args) : null

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

												if (material != undefined) instance.material = material?.instance || material
				material = instance.material
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (priority != undefined) instance.priority = priority?.instance || priority
				priority = instance.priority
				if (defines != undefined) instance.defines = defines?.instance || defines
				defines = instance.defines
				if (addToPluginList != undefined) instance.addToPluginList = addToPluginList?.instance || addToPluginList
				addToPluginList = instance.addToPluginList
				if (enable != undefined) instance.enable = enable?.instance || enable
				enable = instance.enable
				if (registerForExtraEvents != undefined) instance.registerForExtraEvents = registerForExtraEvents?.instance || registerForExtraEvents
				registerForExtraEvents = instance.registerForExtraEvents

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

			