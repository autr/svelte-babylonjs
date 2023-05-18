
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					activeButton  
					angularSensibility  
					buttons  
					buttonsPitch  
					buttonsRoll  
					buttonsYaw  
					camera  
					touchEnabled  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FlyCameraMouseInput() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let activeButton = undefined // [number] 
				// detect if any button is being pressed while mouse is moved.-1 = mouse locked.0 = left button.1 = middle button.2 = right button.
				

				export let angularSensibility = undefined // [number] 
				// defines the pointer's angular sensibility, to control the camera rotation speed.higher values reduce its sensitivity.
				

				export let buttons = undefined // [array] 
				// defines the buttons associated with the input to handle camera rotation.
				

				export let buttonsPitch = undefined // [array] 
				// assign buttons for pitch control.
				

				export let buttonsRoll = undefined // [array] 
				// assign buttons for roll control.
				

				export let buttonsYaw = undefined // [array] 
				// assign buttons for yaw control.
				

				export let camera = undefined // [flycamera] 
				// defines the camera the input is attached to.
				

				export let touchEnabled = undefined // [boolean] 
				// defines if touch is enabled. (default is true.)
				

				// ================ METHODS ================

				
				export let attachControl = (...args) => instance.attachControl(...args)

				export let detachControl = (...args) => instance.detachControl(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getSimpleName = (...args) => instance.getSimpleName(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FlyCameraMouseInput]`, ...args) : null

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

												if (activeButton != undefined) instance.activeButton = activeButton?.instance || activeButton
				activeButton = instance.activeButton
				if (angularSensibility != undefined) instance.angularSensibility = angularSensibility?.instance || angularSensibility
				angularSensibility = instance.angularSensibility
				if (buttons != undefined) instance.buttons = buttons?.instance || buttons
				buttons = instance.buttons
				if (buttonsPitch != undefined) instance.buttonsPitch = buttonsPitch?.instance || buttonsPitch
				buttonsPitch = instance.buttonsPitch
				if (buttonsRoll != undefined) instance.buttonsRoll = buttonsRoll?.instance || buttonsRoll
				buttonsRoll = instance.buttonsRoll
				if (buttonsYaw != undefined) instance.buttonsYaw = buttonsYaw?.instance || buttonsYaw
				buttonsYaw = instance.buttonsYaw
				if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (touchEnabled != undefined) instance.touchEnabled = touchEnabled?.instance || touchEnabled
				touchEnabled = instance.touchEnabled

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

			