
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
					axisPinchControlHeight  
					axisPinchControlRadius  
					axisPinchControlRotation  
					axisXControlHeight  
					axisXControlRadius  
					axisXControlRotation  
					axisYControlHeight  
					axisYControlRadius  
					axisYControlRotation  
					buttons  
					camera  
					pinchDeltaPercentage  
					pinchPrecision  
					warningEnable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FollowCameraPointersInput() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let angularSensibilityX = undefined // [number] 
				// defines the pointer angular sensibility along the x axis or how fast isthe camera rotating.a negative number will reverse the axis direction.
				

				export let angularSensibilityY = undefined // [number] 
				// defines the pointer angular sensibility along the y axis or how fast isthe camera rotating.a negative number will reverse the axis direction.
				

				export let axisPinchControlHeight = undefined // [boolean] 
				// pinch controls height. (pinch modifies camera.heightoffset value.)
				

				export let axisPinchControlRadius = undefined // [boolean] 
				// pinch controls zoom. (pinch modifies camera.radius value.)
				

				export let axisPinchControlRotation = undefined // [boolean] 
				// pinch controls angle. (pinch modifies camera.rotationoffset value.)
				

				export let axisXControlHeight = undefined // [boolean] 
				// pointer x axis controls height. (x axis modifies camera.heightoffset value.)
				

				export let axisXControlRadius = undefined // [boolean] 
				// pointer x axis controls zoom. (x axis modifies camera.radius value.)
				

				export let axisXControlRotation = undefined // [boolean] 
				// pointer x axis controls angle. (x axis modifies camera.rotationoffset value.)
				

				export let axisYControlHeight = undefined // [boolean] 
				// pointer y axis controls height. (y axis modifies camera.heightoffset value.)
				

				export let axisYControlRadius = undefined // [boolean] 
				// pointer y axis controls zoom. (y axis modifies camera.radius value.)
				

				export let axisYControlRotation = undefined // [boolean] 
				// pointer y axis controls angle. (y axis modifies camera.rotationoffset value.)
				

				export let buttons = undefined // [array] 
				// defines the buttons associated with the input to handle camera move.
				

				export let camera = undefined // [followcamera] 
				// defines the camera the input is attached to.
				

				export let pinchDeltaPercentage = undefined // [number] 
				// pinchdeltapercentage will be used instead of pinchprecision if differentfrom 0.it defines the percentage of current camera.radius to use as delta whenpinch zoom is used.
				

				export let pinchPrecision = undefined // [number] 
				// defines the pointer pinch precision or how fast is the camera zooming.a negative number will reverse the axis direction.
				

				export let warningEnable = undefined // [boolean] 
				// log error messages if basic misconfiguration has occurred.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FollowCameraPointersInput]`, ...args) : null

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
				if (axisPinchControlHeight != undefined) instance.axisPinchControlHeight = axisPinchControlHeight?.instance || axisPinchControlHeight
				axisPinchControlHeight = instance.axisPinchControlHeight
				if (axisPinchControlRadius != undefined) instance.axisPinchControlRadius = axisPinchControlRadius?.instance || axisPinchControlRadius
				axisPinchControlRadius = instance.axisPinchControlRadius
				if (axisPinchControlRotation != undefined) instance.axisPinchControlRotation = axisPinchControlRotation?.instance || axisPinchControlRotation
				axisPinchControlRotation = instance.axisPinchControlRotation
				if (axisXControlHeight != undefined) instance.axisXControlHeight = axisXControlHeight?.instance || axisXControlHeight
				axisXControlHeight = instance.axisXControlHeight
				if (axisXControlRadius != undefined) instance.axisXControlRadius = axisXControlRadius?.instance || axisXControlRadius
				axisXControlRadius = instance.axisXControlRadius
				if (axisXControlRotation != undefined) instance.axisXControlRotation = axisXControlRotation?.instance || axisXControlRotation
				axisXControlRotation = instance.axisXControlRotation
				if (axisYControlHeight != undefined) instance.axisYControlHeight = axisYControlHeight?.instance || axisYControlHeight
				axisYControlHeight = instance.axisYControlHeight
				if (axisYControlRadius != undefined) instance.axisYControlRadius = axisYControlRadius?.instance || axisYControlRadius
				axisYControlRadius = instance.axisYControlRadius
				if (axisYControlRotation != undefined) instance.axisYControlRotation = axisYControlRotation?.instance || axisYControlRotation
				axisYControlRotation = instance.axisYControlRotation
				if (buttons != undefined) instance.buttons = buttons?.instance || buttons
				buttons = instance.buttons
				if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (pinchDeltaPercentage != undefined) instance.pinchDeltaPercentage = pinchDeltaPercentage?.instance || pinchDeltaPercentage
				pinchDeltaPercentage = instance.pinchDeltaPercentage
				if (pinchPrecision != undefined) instance.pinchPrecision = pinchPrecision?.instance || pinchPrecision
				pinchPrecision = instance.pinchPrecision
				if (warningEnable != undefined) instance.warningEnable = warningEnable?.instance || warningEnable
				warningEnable = instance.warningEnable

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

			