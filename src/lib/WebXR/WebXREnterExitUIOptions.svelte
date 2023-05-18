
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					customButtons  
					ignoreSessionGrantedEvent  
					onError  
					optionalFeatures  
					referenceSpaceType  
					renderTarget  
					requiredFeatures  
					sessionMode  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXREnterExitUIOptions() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let customButtons = undefined // [array] 
				// user provided buttons to enable/disable webxr. the system will provide default if not set
				

				export let ignoreSessionGrantedEvent = undefined // [boolean] 
				// if set, the 
				

				export let onError = undefined // [reflection] 
				// 
				

				export let optionalFeatures = undefined // [array] 
				// a list of optional features to init the session with
				

				export let referenceSpaceType = undefined // [xrreferencespacetype] 
				// a reference space type to use when creating the default button.default is local-floor
				

				export let renderTarget = undefined // [nullable] 
				// context to enter xr with
				

				export let requiredFeatures = undefined // [array] 
				// a list of optional features to init the session with
				

				export let sessionMode = undefined // [xrsessionmode] 
				// a session mode to use when creating the default button.default is immersive-vr
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXREnterExitUIOptions]`, ...args) : null

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

												if (customButtons != undefined) instance.customButtons = customButtons?.instance || customButtons
				customButtons = instance.customButtons
				if (ignoreSessionGrantedEvent != undefined) instance.ignoreSessionGrantedEvent = ignoreSessionGrantedEvent?.instance || ignoreSessionGrantedEvent
				ignoreSessionGrantedEvent = instance.ignoreSessionGrantedEvent
				if (onError != undefined) instance.onError = onError?.instance || onError
				onError = instance.onError
				if (optionalFeatures != undefined) instance.optionalFeatures = optionalFeatures?.instance || optionalFeatures
				optionalFeatures = instance.optionalFeatures
				if (referenceSpaceType != undefined) instance.referenceSpaceType = referenceSpaceType?.instance || referenceSpaceType
				referenceSpaceType = instance.referenceSpaceType
				if (renderTarget != undefined) instance.renderTarget = renderTarget?.instance || renderTarget
				renderTarget = instance.renderTarget
				if (requiredFeatures != undefined) instance.requiredFeatures = requiredFeatures?.instance || requiredFeatures
				requiredFeatures = instance.requiredFeatures
				if (sessionMode != undefined) instance.sessionMode = sessionMode?.instance || sessionMode
				sessionMode = instance.sessionMode

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

			