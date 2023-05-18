
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					vrGamepad  * required 
					browserGamepad  
					controllerType  
					devicePosition  
					deviceRotationQuaternion  
					deviceScaleFactor  
					hand  
					id  
					index  
					isXR  
					onMainButtonStateChangedObservable  
					onPadStateChangedObservable  
					onPadValuesChangedObservable  
					onSecondaryButtonStateChangedObservable  
					onTriggerStateChangedObservable  
					pad  
					position  
					rawPose  
					rotationQuaternion  
					type  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let vrGamepad = undefined // [any] * required
				// the gamepad that the controller should be created from
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.GenericController(vrGamepad) : {}

				// ================ ACCESSORS ================

				
				export let defaultModel = undefined // [nullable] 
				// 
				

				export let isConnected = undefined // [boolean] 
				// 
				

				export let leftStick = undefined // [stickvalues] 
				// 
				

				export let mesh = undefined // [nullable] 
				// 
				

				export let rightStick = undefined // [stickvalues] 
				// 
				

				// ================ PROPERTIES ================

				
				export let browserGamepad = undefined // [any] 
				// the browser gamepad
				

				export let controllerType = undefined // [poseenabledcontrollertype] 
				// the type of controller (eg. windows mixed reality)
				

				export let devicePosition = undefined // [vector3] 
				// the device position in babylon space
				

				export let deviceRotationQuaternion = undefined // [quaternion] 
				// the device rotation in babylon space
				

				export let deviceScaleFactor = undefined // [number] 
				// the scale factor of the device in babylon space
				

				export let hand = undefined // [string] 
				// 'left' or 'right', see https://w3c.github.io/gamepad/extensions.html#gamepadhand-enum
				

				export let id = undefined // [string] 
				// the id of the gamepad
				

				export let index = undefined // [number] 
				// the index of the gamepad
				

				export let isXR = undefined // [boolean] 
				// if the controller is used in a webxr session
				

				export let onMainButtonStateChangedObservable = undefined // [observable] 
				// fired when the main button state has changed
				

				export let onPadStateChangedObservable = undefined // [observable] 
				// fired when the pad state has changed
				

				export let onPadValuesChangedObservable = undefined // [observable] 
				// fired when controllers stick values have changed
				

				export let onSecondaryButtonStateChangedObservable = undefined // [observable] 
				// fired when the secondary button state has changed
				

				export let onTriggerStateChangedObservable = undefined // [observable] 
				// fired when the trigger state has changed
				

				export let pad = undefined // [stickvalues] 
				// x and y axis corresponding to the controllers joystick
				

				export let position = undefined // [vector3] 
				// (likely deviceposition should be used instead) the device position in its room space
				

				export let rawPose = undefined // [devicepose] 
				// the raw pose from the device
				

				export let rotationQuaternion = undefined // [quaternion] 
				// (likely devicerotationquaternion should be used instead) the device rotation in its room space
				

				export let type = undefined // [number] 
				// specifies what type of gamepad this represents
				

				// ================ METHODS ================

				
				export let attachToMesh = (...args) => instance.attachToMesh(...args)

				export let attachToPoseControlledCamera = (...args) => instance.attachToPoseControlledCamera(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getForwardRay = (...args) => instance.getForwardRay(...args)

				export let initControllerMesh = (...args) => instance.initControllerMesh(...args)

				export let onButtonStateChange = (...args) => instance.onButtonStateChange(...args)

				export let onleftstickchanged = (...args) => instance.onleftstickchanged(...args)

				export let onrightstickchanged = (...args) => instance.onrightstickchanged(...args)

				export let update = (...args) => instance.update(...args)

				export let updateFromDevice = (...args) => instance.updateFromDevice(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:GenericController]`, ...args) : null

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

												if (vrGamepad != undefined) instance.vrGamepad = vrGamepad?.instance || vrGamepad
				vrGamepad = instance.vrGamepad

				defaultModel = instance.defaultModel

				isConnected = instance.isConnected
				if (leftStick != undefined) instance.leftStick = leftStick?.instance || leftStick
				leftStick = instance.leftStick

				mesh = instance.mesh
				if (rightStick != undefined) instance.rightStick = rightStick?.instance || rightStick
				rightStick = instance.rightStick
				if (browserGamepad != undefined) instance.browserGamepad = browserGamepad?.instance || browserGamepad
				browserGamepad = instance.browserGamepad
				if (controllerType != undefined) instance.controllerType = controllerType?.instance || controllerType
				controllerType = instance.controllerType
				if (devicePosition != undefined) instance.devicePosition = devicePosition?.instance || devicePosition
				devicePosition = instance.devicePosition
				if (deviceRotationQuaternion != undefined) instance.deviceRotationQuaternion = deviceRotationQuaternion?.instance || deviceRotationQuaternion
				deviceRotationQuaternion = instance.deviceRotationQuaternion
				if (deviceScaleFactor != undefined) instance.deviceScaleFactor = deviceScaleFactor?.instance || deviceScaleFactor
				deviceScaleFactor = instance.deviceScaleFactor
				if (hand != undefined) instance.hand = hand?.instance || hand
				hand = instance.hand
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (index != undefined) instance.index = index?.instance || index
				index = instance.index
				if (isXR != undefined) instance.isXR = isXR?.instance || isXR
				isXR = instance.isXR
				if (onMainButtonStateChangedObservable != undefined) instance.onMainButtonStateChangedObservable = onMainButtonStateChangedObservable?.instance || onMainButtonStateChangedObservable
				onMainButtonStateChangedObservable = instance.onMainButtonStateChangedObservable
				if (onPadStateChangedObservable != undefined) instance.onPadStateChangedObservable = onPadStateChangedObservable?.instance || onPadStateChangedObservable
				onPadStateChangedObservable = instance.onPadStateChangedObservable
				if (onPadValuesChangedObservable != undefined) instance.onPadValuesChangedObservable = onPadValuesChangedObservable?.instance || onPadValuesChangedObservable
				onPadValuesChangedObservable = instance.onPadValuesChangedObservable
				if (onSecondaryButtonStateChangedObservable != undefined) instance.onSecondaryButtonStateChangedObservable = onSecondaryButtonStateChangedObservable?.instance || onSecondaryButtonStateChangedObservable
				onSecondaryButtonStateChangedObservable = instance.onSecondaryButtonStateChangedObservable
				if (onTriggerStateChangedObservable != undefined) instance.onTriggerStateChangedObservable = onTriggerStateChangedObservable?.instance || onTriggerStateChangedObservable
				onTriggerStateChangedObservable = instance.onTriggerStateChangedObservable
				if (pad != undefined) instance.pad = pad?.instance || pad
				pad = instance.pad
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
				if (rawPose != undefined) instance.rawPose = rawPose?.instance || rawPose
				rawPose = instance.rawPose
				if (rotationQuaternion != undefined) instance.rotationQuaternion = rotationQuaternion?.instance || rotationQuaternion
				rotationQuaternion = instance.rotationQuaternion
				if (type != undefined) instance.type = type?.instance || type
				type = instance.type

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

			