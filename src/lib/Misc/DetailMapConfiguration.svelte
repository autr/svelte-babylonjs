
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					material  * required
					addToPluginList   
					bumpLevel  
					diffuseBlendLevel  
					isEnabled  
					markAllDefinesAsDirty (readonly) 
					name  
					normalBlendMethod  
					priority  
					registerForExtraEvents  
					roughnessBlendLevel  
					texture  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let material = undefined // [union] * required
				// 
				

				export let addToPluginList = undefined // [boolean] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.DetailMapConfiguration(material,addToPluginList) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let bumpLevel = undefined // [number] 
				// defines how strong the bump effect from the detail map isbigger values mean stronger effect
				

				export let diffuseBlendLevel = undefined // [number] 
				// defines how strongly the detail diffuse/albedo channel is blended with the regular diffuse/albedo texturebigger values mean stronger blending
				

				export let isEnabled = undefined // [boolean] 
				// enable or disable the detail map on this material
				

				export let markAllDefinesAsDirty = undefined // [reflection] 
				// 
				

				export let name = undefined // [string] 
				// defines the name of the plugin
				

				export let normalBlendMethod = undefined // [number] 
				// the method used to blend the bump and detail normals together
				

				export let priority = undefined // [number] 
				// defines the priority of the plugin. lower numbers run first.
				

				export let registerForExtraEvents = undefined // [boolean] 
				// indicates that this plugin should be notified for the extra events (hasrendertargettextures / fillrendertargettextures / hardbindforsubmesh)
				

				export let roughnessBlendLevel = undefined // [number] 
				// defines how strongly the detail roughness channel is blended with the regular roughness valuebigger values mean stronger blending. only used with pbr materials
				

				export let texture = undefined // [nullable] 
				// the detail texture of the material.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:DetailMapConfiguration]`, ...args) : null

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
				if (addToPluginList != undefined) instance.addToPluginList = addToPluginList?.instance || addToPluginList
				addToPluginList = instance.addToPluginList
				if (bumpLevel != undefined) instance.bumpLevel = bumpLevel?.instance || bumpLevel
				bumpLevel = instance.bumpLevel
				if (diffuseBlendLevel != undefined) instance.diffuseBlendLevel = diffuseBlendLevel?.instance || diffuseBlendLevel
				diffuseBlendLevel = instance.diffuseBlendLevel
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (normalBlendMethod != undefined) instance.normalBlendMethod = normalBlendMethod?.instance || normalBlendMethod
				normalBlendMethod = instance.normalBlendMethod
				if (priority != undefined) instance.priority = priority?.instance || priority
				priority = instance.priority
				if (registerForExtraEvents != undefined) instance.registerForExtraEvents = registerForExtraEvents?.instance || registerForExtraEvents
				registerForExtraEvents = instance.registerForExtraEvents
				if (roughnessBlendLevel != undefined) instance.roughnessBlendLevel = roughnessBlendLevel?.instance || roughnessBlendLevel
				roughnessBlendLevel = instance.roughnessBlendLevel
				if (texture != undefined) instance.texture = texture?.instance || texture
				texture = instance.texture

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

			