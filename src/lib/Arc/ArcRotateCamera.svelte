
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					alpha  * required
					beta  * required
					radius  * required
					target  * required
					scene  
					setActiveOnSceneIfNoneActive   
					allowUpsideDown  
					animations  
					cameraDirection  
					cameraRigMode  
					cameraRotation  
					checkCollisions  
					collisionRadius  
					customRenderTargets  
					fov  
					fovMode  
					id  
					ignoreParentScaling  
					inertia  
					inertialAlphaOffset  
					inertialBetaOffset  
					inertialPanningX  
					inertialPanningY  
					inertialRadiusOffset  
					inputs  
					inspectableCustomProperties  
					interaxialDistance  
					inverseRotationSpeed  
					invertRotation  
					isIntermediate  
					isRigCamera  
					isStereoscopicSideBySide  
					layerMask  
					lockedTarget  
					lowerAlphaLimit  
					lowerBetaLimit  
					lowerRadiusLimit  
					mapPanning  
					maxZ  
					metadata  
					minZ  
					noRotationConstraint  
					onAccessibilityTagChangedObservable  
					onAfterCheckInputsObservable  
					onCollide  
					onDisposeObservable  
					onMeshTargetChangedObservable  
					onProjectionMatrixChangedObservable  
					onReady  
					onRestoreStateObservable  
					onViewMatrixChangedObservable  
					outputRenderTarget  
					overrideCloneAlphaBetaRadius  
					panningAxis  
					panningDistanceLimit  
					panningInertia  
					panningOriginTarget  
					pinchToPanMaxDistance  
					projectionPlaneTilt  
					renderPassId  
					reservedDataStore  
					rigParent  
					rotation  
					rotationQuaternion  
					speed  
					state  
					targetScreenOffset  
					uniqueId  
					updateUpVectorFromRotation  
					upperAlphaLimit  
					upperBetaLimit  
					upperRadiusLimit  
					useInputToRestoreState  
					viewport  
					zoomOnFactor  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the name of the camera
				

				export let alpha = undefined // [number] * required
				// defines the camera rotation along the longitudinal axis
				

				export let beta = undefined // [number] * required
				// defines the camera rotation along the latitudinal axis
				

				export let radius = undefined // [number] * required
				// defines the camera distance from its target
				

				export let target = undefined // [vector3] * required
				// defines the camera target
				

				export let scene = undefined // [scene] 
				// defines the scene the camera belongs to
				

				export let setActiveOnSceneIfNoneActive = undefined // [boolean] 
				// defines whether the camera should be marked as active if not other active cameras have been defined
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ArcRotateCamera(name,alpha,beta,radius,target,scene,setActiveOnSceneIfNoneActive) : {}

				// ================ ACCESSORS ================

				
				export let absoluteRotation = undefined // [quaternion] 
				// 
				

				export let accessibilityTag = undefined // [nullable] 
				// 
				

				export let angularSensibilityX = undefined // [number] 
				// 
				

				export let angularSensibilityY = undefined // [number] 
				// 
				

				export let animationPropertiesOverride = undefined // [nullable] 
				// 
				

				export let autoRotationBehavior = undefined // [nullable] 
				// 
				

				export let behaviors = undefined // [array] 
				// 
				

				export let bouncingBehavior = undefined // [nullable] 
				// 
				

				export let doNotSerialize = undefined // [boolean] 
				// 
				

				export let framingBehavior = undefined // [nullable] 
				// 
				

				export let globalPosition = undefined // [vector3] 
				// 
				

				export let isLeftCamera = undefined // [boolean] 
				// 
				

				export let isRightCamera = undefined // [boolean] 
				// 
				

				export let keysDown = undefined // [array] 
				// 
				

				export let keysLeft = undefined // [array] 
				// 
				

				export let keysRight = undefined // [array] 
				// 
				

				export let keysUp = undefined // [array] 
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
				

				export let panningSensibility = undefined // [number] 
				// 
				

				export let parent = undefined // [nullable] 
				// 
				

				export let pinchDeltaPercentage = undefined // [number] 
				// 
				

				export let pinchPrecision = undefined // [number] 
				// 
				

				export let position = undefined // [vector3] 
				// 
				

				export let rigPostProcess = undefined // [nullable] 
				// 
				

				export let rightCamera = undefined // [nullable] 
				// 
				

				export let screenArea = undefined // [number] 
				// 
				

				export let targetHost = undefined // [nullable] 
				// 
				

				export let upVector = undefined // [vector3] 
				// 
				

				export let useAutoRotationBehavior = undefined // [boolean] 
				// 
				

				export let useBouncingBehavior = undefined // [boolean] 
				// 
				

				export let useFramingBehavior = undefined // [boolean] 
				// 
				

				export let useNaturalPinchZoom = undefined // [boolean] 
				// 
				

				export let wheelDeltaPercentage = undefined // [number] 
				// 
				

				export let wheelPrecision = undefined // [number] 
				// 
				

				export let worldMatrixFromCache = undefined // [matrix] 
				// 
				

				export let zoomToMouseLocation = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let allowUpsideDown = undefined // [boolean] 
				// allows the camera to be completely reversed.if false the camera can not arrive upside down.
				

				export let animations = undefined // [array] 
				// gets a list of animations associated with the node
				

				export let cameraDirection = undefined // [vector3] 
				// define the current direction the camera is moving to
				

				export let cameraRigMode = undefined // [number] 
				// rig mode of the camera.this is useful to create the camera with two "eyes" instead of one to create vr or stereoscopic scenes.this is normally controlled byt the camera themselves as internal use.
				

				export let cameraRotation = undefined // [vector2] 
				// define the current rotation the camera is rotating to
				

				export let checkCollisions = undefined // [boolean] 
				// defines whether the camera should check collision with the objects oh the scene.
				

				export let collisionRadius = undefined // [vector3] 
				// defines the collision radius of the camera.this simulates a sphere around the camera.
				

				export let customRenderTargets = undefined // [array] 
				// defines the list of custom render target which are rendered to and then used as the input to this camera's render. eg. display another camera view on a tv in the main scenethis is pretty helpful if you wish to make a camera render to a texture you could reuse somewhereelse in the scene. (eg. security camera)to change the final output target of the camera, camera.outputrendertarget should be used instead (eg. webxr renders to a render target corresponding to an hmd)
				

				export let fov = undefined // [number] 
				// field of view is set in radians. (default is 0.8)
				

				export let fovMode = undefined // [number] 
				// fovmode sets the camera frustum bounds to the viewport bounds. (default is fovmode_vertical_fixed)
				

				export let id = undefined // [string] 
				// gets or sets the id of the node
				

				export let ignoreParentScaling = undefined // [boolean] 
				// gets or sets a boolean indicating that the scaling of the parent hierarchy will not be taken in account by the camera
				

				export let inertia = undefined // [number] 
				// define the default inertia of the camera.this helps giving a smooth feeling to the camera movement.
				

				export let inertialAlphaOffset = undefined // [number] 
				// current inertia value on the longitudinal axis.the bigger this number the longer it will take for the camera to stop.
				

				export let inertialBetaOffset = undefined // [number] 
				// current inertia value on the latitudinal axis.the bigger this number the longer it will take for the camera to stop.
				

				export let inertialPanningX = undefined // [number] 
				// defines the current inertia value used during panning of the camera along the x axis.
				

				export let inertialPanningY = undefined // [number] 
				// defines the current inertia value used during panning of the camera along the y axis.
				

				export let inertialRadiusOffset = undefined // [number] 
				// current inertia value on the radius axis.the bigger this number the longer it will take for the camera to stop.
				

				export let inputs = undefined // [arcrotatecamerainputsmanager] 
				// defines the input associated to the camera.
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let interaxialDistance = undefined // [number] 
				// defines the distance between both "eyes" in case of a rig
				

				export let inverseRotationSpeed = undefined // [number] 
				// speed multiplier for inverse camera panning
				

				export let invertRotation = undefined // [boolean] 
				// reverses mouselook direction to 'natural' panning as opposed to traditional directpanning
				

				export let isIntermediate = undefined // [boolean] 
				// define whether the camera is intermediate.this is useful to not present the output directly to the screen in case of rig without post process for instance
				

				export let isRigCamera = undefined // [boolean] 
				// is this camera a part of a rig system?
				

				export let isStereoscopicSideBySide = undefined // [boolean] 
				// defines if stereoscopic rendering is done side by side or over under.
				

				export let layerMask = undefined // [number] 
				// restricts the camera to viewing objects with the same layermask.a camera with a layermask of 1 will render mesh.layermask & camera.layermask!== 0
				

				export let lockedTarget = undefined // [any] 
				// define the current target of the camera as an object or a position.please note that locking a target will disable panning.
				

				export let lowerAlphaLimit = undefined // [nullable] 
				// minimum allowed angle on the longitudinal axis.this can help limiting how the camera is able to move in the scene.
				

				export let lowerBetaLimit = undefined // [nullable] 
				// minimum allowed angle on the latitudinal axis.this can help limiting how the camera is able to move in the scene.
				

				export let lowerRadiusLimit = undefined // [nullable] 
				// minimum allowed distance of the camera to the target (the camera can not get closer).this can help limiting how the camera is able to move in the scene.
				

				export let mapPanning = undefined // [boolean] 
				// defines if camera will eliminate transform on y axis.
				

				export let maxZ = undefined // [number] 
				// define the maximum distance the camera can see to.this is important to note that the depth buffer are not infinite and the further it endthe more your scene might encounter depth fighting issue.
				

				export let metadata = undefined // [any] 
				// gets or sets an object used to store user defined information for the node
				

				export let minZ = undefined // [number] 
				// define the minimum distance the camera can see from.this is important to note that the depth buffer are not infinite and the closer it startsthe more your scene might encounter depth fighting issue.
				

				export let noRotationConstraint = undefined // [boolean] 
				// add constraint to the camera to prevent it to move freely in all directions andaround all axis.
				

				export let onAccessibilityTagChangedObservable = undefined // [observable] 
				// 
				

				export let onAfterCheckInputsObservable = undefined // [observable] 
				// observable triggered when the inputs have been processed.
				

				export let onCollide = undefined // [reflection] 
				// 
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the mesh is disposed
				

				export let onMeshTargetChangedObservable = undefined // [observable] 
				// observable triggered when the mesh target has been changed on the camera.
				

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
				

				export let overrideCloneAlphaBetaRadius = undefined // [nullable] 
				// defines an override value to use as the parameter to settarget.this allows the parameter to be specified when animating the target (e.g. using framingbehavior).
				

				export let panningAxis = undefined // [vector3] 
				// defines the allowed panning axis.
				

				export let panningDistanceLimit = undefined // [nullable] 
				// defines the maximum distance the camera can pan.this could help keeping the camera always in your scene.
				

				export let panningInertia = undefined // [number] 
				// defines the value of the inertia used during panning.0 would mean stop inertia and one would mean no deceleration at all.
				

				export let panningOriginTarget = undefined // [vector3] 
				// defines the target of the camera before panning.
				

				export let pinchToPanMaxDistance = undefined // [number] 
				// defines the distance used to consider the camera in pan mode vs pinch/zoom.basically if your fingers moves away from more than this distance you will be consideredin pinch mode.
				

				export let projectionPlaneTilt = undefined // [number] 
				// projection plane tilt around the x axis (horizontal), set in radians. (default is 0)can be used to make vertical lines in world space actually vertical on the screen.see https://forum.babylonjs.com/t/add-vertical-shift-to-3ds-max-exporter-babylon-cameras/17480
				

				export let renderPassId = undefined // [number] 
				// render pass id used by the camera to render into the main framebuffer
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let rigParent = undefined // [camera] 
				// if isrigcamera set to true this will be set with the parent camera.the parent camera is not (!) necessarily the .parent of this camera (like in the case of xr)
				

				export let rotation = undefined // [vector3] 
				// define the current rotation of the camera
				

				export let rotationQuaternion = undefined // [quaternion] 
				// define the current rotation of the camera as a quaternion to prevent gimbal lock
				

				export let speed = undefined // [number] 
				// define the current speed of the camera
				

				export let state = undefined // [string] 
				// gets or sets a string used to store user defined state for the node
				

				export let targetScreenOffset = undefined // [vector2] 
				// defines a screen offset for the camera position.
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the node
				

				export let updateUpVectorFromRotation = undefined // [boolean] 
				// when set, the up vector of the camera will be updated by the rotation of the camera
				

				export let upperAlphaLimit = undefined // [nullable] 
				// maximum allowed angle on the longitudinal axis.this can help limiting how the camera is able to move in the scene.
				

				export let upperBetaLimit = undefined // [nullable] 
				// maximum allowed angle on the latitudinal axis.this can help limiting how the camera is able to move in the scene.
				

				export let upperRadiusLimit = undefined // [nullable] 
				// maximum allowed distance of the camera to the target (the camera can not get further).this can help limiting how the camera is able to move in the scene.
				

				export let useInputToRestoreState = undefined // [boolean] 
				// define if double tap/click is used to restore the previously saved state of the camera.
				

				export let viewport = undefined // [viewport] 
				// define the viewport of the camera.this correspond to the portion of the screen the camera will render to in normalized 0 to 1 unit.
				

				export let zoomOnFactor = undefined // [number] 
				// defines how much the radius should be scaled while zooming on a particular mesh (through the zoomon function)
				

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

				export let createRigCamera = (...args) => instance.createRigCamera(...args)

				export let deleteAnimationRange = (...args) => instance.deleteAnimationRange(...args)

				export let detachControl = (...args) => instance.detachControl(...args)

				export let detachPostProcess = (...args) => instance.detachPostProcess(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let focusOn = (...args) => instance.focusOn(...args)

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

				export let getFrontPosition = (...args) => instance.getFrontPosition(...args)

				export let getHierarchyBoundingVectors = (...args) => instance.getHierarchyBoundingVectors(...args)

				export let getLeftTarget = (...args) => instance.getLeftTarget(...args)

				export let getProjectionMatrix = (...args) => instance.getProjectionMatrix(...args)

				export let getRightTarget = (...args) => instance.getRightTarget(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let getTarget = (...args) => instance.getTarget(...args)

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

				export let rebuildAnglesAndRadius = (...args) => instance.rebuildAnglesAndRadius(...args)

				export let removeBehavior = (...args) => instance.removeBehavior(...args)

				export let restoreState = (...args) => instance.restoreState(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let serializeAnimationRanges = (...args) => instance.serializeAnimationRanges(...args)

				export let setEnabled = (...args) => instance.setEnabled(...args)

				export let setMatUp = (...args) => instance.setMatUp(...args)

				export let setPosition = (...args) => instance.setPosition(...args)

				export let setTarget = (...args) => instance.setTarget(...args)

				export let storeState = (...args) => instance.storeState(...args)

				export let toString = (...args) => instance.toString(...args)

				export let unfreezeProjectionMatrix = (...args) => instance.unfreezeProjectionMatrix(...args)

				export let update = (...args) => instance.update(...args)

				export let zoomOn = (...args) => instance.zoomOn(...args)

				export let AddNodeConstructor = (...args) => instance.AddNodeConstructor(...args)

				export let Construct = (...args) => instance.Construct(...args)

				export let GetConstructorFromName = (...args) => instance.GetConstructorFromName(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let ParseAnimationRanges = (...args) => instance.ParseAnimationRanges(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ArcRotateCamera]`, ...args) : null

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
				if (alpha != undefined) instance.alpha = alpha?.instance || alpha
				alpha = instance.alpha
				if (beta != undefined) instance.beta = beta?.instance || beta
				beta = instance.beta
				if (radius != undefined) instance.radius = radius?.instance || radius
				radius = instance.radius
				if (target != undefined) instance.target = target?.instance || target
				target = instance.target
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (setActiveOnSceneIfNoneActive != undefined) instance.setActiveOnSceneIfNoneActive = setActiveOnSceneIfNoneActive?.instance || setActiveOnSceneIfNoneActive
				setActiveOnSceneIfNoneActive = instance.setActiveOnSceneIfNoneActive

				absoluteRotation = instance.absoluteRotation
				if (accessibilityTag != undefined) instance.accessibilityTag = accessibilityTag?.instance || accessibilityTag
				accessibilityTag = instance.accessibilityTag
				if (angularSensibilityX != undefined) instance.angularSensibilityX = angularSensibilityX?.instance || angularSensibilityX
				angularSensibilityX = instance.angularSensibilityX
				if (angularSensibilityY != undefined) instance.angularSensibilityY = angularSensibilityY?.instance || angularSensibilityY
				angularSensibilityY = instance.angularSensibilityY
				if (animationPropertiesOverride != undefined) instance.animationPropertiesOverride = animationPropertiesOverride?.instance || animationPropertiesOverride
				animationPropertiesOverride = instance.animationPropertiesOverride

				autoRotationBehavior = instance.autoRotationBehavior

				behaviors = instance.behaviors

				bouncingBehavior = instance.bouncingBehavior
				if (doNotSerialize != undefined) instance.doNotSerialize = doNotSerialize?.instance || doNotSerialize
				doNotSerialize = instance.doNotSerialize

				framingBehavior = instance.framingBehavior

				globalPosition = instance.globalPosition

				isLeftCamera = instance.isLeftCamera

				isRightCamera = instance.isRightCamera
				if (keysDown != undefined) instance.keysDown = keysDown?.instance || keysDown
				keysDown = instance.keysDown
				if (keysLeft != undefined) instance.keysLeft = keysLeft?.instance || keysLeft
				keysLeft = instance.keysLeft
				if (keysRight != undefined) instance.keysRight = keysRight?.instance || keysRight
				keysRight = instance.keysRight
				if (keysUp != undefined) instance.keysUp = keysUp?.instance || keysUp
				keysUp = instance.keysUp

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
				if (panningSensibility != undefined) instance.panningSensibility = panningSensibility?.instance || panningSensibility
				panningSensibility = instance.panningSensibility
				if (parent != undefined) instance.parent = parent?.instance || parent
				parent = instance.parent
				if (pinchDeltaPercentage != undefined) instance.pinchDeltaPercentage = pinchDeltaPercentage?.instance || pinchDeltaPercentage
				pinchDeltaPercentage = instance.pinchDeltaPercentage
				if (pinchPrecision != undefined) instance.pinchPrecision = pinchPrecision?.instance || pinchPrecision
				pinchPrecision = instance.pinchPrecision
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position

				rigPostProcess = instance.rigPostProcess

				rightCamera = instance.rightCamera

				screenArea = instance.screenArea
				if (targetHost != undefined) instance.targetHost = targetHost?.instance || targetHost
				targetHost = instance.targetHost
				if (upVector != undefined) instance.upVector = upVector?.instance || upVector
				upVector = instance.upVector
				if (useAutoRotationBehavior != undefined) instance.useAutoRotationBehavior = useAutoRotationBehavior?.instance || useAutoRotationBehavior
				useAutoRotationBehavior = instance.useAutoRotationBehavior
				if (useBouncingBehavior != undefined) instance.useBouncingBehavior = useBouncingBehavior?.instance || useBouncingBehavior
				useBouncingBehavior = instance.useBouncingBehavior
				if (useFramingBehavior != undefined) instance.useFramingBehavior = useFramingBehavior?.instance || useFramingBehavior
				useFramingBehavior = instance.useFramingBehavior
				if (useNaturalPinchZoom != undefined) instance.useNaturalPinchZoom = useNaturalPinchZoom?.instance || useNaturalPinchZoom
				useNaturalPinchZoom = instance.useNaturalPinchZoom
				if (wheelDeltaPercentage != undefined) instance.wheelDeltaPercentage = wheelDeltaPercentage?.instance || wheelDeltaPercentage
				wheelDeltaPercentage = instance.wheelDeltaPercentage
				if (wheelPrecision != undefined) instance.wheelPrecision = wheelPrecision?.instance || wheelPrecision
				wheelPrecision = instance.wheelPrecision

				worldMatrixFromCache = instance.worldMatrixFromCache
				if (zoomToMouseLocation != undefined) instance.zoomToMouseLocation = zoomToMouseLocation?.instance || zoomToMouseLocation
				zoomToMouseLocation = instance.zoomToMouseLocation
				if (allowUpsideDown != undefined) instance.allowUpsideDown = allowUpsideDown?.instance || allowUpsideDown
				allowUpsideDown = instance.allowUpsideDown
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (cameraDirection != undefined) instance.cameraDirection = cameraDirection?.instance || cameraDirection
				cameraDirection = instance.cameraDirection
				if (cameraRigMode != undefined) instance.cameraRigMode = cameraRigMode?.instance || cameraRigMode
				cameraRigMode = instance.cameraRigMode
				if (cameraRotation != undefined) instance.cameraRotation = cameraRotation?.instance || cameraRotation
				cameraRotation = instance.cameraRotation
				if (checkCollisions != undefined) instance.checkCollisions = checkCollisions?.instance || checkCollisions
				checkCollisions = instance.checkCollisions
				if (collisionRadius != undefined) instance.collisionRadius = collisionRadius?.instance || collisionRadius
				collisionRadius = instance.collisionRadius
				if (customRenderTargets != undefined) instance.customRenderTargets = customRenderTargets?.instance || customRenderTargets
				customRenderTargets = instance.customRenderTargets
				if (fov != undefined) instance.fov = fov?.instance || fov
				fov = instance.fov
				if (fovMode != undefined) instance.fovMode = fovMode?.instance || fovMode
				fovMode = instance.fovMode
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (ignoreParentScaling != undefined) instance.ignoreParentScaling = ignoreParentScaling?.instance || ignoreParentScaling
				ignoreParentScaling = instance.ignoreParentScaling
				if (inertia != undefined) instance.inertia = inertia?.instance || inertia
				inertia = instance.inertia
				if (inertialAlphaOffset != undefined) instance.inertialAlphaOffset = inertialAlphaOffset?.instance || inertialAlphaOffset
				inertialAlphaOffset = instance.inertialAlphaOffset
				if (inertialBetaOffset != undefined) instance.inertialBetaOffset = inertialBetaOffset?.instance || inertialBetaOffset
				inertialBetaOffset = instance.inertialBetaOffset
				if (inertialPanningX != undefined) instance.inertialPanningX = inertialPanningX?.instance || inertialPanningX
				inertialPanningX = instance.inertialPanningX
				if (inertialPanningY != undefined) instance.inertialPanningY = inertialPanningY?.instance || inertialPanningY
				inertialPanningY = instance.inertialPanningY
				if (inertialRadiusOffset != undefined) instance.inertialRadiusOffset = inertialRadiusOffset?.instance || inertialRadiusOffset
				inertialRadiusOffset = instance.inertialRadiusOffset
				if (inputs != undefined) instance.inputs = inputs?.instance || inputs
				inputs = instance.inputs
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (interaxialDistance != undefined) instance.interaxialDistance = interaxialDistance?.instance || interaxialDistance
				interaxialDistance = instance.interaxialDistance
				if (inverseRotationSpeed != undefined) instance.inverseRotationSpeed = inverseRotationSpeed?.instance || inverseRotationSpeed
				inverseRotationSpeed = instance.inverseRotationSpeed
				if (invertRotation != undefined) instance.invertRotation = invertRotation?.instance || invertRotation
				invertRotation = instance.invertRotation
				if (isIntermediate != undefined) instance.isIntermediate = isIntermediate?.instance || isIntermediate
				isIntermediate = instance.isIntermediate
				if (isRigCamera != undefined) instance.isRigCamera = isRigCamera?.instance || isRigCamera
				isRigCamera = instance.isRigCamera
				if (isStereoscopicSideBySide != undefined) instance.isStereoscopicSideBySide = isStereoscopicSideBySide?.instance || isStereoscopicSideBySide
				isStereoscopicSideBySide = instance.isStereoscopicSideBySide
				if (layerMask != undefined) instance.layerMask = layerMask?.instance || layerMask
				layerMask = instance.layerMask
				if (lockedTarget != undefined) instance.lockedTarget = lockedTarget?.instance || lockedTarget
				lockedTarget = instance.lockedTarget
				if (lowerAlphaLimit != undefined) instance.lowerAlphaLimit = lowerAlphaLimit?.instance || lowerAlphaLimit
				lowerAlphaLimit = instance.lowerAlphaLimit
				if (lowerBetaLimit != undefined) instance.lowerBetaLimit = lowerBetaLimit?.instance || lowerBetaLimit
				lowerBetaLimit = instance.lowerBetaLimit
				if (lowerRadiusLimit != undefined) instance.lowerRadiusLimit = lowerRadiusLimit?.instance || lowerRadiusLimit
				lowerRadiusLimit = instance.lowerRadiusLimit
				if (mapPanning != undefined) instance.mapPanning = mapPanning?.instance || mapPanning
				mapPanning = instance.mapPanning
				if (maxZ != undefined) instance.maxZ = maxZ?.instance || maxZ
				maxZ = instance.maxZ
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (minZ != undefined) instance.minZ = minZ?.instance || minZ
				minZ = instance.minZ
				if (noRotationConstraint != undefined) instance.noRotationConstraint = noRotationConstraint?.instance || noRotationConstraint
				noRotationConstraint = instance.noRotationConstraint
				if (onAccessibilityTagChangedObservable != undefined) instance.onAccessibilityTagChangedObservable = onAccessibilityTagChangedObservable?.instance || onAccessibilityTagChangedObservable
				onAccessibilityTagChangedObservable = instance.onAccessibilityTagChangedObservable
				if (onAfterCheckInputsObservable != undefined) instance.onAfterCheckInputsObservable = onAfterCheckInputsObservable?.instance || onAfterCheckInputsObservable
				onAfterCheckInputsObservable = instance.onAfterCheckInputsObservable
				if (onCollide != undefined) instance.onCollide = onCollide?.instance || onCollide
				onCollide = instance.onCollide
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onMeshTargetChangedObservable != undefined) instance.onMeshTargetChangedObservable = onMeshTargetChangedObservable?.instance || onMeshTargetChangedObservable
				onMeshTargetChangedObservable = instance.onMeshTargetChangedObservable
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
				if (overrideCloneAlphaBetaRadius != undefined) instance.overrideCloneAlphaBetaRadius = overrideCloneAlphaBetaRadius?.instance || overrideCloneAlphaBetaRadius
				overrideCloneAlphaBetaRadius = instance.overrideCloneAlphaBetaRadius
				if (panningAxis != undefined) instance.panningAxis = panningAxis?.instance || panningAxis
				panningAxis = instance.panningAxis
				if (panningDistanceLimit != undefined) instance.panningDistanceLimit = panningDistanceLimit?.instance || panningDistanceLimit
				panningDistanceLimit = instance.panningDistanceLimit
				if (panningInertia != undefined) instance.panningInertia = panningInertia?.instance || panningInertia
				panningInertia = instance.panningInertia
				if (panningOriginTarget != undefined) instance.panningOriginTarget = panningOriginTarget?.instance || panningOriginTarget
				panningOriginTarget = instance.panningOriginTarget
				if (pinchToPanMaxDistance != undefined) instance.pinchToPanMaxDistance = pinchToPanMaxDistance?.instance || pinchToPanMaxDistance
				pinchToPanMaxDistance = instance.pinchToPanMaxDistance
				if (projectionPlaneTilt != undefined) instance.projectionPlaneTilt = projectionPlaneTilt?.instance || projectionPlaneTilt
				projectionPlaneTilt = instance.projectionPlaneTilt
				if (renderPassId != undefined) instance.renderPassId = renderPassId?.instance || renderPassId
				renderPassId = instance.renderPassId
				if (reservedDataStore != undefined) instance.reservedDataStore = reservedDataStore?.instance || reservedDataStore
				reservedDataStore = instance.reservedDataStore
				if (rigParent != undefined) instance.rigParent = rigParent?.instance || rigParent
				rigParent = instance.rigParent
				if (rotation != undefined) instance.rotation = rotation?.instance || rotation
				rotation = instance.rotation
				if (rotationQuaternion != undefined) instance.rotationQuaternion = rotationQuaternion?.instance || rotationQuaternion
				rotationQuaternion = instance.rotationQuaternion
				if (speed != undefined) instance.speed = speed?.instance || speed
				speed = instance.speed
				if (state != undefined) instance.state = state?.instance || state
				state = instance.state
				if (targetScreenOffset != undefined) instance.targetScreenOffset = targetScreenOffset?.instance || targetScreenOffset
				targetScreenOffset = instance.targetScreenOffset
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (updateUpVectorFromRotation != undefined) instance.updateUpVectorFromRotation = updateUpVectorFromRotation?.instance || updateUpVectorFromRotation
				updateUpVectorFromRotation = instance.updateUpVectorFromRotation
				if (upperAlphaLimit != undefined) instance.upperAlphaLimit = upperAlphaLimit?.instance || upperAlphaLimit
				upperAlphaLimit = instance.upperAlphaLimit
				if (upperBetaLimit != undefined) instance.upperBetaLimit = upperBetaLimit?.instance || upperBetaLimit
				upperBetaLimit = instance.upperBetaLimit
				if (upperRadiusLimit != undefined) instance.upperRadiusLimit = upperRadiusLimit?.instance || upperRadiusLimit
				upperRadiusLimit = instance.upperRadiusLimit
				if (useInputToRestoreState != undefined) instance.useInputToRestoreState = useInputToRestoreState?.instance || useInputToRestoreState
				useInputToRestoreState = instance.useInputToRestoreState
				if (viewport != undefined) instance.viewport = viewport?.instance || viewport
				viewport = instance.viewport
				if (zoomOnFactor != undefined) instance.zoomOnFactor = zoomOnFactor?.instance || zoomOnFactor
				zoomOnFactor = instance.zoomOnFactor

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

			