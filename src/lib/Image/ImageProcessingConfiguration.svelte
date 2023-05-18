
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					colorCurves  
					onUpdateParameters  
					vignetteCameraFov  
					vignetteCenterX  
					vignetteCenterY  
					vignetteColor  
					vignetteStretch  
					vignetteWeight  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ImageProcessingConfiguration() : {}

				// ================ ACCESSORS ================

				
				export let applyByPostProcess = undefined // [boolean] 
				// 
				

				export let colorCurvesEnabled = undefined // [boolean] 
				// 
				

				export let colorGradingBGR = undefined // [boolean] 
				// 
				

				export let colorGradingEnabled = undefined // [boolean] 
				// 
				

				export let colorGradingTexture = undefined // [nullable] 
				// 
				

				export let colorGradingWithGreenDepth = undefined // [boolean] 
				// 
				

				export let contrast = undefined // [number] 
				// 
				

				export let ditheringEnabled = undefined // [boolean] 
				// 
				

				export let ditheringIntensity = undefined // [number] 
				// 
				

				export let exposure = undefined // [number] 
				// 
				

				export let isEnabled = undefined // [boolean] 
				// 
				

				export let skipFinalColorClamp = undefined // [boolean] 
				// 
				

				export let toneMappingEnabled = undefined // [boolean] 
				// 
				

				export let toneMappingType = undefined // [number] 
				// 
				

				export let vignetteBlendMode = undefined // [number] 
				// 
				

				export let vignetteCentreX = undefined // [number] 
				// 
				

				export let vignetteCentreY = undefined // [number] 
				// 
				

				export let vignetteEnabled = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let colorCurves = undefined // [nullable] 
				// color curves setup used in the effect if colorcurvesenabled is set to true
				

				export let onUpdateParameters = undefined // [observable] 
				// an event triggered when the configuration changes and requires shader to update some parameters.
				

				export let vignetteCameraFov = undefined // [number] 
				// camera field of view used by the vignette effect.
				

				export let vignetteCenterX = undefined // [number] 
				// vignette center x offset.
				

				export let vignetteCenterY = undefined // [number] 
				// vignette center y offset.
				

				export let vignetteColor = undefined // [color4] 
				// color of the vignette applied on the screen through the chosen blend mode (vignetteblendmode)if vignetteenabled is set to true.
				

				export let vignetteStretch = undefined // [number] 
				// vignette stretch size.
				

				export let vignetteWeight = undefined // [number] 
				// vignette weight or intensity of the vignette effect.
				

				// ================ METHODS ================

				
				export let bind = (...args) => instance.bind(...args)

				export let clone = (...args) => instance.clone(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let prepareDefines = (...args) => instance.prepareDefines(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let PrepareSamplers = (...args) => instance.PrepareSamplers(...args)

				export let PrepareUniforms = (...args) => instance.PrepareUniforms(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ImageProcessingConfiguration]`, ...args) : null

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

												if (applyByPostProcess != undefined) instance.applyByPostProcess = applyByPostProcess?.instance || applyByPostProcess
				applyByPostProcess = instance.applyByPostProcess
				if (colorCurvesEnabled != undefined) instance.colorCurvesEnabled = colorCurvesEnabled?.instance || colorCurvesEnabled
				colorCurvesEnabled = instance.colorCurvesEnabled
				if (colorGradingBGR != undefined) instance.colorGradingBGR = colorGradingBGR?.instance || colorGradingBGR
				colorGradingBGR = instance.colorGradingBGR
				if (colorGradingEnabled != undefined) instance.colorGradingEnabled = colorGradingEnabled?.instance || colorGradingEnabled
				colorGradingEnabled = instance.colorGradingEnabled
				if (colorGradingTexture != undefined) instance.colorGradingTexture = colorGradingTexture?.instance || colorGradingTexture
				colorGradingTexture = instance.colorGradingTexture
				if (colorGradingWithGreenDepth != undefined) instance.colorGradingWithGreenDepth = colorGradingWithGreenDepth?.instance || colorGradingWithGreenDepth
				colorGradingWithGreenDepth = instance.colorGradingWithGreenDepth
				if (contrast != undefined) instance.contrast = contrast?.instance || contrast
				contrast = instance.contrast
				if (ditheringEnabled != undefined) instance.ditheringEnabled = ditheringEnabled?.instance || ditheringEnabled
				ditheringEnabled = instance.ditheringEnabled
				if (ditheringIntensity != undefined) instance.ditheringIntensity = ditheringIntensity?.instance || ditheringIntensity
				ditheringIntensity = instance.ditheringIntensity
				if (exposure != undefined) instance.exposure = exposure?.instance || exposure
				exposure = instance.exposure
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled
				if (skipFinalColorClamp != undefined) instance.skipFinalColorClamp = skipFinalColorClamp?.instance || skipFinalColorClamp
				skipFinalColorClamp = instance.skipFinalColorClamp
				if (toneMappingEnabled != undefined) instance.toneMappingEnabled = toneMappingEnabled?.instance || toneMappingEnabled
				toneMappingEnabled = instance.toneMappingEnabled
				if (toneMappingType != undefined) instance.toneMappingType = toneMappingType?.instance || toneMappingType
				toneMappingType = instance.toneMappingType
				if (vignetteBlendMode != undefined) instance.vignetteBlendMode = vignetteBlendMode?.instance || vignetteBlendMode
				vignetteBlendMode = instance.vignetteBlendMode
				if (vignetteCentreX != undefined) instance.vignetteCentreX = vignetteCentreX?.instance || vignetteCentreX
				vignetteCentreX = instance.vignetteCentreX
				if (vignetteCentreY != undefined) instance.vignetteCentreY = vignetteCentreY?.instance || vignetteCentreY
				vignetteCentreY = instance.vignetteCentreY
				if (vignetteEnabled != undefined) instance.vignetteEnabled = vignetteEnabled?.instance || vignetteEnabled
				vignetteEnabled = instance.vignetteEnabled
				if (colorCurves != undefined) instance.colorCurves = colorCurves?.instance || colorCurves
				colorCurves = instance.colorCurves
				if (onUpdateParameters != undefined) instance.onUpdateParameters = onUpdateParameters?.instance || onUpdateParameters
				onUpdateParameters = instance.onUpdateParameters
				if (vignetteCameraFov != undefined) instance.vignetteCameraFov = vignetteCameraFov?.instance || vignetteCameraFov
				vignetteCameraFov = instance.vignetteCameraFov
				if (vignetteCenterX != undefined) instance.vignetteCenterX = vignetteCenterX?.instance || vignetteCenterX
				vignetteCenterX = instance.vignetteCenterX
				if (vignetteCenterY != undefined) instance.vignetteCenterY = vignetteCenterY?.instance || vignetteCenterY
				vignetteCenterY = instance.vignetteCenterY
				if (vignetteColor != undefined) instance.vignetteColor = vignetteColor?.instance || vignetteColor
				vignetteColor = instance.vignetteColor
				if (vignetteStretch != undefined) instance.vignetteStretch = vignetteStretch?.instance || vignetteStretch
				vignetteStretch = instance.vignetteStretch
				if (vignetteWeight != undefined) instance.vignetteWeight = vignetteWeight?.instance || vignetteWeight
				vignetteWeight = instance.vignetteWeight

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

			