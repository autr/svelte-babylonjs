
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
					disableAutoAttach  
					isDisposed  
					onAnchorAddedObservable  
					onAnchorRemovedObservable  
					onAnchorUpdatedObservable  
					xrNativeFeatureName  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _xrSessionManager = undefined // [webxrsessionmanager] * required
				// an instance of webxrsessionmanager
				

				export let _options = undefined // [iwebxranchorsystemoptions] 
				// configuration object for this feature
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRAnchorSystem(_xrSessionManager,_options) : {}

				// ================ ACCESSORS ================

				
				export let anchors = undefined // [array] 
				// 
				

				export let attached = undefined // [boolean] 
				// is this feature attached
				

				export let referenceSpaceForFrameAnchors = undefined // [] 
				// 
				

				// ================ PROPERTIES ================

				
				export let disableAutoAttach = undefined // [boolean] 
				// should auto-attach be disabled?
				

				export let isDisposed = undefined // [boolean] 
				// is this feature disposed?
				

				export let onAnchorAddedObservable = undefined // [observable] 
				// observers registered here will be executed when a new anchor was added to the session
				

				export let onAnchorRemovedObservable = undefined // [observable] 
				// observers registered here will be executed when an anchor was removed from the session
				

				export let onAnchorUpdatedObservable = undefined // [observable] 
				// observers registered here will be executed when an existing anchor updatesthis can execute n times every frame
				

				export let xrNativeFeatureName = undefined // [string] 
				// the name of the native xr feature name (like anchor, hit-test, or hand-tracking)
				

				// ================ METHODS ================

				
				export let addAnchorAtPositionAndRotationAsync = (...args) => instance.addAnchorAtPositionAndRotationAsync(...args)

				export let addAnchorPointUsingHitTestResultAsync = (...args) => instance.addAnchorPointUsingHitTestResultAsync(...args)

				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let isCompatible = (...args) => instance.isCompatible(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRAnchorSystem]`, ...args) : null

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

				anchors = instance.anchors

				attached = instance.attached
				if (referenceSpaceForFrameAnchors != undefined) instance.referenceSpaceForFrameAnchors = referenceSpaceForFrameAnchors?.instance || referenceSpaceForFrameAnchors
				referenceSpaceForFrameAnchors = instance.referenceSpaceForFrameAnchors
				if (disableAutoAttach != undefined) instance.disableAutoAttach = disableAutoAttach?.instance || disableAutoAttach
				disableAutoAttach = instance.disableAutoAttach
				if (isDisposed != undefined) instance.isDisposed = isDisposed?.instance || isDisposed
				isDisposed = instance.isDisposed
				if (onAnchorAddedObservable != undefined) instance.onAnchorAddedObservable = onAnchorAddedObservable?.instance || onAnchorAddedObservable
				onAnchorAddedObservable = instance.onAnchorAddedObservable
				if (onAnchorRemovedObservable != undefined) instance.onAnchorRemovedObservable = onAnchorRemovedObservable?.instance || onAnchorRemovedObservable
				onAnchorRemovedObservable = instance.onAnchorRemovedObservable
				if (onAnchorUpdatedObservable != undefined) instance.onAnchorUpdatedObservable = onAnchorUpdatedObservable?.instance || onAnchorUpdatedObservable
				onAnchorUpdatedObservable = instance.onAnchorUpdatedObservable
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

			