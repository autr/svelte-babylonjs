
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					source  * required 
					actionManager  
					alphaIndex  
					alwaysSelectAsActiveMesh  
					animations  
					cullingStrategy  
					definedFacingForward  
					doNotSyncBoundingInfo  
					edgesColor  
					edgesRenderer  
					edgesWidth  
					ellipsoid  
					ellipsoidOffset  
					enablePointerMoveEvents  
					forceRenderingWhenOccluded  
					id  
					ignoreNonUniformScaling  
					inspectableCustomProperties  
					instancedBuffers  
					intersectionThreshold  
					isBlocker  
					isNearGrabbable  
					isNearPickable  
					isOccluded  
					isOcclusionQueryInProgress  
					isPickable  
					isVisible  
					metadata  
					occlusionQueryAlgorithmType  
					occlusionRetryCount  
					occlusionType  
					onAccessibilityTagChangedObservable  
					onAfterWorldMatrixUpdateObservable  
					onCollideObservable  
					onCollisionPositionChangeObservable  
					onDisposeObservable  
					onMaterialChangedObservable  
					onReady  
					onRebuildObservable  
					outlineColor  
					outlineWidth  
					overlayAlpha  
					overlayColor  
					physicsBody  
					physicsImpostor  
					reIntegrateRotationIntoRotationQuaternion  
					renderOutline  
					renderOverlay  
					reservedDataStore  
					scalingDeterminant  
					showBoundingBox  
					showSubMeshesBoundingBox  
					state  
					subMeshes  
					uniqueId  
					useOctreeForCollisions  
					useOctreeForPicking  
					useOctreeForRenderingSelection  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// 
				

				export let source = undefined // [linesmesh] * required
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.InstancedLinesMesh(name,source) : {}

				// ================ ACCESSORS ================

				
				export let _positions = undefined // [nullable] 
				// 
				

				export let absolutePosition = undefined // [vector3] 
				// 
				

				export let absoluteRotationQuaternion = undefined // [quaternion] 
				// 
				

				export let absoluteScaling = undefined // [vector3] 
				// 
				

				export let accessibilityTag = undefined // [nullable] 
				// 
				

				export let animationPropertiesOverride = undefined // [nullable] 
				// 
				

				export let applyFog = undefined // [boolean] 
				// 
				

				export let bakedVertexAnimationManager = undefined // [nullable] 
				// 
				

				export let behaviors = undefined // [array] 
				// 
				

				export let billboardMode = undefined // [number] 
				// 
				

				export let checkCollisions = undefined // [boolean] 
				// 
				

				export let collider = undefined // [nullable] 
				// 
				

				export let collisionGroup = undefined // [number] 
				// 
				

				export let collisionMask = undefined // [number] 
				// 
				

				export let collisionResponse = undefined // [boolean] 
				// 
				

				export let collisionRetryCount = undefined // [number] 
				// 
				

				export let computeBonesUsingShaders = undefined // [boolean] 
				// 
				

				export let doNotSerialize = undefined // [boolean] 
				// 
				

				export let enableDistantPicking = undefined // [boolean] 
				// 
				

				export let facetDepthSortFrom = undefined // [vector3] 
				// 
				

				export let facetNb = undefined // [number] 
				// 
				

				export let forward = undefined // [vector3] 
				// 
				

				export let hasBoundingInfo = undefined // [boolean] 
				// 
				

				export let hasInstances = undefined // [boolean] 
				// 
				

				export let hasThinInstances = undefined // [boolean] 
				// 
				

				export let hasVertexAlpha = undefined // [boolean] 
				// 
				

				export let infiniteDistance = undefined // [boolean] 
				// 
				

				export let isAnInstance = undefined // [boolean] 
				// 
				

				export let isBlocked = undefined // [boolean] 
				// 
				

				export let isFacetDataEnabled = undefined // [boolean] 
				// 
				

				export let isWorldMatrixFrozen = undefined // [boolean] 
				// 
				

				export let layerMask = undefined // [number] 
				// 
				

				export let lightSources = undefined // [array] 
				// 
				

				export let material = undefined // [nullable] 
				// 
				

				export let morphTargetManager = undefined // [nullable] 
				// 
				

				export let mustDepthSortFacets = undefined // [boolean] 
				// 
				

				export let nonUniformScaling = undefined // [boolean] 
				// 
				

				export let numBoneInfluencers = undefined // [number] 
				// 
				

				export let onClonedObservable = undefined // [observable] 
				// 
				

				export let onCollide = undefined // [] 
				// 
				

				export let onCollisionPositionChange = undefined // [] 
				// 
				

				export let onDispose = undefined // [] 
				// 
				

				export let onEnabledStateChangedObservable = undefined // [observable] 
				// 
				

				export let parent = undefined // [nullable] 
				// 
				

				export let partitioningBBoxRatio = undefined // [number] 
				// 
				

				export let partitioningSubdivisions = undefined // [number] 
				// 
				

				export let pointerOverDisableMeshTesting = undefined // [boolean] 
				// 
				

				export let position = undefined // [vector3] 
				// 
				

				export let preserveParentRotationForBillboard = undefined // [boolean] 
				// 
				

				export let receiveShadows = undefined // [boolean] 
				// 
				

				export let renderingGroupId = undefined // [number] 
				// 
				

				export let right = undefined // [vector3] 
				// 
				

				export let rotation = undefined // [vector3] 
				// 
				

				export let rotationQuaternion = undefined // [nullable] 
				// 
				

				export let scaling = undefined // [vector3] 
				// 
				

				export let skeleton = undefined // [nullable] 
				// 
				

				export let sourceMesh = undefined // [mesh] 
				// 
				

				export let surroundingMeshes = undefined // [nullable] 
				// 
				

				export let up = undefined // [vector3] 
				// 
				

				export let useBones = undefined // [boolean] 
				// 
				

				export let useVertexColors = undefined // [boolean] 
				// 
				

				export let visibility = undefined // [number] 
				// 
				

				export let worldMatrixFromCache = undefined // [matrix] 
				// 
				

				// ================ PROPERTIES ================

				
				export let actionManager = undefined // [nullable] 
				// gets or sets the current action manager
				

				export let alphaIndex = undefined // [number] 
				// gets or sets the alpha index used to sort transparent meshes
				

				export let alwaysSelectAsActiveMesh = undefined // [boolean] 
				// true if the mesh must be rendered in any case (this will shortcut the frustum clipping phase)
				

				export let animations = undefined // [array] 
				// gets a list of animations associated with the node
				

				export let cullingStrategy = undefined // [number] 
				// the culling strategy to use to check whether the mesh must be rendered or not.this value can be changed at any time and will be used on the next render mesh selection.the possible values are :- abstractmesh.cullingstrategy_standard- abstractmesh.cullingstrategy_boundingsphere_only- abstractmesh.cullingstrategy_optimistic_inclusion- abstractmesh.cullingstrategy_optimistic_inclusion_then_bsphere_onlyplease read each static variable documentation to get details about the culling process.
				

				export let definedFacingForward = undefined // [boolean] 
				// gets or sets the orientation for pov movement & rotation
				

				export let doNotSyncBoundingInfo = undefined // [boolean] 
				// gets or sets a boolean indicating that the bounding info does not need to be kept in sync (for performance reason)
				

				export let edgesColor = undefined // [color4] 
				// defines edge color used when edgesrenderer is enabled
				

				export let edgesRenderer = undefined // [nullable] 
				// gets the edgesrenderer associated with the mesh
				

				export let edgesWidth = undefined // [number] 
				// defines edge width used when edgesrenderer is enabled
				

				export let ellipsoid = undefined // [vector3] 
				// gets or sets the ellipsoid used to impersonate this mesh when using collision engine (default is (0.5, 1, 0.5))
				

				export let ellipsoidOffset = undefined // [vector3] 
				// gets or sets the ellipsoid offset used to impersonate this mesh when using collision engine (default is (0, 0, 0))
				

				export let enablePointerMoveEvents = undefined // [boolean] 
				// gets or sets a boolean indicating that pointer move events must be supported on this mesh (false by default)
				

				export let forceRenderingWhenOccluded = undefined // [boolean] 
				// flag to force rendering the mesh even if occluded
				

				export let id = undefined // [string] 
				// gets or sets the id of the node
				

				export let ignoreNonUniformScaling = undefined // [boolean] 
				// gets or sets a boolean indicating that non uniform scaling (when at least one component is different from others) should be ignored.by default the system will update normals to compensate
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let instancedBuffers = undefined // [reflection] 
				// object used to store instanced buffers defined by user
				

				export let intersectionThreshold = undefined // [number] 
				// the intersection threshold is the margin applied when intersection a segment of the linesmesh with a ray.this margin is expressed in world space coordinates, so its value may vary.initialized with the intersectionthreshold value of the source linesmesh
				

				export let isBlocker = undefined // [boolean] 
				// gets or sets a boolean indicating if the mesh must be considered as a ray blocker for lens flares (false by default)
				

				export let isNearGrabbable = undefined // [boolean] 
				// gets or sets a boolean indicating if the mesh can be near grabbed. default is false
				

				export let isNearPickable = undefined // [boolean] 
				// gets or sets a boolean indicating if the mesh can be near picked. default is false
				

				export let isOccluded = undefined // [boolean] 
				// gets or sets whether the mesh is occluded or not, it is used also to set the initial state of the mesh to be occluded or not
				

				export let isOcclusionQueryInProgress = undefined // [boolean] 
				// flag to check the progress status of the query
				

				export let isPickable = undefined // [boolean] 
				// gets or sets a boolean indicating if the mesh can be picked (by scene.pick for instance or through actions). default is true
				

				export let isVisible = undefined // [boolean] 
				// gets or sets a boolean indicating if the mesh is visible (renderable). default is true
				

				export let metadata = undefined // [any] 
				// gets or sets an object used to store user defined information for the node
				

				export let occlusionQueryAlgorithmType = undefined // [number] 
				// this property determines the type of occlusion query algorithm to run in webgl, you can use:* abstractmesh.occlusion_algorithm_type_accurate which is mapped to gl_any_samples_passed.* abstractmesh.occlusion_algorithm_type_conservative (default value) which is mapped to gl_any_samples_passed_conservative which is a false positive algorithm that is faster than gl_any_samples_passed but less accurate.
				

				export let occlusionRetryCount = undefined // [number] 
				// this number indicates the number of allowed retries before stop the occlusion query, this is useful if the occlusion query is taking long time before to the query result is retrieved, the query result indicates if the object is visible within the scene or not and based on that babylon.js engine decides to show or hide the object.the default value is -1 which means don't break the query and wait till the result
				

				export let occlusionType = undefined // [number] 
				// this property is responsible for starting the occlusion query within the mesh or not, this property is also used to determine what should happen when the occlusionretrycount is reached. it has supports 3 values:* occlusion_type_none (default value): this option means no occlusion query within the mesh.* occlusion_type_optimistic: this option is means use occlusion query and if occlusionretrycount is reached and the query is broken show the mesh.* occlusion_type_strict: this option is means use occlusion query and if occlusionretrycount is reached and the query is broken restore the last state of the mesh occlusion if the mesh was visible then show the mesh if was hidden then hide don't show.
				

				export let onAccessibilityTagChangedObservable = undefined // [observable] 
				// 
				

				export let onAfterWorldMatrixUpdateObservable = undefined // [observable] 
				// an event triggered after the world matrix is updated
				

				export let onCollideObservable = undefined // [observable] 
				// an event triggered when this mesh collides with another one
				

				export let onCollisionPositionChangeObservable = undefined // [observable] 
				// an event triggered when the collision's position changes
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the mesh is disposed
				

				export let onMaterialChangedObservable = undefined // [observable] 
				// an event triggered when material is changed
				

				export let onReady = undefined // [nullable] 
				// callback raised when the node is ready to be used
				

				export let onRebuildObservable = undefined // [observable] 
				// an event triggered when the mesh is rebuilt.
				

				export let outlineColor = undefined // [color3] 
				// defines color to use when rendering outline
				

				export let outlineWidth = undefined // [number] 
				// define width to use when rendering outline
				

				export let overlayAlpha = undefined // [number] 
				// defines alpha to use when rendering overlay
				

				export let overlayColor = undefined // [color3] 
				// defines color to use when rendering overlay
				

				export let physicsBody = undefined // [nullable] 
				// 
				

				export let physicsImpostor = undefined // [nullable] 
				// gets or sets impostor used for physic simulation
				

				export let reIntegrateRotationIntoRotationQuaternion = undefined // [boolean] 
				// gets or sets a boolean indicating that even if rotationquaternion is defined, you can keep updating rotation property and babylon.js will just mix both
				

				export let renderOutline = undefined // [boolean] 
				// gets or sets a boolean indicating if the outline must be rendered as well
				

				export let renderOverlay = undefined // [boolean] 
				// gets or sets a boolean indicating if the overlay must be rendered as well
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let scalingDeterminant = undefined // [number] 
				// multiplication factor on scale x/y/z when computing the world matrix. eg. for a 1x1x1 cube setting this to 2 will make it a 2x2x2 cube
				

				export let showBoundingBox = undefined // [boolean] 
				// gets or sets a boolean indicating if the bounding box must be rendered as well (false by default)
				

				export let showSubMeshesBoundingBox = undefined // [boolean] 
				// gets or sets a boolean indicating that bounding boxes of submeshes must be rendered as well (false by default)
				

				export let state = undefined // [string] 
				// gets or sets a string used to store user defined state for the node
				

				export let subMeshes = undefined // [array] 
				// gets or sets the list of submeshes
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the node
				

				export let useOctreeForCollisions = undefined // [boolean] 
				// gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes collision (true by default)
				

				export let useOctreeForPicking = undefined // [boolean] 
				// gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes picking (true by default)
				

				export let useOctreeForRenderingSelection = undefined // [boolean] 
				// gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes selection (true by default)
				

				// ================ METHODS ================

				
				export let _removeLightSource = (...args) => instance._removeLightSource(...args)

				export let _resyncLightSource = (...args) => instance._resyncLightSource(...args)

				export let _resyncLightSources = (...args) => instance._resyncLightSources(...args)

				export let addBehavior = (...args) => instance.addBehavior(...args)

				export let addChild = (...args) => instance.addChild(...args)

				export let addRotation = (...args) => instance.addRotation(...args)

				export let alignWithNormal = (...args) => instance.alignWithNormal(...args)

				export let applyImpulse = (...args) => instance.applyImpulse(...args)

				export let attachToBone = (...args) => instance.attachToBone(...args)

				export let beginAnimation = (...args) => instance.beginAnimation(...args)

				export let buildBoundingInfo = (...args) => instance.buildBoundingInfo(...args)

				export let calcMovePOV = (...args) => instance.calcMovePOV(...args)

				export let calcRotatePOV = (...args) => instance.calcRotatePOV(...args)

				export let clone = (...args) => instance.clone(...args)

				export let computeWorldMatrix = (...args) => instance.computeWorldMatrix(...args)

				export let createAnimationRange = (...args) => instance.createAnimationRange(...args)

				export let createInstance = (...args) => instance.createInstance(...args)

				export let createNormals = (...args) => instance.createNormals(...args)

				export let createOrUpdateSubmeshesOctree = (...args) => instance.createOrUpdateSubmeshesOctree(...args)

				export let deleteAnimationRange = (...args) => instance.deleteAnimationRange(...args)

				export let detachFromBone = (...args) => instance.detachFromBone(...args)

				export let disableEdgesRendering = (...args) => instance.disableEdgesRendering(...args)

				export let disableFacetData = (...args) => instance.disableFacetData(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let enableEdgesRendering = (...args) => instance.enableEdgesRendering(...args)

				export let freezeWorldMatrix = (...args) => instance.freezeWorldMatrix(...args)

				export let getAbsolutePivotPoint = (...args) => instance.getAbsolutePivotPoint(...args)

				export let getAbsolutePivotPointToRef = (...args) => instance.getAbsolutePivotPointToRef(...args)

				export let getAbsolutePosition = (...args) => instance.getAbsolutePosition(...args)

				export let getAnimationByName = (...args) => instance.getAnimationByName(...args)

				export let getAnimationRange = (...args) => instance.getAnimationRange(...args)

				export let getAnimationRanges = (...args) => instance.getAnimationRanges(...args)

				export let getBehaviorByName = (...args) => instance.getBehaviorByName(...args)

				export let getBoundingInfo = (...args) => instance.getBoundingInfo(...args)

				export let getChildMeshes = (...args) => instance.getChildMeshes(...args)

				export let getChildTransformNodes = (...args) => instance.getChildTransformNodes(...args)

				export let getChildren = (...args) => instance.getChildren(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getClosestFacetAtCoordinates = (...args) => instance.getClosestFacetAtCoordinates(...args)

				export let getClosestFacetAtLocalCoordinates = (...args) => instance.getClosestFacetAtLocalCoordinates(...args)

				export let getConnectedParticleSystems = (...args) => instance.getConnectedParticleSystems(...args)

				export let getDescendants = (...args) => instance.getDescendants(...args)

				export let getDirection = (...args) => instance.getDirection(...args)

				export let getDirectionToRef = (...args) => instance.getDirectionToRef(...args)

				export let getDistanceToCamera = (...args) => instance.getDistanceToCamera(...args)

				export let getEngine = (...args) => instance.getEngine(...args)

				export let getFacetDataParameters = (...args) => instance.getFacetDataParameters(...args)

				export let getFacetLocalNormals = (...args) => instance.getFacetLocalNormals(...args)

				export let getFacetLocalPartitioning = (...args) => instance.getFacetLocalPartitioning(...args)

				export let getFacetLocalPositions = (...args) => instance.getFacetLocalPositions(...args)

				export let getFacetNormal = (...args) => instance.getFacetNormal(...args)

				export let getFacetNormalToRef = (...args) => instance.getFacetNormalToRef(...args)

				export let getFacetPosition = (...args) => instance.getFacetPosition(...args)

				export let getFacetPositionToRef = (...args) => instance.getFacetPositionToRef(...args)

				export let getFacetsAtLocalCoordinates = (...args) => instance.getFacetsAtLocalCoordinates(...args)

				export let getHierarchyBoundingVectors = (...args) => instance.getHierarchyBoundingVectors(...args)

				export let getIndices = (...args) => instance.getIndices(...args)

				export let getLOD = (...args) => instance.getLOD(...args)

				export let getMaterialForRenderPass = (...args) => instance.getMaterialForRenderPass(...args)

				export let getMeshUniformBuffer = (...args) => instance.getMeshUniformBuffer(...args)

				export let getNormalsData = (...args) => instance.getNormalsData(...args)

				export let getPhysicsBody = (...args) => instance.getPhysicsBody(...args)

				export let getPhysicsImpostor = (...args) => instance.getPhysicsImpostor(...args)

				export let getPivotMatrix = (...args) => instance.getPivotMatrix(...args)

				export let getPivotPoint = (...args) => instance.getPivotPoint(...args)

				export let getPivotPointToRef = (...args) => instance.getPivotPointToRef(...args)

				export let getPoseMatrix = (...args) => instance.getPoseMatrix(...args)

				export let getPositionData = (...args) => instance.getPositionData(...args)

				export let getPositionExpressedInLocalSpace = (...args) => instance.getPositionExpressedInLocalSpace(...args)

				export let getPositionInCameraSpace = (...args) => instance.getPositionInCameraSpace(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let getTotalIndices = (...args) => instance.getTotalIndices(...args)

				export let getTotalVertices = (...args) => instance.getTotalVertices(...args)

				export let getVerticesData = (...args) => instance.getVerticesData(...args)

				export let getWorldMatrix = (...args) => instance.getWorldMatrix(...args)

				export let instantiateHierarchy = (...args) => instance.instantiateHierarchy(...args)

				export let intersects = (...args) => instance.intersects(...args)

				export let intersectsMesh = (...args) => instance.intersectsMesh(...args)

				export let intersectsPoint = (...args) => instance.intersectsPoint(...args)

				export let isCompletelyInFrustum = (...args) => instance.isCompletelyInFrustum(...args)

				export let isDescendantOf = (...args) => instance.isDescendantOf(...args)

				export let isDisposed = (...args) => instance.isDisposed(...args)

				export let isEnabled = (...args) => instance.isEnabled(...args)

				export let isInFrustum = (...args) => instance.isInFrustum(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let isUsingPivotMatrix = (...args) => instance.isUsingPivotMatrix(...args)

				export let isVerticesDataPresent = (...args) => instance.isVerticesDataPresent(...args)

				export let isWorldMatrixCameraDependent = (...args) => instance.isWorldMatrixCameraDependent(...args)

				export let locallyTranslate = (...args) => instance.locallyTranslate(...args)

				export let lookAt = (...args) => instance.lookAt(...args)

				export let markAsDirty = (...args) => instance.markAsDirty(...args)

				export let movePOV = (...args) => instance.movePOV(...args)

				export let moveWithCollisions = (...args) => instance.moveWithCollisions(...args)

				export let normalizeToUnitCube = (...args) => instance.normalizeToUnitCube(...args)

				export let refreshBoundingInfo = (...args) => instance.refreshBoundingInfo(...args)

				export let registerAfterWorldMatrixUpdate = (...args) => instance.registerAfterWorldMatrixUpdate(...args)

				export let releaseSubMeshes = (...args) => instance.releaseSubMeshes(...args)

				export let removeBehavior = (...args) => instance.removeBehavior(...args)

				export let removeChild = (...args) => instance.removeChild(...args)

				export let resetDrawCache = (...args) => instance.resetDrawCache(...args)

				export let resetLocalMatrix = (...args) => instance.resetLocalMatrix(...args)

				export let rotate = (...args) => instance.rotate(...args)

				export let rotateAround = (...args) => instance.rotateAround(...args)

				export let rotatePOV = (...args) => instance.rotatePOV(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let serializeAnimationRanges = (...args) => instance.serializeAnimationRanges(...args)

				export let setAbsolutePosition = (...args) => instance.setAbsolutePosition(...args)

				export let setBoundingInfo = (...args) => instance.setBoundingInfo(...args)

				export let setDirection = (...args) => instance.setDirection(...args)

				export let setEnabled = (...args) => instance.setEnabled(...args)

				export let setIndices = (...args) => instance.setIndices(...args)

				export let setMaterialForRenderPass = (...args) => instance.setMaterialForRenderPass(...args)

				export let setParent = (...args) => instance.setParent(...args)

				export let setPhysicsLinkWith = (...args) => instance.setPhysicsLinkWith(...args)

				export let setPivotMatrix = (...args) => instance.setPivotMatrix(...args)

				export let setPivotPoint = (...args) => instance.setPivotPoint(...args)

				export let setPositionWithLocalVector = (...args) => instance.setPositionWithLocalVector(...args)

				export let setPreTransformMatrix = (...args) => instance.setPreTransformMatrix(...args)

				export let setVerticesData = (...args) => instance.setVerticesData(...args)

				export let toString = (...args) => instance.toString(...args)

				export let transferToEffect = (...args) => instance.transferToEffect(...args)

				export let translate = (...args) => instance.translate(...args)

				export let unfreezeWorldMatrix = (...args) => instance.unfreezeWorldMatrix(...args)

				export let unregisterAfterWorldMatrixUpdate = (...args) => instance.unregisterAfterWorldMatrixUpdate(...args)

				export let updateFacetData = (...args) => instance.updateFacetData(...args)

				export let updateIndices = (...args) => instance.updateIndices(...args)

				export let updatePoseMatrix = (...args) => instance.updatePoseMatrix(...args)

				export let updateVerticesData = (...args) => instance.updateVerticesData(...args)

				export let AddNodeConstructor = (...args) => instance.AddNodeConstructor(...args)

				export let Construct = (...args) => instance.Construct(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let ParseAnimationRanges = (...args) => instance.ParseAnimationRanges(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:InstancedLinesMesh]`, ...args) : null

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
				if (source != undefined) instance.source = source?.instance || source
				source = instance.source

				_positions = instance._positions

				absolutePosition = instance.absolutePosition

				absoluteRotationQuaternion = instance.absoluteRotationQuaternion

				absoluteScaling = instance.absoluteScaling
				if (accessibilityTag != undefined) instance.accessibilityTag = accessibilityTag?.instance || accessibilityTag
				accessibilityTag = instance.accessibilityTag
				if (animationPropertiesOverride != undefined) instance.animationPropertiesOverride = animationPropertiesOverride?.instance || animationPropertiesOverride
				animationPropertiesOverride = instance.animationPropertiesOverride
				if (applyFog != undefined) instance.applyFog = applyFog?.instance || applyFog
				applyFog = instance.applyFog
				if (bakedVertexAnimationManager != undefined) instance.bakedVertexAnimationManager = bakedVertexAnimationManager?.instance || bakedVertexAnimationManager
				bakedVertexAnimationManager = instance.bakedVertexAnimationManager

				behaviors = instance.behaviors
				if (billboardMode != undefined) instance.billboardMode = billboardMode?.instance || billboardMode
				billboardMode = instance.billboardMode
				if (checkCollisions != undefined) instance.checkCollisions = checkCollisions?.instance || checkCollisions
				checkCollisions = instance.checkCollisions

				collider = instance.collider
				if (collisionGroup != undefined) instance.collisionGroup = collisionGroup?.instance || collisionGroup
				collisionGroup = instance.collisionGroup
				if (collisionMask != undefined) instance.collisionMask = collisionMask?.instance || collisionMask
				collisionMask = instance.collisionMask
				if (collisionResponse != undefined) instance.collisionResponse = collisionResponse?.instance || collisionResponse
				collisionResponse = instance.collisionResponse
				if (collisionRetryCount != undefined) instance.collisionRetryCount = collisionRetryCount?.instance || collisionRetryCount
				collisionRetryCount = instance.collisionRetryCount
				if (computeBonesUsingShaders != undefined) instance.computeBonesUsingShaders = computeBonesUsingShaders?.instance || computeBonesUsingShaders
				computeBonesUsingShaders = instance.computeBonesUsingShaders
				if (doNotSerialize != undefined) instance.doNotSerialize = doNotSerialize?.instance || doNotSerialize
				doNotSerialize = instance.doNotSerialize
				if (enableDistantPicking != undefined) instance.enableDistantPicking = enableDistantPicking?.instance || enableDistantPicking
				enableDistantPicking = instance.enableDistantPicking
				if (facetDepthSortFrom != undefined) instance.facetDepthSortFrom = facetDepthSortFrom?.instance || facetDepthSortFrom
				facetDepthSortFrom = instance.facetDepthSortFrom

				facetNb = instance.facetNb

				forward = instance.forward

				hasBoundingInfo = instance.hasBoundingInfo

				hasInstances = instance.hasInstances

				hasThinInstances = instance.hasThinInstances
				if (hasVertexAlpha != undefined) instance.hasVertexAlpha = hasVertexAlpha?.instance || hasVertexAlpha
				hasVertexAlpha = instance.hasVertexAlpha
				if (infiniteDistance != undefined) instance.infiniteDistance = infiniteDistance?.instance || infiniteDistance
				infiniteDistance = instance.infiniteDistance

				isAnInstance = instance.isAnInstance

				isBlocked = instance.isBlocked

				isFacetDataEnabled = instance.isFacetDataEnabled

				isWorldMatrixFrozen = instance.isWorldMatrixFrozen
				if (layerMask != undefined) instance.layerMask = layerMask?.instance || layerMask
				layerMask = instance.layerMask

				lightSources = instance.lightSources

				material = instance.material
				if (morphTargetManager != undefined) instance.morphTargetManager = morphTargetManager?.instance || morphTargetManager
				morphTargetManager = instance.morphTargetManager
				if (mustDepthSortFacets != undefined) instance.mustDepthSortFacets = mustDepthSortFacets?.instance || mustDepthSortFacets
				mustDepthSortFacets = instance.mustDepthSortFacets

				nonUniformScaling = instance.nonUniformScaling
				if (numBoneInfluencers != undefined) instance.numBoneInfluencers = numBoneInfluencers?.instance || numBoneInfluencers
				numBoneInfluencers = instance.numBoneInfluencers

				onClonedObservable = instance.onClonedObservable
				if (onCollide != undefined) instance.onCollide = onCollide?.instance || onCollide
				onCollide = instance.onCollide
				if (onCollisionPositionChange != undefined) instance.onCollisionPositionChange = onCollisionPositionChange?.instance || onCollisionPositionChange
				onCollisionPositionChange = instance.onCollisionPositionChange
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose

				onEnabledStateChangedObservable = instance.onEnabledStateChangedObservable
				if (parent != undefined) instance.parent = parent?.instance || parent
				parent = instance.parent
				if (partitioningBBoxRatio != undefined) instance.partitioningBBoxRatio = partitioningBBoxRatio?.instance || partitioningBBoxRatio
				partitioningBBoxRatio = instance.partitioningBBoxRatio
				if (partitioningSubdivisions != undefined) instance.partitioningSubdivisions = partitioningSubdivisions?.instance || partitioningSubdivisions
				partitioningSubdivisions = instance.partitioningSubdivisions
				if (pointerOverDisableMeshTesting != undefined) instance.pointerOverDisableMeshTesting = pointerOverDisableMeshTesting?.instance || pointerOverDisableMeshTesting
				pointerOverDisableMeshTesting = instance.pointerOverDisableMeshTesting
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
				if (preserveParentRotationForBillboard != undefined) instance.preserveParentRotationForBillboard = preserveParentRotationForBillboard?.instance || preserveParentRotationForBillboard
				preserveParentRotationForBillboard = instance.preserveParentRotationForBillboard

				receiveShadows = instance.receiveShadows
				if (renderingGroupId != undefined) instance.renderingGroupId = renderingGroupId?.instance || renderingGroupId
				renderingGroupId = instance.renderingGroupId

				right = instance.right
				if (rotation != undefined) instance.rotation = rotation?.instance || rotation
				rotation = instance.rotation
				if (rotationQuaternion != undefined) instance.rotationQuaternion = rotationQuaternion?.instance || rotationQuaternion
				rotationQuaternion = instance.rotationQuaternion
				if (scaling != undefined) instance.scaling = scaling?.instance || scaling
				scaling = instance.scaling

				skeleton = instance.skeleton

				sourceMesh = instance.sourceMesh
				if (surroundingMeshes != undefined) instance.surroundingMeshes = surroundingMeshes?.instance || surroundingMeshes
				surroundingMeshes = instance.surroundingMeshes

				up = instance.up

				useBones = instance.useBones
				if (useVertexColors != undefined) instance.useVertexColors = useVertexColors?.instance || useVertexColors
				useVertexColors = instance.useVertexColors

				visibility = instance.visibility

				worldMatrixFromCache = instance.worldMatrixFromCache
				if (actionManager != undefined) instance.actionManager = actionManager?.instance || actionManager
				actionManager = instance.actionManager
				if (alphaIndex != undefined) instance.alphaIndex = alphaIndex?.instance || alphaIndex
				alphaIndex = instance.alphaIndex
				if (alwaysSelectAsActiveMesh != undefined) instance.alwaysSelectAsActiveMesh = alwaysSelectAsActiveMesh?.instance || alwaysSelectAsActiveMesh
				alwaysSelectAsActiveMesh = instance.alwaysSelectAsActiveMesh
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (cullingStrategy != undefined) instance.cullingStrategy = cullingStrategy?.instance || cullingStrategy
				cullingStrategy = instance.cullingStrategy
				if (definedFacingForward != undefined) instance.definedFacingForward = definedFacingForward?.instance || definedFacingForward
				definedFacingForward = instance.definedFacingForward
				if (doNotSyncBoundingInfo != undefined) instance.doNotSyncBoundingInfo = doNotSyncBoundingInfo?.instance || doNotSyncBoundingInfo
				doNotSyncBoundingInfo = instance.doNotSyncBoundingInfo
				if (edgesColor != undefined) instance.edgesColor = edgesColor?.instance || edgesColor
				edgesColor = instance.edgesColor
				if (edgesRenderer != undefined) instance.edgesRenderer = edgesRenderer?.instance || edgesRenderer
				edgesRenderer = instance.edgesRenderer
				if (edgesWidth != undefined) instance.edgesWidth = edgesWidth?.instance || edgesWidth
				edgesWidth = instance.edgesWidth
				if (ellipsoid != undefined) instance.ellipsoid = ellipsoid?.instance || ellipsoid
				ellipsoid = instance.ellipsoid
				if (ellipsoidOffset != undefined) instance.ellipsoidOffset = ellipsoidOffset?.instance || ellipsoidOffset
				ellipsoidOffset = instance.ellipsoidOffset
				if (enablePointerMoveEvents != undefined) instance.enablePointerMoveEvents = enablePointerMoveEvents?.instance || enablePointerMoveEvents
				enablePointerMoveEvents = instance.enablePointerMoveEvents
				if (forceRenderingWhenOccluded != undefined) instance.forceRenderingWhenOccluded = forceRenderingWhenOccluded?.instance || forceRenderingWhenOccluded
				forceRenderingWhenOccluded = instance.forceRenderingWhenOccluded
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (ignoreNonUniformScaling != undefined) instance.ignoreNonUniformScaling = ignoreNonUniformScaling?.instance || ignoreNonUniformScaling
				ignoreNonUniformScaling = instance.ignoreNonUniformScaling
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (instancedBuffers != undefined) instance.instancedBuffers = instancedBuffers?.instance || instancedBuffers
				instancedBuffers = instance.instancedBuffers
				if (intersectionThreshold != undefined) instance.intersectionThreshold = intersectionThreshold?.instance || intersectionThreshold
				intersectionThreshold = instance.intersectionThreshold
				if (isBlocker != undefined) instance.isBlocker = isBlocker?.instance || isBlocker
				isBlocker = instance.isBlocker
				if (isNearGrabbable != undefined) instance.isNearGrabbable = isNearGrabbable?.instance || isNearGrabbable
				isNearGrabbable = instance.isNearGrabbable
				if (isNearPickable != undefined) instance.isNearPickable = isNearPickable?.instance || isNearPickable
				isNearPickable = instance.isNearPickable
				if (isOccluded != undefined) instance.isOccluded = isOccluded?.instance || isOccluded
				isOccluded = instance.isOccluded
				if (isOcclusionQueryInProgress != undefined) instance.isOcclusionQueryInProgress = isOcclusionQueryInProgress?.instance || isOcclusionQueryInProgress
				isOcclusionQueryInProgress = instance.isOcclusionQueryInProgress
				if (isPickable != undefined) instance.isPickable = isPickable?.instance || isPickable
				isPickable = instance.isPickable
				if (isVisible != undefined) instance.isVisible = isVisible?.instance || isVisible
				isVisible = instance.isVisible
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (occlusionQueryAlgorithmType != undefined) instance.occlusionQueryAlgorithmType = occlusionQueryAlgorithmType?.instance || occlusionQueryAlgorithmType
				occlusionQueryAlgorithmType = instance.occlusionQueryAlgorithmType
				if (occlusionRetryCount != undefined) instance.occlusionRetryCount = occlusionRetryCount?.instance || occlusionRetryCount
				occlusionRetryCount = instance.occlusionRetryCount
				if (occlusionType != undefined) instance.occlusionType = occlusionType?.instance || occlusionType
				occlusionType = instance.occlusionType
				if (onAccessibilityTagChangedObservable != undefined) instance.onAccessibilityTagChangedObservable = onAccessibilityTagChangedObservable?.instance || onAccessibilityTagChangedObservable
				onAccessibilityTagChangedObservable = instance.onAccessibilityTagChangedObservable
				if (onAfterWorldMatrixUpdateObservable != undefined) instance.onAfterWorldMatrixUpdateObservable = onAfterWorldMatrixUpdateObservable?.instance || onAfterWorldMatrixUpdateObservable
				onAfterWorldMatrixUpdateObservable = instance.onAfterWorldMatrixUpdateObservable
				if (onCollideObservable != undefined) instance.onCollideObservable = onCollideObservable?.instance || onCollideObservable
				onCollideObservable = instance.onCollideObservable
				if (onCollisionPositionChangeObservable != undefined) instance.onCollisionPositionChangeObservable = onCollisionPositionChangeObservable?.instance || onCollisionPositionChangeObservable
				onCollisionPositionChangeObservable = instance.onCollisionPositionChangeObservable
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onMaterialChangedObservable != undefined) instance.onMaterialChangedObservable = onMaterialChangedObservable?.instance || onMaterialChangedObservable
				onMaterialChangedObservable = instance.onMaterialChangedObservable
				if (onReady != undefined) instance.onReady = onReady?.instance || onReady
				onReady = instance.onReady
				if (onRebuildObservable != undefined) instance.onRebuildObservable = onRebuildObservable?.instance || onRebuildObservable
				onRebuildObservable = instance.onRebuildObservable
				if (outlineColor != undefined) instance.outlineColor = outlineColor?.instance || outlineColor
				outlineColor = instance.outlineColor
				if (outlineWidth != undefined) instance.outlineWidth = outlineWidth?.instance || outlineWidth
				outlineWidth = instance.outlineWidth
				if (overlayAlpha != undefined) instance.overlayAlpha = overlayAlpha?.instance || overlayAlpha
				overlayAlpha = instance.overlayAlpha
				if (overlayColor != undefined) instance.overlayColor = overlayColor?.instance || overlayColor
				overlayColor = instance.overlayColor
				if (physicsBody != undefined) instance.physicsBody = physicsBody?.instance || physicsBody
				physicsBody = instance.physicsBody
				if (physicsImpostor != undefined) instance.physicsImpostor = physicsImpostor?.instance || physicsImpostor
				physicsImpostor = instance.physicsImpostor
				if (reIntegrateRotationIntoRotationQuaternion != undefined) instance.reIntegrateRotationIntoRotationQuaternion = reIntegrateRotationIntoRotationQuaternion?.instance || reIntegrateRotationIntoRotationQuaternion
				reIntegrateRotationIntoRotationQuaternion = instance.reIntegrateRotationIntoRotationQuaternion
				if (renderOutline != undefined) instance.renderOutline = renderOutline?.instance || renderOutline
				renderOutline = instance.renderOutline
				if (renderOverlay != undefined) instance.renderOverlay = renderOverlay?.instance || renderOverlay
				renderOverlay = instance.renderOverlay
				if (reservedDataStore != undefined) instance.reservedDataStore = reservedDataStore?.instance || reservedDataStore
				reservedDataStore = instance.reservedDataStore
				if (scalingDeterminant != undefined) instance.scalingDeterminant = scalingDeterminant?.instance || scalingDeterminant
				scalingDeterminant = instance.scalingDeterminant
				if (showBoundingBox != undefined) instance.showBoundingBox = showBoundingBox?.instance || showBoundingBox
				showBoundingBox = instance.showBoundingBox
				if (showSubMeshesBoundingBox != undefined) instance.showSubMeshesBoundingBox = showSubMeshesBoundingBox?.instance || showSubMeshesBoundingBox
				showSubMeshesBoundingBox = instance.showSubMeshesBoundingBox
				if (state != undefined) instance.state = state?.instance || state
				state = instance.state
				if (subMeshes != undefined) instance.subMeshes = subMeshes?.instance || subMeshes
				subMeshes = instance.subMeshes
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (useOctreeForCollisions != undefined) instance.useOctreeForCollisions = useOctreeForCollisions?.instance || useOctreeForCollisions
				useOctreeForCollisions = instance.useOctreeForCollisions
				if (useOctreeForPicking != undefined) instance.useOctreeForPicking = useOctreeForPicking?.instance || useOctreeForPicking
				useOctreeForPicking = instance.useOctreeForPicking
				if (useOctreeForRenderingSelection != undefined) instance.useOctreeForRenderingSelection = useOctreeForRenderingSelection?.instance || useOctreeForRenderingSelection
				useOctreeForRenderingSelection = instance.useOctreeForRenderingSelection

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

			