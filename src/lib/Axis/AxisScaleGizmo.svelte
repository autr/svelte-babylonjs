
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					dragAxis  * required
					color  
					gizmoLayer  
					parent  
					thickness   
					_rootMesh  
					dragBehavior  
					dragScale  
					onSnapObservable  
					sensitivity  
					snapDistance  
					uniformScaling  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let dragAxis = undefined // [vector3] * required
				// the axis which the gizmo will be able to scale on
				

				export let color = undefined // [color3] 
				// the color of the gizmo
				

				export let gizmoLayer = undefined // [utilitylayerrenderer] 
				// the utility layer the gizmo will be added to
				

				export let parent = undefined // [nullable] 
				// 
				

				export let thickness = undefined // [number] 
				// display gizmo axis thickness
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AxisScaleGizmo(dragAxis,color,gizmoLayer,parent,thickness) : {}

				// ================ ACCESSORS ================

				
				export let attachedMesh = undefined // [nullable] 
				// mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)* when set, interactions will be enabled
				

				export let attachedNode = undefined // [nullable] 
				// node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or nodetransform that will be dragged)* when set, interactions will be enabled
				

				export let coloredMaterial = undefined // [standardmaterial] 
				// default material used to render when gizmo is not disabled or hovered
				

				export let customRotationQuaternion = undefined // [nullable] 
				// posture that the gizmo will be displaywhen set null, default value will be used (quaternion(0, 0, 0, 1))
				

				export let disableMaterial = undefined // [standardmaterial] 
				// material used to render when gizmo is disabled. typically grey.
				

				export let hoverMaterial = undefined // [standardmaterial] 
				// material used to render when gizmo is hovered with mouse
				

				export let isEnabled = undefined // [boolean] 
				// if the gizmo is enabled
				

				export let isHovered = undefined // [boolean] 
				// true when the mouse pointer is hovered a gizmo mesh
				

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
				

				export let dragBehavior = undefined // [pointerdragbehavior] 
				// drag behavior responsible for the gizmos dragging interactions
				

				export let dragScale = undefined // [number] 
				// the magnitude of the drag strength (scaling factor)
				

				export let onSnapObservable = undefined // [observable] 
				// event that fires each time the gizmo snaps to a new location.* snapdistance is the the change in distance
				

				export let sensitivity = undefined // [number] 
				// custom sensitivity value for the drag strength
				

				export let snapDistance = undefined // [number] 
				// scale distance in babylon units that the gizmo will snap to when dragged (default: 0)
				

				export let uniformScaling = undefined // [boolean] 
				// if the scaling operation should be done on all axis (default: false)
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let setCustomMesh = (...args) => instance.setCustomMesh(...args)

				export let GizmoAxisPointerObserver = (...args) => instance.GizmoAxisPointerObserver(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AxisScaleGizmo]`, ...args) : null

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

												if (dragAxis != undefined) instance.dragAxis = dragAxis?.instance || dragAxis
				dragAxis = instance.dragAxis
				if (color != undefined) instance.color = color?.instance || color
				color = instance.color
				if (gizmoLayer != undefined) instance.gizmoLayer = gizmoLayer?.instance || gizmoLayer
				gizmoLayer = instance.gizmoLayer
				if (parent != undefined) instance.parent = parent?.instance || parent
				parent = instance.parent
				if (thickness != undefined) instance.thickness = thickness?.instance || thickness
				thickness = instance.thickness
				if (attachedMesh != undefined) instance.attachedMesh = attachedMesh?.instance || attachedMesh
				attachedMesh = instance.attachedMesh
				if (attachedNode != undefined) instance.attachedNode = attachedNode?.instance || attachedNode
				attachedNode = instance.attachedNode

				coloredMaterial = instance.coloredMaterial
				if (customRotationQuaternion != undefined) instance.customRotationQuaternion = customRotationQuaternion?.instance || customRotationQuaternion
				customRotationQuaternion = instance.customRotationQuaternion

				disableMaterial = instance.disableMaterial

				hoverMaterial = instance.hoverMaterial
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled

				isHovered = instance.isHovered
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
				if (dragBehavior != undefined) instance.dragBehavior = dragBehavior?.instance || dragBehavior
				dragBehavior = instance.dragBehavior
				if (dragScale != undefined) instance.dragScale = dragScale?.instance || dragScale
				dragScale = instance.dragScale
				if (onSnapObservable != undefined) instance.onSnapObservable = onSnapObservable?.instance || onSnapObservable
				onSnapObservable = instance.onSnapObservable
				if (sensitivity != undefined) instance.sensitivity = sensitivity?.instance || sensitivity
				sensitivity = instance.sensitivity
				if (snapDistance != undefined) instance.snapDistance = snapDistance?.instance || snapDistance
				snapDistance = instance.snapDistance
				if (uniformScaling != undefined) instance.uniformScaling = uniformScaling?.instance || uniformScaling
				uniformScaling = instance.uniformScaling

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

			