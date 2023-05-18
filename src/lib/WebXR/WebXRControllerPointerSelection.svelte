
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_xrSessionManager  * required
					_options  * required 
					disableAutoAttach  
					disablePointerLighting  
					disableSelectionMeshLighting  
					displayLaserPointer  
					displaySelectionMesh  
					isDisposed  
					laserPointerDefaultColor  
					laserPointerPickedColor  
					raySelectionPredicate  
					selectionMeshDefaultColor  
					selectionMeshPickedColor  
					xrNativeFeatureName  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _xrSessionManager = undefined // [webxrsessionmanager] * required
				// the session manager for this module
				

				export let _options = undefined // [iwebxrcontrollerpointerselectionoptions] * required
				// read-only options to be used in this module
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRControllerPointerSelection(_xrSessionManager,_options) : {}

				// ================ ACCESSORS ================

				
				export let attached = undefined // [boolean] 
				// is this feature attached
				

				// ================ PROPERTIES ================

				
				export let disableAutoAttach = undefined // [boolean] 
				// should auto-attach be disabled?
				

				export let disablePointerLighting = undefined // [boolean] 
				// disable lighting on the laser pointer (so it will always be visible)
				

				export let disableSelectionMeshLighting = undefined // [boolean] 
				// disable lighting on the selection mesh (so it will always be visible)
				

				export let displayLaserPointer = undefined // [boolean] 
				// should the laser pointer be displayed
				

				export let displaySelectionMesh = undefined // [boolean] 
				// should the selection mesh be displayed (the ring at the end of the laser pointer)
				

				export let isDisposed = undefined // [boolean] 
				// is this feature disposed?
				

				export let laserPointerDefaultColor = undefined // [color3] 
				// default color of the laser pointer
				

				export let laserPointerPickedColor = undefined // [color3] 
				// this color will be set to the laser pointer when selection is triggered
				

				export let raySelectionPredicate = undefined // [reflection] 
				// 
				

				export let selectionMeshDefaultColor = undefined // [color3] 
				// default color of the selection ring
				

				export let selectionMeshPickedColor = undefined // [color3] 
				// this color will be applied to the selection ring when selection is triggered
				

				export let xrNativeFeatureName = undefined // [string] 
				// the name of the native xr feature name (like anchor, hit-test, or hand-tracking)
				

				// ================ METHODS ================

				
				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getMeshUnderPointer = (...args) => instance.getMeshUnderPointer(...args)

				export let getXRControllerByPointerId = (...args) => instance.getXRControllerByPointerId(...args)

				export let isCompatible = (...args) => instance.isCompatible(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRControllerPointerSelection]`, ...args) : null

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

				attached = instance.attached
				if (disableAutoAttach != undefined) instance.disableAutoAttach = disableAutoAttach?.instance || disableAutoAttach
				disableAutoAttach = instance.disableAutoAttach
				if (disablePointerLighting != undefined) instance.disablePointerLighting = disablePointerLighting?.instance || disablePointerLighting
				disablePointerLighting = instance.disablePointerLighting
				if (disableSelectionMeshLighting != undefined) instance.disableSelectionMeshLighting = disableSelectionMeshLighting?.instance || disableSelectionMeshLighting
				disableSelectionMeshLighting = instance.disableSelectionMeshLighting
				if (displayLaserPointer != undefined) instance.displayLaserPointer = displayLaserPointer?.instance || displayLaserPointer
				displayLaserPointer = instance.displayLaserPointer
				if (displaySelectionMesh != undefined) instance.displaySelectionMesh = displaySelectionMesh?.instance || displaySelectionMesh
				displaySelectionMesh = instance.displaySelectionMesh
				if (isDisposed != undefined) instance.isDisposed = isDisposed?.instance || isDisposed
				isDisposed = instance.isDisposed
				if (laserPointerDefaultColor != undefined) instance.laserPointerDefaultColor = laserPointerDefaultColor?.instance || laserPointerDefaultColor
				laserPointerDefaultColor = instance.laserPointerDefaultColor
				if (laserPointerPickedColor != undefined) instance.laserPointerPickedColor = laserPointerPickedColor?.instance || laserPointerPickedColor
				laserPointerPickedColor = instance.laserPointerPickedColor
				if (raySelectionPredicate != undefined) instance.raySelectionPredicate = raySelectionPredicate?.instance || raySelectionPredicate
				raySelectionPredicate = instance.raySelectionPredicate
				if (selectionMeshDefaultColor != undefined) instance.selectionMeshDefaultColor = selectionMeshDefaultColor?.instance || selectionMeshDefaultColor
				selectionMeshDefaultColor = instance.selectionMeshDefaultColor
				if (selectionMeshPickedColor != undefined) instance.selectionMeshPickedColor = selectionMeshPickedColor?.instance || selectionMeshPickedColor
				selectionMeshPickedColor = instance.selectionMeshPickedColor
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

			