
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					options   
					attachedNode  
					currentDraggingPointerId  
					detachCameraControls  
					dragButtons  
					dragDeltaRatio  
					dragging  
					lastDragPosition  
					maxDragAngle  
					moveAttached  
					onDragEndObservable  
					onDragObservable  
					onDragStartObservable  
					onEnabledObservable  
					startAndReleaseDragOnPointerEvents  
					updateDragPlane  
					useObjectOrientationForDragging  
					validateDrag  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let options = undefined // [reflection] 
				// the drag axis or normal of the plane that will be dragged across. if no options are specified the drag plane will always face the ray's origin (eg. camera)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PointerDragBehavior(options) : {}

				// ================ ACCESSORS ================

				
				export let currentDraggingPointerID = undefined // [number] 
				// 
				

				export let enabled = undefined // [boolean] 
				// 
				

				export let name = undefined // [string] 
				// gets or sets behavior's name
				

				// ================ PROPERTIES ================

				
				export let attachedNode = undefined // [abstractmesh] 
				// abstract mesh the behavior is set on
				

				export let currentDraggingPointerId = undefined // [number] 
				// the id of the pointer that is currently interacting with the behavior (-1 when no pointer is active)
				

				export let detachCameraControls = undefined // [boolean] 
				// if camera controls should be detached during the drag
				

				export let dragButtons = undefined // [array] 
				// butttons that can be used to initiate a drag
				

				export let dragDeltaRatio = undefined // [number] 
				// the distance towards the target drag position to move each frame. this can be useful to avoid jitter. set this to 1 for no delay. (default: 0.2)
				

				export let dragging = undefined // [boolean] 
				// if the behavior is currently in a dragging state
				

				export let lastDragPosition = undefined // [vector3] 
				// the last position where the pointer hit the drag plane in world space
				

				export let maxDragAngle = undefined // [number] 
				// the maximum tolerated angle between the drag plane and dragging pointer rays to trigger pointer events. set to 0 to allow any angle (default: 0)
				

				export let moveAttached = undefined // [boolean] 
				// if the attached mesh should be moved when dragged
				

				export let onDragEndObservable = undefined // [observable] 
				// fires each time a drag ends (eg. mouse release after drag) * dragplanepoint in world space where the drag intersects the drag plane (if validateddrag is used, the position of the attached mesh might not equal dragplanepoint)
				

				export let onDragObservable = undefined // [observable] 
				// fires each time the attached mesh is dragged with the pointer * delta between last drag position and current drag position in world space * dragdistance along the drag axis * dragplanenormal normal of the current drag plane used during the drag * dragplanepoint in world space where the drag intersects the drag plane (if validateddrag is used, the position of the attached mesh might not equal dragplanepoint)
				

				export let onDragStartObservable = undefined // [observable] 
				// fires each time a drag begins (eg. mouse down on mesh) * dragplanepoint in world space where the drag intersects the drag plane (if validateddrag is used, the position of the attached mesh might not equal dragplanepoint)
				

				export let onEnabledObservable = undefined // [observable] 
				// fires each time behavior enabled state changes
				

				export let startAndReleaseDragOnPointerEvents = undefined // [boolean] 
				// if pointer events should start and release the drag (default: true)
				

				export let updateDragPlane = undefined // [boolean] 
				// if the drag plane orientation should be updated during the dragging (default: true)
				

				export let useObjectOrientationForDragging = undefined // [boolean] 
				// if set, the drag plane/axis will be rotated based on the attached mesh's world rotation (default: true)
				

				export let validateDrag = undefined // [reflection] 
				// 
				

				// ================ METHODS ================

				
				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let init = (...args) => instance.init(...args)

				export let releaseDrag = (...args) => instance.releaseDrag(...args)

				export let startDrag = (...args) => instance.startDrag(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PointerDragBehavior]`, ...args) : null

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

												if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (currentDraggingPointerID != undefined) instance.currentDraggingPointerID = currentDraggingPointerID?.instance || currentDraggingPointerID
				currentDraggingPointerID = instance.currentDraggingPointerID
				if (enabled != undefined) instance.enabled = enabled?.instance || enabled
				enabled = instance.enabled

				name = instance.name
				if (attachedNode != undefined) instance.attachedNode = attachedNode?.instance || attachedNode
				attachedNode = instance.attachedNode
				if (currentDraggingPointerId != undefined) instance.currentDraggingPointerId = currentDraggingPointerId?.instance || currentDraggingPointerId
				currentDraggingPointerId = instance.currentDraggingPointerId
				if (detachCameraControls != undefined) instance.detachCameraControls = detachCameraControls?.instance || detachCameraControls
				detachCameraControls = instance.detachCameraControls
				if (dragButtons != undefined) instance.dragButtons = dragButtons?.instance || dragButtons
				dragButtons = instance.dragButtons
				if (dragDeltaRatio != undefined) instance.dragDeltaRatio = dragDeltaRatio?.instance || dragDeltaRatio
				dragDeltaRatio = instance.dragDeltaRatio
				if (dragging != undefined) instance.dragging = dragging?.instance || dragging
				dragging = instance.dragging
				if (lastDragPosition != undefined) instance.lastDragPosition = lastDragPosition?.instance || lastDragPosition
				lastDragPosition = instance.lastDragPosition
				if (maxDragAngle != undefined) instance.maxDragAngle = maxDragAngle?.instance || maxDragAngle
				maxDragAngle = instance.maxDragAngle
				if (moveAttached != undefined) instance.moveAttached = moveAttached?.instance || moveAttached
				moveAttached = instance.moveAttached
				if (onDragEndObservable != undefined) instance.onDragEndObservable = onDragEndObservable?.instance || onDragEndObservable
				onDragEndObservable = instance.onDragEndObservable
				if (onDragObservable != undefined) instance.onDragObservable = onDragObservable?.instance || onDragObservable
				onDragObservable = instance.onDragObservable
				if (onDragStartObservable != undefined) instance.onDragStartObservable = onDragStartObservable?.instance || onDragStartObservable
				onDragStartObservable = instance.onDragStartObservable
				if (onEnabledObservable != undefined) instance.onEnabledObservable = onEnabledObservable?.instance || onEnabledObservable
				onEnabledObservable = instance.onEnabledObservable
				if (startAndReleaseDragOnPointerEvents != undefined) instance.startAndReleaseDragOnPointerEvents = startAndReleaseDragOnPointerEvents?.instance || startAndReleaseDragOnPointerEvents
				startAndReleaseDragOnPointerEvents = instance.startAndReleaseDragOnPointerEvents
				if (updateDragPlane != undefined) instance.updateDragPlane = updateDragPlane?.instance || updateDragPlane
				updateDragPlane = instance.updateDragPlane
				if (useObjectOrientationForDragging != undefined) instance.useObjectOrientationForDragging = useObjectOrientationForDragging?.instance || useObjectOrientationForDragging
				useObjectOrientationForDragging = instance.useObjectOrientationForDragging
				if (validateDrag != undefined) instance.validateDrag = validateDrag?.instance || validateDrag
				validateDrag = instance.validateDrag

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

			