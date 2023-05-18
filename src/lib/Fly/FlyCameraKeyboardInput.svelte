
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					camera  
					keysBackward  
					keysDown  
					keysForward  
					keysLeft  
					keysRight  
					keysUp  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FlyCameraKeyboardInput() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let camera = undefined // [flycamera] 
				// defines the camera the input is attached to.
				

				export let keysBackward = undefined // [array] 
				// the list of keyboard keys used to control the backward move of the camera.
				

				export let keysDown = undefined // [array] 
				// the list of keyboard keys used to control the backward move of the camera.
				

				export let keysForward = undefined // [array] 
				// the list of keyboard keys used to control the forward move of the camera.
				

				export let keysLeft = undefined // [array] 
				// the list of keyboard keys used to control the left strafe move of the camera.
				

				export let keysRight = undefined // [array] 
				// the list of keyboard keys used to control the right strafe move of the camera.
				

				export let keysUp = undefined // [array] 
				// the list of keyboard keys used to control the forward move of the camera.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FlyCameraKeyboardInput]`, ...args) : null

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
				if (keysBackward != undefined) instance.keysBackward = keysBackward?.instance || keysBackward
				keysBackward = instance.keysBackward
				if (keysDown != undefined) instance.keysDown = keysDown?.instance || keysDown
				keysDown = instance.keysDown
				if (keysForward != undefined) instance.keysForward = keysForward?.instance || keysForward
				keysForward = instance.keysForward
				if (keysLeft != undefined) instance.keysLeft = keysLeft?.instance || keysLeft
				keysLeft = instance.keysLeft
				if (keysRight != undefined) instance.keysRight = keysRight?.instance || keysRight
				keysRight = instance.keysRight
				if (keysUp != undefined) instance.keysUp = keysUp?.instance || keysUp
				keysUp = instance.keysUp

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

			