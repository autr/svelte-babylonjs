
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					xrSessionManager  * required
					xrCamera  * required
					_options   
					controllers  
					onControllerAddedObservable  
					onControllerRemovedObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let xrSessionManager = undefined // [webxrsessionmanager] * required
				// the xr session manager for this session
				

				export let xrCamera = undefined // [webxrcamera] * required
				// the webxr camera for this session. mainly used for teleportation
				

				export let _options = undefined // [iwebxrinputoptions] 
				// = initialization options for this xr input
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRInput(xrSessionManager,xrCamera,_options) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let controllers = undefined // [array] 
				// xr controllers being tracked
				

				export let onControllerAddedObservable = undefined // [observable] 
				// event when a controller has been connected/added
				

				export let onControllerRemovedObservable = undefined // [observable] 
				// event when a controller has been removed/disconnected
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRInput]`, ...args) : null

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

												if (xrSessionManager != undefined) instance.xrSessionManager = xrSessionManager?.instance || xrSessionManager
				xrSessionManager = instance.xrSessionManager
				if (xrCamera != undefined) instance.xrCamera = xrCamera?.instance || xrCamera
				xrCamera = instance.xrCamera
				if (_options != undefined) instance._options = _options?.instance || _options
				_options = instance._options
				if (controllers != undefined) instance.controllers = controllers?.instance || controllers
				controllers = instance.controllers
				if (onControllerAddedObservable != undefined) instance.onControllerAddedObservable = onControllerAddedObservable?.instance || onControllerAddedObservable
				onControllerAddedObservable = instance.onControllerAddedObservable
				if (onControllerRemovedObservable != undefined) instance.onControllerRemovedObservable = onControllerRemovedObservable?.instance || onControllerRemovedObservable
				onControllerRemovedObservable = instance.onControllerRemovedObservable

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

			