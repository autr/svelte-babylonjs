
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					chromaAbCorrection  
					compensateDistortion  
					distortionK  
					eyeToScreenDistance  
					hResolution  
					hScreenSize  
					interpupillaryDistance  
					lensCenterOffset  
					lensSeparationDistance  
					multiviewEnabled  
					postProcessScaleFactor  
					vResolution  
					vScreenCenter  
					vScreenSize  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.VRCameraMetrics() : {}

				// ================ ACCESSORS ================

				
				export let aspectRatio = undefined // [number] 
				// 
				

				export let aspectRatioFov = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let chromaAbCorrection = undefined // [array] 
				// define the chromatic aberration correction factors for the vr post process.
				

				export let compensateDistortion = undefined // [boolean] 
				// define if the current vr camera should compensate the distortion of the lens or not.
				

				export let distortionK = undefined // [array] 
				// define the distortion factor of the vr postprocess.please, touch with care.
				

				export let eyeToScreenDistance = undefined // [number] 
				// define the distance of the eyes to the screen.
				

				export let hResolution = undefined // [number] 
				// define the horizontal resolution off the screen.
				

				export let hScreenSize = undefined // [number] 
				// define the horizontal screen size.
				

				export let interpupillaryDistance = undefined // [number] 
				// define the distance between both viewer's eyes.
				

				export let lensCenterOffset = undefined // [number] 
				// define an offset for the lens center.
				

				export let lensSeparationDistance = undefined // [number] 
				// define the distance between both lenses
				

				export let multiviewEnabled = undefined // [boolean] 
				// defines if multiview should be enabled when rendering (default: false)
				

				export let postProcessScaleFactor = undefined // [number] 
				// define the scale factor of the post process.the smaller the better but the slower.
				

				export let vResolution = undefined // [number] 
				// define the vertical resolution off the screen.
				

				export let vScreenCenter = undefined // [number] 
				// define the vertical screen center position.
				

				export let vScreenSize = undefined // [number] 
				// define the vertical screen size.
				

				// ================ METHODS ================

				
				export let GetDefault = (...args) => instance.GetDefault(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:VRCameraMetrics]`, ...args) : null

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

								
				aspectRatio = instance.aspectRatio

				aspectRatioFov = instance.aspectRatioFov
				if (chromaAbCorrection != undefined) instance.chromaAbCorrection = chromaAbCorrection?.instance || chromaAbCorrection
				chromaAbCorrection = instance.chromaAbCorrection
				if (compensateDistortion != undefined) instance.compensateDistortion = compensateDistortion?.instance || compensateDistortion
				compensateDistortion = instance.compensateDistortion
				if (distortionK != undefined) instance.distortionK = distortionK?.instance || distortionK
				distortionK = instance.distortionK
				if (eyeToScreenDistance != undefined) instance.eyeToScreenDistance = eyeToScreenDistance?.instance || eyeToScreenDistance
				eyeToScreenDistance = instance.eyeToScreenDistance
				if (hResolution != undefined) instance.hResolution = hResolution?.instance || hResolution
				hResolution = instance.hResolution
				if (hScreenSize != undefined) instance.hScreenSize = hScreenSize?.instance || hScreenSize
				hScreenSize = instance.hScreenSize
				if (interpupillaryDistance != undefined) instance.interpupillaryDistance = interpupillaryDistance?.instance || interpupillaryDistance
				interpupillaryDistance = instance.interpupillaryDistance
				if (lensCenterOffset != undefined) instance.lensCenterOffset = lensCenterOffset?.instance || lensCenterOffset
				lensCenterOffset = instance.lensCenterOffset
				if (lensSeparationDistance != undefined) instance.lensSeparationDistance = lensSeparationDistance?.instance || lensSeparationDistance
				lensSeparationDistance = instance.lensSeparationDistance
				if (multiviewEnabled != undefined) instance.multiviewEnabled = multiviewEnabled?.instance || multiviewEnabled
				multiviewEnabled = instance.multiviewEnabled
				if (postProcessScaleFactor != undefined) instance.postProcessScaleFactor = postProcessScaleFactor?.instance || postProcessScaleFactor
				postProcessScaleFactor = instance.postProcessScaleFactor
				if (vResolution != undefined) instance.vResolution = vResolution?.instance || vResolution
				vResolution = instance.vResolution
				if (vScreenCenter != undefined) instance.vScreenCenter = vScreenCenter?.instance || vScreenCenter
				vScreenCenter = instance.vScreenCenter
				if (vScreenSize != undefined) instance.vScreenSize = vScreenSize?.instance || vScreenSize
				vScreenSize = instance.vScreenSize

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

			