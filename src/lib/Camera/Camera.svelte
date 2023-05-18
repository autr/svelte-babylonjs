
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					position  * required
					scene  
					setActiveOnSceneIfNoneActive   
					animations  
					cameraRigMode  
					customRenderTargets  
					fov  
					fovMode  
					id  
					inertia  
					inputs  
					inspectableCustomProperties  
					interaxialDistance  
					isIntermediate  
					isRigCamera  
					isStereoscopicSideBySide  
					layerMask  
					maxZ  
					metadata  
					minZ  
					onAccessibilityTagChangedObservable  
					onAfterCheckInputsObservable  
					onDisposeObservable  
					onProjectionMatrixChangedObservable  
					onReady  
					onRestoreStateObservable  
					onViewMatrixChangedObservable  
					outputRenderTarget  
					projectionPlaneTilt  
					renderPassId  
					reservedDataStore  
					rigParent  
					state  
					uniqueId  
					viewport  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the name of the camera in the scene
				

				export let position = undefined // [vector3] * required
				// defines the position of the camera
				

				export let scene = undefined // [scene] 
				// defines the scene the camera belongs too
				

				export let setActiveOnSceneIfNoneActive = undefined // [boolean] 
				// defines if the camera should be set as active after creation if no other camera have been defined in the scene
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Camera(name,position,scene,setActiveOnSceneIfNoneActive) : {}

				// ================ ACCESSORS ================

				
				export let absoluteRotation = undefined // [quaternion] 
				// 
				

				export let accessibilityTag = undefined // [nullable] 
				// 
				

				export let animationPropertiesOverride = undefined // [nullable] 
				// 
				

				export let behaviors = undefined // [array] 
				// 
				

				export let doNotSerialize = undefined // [boolean] 
				// 
				

				export let globalPosition = undefined // [vector3] 
				// 
				

				export let isLeftCamera = undefined // [boolean] 
				// 
				

				export let isRightCamera = undefined // [boolean] 
				// 
				

				export let leftCamera = undefined // [nullable] 
				// 
				

				export let mode = undefined // [number] 
				// 
				

				export let onClonedObservable = undefined // [observable] 
				// 
				

				export let onDispose = undefined // [] 
				// 
				

				export let onEnabledStateChangedObservable = undefined // [observable] 
				// 
				

				export let orthoBottom = undefined // [nullable] 
				// 
				

				export let orthoLeft = undefined // [nullable] 
				// 
				

				export let orthoRight = undefined // [nullable] 
				// 
				

				export let orthoTop = undefined // [nullable] 
				// 
				

				export let parent = undefined // [nullable] 
				// 
				

				export let rigPostProcess = undefined // [nullable] 
				// 
				

				export let rightCamera = undefined // [nullable] 
				// 
				

				export let screenArea = undefined // [number] 
				// 
				

				export let upVector = undefined // [vector3] 
				// 
				

				export let worldMatrixFromCache = undefined // [matrix] 
				// 
				

				// ================ PROPERTIES ================

				
				export let animations = undefined // [array] 
				// gets a list of animations associated with the node
				

				export let cameraRigMode = undefined // [number] 
				// rig mode of the camera.this is useful to create the camera with two "eyes" instead of one to create vr or stereoscopic scenes.this is normally controlled byt the camera themselves as internal use.
				

				export let customRenderTargets = undefined // [array] 
				// defines the list of custom render target which are rendered to and then used as the input to this camera's render. eg. display another camera view on a tv in the main scenethis is pretty helpful if you wish to make a camera render to a texture you could reuse somewhereelse in the scene. (eg. security camera)to change the final output target of the camera, camera.outputrendertarget should be used instead (eg. webxr renders to a render target corresponding to an hmd)
				

				export let fov = undefined // [number] 
				// field of view is set in radians. (default is 0.8)
				

				export let fovMode = undefined // [number] 
				// fovmode sets the camera frustum bounds to the viewport bounds. (default is fovmode_vertical_fixed)
				

				export let id = undefined // [string] 
				// gets or sets the id of the node
				

				export let inertia = undefined // [number] 
				// define the default inertia of the camera.this helps giving a smooth feeling to the camera movement.
				

				export let inputs = undefined // [camerainputsmanager] 
				// define the input manager associated with the camera.
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let interaxialDistance = undefined // [number] 
				// defines the distance between both "eyes" in case of a rig
				

				export let isIntermediate = undefined // [boolean] 
				// define whether the camera is intermediate.this is useful to not present the output directly to the screen in case of rig without post process for instance
				

				export let isRigCamera = undefined // [boolean] 
				// is this camera a part of a rig system?
				

				export let isStereoscopicSideBySide = undefined // [boolean] 
				// defines if stereoscopic rendering is done side by side or over under.
				

				export let layerMask = undefined // [number] 
				// restricts the camera to viewing objects with the same layermask.a camera with a layermask of 1 will render mesh.layermask & camera.layermask!== 0
				

				export let maxZ = undefined // [number] 
				// define the maximum distance the camera can see to.this is important to note that the depth buffer are not infinite and the further it endthe more your scene might encounter depth fighting issue.
				

				export let metadata = undefined // [any] 
				// gets or sets an object used to store user defined information for the node
				

				export let minZ = undefined // [number] 
				// define the minimum distance the camera can see from.this is important to note that the depth buffer are not infinite and the closer it startsthe more your scene might encounter depth fighting issue.
				

				export let onAccessibilityTagChangedObservable = undefined // [observable] 
				// 
				

				export let onAfterCheckInputsObservable = undefined // [observable] 
				// observable triggered when the inputs have been processed.
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the mesh is disposed
				

				export let onProjectionMatrixChangedObservable = undefined // [observable] 
				// observable triggered when the camera projection matrix has changed.
				

				export let onReady = undefined // [nullable] 
				// callback raised when the node is ready to be used
				

				export let onRestoreStateObservable = undefined // [observable] 
				// observable triggered when reset has been called and applied to the camera.
				

				export let onViewMatrixChangedObservable = undefined // [observable] 
				// observable triggered when the camera view matrix has changed.
				

				export let outputRenderTarget = undefined // [nullable] 
				// when set, the camera will render to this render target instead of the default canvasif the desire is to use the output of a camera as a texture in the scene consider using camera.customrendertargets instead
				

				export let projectionPlaneTilt = undefined // [number] 
				// projection plane tilt around the x axis (horizontal), set in radians. (default is 0)can be used to make vertical lines in world space actually vertical on the screen.see https://forum.babylonjs.com/t/add-vertical-shift-to-3ds-max-exporter-babylon-cameras/17480
				

				export let renderPassId = undefined // [number] 
				// render pass id used by the camera to render into the main framebuffer
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let rigParent = undefined // [camera] 
				// if isrigcamera set to true this will be set with the parent camera.the parent camera is not (!) necessarily the .parent of this camera (like in the case of xr)
				

				export let state = undefined // [string] 
				// gets or sets a string used to store user defined state for the node
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the node
				

				export let viewport = undefined // [viewport] 
				// define the viewport of the camera.this correspond to the portion of the screen the camera will render to in normalized 0 to 1 unit.
				

				// ================ METHODS ================

				
				export let _getFirstPostProcess = (...args) => instance._getFirstPostProcess(...args)

				export let addBehavior = (...args) => instance.addBehavior(...args)

				export let applyVerticalCorrection = (...args) => instance.applyVerticalCorrection(...args)

				export let attachControl = (...args) => instance.attachControl(...args)

				export let attachPostProcess = (...args) => instance.attachPostProcess(...args)

				export let beginAnimation = (...args) => instance.beginAnimation(...args)

				export let clone = (...args) => instance.clone(...args)

				export let computeWorldMatrix = (...args) => instance.computeWorldMatrix(...args)

				export let createAnimationRange = (...args) => instance.createAnimationRange(...args)

				export let deleteAnimationRange = (...args) => instance.deleteAnimationRange(...args)

				export let detachControl = (...args) => instance.detachControl(...args)

				export let detachPostProcess = (...args) => instance.detachPostProcess(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let freezeProjectionMatrix = (...args) => instance.freezeProjectionMatrix(...args)

				export let getActiveMeshes = (...args) => instance.getActiveMeshes(...args)

				export let getAnimationByName = (...args) => instance.getAnimationByName(...args)

				export let getAnimationRange = (...args) => instance.getAnimationRange(...args)

				export let getAnimationRanges = (...args) => instance.getAnimationRanges(...args)

				export let getBehaviorByName = (...args) => instance.getBehaviorByName(...args)

				export let getChildMeshes = (...args) => instance.getChildMeshes(...args)

				export let getChildren = (...args) => instance.getChildren(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getDescendants = (...args) => instance.getDescendants(...args)

				export let getDirection = (...args) => instance.getDirection(...args)

				export let getDirectionToRef = (...args) => instance.getDirectionToRef(...args)

				export let getEngine = (...args) => instance.getEngine(...args)

				export let getForwardRay = (...args) => instance.getForwardRay(...args)

				export let getForwardRayToRef = (...args) => instance.getForwardRayToRef(...args)

				export let getHierarchyBoundingVectors = (...args) => instance.getHierarchyBoundingVectors(...args)

				export let getLeftTarget = (...args) => instance.getLeftTarget(...args)

				export let getProjectionMatrix = (...args) => instance.getProjectionMatrix(...args)

				export let getRightTarget = (...args) => instance.getRightTarget(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let getTransformationMatrix = (...args) => instance.getTransformationMatrix(...args)

				export let getViewMatrix = (...args) => instance.getViewMatrix(...args)

				export let getWorldMatrix = (...args) => instance.getWorldMatrix(...args)

				export let isActiveMesh = (...args) => instance.isActiveMesh(...args)

				export let isCompletelyInFrustum = (...args) => instance.isCompletelyInFrustum(...args)

				export let isDescendantOf = (...args) => instance.isDescendantOf(...args)

				export let isDisposed = (...args) => instance.isDisposed(...args)

				export let isEnabled = (...args) => instance.isEnabled(...args)

				export let isInFrustum = (...args) => instance.isInFrustum(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let markAsDirty = (...args) => instance.markAsDirty(...args)

				export let removeBehavior = (...args) => instance.removeBehavior(...args)

				export let restoreState = (...args) => instance.restoreState(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let serializeAnimationRanges = (...args) => instance.serializeAnimationRanges(...args)

				export let setEnabled = (...args) => instance.setEnabled(...args)

				export let storeState = (...args) => instance.storeState(...args)

				export let toString = (...args) => instance.toString(...args)

				export let unfreezeProjectionMatrix = (...args) => instance.unfreezeProjectionMatrix(...args)

				export let update = (...args) => instance.update(...args)

				export let AddNodeConstructor = (...args) => instance.AddNodeConstructor(...args)

				export let Construct = (...args) => instance.Construct(...args)

				export let GetConstructorFromName = (...args) => instance.GetConstructorFromName(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let ParseAnimationRanges = (...args) => instance.ParseAnimationRanges(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Camera]`, ...args) : null

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

												if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (setActiveOnSceneIfNoneActive != undefined) instance.setActiveOnSceneIfNoneActive = setActiveOnSceneIfNoneActive?.instance || setActiveOnSceneIfNoneActive
				setActiveOnSceneIfNoneActive = instance.setActiveOnSceneIfNoneActive

				absoluteRotation = instance.absoluteRotation
				if (accessibilityTag != undefined) instance.accessibilityTag = accessibilityTag?.instance || accessibilityTag
				accessibilityTag = instance.accessibilityTag
				if (animationPropertiesOverride != undefined) instance.animationPropertiesOverride = animationPropertiesOverride?.instance || animationPropertiesOverride
				animationPropertiesOverride = instance.animationPropertiesOverride

				behaviors = instance.behaviors
				if (doNotSerialize != undefined) instance.doNotSerialize = doNotSerialize?.instance || doNotSerialize
				doNotSerialize = instance.doNotSerialize

				globalPosition = instance.globalPosition

				isLeftCamera = instance.isLeftCamera

				isRightCamera = instance.isRightCamera

				leftCamera = instance.leftCamera
				if (mode != undefined) instance.mode = mode?.instance || mode
				mode = instance.mode

				onClonedObservable = instance.onClonedObservable
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose

				onEnabledStateChangedObservable = instance.onEnabledStateChangedObservable
				if (orthoBottom != undefined) instance.orthoBottom = orthoBottom?.instance || orthoBottom
				orthoBottom = instance.orthoBottom
				if (orthoLeft != undefined) instance.orthoLeft = orthoLeft?.instance || orthoLeft
				orthoLeft = instance.orthoLeft
				if (orthoRight != undefined) instance.orthoRight = orthoRight?.instance || orthoRight
				orthoRight = instance.orthoRight
				if (orthoTop != undefined) instance.orthoTop = orthoTop?.instance || orthoTop
				orthoTop = instance.orthoTop
				if (parent != undefined) instance.parent = parent?.instance || parent
				parent = instance.parent

				rigPostProcess = instance.rigPostProcess

				rightCamera = instance.rightCamera

				screenArea = instance.screenArea
				if (upVector != undefined) instance.upVector = upVector?.instance || upVector
				upVector = instance.upVector

				worldMatrixFromCache = instance.worldMatrixFromCache
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (cameraRigMode != undefined) instance.cameraRigMode = cameraRigMode?.instance || cameraRigMode
				cameraRigMode = instance.cameraRigMode
				if (customRenderTargets != undefined) instance.customRenderTargets = customRenderTargets?.instance || customRenderTargets
				customRenderTargets = instance.customRenderTargets
				if (fov != undefined) instance.fov = fov?.instance || fov
				fov = instance.fov
				if (fovMode != undefined) instance.fovMode = fovMode?.instance || fovMode
				fovMode = instance.fovMode
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (inertia != undefined) instance.inertia = inertia?.instance || inertia
				inertia = instance.inertia
				if (inputs != undefined) instance.inputs = inputs?.instance || inputs
				inputs = instance.inputs
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (interaxialDistance != undefined) instance.interaxialDistance = interaxialDistance?.instance || interaxialDistance
				interaxialDistance = instance.interaxialDistance
				if (isIntermediate != undefined) instance.isIntermediate = isIntermediate?.instance || isIntermediate
				isIntermediate = instance.isIntermediate
				if (isRigCamera != undefined) instance.isRigCamera = isRigCamera?.instance || isRigCamera
				isRigCamera = instance.isRigCamera
				if (isStereoscopicSideBySide != undefined) instance.isStereoscopicSideBySide = isStereoscopicSideBySide?.instance || isStereoscopicSideBySide
				isStereoscopicSideBySide = instance.isStereoscopicSideBySide
				if (layerMask != undefined) instance.layerMask = layerMask?.instance || layerMask
				layerMask = instance.layerMask
				if (maxZ != undefined) instance.maxZ = maxZ?.instance || maxZ
				maxZ = instance.maxZ
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (minZ != undefined) instance.minZ = minZ?.instance || minZ
				minZ = instance.minZ
				if (onAccessibilityTagChangedObservable != undefined) instance.onAccessibilityTagChangedObservable = onAccessibilityTagChangedObservable?.instance || onAccessibilityTagChangedObservable
				onAccessibilityTagChangedObservable = instance.onAccessibilityTagChangedObservable
				if (onAfterCheckInputsObservable != undefined) instance.onAfterCheckInputsObservable = onAfterCheckInputsObservable?.instance || onAfterCheckInputsObservable
				onAfterCheckInputsObservable = instance.onAfterCheckInputsObservable
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onProjectionMatrixChangedObservable != undefined) instance.onProjectionMatrixChangedObservable = onProjectionMatrixChangedObservable?.instance || onProjectionMatrixChangedObservable
				onProjectionMatrixChangedObservable = instance.onProjectionMatrixChangedObservable
				if (onReady != undefined) instance.onReady = onReady?.instance || onReady
				onReady = instance.onReady
				if (onRestoreStateObservable != undefined) instance.onRestoreStateObservable = onRestoreStateObservable?.instance || onRestoreStateObservable
				onRestoreStateObservable = instance.onRestoreStateObservable
				if (onViewMatrixChangedObservable != undefined) instance.onViewMatrixChangedObservable = onViewMatrixChangedObservable?.instance || onViewMatrixChangedObservable
				onViewMatrixChangedObservable = instance.onViewMatrixChangedObservable
				if (outputRenderTarget != undefined) instance.outputRenderTarget = outputRenderTarget?.instance || outputRenderTarget
				outputRenderTarget = instance.outputRenderTarget
				if (projectionPlaneTilt != undefined) instance.projectionPlaneTilt = projectionPlaneTilt?.instance || projectionPlaneTilt
				projectionPlaneTilt = instance.projectionPlaneTilt
				if (renderPassId != undefined) instance.renderPassId = renderPassId?.instance || renderPassId
				renderPassId = instance.renderPassId
				if (reservedDataStore != undefined) instance.reservedDataStore = reservedDataStore?.instance || reservedDataStore
				reservedDataStore = instance.reservedDataStore
				if (rigParent != undefined) instance.rigParent = rigParent?.instance || rigParent
				rigParent = instance.rigParent
				if (state != undefined) instance.state = state?.instance || state
				state = instance.state
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (viewport != undefined) instance.viewport = viewport?.instance || viewport
				viewport = instance.viewport

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

			