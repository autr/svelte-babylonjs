
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_xrSessionManager  * required
					_options   
					canvasContext  
					onXRLayerInitObservable  
					xrLayer  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _xrSessionManager = undefined // [webxrsessionmanager] * required
				// the xr session manager
				

				export let _options = undefined // [webxrmanagedoutputcanvasoptions] 
				// optional configuration for this canvas output. defaults will be used if not provided
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRManagedOutputCanvas(_xrSessionManager,_options) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let canvasContext = undefined // [webglrenderingcontext] 
				// rendering context of the canvas which can be used to display/mirror xr content
				

				export let onXRLayerInitObservable = undefined // [observable] 
				// observers registered here will be triggered when the xr layer was initialized
				

				export let xrLayer = undefined // [nullable] 
				// xr layer for the canvas
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let initializeXRLayerAsync = (...args) => instance.initializeXRLayerAsync(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRManagedOutputCanvas]`, ...args) : null

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

												if (_xrSessionManager != undefined) instance._xrSessionManager = _xrSessionManager?.instance || _xrSessionManager
				_xrSessionManager = instance._xrSessionManager
				if (_options != undefined) instance._options = _options?.instance || _options
				_options = instance._options
				if (canvasContext != undefined) instance.canvasContext = canvasContext?.instance || canvasContext
				canvasContext = instance.canvasContext
				if (onXRLayerInitObservable != undefined) instance.onXRLayerInitObservable = onXRLayerInitObservable?.instance || onXRLayerInitObservable
				onXRLayerInitObservable = instance.onXRLayerInitObservable
				if (xrLayer != undefined) instance.xrLayer = xrLayer?.instance || xrLayer
				xrLayer = instance.xrLayer

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

			