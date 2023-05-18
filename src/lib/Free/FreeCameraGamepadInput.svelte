
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					camera  
					deadzoneDelta  
					gamepad  
					gamepadAngularSensibility  
					gamepadMoveSensibility  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FreeCameraGamepadInput() : {}

				// ================ ACCESSORS ================

				
				export let invertYAxis = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let camera = undefined // [freecamera] 
				// define the camera the input is attached to.
				

				export let deadzoneDelta = undefined // [number] 
				// defines the minimum value at which any analog stick input is ignored.note: this value should only be a value between 0 and 1.
				

				export let gamepad = undefined // [nullable] 
				// define the gamepad controlling the input
				

				export let gamepadAngularSensibility = undefined // [number] 
				// defines the gamepad rotation sensibility.this is the threshold from when rotation starts to be accounted for to prevent jittering.
				

				export let gamepadMoveSensibility = undefined // [number] 
				// defines the gamepad move sensibility.this is the threshold from when moving starts to be accounted for for to prevent jittering.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FreeCameraGamepadInput]`, ...args) : null

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

												if (invertYAxis != undefined) instance.invertYAxis = invertYAxis?.instance || invertYAxis
				invertYAxis = instance.invertYAxis
				if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (deadzoneDelta != undefined) instance.deadzoneDelta = deadzoneDelta?.instance || deadzoneDelta
				deadzoneDelta = instance.deadzoneDelta
				if (gamepad != undefined) instance.gamepad = gamepad?.instance || gamepad
				gamepad = instance.gamepad
				if (gamepadAngularSensibility != undefined) instance.gamepadAngularSensibility = gamepadAngularSensibility?.instance || gamepadAngularSensibility
				gamepadAngularSensibility = instance.gamepadAngularSensibility
				if (gamepadMoveSensibility != undefined) instance.gamepadMoveSensibility = gamepadMoveSensibility?.instance || gamepadMoveSensibility
				gamepadMoveSensibility = instance.gamepadMoveSensibility

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

			