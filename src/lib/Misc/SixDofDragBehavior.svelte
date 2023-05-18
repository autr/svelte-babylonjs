
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					allowMultiPointer  
					currentDraggingPointerIds  
					detachCameraControls  
					disableMovement  
					dragDeltaRatio  
					draggableMeshes  
					faceCameraOnDragStart  
					onDragEndObservable  
					onDragObservable  
					onDragStartObservable  
					onPositionChangedObservable  
					rotateAroundYOnly  
					rotateDraggedObject  
					rotateWithMotionController  
					zDragFactor  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SixDofDragBehavior() : {}

				// ================ ACCESSORS ================

				
				export let currentDraggingPointerID = undefined // [number] 
				// 
				

				export let currentDraggingPointerId = undefined // [number] 
				// 
				

				export let isMoving = undefined // [boolean] 
				// 
				

				export let name = undefined // [string] 
				// gets or sets behavior's name
				

				// ================ PROPERTIES ================

				
				export let allowMultiPointer = undefined // [boolean] 
				// should the behavior allow simultaneous pointers to interact with the owner node.
				

				export let currentDraggingPointerIds = undefined // [array] 
				// in case of multipointer interaction, all pointer ids currently active are stored here
				

				export let detachCameraControls = undefined // [boolean] 
				// /** * if camera controls should be detached during the drag
				

				export let disableMovement = undefined // [boolean] 
				// use this flag to update the target but not move the owner node towards the target
				

				export let dragDeltaRatio = undefined // [number] 
				// the distance towards the target drag position to move each frame. this can be useful to avoid jitter. set this to 1 for no delay. (default: 0.2)
				

				export let draggableMeshes = undefined // [nullable] 
				// the list of child meshes that can receive drag eventsif 
				

				export let faceCameraOnDragStart = undefined // [boolean] 
				// should the object rotate towards the camera when we start dragging it
				

				export let onDragEndObservable = undefined // [observable] 
				// fires each time a drag ends (eg. mouse release after drag)
				

				export let onDragObservable = undefined // [observable] 
				// fires each time a drag happens
				

				export let onDragStartObservable = undefined // [observable] 
				// fires each time a drag starts
				

				export let onPositionChangedObservable = undefined // [observable] 
				// fires when position is updated
				

				export let rotateAroundYOnly = undefined // [boolean] 
				// if 
				

				export let rotateDraggedObject = undefined // [boolean] 
				// if the object should rotate to face the drag origin
				

				export let rotateWithMotionController = undefined // [boolean] 
				// should the behavior rotate 1:1 with the motion controller, when one is used.
				

				export let zDragFactor = undefined // [number] 
				// how much faster the object should move when the controller is moving towards it. this is useful to bring objects that are far away from the user to them faster. set this to 0 to avoid any speed increase. (default: 3)
				

				// ================ METHODS ================

				
				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let init = (...args) => instance.init(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SixDofDragBehavior]`, ...args) : null

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

												if (currentDraggingPointerID != undefined) instance.currentDraggingPointerID = currentDraggingPointerID?.instance || currentDraggingPointerID
				currentDraggingPointerID = instance.currentDraggingPointerID
				if (currentDraggingPointerId != undefined) instance.currentDraggingPointerId = currentDraggingPointerId?.instance || currentDraggingPointerId
				currentDraggingPointerId = instance.currentDraggingPointerId

				isMoving = instance.isMoving

				name = instance.name
				if (allowMultiPointer != undefined) instance.allowMultiPointer = allowMultiPointer?.instance || allowMultiPointer
				allowMultiPointer = instance.allowMultiPointer
				if (currentDraggingPointerIds != undefined) instance.currentDraggingPointerIds = currentDraggingPointerIds?.instance || currentDraggingPointerIds
				currentDraggingPointerIds = instance.currentDraggingPointerIds
				if (detachCameraControls != undefined) instance.detachCameraControls = detachCameraControls?.instance || detachCameraControls
				detachCameraControls = instance.detachCameraControls
				if (disableMovement != undefined) instance.disableMovement = disableMovement?.instance || disableMovement
				disableMovement = instance.disableMovement
				if (dragDeltaRatio != undefined) instance.dragDeltaRatio = dragDeltaRatio?.instance || dragDeltaRatio
				dragDeltaRatio = instance.dragDeltaRatio
				if (draggableMeshes != undefined) instance.draggableMeshes = draggableMeshes?.instance || draggableMeshes
				draggableMeshes = instance.draggableMeshes
				if (faceCameraOnDragStart != undefined) instance.faceCameraOnDragStart = faceCameraOnDragStart?.instance || faceCameraOnDragStart
				faceCameraOnDragStart = instance.faceCameraOnDragStart
				if (onDragEndObservable != undefined) instance.onDragEndObservable = onDragEndObservable?.instance || onDragEndObservable
				onDragEndObservable = instance.onDragEndObservable
				if (onDragObservable != undefined) instance.onDragObservable = onDragObservable?.instance || onDragObservable
				onDragObservable = instance.onDragObservable
				if (onDragStartObservable != undefined) instance.onDragStartObservable = onDragStartObservable?.instance || onDragStartObservable
				onDragStartObservable = instance.onDragStartObservable
				if (onPositionChangedObservable != undefined) instance.onPositionChangedObservable = onPositionChangedObservable?.instance || onPositionChangedObservable
				onPositionChangedObservable = instance.onPositionChangedObservable
				if (rotateAroundYOnly != undefined) instance.rotateAroundYOnly = rotateAroundYOnly?.instance || rotateAroundYOnly
				rotateAroundYOnly = instance.rotateAroundYOnly
				if (rotateDraggedObject != undefined) instance.rotateDraggedObject = rotateDraggedObject?.instance || rotateDraggedObject
				rotateDraggedObject = instance.rotateDraggedObject
				if (rotateWithMotionController != undefined) instance.rotateWithMotionController = rotateWithMotionController?.instance || rotateWithMotionController
				rotateWithMotionController = instance.rotateWithMotionController
				if (zDragFactor != undefined) instance.zDragFactor = zDragFactor?.instance || zDragFactor
				zDragFactor = instance.zDragFactor

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

			