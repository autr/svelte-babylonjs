
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  
					hdr  
					scene  
					cameras  
					automaticBuild   
					animations  
					chromaticAberration  
					depthOfField  
					fxaa  
					grain  
					imageProcessing  
					inspectableCustomProperties  
					onBuildObservable  
					sharpen  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] 
				// the rendering pipeline name (default: "")
				

				export let hdr = undefined // [boolean] 
				// if high dynamic range textures should be used (default: true)
				

				export let scene = undefined // [scene] 
				// the scene linked to this pipeline (default: the last created scene)
				

				export let cameras = undefined // [array] 
				// the array of cameras that the rendering pipeline will be attached to (default: scene.cameras)
				

				export let automaticBuild = undefined // [boolean] 
				// if false, you will have to manually call prepare() to update the pipeline (default: true)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.DefaultRenderingPipeline(name,hdr,scene,cameras,automaticBuild) : {}

				// ================ ACCESSORS ================

				
				export let bloomEnabled = undefined // [boolean] 
				// 
				

				export let bloomKernel = undefined // [number] 
				// 
				

				export let bloomScale = undefined // [number] 
				// 
				

				export let bloomThreshold = undefined // [number] 
				// 
				

				export let bloomWeight = undefined // [number] 
				// 
				

				export let chromaticAberrationEnabled = undefined // [boolean] 
				// 
				

				export let depthOfFieldBlurLevel = undefined // [depthoffieldeffectblurlevel] 
				// 
				

				export let depthOfFieldEnabled = undefined // [boolean] 
				// 
				

				export let fxaaEnabled = undefined // [boolean] 
				// 
				

				export let glowLayer = undefined // [nullable] 
				// 
				

				export let glowLayerEnabled = undefined // [boolean] 
				// 
				

				export let grainEnabled = undefined // [boolean] 
				// 
				

				export let imageProcessingEnabled = undefined // [boolean] 
				// 
				

				export let isSupported = undefined // [boolean] 
				// 
				

				export let samples = undefined // [number] 
				// 
				

				export let sharpenEnabled = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let animations = undefined // [array] 
				// animations which can be used to tweak settings over a period of time
				

				export let chromaticAberration = undefined // [chromaticaberrationpostprocess] 
				// chromatic aberration post process which will shift rgb colors in the image
				

				export let depthOfField = undefined // [depthoffieldeffect] 
				// depth of field effect, applies a blur based on how far away objects are from the focus distance.
				

				export let fxaa = undefined // [fxaapostprocess] 
				// the fast approximate anti-aliasing post process which attempts to remove aliasing from an image.
				

				export let grain = undefined // [grainpostprocess] 
				// grain post process which add noise to the image
				

				export let imageProcessing = undefined // [imageprocessingpostprocess] 
				// image post processing pass used to perform operations such as tone mapping or color grading.
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let onBuildObservable = undefined // [observable] 
				// this is triggered each time the pipeline has been built.
				

				export let sharpen = undefined // [sharpenpostprocess] 
				// sharpen post process which will apply a sharpen convolution to enhance edges
				

				// ================ METHODS ================

				
				export let addCamera = (...args) => instance.addCamera(...args)

				export let addEffect = (...args) => instance.addEffect(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let prepare = (...args) => instance.prepare(...args)

				export let removeCamera = (...args) => instance.removeCamera(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setPrePassRenderer = (...args) => instance.setPrePassRenderer(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:DefaultRenderingPipeline]`, ...args) : null

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
				if (hdr != undefined) instance.hdr = hdr?.instance || hdr
				hdr = instance.hdr
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (cameras != undefined) instance.cameras = cameras?.instance || cameras
				cameras = instance.cameras
				if (automaticBuild != undefined) instance.automaticBuild = automaticBuild?.instance || automaticBuild
				automaticBuild = instance.automaticBuild
				if (bloomEnabled != undefined) instance.bloomEnabled = bloomEnabled?.instance || bloomEnabled
				bloomEnabled = instance.bloomEnabled
				if (bloomKernel != undefined) instance.bloomKernel = bloomKernel?.instance || bloomKernel
				bloomKernel = instance.bloomKernel
				if (bloomScale != undefined) instance.bloomScale = bloomScale?.instance || bloomScale
				bloomScale = instance.bloomScale
				if (bloomThreshold != undefined) instance.bloomThreshold = bloomThreshold?.instance || bloomThreshold
				bloomThreshold = instance.bloomThreshold
				if (bloomWeight != undefined) instance.bloomWeight = bloomWeight?.instance || bloomWeight
				bloomWeight = instance.bloomWeight
				if (chromaticAberrationEnabled != undefined) instance.chromaticAberrationEnabled = chromaticAberrationEnabled?.instance || chromaticAberrationEnabled
				chromaticAberrationEnabled = instance.chromaticAberrationEnabled
				if (depthOfFieldBlurLevel != undefined) instance.depthOfFieldBlurLevel = depthOfFieldBlurLevel?.instance || depthOfFieldBlurLevel
				depthOfFieldBlurLevel = instance.depthOfFieldBlurLevel
				if (depthOfFieldEnabled != undefined) instance.depthOfFieldEnabled = depthOfFieldEnabled?.instance || depthOfFieldEnabled
				depthOfFieldEnabled = instance.depthOfFieldEnabled
				if (fxaaEnabled != undefined) instance.fxaaEnabled = fxaaEnabled?.instance || fxaaEnabled
				fxaaEnabled = instance.fxaaEnabled

				glowLayer = instance.glowLayer
				if (glowLayerEnabled != undefined) instance.glowLayerEnabled = glowLayerEnabled?.instance || glowLayerEnabled
				glowLayerEnabled = instance.glowLayerEnabled
				if (grainEnabled != undefined) instance.grainEnabled = grainEnabled?.instance || grainEnabled
				grainEnabled = instance.grainEnabled
				if (imageProcessingEnabled != undefined) instance.imageProcessingEnabled = imageProcessingEnabled?.instance || imageProcessingEnabled
				imageProcessingEnabled = instance.imageProcessingEnabled

				isSupported = instance.isSupported
				if (samples != undefined) instance.samples = samples?.instance || samples
				samples = instance.samples
				if (sharpenEnabled != undefined) instance.sharpenEnabled = sharpenEnabled?.instance || sharpenEnabled
				sharpenEnabled = instance.sharpenEnabled
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (chromaticAberration != undefined) instance.chromaticAberration = chromaticAberration?.instance || chromaticAberration
				chromaticAberration = instance.chromaticAberration
				if (depthOfField != undefined) instance.depthOfField = depthOfField?.instance || depthOfField
				depthOfField = instance.depthOfField
				if (fxaa != undefined) instance.fxaa = fxaa?.instance || fxaa
				fxaa = instance.fxaa
				if (grain != undefined) instance.grain = grain?.instance || grain
				grain = instance.grain
				if (imageProcessing != undefined) instance.imageProcessing = imageProcessing?.instance || imageProcessing
				imageProcessing = instance.imageProcessing
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (onBuildObservable != undefined) instance.onBuildObservable = onBuildObservable?.instance || onBuildObservable
				onBuildObservable = instance.onBuildObservable
				if (sharpen != undefined) instance.sharpen = sharpen?.instance || sharpen
				sharpen = instance.sharpen

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

			