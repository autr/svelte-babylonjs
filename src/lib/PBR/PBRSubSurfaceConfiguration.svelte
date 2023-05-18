
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
					diffusionDistance  
					indexOfRefraction  
					invertRefractionY  
					isRefractionEnabled  
					isScatteringEnabled  
					isTranslucencyEnabled  
					linkRefractionWithTransparency  
					markAllDefinesAsDirty (readonly) 
					maximumThickness  
					minimumThickness  
					name  
					priority  
					refractionIntensity  
					refractionIntensityTexture  
					refractionTexture  
					registerForExtraEvents  
					thicknessTexture  
					tintColor  
					tintColorAtDistance  
					translucencyIntensity  
					translucencyIntensityTexture  
					useAlbedoToTintRefraction  
					useAlbedoToTintTranslucency  
					useGltfStyleTextures  
					useMaskFromThicknessTexture  
					useThicknessAsDepth  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let material = undefined // [pbrbasematerial] * required
				// 
				

				export let addToPluginList = undefined // [boolean] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PBRSubSurfaceConfiguration(material,addToPluginList) : {}

				// ================ ACCESSORS ================

				
				export let disableAlphaBlending = undefined // [boolean] 
				// 
				

				export let scatteringDiffusionProfile = undefined // [nullable] 
				// 
				

				export let volumeIndexOfRefraction = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let diffusionDistance = undefined // [color3] 
				// defines how far each channel transmit through the media.it is defined as a color to simplify it selection.
				

				export let indexOfRefraction = undefined // [number] 
				// index of refraction of the material base layer.https://en.wikipedia.org/wiki/list_of_refractive_indicesthis does not only impact refraction but also the base f0 of dielectric materials.from dielectric fresnel rules: f0 = square((iort - iori) / (iort + iori))
				

				export let invertRefractionY = undefined // [boolean] 
				// controls if refraction needs to be inverted on y. this could be useful for procedural texture.
				

				export let isRefractionEnabled = undefined // [boolean] 
				// defines if the refraction is enabled in the material.
				

				export let isScatteringEnabled = undefined // [boolean] 
				// defines if the sub surface scattering is enabled in the material.
				

				export let isTranslucencyEnabled = undefined // [boolean] 
				// defines if the translucency is enabled in the material.
				

				export let linkRefractionWithTransparency = undefined // [boolean] 
				// this parameters will make the material used its opacity to control how much it is refracting against not.materials half opaque for instance using refraction could benefit from this control.
				

				export let markAllDefinesAsDirty = undefined // [reflection] 
				// 
				

				export let maximumThickness = undefined // [number] 
				// defines the maximum thickness stored in the thickness map.
				

				export let minimumThickness = undefined // [number] 
				// defines the minimum thickness stored in the thickness map.if no thickness map is defined, this value will be used to simulate thickness.
				

				export let name = undefined // [string] 
				// defines the name of the plugin
				

				export let priority = undefined // [number] 
				// defines the priority of the plugin. lower numbers run first.
				

				export let refractionIntensity = undefined // [number] 
				// defines the refraction intensity of the material.the refraction when enabled replaces the diffuse part of the material.the intensity helps transitioning between diffuse and refraction.
				

				export let refractionIntensityTexture = undefined // [nullable] 
				// stores the intensity of the refraction. if provided, it takes precedence over thicknesstexture + usemaskfromthicknesstexture* the green (red if usegltfstyletextures = true) channel is the refraction intensity.
				

				export let refractionTexture = undefined // [nullable] 
				// defines the texture to use for refraction.
				

				export let registerForExtraEvents = undefined // [boolean] 
				// indicates that this plugin should be notified for the extra events (hasrendertargettextures / fillrendertargettextures / hardbindforsubmesh)
				

				export let thicknessTexture = undefined // [nullable] 
				// stores the average thickness of a mesh in a texture (the texture is holding the values linearly).the red (or green if usegltfstyletextures=true) channel of the texture should contain the thickness remapped between 0 and 1.0 would mean minimumthickness1 would mean maximumthicknessthe other channels might be use as a mask to vary the different effects intensity.
				

				export let tintColor = undefined // [color3] 
				// defines the volume tint of the material.this is used for both translucency and scattering.
				

				export let tintColorAtDistance = undefined // [number] 
				// defines the distance at which the tint color should be found in the media.this is used for refraction only.
				

				export let translucencyIntensity = undefined // [number] 
				// defines the translucency intensity of the material.when translucency has been enabled, this defines how much of the "translucency"is added to the diffuse part of the material.
				

				export let translucencyIntensityTexture = undefined // [nullable] 
				// stores the intensity of the translucency. if provided, it takes precedence over thicknesstexture + usemaskfromthicknesstexture* the blue channel is the translucency intensity.
				

				export let useAlbedoToTintRefraction = undefined // [boolean] 
				// when enabled, transparent surfaces will be tinted with the albedo colour (independent of thickness)
				

				export let useAlbedoToTintTranslucency = undefined // [boolean] 
				// when enabled, translucent surfaces will be tinted with the albedo colour (independent of thickness)
				

				export let useGltfStyleTextures = undefined // [boolean] 
				// use channels layout used by gltf:* thicknesstexture: the green (instead of red) channel is the thickness* thicknesstexture/refractionintensitytexture: the red (instead of green) channel is the refraction intensity* thicknesstexture/translucencyintensitytexture: no change, use the blue channel for the translucency intensity
				

				export let useMaskFromThicknessTexture = undefined // [boolean] 
				// stores the intensity of the different subsurface effects in the thickness texture.note that if refractionintensitytexture and/or translucencyintensitytexture is provided it takes precedence over thicknesstexture + usemaskfromthicknesstexture* the green (red if usegltfstyletextures = true) channel is the refraction intensity.* the blue channel is the translucency intensity.
				

				export let useThicknessAsDepth = undefined // [boolean] 
				// defines that the thickness should be used as a measure of the depth volume.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PBRSubSurfaceConfiguration]`, ...args) : null

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

				disableAlphaBlending = instance.disableAlphaBlending
				if (scatteringDiffusionProfile != undefined) instance.scatteringDiffusionProfile = scatteringDiffusionProfile?.instance || scatteringDiffusionProfile
				scatteringDiffusionProfile = instance.scatteringDiffusionProfile
				if (volumeIndexOfRefraction != undefined) instance.volumeIndexOfRefraction = volumeIndexOfRefraction?.instance || volumeIndexOfRefraction
				volumeIndexOfRefraction = instance.volumeIndexOfRefraction
				if (diffusionDistance != undefined) instance.diffusionDistance = diffusionDistance?.instance || diffusionDistance
				diffusionDistance = instance.diffusionDistance
				if (indexOfRefraction != undefined) instance.indexOfRefraction = indexOfRefraction?.instance || indexOfRefraction
				indexOfRefraction = instance.indexOfRefraction
				if (invertRefractionY != undefined) instance.invertRefractionY = invertRefractionY?.instance || invertRefractionY
				invertRefractionY = instance.invertRefractionY
				if (isRefractionEnabled != undefined) instance.isRefractionEnabled = isRefractionEnabled?.instance || isRefractionEnabled
				isRefractionEnabled = instance.isRefractionEnabled
				if (isScatteringEnabled != undefined) instance.isScatteringEnabled = isScatteringEnabled?.instance || isScatteringEnabled
				isScatteringEnabled = instance.isScatteringEnabled
				if (isTranslucencyEnabled != undefined) instance.isTranslucencyEnabled = isTranslucencyEnabled?.instance || isTranslucencyEnabled
				isTranslucencyEnabled = instance.isTranslucencyEnabled
				if (linkRefractionWithTransparency != undefined) instance.linkRefractionWithTransparency = linkRefractionWithTransparency?.instance || linkRefractionWithTransparency
				linkRefractionWithTransparency = instance.linkRefractionWithTransparency
				if (maximumThickness != undefined) instance.maximumThickness = maximumThickness?.instance || maximumThickness
				maximumThickness = instance.maximumThickness
				if (minimumThickness != undefined) instance.minimumThickness = minimumThickness?.instance || minimumThickness
				minimumThickness = instance.minimumThickness
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (priority != undefined) instance.priority = priority?.instance || priority
				priority = instance.priority
				if (refractionIntensity != undefined) instance.refractionIntensity = refractionIntensity?.instance || refractionIntensity
				refractionIntensity = instance.refractionIntensity
				if (refractionIntensityTexture != undefined) instance.refractionIntensityTexture = refractionIntensityTexture?.instance || refractionIntensityTexture
				refractionIntensityTexture = instance.refractionIntensityTexture
				if (refractionTexture != undefined) instance.refractionTexture = refractionTexture?.instance || refractionTexture
				refractionTexture = instance.refractionTexture
				if (registerForExtraEvents != undefined) instance.registerForExtraEvents = registerForExtraEvents?.instance || registerForExtraEvents
				registerForExtraEvents = instance.registerForExtraEvents
				if (thicknessTexture != undefined) instance.thicknessTexture = thicknessTexture?.instance || thicknessTexture
				thicknessTexture = instance.thicknessTexture
				if (tintColor != undefined) instance.tintColor = tintColor?.instance || tintColor
				tintColor = instance.tintColor
				if (tintColorAtDistance != undefined) instance.tintColorAtDistance = tintColorAtDistance?.instance || tintColorAtDistance
				tintColorAtDistance = instance.tintColorAtDistance
				if (translucencyIntensity != undefined) instance.translucencyIntensity = translucencyIntensity?.instance || translucencyIntensity
				translucencyIntensity = instance.translucencyIntensity
				if (translucencyIntensityTexture != undefined) instance.translucencyIntensityTexture = translucencyIntensityTexture?.instance || translucencyIntensityTexture
				translucencyIntensityTexture = instance.translucencyIntensityTexture
				if (useAlbedoToTintRefraction != undefined) instance.useAlbedoToTintRefraction = useAlbedoToTintRefraction?.instance || useAlbedoToTintRefraction
				useAlbedoToTintRefraction = instance.useAlbedoToTintRefraction
				if (useAlbedoToTintTranslucency != undefined) instance.useAlbedoToTintTranslucency = useAlbedoToTintTranslucency?.instance || useAlbedoToTintTranslucency
				useAlbedoToTintTranslucency = instance.useAlbedoToTintTranslucency
				if (useGltfStyleTextures != undefined) instance.useGltfStyleTextures = useGltfStyleTextures?.instance || useGltfStyleTextures
				useGltfStyleTextures = instance.useGltfStyleTextures
				if (useMaskFromThicknessTexture != undefined) instance.useMaskFromThicknessTexture = useMaskFromThicknessTexture?.instance || useMaskFromThicknessTexture
				useMaskFromThicknessTexture = instance.useMaskFromThicknessTexture
				if (useThicknessAsDepth != undefined) instance.useThicknessAsDepth = useThicknessAsDepth?.instance || useThicknessAsDepth
				useThicknessAsDepth = instance.useThicknessAsDepth

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

			