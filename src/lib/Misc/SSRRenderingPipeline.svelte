
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
					cameras  
					forceGeometryBuffer  
					textureType   
					SSRBlurRenderEffect  
					SSRCombineRenderEffect  
					SSRRenderEffect  
					blurQuality  
					inspectableCustomProperties  
					maxDistance  
					maxSteps  
					reflectionSpecularFalloffExponent  
					roughnessFactor  
					selfCollisionNumSkip  
					step  
					strength  
					thickness  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// the rendering pipeline name
				

				export let scene = undefined // [scene] * required
				// the scene linked to this pipeline
				

				export let cameras = undefined // [array] 
				// the array of cameras that the rendering pipeline will be attached to (default: scene.cameras)
				

				export let forceGeometryBuffer = undefined // [boolean] 
				// set to true if you want to use the legacy geometry buffer renderer (default: false)
				

				export let textureType = undefined // [number] 
				// the texture type used by the different post processes created by ssr (default: constants.texturetype_unsigned_byte)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SSRRenderingPipeline(name,scene,cameras,forceGeometryBuffer,textureType) : {}

				// ================ ACCESSORS ================

				
				export let attenuateBackfaceReflection = undefined // [boolean] 
				// 
				

				export let attenuateFacingCamera = undefined // [boolean] 
				// 
				

				export let attenuateIntersectionDistance = undefined // [boolean] 
				// 
				

				export let attenuateScreenBorders = undefined // [boolean] 
				// 
				

				export let backfaceDepthRenderer = undefined // [nullable] 
				// 
				

				export let backfaceDepthTextureSizeFactor = undefined // [number] 
				// 
				

				export let blurDispersionStrength = undefined // [number] 
				// 
				

				export let clipToFrustum = undefined // [boolean] 
				// 
				

				export let debug = undefined // [boolean] 
				// 
				

				export let enableAutomaticThicknessComputation = undefined // [boolean] 
				// 
				

				export let enableSmoothReflections = undefined // [boolean] 
				// 
				

				export let environmentTexture = undefined // [nullable] 
				// 
				

				export let environmentTextureIsProbe = undefined // [boolean] 
				// 
				

				export let isEnabled = undefined // [boolean] 
				// 
				

				export let isSupported = undefined // [boolean] 
				// 
				

				export let samples = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let SSRBlurRenderEffect = undefined // [string] 
				// the blur postprocess effect id in the pipeline
				

				export let SSRCombineRenderEffect = undefined // [string] 
				// the postprocess effect id in the pipeline that combines the ssr-blur output with the original scene color
				

				export let SSRRenderEffect = undefined // [string] 
				// the ssr postprocess effect id in the pipeline
				

				export let blurQuality = undefined // [number] 
				// apply different weighting when blurring.must be a value between 2 and 5
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let maxDistance = undefined // [number] 
				// gets or sets the maxdistance used to define how far we look for reflection during the ray-marching on the reflected ray (default: 1000).note that this value is a view (camera) space distance (not pixels!).
				

				export let maxSteps = undefined // [number] 
				// maximum number of steps during the ray marching process after which we consider an intersection could not be found (default: 1000)
				

				export let reflectionSpecularFalloffExponent = undefined // [number] 
				// gets or sets the falloff exponent used to compute the reflection strength. higher values lead to fainter reflections (default: 1).
				

				export let roughnessFactor = undefined // [number] 
				// gets or sets the factor applied when computing roughness. default value is 0.2.when blurring based on roughness is enabled (meaning blurdispersionstrength \> 0), roughnessfactor is used as a global roughness factor applied on all objects.if you want to disable this global roughness set it to 0.
				

				export let selfCollisionNumSkip = undefined // [number] 
				// number of steps to skip at start when marching the ray to avoid self collisions (default: 1)1 should normally be a good value, depending on the scene you may need to use a higher value (2 or 3)
				

				export let step = undefined // [number] 
				// gets or sets the step size used to iterate until the effect finds the color of the reflection's pixel. should be an integer \>= 1 as it is the number of pixels we advance at each step (default: 1).use higher values to improve performances (but at the expense of quality).
				

				export let strength = undefined // [number] 
				// gets or sets the current reflection strength. 1.0 is an ideal value but can be increased/decreased for particular results (default: 1).
				

				export let thickness = undefined // [number] 
				// gets or sets the thickness value used as tolerance when computing the intersection between the reflected ray and the scene (default: 0.5).if setting "enableautomaticthicknesscomputation" to true, you can use lower values for "thickness" (even 0), as the geometry thicknessis automatically computed thank to the regular depth buffer + the backface depth buffer
				

				// ================ METHODS ================

				
				export let addCamera = (...args) => instance.addCamera(...args)

				export let addEffect = (...args) => instance.addEffect(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let removeCamera = (...args) => instance.removeCamera(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setPrePassRenderer = (...args) => instance.setPrePassRenderer(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SSRRenderingPipeline]`, ...args) : null

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
				if (cameras != undefined) instance.cameras = cameras?.instance || cameras
				cameras = instance.cameras
				if (forceGeometryBuffer != undefined) instance.forceGeometryBuffer = forceGeometryBuffer?.instance || forceGeometryBuffer
				forceGeometryBuffer = instance.forceGeometryBuffer
				if (textureType != undefined) instance.textureType = textureType?.instance || textureType
				textureType = instance.textureType
				if (attenuateBackfaceReflection != undefined) instance.attenuateBackfaceReflection = attenuateBackfaceReflection?.instance || attenuateBackfaceReflection
				attenuateBackfaceReflection = instance.attenuateBackfaceReflection
				if (attenuateFacingCamera != undefined) instance.attenuateFacingCamera = attenuateFacingCamera?.instance || attenuateFacingCamera
				attenuateFacingCamera = instance.attenuateFacingCamera
				if (attenuateIntersectionDistance != undefined) instance.attenuateIntersectionDistance = attenuateIntersectionDistance?.instance || attenuateIntersectionDistance
				attenuateIntersectionDistance = instance.attenuateIntersectionDistance
				if (attenuateScreenBorders != undefined) instance.attenuateScreenBorders = attenuateScreenBorders?.instance || attenuateScreenBorders
				attenuateScreenBorders = instance.attenuateScreenBorders

				backfaceDepthRenderer = instance.backfaceDepthRenderer
				if (backfaceDepthTextureSizeFactor != undefined) instance.backfaceDepthTextureSizeFactor = backfaceDepthTextureSizeFactor?.instance || backfaceDepthTextureSizeFactor
				backfaceDepthTextureSizeFactor = instance.backfaceDepthTextureSizeFactor
				if (blurDispersionStrength != undefined) instance.blurDispersionStrength = blurDispersionStrength?.instance || blurDispersionStrength
				blurDispersionStrength = instance.blurDispersionStrength
				if (clipToFrustum != undefined) instance.clipToFrustum = clipToFrustum?.instance || clipToFrustum
				clipToFrustum = instance.clipToFrustum
				if (debug != undefined) instance.debug = debug?.instance || debug
				debug = instance.debug
				if (enableAutomaticThicknessComputation != undefined) instance.enableAutomaticThicknessComputation = enableAutomaticThicknessComputation?.instance || enableAutomaticThicknessComputation
				enableAutomaticThicknessComputation = instance.enableAutomaticThicknessComputation
				if (enableSmoothReflections != undefined) instance.enableSmoothReflections = enableSmoothReflections?.instance || enableSmoothReflections
				enableSmoothReflections = instance.enableSmoothReflections
				if (environmentTexture != undefined) instance.environmentTexture = environmentTexture?.instance || environmentTexture
				environmentTexture = instance.environmentTexture
				if (environmentTextureIsProbe != undefined) instance.environmentTextureIsProbe = environmentTextureIsProbe?.instance || environmentTextureIsProbe
				environmentTextureIsProbe = instance.environmentTextureIsProbe
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled

				isSupported = instance.isSupported
				if (samples != undefined) instance.samples = samples?.instance || samples
				samples = instance.samples
				if (SSRBlurRenderEffect != undefined) instance.SSRBlurRenderEffect = SSRBlurRenderEffect?.instance || SSRBlurRenderEffect
				SSRBlurRenderEffect = instance.SSRBlurRenderEffect
				if (SSRCombineRenderEffect != undefined) instance.SSRCombineRenderEffect = SSRCombineRenderEffect?.instance || SSRCombineRenderEffect
				SSRCombineRenderEffect = instance.SSRCombineRenderEffect
				if (SSRRenderEffect != undefined) instance.SSRRenderEffect = SSRRenderEffect?.instance || SSRRenderEffect
				SSRRenderEffect = instance.SSRRenderEffect
				if (blurQuality != undefined) instance.blurQuality = blurQuality?.instance || blurQuality
				blurQuality = instance.blurQuality
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (maxDistance != undefined) instance.maxDistance = maxDistance?.instance || maxDistance
				maxDistance = instance.maxDistance
				if (maxSteps != undefined) instance.maxSteps = maxSteps?.instance || maxSteps
				maxSteps = instance.maxSteps
				if (reflectionSpecularFalloffExponent != undefined) instance.reflectionSpecularFalloffExponent = reflectionSpecularFalloffExponent?.instance || reflectionSpecularFalloffExponent
				reflectionSpecularFalloffExponent = instance.reflectionSpecularFalloffExponent
				if (roughnessFactor != undefined) instance.roughnessFactor = roughnessFactor?.instance || roughnessFactor
				roughnessFactor = instance.roughnessFactor
				if (selfCollisionNumSkip != undefined) instance.selfCollisionNumSkip = selfCollisionNumSkip?.instance || selfCollisionNumSkip
				selfCollisionNumSkip = instance.selfCollisionNumSkip
				if (step != undefined) instance.step = step?.instance || step
				step = instance.step
				if (strength != undefined) instance.strength = strength?.instance || strength
				strength = instance.strength
				if (thickness != undefined) instance.thickness = thickness?.instance || thickness
				thickness = instance.thickness

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

			