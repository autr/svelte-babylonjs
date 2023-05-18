
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					scene  * required
					ratio  * required
					originalPostProcess  
					cameras   
					animations  
					blurHPostProcesses  
					blurVPostProcesses  
					blurWidth  
					brightPassPostProcess  
					brightThreshold  
					depthOfFieldBlurWidth  
					depthOfFieldDistance  
					depthOfFieldPostProcess  
					downSampleX4PostProcess  
					fxaaPostProcess  
					hdrDecreaseRate  
					hdrFinalPostProcess  
					hdrIncreaseRate  
					hdrMinimumLuminance  
					hdrPostProcess  
					horizontalBlur  
					inspectableCustomProperties  
					lensColorTexture  
					lensFlareBlurWidth  
					lensFlareComposePostProcess  
					lensFlareDirtTexture  
					lensFlareDistortionStrength  
					lensFlareFinalPostProcess  
					lensFlareGhostDispersal  
					lensFlareHaloWidth  
					lensFlarePostProcess  
					lensFlareStrength  
					lensStarTexture  
					lensTexture  
					luminanceDownSamplePostProcesses  
					luminancePostProcess  
					motionBlurPostProcess  
					screenSpaceReflectionPostProcess  
					sourceLight  
					textureAdderFinalPostProcess  
					textureAdderPostProcess  
					volumetricLightBlurScale  
					volumetricLightCoefficient  
					volumetricLightFinalPostProcess  
					volumetricLightMergePostProces  
					volumetricLightPostProcess  
					volumetricLightPower  
					volumetricLightSmoothXPostProcess  
					volumetricLightSmoothYPostProcess  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// the rendering pipeline name
				

				export let scene = undefined // [scene] * required
				// the scene linked to this pipeline
				

				export let ratio = undefined // [number] * required
				// the size of the postprocesses (0.5 means that your postprocess will have a width = canvas.width 0.5 and a height = canvas.height 0.5)
				

				export let originalPostProcess = undefined // [nullable] 
				// the custom original color post-process. must be "reusable". can be null.
				

				export let cameras = undefined // [array] 
				// the array of cameras that the rendering pipeline will be attached to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.StandardRenderingPipeline(name,scene,ratio,originalPostProcess,cameras) : {}

				// ================ ACCESSORS ================

				
				export let BloomEnabled = undefined // [] 
				// 
				

				export let DepthOfFieldEnabled = undefined // [] 
				// 
				

				export let HDREnabled = undefined // [] 
				// 
				

				export let LensFlareEnabled = undefined // [] 
				// 
				

				export let MotionBlurEnabled = undefined // [] 
				// 
				

				export let VLSEnabled = undefined // [] 
				// 
				

				export let exposure = undefined // [number] 
				// 
				

				export let fxaaEnabled = undefined // [boolean] 
				// 
				

				export let hdrAutoExposure = undefined // [boolean] 
				// 
				

				export let isSupported = undefined // [boolean] 
				// 
				

				export let motionBlurSamples = undefined // [number] 
				// 
				

				export let motionStrength = undefined // [number] 
				// 
				

				export let objectBasedMotionBlur = undefined // [boolean] 
				// 
				

				export let samples = undefined // [number] 
				// 
				

				export let screenSpaceReflectionsEnabled = undefined // [boolean] 
				// 
				

				export let volumetricLightStepsCount = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let animations = undefined // [array] 
				// list of animations for the pipeline (ianimatable implementation)
				

				export let blurHPostProcesses = undefined // [array] 
				// post-process array storing all the horizontal blur post-processes used by the pipeline
				

				export let blurVPostProcesses = undefined // [array] 
				// post-process array storing all the vertical blur post-processes used by the pipeline
				

				export let blurWidth = undefined // [number] 
				// configures the blur intensity used for surexposed surfaces are highlighted surfaces (light halo)
				

				export let brightPassPostProcess = undefined // [nullable] 
				// post-process used to calculate the illuminated surfaces controlled by a threshold
				

				export let brightThreshold = undefined // [number] 
				// represents the brightness threshold in order to configure the illuminated surfaces
				

				export let depthOfFieldBlurWidth = undefined // [number] 
				// represents the blur intensity for the blurred part of the depth of field effect
				

				export let depthOfFieldDistance = undefined // [number] 
				// represents the focal length for the depth of field effect
				

				export let depthOfFieldPostProcess = undefined // [nullable] 
				// post-process used to create a depth of field effect
				

				export let downSampleX4PostProcess = undefined // [nullable] 
				// post-process used to down scale an image x4
				

				export let fxaaPostProcess = undefined // [nullable] 
				// the fast approximate anti-aliasing post process which attempts to remove aliasing from an image.
				

				export let hdrDecreaseRate = undefined // [number] 
				// for eye adaptation, represents the decrease luminance speed
				

				export let hdrFinalPostProcess = undefined // [nullable] 
				// post-process used to merge the final hdr post-process and the real scene color
				

				export let hdrIncreaseRate = undefined // [number] 
				// for eye adaptation, represents the increase luminance speed
				

				export let hdrMinimumLuminance = undefined // [number] 
				// for eye adaptation, represents the minimum luminance the eye can see
				

				export let hdrPostProcess = undefined // [nullable] 
				// post-process used to create a hdr effect (light adaptation)
				

				export let horizontalBlur = undefined // [boolean] 
				// sets if the blur for highlighted surfaces must be only horizontal
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let lensColorTexture = undefined // [nullable] 
				// lens color texture used by the lens flare effect. mandatory if lens flare effect enabled
				

				export let lensFlareBlurWidth = undefined // [number] 
				// configures the blur intensity used for for lens flare (halo)
				

				export let lensFlareComposePostProcess = undefined // [nullable] 
				// post-process that merges the result of the lens flare post-process and the real scene color
				

				export let lensFlareDirtTexture = undefined // [nullable] 
				// as the "lenstexture" (can be the same texture or different), it is used to apply the lensflare effect by taking account of the dirt texture
				

				export let lensFlareDistortionStrength = undefined // [number] 
				// based on the lens distortion effect, defines how much the lens flare resultis distorted
				

				export let lensFlareFinalPostProcess = undefined // [nullable] 
				// post-process used to store the final lens flare post-process (attach/detach for debug purpose)
				

				export let lensFlareGhostDispersal = undefined // [number] 
				// dispersion coefficient for lens flare ghosts
				

				export let lensFlareHaloWidth = undefined // [number] 
				// main lens flare halo width
				

				export let lensFlarePostProcess = undefined // [nullable] 
				// post-process used to create a lens flare effect
				

				export let lensFlareStrength = undefined // [number] 
				// the overall strength for the lens flare effect
				

				export let lensStarTexture = undefined // [nullable] 
				// lens star texture must be used to simulate rays on the flares and is availablein the documentation
				

				export let lensTexture = undefined // [nullable] 
				// texture used typically to simulate "dirty" on camera lens
				

				export let luminanceDownSamplePostProcesses = undefined // [array] 
				// post-processes used to create down sample post-processes in order to getthe average luminance of the final image for hdrarray of length "standardrenderingpipeline.luminancesteps"
				

				export let luminancePostProcess = undefined // [nullable] 
				// base post-process used to calculate the average luminance of the final image for hdr
				

				export let motionBlurPostProcess = undefined // [nullable] 
				// post-process used to create a motion blur effect
				

				export let screenSpaceReflectionPostProcess = undefined // [nullable] 
				// post-process used to simulate realtime reflections using the screen space and geometry renderer.
				

				export let sourceLight = undefined // [nullable] 
				// light (spot or directional) used to generate the volumetric lights raysthe source light must have a shadow generate so the pipeline can get itsdepth map
				

				export let textureAdderFinalPostProcess = undefined // [nullable] 
				// post-process used to store the final texture adder post-process (attach/detach for debug purpose)
				

				export let textureAdderPostProcess = undefined // [nullable] 
				// post-process used to add colors of 2 textures (typically brightness + real scene color)
				

				export let volumetricLightBlurScale = undefined // [number] 
				// used the set the blur intensity to smooth the volumetric lights
				

				export let volumetricLightCoefficient = undefined // [number] 
				// represents the offset coefficient based on rayleigh principle. typically in interval [-0.2, 0.2]
				

				export let volumetricLightFinalPostProcess = undefined // [nullable] 
				// post-process used to store the final volumetric light post-process (attach/detach for debug purpose)
				

				export let volumetricLightMergePostProces = undefined // [nullable] 
				// post-process used to merge the volumetric light effect and the real scene color
				

				export let volumetricLightPostProcess = undefined // [nullable] 
				// post-process used to create volumetric lighting effect
				

				export let volumetricLightPower = undefined // [number] 
				// the overall power of volumetric lights, typically in interval [0, 10] maximum
				

				export let volumetricLightSmoothXPostProcess = undefined // [nullable] 
				// post-process used to smooth the previous volumetric light post-process on the x axis
				

				export let volumetricLightSmoothYPostProcess = undefined // [nullable] 
				// post-process used to smooth the previous volumetric light post-process on the y axis
				

				// ================ METHODS ================

				
				export let addEffect = (...args) => instance.addEffect(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setPrePassRenderer = (...args) => instance.setPrePassRenderer(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:StandardRenderingPipeline]`, ...args) : null

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

												if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (ratio != undefined) instance.ratio = ratio?.instance || ratio
				ratio = instance.ratio
				if (originalPostProcess != undefined) instance.originalPostProcess = originalPostProcess?.instance || originalPostProcess
				originalPostProcess = instance.originalPostProcess
				if (cameras != undefined) instance.cameras = cameras?.instance || cameras
				cameras = instance.cameras
				if (BloomEnabled != undefined) instance.BloomEnabled = BloomEnabled?.instance || BloomEnabled
				BloomEnabled = instance.BloomEnabled
				if (DepthOfFieldEnabled != undefined) instance.DepthOfFieldEnabled = DepthOfFieldEnabled?.instance || DepthOfFieldEnabled
				DepthOfFieldEnabled = instance.DepthOfFieldEnabled
				if (HDREnabled != undefined) instance.HDREnabled = HDREnabled?.instance || HDREnabled
				HDREnabled = instance.HDREnabled
				if (LensFlareEnabled != undefined) instance.LensFlareEnabled = LensFlareEnabled?.instance || LensFlareEnabled
				LensFlareEnabled = instance.LensFlareEnabled
				if (MotionBlurEnabled != undefined) instance.MotionBlurEnabled = MotionBlurEnabled?.instance || MotionBlurEnabled
				MotionBlurEnabled = instance.MotionBlurEnabled
				if (VLSEnabled != undefined) instance.VLSEnabled = VLSEnabled?.instance || VLSEnabled
				VLSEnabled = instance.VLSEnabled
				if (exposure != undefined) instance.exposure = exposure?.instance || exposure
				exposure = instance.exposure
				if (fxaaEnabled != undefined) instance.fxaaEnabled = fxaaEnabled?.instance || fxaaEnabled
				fxaaEnabled = instance.fxaaEnabled
				if (hdrAutoExposure != undefined) instance.hdrAutoExposure = hdrAutoExposure?.instance || hdrAutoExposure
				hdrAutoExposure = instance.hdrAutoExposure

				isSupported = instance.isSupported
				if (motionBlurSamples != undefined) instance.motionBlurSamples = motionBlurSamples?.instance || motionBlurSamples
				motionBlurSamples = instance.motionBlurSamples
				if (motionStrength != undefined) instance.motionStrength = motionStrength?.instance || motionStrength
				motionStrength = instance.motionStrength
				if (objectBasedMotionBlur != undefined) instance.objectBasedMotionBlur = objectBasedMotionBlur?.instance || objectBasedMotionBlur
				objectBasedMotionBlur = instance.objectBasedMotionBlur
				if (samples != undefined) instance.samples = samples?.instance || samples
				samples = instance.samples
				if (screenSpaceReflectionsEnabled != undefined) instance.screenSpaceReflectionsEnabled = screenSpaceReflectionsEnabled?.instance || screenSpaceReflectionsEnabled
				screenSpaceReflectionsEnabled = instance.screenSpaceReflectionsEnabled
				if (volumetricLightStepsCount != undefined) instance.volumetricLightStepsCount = volumetricLightStepsCount?.instance || volumetricLightStepsCount
				volumetricLightStepsCount = instance.volumetricLightStepsCount
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (blurHPostProcesses != undefined) instance.blurHPostProcesses = blurHPostProcesses?.instance || blurHPostProcesses
				blurHPostProcesses = instance.blurHPostProcesses
				if (blurVPostProcesses != undefined) instance.blurVPostProcesses = blurVPostProcesses?.instance || blurVPostProcesses
				blurVPostProcesses = instance.blurVPostProcesses
				if (blurWidth != undefined) instance.blurWidth = blurWidth?.instance || blurWidth
				blurWidth = instance.blurWidth
				if (brightPassPostProcess != undefined) instance.brightPassPostProcess = brightPassPostProcess?.instance || brightPassPostProcess
				brightPassPostProcess = instance.brightPassPostProcess
				if (brightThreshold != undefined) instance.brightThreshold = brightThreshold?.instance || brightThreshold
				brightThreshold = instance.brightThreshold
				if (depthOfFieldBlurWidth != undefined) instance.depthOfFieldBlurWidth = depthOfFieldBlurWidth?.instance || depthOfFieldBlurWidth
				depthOfFieldBlurWidth = instance.depthOfFieldBlurWidth
				if (depthOfFieldDistance != undefined) instance.depthOfFieldDistance = depthOfFieldDistance?.instance || depthOfFieldDistance
				depthOfFieldDistance = instance.depthOfFieldDistance
				if (depthOfFieldPostProcess != undefined) instance.depthOfFieldPostProcess = depthOfFieldPostProcess?.instance || depthOfFieldPostProcess
				depthOfFieldPostProcess = instance.depthOfFieldPostProcess
				if (downSampleX4PostProcess != undefined) instance.downSampleX4PostProcess = downSampleX4PostProcess?.instance || downSampleX4PostProcess
				downSampleX4PostProcess = instance.downSampleX4PostProcess
				if (fxaaPostProcess != undefined) instance.fxaaPostProcess = fxaaPostProcess?.instance || fxaaPostProcess
				fxaaPostProcess = instance.fxaaPostProcess
				if (hdrDecreaseRate != undefined) instance.hdrDecreaseRate = hdrDecreaseRate?.instance || hdrDecreaseRate
				hdrDecreaseRate = instance.hdrDecreaseRate
				if (hdrFinalPostProcess != undefined) instance.hdrFinalPostProcess = hdrFinalPostProcess?.instance || hdrFinalPostProcess
				hdrFinalPostProcess = instance.hdrFinalPostProcess
				if (hdrIncreaseRate != undefined) instance.hdrIncreaseRate = hdrIncreaseRate?.instance || hdrIncreaseRate
				hdrIncreaseRate = instance.hdrIncreaseRate
				if (hdrMinimumLuminance != undefined) instance.hdrMinimumLuminance = hdrMinimumLuminance?.instance || hdrMinimumLuminance
				hdrMinimumLuminance = instance.hdrMinimumLuminance
				if (hdrPostProcess != undefined) instance.hdrPostProcess = hdrPostProcess?.instance || hdrPostProcess
				hdrPostProcess = instance.hdrPostProcess
				if (horizontalBlur != undefined) instance.horizontalBlur = horizontalBlur?.instance || horizontalBlur
				horizontalBlur = instance.horizontalBlur
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (lensColorTexture != undefined) instance.lensColorTexture = lensColorTexture?.instance || lensColorTexture
				lensColorTexture = instance.lensColorTexture
				if (lensFlareBlurWidth != undefined) instance.lensFlareBlurWidth = lensFlareBlurWidth?.instance || lensFlareBlurWidth
				lensFlareBlurWidth = instance.lensFlareBlurWidth
				if (lensFlareComposePostProcess != undefined) instance.lensFlareComposePostProcess = lensFlareComposePostProcess?.instance || lensFlareComposePostProcess
				lensFlareComposePostProcess = instance.lensFlareComposePostProcess
				if (lensFlareDirtTexture != undefined) instance.lensFlareDirtTexture = lensFlareDirtTexture?.instance || lensFlareDirtTexture
				lensFlareDirtTexture = instance.lensFlareDirtTexture
				if (lensFlareDistortionStrength != undefined) instance.lensFlareDistortionStrength = lensFlareDistortionStrength?.instance || lensFlareDistortionStrength
				lensFlareDistortionStrength = instance.lensFlareDistortionStrength
				if (lensFlareFinalPostProcess != undefined) instance.lensFlareFinalPostProcess = lensFlareFinalPostProcess?.instance || lensFlareFinalPostProcess
				lensFlareFinalPostProcess = instance.lensFlareFinalPostProcess
				if (lensFlareGhostDispersal != undefined) instance.lensFlareGhostDispersal = lensFlareGhostDispersal?.instance || lensFlareGhostDispersal
				lensFlareGhostDispersal = instance.lensFlareGhostDispersal
				if (lensFlareHaloWidth != undefined) instance.lensFlareHaloWidth = lensFlareHaloWidth?.instance || lensFlareHaloWidth
				lensFlareHaloWidth = instance.lensFlareHaloWidth
				if (lensFlarePostProcess != undefined) instance.lensFlarePostProcess = lensFlarePostProcess?.instance || lensFlarePostProcess
				lensFlarePostProcess = instance.lensFlarePostProcess
				if (lensFlareStrength != undefined) instance.lensFlareStrength = lensFlareStrength?.instance || lensFlareStrength
				lensFlareStrength = instance.lensFlareStrength
				if (lensStarTexture != undefined) instance.lensStarTexture = lensStarTexture?.instance || lensStarTexture
				lensStarTexture = instance.lensStarTexture
				if (lensTexture != undefined) instance.lensTexture = lensTexture?.instance || lensTexture
				lensTexture = instance.lensTexture
				if (luminanceDownSamplePostProcesses != undefined) instance.luminanceDownSamplePostProcesses = luminanceDownSamplePostProcesses?.instance || luminanceDownSamplePostProcesses
				luminanceDownSamplePostProcesses = instance.luminanceDownSamplePostProcesses
				if (luminancePostProcess != undefined) instance.luminancePostProcess = luminancePostProcess?.instance || luminancePostProcess
				luminancePostProcess = instance.luminancePostProcess
				if (motionBlurPostProcess != undefined) instance.motionBlurPostProcess = motionBlurPostProcess?.instance || motionBlurPostProcess
				motionBlurPostProcess = instance.motionBlurPostProcess
				if (screenSpaceReflectionPostProcess != undefined) instance.screenSpaceReflectionPostProcess = screenSpaceReflectionPostProcess?.instance || screenSpaceReflectionPostProcess
				screenSpaceReflectionPostProcess = instance.screenSpaceReflectionPostProcess
				if (sourceLight != undefined) instance.sourceLight = sourceLight?.instance || sourceLight
				sourceLight = instance.sourceLight
				if (textureAdderFinalPostProcess != undefined) instance.textureAdderFinalPostProcess = textureAdderFinalPostProcess?.instance || textureAdderFinalPostProcess
				textureAdderFinalPostProcess = instance.textureAdderFinalPostProcess
				if (textureAdderPostProcess != undefined) instance.textureAdderPostProcess = textureAdderPostProcess?.instance || textureAdderPostProcess
				textureAdderPostProcess = instance.textureAdderPostProcess
				if (volumetricLightBlurScale != undefined) instance.volumetricLightBlurScale = volumetricLightBlurScale?.instance || volumetricLightBlurScale
				volumetricLightBlurScale = instance.volumetricLightBlurScale
				if (volumetricLightCoefficient != undefined) instance.volumetricLightCoefficient = volumetricLightCoefficient?.instance || volumetricLightCoefficient
				volumetricLightCoefficient = instance.volumetricLightCoefficient
				if (volumetricLightFinalPostProcess != undefined) instance.volumetricLightFinalPostProcess = volumetricLightFinalPostProcess?.instance || volumetricLightFinalPostProcess
				volumetricLightFinalPostProcess = instance.volumetricLightFinalPostProcess
				if (volumetricLightMergePostProces != undefined) instance.volumetricLightMergePostProces = volumetricLightMergePostProces?.instance || volumetricLightMergePostProces
				volumetricLightMergePostProces = instance.volumetricLightMergePostProces
				if (volumetricLightPostProcess != undefined) instance.volumetricLightPostProcess = volumetricLightPostProcess?.instance || volumetricLightPostProcess
				volumetricLightPostProcess = instance.volumetricLightPostProcess
				if (volumetricLightPower != undefined) instance.volumetricLightPower = volumetricLightPower?.instance || volumetricLightPower
				volumetricLightPower = instance.volumetricLightPower
				if (volumetricLightSmoothXPostProcess != undefined) instance.volumetricLightSmoothXPostProcess = volumetricLightSmoothXPostProcess?.instance || volumetricLightSmoothXPostProcess
				volumetricLightSmoothXPostProcess = instance.volumetricLightSmoothXPostProcess
				if (volumetricLightSmoothYPostProcess != undefined) instance.volumetricLightSmoothYPostProcess = volumetricLightSmoothYPostProcess?.instance || volumetricLightSmoothYPostProcess
				volumetricLightSmoothYPostProcess = instance.volumetricLightSmoothYPostProcess

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

			