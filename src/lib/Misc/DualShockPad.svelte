
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					id  * required
					index  * required
					gamepad  * required 
					browserGamepad  
					onButtonDownObservable  
					onButtonUpObservable  
					onPadDownObservable  
					onPadUpObservable  
					type  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let id = undefined // [string] * required
				// defines the id of this gamepad
				

				export let index = undefined // [number] * required
				// defines its index
				

				export let gamepad = undefined // [any] * required
				// defines the internal html gamepad object
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.DualShockPad(id,index,gamepad) : {}

				// ================ ACCESSORS ================

				
				export let buttonCircle = undefined // [number] 
				// 
				

				export let buttonCross = undefined // [number] 
				// 
				

				export let buttonL1 = undefined // [number] 
				// 
				

				export let buttonLeftStick = undefined // [number] 
				// 
				

				export let buttonOptions = undefined // [number] 
				// 
				

				export let buttonR1 = undefined // [number] 
				// 
				

				export let buttonRightStick = undefined // [number] 
				// 
				

				export let buttonShare = undefined // [number] 
				// 
				

				export let buttonSquare = undefined // [number] 
				// 
				

				export let buttonTriangle = undefined // [number] 
				// 
				

				export let dPadDown = undefined // [number] 
				// 
				

				export let dPadLeft = undefined // [number] 
				// 
				

				export let dPadRight = undefined // [number] 
				// 
				

				export let dPadUp = undefined // [number] 
				// 
				

				export let isConnected = undefined // [boolean] 
				// 
				

				export let leftStick = undefined // [stickvalues] 
				// 
				

				export let leftTrigger = undefined // [number] 
				// 
				

				export let rightStick = undefined // [stickvalues] 
				// 
				

				export let rightTrigger = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let browserGamepad = undefined // [any] 
				// the browser gamepad
				

				export let onButtonDownObservable = undefined // [observable] 
				// observable raised when a button is pressed
				

				export let onButtonUpObservable = undefined // [observable] 
				// observable raised when a button is released
				

				export let onPadDownObservable = undefined // [observable] 
				// observable raised when a pad is pressed
				

				export let onPadUpObservable = undefined // [observable] 
				// observable raised when a pad is released
				

				export let type = undefined // [number] 
				// specifies what type of gamepad this represents
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let onbuttondown = (...args) => instance.onbuttondown(...args)

				export let onbuttonup = (...args) => instance.onbuttonup(...args)

				export let ondpaddown = (...args) => instance.ondpaddown(...args)

				export let ondpadup = (...args) => instance.ondpadup(...args)

				export let onleftstickchanged = (...args) => instance.onleftstickchanged(...args)

				export let onlefttriggerchanged = (...args) => instance.onlefttriggerchanged(...args)

				export let onrightstickchanged = (...args) => instance.onrightstickchanged(...args)

				export let onrighttriggerchanged = (...args) => instance.onrighttriggerchanged(...args)

				export let update = (...args) => instance.update(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:DualShockPad]`, ...args) : null

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

												if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (index != undefined) instance.index = index?.instance || index
				index = instance.index
				if (gamepad != undefined) instance.gamepad = gamepad?.instance || gamepad
				gamepad = instance.gamepad
				if (buttonCircle != undefined) instance.buttonCircle = buttonCircle?.instance || buttonCircle
				buttonCircle = instance.buttonCircle
				if (buttonCross != undefined) instance.buttonCross = buttonCross?.instance || buttonCross
				buttonCross = instance.buttonCross
				if (buttonL1 != undefined) instance.buttonL1 = buttonL1?.instance || buttonL1
				buttonL1 = instance.buttonL1
				if (buttonLeftStick != undefined) instance.buttonLeftStick = buttonLeftStick?.instance || buttonLeftStick
				buttonLeftStick = instance.buttonLeftStick
				if (buttonOptions != undefined) instance.buttonOptions = buttonOptions?.instance || buttonOptions
				buttonOptions = instance.buttonOptions
				if (buttonR1 != undefined) instance.buttonR1 = buttonR1?.instance || buttonR1
				buttonR1 = instance.buttonR1
				if (buttonRightStick != undefined) instance.buttonRightStick = buttonRightStick?.instance || buttonRightStick
				buttonRightStick = instance.buttonRightStick
				if (buttonShare != undefined) instance.buttonShare = buttonShare?.instance || buttonShare
				buttonShare = instance.buttonShare
				if (buttonSquare != undefined) instance.buttonSquare = buttonSquare?.instance || buttonSquare
				buttonSquare = instance.buttonSquare
				if (buttonTriangle != undefined) instance.buttonTriangle = buttonTriangle?.instance || buttonTriangle
				buttonTriangle = instance.buttonTriangle
				if (dPadDown != undefined) instance.dPadDown = dPadDown?.instance || dPadDown
				dPadDown = instance.dPadDown
				if (dPadLeft != undefined) instance.dPadLeft = dPadLeft?.instance || dPadLeft
				dPadLeft = instance.dPadLeft
				if (dPadRight != undefined) instance.dPadRight = dPadRight?.instance || dPadRight
				dPadRight = instance.dPadRight
				if (dPadUp != undefined) instance.dPadUp = dPadUp?.instance || dPadUp
				dPadUp = instance.dPadUp

				isConnected = instance.isConnected
				if (leftStick != undefined) instance.leftStick = leftStick?.instance || leftStick
				leftStick = instance.leftStick
				if (leftTrigger != undefined) instance.leftTrigger = leftTrigger?.instance || leftTrigger
				leftTrigger = instance.leftTrigger
				if (rightStick != undefined) instance.rightStick = rightStick?.instance || rightStick
				rightStick = instance.rightStick
				if (rightTrigger != undefined) instance.rightTrigger = rightTrigger?.instance || rightTrigger
				rightTrigger = instance.rightTrigger
				if (browserGamepad != undefined) instance.browserGamepad = browserGamepad?.instance || browserGamepad
				browserGamepad = instance.browserGamepad
				if (onButtonDownObservable != undefined) instance.onButtonDownObservable = onButtonDownObservable?.instance || onButtonDownObservable
				onButtonDownObservable = instance.onButtonDownObservable
				if (onButtonUpObservable != undefined) instance.onButtonUpObservable = onButtonUpObservable?.instance || onButtonUpObservable
				onButtonUpObservable = instance.onButtonUpObservable
				if (onPadDownObservable != undefined) instance.onPadDownObservable = onPadDownObservable?.instance || onPadDownObservable
				onPadDownObservable = instance.onPadDownObservable
				if (onPadUpObservable != undefined) instance.onPadUpObservable = onPadUpObservable?.instance || onPadUpObservable
				onPadUpObservable = instance.onPadUpObservable
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

			