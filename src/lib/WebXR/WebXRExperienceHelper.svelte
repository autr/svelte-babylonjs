
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					camera  
					featuresManager  
					onInitialXRPoseSetObservable  
					onStateChangedObservable  
					sessionManager  
					state  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRExperienceHelper() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let camera = undefined // [webxrcamera] 
				// camera used to render xr content
				

				export let featuresManager = undefined // [webxrfeaturesmanager] 
				// a features manager for this xr session
				

				export let onInitialXRPoseSetObservable = undefined // [observable] 
				// observers registered here will be triggered after the camera's initial transformation is setthis can be used to set a different ground level or an extra rotation.note that ground level is considered to be at 0. the height defined by the xr camera will be addedto the position set after this observable is done executing.
				

				export let onStateChangedObservable = undefined // [observable] 
				// fires when the state of the experience helper has changed
				

				export let sessionManager = undefined // [webxrsessionmanager] 
				// session manager used to keep track of xr session
				

				export let state = undefined // [webxrstate] 
				// the current state of the xr experience (eg. transitioning, in xr or not in xr)
				

				// ================ METHODS ================

				
				export let disableSpecatatorMode = (...args) => instance.disableSpecatatorMode(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let enableSpectatorMode = (...args) => instance.enableSpectatorMode(...args)

				export let enterXRAsync = (...args) => instance.enterXRAsync(...args)

				export let exitXRAsync = (...args) => instance.exitXRAsync(...args)

				export let CreateAsync = (...args) => instance.CreateAsync(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRExperienceHelper]`, ...args) : null

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
				if (featuresManager != undefined) instance.featuresManager = featuresManager?.instance || featuresManager
				featuresManager = instance.featuresManager
				if (onInitialXRPoseSetObservable != undefined) instance.onInitialXRPoseSetObservable = onInitialXRPoseSetObservable?.instance || onInitialXRPoseSetObservable
				onInitialXRPoseSetObservable = instance.onInitialXRPoseSetObservable
				if (onStateChangedObservable != undefined) instance.onStateChangedObservable = onStateChangedObservable?.instance || onStateChangedObservable
				onStateChangedObservable = instance.onStateChangedObservable
				if (sessionManager != undefined) instance.sessionManager = sessionManager?.instance || sessionManager
				sessionManager = instance.sessionManager
				if (state != undefined) instance.state = state?.instance || state
				state = instance.state

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

			