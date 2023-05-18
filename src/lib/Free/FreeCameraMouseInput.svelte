
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					touchEnabled   
					angularSensibility  
					buttons  
					camera  
					onPointerMovedObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let touchEnabled = undefined // [boolean] 
				// defines if touch is enabled or not
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FreeCameraMouseInput(touchEnabled) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let angularSensibility = undefined // [number] 
				// defines the pointer angular sensibility  along the x and y axis or how fast is the camera rotating.
				

				export let buttons = undefined // [array] 
				// defines the buttons associated with the input to handle camera move.
				

				export let camera = undefined // [freecamera] 
				// defines the camera the input is attached to.
				

				export let onPointerMovedObservable = undefined // [observable] 
				// observable for when a pointer move event occurs containing the move offset
				

				// ================ METHODS ================

				
				export let attachControl = (...args) => instance.attachControl(...args)

				export let detachControl = (...args) => instance.detachControl(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getSimpleName = (...args) => instance.getSimpleName(...args)

				export let onContextMenu = (...args) => instance.onContextMenu(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FreeCameraMouseInput]`, ...args) : null

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

												if (touchEnabled != undefined) instance.touchEnabled = touchEnabled?.instance || touchEnabled
				touchEnabled = instance.touchEnabled
				if (angularSensibility != undefined) instance.angularSensibility = angularSensibility?.instance || angularSensibility
				angularSensibility = instance.angularSensibility
				if (buttons != undefined) instance.buttons = buttons?.instance || buttons
				buttons = instance.buttons
				if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (onPointerMovedObservable != undefined) instance.onPointerMovedObservable = onPointerMovedObservable?.instance || onPointerMovedObservable
				onPointerMovedObservable = instance.onPointerMovedObservable

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

			