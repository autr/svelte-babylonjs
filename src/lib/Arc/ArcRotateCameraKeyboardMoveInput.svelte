
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					angularSpeed  
					camera  
					keysDown  
					keysLeft  
					keysReset  
					keysRight  
					keysUp  
					panningSensibility  
					useAltToZoom  
					zoomingSensibility  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ArcRotateCameraKeyboardMoveInput() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let angularSpeed = undefined // [number] 
				// rotation speed of the camera
				

				export let camera = undefined // [arcrotatecamera] 
				// defines the camera the input is attached to.
				

				export let keysDown = undefined // [array] 
				// defines the list of key codes associated with the down action (decrease alpha)
				

				export let keysLeft = undefined // [array] 
				// defines the list of key codes associated with the left action (increase beta)
				

				export let keysReset = undefined // [array] 
				// defines the list of key codes associated with the reset action.those keys reset the camera to its last stored state (with the method camera.storestate())
				

				export let keysRight = undefined // [array] 
				// defines the list of key codes associated with the right action (decrease beta)
				

				export let keysUp = undefined // [array] 
				// defines the list of key codes associated with the up action (increase alpha)
				

				export let panningSensibility = undefined // [number] 
				// defines the panning sensibility of the inputs.(how fast is the camera panning)
				

				export let useAltToZoom = undefined // [boolean] 
				// defines whether maintaining the alt key down switch the movement mode fromorientation to zoom.
				

				export let zoomingSensibility = undefined // [number] 
				// defines the zooming sensibility of the inputs.(how fast is the camera zooming)
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ArcRotateCameraKeyboardMoveInput]`, ...args) : null

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

												if (angularSpeed != undefined) instance.angularSpeed = angularSpeed?.instance || angularSpeed
				angularSpeed = instance.angularSpeed
				if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (keysDown != undefined) instance.keysDown = keysDown?.instance || keysDown
				keysDown = instance.keysDown
				if (keysLeft != undefined) instance.keysLeft = keysLeft?.instance || keysLeft
				keysLeft = instance.keysLeft
				if (keysReset != undefined) instance.keysReset = keysReset?.instance || keysReset
				keysReset = instance.keysReset
				if (keysRight != undefined) instance.keysRight = keysRight?.instance || keysRight
				keysRight = instance.keysRight
				if (keysUp != undefined) instance.keysUp = keysUp?.instance || keysUp
				keysUp = instance.keysUp
				if (panningSensibility != undefined) instance.panningSensibility = panningSensibility?.instance || panningSensibility
				panningSensibility = instance.panningSensibility
				if (useAltToZoom != undefined) instance.useAltToZoom = useAltToZoom?.instance || useAltToZoom
				useAltToZoom = instance.useAltToZoom
				if (zoomingSensibility != undefined) instance.zoomingSensibility = zoomingSensibility?.instance || zoomingSensibility
				zoomingSensibility = instance.zoomingSensibility

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

			