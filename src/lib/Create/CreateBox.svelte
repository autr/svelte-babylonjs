
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					options  
					scene   
					actionManager  
					alphaIndex  
					alwaysSelectAsActiveMesh  
					animations  
					cullingStrategy  
					definedFacingForward  
					delayLoadState  
					delayLoadingFile  
					doNotSyncBoundingInfo  
					edgesColor  
					edgesRenderer  
					edgesShareWithInstances  
					edgesWidth  
					ellipsoid  
					ellipsoidOffset  
					enablePointerMoveEvents  
					forceRenderingWhenOccluded  
					id  
					ignoreCameraMaxZ  
					ignoreNonUniformScaling  
					inspectableCustomProperties  
					instancedBuffers  
					instances  
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
					onLODLevelSelection  
					onMaterialChangedObservable  
					onMeshReadyObservable  
					onReady  
					onRebuildObservable  
					outlineColor  
					outlineWidth  
					overlayAlpha  
					overlayColor  
					overrideMaterialSideOrientation  
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
					thinInstanceCount  
					thinInstanceEnablePicking  
					uniqueId  
					useOctreeForCollisions  
					useOctreeForPicking  
					useOctreeForRenderingSelection  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the name of the mesh
				

				export let options = undefined // [type literal] 
				// defines the options used to create the mesh
				

				export let scene = undefined // [nullable] 
				// defines the hosting scene
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? BB.MeshBuilder.CreateBox(name,options,scene) : {}

				// ================ ACCESSORS ================

				
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
				

				export let areNormalsFrozen = undefined // [boolean] 
				// 
				

				export let bakedVertexAnimationManager = undefined // [nullable] 
				// 
				

				export let behaviors = undefined // [array] 
				// 
				

				export let billboardMode = undefined // [number] 
				// 
				

				export let checkCollisions = undefined // [boolean] 
				// 
				

				export let cloneMeshMap = undefined // [nullable] 
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
				

				export let forceWorldMatrixInstancedBufferUpdate = undefined // [boolean] 
				// 
				

				export let forcedInstanceCount = undefined // [number] 
				// 
				

				export let forward = undefined // [vector3] 
				// 
				

				export let geometry = undefined // [nullable] 
				// 
				

				export let hasBoundingInfo = undefined // [boolean] 
				// 
				

				export let hasInstances = undefined // [boolean] 
				// 
				

				export let hasLODLevels = undefined // [boolean] 
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
				

				export let isUnIndexed = undefined // [boolean] 
				// 
				

				export let isWorldMatrixFrozen = undefined // [boolean] 
				// 
				

				export let layerMask = undefined // [number] 
				// 
				

				export let lightSources = undefined // [array] 
				// 
				

				export let manualUpdateOfPreviousWorldMatrixInstancedBuffer = undefined // [boolean] 
				// 
				

				export let manualUpdateOfWorldMatrixInstancedBuffer = undefined // [boolean] 
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
				

				export let onAfterRenderObservable = undefined // [observable] 
				// 
				

				export let onBeforeBindObservable = undefined // [observable] 
				// 
				

				export let onBeforeDraw = undefined // [] 
				// 
				

				export let onBeforeDrawObservable = undefined // [observable] 
				// 
				

				export let onBeforeRenderObservable = undefined // [observable] 
				// 
				

				export let onBetweenPassObservable = undefined // [observable] 
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
				

				export let overridenInstanceCount = undefined // [] 
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
				

				export let previousWorldMatrixInstancedBuffer = undefined // [float32array] 
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
				

				export let source = undefined // [nullable] 
				// 
				

				export let surroundingMeshes = undefined // [nullable] 
				// 
				

				export let up = undefined // [vector3] 
				// 
				

				export let useBones = undefined // [boolean] 
				// 
				

				export let useLODScreenCoverage = undefined // [boolean] 
				// 
				

				export let useVertexColors = undefined // [boolean] 
				// 
				

				export let visibility = undefined // [number] 
				// 
				

				export let worldMatrixFromCache = undefined // [matrix] 
				// 
				

				export let worldMatrixInstancedBuffer = undefined // [float32array] 
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
				

				export let delayLoadState = undefined // [number] 
				// gets the delay loading state of the mesh (when delay loading is turned on)
				

				export let delayLoadingFile = undefined // [string] 
				// gets the file containing delay loading data for this mesh
				

				export let doNotSyncBoundingInfo = undefined // [boolean] 
				// gets or sets a boolean indicating that the bounding info does not need to be kept in sync (for performance reason)
				

				export let edgesColor = undefined // [color4] 
				// defines edge color used when edgesrenderer is enabled
				

				export let edgesRenderer = undefined // [nullable] 
				// gets the edgesrenderer associated with the mesh
				

				export let edgesShareWithInstances = undefined // [boolean] 
				// true to use the edge renderer for all instances of this mesh
				

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
				

				export let ignoreCameraMaxZ = undefined // [boolean] 
				// gets or sets a boolean indicating whether to render ignoring the active camera's max z setting. (false by default)note this will reduce performance when set to true.
				

				export let ignoreNonUniformScaling = undefined // [boolean] 
				// gets or sets a boolean indicating that non uniform scaling (when at least one component is different from others) should be ignored.by default the system will update normals to compensate
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let instancedBuffers = undefined // [reflection] 
				// object used to store instanced buffers defined by user
				

				export let instances = undefined // [array] 
				// gets the list of instances created from this meshit is not supposed to be modified manually.note also that the order of the instancedmesh wihin the array is not significant and might change.
				

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
				

				export let onLODLevelSelection = undefined // [reflection] 
				// 
				

				export let onMaterialChangedObservable = undefined // [observable] 
				// an event triggered when material is changed
				

				export let onMeshReadyObservable = undefined // [observable] 
				// will notify when the mesh is completely ready, including materials.observers added to this observable will be removed once triggered
				

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
				

				export let overrideMaterialSideOrientation = undefined // [nullable] 
				// use this property to change the original side orientation defined at construction time
				

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
				

				export let thinInstanceCount = undefined // [number] 
				// gets / sets the number of thin instances to display. note that you can't set a number higher than what the underlying buffer can handle.
				

				export let thinInstanceEnablePicking = undefined // [boolean] 
				// gets or sets a boolean defining if we want picking to pick thin instances as well
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the node
				

				export let useOctreeForCollisions = undefined // [boolean] 
				// gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes collision (true by default)
				

				export let useOctreeForPicking = undefined // [boolean] 
				// gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes picking (true by default)
				

				export let useOctreeForRenderingSelection = undefined // [boolean] 
				// gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes selection (true by default)
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:CreateBox]`, ...args) : null

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

								
				name = instance.name

				options = instance.options

				scene = instance.scene

				absolutePosition = instance.absolutePosition

				absoluteRotationQuaternion = instance.absoluteRotationQuaternion

				absoluteScaling = instance.absoluteScaling
				if (accessibilityTag != undefined) instance.accessibilityTag = accessibilityTag?.instance || accessibilityTag
				accessibilityTag = instance.accessibilityTag
				if (animationPropertiesOverride != undefined) instance.animationPropertiesOverride = animationPropertiesOverride?.instance || animationPropertiesOverride
				animationPropertiesOverride = instance.animationPropertiesOverride
				if (applyFog != undefined) instance.applyFog = applyFog?.instance || applyFog
				applyFog = instance.applyFog

				areNormalsFrozen = instance.areNormalsFrozen
				if (bakedVertexAnimationManager != undefined) instance.bakedVertexAnimationManager = bakedVertexAnimationManager?.instance || bakedVertexAnimationManager
				bakedVertexAnimationManager = instance.bakedVertexAnimationManager

				behaviors = instance.behaviors
				if (billboardMode != undefined) instance.billboardMode = billboardMode?.instance || billboardMode
				billboardMode = instance.billboardMode
				if (checkCollisions != undefined) instance.checkCollisions = checkCollisions?.instance || checkCollisions
				checkCollisions = instance.checkCollisions

				cloneMeshMap = instance.cloneMeshMap

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
				if (forceWorldMatrixInstancedBufferUpdate != undefined) instance.forceWorldMatrixInstancedBufferUpdate = forceWorldMatrixInstancedBufferUpdate?.instance || forceWorldMatrixInstancedBufferUpdate
				forceWorldMatrixInstancedBufferUpdate = instance.forceWorldMatrixInstancedBufferUpdate
				if (forcedInstanceCount != undefined) instance.forcedInstanceCount = forcedInstanceCount?.instance || forcedInstanceCount
				forcedInstanceCount = instance.forcedInstanceCount

				forward = instance.forward

				geometry = instance.geometry

				hasBoundingInfo = instance.hasBoundingInfo

				hasInstances = instance.hasInstances

				hasLODLevels = instance.hasLODLevels

				hasThinInstances = instance.hasThinInstances
				if (hasVertexAlpha != undefined) instance.hasVertexAlpha = hasVertexAlpha?.instance || hasVertexAlpha
				hasVertexAlpha = instance.hasVertexAlpha
				if (infiniteDistance != undefined) instance.infiniteDistance = infiniteDistance?.instance || infiniteDistance
				infiniteDistance = instance.infiniteDistance

				isAnInstance = instance.isAnInstance

				isBlocked = instance.isBlocked

				isFacetDataEnabled = instance.isFacetDataEnabled
				if (isUnIndexed != undefined) instance.isUnIndexed = isUnIndexed?.instance || isUnIndexed
				isUnIndexed = instance.isUnIndexed

				isWorldMatrixFrozen = instance.isWorldMatrixFrozen
				if (layerMask != undefined) instance.layerMask = layerMask?.instance || layerMask
				layerMask = instance.layerMask

				lightSources = instance.lightSources
				if (manualUpdateOfPreviousWorldMatrixInstancedBuffer != undefined) instance.manualUpdateOfPreviousWorldMatrixInstancedBuffer = manualUpdateOfPreviousWorldMatrixInstancedBuffer?.instance || manualUpdateOfPreviousWorldMatrixInstancedBuffer
				manualUpdateOfPreviousWorldMatrixInstancedBuffer = instance.manualUpdateOfPreviousWorldMatrixInstancedBuffer
				if (manualUpdateOfWorldMatrixInstancedBuffer != undefined) instance.manualUpdateOfWorldMatrixInstancedBuffer = manualUpdateOfWorldMatrixInstancedBuffer?.instance || manualUpdateOfWorldMatrixInstancedBuffer
				manualUpdateOfWorldMatrixInstancedBuffer = instance.manualUpdateOfWorldMatrixInstancedBuffer
				if (material != undefined) instance.material = material?.instance || material
				material = instance.material
				if (morphTargetManager != undefined) instance.morphTargetManager = morphTargetManager?.instance || morphTargetManager
				morphTargetManager = instance.morphTargetManager
				if (mustDepthSortFacets != undefined) instance.mustDepthSortFacets = mustDepthSortFacets?.instance || mustDepthSortFacets
				mustDepthSortFacets = instance.mustDepthSortFacets

				nonUniformScaling = instance.nonUniformScaling
				if (numBoneInfluencers != undefined) instance.numBoneInfluencers = numBoneInfluencers?.instance || numBoneInfluencers
				numBoneInfluencers = instance.numBoneInfluencers

				onAfterRenderObservable = instance.onAfterRenderObservable

				onBeforeBindObservable = instance.onBeforeBindObservable
				if (onBeforeDraw != undefined) instance.onBeforeDraw = onBeforeDraw?.instance || onBeforeDraw
				onBeforeDraw = instance.onBeforeDraw

				onBeforeDrawObservable = instance.onBeforeDrawObservable

				onBeforeRenderObservable = instance.onBeforeRenderObservable

				onBetweenPassObservable = instance.onBetweenPassObservable

				onClonedObservable = instance.onClonedObservable
				if (onCollide != undefined) instance.onCollide = onCollide?.instance || onCollide
				onCollide = instance.onCollide
				if (onCollisionPositionChange != undefined) instance.onCollisionPositionChange = onCollisionPositionChange?.instance || onCollisionPositionChange
				onCollisionPositionChange = instance.onCollisionPositionChange
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose

				onEnabledStateChangedObservable = instance.onEnabledStateChangedObservable
				if (overridenInstanceCount != undefined) instance.overridenInstanceCount = overridenInstanceCount?.instance || overridenInstanceCount
				overridenInstanceCount = instance.overridenInstanceCount
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

				previousWorldMatrixInstancedBuffer = instance.previousWorldMatrixInstancedBuffer
				if (receiveShadows != undefined) instance.receiveShadows = receiveShadows?.instance || receiveShadows
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
				if (skeleton != undefined) instance.skeleton = skeleton?.instance || skeleton
				skeleton = instance.skeleton

				source = instance.source
				if (surroundingMeshes != undefined) instance.surroundingMeshes = surroundingMeshes?.instance || surroundingMeshes
				surroundingMeshes = instance.surroundingMeshes

				up = instance.up

				useBones = instance.useBones
				if (useLODScreenCoverage != undefined) instance.useLODScreenCoverage = useLODScreenCoverage?.instance || useLODScreenCoverage
				useLODScreenCoverage = instance.useLODScreenCoverage
				if (useVertexColors != undefined) instance.useVertexColors = useVertexColors?.instance || useVertexColors
				useVertexColors = instance.useVertexColors
				if (visibility != undefined) instance.visibility = visibility?.instance || visibility
				visibility = instance.visibility

				worldMatrixFromCache = instance.worldMatrixFromCache

				worldMatrixInstancedBuffer = instance.worldMatrixInstancedBuffer
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
				if (delayLoadState != undefined) instance.delayLoadState = delayLoadState?.instance || delayLoadState
				delayLoadState = instance.delayLoadState
				if (delayLoadingFile != undefined) instance.delayLoadingFile = delayLoadingFile?.instance || delayLoadingFile
				delayLoadingFile = instance.delayLoadingFile
				if (doNotSyncBoundingInfo != undefined) instance.doNotSyncBoundingInfo = doNotSyncBoundingInfo?.instance || doNotSyncBoundingInfo
				doNotSyncBoundingInfo = instance.doNotSyncBoundingInfo
				if (edgesColor != undefined) instance.edgesColor = edgesColor?.instance || edgesColor
				edgesColor = instance.edgesColor
				if (edgesRenderer != undefined) instance.edgesRenderer = edgesRenderer?.instance || edgesRenderer
				edgesRenderer = instance.edgesRenderer
				if (edgesShareWithInstances != undefined) instance.edgesShareWithInstances = edgesShareWithInstances?.instance || edgesShareWithInstances
				edgesShareWithInstances = instance.edgesShareWithInstances
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
				if (ignoreCameraMaxZ != undefined) instance.ignoreCameraMaxZ = ignoreCameraMaxZ?.instance || ignoreCameraMaxZ
				ignoreCameraMaxZ = instance.ignoreCameraMaxZ
				if (ignoreNonUniformScaling != undefined) instance.ignoreNonUniformScaling = ignoreNonUniformScaling?.instance || ignoreNonUniformScaling
				ignoreNonUniformScaling = instance.ignoreNonUniformScaling
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (instancedBuffers != undefined) instance.instancedBuffers = instancedBuffers?.instance || instancedBuffers
				instancedBuffers = instance.instancedBuffers
				if (instances != undefined) instance.instances = instances?.instance || instances
				instances = instance.instances
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
				if (onLODLevelSelection != undefined) instance.onLODLevelSelection = onLODLevelSelection?.instance || onLODLevelSelection
				onLODLevelSelection = instance.onLODLevelSelection
				if (onMaterialChangedObservable != undefined) instance.onMaterialChangedObservable = onMaterialChangedObservable?.instance || onMaterialChangedObservable
				onMaterialChangedObservable = instance.onMaterialChangedObservable
				if (onMeshReadyObservable != undefined) instance.onMeshReadyObservable = onMeshReadyObservable?.instance || onMeshReadyObservable
				onMeshReadyObservable = instance.onMeshReadyObservable
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
				if (overrideMaterialSideOrientation != undefined) instance.overrideMaterialSideOrientation = overrideMaterialSideOrientation?.instance || overrideMaterialSideOrientation
				overrideMaterialSideOrientation = instance.overrideMaterialSideOrientation
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
				if (thinInstanceCount != undefined) instance.thinInstanceCount = thinInstanceCount?.instance || thinInstanceCount
				thinInstanceCount = instance.thinInstanceCount
				if (thinInstanceEnablePicking != undefined) instance.thinInstanceEnablePicking = thinInstanceEnablePicking?.instance || thinInstanceEnablePicking
				thinInstanceEnablePicking = instance.thinInstanceEnablePicking
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

			