
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					camera  
					keysDown  
					keysDownward  
					keysLeft  
					keysRight  
					keysRotateLeft  
					keysRotateRight  
					keysUp  
					keysUpward  
					rotationSpeed  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FreeCameraKeyboardMoveInput() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let camera = undefined // [freecamera] 
				// defines the camera the input is attached to.
				

				export let keysDown = undefined // [array] 
				// gets or set the list of keyboard keys used to control the backward move of the camera.
				

				export let keysDownward = undefined // [array] 
				// gets or set the list of keyboard keys used to control the downward move of the camera.
				

				export let keysLeft = undefined // [array] 
				// gets or set the list of keyboard keys used to control the left strafe move of the camera.
				

				export let keysRight = undefined // [array] 
				// gets or set the list of keyboard keys used to control the right strafe move of the camera.
				

				export let keysRotateLeft = undefined // [array] 
				// gets or set the list of keyboard keys used to control the left rotation move of the camera.
				

				export let keysRotateRight = undefined // [array] 
				// gets or set the list of keyboard keys used to control the right rotation move of the camera.
				

				export let keysUp = undefined // [array] 
				// gets or set the list of keyboard keys used to control the forward move of the camera.
				

				export let keysUpward = undefined // [array] 
				// gets or set the list of keyboard keys used to control the upward move of the camera.
				

				export let rotationSpeed = undefined // [number] 
				// defines the pointer angular sensibility  along the x and y axis or how fast is the camera rotating.
				

				// ================ METHODS ================

				
				export let attachControl = (...args) => instance.attachControl(...args)

				export let checkInputs = (...args) => instance.checkInputs(...args)

				export let detachControl = (...args) => instance.detachControl(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getSimpleName = (...args) => instance.getSimpleName(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FreeCameraKeyboardMoveInput]`, ...args) : null

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

												if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (keysDown != undefined) instance.keysDown = keysDown?.instance || keysDown
				keysDown = instance.keysDown
				if (keysDownward != undefined) instance.keysDownward = keysDownward?.instance || keysDownward
				keysDownward = instance.keysDownward
				if (keysLeft != undefined) instance.keysLeft = keysLeft?.instance || keysLeft
				keysLeft = instance.keysLeft
				if (keysRight != undefined) instance.keysRight = keysRight?.instance || keysRight
				keysRight = instance.keysRight
				if (keysRotateLeft != undefined) instance.keysRotateLeft = keysRotateLeft?.instance || keysRotateLeft
				keysRotateLeft = instance.keysRotateLeft
				if (keysRotateRight != undefined) instance.keysRotateRight = keysRotateRight?.instance || keysRotateRight
				keysRotateRight = instance.keysRotateRight
				if (keysUp != undefined) instance.keysUp = keysUp?.instance || keysUp
				keysUp = instance.keysUp
				if (keysUpward != undefined) instance.keysUpward = keysUpward?.instance || keysUpward
				keysUpward = instance.keysUpward
				if (rotationSpeed != undefined) instance.rotationSpeed = rotationSpeed?.instance || rotationSpeed
				rotationSpeed = instance.rotationSpeed

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

			