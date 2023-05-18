
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
					bumpTexture  
					indexOfRefraction  
					intensity  
					isEnabled  
					isTintEnabled  
					markAllDefinesAsDirty (readonly) 
					name  
					priority  
					registerForExtraEvents  
					remapF0OnInterfaceChange  
					roughness  
					texture  
					textureRoughness  
					tintColor  
					tintColorAtDistance  
					tintTexture  
					tintThickness  
					useRoughnessFromMainTexture  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let material = undefined // [pbrbasematerial] * required
				// 
				

				export let addToPluginList = undefined // [boolean] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PBRClearCoatConfiguration(material,addToPluginList) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let bumpTexture = undefined // [nullable] 
				// define the clear coat specific bump texture.
				

				export let indexOfRefraction = undefined // [number] 
				// defines the index of refraction of the clear coat.this defaults to 1.5 corresponding to a 0.04 f0 or a 4% reflectance at normal incidencethe default fits with a polyurethane material.changing the default value is more performance intensive.
				

				export let intensity = undefined // [number] 
				// defines the clear coat layer strength (between 0 and 1) it defaults to 1.
				

				export let isEnabled = undefined // [boolean] 
				// defines if the clear coat is enabled in the material.
				

				export let isTintEnabled = undefined // [boolean] 
				// defines if the clear coat tint is enabled in the material.
				

				export let markAllDefinesAsDirty = undefined // [reflection] 
				// 
				

				export let name = undefined // [string] 
				// defines the name of the plugin
				

				export let priority = undefined // [number] 
				// defines the priority of the plugin. lower numbers run first.
				

				export let registerForExtraEvents = undefined // [boolean] 
				// indicates that this plugin should be notified for the extra events (hasrendertargettextures / fillrendertargettextures / hardbindforsubmesh)
				

				export let remapF0OnInterfaceChange = undefined // [boolean] 
				// defines if the f0 value should be remapped to account for the interface change in the material.
				

				export let roughness = undefined // [number] 
				// defines the clear coat layer roughness.
				

				export let texture = undefined // [nullable] 
				// stores the clear coat values in a texture (red channel is intensity and green channel is roughness)if useroughnessfrommaintexture is false, the green channel of texture is not used and the green channel of textureroughness is used insteadif textureroughness is not empty, else no texture roughness is used
				

				export let textureRoughness = undefined // [nullable] 
				// stores the clear coat roughness in a texture (green channel)not used if useroughnessfrommaintexture is true
				

				export let tintColor = undefined // [color3] 
				// defines the clear coat tint of the material.this is only use if tint is enabled
				

				export let tintColorAtDistance = undefined // [number] 
				// defines the distance at which the tint color should be found in theclear coat media.this is only use if tint is enabled
				

				export let tintTexture = undefined // [nullable] 
				// stores the clear tint values in a texture.rgb is tinta is a thickness factor
				

				export let tintThickness = undefined // [number] 
				// defines the clear coat layer thickness.this is only use if tint is enabled
				

				export let useRoughnessFromMainTexture = undefined // [boolean] 
				// indicates that the green channel of the texture property will be used for roughness (default: true)if false, the green channel from textureroughness is used for roughness
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PBRClearCoatConfiguration]`, ...args) : null

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
				if (bumpTexture != undefined) instance.bumpTexture = bumpTexture?.instance || bumpTexture
				bumpTexture = instance.bumpTexture
				if (indexOfRefraction != undefined) instance.indexOfRefraction = indexOfRefraction?.instance || indexOfRefraction
				indexOfRefraction = instance.indexOfRefraction
				if (intensity != undefined) instance.intensity = intensity?.instance || intensity
				intensity = instance.intensity
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled
				if (isTintEnabled != undefined) instance.isTintEnabled = isTintEnabled?.instance || isTintEnabled
				isTintEnabled = instance.isTintEnabled
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (priority != undefined) instance.priority = priority?.instance || priority
				priority = instance.priority
				if (registerForExtraEvents != undefined) instance.registerForExtraEvents = registerForExtraEvents?.instance || registerForExtraEvents
				registerForExtraEvents = instance.registerForExtraEvents
				if (remapF0OnInterfaceChange != undefined) instance.remapF0OnInterfaceChange = remapF0OnInterfaceChange?.instance || remapF0OnInterfaceChange
				remapF0OnInterfaceChange = instance.remapF0OnInterfaceChange
				if (roughness != undefined) instance.roughness = roughness?.instance || roughness
				roughness = instance.roughness
				if (texture != undefined) instance.texture = texture?.instance || texture
				texture = instance.texture
				if (textureRoughness != undefined) instance.textureRoughness = textureRoughness?.instance || textureRoughness
				textureRoughness = instance.textureRoughness
				if (tintColor != undefined) instance.tintColor = tintColor?.instance || tintColor
				tintColor = instance.tintColor
				if (tintColorAtDistance != undefined) instance.tintColorAtDistance = tintColorAtDistance?.instance || tintColorAtDistance
				tintColorAtDistance = instance.tintColorAtDistance
				if (tintTexture != undefined) instance.tintTexture = tintTexture?.instance || tintTexture
				tintTexture = instance.tintTexture
				if (tintThickness != undefined) instance.tintThickness = tintThickness?.instance || tintThickness
				tintThickness = instance.tintThickness
				if (useRoughnessFromMainTexture != undefined) instance.useRoughnessFromMainTexture = useRoughnessFromMainTexture?.instance || useRoughnessFromMainTexture
				useRoughnessFromMainTexture = instance.useRoughnessFromMainTexture

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

			