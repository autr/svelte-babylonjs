
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					allowMouse   
					camera  
					singleFingerRotate  
					touchAngularSensibility  
					touchMoveSensibility  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let allowMouse = undefined // [boolean] 
				// defines if mouse events can be treated as touch events
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FreeCameraTouchInput(allowMouse) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let camera = undefined // [freecamera] 
				// defines the camera the input is attached to.
				

				export let singleFingerRotate = undefined // [boolean] 
				// swap touch actions so that one touch is used for rotation and multiple for movement
				

				export let touchAngularSensibility = undefined // [number] 
				// defines the touch sensibility for rotation.the lower the faster.
				

				export let touchMoveSensibility = undefined // [number] 
				// defines the touch sensibility for move.the lower the faster.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FreeCameraTouchInput]`, ...args) : null

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

												if (allowMouse != undefined) instance.allowMouse = allowMouse?.instance || allowMouse
				allowMouse = instance.allowMouse
				if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (singleFingerRotate != undefined) instance.singleFingerRotate = singleFingerRotate?.instance || singleFingerRotate
				singleFingerRotate = instance.singleFingerRotate
				if (touchAngularSensibility != undefined) instance.touchAngularSensibility = touchAngularSensibility?.instance || touchAngularSensibility
				touchAngularSensibility = instance.touchAngularSensibility
				if (touchMoveSensibility != undefined) instance.touchMoveSensibility = touchMoveSensibility?.instance || touchMoveSensibility
				touchMoveSensibility = instance.touchMoveSensibility

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

			