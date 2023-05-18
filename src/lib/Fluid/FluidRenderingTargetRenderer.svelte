
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required
					camera   
					density  
					dirLight  
					fluidColor  
					fresnelClamp  
					minimumThickness  
					refractionStrength  
					specularPower  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// scene used to render the fluid object into
				

				export let camera = undefined // [camera] 
				// camera used to render the fluid object. if not provided, use the active camera of the scene instead
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FluidRenderingTargetRenderer(scene,camera) : {}

				// ================ ACCESSORS ================

				
				export let blurDepthDepthScale = undefined // [number] 
				// 
				

				export let blurDepthFilterSize = undefined // [number] 
				// 
				

				export let blurDepthMaxFilterSize = undefined // [number] 
				// 
				

				export let blurDepthNumIterations = undefined // [number] 
				// 
				

				export let blurDepthSizeDivisor = undefined // [number] 
				// 
				

				export let blurThicknessFilterSize = undefined // [number] 
				// 
				

				export let blurThicknessNumIterations = undefined // [number] 
				// 
				

				export let blurThicknessSizeDivisor = undefined // [number] 
				// 
				

				export let debug = undefined // [boolean] 
				// 
				

				export let debugFeature = undefined // [fluidrenderingdebug] 
				// 
				

				export let depthMapSize = undefined // [nullable] 
				// 
				

				export let diffuseMapSize = undefined // [nullable] 
				// 
				

				export let enableBlurDepth = undefined // [boolean] 
				// 
				

				export let enableBlurThickness = undefined // [boolean] 
				// 
				

				export let environmentMap = undefined // [union] 
				// 
				

				export let generateDiffuseTexture = undefined // [boolean] 
				// 
				

				export let needInitialization = undefined // [boolean] 
				// 
				

				export let samples = undefined // [number] 
				// 
				

				export let thicknessMapSize = undefined // [nullable] 
				// 
				

				export let useFixedThickness = undefined // [boolean] 
				// 
				

				export let useVelocity = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let density = undefined // [number] 
				// density of the fluid (positive number). the higher the value, the more opaque the fluid.
				

				export let dirLight = undefined // [vector3] 
				// direction of the light. the fluid is assumed to be lit by a directional light
				

				export let fluidColor = undefined // [color3] 
				// fluid color. not used if generatediffusetexture is true
				

				export let fresnelClamp = undefined // [number] 
				// strength of the fresnel effect (value between 0 and 1). lower the value if you want to soften the specular effect
				

				export let minimumThickness = undefined // [number] 
				// minimum thickness of the particles (positive number). if usefixedthickness is true, minimumthickness is the thickness used
				

				export let refractionStrength = undefined // [number] 
				// strength of the refraction (positive number, but generally between 0 and 0.3).
				

				export let specularPower = undefined // [number] 
				// strength of the specular power (positive number). increase the value to make the specular effect more concentrated
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FluidRenderingTargetRenderer]`, ...args) : null

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

												if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (blurDepthDepthScale != undefined) instance.blurDepthDepthScale = blurDepthDepthScale?.instance || blurDepthDepthScale
				blurDepthDepthScale = instance.blurDepthDepthScale
				if (blurDepthFilterSize != undefined) instance.blurDepthFilterSize = blurDepthFilterSize?.instance || blurDepthFilterSize
				blurDepthFilterSize = instance.blurDepthFilterSize
				if (blurDepthMaxFilterSize != undefined) instance.blurDepthMaxFilterSize = blurDepthMaxFilterSize?.instance || blurDepthMaxFilterSize
				blurDepthMaxFilterSize = instance.blurDepthMaxFilterSize
				if (blurDepthNumIterations != undefined) instance.blurDepthNumIterations = blurDepthNumIterations?.instance || blurDepthNumIterations
				blurDepthNumIterations = instance.blurDepthNumIterations
				if (blurDepthSizeDivisor != undefined) instance.blurDepthSizeDivisor = blurDepthSizeDivisor?.instance || blurDepthSizeDivisor
				blurDepthSizeDivisor = instance.blurDepthSizeDivisor
				if (blurThicknessFilterSize != undefined) instance.blurThicknessFilterSize = blurThicknessFilterSize?.instance || blurThicknessFilterSize
				blurThicknessFilterSize = instance.blurThicknessFilterSize
				if (blurThicknessNumIterations != undefined) instance.blurThicknessNumIterations = blurThicknessNumIterations?.instance || blurThicknessNumIterations
				blurThicknessNumIterations = instance.blurThicknessNumIterations
				if (blurThicknessSizeDivisor != undefined) instance.blurThicknessSizeDivisor = blurThicknessSizeDivisor?.instance || blurThicknessSizeDivisor
				blurThicknessSizeDivisor = instance.blurThicknessSizeDivisor
				if (debug != undefined) instance.debug = debug?.instance || debug
				debug = instance.debug
				if (debugFeature != undefined) instance.debugFeature = debugFeature?.instance || debugFeature
				debugFeature = instance.debugFeature
				if (depthMapSize != undefined) instance.depthMapSize = depthMapSize?.instance || depthMapSize
				depthMapSize = instance.depthMapSize
				if (diffuseMapSize != undefined) instance.diffuseMapSize = diffuseMapSize?.instance || diffuseMapSize
				diffuseMapSize = instance.diffuseMapSize
				if (enableBlurDepth != undefined) instance.enableBlurDepth = enableBlurDepth?.instance || enableBlurDepth
				enableBlurDepth = instance.enableBlurDepth
				if (enableBlurThickness != undefined) instance.enableBlurThickness = enableBlurThickness?.instance || enableBlurThickness
				enableBlurThickness = instance.enableBlurThickness
				if (environmentMap != undefined) instance.environmentMap = environmentMap?.instance || environmentMap
				environmentMap = instance.environmentMap
				if (generateDiffuseTexture != undefined) instance.generateDiffuseTexture = generateDiffuseTexture?.instance || generateDiffuseTexture
				generateDiffuseTexture = instance.generateDiffuseTexture

				needInitialization = instance.needInitialization
				if (samples != undefined) instance.samples = samples?.instance || samples
				samples = instance.samples
				if (thicknessMapSize != undefined) instance.thicknessMapSize = thicknessMapSize?.instance || thicknessMapSize
				thicknessMapSize = instance.thicknessMapSize
				if (useFixedThickness != undefined) instance.useFixedThickness = useFixedThickness?.instance || useFixedThickness
				useFixedThickness = instance.useFixedThickness
				if (useVelocity != undefined) instance.useVelocity = useVelocity?.instance || useVelocity
				useVelocity = instance.useVelocity
				if (density != undefined) instance.density = density?.instance || density
				density = instance.density
				if (dirLight != undefined) instance.dirLight = dirLight?.instance || dirLight
				dirLight = instance.dirLight
				if (fluidColor != undefined) instance.fluidColor = fluidColor?.instance || fluidColor
				fluidColor = instance.fluidColor
				if (fresnelClamp != undefined) instance.fresnelClamp = fresnelClamp?.instance || fresnelClamp
				fresnelClamp = instance.fresnelClamp
				if (minimumThickness != undefined) instance.minimumThickness = minimumThickness?.instance || minimumThickness
				minimumThickness = instance.minimumThickness
				if (refractionStrength != undefined) instance.refractionStrength = refractionStrength?.instance || refractionStrength
				refractionStrength = instance.refractionStrength
				if (specularPower != undefined) instance.specularPower = specularPower?.instance || specularPower
				specularPower = instance.specularPower

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

			