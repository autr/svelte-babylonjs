
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					angularSensibilityX  
					angularSensibilityY  
					buttons  
					camera  
					multiTouchPanAndZoom  
					multiTouchPanning  
					panningSensibility  
					pinchDeltaPercentage  
					pinchInwards  
					pinchPrecision  
					pinchZoom  
					useNaturalPinchZoom  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ArcRotateCameraPointersInput() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let angularSensibilityX = undefined // [number] 
				// defines the pointer angular sensibility  along the x axis or how fast isthe camera rotating.
				

				export let angularSensibilityY = undefined // [number] 
				// defines the pointer angular sensibility along the y axis or how fast isthe camera rotating.
				

				export let buttons = undefined // [array] 
				// defines the buttons associated with the input to handle camera move.
				

				export let camera = undefined // [arcrotatecamera] 
				// defines the camera the input is attached to.
				

				export let multiTouchPanAndZoom = undefined // [boolean] 
				// defines whether panning is enabled for both pan (2 fingers swipe) andzoom (pinch) through multitouch.
				

				export let multiTouchPanning = undefined // [boolean] 
				// defines whether panning (2 fingers swipe) is enabled through multitouch.
				

				export let panningSensibility = undefined // [number] 
				// defines the pointer panning sensibility or how fast is the camera moving.
				

				export let pinchDeltaPercentage = undefined // [number] 
				// pinchdeltapercentage will be used instead of pinchprecision if differentfrom 0.it defines the percentage of current camera.radius to use as delta whenpinch zoom is used.
				

				export let pinchInwards = undefined // [boolean] 
				// revers pinch action direction.
				

				export let pinchPrecision = undefined // [number] 
				// defines the pointer pinch precision or how fast is the camera zooming.
				

				export let pinchZoom = undefined // [boolean] 
				// defines whether zoom (2 fingers pinch) is enabled through multitouch
				

				export let useNaturalPinchZoom = undefined // [boolean] 
				// when usenaturalpinchzoom is true, multi touch zoom will zoom in suchthat any object in the plane at the camera's target point will scaleperfectly with finger motion.overrides pinchdeltapercentage and pinchprecision.
				

				// ================ METHODS ================

				
				export let attachControl = (...args) => instance.attachControl(...args)

				export let detachControl = (...args) => instance.detachControl(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getSimpleName = (...args) => instance.getSimpleName(...args)

				export let onButtonDown = (...args) => instance.onButtonDown(...args)

				export let onButtonUp = (...args) => instance.onButtonUp(...args)

				export let onContextMenu = (...args) => instance.onContextMenu(...args)

				export let onDoubleTap = (...args) => instance.onDoubleTap(...args)

				export let onLostFocus = (...args) => instance.onLostFocus(...args)

				export let onMultiTouch = (...args) => instance.onMultiTouch(...args)

				export let onTouch = (...args) => instance.onTouch(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ArcRotateCameraPointersInput]`, ...args) : null

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

												if (angularSensibilityX != undefined) instance.angularSensibilityX = angularSensibilityX?.instance || angularSensibilityX
				angularSensibilityX = instance.angularSensibilityX
				if (angularSensibilityY != undefined) instance.angularSensibilityY = angularSensibilityY?.instance || angularSensibilityY
				angularSensibilityY = instance.angularSensibilityY
				if (buttons != undefined) instance.buttons = buttons?.instance || buttons
				buttons = instance.buttons
				if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (multiTouchPanAndZoom != undefined) instance.multiTouchPanAndZoom = multiTouchPanAndZoom?.instance || multiTouchPanAndZoom
				multiTouchPanAndZoom = instance.multiTouchPanAndZoom
				if (multiTouchPanning != undefined) instance.multiTouchPanning = multiTouchPanning?.instance || multiTouchPanning
				multiTouchPanning = instance.multiTouchPanning
				if (panningSensibility != undefined) instance.panningSensibility = panningSensibility?.instance || panningSensibility
				panningSensibility = instance.panningSensibility
				if (pinchDeltaPercentage != undefined) instance.pinchDeltaPercentage = pinchDeltaPercentage?.instance || pinchDeltaPercentage
				pinchDeltaPercentage = instance.pinchDeltaPercentage
				if (pinchInwards != undefined) instance.pinchInwards = pinchInwards?.instance || pinchInwards
				pinchInwards = instance.pinchInwards
				if (pinchPrecision != undefined) instance.pinchPrecision = pinchPrecision?.instance || pinchPrecision
				pinchPrecision = instance.pinchPrecision
				if (pinchZoom != undefined) instance.pinchZoom = pinchZoom?.instance || pinchZoom
				pinchZoom = instance.pinchZoom
				if (useNaturalPinchZoom != undefined) instance.useNaturalPinchZoom = useNaturalPinchZoom?.instance || useNaturalPinchZoom
				useNaturalPinchZoom = instance.useNaturalPinchZoom

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

			