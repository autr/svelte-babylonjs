
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					leftJoystick  
					customizations   
					deltaPosition  
					limitToContainer  
					pressed  
					reverseLeftRight  
					reverseUpDown  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let leftJoystick = undefined // [boolean] 
				// defines that the joystick is for left hand (false by default)
				

				export let customizations = undefined // [partial] 
				// defines the options we want to customize the virtualjoystick
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.VirtualJoystick(leftJoystick,customizations) : {}

				// ================ ACCESSORS ================

				
				export let alwaysVisible = undefined // [boolean] 
				// 
				

				export let containerSize = undefined // [number] 
				// 
				

				export let puckSize = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let deltaPosition = undefined // [vector3] 
				// gets the offset value for the position (ie. the change of the position value)
				

				export let limitToContainer = undefined // [boolean] 
				// boolean indicating whether or not the joystick's puck's movement should be limited to the joystick's container area
				

				export let pressed = undefined // [boolean] 
				// gets a boolean indicating if the virtual joystick was pressed
				

				export let reverseLeftRight = undefined // [boolean] 
				// gets or sets a boolean indicating that left and right values must be inverted
				

				export let reverseUpDown = undefined // [boolean] 
				// gets or sets a boolean indicating that up and down values must be inverted
				

				// ================ METHODS ================

				
				export let clearPosition = (...args) => instance.clearPosition(...args)

				export let releaseCanvas = (...args) => instance.releaseCanvas(...args)

				export let setActionOnTouch = (...args) => instance.setActionOnTouch(...args)

				export let setAxisForLeftRight = (...args) => instance.setAxisForLeftRight(...args)

				export let setAxisForUpDown = (...args) => instance.setAxisForUpDown(...args)

				export let setContainerImage = (...args) => instance.setContainerImage(...args)

				export let setJoystickColor = (...args) => instance.setJoystickColor(...args)

				export let setJoystickSensibility = (...args) => instance.setJoystickSensibility(...args)

				export let setPosition = (...args) => instance.setPosition(...args)

				export let setPuckImage = (...args) => instance.setPuckImage(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:VirtualJoystick]`, ...args) : null

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

												if (leftJoystick != undefined) instance.leftJoystick = leftJoystick?.instance || leftJoystick
				leftJoystick = instance.leftJoystick
				if (customizations != undefined) instance.customizations = customizations?.instance || customizations
				customizations = instance.customizations
				if (alwaysVisible != undefined) instance.alwaysVisible = alwaysVisible?.instance || alwaysVisible
				alwaysVisible = instance.alwaysVisible
				if (containerSize != undefined) instance.containerSize = containerSize?.instance || containerSize
				containerSize = instance.containerSize
				if (puckSize != undefined) instance.puckSize = puckSize?.instance || puckSize
				puckSize = instance.puckSize
				if (deltaPosition != undefined) instance.deltaPosition = deltaPosition?.instance || deltaPosition
				deltaPosition = instance.deltaPosition
				if (limitToContainer != undefined) instance.limitToContainer = limitToContainer?.instance || limitToContainer
				limitToContainer = instance.limitToContainer
				if (pressed != undefined) instance.pressed = pressed?.instance || pressed
				pressed = instance.pressed
				if (reverseLeftRight != undefined) instance.reverseLeftRight = reverseLeftRight?.instance || reverseLeftRight
				reverseLeftRight = instance.reverseLeftRight
				if (reverseUpDown != undefined) instance.reverseUpDown = reverseUpDown?.instance || reverseUpDown
				reverseUpDown = instance.reverseUpDown

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

			