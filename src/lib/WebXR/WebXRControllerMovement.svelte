
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
					xrNativeFeatureName  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _xrSessionManager = undefined // [webxrsessionmanager] * required
				// an instance of webxrsessionmanager
				

				export let options = undefined // [iwebxrcontrollermovementoptions] * required
				// configuration object for this feature
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRControllerMovement(_xrSessionManager,options) : {}

				// ================ ACCESSORS ================

				
				export let attached = undefined // [boolean] 
				// is this feature attached
				

				export let movementDirection = undefined // [nullable] 
				// 
				

				export let movementEnabled = undefined // [boolean] 
				// 
				

				export let movementOrientationFollowsViewerPose = undefined // [boolean] 
				// 
				

				export let movementSpeed = undefined // [number] 
				// 
				

				export let movementThreshold = undefined // [number] 
				// 
				

				export let rotationEnabled = undefined // [boolean] 
				// 
				

				export let rotationSpeed = undefined // [number] 
				// 
				

				export let rotationThreshold = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let disableAutoAttach = undefined // [boolean] 
				// should auto-attach be disabled?
				

				export let isDisposed = undefined // [boolean] 
				// is this feature disposed?
				

				export let xrNativeFeatureName = undefined // [string] 
				// the name of the native xr feature name (like anchor, hit-test, or hand-tracking)
				

				// ================ METHODS ================

				
				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let isCompatible = (...args) => instance.isCompatible(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRControllerMovement]`, ...args) : null

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

				movementDirection = instance.movementDirection
				if (movementEnabled != undefined) instance.movementEnabled = movementEnabled?.instance || movementEnabled
				movementEnabled = instance.movementEnabled
				if (movementOrientationFollowsViewerPose != undefined) instance.movementOrientationFollowsViewerPose = movementOrientationFollowsViewerPose?.instance || movementOrientationFollowsViewerPose
				movementOrientationFollowsViewerPose = instance.movementOrientationFollowsViewerPose
				if (movementSpeed != undefined) instance.movementSpeed = movementSpeed?.instance || movementSpeed
				movementSpeed = instance.movementSpeed
				if (movementThreshold != undefined) instance.movementThreshold = movementThreshold?.instance || movementThreshold
				movementThreshold = instance.movementThreshold
				if (rotationEnabled != undefined) instance.rotationEnabled = rotationEnabled?.instance || rotationEnabled
				rotationEnabled = instance.rotationEnabled
				if (rotationSpeed != undefined) instance.rotationSpeed = rotationSpeed?.instance || rotationSpeed
				rotationSpeed = instance.rotationSpeed
				if (rotationThreshold != undefined) instance.rotationThreshold = rotationThreshold?.instance || rotationThreshold
				rotationThreshold = instance.rotationThreshold
				if (disableAutoAttach != undefined) instance.disableAutoAttach = disableAutoAttach?.instance || disableAutoAttach
				disableAutoAttach = instance.disableAutoAttach
				if (isDisposed != undefined) instance.isDisposed = isDisposed?.instance || isDisposed
				isDisposed = instance.isDisposed
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

			