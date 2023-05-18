
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					gizmoLayer  
					thickness  
					gizmoManager   
					_rootMesh  
					onDragEndObservable  
					onDragStartObservable  
					xGizmo  
					xPlaneGizmo  
					yGizmo  
					yPlaneGizmo  
					zGizmo  
					zPlaneGizmo  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let gizmoLayer = undefined // [utilitylayerrenderer] 
				// the utility layer the gizmo will be added to
				

				export let thickness = undefined // [number] 
				// display gizmo axis thickness
				

				export let gizmoManager = undefined // [gizmomanager] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PositionGizmo(gizmoLayer,thickness,gizmoManager) : {}

				// ================ ACCESSORS ================

				
				export let attachedMesh = undefined // [nullable] 
				// mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)* when set, interactions will be enabled
				

				export let attachedNode = undefined // [nullable] 
				// node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or nodetransform that will be dragged)* when set, interactions will be enabled
				

				export let customRotationQuaternion = undefined // [nullable] 
				// posture that the gizmo will be displaywhen set null, default value will be used (quaternion(0, 0, 0, 1))
				

				export let isHovered = undefined // [boolean] 
				// true when the mouse pointer is hovered a gizmo mesh
				

				export let planarGizmoEnabled = undefined // [boolean] 
				// if the planar drag gizmo is enabledsetting this will enable/disable xy, xz and yz planes regardless of individual gizmo settings.
				

				export let scaleRatio = undefined // [number] 
				// ratio for the scale of the gizmo
				

				export let snapDistance = undefined // [number] 
				// drag distance in babylon units that the gizmo will snap to when dragged
				

				export let updateGizmoPositionToMatchAttachedMesh = undefined // [boolean] 
				// if set the gizmo's position will be updated to match the attached mesh each frame (default: true)
				

				export let updateGizmoRotationToMatchAttachedMesh = undefined // [boolean] 
				// if set the gizmo's rotation will be updated to match the attached mesh each frame (default: true)
				

				export let updateScale = undefined // [boolean] 
				// when set, the gizmo will always appear the same size no matter where the camera is (default: true)
				

				// ================ PROPERTIES ================

				
				export let _rootMesh = undefined // [mesh] 
				// the root mesh of the gizmo
				

				export let onDragEndObservable = undefined // [observable] 
				// fires an event when any of it's sub gizmos are released from dragging
				

				export let onDragStartObservable = undefined // [observable] 
				// fires an event when any of it's sub gizmos are dragged
				

				export let xGizmo = undefined // [iaxisdraggizmo] 
				// internal gizmo used for interactions on the x axis
				

				export let xPlaneGizmo = undefined // [iplanedraggizmo] 
				// internal gizmo used for interactions on the yz plane
				

				export let yGizmo = undefined // [iaxisdraggizmo] 
				// internal gizmo used for interactions on the y axis
				

				export let yPlaneGizmo = undefined // [iplanedraggizmo] 
				// internal gizmo used for interactions on the xz plane
				

				export let zGizmo = undefined // [iaxisdraggizmo] 
				// internal gizmo used for interactions on the z axis
				

				export let zPlaneGizmo = undefined // [iplanedraggizmo] 
				// internal gizmo used for interactions on the xy plane
				

				// ================ METHODS ================

				
				export let addToAxisCache = (...args) => instance.addToAxisCache(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let setCustomMesh = (...args) => instance.setCustomMesh(...args)

				export let GizmoAxisPointerObserver = (...args) => instance.GizmoAxisPointerObserver(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PositionGizmo]`, ...args) : null

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

												if (gizmoLayer != undefined) instance.gizmoLayer = gizmoLayer?.instance || gizmoLayer
				gizmoLayer = instance.gizmoLayer
				if (thickness != undefined) instance.thickness = thickness?.instance || thickness
				thickness = instance.thickness
				if (gizmoManager != undefined) instance.gizmoManager = gizmoManager?.instance || gizmoManager
				gizmoManager = instance.gizmoManager
				if (attachedMesh != undefined) instance.attachedMesh = attachedMesh?.instance || attachedMesh
				attachedMesh = instance.attachedMesh
				if (attachedNode != undefined) instance.attachedNode = attachedNode?.instance || attachedNode
				attachedNode = instance.attachedNode
				if (customRotationQuaternion != undefined) instance.customRotationQuaternion = customRotationQuaternion?.instance || customRotationQuaternion
				customRotationQuaternion = instance.customRotationQuaternion

				isHovered = instance.isHovered
				if (planarGizmoEnabled != undefined) instance.planarGizmoEnabled = planarGizmoEnabled?.instance || planarGizmoEnabled
				planarGizmoEnabled = instance.planarGizmoEnabled
				if (scaleRatio != undefined) instance.scaleRatio = scaleRatio?.instance || scaleRatio
				scaleRatio = instance.scaleRatio
				if (snapDistance != undefined) instance.snapDistance = snapDistance?.instance || snapDistance
				snapDistance = instance.snapDistance
				if (updateGizmoPositionToMatchAttachedMesh != undefined) instance.updateGizmoPositionToMatchAttachedMesh = updateGizmoPositionToMatchAttachedMesh?.instance || updateGizmoPositionToMatchAttachedMesh
				updateGizmoPositionToMatchAttachedMesh = instance.updateGizmoPositionToMatchAttachedMesh
				if (updateGizmoRotationToMatchAttachedMesh != undefined) instance.updateGizmoRotationToMatchAttachedMesh = updateGizmoRotationToMatchAttachedMesh?.instance || updateGizmoRotationToMatchAttachedMesh
				updateGizmoRotationToMatchAttachedMesh = instance.updateGizmoRotationToMatchAttachedMesh
				if (updateScale != undefined) instance.updateScale = updateScale?.instance || updateScale
				updateScale = instance.updateScale
				if (_rootMesh != undefined) instance._rootMesh = _rootMesh?.instance || _rootMesh
				_rootMesh = instance._rootMesh
				if (onDragEndObservable != undefined) instance.onDragEndObservable = onDragEndObservable?.instance || onDragEndObservable
				onDragEndObservable = instance.onDragEndObservable
				if (onDragStartObservable != undefined) instance.onDragStartObservable = onDragStartObservable?.instance || onDragStartObservable
				onDragStartObservable = instance.onDragStartObservable
				if (xGizmo != undefined) instance.xGizmo = xGizmo?.instance || xGizmo
				xGizmo = instance.xGizmo
				if (xPlaneGizmo != undefined) instance.xPlaneGizmo = xPlaneGizmo?.instance || xPlaneGizmo
				xPlaneGizmo = instance.xPlaneGizmo
				if (yGizmo != undefined) instance.yGizmo = yGizmo?.instance || yGizmo
				yGizmo = instance.yGizmo
				if (yPlaneGizmo != undefined) instance.yPlaneGizmo = yPlaneGizmo?.instance || yPlaneGizmo
				yPlaneGizmo = instance.yPlaneGizmo
				if (zGizmo != undefined) instance.zGizmo = zGizmo?.instance || zGizmo
				zGizmo = instance.zGizmo
				if (zPlaneGizmo != undefined) instance.zPlaneGizmo = zPlaneGizmo?.instance || zPlaneGizmo
				zPlaneGizmo = instance.zPlaneGizmo

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

			