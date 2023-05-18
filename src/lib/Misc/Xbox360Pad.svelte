
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
					xboxOne   
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
				

				export let xboxOne = undefined // [boolean] 
				// defines if it is a xbox one gamepad
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Xbox360Pad(id,index,gamepad,xboxOne) : {}

				// ================ ACCESSORS ================

				
				export let buttonA = undefined // [number] 
				// 
				

				export let buttonB = undefined // [number] 
				// 
				

				export let buttonBack = undefined // [number] 
				// 
				

				export let buttonLB = undefined // [number] 
				// 
				

				export let buttonLeftStick = undefined // [number] 
				// 
				

				export let buttonRB = undefined // [number] 
				// 
				

				export let buttonRightStick = undefined // [number] 
				// 
				

				export let buttonStart = undefined // [number] 
				// 
				

				export let buttonX = undefined // [number] 
				// 
				

				export let buttonY = undefined // [number] 
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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Xbox360Pad]`, ...args) : null

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
				if (xboxOne != undefined) instance.xboxOne = xboxOne?.instance || xboxOne
				xboxOne = instance.xboxOne
				if (buttonA != undefined) instance.buttonA = buttonA?.instance || buttonA
				buttonA = instance.buttonA
				if (buttonB != undefined) instance.buttonB = buttonB?.instance || buttonB
				buttonB = instance.buttonB
				if (buttonBack != undefined) instance.buttonBack = buttonBack?.instance || buttonBack
				buttonBack = instance.buttonBack
				if (buttonLB != undefined) instance.buttonLB = buttonLB?.instance || buttonLB
				buttonLB = instance.buttonLB
				if (buttonLeftStick != undefined) instance.buttonLeftStick = buttonLeftStick?.instance || buttonLeftStick
				buttonLeftStick = instance.buttonLeftStick
				if (buttonRB != undefined) instance.buttonRB = buttonRB?.instance || buttonRB
				buttonRB = instance.buttonRB
				if (buttonRightStick != undefined) instance.buttonRightStick = buttonRightStick?.instance || buttonRightStick
				buttonRightStick = instance.buttonRightStick
				if (buttonStart != undefined) instance.buttonStart = buttonStart?.instance || buttonStart
				buttonStart = instance.buttonStart
				if (buttonX != undefined) instance.buttonX = buttonX?.instance || buttonX
				buttonX = instance.buttonX
				if (buttonY != undefined) instance.buttonY = buttonY?.instance || buttonY
				buttonY = instance.buttonY
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

			