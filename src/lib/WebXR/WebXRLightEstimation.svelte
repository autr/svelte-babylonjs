
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
					directionalLight  
					disableAutoAttach  
					isDisposed  
					onReflectionCubeMapUpdatedObservable  
					xrNativeFeatureName  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _xrSessionManager = undefined // [webxrsessionmanager] * required
				// an instance of webxrsessionmanager
				

				export let options = undefined // [iwebxrlightestimationoptions] * required
				// options to use when constructing this feature
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRLightEstimation(_xrSessionManager,options) : {}

				// ================ ACCESSORS ================

				
				export let attached = undefined // [boolean] 
				// is this feature attached
				

				export let reflectionCubeMapTexture = undefined // [nullable] 
				// 
				

				export let xrLightingEstimate = undefined // [nullable] 
				// 
				

				// ================ PROPERTIES ================

				
				export let directionalLight = undefined // [nullable] 
				// if createdirectionallightsource is set to true this light source will be created automatically.otherwise this can be set with an external directional light source.this light will be updated whenever the light estimation values change.
				

				export let disableAutoAttach = undefined // [boolean] 
				// should auto-attach be disabled?
				

				export let isDisposed = undefined // [boolean] 
				// is this feature disposed?
				

				export let onReflectionCubeMapUpdatedObservable = undefined // [observable] 
				// this observable will notify when the reflection cube map is updated.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRLightEstimation]`, ...args) : null

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

				reflectionCubeMapTexture = instance.reflectionCubeMapTexture

				xrLightingEstimate = instance.xrLightingEstimate
				if (directionalLight != undefined) instance.directionalLight = directionalLight?.instance || directionalLight
				directionalLight = instance.directionalLight
				if (disableAutoAttach != undefined) instance.disableAutoAttach = disableAutoAttach?.instance || disableAutoAttach
				disableAutoAttach = instance.disableAutoAttach
				if (isDisposed != undefined) instance.isDisposed = isDisposed?.instance || isDisposed
				isDisposed = instance.isDisposed
				if (onReflectionCubeMapUpdatedObservable != undefined) instance.onReflectionCubeMapUpdatedObservable = onReflectionCubeMapUpdatedObservable?.instance || onReflectionCubeMapUpdatedObservable
				onReflectionCubeMapUpdatedObservable = instance.onReflectionCubeMapUpdatedObservable
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

			