
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					color  
					gizmoLayer   
					_rootMesh  
					fixedDragMeshBoundsSize  
					fixedDragMeshScreenSize  
					fixedDragMeshScreenSizeDistanceFactor  
					ignoreChildren  
					includeChildPredicate  
					onDragStartObservable  
					onRotationSphereDragEndObservable  
					onRotationSphereDragObservable  
					onScaleBoxDragEndObservable  
					onScaleBoxDragObservable  
					rotationSphereSize  
					scaleBoxSize  
					scalePivot  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let color = undefined // [color3] 
				// the color of the gizmo
				

				export let gizmoLayer = undefined // [utilitylayerrenderer] 
				// the utility layer the gizmo will be added to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BoundingBoxGizmo(color,gizmoLayer) : {}

				// ================ ACCESSORS ================

				
				export let attachedMesh = undefined // [nullable] 
				// mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)* when set, interactions will be enabled
				

				export let attachedNode = undefined // [nullable] 
				// node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or nodetransform that will be dragged)* when set, interactions will be enabled
				

				export let axisFactor = undefined // [vector3] 
				// scale factor vector used for masking some axis
				

				export let coloredMaterial = undefined // [standardmaterial] 
				// default material used to render when gizmo is not disabled or hovered
				

				export let customRotationQuaternion = undefined // [nullable] 
				// posture that the gizmo will be displaywhen set null, default value will be used (quaternion(0, 0, 0, 1))
				

				export let hoverMaterial = undefined // [standardmaterial] 
				// material used to render when gizmo is hovered with mouse
				

				export let isHovered = undefined // [boolean] 
				// true when the mouse pointer is hovered a gizmo mesh
				

				export let pointerDragBehavior = undefined // [pointerdragbehavior] 
				// 
				

				export let scaleDragSpeed = undefined // [number] 
				// scale factor scalar affecting all axes' drag speed
				

				export let scaleRatio = undefined // [number] 
				// ratio for the scale of the gizmo
				

				export let updateGizmoPositionToMatchAttachedMesh = undefined // [boolean] 
				// if set the gizmo's position will be updated to match the attached mesh each frame (default: true)
				

				export let updateGizmoRotationToMatchAttachedMesh = undefined // [boolean] 
				// if set the gizmo's rotation will be updated to match the attached mesh each frame (default: true)
				

				export let updateScale = undefined // [boolean] 
				// when set, the gizmo will always appear the same size no matter where the camera is (default: true)
				

				// ================ PROPERTIES ================

				
				export let _rootMesh = undefined // [mesh] 
				// the root mesh of the gizmo
				

				export let fixedDragMeshBoundsSize = undefined // [boolean] 
				// if set, the rotation spheres and scale boxes will increase in size based on the size of the bounding boxnote : fixeddragmeshscreensize takes precedence over fixeddragmeshboundssize if both are true
				

				export let fixedDragMeshScreenSize = undefined // [boolean] 
				// if set, the rotation spheres and scale boxes will increase in size based on the distance away from the camera to have a consistent screen size (default: false)note : fixeddragmeshscreensize takes precedence over fixeddragmeshboundssize if both are true
				

				export let fixedDragMeshScreenSizeDistanceFactor = undefined // [number] 
				// the distance away from the object which the draggable meshes should appear world sized when fixeddragmeshscreensize is set to true (default: 10)
				

				export let ignoreChildren = undefined // [boolean] 
				// if child meshes should be ignored when calculating the bounding box. this should be set to true to avoid perf hits with heavily nested meshes (default: false)
				

				export let includeChildPredicate = undefined // [nullable] 
				// returns true if a descendant should be included when computing the bounding box. when null, all descendants are included. if ignorechildren is set this will be ignored. (default: null)
				

				export let onDragStartObservable = undefined // [observable] 
				// fired when a rotation sphere or scale box is dragged
				

				export let onRotationSphereDragEndObservable = undefined // [observable] 
				// fired when a rotation sphere drag is ended
				

				export let onRotationSphereDragObservable = undefined // [observable] 
				// fired when a rotation sphere is dragged
				

				export let onScaleBoxDragEndObservable = undefined // [observable] 
				// fired when a scale box drag is ended
				

				export let onScaleBoxDragObservable = undefined // [observable] 
				// fired when a scale box is dragged
				

				export let rotationSphereSize = undefined // [number] 
				// the size of the rotation spheres attached to the bounding box (default: 0.1)
				

				export let scaleBoxSize = undefined // [number] 
				// the size of the scale boxes attached to the bounding box (default: 0.1)
				

				export let scalePivot = undefined // [nullable] 
				// relative bounding box pivot used when scaling the attached node. when null object with scale from the opposite corner. 0.5,0.5,0.5 for center and 0.5,0,0.5 for bottom (default: null)
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let enableDragBehavior = (...args) => instance.enableDragBehavior(...args)

				export let getScaleBoxes = (...args) => instance.getScaleBoxes(...args)

				export let setColor = (...args) => instance.setColor(...args)

				export let setCustomMesh = (...args) => instance.setCustomMesh(...args)

				export let setEnabledRotationAxis = (...args) => instance.setEnabledRotationAxis(...args)

				export let setEnabledScaling = (...args) => instance.setEnabledScaling(...args)

				export let updateBoundingBox = (...args) => instance.updateBoundingBox(...args)

				export let GizmoAxisPointerObserver = (...args) => instance.GizmoAxisPointerObserver(...args)

				export let MakeNotPickableAndWrapInBoundingBox = (...args) => instance.MakeNotPickableAndWrapInBoundingBox(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BoundingBoxGizmo]`, ...args) : null

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

												if (color != undefined) instance.color = color?.instance || color
				color = instance.color
				if (gizmoLayer != undefined) instance.gizmoLayer = gizmoLayer?.instance || gizmoLayer
				gizmoLayer = instance.gizmoLayer
				if (attachedMesh != undefined) instance.attachedMesh = attachedMesh?.instance || attachedMesh
				attachedMesh = instance.attachedMesh
				if (attachedNode != undefined) instance.attachedNode = attachedNode?.instance || attachedNode
				attachedNode = instance.attachedNode
				if (axisFactor != undefined) instance.axisFactor = axisFactor?.instance || axisFactor
				axisFactor = instance.axisFactor

				coloredMaterial = instance.coloredMaterial
				if (customRotationQuaternion != undefined) instance.customRotationQuaternion = customRotationQuaternion?.instance || customRotationQuaternion
				customRotationQuaternion = instance.customRotationQuaternion

				hoverMaterial = instance.hoverMaterial

				isHovered = instance.isHovered

				pointerDragBehavior = instance.pointerDragBehavior
				if (scaleDragSpeed != undefined) instance.scaleDragSpeed = scaleDragSpeed?.instance || scaleDragSpeed
				scaleDragSpeed = instance.scaleDragSpeed
				if (scaleRatio != undefined) instance.scaleRatio = scaleRatio?.instance || scaleRatio
				scaleRatio = instance.scaleRatio
				if (updateGizmoPositionToMatchAttachedMesh != undefined) instance.updateGizmoPositionToMatchAttachedMesh = updateGizmoPositionToMatchAttachedMesh?.instance || updateGizmoPositionToMatchAttachedMesh
				updateGizmoPositionToMatchAttachedMesh = instance.updateGizmoPositionToMatchAttachedMesh
				if (updateGizmoRotationToMatchAttachedMesh != undefined) instance.updateGizmoRotationToMatchAttachedMesh = updateGizmoRotationToMatchAttachedMesh?.instance || updateGizmoRotationToMatchAttachedMesh
				updateGizmoRotationToMatchAttachedMesh = instance.updateGizmoRotationToMatchAttachedMesh
				if (updateScale != undefined) instance.updateScale = updateScale?.instance || updateScale
				updateScale = instance.updateScale
				if (_rootMesh != undefined) instance._rootMesh = _rootMesh?.instance || _rootMesh
				_rootMesh = instance._rootMesh
				if (fixedDragMeshBoundsSize != undefined) instance.fixedDragMeshBoundsSize = fixedDragMeshBoundsSize?.instance || fixedDragMeshBoundsSize
				fixedDragMeshBoundsSize = instance.fixedDragMeshBoundsSize
				if (fixedDragMeshScreenSize != undefined) instance.fixedDragMeshScreenSize = fixedDragMeshScreenSize?.instance || fixedDragMeshScreenSize
				fixedDragMeshScreenSize = instance.fixedDragMeshScreenSize
				if (fixedDragMeshScreenSizeDistanceFactor != undefined) instance.fixedDragMeshScreenSizeDistanceFactor = fixedDragMeshScreenSizeDistanceFactor?.instance || fixedDragMeshScreenSizeDistanceFactor
				fixedDragMeshScreenSizeDistanceFactor = instance.fixedDragMeshScreenSizeDistanceFactor
				if (ignoreChildren != undefined) instance.ignoreChildren = ignoreChildren?.instance || ignoreChildren
				ignoreChildren = instance.ignoreChildren
				if (includeChildPredicate != undefined) instance.includeChildPredicate = includeChildPredicate?.instance || includeChildPredicate
				includeChildPredicate = instance.includeChildPredicate
				if (onDragStartObservable != undefined) instance.onDragStartObservable = onDragStartObservable?.instance || onDragStartObservable
				onDragStartObservable = instance.onDragStartObservable
				if (onRotationSphereDragEndObservable != undefined) instance.onRotationSphereDragEndObservable = onRotationSphereDragEndObservable?.instance || onRotationSphereDragEndObservable
				onRotationSphereDragEndObservable = instance.onRotationSphereDragEndObservable
				if (onRotationSphereDragObservable != undefined) instance.onRotationSphereDragObservable = onRotationSphereDragObservable?.instance || onRotationSphereDragObservable
				onRotationSphereDragObservable = instance.onRotationSphereDragObservable
				if (onScaleBoxDragEndObservable != undefined) instance.onScaleBoxDragEndObservable = onScaleBoxDragEndObservable?.instance || onScaleBoxDragEndObservable
				onScaleBoxDragEndObservable = instance.onScaleBoxDragEndObservable
				if (onScaleBoxDragObservable != undefined) instance.onScaleBoxDragObservable = onScaleBoxDragObservable?.instance || onScaleBoxDragObservable
				onScaleBoxDragObservable = instance.onScaleBoxDragObservable
				if (rotationSphereSize != undefined) instance.rotationSphereSize = rotationSphereSize?.instance || rotationSphereSize
				rotationSphereSize = instance.rotationSphereSize
				if (scaleBoxSize != undefined) instance.scaleBoxSize = scaleBoxSize?.instance || scaleBoxSize
				scaleBoxSize = instance.scaleBoxSize
				if (scalePivot != undefined) instance.scalePivot = scalePivot?.instance || scalePivot
				scalePivot = instance.scalePivot

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

			