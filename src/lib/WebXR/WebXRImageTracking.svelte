
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_xrSessionManager  * required
					options  * required 
					disableAutoAttach  
					isDisposed  
					onTrackableImageFoundObservable  
					onTrackedImageUpdatedObservable  
					onUntrackableImageFoundObservable  
					xrNativeFeatureName  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _xrSessionManager = undefined // [webxrsessionmanager] * required
				// the session manager for this module
				

				export let options = undefined // [iwebxrimagetrackingoptions] * required
				// read-only options to be used in this module
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRImageTracking(_xrSessionManager,options) : {}

				// ================ ACCESSORS ================

				
				export let attached = undefined // [boolean] 
				// is this feature attached
				

				// ================ PROPERTIES ================

				
				export let disableAutoAttach = undefined // [boolean] 
				// should auto-attach be disabled?
				

				export let isDisposed = undefined // [boolean] 
				// is this feature disposed?
				

				export let onTrackableImageFoundObservable = undefined // [observable] 
				// an image was deemed trackable, and the system will start tracking it.
				

				export let onTrackedImageUpdatedObservable = undefined // [observable] 
				// the image was found and its state was updated.
				

				export let onUntrackableImageFoundObservable = undefined // [observable] 
				// this will be triggered if the underlying system deems an image untrackable.the index is the index of the image from the array used to initialize the feature.
				

				export let xrNativeFeatureName = undefined // [string] 
				// the name of the native xr feature name (like anchor, hit-test, or hand-tracking)
				

				// ================ METHODS ================

				
				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getTrackedImageById = (...args) => instance.getTrackedImageById(...args)

				export let getXRSessionInitExtension = (...args) => instance.getXRSessionInitExtension(...args)

				export let isCompatible = (...args) => instance.isCompatible(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRImageTracking]`, ...args) : null

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
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options

				attached = instance.attached
				if (disableAutoAttach != undefined) instance.disableAutoAttach = disableAutoAttach?.instance || disableAutoAttach
				disableAutoAttach = instance.disableAutoAttach
				if (isDisposed != undefined) instance.isDisposed = isDisposed?.instance || isDisposed
				isDisposed = instance.isDisposed
				if (onTrackableImageFoundObservable != undefined) instance.onTrackableImageFoundObservable = onTrackableImageFoundObservable?.instance || onTrackableImageFoundObservable
				onTrackableImageFoundObservable = instance.onTrackableImageFoundObservable
				if (onTrackedImageUpdatedObservable != undefined) instance.onTrackedImageUpdatedObservable = onTrackedImageUpdatedObservable?.instance || onTrackedImageUpdatedObservable
				onTrackedImageUpdatedObservable = instance.onTrackedImageUpdatedObservable
				if (onUntrackableImageFoundObservable != undefined) instance.onUntrackableImageFoundObservable = onUntrackableImageFoundObservable?.instance || onUntrackableImageFoundObservable
				onUntrackableImageFoundObservable = instance.onUntrackableImageFoundObservable
				if (xrNativeFeatureName != undefined) instance.xrNativeFeatureName = xrNativeFeatureName?.instance || xrNativeFeatureName
				xrNativeFeatureName = instance.xrNativeFeatureName

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

			