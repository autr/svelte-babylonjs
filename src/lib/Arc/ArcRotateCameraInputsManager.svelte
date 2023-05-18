
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					camera  * required 
					attached  
					attachedToElement  
					checkInputs  
					noPreventDefault  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let camera = undefined // [arcrotatecamera] * required
				// defines the camera the inputs belong to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ArcRotateCameraInputsManager(camera) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let attached = undefined // [camerainputsmap] 
				// defines the list of inputs attached to the camera.
				

				export let attachedToElement = undefined // [boolean] 
				// defines the dom element the camera is collecting inputs from.this is null if the controls have not been attached.
				

				export let checkInputs = undefined // [reflection] 
				// 
				

				export let noPreventDefault = undefined // [boolean] 
				// defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-us/docs/web/api/event/preventdefault)
				

				// ================ METHODS ================

				
				export let add = (...args) => instance.add(...args)

				export let addGamepad = (...args) => instance.addGamepad(...args)

				export let addKeyboard = (...args) => instance.addKeyboard(...args)

				export let addMouseWheel = (...args) => instance.addMouseWheel(...args)

				export let addPointers = (...args) => instance.addPointers(...args)

				export let addVRDeviceOrientation = (...args) => instance.addVRDeviceOrientation(...args)

				export let attachElement = (...args) => instance.attachElement(...args)

				export let attachInput = (...args) => instance.attachInput(...args)

				export let clear = (...args) => instance.clear(...args)

				export let detachElement = (...args) => instance.detachElement(...args)

				export let parse = (...args) => instance.parse(...args)

				export let rebuildInputCheck = (...args) => instance.rebuildInputCheck(...args)

				export let remove = (...args) => instance.remove(...args)

				export let removeByType = (...args) => instance.removeByType(...args)

				export let serialize = (...args) => instance.serialize(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ArcRotateCameraInputsManager]`, ...args) : null

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
				if (attached != undefined) instance.attached = attached?.instance || attached
				attached = instance.attached
				if (attachedToElement != undefined) instance.attachedToElement = attachedToElement?.instance || attachedToElement
				attachedToElement = instance.attachedToElement
				if (checkInputs != undefined) instance.checkInputs = checkInputs?.instance || checkInputs
				checkInputs = instance.checkInputs
				if (noPreventDefault != undefined) instance.noPreventDefault = noPreventDefault?.instance || noPreventDefault
				noPreventDefault = instance.noPreventDefault

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

			