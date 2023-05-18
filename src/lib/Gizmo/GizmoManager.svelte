
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_scene  * required
					thickness  
					utilityLayer  
					keepDepthUtilityLayer   
					attachableMeshes  
					attachableNodes  
					boundingBoxDragBehavior  
					clearGizmoOnEmptyPointerEvent  
					enableAutoPicking  
					gizmos  
					onAttachedToMeshObservable  
					onAttachedToNodeObservable  
					usePointerToAttachGizmos  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _scene = undefined // [scene] * required
				// the scene to overlay the gizmos on top of
				

				export let thickness = undefined // [number] 
				// display gizmo axis thickness
				

				export let utilityLayer = undefined // [utilitylayerrenderer] 
				// the layer where gizmos are rendered
				

				export let keepDepthUtilityLayer = undefined // [utilitylayerrenderer] 
				// the layer where occluded gizmos are rendered
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.GizmoManager(_scene,thickness,utilityLayer,keepDepthUtilityLayer) : {}

				// ================ ACCESSORS ================

				
				export let boundingBoxGizmoEnabled = undefined // [boolean] 
				// 
				

				export let isHovered = undefined // [boolean] 
				// 
				

				export let positionGizmoEnabled = undefined // [boolean] 
				// 
				

				export let rotationGizmoEnabled = undefined // [boolean] 
				// 
				

				export let scaleGizmoEnabled = undefined // [boolean] 
				// 
				

				export let scaleRatio = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let attachableMeshes = undefined // [nullable] 
				// array of meshes which will have the gizmo attached when a pointer selected them. if null, all meshes are attachable. (default: null)
				

				export let attachableNodes = undefined // [nullable] 
				// array of nodes which will have the gizmo attached when a pointer selected them. if null, all nodes are attachable. (default: null)
				

				export let boundingBoxDragBehavior = undefined // [sixdofdragbehavior] 
				// when bounding box gizmo is enabled, this can be used to track drag/end events
				

				export let clearGizmoOnEmptyPointerEvent = undefined // [boolean] 
				// when true, the gizmo will be detached from the current object when a pointer down occurs with an empty picked mesh
				

				export let enableAutoPicking = undefined // [boolean] 
				// when true (default), picking to attach a new mesh is enabled. this works in sync with inspector autopicking.
				

				export let gizmos = undefined // [reflection] 
				// gizmo's created by the gizmo manager, gizmo will be null until gizmo has been enabled for the first time
				

				export let onAttachedToMeshObservable = undefined // [observable] 
				// fires an event when the manager is attached to a mesh
				

				export let onAttachedToNodeObservable = undefined // [observable] 
				// fires an event when the manager is attached to a node
				

				export let usePointerToAttachGizmos = undefined // [boolean] 
				// if pointer events should perform attaching/detaching a gizmo, if false this can be done manually via attachtomesh/attachtonode. (default: true)
				

				// ================ METHODS ================

				
				export let addToAxisCache = (...args) => instance.addToAxisCache(...args)

				export let attachToMesh = (...args) => instance.attachToMesh(...args)

				export let attachToNode = (...args) => instance.attachToNode(...args)

				export let dispose = (...args) => instance.dispose(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:GizmoManager]`, ...args) : null

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

												if (_scene != undefined) instance._scene = _scene?.instance || _scene
				_scene = instance._scene
				if (thickness != undefined) instance.thickness = thickness?.instance || thickness
				thickness = instance.thickness
				if (utilityLayer != undefined) instance.utilityLayer = utilityLayer?.instance || utilityLayer
				utilityLayer = instance.utilityLayer
				if (keepDepthUtilityLayer != undefined) instance.keepDepthUtilityLayer = keepDepthUtilityLayer?.instance || keepDepthUtilityLayer
				keepDepthUtilityLayer = instance.keepDepthUtilityLayer
				if (boundingBoxGizmoEnabled != undefined) instance.boundingBoxGizmoEnabled = boundingBoxGizmoEnabled?.instance || boundingBoxGizmoEnabled
				boundingBoxGizmoEnabled = instance.boundingBoxGizmoEnabled

				isHovered = instance.isHovered
				if (positionGizmoEnabled != undefined) instance.positionGizmoEnabled = positionGizmoEnabled?.instance || positionGizmoEnabled
				positionGizmoEnabled = instance.positionGizmoEnabled
				if (rotationGizmoEnabled != undefined) instance.rotationGizmoEnabled = rotationGizmoEnabled?.instance || rotationGizmoEnabled
				rotationGizmoEnabled = instance.rotationGizmoEnabled
				if (scaleGizmoEnabled != undefined) instance.scaleGizmoEnabled = scaleGizmoEnabled?.instance || scaleGizmoEnabled
				scaleGizmoEnabled = instance.scaleGizmoEnabled
				if (scaleRatio != undefined) instance.scaleRatio = scaleRatio?.instance || scaleRatio
				scaleRatio = instance.scaleRatio
				if (attachableMeshes != undefined) instance.attachableMeshes = attachableMeshes?.instance || attachableMeshes
				attachableMeshes = instance.attachableMeshes
				if (attachableNodes != undefined) instance.attachableNodes = attachableNodes?.instance || attachableNodes
				attachableNodes = instance.attachableNodes
				if (boundingBoxDragBehavior != undefined) instance.boundingBoxDragBehavior = boundingBoxDragBehavior?.instance || boundingBoxDragBehavior
				boundingBoxDragBehavior = instance.boundingBoxDragBehavior
				if (clearGizmoOnEmptyPointerEvent != undefined) instance.clearGizmoOnEmptyPointerEvent = clearGizmoOnEmptyPointerEvent?.instance || clearGizmoOnEmptyPointerEvent
				clearGizmoOnEmptyPointerEvent = instance.clearGizmoOnEmptyPointerEvent
				if (enableAutoPicking != undefined) instance.enableAutoPicking = enableAutoPicking?.instance || enableAutoPicking
				enableAutoPicking = instance.enableAutoPicking
				if (gizmos != undefined) instance.gizmos = gizmos?.instance || gizmos
				gizmos = instance.gizmos
				if (onAttachedToMeshObservable != undefined) instance.onAttachedToMeshObservable = onAttachedToMeshObservable?.instance || onAttachedToMeshObservable
				onAttachedToMeshObservable = instance.onAttachedToMeshObservable
				if (onAttachedToNodeObservable != undefined) instance.onAttachedToNodeObservable = onAttachedToNodeObservable?.instance || onAttachedToNodeObservable
				onAttachedToNodeObservable = instance.onAttachedToNodeObservable
				if (usePointerToAttachGizmos != undefined) instance.usePointerToAttachGizmos = usePointerToAttachGizmos?.instance || usePointerToAttachGizmos
				usePointerToAttachGizmos = instance.usePointerToAttachGizmos

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

			