
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_xrSessionManager  * required 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _xrSessionManager = undefined // [webxrsessionmanager] * required
				// an instance of webxrsessionmanager
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRFeaturesManager(_xrSessionManager) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let _extendXRSessionInitObject = (...args) => instance._extendXRSessionInitObject(...args)

				export let attachFeature = (...args) => instance.attachFeature(...args)

				export let detachFeature = (...args) => instance.detachFeature(...args)

				export let disableFeature = (...args) => instance.disableFeature(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let enableFeature = (...args) => instance.enableFeature(...args)

				export let getEnabledFeature = (...args) => instance.getEnabledFeature(...args)

				export let getEnabledFeatures = (...args) => instance.getEnabledFeatures(...args)

				export let AddWebXRFeature = (...args) => instance.AddWebXRFeature(...args)

				export let ConstructFeature = (...args) => instance.ConstructFeature(...args)

				export let GetAvailableFeatures = (...args) => instance.GetAvailableFeatures(...args)

				export let GetAvailableVersions = (...args) => instance.GetAvailableVersions(...args)

				export let GetLatestVersionOfFeature = (...args) => instance.GetLatestVersionOfFeature(...args)

				export let GetStableVersionOfFeature = (...args) => instance.GetStableVersionOfFeature(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRFeaturesManager]`, ...args) : null

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

			