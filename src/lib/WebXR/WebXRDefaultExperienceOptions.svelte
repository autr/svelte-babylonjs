
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					disableDefaultUI  
					disableNearInteraction  
					disablePointerSelection  
					disableTeleportation  
					floorMeshes  
					ignoreNativeCameraTransformation  
					inputOptions  
					nearInteractionOptions  
					optionalFeatures  
					outputCanvasOptions  
					pointerSelectionOptions  
					renderingGroupId  
					teleportationOptions  
					uiOptions  
					useStablePlugins  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRDefaultExperienceOptions() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let disableDefaultUI = undefined // [boolean] 
				// enable or disable default ui to enter xr
				

				export let disableNearInteraction = undefined // [boolean] 
				// should nearinteraction not initialize. defaults to false.
				

				export let disablePointerSelection = undefined // [boolean] 
				// should pointer selection not initialize.note that disabling pointer selection also disables teleportation.defaults to false.
				

				export let disableTeleportation = undefined // [boolean] 
				// should teleportation not initialize. defaults to false.
				

				export let floorMeshes = undefined // [array] 
				// floor meshes that will be used for teleport
				

				export let ignoreNativeCameraTransformation = undefined // [boolean] 
				// if set to true, the first frame will not be used to reset positionthe first frame is mainly used when copying transformation from the old cameramainly used in ar
				

				export let inputOptions = undefined // [partial] 
				// optional configuration for the xr input object
				

				export let nearInteractionOptions = undefined // [partial] 
				// optional configuration for near interaction
				

				export let optionalFeatures = undefined // [union] 
				// a list of optional features to init the session withif set to true, all features we support will be added
				

				export let outputCanvasOptions = undefined // [webxrmanagedoutputcanvasoptions] 
				// optional configuration for the output canvas
				

				export let pointerSelectionOptions = undefined // [partial] 
				// optional configuration for pointer selection
				

				export let renderingGroupId = undefined // [number] 
				// an optional rendering group id that will be set globally for teleportation, pointer selection and default controller meshes
				

				export let teleportationOptions = undefined // [partial] 
				// optional configuration for teleportation
				

				export let uiOptions = undefined // [partial] 
				// optional ui options. this can be used among other to change session mode and reference space type
				

				export let useStablePlugins = undefined // [boolean] 
				// when loading teleportation and pointer select, use stable versions instead of latest.
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRDefaultExperienceOptions]`, ...args) : null

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

												if (disableDefaultUI != undefined) instance.disableDefaultUI = disableDefaultUI?.instance || disableDefaultUI
				disableDefaultUI = instance.disableDefaultUI
				if (disableNearInteraction != undefined) instance.disableNearInteraction = disableNearInteraction?.instance || disableNearInteraction
				disableNearInteraction = instance.disableNearInteraction
				if (disablePointerSelection != undefined) instance.disablePointerSelection = disablePointerSelection?.instance || disablePointerSelection
				disablePointerSelection = instance.disablePointerSelection
				if (disableTeleportation != undefined) instance.disableTeleportation = disableTeleportation?.instance || disableTeleportation
				disableTeleportation = instance.disableTeleportation
				if (floorMeshes != undefined) instance.floorMeshes = floorMeshes?.instance || floorMeshes
				floorMeshes = instance.floorMeshes
				if (ignoreNativeCameraTransformation != undefined) instance.ignoreNativeCameraTransformation = ignoreNativeCameraTransformation?.instance || ignoreNativeCameraTransformation
				ignoreNativeCameraTransformation = instance.ignoreNativeCameraTransformation
				if (inputOptions != undefined) instance.inputOptions = inputOptions?.instance || inputOptions
				inputOptions = instance.inputOptions
				if (nearInteractionOptions != undefined) instance.nearInteractionOptions = nearInteractionOptions?.instance || nearInteractionOptions
				nearInteractionOptions = instance.nearInteractionOptions
				if (optionalFeatures != undefined) instance.optionalFeatures = optionalFeatures?.instance || optionalFeatures
				optionalFeatures = instance.optionalFeatures
				if (outputCanvasOptions != undefined) instance.outputCanvasOptions = outputCanvasOptions?.instance || outputCanvasOptions
				outputCanvasOptions = instance.outputCanvasOptions
				if (pointerSelectionOptions != undefined) instance.pointerSelectionOptions = pointerSelectionOptions?.instance || pointerSelectionOptions
				pointerSelectionOptions = instance.pointerSelectionOptions
				if (renderingGroupId != undefined) instance.renderingGroupId = renderingGroupId?.instance || renderingGroupId
				renderingGroupId = instance.renderingGroupId
				if (teleportationOptions != undefined) instance.teleportationOptions = teleportationOptions?.instance || teleportationOptions
				teleportationOptions = instance.teleportationOptions
				if (uiOptions != undefined) instance.uiOptions = uiOptions?.instance || uiOptions
				uiOptions = instance.uiOptions
				if (useStablePlugins != undefined) instance.useStablePlugins = useStablePlugins?.instance || useStablePlugins
				useStablePlugins = instance.useStablePlugins

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

			