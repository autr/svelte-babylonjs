
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required
					webVROptions   
					enableGazeEvenWhenNoPointerLock  
					exitVROnDoubleTap  
					meshSelectionPredicate  
					onAfterCameraTeleport  
					onAfterEnteringVRObservable  
					onBeforeCameraTeleport  
					onControllerMeshLoadedObservable  
					onEnteringVRObservable  
					onExitingVRObservable  
					onMeshSelectedWithController  
					onNewMeshPicked  
					onNewMeshSelected  
					onSelectedMeshUnselected  
					raySelectionPredicate  
					requestPointerLockOnFullScreen  
					teleportationEnabled  
					updateControllerLaserColor  
					updateGazeTrackerColor  
					updateGazeTrackerScale  
					xr  
					xrTestDone  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// the scene the vrexperiencehelper belongs to.
				

				export let webVROptions = undefined // [vrexperiencehelperoptions] 
				// options to modify the vr experience helper's behavior.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.VRExperienceHelper(scene,webVROptions) : {}

				// ================ ACCESSORS ================

				
				export let currentVRCamera = undefined // [nullable] 
				// 
				

				export let deviceOrientationCamera = undefined // [nullable] 
				// 
				

				export let displayGaze = undefined // [boolean] 
				// 
				

				export let displayLaserPointer = undefined // [boolean] 
				// 
				

				export let gazeTrackerMesh = undefined // [mesh] 
				// 
				

				export let isInVRMode = undefined // [boolean] 
				// 
				

				export let leftControllerGazeTrackerMesh = undefined // [nullable] 
				// 
				

				export let onControllerMeshLoaded = undefined // [observable] 
				// 
				

				export let onEnteringVR = undefined // [observable] 
				// 
				

				export let onExitingVR = undefined // [observable] 
				// 
				

				export let position = undefined // [vector3] 
				// 
				

				export let rightControllerGazeTrackerMesh = undefined // [nullable] 
				// 
				

				export let teleportationTarget = undefined // [mesh] 
				// 
				

				export let vrButton = undefined // [nullable] 
				// 
				

				export let vrDeviceOrientationCamera = undefined // [nullable] 
				// 
				

				export let webVRCamera = undefined // [webvrfreecamera] 
				// 
				

				// ================ PROPERTIES ================

				
				export let enableGazeEvenWhenNoPointerLock = undefined // [boolean] 
				// gets or sets a boolean indicating that gaze can be enabled even if pointer lock is not engage (useful on ios where fullscreen mode and pointer lock are not supported)
				

				export let exitVROnDoubleTap = undefined // [boolean] 
				// gets or sets a boolean indicating that the vrexperiencehelper will exit vr if double tap is detected
				

				export let meshSelectionPredicate = undefined // [reflection] 
				// 
				

				export let onAfterCameraTeleport = undefined // [observable] 
				// observable raised after camera teleportation
				

				export let onAfterEnteringVRObservable = undefined // [observable] 
				// observable raised when entering vr has completed.
				

				export let onBeforeCameraTeleport = undefined // [observable] 
				// observable raised before camera teleportation
				

				export let onControllerMeshLoadedObservable = undefined // [observable] 
				// observable raised when controller mesh is loaded.
				

				export let onEnteringVRObservable = undefined // [observable] 
				// observable raised right before entering vr.
				

				export let onExitingVRObservable = undefined // [observable] 
				// observable raised when exiting vr.
				

				export let onMeshSelectedWithController = undefined // [observable] 
				// observable raised when a new mesh is selected based on meshselectionpredicate.this observable will provide the mesh and the controller used to select the mesh
				

				export let onNewMeshPicked = undefined // [observable] 
				// observable raised when a new mesh is picked based on meshselectionpredicate
				

				export let onNewMeshSelected = undefined // [observable] 
				// observable raised when a new mesh is selected based on meshselectionpredicate
				

				export let onSelectedMeshUnselected = undefined // [observable] 
				// observable raised when current selected mesh gets unselected
				

				export let raySelectionPredicate = undefined // [reflection] 
				// 
				

				export let requestPointerLockOnFullScreen = undefined // [boolean] 
				// defines whether or not pointer lock should be requested when switching tofull screen.
				

				export let teleportationEnabled = undefined // [boolean] 
				// set teleportation enabled. if set to false camera teleportation will be disabled but camera rotation will be kept.
				

				export let updateControllerLaserColor = undefined // [boolean] 
				// if the controller laser color should be updated when selecting meshes
				

				export let updateGazeTrackerColor = undefined // [boolean] 
				// if the gaze trackers color should be updated when selecting meshes
				

				export let updateGazeTrackerScale = undefined // [boolean] 
				// if the gaze trackers scale should be updated to be constant size when pointing at near/far meshes
				

				export let xr = undefined // [webxrdefaultexperience] 
				// if asking to force xr, this will be populated with the default xr experience
				

				export let xrTestDone = undefined // [boolean] 
				// was the xr test done already. if this is true and this.xr exists, xr is initialized.if this is true and no this.xr, xr exists but is not supported, using webvr.
				

				// ================ METHODS ================

				
				export let addFloorMesh = (...args) => instance.addFloorMesh(...args)

				export let changeGazeColor = (...args) => instance.changeGazeColor(...args)

				export let changeLaserColor = (...args) => instance.changeLaserColor(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let enableInteractions = (...args) => instance.enableInteractions(...args)

				export let enableTeleportation = (...args) => instance.enableTeleportation(...args)

				export let enterVR = (...args) => instance.enterVR(...args)

				export let exitVR = (...args) => instance.exitVR(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let removeFloorMesh = (...args) => instance.removeFloorMesh(...args)

				export let setGazeColor = (...args) => instance.setGazeColor(...args)

				export let setLaserColor = (...args) => instance.setLaserColor(...args)

				export let setLaserLightingState = (...args) => instance.setLaserLightingState(...args)

				export let teleportCamera = (...args) => instance.teleportCamera(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:VRExperienceHelper]`, ...args) : null

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

												if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (webVROptions != undefined) instance.webVROptions = webVROptions?.instance || webVROptions
				webVROptions = instance.webVROptions

				currentVRCamera = instance.currentVRCamera

				deviceOrientationCamera = instance.deviceOrientationCamera
				if (displayGaze != undefined) instance.displayGaze = displayGaze?.instance || displayGaze
				displayGaze = instance.displayGaze
				if (displayLaserPointer != undefined) instance.displayLaserPointer = displayLaserPointer?.instance || displayLaserPointer
				displayLaserPointer = instance.displayLaserPointer
				if (gazeTrackerMesh != undefined) instance.gazeTrackerMesh = gazeTrackerMesh?.instance || gazeTrackerMesh
				gazeTrackerMesh = instance.gazeTrackerMesh

				isInVRMode = instance.isInVRMode

				leftControllerGazeTrackerMesh = instance.leftControllerGazeTrackerMesh

				onControllerMeshLoaded = instance.onControllerMeshLoaded

				onEnteringVR = instance.onEnteringVR

				onExitingVR = instance.onExitingVR
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position

				rightControllerGazeTrackerMesh = instance.rightControllerGazeTrackerMesh
				if (teleportationTarget != undefined) instance.teleportationTarget = teleportationTarget?.instance || teleportationTarget
				teleportationTarget = instance.teleportationTarget

				vrButton = instance.vrButton

				vrDeviceOrientationCamera = instance.vrDeviceOrientationCamera

				webVRCamera = instance.webVRCamera
				if (enableGazeEvenWhenNoPointerLock != undefined) instance.enableGazeEvenWhenNoPointerLock = enableGazeEvenWhenNoPointerLock?.instance || enableGazeEvenWhenNoPointerLock
				enableGazeEvenWhenNoPointerLock = instance.enableGazeEvenWhenNoPointerLock
				if (exitVROnDoubleTap != undefined) instance.exitVROnDoubleTap = exitVROnDoubleTap?.instance || exitVROnDoubleTap
				exitVROnDoubleTap = instance.exitVROnDoubleTap
				if (meshSelectionPredicate != undefined) instance.meshSelectionPredicate = meshSelectionPredicate?.instance || meshSelectionPredicate
				meshSelectionPredicate = instance.meshSelectionPredicate
				if (onAfterCameraTeleport != undefined) instance.onAfterCameraTeleport = onAfterCameraTeleport?.instance || onAfterCameraTeleport
				onAfterCameraTeleport = instance.onAfterCameraTeleport
				if (onAfterEnteringVRObservable != undefined) instance.onAfterEnteringVRObservable = onAfterEnteringVRObservable?.instance || onAfterEnteringVRObservable
				onAfterEnteringVRObservable = instance.onAfterEnteringVRObservable
				if (onBeforeCameraTeleport != undefined) instance.onBeforeCameraTeleport = onBeforeCameraTeleport?.instance || onBeforeCameraTeleport
				onBeforeCameraTeleport = instance.onBeforeCameraTeleport
				if (onControllerMeshLoadedObservable != undefined) instance.onControllerMeshLoadedObservable = onControllerMeshLoadedObservable?.instance || onControllerMeshLoadedObservable
				onControllerMeshLoadedObservable = instance.onControllerMeshLoadedObservable
				if (onEnteringVRObservable != undefined) instance.onEnteringVRObservable = onEnteringVRObservable?.instance || onEnteringVRObservable
				onEnteringVRObservable = instance.onEnteringVRObservable
				if (onExitingVRObservable != undefined) instance.onExitingVRObservable = onExitingVRObservable?.instance || onExitingVRObservable
				onExitingVRObservable = instance.onExitingVRObservable
				if (onMeshSelectedWithController != undefined) instance.onMeshSelectedWithController = onMeshSelectedWithController?.instance || onMeshSelectedWithController
				onMeshSelectedWithController = instance.onMeshSelectedWithController
				if (onNewMeshPicked != undefined) instance.onNewMeshPicked = onNewMeshPicked?.instance || onNewMeshPicked
				onNewMeshPicked = instance.onNewMeshPicked
				if (onNewMeshSelected != undefined) instance.onNewMeshSelected = onNewMeshSelected?.instance || onNewMeshSelected
				onNewMeshSelected = instance.onNewMeshSelected
				if (onSelectedMeshUnselected != undefined) instance.onSelectedMeshUnselected = onSelectedMeshUnselected?.instance || onSelectedMeshUnselected
				onSelectedMeshUnselected = instance.onSelectedMeshUnselected
				if (raySelectionPredicate != undefined) instance.raySelectionPredicate = raySelectionPredicate?.instance || raySelectionPredicate
				raySelectionPredicate = instance.raySelectionPredicate
				if (requestPointerLockOnFullScreen != undefined) instance.requestPointerLockOnFullScreen = requestPointerLockOnFullScreen?.instance || requestPointerLockOnFullScreen
				requestPointerLockOnFullScreen = instance.requestPointerLockOnFullScreen
				if (teleportationEnabled != undefined) instance.teleportationEnabled = teleportationEnabled?.instance || teleportationEnabled
				teleportationEnabled = instance.teleportationEnabled
				if (updateControllerLaserColor != undefined) instance.updateControllerLaserColor = updateControllerLaserColor?.instance || updateControllerLaserColor
				updateControllerLaserColor = instance.updateControllerLaserColor
				if (updateGazeTrackerColor != undefined) instance.updateGazeTrackerColor = updateGazeTrackerColor?.instance || updateGazeTrackerColor
				updateGazeTrackerColor = instance.updateGazeTrackerColor
				if (updateGazeTrackerScale != undefined) instance.updateGazeTrackerScale = updateGazeTrackerScale?.instance || updateGazeTrackerScale
				updateGazeTrackerScale = instance.updateGazeTrackerScale
				if (xr != undefined) instance.xr = xr?.instance || xr
				xr = instance.xr
				if (xrTestDone != undefined) instance.xrTestDone = xrTestDone?.instance || xrTestDone
				xrTestDone = instance.xrTestDone

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

			