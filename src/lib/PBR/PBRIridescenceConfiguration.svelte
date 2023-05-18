
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
					indexOfRefraction  
					intensity  
					isEnabled  
					markAllDefinesAsDirty (readonly) 
					maximumThickness  
					minimumThickness  
					name  
					priority  
					registerForExtraEvents  
					texture  
					thicknessTexture  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let material = undefined // [pbrbasematerial] * required
				// 
				

				export let addToPluginList = undefined // [boolean] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PBRIridescenceConfiguration(material,addToPluginList) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let indexOfRefraction = undefined // [number] 
				// defines the maximum thickness of the thin-film layer given in nanometers (nm).
				

				export let intensity = undefined // [number] 
				// defines the iridescence layer strength (between 0 and 1) it defaults to 1.
				

				export let isEnabled = undefined // [boolean] 
				// defines if the iridescence is enabled in the material.
				

				export let markAllDefinesAsDirty = undefined // [reflection] 
				// 
				

				export let maximumThickness = undefined // [number] 
				// defines the maximum thickness of the thin-film layer given in nanometers (nm). this will be the thickness used if not thickness texture has been set.
				

				export let minimumThickness = undefined // [number] 
				// defines the minimum thickness of the thin-film layer given in nanometers (nm).
				

				export let name = undefined // [string] 
				// defines the name of the plugin
				

				export let priority = undefined // [number] 
				// defines the priority of the plugin. lower numbers run first.
				

				export let registerForExtraEvents = undefined // [boolean] 
				// indicates that this plugin should be notified for the extra events (hasrendertargettextures / fillrendertargettextures / hardbindforsubmesh)
				

				export let texture = undefined // [nullable] 
				// stores the iridescence intensity in a texture (red channel)
				

				export let thicknessTexture = undefined // [nullable] 
				// stores the iridescence thickness in a texture (green channel)
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PBRIridescenceConfiguration]`, ...args) : null

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
				if (indexOfRefraction != undefined) instance.indexOfRefraction = indexOfRefraction?.instance || indexOfRefraction
				indexOfRefraction = instance.indexOfRefraction
				if (intensity != undefined) instance.intensity = intensity?.instance || intensity
				intensity = instance.intensity
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled
				if (maximumThickness != undefined) instance.maximumThickness = maximumThickness?.instance || maximumThickness
				maximumThickness = instance.maximumThickness
				if (minimumThickness != undefined) instance.minimumThickness = minimumThickness?.instance || minimumThickness
				minimumThickness = instance.minimumThickness
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (priority != undefined) instance.priority = priority?.instance || priority
				priority = instance.priority
				if (registerForExtraEvents != undefined) instance.registerForExtraEvents = registerForExtraEvents?.instance || registerForExtraEvents
				registerForExtraEvents = instance.registerForExtraEvents
				if (texture != undefined) instance.texture = texture?.instance || texture
				texture = instance.texture
				if (thicknessTexture != undefined) instance.thicknessTexture = thicknessTexture?.instance || thicknessTexture
				thicknessTexture = instance.thicknessTexture

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

			