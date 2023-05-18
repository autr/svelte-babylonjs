
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
					backwardsMovementEnabled  
					backwardsTeleportationDistance  
					disableAutoAttach  
					isDisposed  
					onTargetMeshPositionUpdatedObservable  
					parabolicCheckRadius  
					parabolicRayEnabled  
					rotationAngle  
					skipNextTeleportation  
					straightRayEnabled  
					teleportationEnabled  
					xrNativeFeatureName  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _xrSessionManager = undefined // [webxrsessionmanager] * required
				// an instance of webxrsessionmanager
				

				export let _options = undefined // [iwebxrteleportationoptions] * required
				// configuration object for this feature
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRMotionControllerTeleportation(_xrSessionManager,_options) : {}

				// ================ ACCESSORS ================

				
				export let attached = undefined // [boolean] 
				// is this feature attached
				

				export let rotationEnabled = undefined // [boolean] 
				// 
				

				export let snapPointsOnly = undefined // [boolean] 
				// 
				

				export let teleportationTargetMesh = undefined // [nullable] 
				// 
				

				// ================ PROPERTIES ================

				
				export let backwardsMovementEnabled = undefined // [boolean] 
				// is movement backwards enabled
				

				export let backwardsTeleportationDistance = undefined // [number] 
				// distance to travel when moving backwards
				

				export let disableAutoAttach = undefined // [boolean] 
				// should auto-attach be disabled?
				

				export let isDisposed = undefined // [boolean] 
				// is this feature disposed?
				

				export let onTargetMeshPositionUpdatedObservable = undefined // [observable] 
				// this observable will notify when the target mesh position was updated.the picking info it provides contains the point to which the target mesh will move ()
				

				export let parabolicCheckRadius = undefined // [number] 
				// the distance from the user to the inspection point in the direction of the controllera higher number will allow the user to move furtherdefaults to 5 (meters, in xr units)
				

				export let parabolicRayEnabled = undefined // [boolean] 
				// should the module support parabolic ray on top of direct rayif enabled, the user will be able to point "at the sky" and move according to predefined radius distancevery helpful when moving between floors / different heights
				

				export let rotationAngle = undefined // [number] 
				// how much rotation should be applied when rotating right and left
				

				export let skipNextTeleportation = undefined // [boolean] 
				// skip the next teleportation. this can be controlled by the user to prevent the user from teleportationto sections that are not yet "unlocked", but should still show the teleportation mesh.
				

				export let straightRayEnabled = undefined // [boolean] 
				// the second type of ray - straight line.should it be enabled or should the parabolic line be the only one.
				

				export let teleportationEnabled = undefined // [boolean] 
				// is teleportation enabled. can be used to allow rotation only.
				

				export let xrNativeFeatureName = undefined // [string] 
				// the name of the native xr feature name (like anchor, hit-test, or hand-tracking)
				

				// ================ METHODS ================

				
				export let addBlockerMesh = (...args) => instance.addBlockerMesh(...args)

				export let addFloorMesh = (...args) => instance.addFloorMesh(...args)

				export let addSnapPoint = (...args) => instance.addSnapPoint(...args)

				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let isCompatible = (...args) => instance.isCompatible(...args)

				export let removeBlockerMesh = (...args) => instance.removeBlockerMesh(...args)

				export let removeFloorMesh = (...args) => instance.removeFloorMesh(...args)

				export let removeFloorMeshByName = (...args) => instance.removeFloorMeshByName(...args)

				export let removeSnapPoint = (...args) => instance.removeSnapPoint(...args)

				export let setSelectionFeature = (...args) => instance.setSelectionFeature(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRMotionControllerTeleportation]`, ...args) : null

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
				if (rotationEnabled != undefined) instance.rotationEnabled = rotationEnabled?.instance || rotationEnabled
				rotationEnabled = instance.rotationEnabled
				if (snapPointsOnly != undefined) instance.snapPointsOnly = snapPointsOnly?.instance || snapPointsOnly
				snapPointsOnly = instance.snapPointsOnly

				teleportationTargetMesh = instance.teleportationTargetMesh
				if (backwardsMovementEnabled != undefined) instance.backwardsMovementEnabled = backwardsMovementEnabled?.instance || backwardsMovementEnabled
				backwardsMovementEnabled = instance.backwardsMovementEnabled
				if (backwardsTeleportationDistance != undefined) instance.backwardsTeleportationDistance = backwardsTeleportationDistance?.instance || backwardsTeleportationDistance
				backwardsTeleportationDistance = instance.backwardsTeleportationDistance
				if (disableAutoAttach != undefined) instance.disableAutoAttach = disableAutoAttach?.instance || disableAutoAttach
				disableAutoAttach = instance.disableAutoAttach
				if (isDisposed != undefined) instance.isDisposed = isDisposed?.instance || isDisposed
				isDisposed = instance.isDisposed
				if (onTargetMeshPositionUpdatedObservable != undefined) instance.onTargetMeshPositionUpdatedObservable = onTargetMeshPositionUpdatedObservable?.instance || onTargetMeshPositionUpdatedObservable
				onTargetMeshPositionUpdatedObservable = instance.onTargetMeshPositionUpdatedObservable
				if (parabolicCheckRadius != undefined) instance.parabolicCheckRadius = parabolicCheckRadius?.instance || parabolicCheckRadius
				parabolicCheckRadius = instance.parabolicCheckRadius
				if (parabolicRayEnabled != undefined) instance.parabolicRayEnabled = parabolicRayEnabled?.instance || parabolicRayEnabled
				parabolicRayEnabled = instance.parabolicRayEnabled
				if (rotationAngle != undefined) instance.rotationAngle = rotationAngle?.instance || rotationAngle
				rotationAngle = instance.rotationAngle
				if (skipNextTeleportation != undefined) instance.skipNextTeleportation = skipNextTeleportation?.instance || skipNextTeleportation
				skipNextTeleportation = instance.skipNextTeleportation
				if (straightRayEnabled != undefined) instance.straightRayEnabled = straightRayEnabled?.instance || straightRayEnabled
				straightRayEnabled = instance.straightRayEnabled
				if (teleportationEnabled != undefined) instance.teleportationEnabled = teleportationEnabled?.instance || teleportationEnabled
				teleportationEnabled = instance.teleportationEnabled
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

			