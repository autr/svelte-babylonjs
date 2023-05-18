
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_scene  * required
					inputSource  * required
					_options   
					grip  
					motionController  
					onDisposeObservable  
					onMeshLoadedObservable  
					onMotionControllerInitObservable  
					pointer  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _scene = undefined // [scene] * required
				// the scene which the controller should be associated to
				

				export let inputSource = undefined // [xrinputsource] * required
				// the underlying input source for the controller
				

				export let _options = undefined // [iwebxrcontrolleroptions] 
				// options for this controller creation
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRInputSource(_scene,inputSource,_options) : {}

				// ================ ACCESSORS ================

				
				export let uniqueId = undefined // [string] 
				// 
				

				// ================ PROPERTIES ================

				
				export let grip = undefined // [abstractmesh] 
				// represents the part of the controller that is held. this may not exist if the controller is the head mounted display itself, if that's the case only the pointer from the head will be available
				

				export let motionController = undefined // [webxrabstractmotioncontroller] 
				// if available, this is the gamepad object related to this controller.using this object it is possible to get click events and trackpad changes of thewebxr controller that is currently being used.
				

				export let onDisposeObservable = undefined // [observable] 
				// event that fires when the controller is removed/disposed.the object provided as event data is this controller, after associated assets were disposed.uniqueid is still available.
				

				export let onMeshLoadedObservable = undefined // [observable] 
				// will be triggered when the mesh associated with the motion controller is done loading.it is also possible that this will never trigger (!) if no mesh was loaded, or if the developer decides to load a different mesha shortened version of controller -> motion controller -> on mesh loaded.
				

				export let onMotionControllerInitObservable = undefined // [observable] 
				// observers registered here will trigger when a motion controller profile was assigned to this xr controller
				

				export let pointer = undefined // [abstractmesh] 
				// pointer which can be used to select objects or attach a visible laser to
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getWorldPointerRayToRef = (...args) => instance.getWorldPointerRayToRef(...args)

				export let updateFromXRFrame = (...args) => instance.updateFromXRFrame(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRInputSource]`, ...args) : null

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

												if (_scene != undefined) instance._scene = _scene?.instance || _scene
				_scene = instance._scene
				if (inputSource != undefined) instance.inputSource = inputSource?.instance || inputSource
				inputSource = instance.inputSource
				if (_options != undefined) instance._options = _options?.instance || _options
				_options = instance._options

				uniqueId = instance.uniqueId
				if (grip != undefined) instance.grip = grip?.instance || grip
				grip = instance.grip
				if (motionController != undefined) instance.motionController = motionController?.instance || motionController
				motionController = instance.motionController
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onMeshLoadedObservable != undefined) instance.onMeshLoadedObservable = onMeshLoadedObservable?.instance || onMeshLoadedObservable
				onMeshLoadedObservable = instance.onMeshLoadedObservable
				if (onMotionControllerInitObservable != undefined) instance.onMotionControllerInitObservable = onMotionControllerInitObservable?.instance || onMotionControllerInitObservable
				onMotionControllerInitObservable = instance.onMotionControllerInitObservable
				if (pointer != undefined) instance.pointer = pointer?.instance || pointer
				pointer = instance.pointer

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

			