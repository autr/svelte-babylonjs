
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					engine  * required
					options   
					_afterRenderTargetPostProcessStage  
					actionManager  
					actionManagers  
					ambientColor  
					animationGroups  
					animationTimeScale  
					animations  
					animationsEnabled  
					audioEnabled  
					audioListenerPositionProvider  
					audioListenerRotationProvider  
					audioPositioningRefreshRate  
					autoClear  
					autoClearDepthAndStencil  
					cameraToUseForPointers  
					cameras  
					clearColor  
					clipPlane  
					clipPlane2  
					clipPlane3  
					clipPlane4  
					clipPlane5  
					clipPlane6  
					collisionsEnabled  
					constantlyUpdateMeshUnderPointer  
					customLODSelector  
					customRenderTargets  
					debugLayer  
					defaultCursor  
					deltaTime  
					depthPeelingRenderer  
					disableOfflineSupportExceptionRules  
					dispatchAllSubMeshesOfActiveMeshes  
					doNotHandleCursors  
					dumpNextRenderTargets  
					effectLayers  
					environmentBRDFTexture  
					environmentIntensity  
					fluidRenderer  
					fogColor  
					fogDensity  
					fogEnd  
					fogStart  
					forceShowBoundingBoxes  
					gamepadManager  
					geometries  
					geometryBufferRenderer  
					getActiveMeshCandidates  
					getActiveSubMeshCandidates  
					getCollidingSubMeshCandidates  
					getDeterministicFrameTime  
					getIntersectingSubMeshCandidates  
					gravity  
					headphone  
					hoverCursor  
					importedMeshesFiles  
					layers  
					lensFlareSystems  
					lensFlaresEnabled  
					lights  
					loadingPluginName  
					mainSoundTrack  
					materials  
					meshes  
					metadata  
					morphTargetManagers  
					multiMaterials  
					needsPreviousWorldMatrices  
					offlineProvider  
					onActiveCameraChanged  
					onActiveCamerasChanged  
					onAfterActiveMeshesEvaluationObservable  
					onAfterAnimationsObservable  
					onAfterCameraRenderObservable  
					onAfterDrawPhaseObservable  
					onAfterParticlesRenderingObservable  
					onAfterPhysicsObservable  
					onAfterRenderCameraObservable  
					onAfterRenderObservable  
					onAfterRenderTargetsRenderObservable  
					onAfterRenderingGroupObservable  
					onAfterSpritesRenderingObservable  
					onAfterStepObservable  
					onAnimationFileImportedObservable  
					onBeforeActiveMeshesEvaluationObservable  
					onBeforeAnimationsObservable  
					onBeforeCameraRenderObservable  
					onBeforeDrawPhaseObservable  
					onBeforeParticlesRenderingObservable  
					onBeforePhysicsObservable  
					onBeforeRenderObservable  
					onBeforeRenderTargetsRenderObservable  
					onBeforeRenderingGroupObservable  
					onBeforeSpritesRenderingObservable  
					onBeforeStepObservable  
					onCameraRemovedObservable  
					onDataLoadedObservable  
					onDisposeObservable  
					onGeometryRemovedObservable  
					onKeyboardObservable  
					onLightRemovedObservable  
					onMaterialRemovedObservable  
					onMeshImportedObservable  
					onMeshRemovedObservable  
					onMultiMaterialRemovedObservable  
					onNewCameraAddedObservable  
					onNewGeometryAddedObservable  
					onNewLightAddedObservable  
					onNewMaterialAddedObservable  
					onNewMeshAddedObservable  
					onNewMultiMaterialAddedObservable  
					onNewSkeletonAddedObservable  
					onNewTextureAddedObservable  
					onNewTransformNodeAddedObservable  
					onPointerDown  
					onPointerMove  
					onPointerObservable  
					onPointerPick  
					onPointerUp  
					onPreKeyboardObservable  
					onPrePointerObservable  
					onReadyObservable  
					onSkeletonRemovedObservable  
					onTextureRemovedObservable  
					onTransformNodeRemovedObservable  
					particleSystems  
					particlesEnabled  
					physicsEnabled  
					pointerDownPredicate  
					pointerMovePredicate  
					pointerMoveTrianglePredicate  
					pointerUpPredicate  
					postProcessManager  
					postProcessRenderPipelineManager (readonly) 
					postProcesses  
					postProcessesEnabled  
					prePassRenderer  
					preventDefaultOnPointerDown  
					preventDefaultOnPointerUp  
					probesEnabled  
					proceduralTextures  
					proceduralTexturesEnabled  
					reflectionProbes  
					renderTargetsEnabled  
					requireLightSorting  
					reservedDataStore  
					rootNodes  
					selectionOctree  
					simplificationQueue  
					skeletons  
					skipPointerDownPicking  
					skipPointerMovePicking  
					skipPointerUpPicking  
					soundTracks  
					sounds  
					spriteManagers  
					spritesEnabled  
					subSurfaceConfiguration  
					textures  
					transformNodes  
					useConstantAnimationDeltaTime  
					useDelayedTextureLoading  
					useOrderIndependentTransparency  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let engine = undefined // [engine] * required
				// defines the engine to use to render this scene
				

				export let options = undefined // [sceneoptions] 
				// defines the scene options
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Scene(engine,options) : {}

				// ================ ACCESSORS ================

				
				export let activeBonesPerfCounter = undefined // [perfcounter] 
				// 
				

				export let activeCamera = undefined // [nullable] 
				// 
				

				export let activeCameras = undefined // [nullable] 
				// 
				

				export let activeParticlesPerfCounter = undefined // [perfcounter] 
				// 
				

				export let afterCameraRender = undefined // [] 
				// 
				

				export let afterRender = undefined // [] 
				// 
				

				export let animatables = undefined // [array] 
				// 
				

				export let animationPropertiesOverride = undefined // [nullable] 
				// 
				

				export let beforeCameraRender = undefined // [] 
				// 
				

				export let beforeRender = undefined // [] 
				// 
				

				export let blockMaterialDirtyMechanism = undefined // [boolean] 
				// 
				

				export let blockfreeActiveMeshesAndRenderingGroups = undefined // [boolean] 
				// 
				

				export let defaultMaterial = undefined // [material] 
				// 
				

				export let environmentTexture = undefined // [nullable] 
				// 
				

				export let fogEnabled = undefined // [boolean] 
				// 
				

				export let fogMode = undefined // [number] 
				// 
				

				export let forcePointsCloud = undefined // [boolean] 
				// 
				

				export let forceWireframe = undefined // [boolean] 
				// 
				

				export let frustumPlanes = undefined // [array] 
				// 
				

				export let imageProcessingConfiguration = undefined // [imageprocessingconfiguration] 
				// 
				

				export let isDisposed = undefined // [boolean] 
				// 
				

				export let isLoading = undefined // [boolean] 
				// 
				

				export let lightsEnabled = undefined // [boolean] 
				// 
				

				export let meshUnderPointer = undefined // [nullable] 
				// 
				

				export let onDispose = undefined // [] 
				// 
				

				export let performancePriority = undefined // [sceneperformancepriority] 
				// 
				

				export let pointerX = undefined // [number] 
				// 
				

				export let pointerY = undefined // [number] 
				// 
				

				export let prePass = undefined // [boolean] 
				// 
				

				export let renderingManager = undefined // [renderingmanager] 
				// 
				

				export let shadowsEnabled = undefined // [boolean] 
				// 
				

				export let skeletonsEnabled = undefined // [boolean] 
				// 
				

				export let skipFrustumClipping = undefined // [boolean] 
				// 
				

				export let texturesEnabled = undefined // [boolean] 
				// 
				

				export let totalActiveIndicesPerfCounter = undefined // [perfcounter] 
				// 
				

				export let totalVerticesPerfCounter = undefined // [perfcounter] 
				// 
				

				export let uid = undefined // [string] 
				// 
				

				export let unTranslatedPointer = undefined // [vector2] 
				// 
				

				export let useRightHandedSystem = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let _afterRenderTargetPostProcessStage = undefined // [stage] 
				// defines the actions happening just after the post processing on a render target
				

				export let actionManager = undefined // [abstractactionmanager] 
				// gets or sets the action manager associated with the scene
				

				export let actionManagers = undefined // [array] 
				// actionmanagers available on the scene.
				

				export let ambientColor = undefined // [color3] 
				// defines the color used to simulate the ambient color (default is (0, 0, 0))
				

				export let animationGroups = undefined // [array] 
				// all of the animation groups added to this scene
				

				export let animationTimeScale = undefined // [number] 
				// gets or sets a general scale for animation speed
				

				export let animations = undefined // [array] 
				// gets a list of animations associated with the scene
				

				export let animationsEnabled = undefined // [boolean] 
				// gets or sets a boolean indicating if animations are enabled
				

				export let audioEnabled = undefined // [boolean] 
				// gets or sets if audio support is enabled
				

				export let audioListenerPositionProvider = undefined // [nullable] 
				// gets or sets custom audio listener position provider
				

				export let audioListenerRotationProvider = undefined // [nullable] 
				// gets or sets custom audio listener rotation provider
				

				export let audioPositioningRefreshRate = undefined // [number] 
				// gets or sets a refresh rate when using 3d audio positioning
				

				export let autoClear = undefined // [boolean] 
				// gets or sets a boolean that indicates if the scene must clear the render buffer before rendering a frame
				

				export let autoClearDepthAndStencil = undefined // [boolean] 
				// gets or sets a boolean that indicates if the scene must clear the depth and stencil buffers before rendering a frame
				

				export let cameraToUseForPointers = undefined // [nullable] 
				// define this parameter if you are using multiple cameras and you want to specify which one should be used for pointer position
				

				export let cameras = undefined // [array] 
				// all of the cameras added to this scene
				

				export let clearColor = undefined // [color4] 
				// defines the color used to clear the render buffer (default is (0.2, 0.2, 0.3, 1.0))
				

				export let clipPlane = undefined // [nullable] 
				// gets or sets the active clipplane 1
				

				export let clipPlane2 = undefined // [nullable] 
				// gets or sets the active clipplane 2
				

				export let clipPlane3 = undefined // [nullable] 
				// gets or sets the active clipplane 3
				

				export let clipPlane4 = undefined // [nullable] 
				// gets or sets the active clipplane 4
				

				export let clipPlane5 = undefined // [nullable] 
				// gets or sets the active clipplane 5
				

				export let clipPlane6 = undefined // [nullable] 
				// gets or sets the active clipplane 6
				

				export let collisionsEnabled = undefined // [boolean] 
				// gets or sets a boolean indicating if collisions are enabled on this scene
				

				export let constantlyUpdateMeshUnderPointer = undefined // [boolean] 
				// gets or sets a boolean indicating if the scene must keep the meshunderpointer property updatedplease note that it requires to run a ray cast through the scene on every frame
				

				export let customLODSelector = undefined // [reflection] 
				// 
				

				export let customRenderTargets = undefined // [array] 
				// the list of user defined render targets added to the scene
				

				export let debugLayer = undefined // [debuglayer] 
				// gets the debug layer (aka inspector) associated with the scene
				

				export let defaultCursor = undefined // [string] 
				// defines the html default cursor to use (empty by default)
				

				export let deltaTime = undefined // [number] 
				// gets the current delta time used by animation engine
				

				export let depthPeelingRenderer = undefined // [nullable] 
				// the depth peeling renderer
				

				export let disableOfflineSupportExceptionRules = undefined // [array] 
				// use this array to add regular expressions used to disable offline support for specific urls
				

				export let dispatchAllSubMeshesOfActiveMeshes = undefined // [boolean] 
				// gets or sets a boolean indicating that all submeshes of active meshes must be rendereduse this boolean to avoid computing frustum clipping on submeshes (this could help when you are cpu bound)
				

				export let doNotHandleCursors = undefined // [boolean] 
				// defines whether cursors are handled by the scene.
				

				export let dumpNextRenderTargets = undefined // [boolean] 
				// gets or sets a boolean indicating if next render targets must be dumped as image for debugging purposeswe recommend not using it and instead rely on spector.js: http://spector.babylonjs.com
				

				export let effectLayers = undefined // [array] 
				// the list of effect layers (highlights/glow) added to the scene
				

				export let environmentBRDFTexture = undefined // [basetexture] 
				// this is use to store the default brdf lookup for pbr materials in your scene.it should only be one of the following (if not the default embedded one):* for uncorrelated brdf (pbr.brdf.useenergyconservation = false and pbr.brdf.usesmithvisibilityheightcorrelated = false) : https://assets.babylonjs.com/environments/uncorrelatedbrdf.dds* for correlated brdf (pbr.brdf.useenergyconservation = false and pbr.brdf.usesmithvisibilityheightcorrelated = true) : https://assets.babylonjs.com/environments/correlatedbrdf.dds* for correlated multi scattering brdf (pbr.brdf.useenergyconservation = true and pbr.brdf.usesmithvisibilityheightcorrelated = true) : https://assets.babylonjs.com/environments/correlatedmsbrdf.ddsthe material properties need to be setup according to the type of texture in use.
				

				export let environmentIntensity = undefined // [number] 
				// intensity of the environment in all pbr material.this dims or reinforces the ibl lighting overall (reflection and diffuse).as in the majority of the scene they are the same (exception for multi room and so on),this is easier to reference from here than from all the materials.
				

				export let fluidRenderer = undefined // [nullable] 
				// gets or sets the fluid renderer associated to the scene.
				

				export let fogColor = undefined // [color3] 
				// gets or sets the fog color to use
				

				export let fogDensity = undefined // [number] 
				// gets or sets the fog density to use
				

				export let fogEnd = undefined // [number] 
				// gets or sets the fog end distance to use
				

				export let fogStart = undefined // [number] 
				// gets or sets the fog start distance to use
				

				export let forceShowBoundingBoxes = undefined // [boolean] 
				// gets or sets a boolean indicating if all bounding boxes must be rendered
				

				export let gamepadManager = undefined // [gamepadmanager] 
				// gets the gamepad manager associated with the scene
				

				export let geometries = undefined // [array] 
				// the list of geometries used in the scene.
				

				export let geometryBufferRenderer = undefined // [nullable] 
				// gets or sets the current geometry buffer associated to the scene.
				

				export let getActiveMeshCandidates = undefined // [reflection] 
				// 
				

				export let getActiveSubMeshCandidates = undefined // [reflection] 
				// 
				

				export let getCollidingSubMeshCandidates = undefined // [reflection] 
				// 
				

				export let getDeterministicFrameTime = undefined // [reflection] 
				// 
				

				export let getIntersectingSubMeshCandidates = undefined // [reflection] 
				// 
				

				export let gravity = undefined // [vector3] 
				// defines the gravity applied to this scene (used only for collisions)
				

				export let headphone = undefined // [boolean] 
				// gets or sets if audio will be output to headphones
				

				export let hoverCursor = undefined // [string] 
				// defines the html cursor to use when hovering over interactive elements
				

				export let importedMeshesFiles = undefined // [array] 
				// gets the list of meshes imported to the scene through sceneloader
				

				export let layers = undefined // [array] 
				// the list of layers (background and foreground) of the scene
				

				export let lensFlareSystems = undefined // [array] 
				// the list of lens flare system added to the scene
				

				export let lensFlaresEnabled = undefined // [boolean] 
				// gets or sets a boolean indicating if lens flares are enabled on this scene
				

				export let lights = undefined // [array] 
				// all of the lights added to this scene
				

				export let loadingPluginName = undefined // [string] 
				// gets the name of the plugin used to load this scene (null by default)
				

				export let mainSoundTrack = undefined // [soundtrack] 
				// the main sound track played by the scene.it contains your primary collection of sounds.
				

				export let materials = undefined // [array] 
				// all of the materials added to this scenein the context of a scene, it is not supposed to be modified manually.any addition or removal should be done using the addmaterial and removematerial scene methods.note also that the order of the material within the array is not significant and might change.
				

				export let meshes = undefined // [array] 
				// all of the (abstract) meshes added to this scene
				

				export let metadata = undefined // [any] 
				// gets or sets user defined metadata
				

				export let morphTargetManagers = undefined // [array] 
				// the list of morph target managers added to the scene
				

				export let multiMaterials = undefined // [array] 
				// all of the multi-materials added to this scene
				

				export let needsPreviousWorldMatrices = undefined // [boolean] 
				// flag indicating if we need to store previous matrices when rendering
				

				export let offlineProvider = undefined // [iofflineprovider] 
				// gets or sets the current offline provider to use to store scene data
				

				export let onActiveCameraChanged = undefined // [observable] 
				// an event triggered when the activecamera property is updated
				

				export let onActiveCamerasChanged = undefined // [observable] 
				// an event triggered when the activecameras property is updated
				

				export let onAfterActiveMeshesEvaluationObservable = undefined // [observable] 
				// an event triggered when active meshes evaluation is done
				

				export let onAfterAnimationsObservable = undefined // [observable] 
				// an event triggered after animations processing
				

				export let onAfterCameraRenderObservable = undefined // [observable] 
				// an event triggered after rendering a camerathis is triggered for the full rig camera only unlike onafterrendercameraobservable
				

				export let onAfterDrawPhaseObservable = undefined // [observable] 
				// an event triggered after draw calls have been sent
				

				export let onAfterParticlesRenderingObservable = undefined // [observable] 
				// an event triggered when particles rendering is donenote: this event can be trigger more than once per frame (because particles can be rendered by render target textures as well)
				

				export let onAfterPhysicsObservable = undefined // [observable] 
				// an event triggered when physic simulation has been done
				

				export let onAfterRenderCameraObservable = undefined // [observable] 
				// an event triggered after rendering the scene for an active camera (when scene.render is called this will be called after each camera)this is triggered for each "sub" camera in a camera rig unlike onaftercamerarenderobservable
				

				export let onAfterRenderObservable = undefined // [observable] 
				// an event triggered after rendering the scene
				

				export let onAfterRenderTargetsRenderObservable = undefined // [observable] 
				// an event triggered when render targets were rendered.can happen multiple times per frame.
				

				export let onAfterRenderingGroupObservable = undefined // [observable] 
				// this observable will be triggered after rendering each renderinggroup of each rendered camera.the renderinggroupinfo class contains all the information about the context in which the observable is calledif you wish to register an observer only for a given set of renderinggroup, use the mask with a combination of the renderinggroup index elevated to the power of two (1 for renderinggroup 0, 2 for renderingroup1, 4 for 2 and 8 for 3)
				

				export let onAfterSpritesRenderingObservable = undefined // [observable] 
				// an event triggered when sprites rendering is donenote: this event can be trigger more than once per frame (because sprites can be rendered by render target textures as well)
				

				export let onAfterStepObservable = undefined // [observable] 
				// an event triggered after calculating deterministic simulation step
				

				export let onAnimationFileImportedObservable = undefined // [observable] 
				// this observable will when an animation file has been imported into the scene.
				

				export let onBeforeActiveMeshesEvaluationObservable = undefined // [observable] 
				// an event triggered when active meshes evaluation is about to start
				

				export let onBeforeAnimationsObservable = undefined // [observable] 
				// an event triggered before animating the scene
				

				export let onBeforeCameraRenderObservable = undefined // [observable] 
				// an event triggered before rendering a camera
				

				export let onBeforeDrawPhaseObservable = undefined // [observable] 
				// an event triggered before draw calls are ready to be sent
				

				export let onBeforeParticlesRenderingObservable = undefined // [observable] 
				// an event triggered when particles rendering is about to startnote: this event can be trigger more than once per frame (because particles can be rendered by render target textures as well)
				

				export let onBeforePhysicsObservable = undefined // [observable] 
				// an event triggered when physic simulation is about to be run
				

				export let onBeforeRenderObservable = undefined // [observable] 
				// an event triggered before rendering the scene (right after animations and physics)
				

				export let onBeforeRenderTargetsRenderObservable = undefined // [observable] 
				// an event triggered when render targets are about to be renderedcan happen multiple times per frame.
				

				export let onBeforeRenderingGroupObservable = undefined // [observable] 
				// this observable will be triggered before rendering each renderinggroup of each rendered camera.the renderinggroupinfo class contains all the information about the context in which the observable is calledif you wish to register an observer only for a given set of renderinggroup, use the mask with a combination of the renderinggroup index elevated to the power of two (1 for renderinggroup 0, 2 for renderingroup1, 4 for 2 and 8 for 3)
				

				export let onBeforeSpritesRenderingObservable = undefined // [observable] 
				// an event triggered when sprites rendering is about to startnote: this event can be trigger more than once per frame (because sprites can be rendered by render target textures as well)
				

				export let onBeforeStepObservable = undefined // [observable] 
				// an event triggered before calculating deterministic simulation step
				

				export let onCameraRemovedObservable = undefined // [observable] 
				// an event triggered when a camera is removed
				

				export let onDataLoadedObservable = undefined // [observable] 
				// an event triggered when sceneloader.append or sceneloader.load or sceneloader.importmesh were successfully executed
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the scene is disposed.
				

				export let onGeometryRemovedObservable = undefined // [observable] 
				// an event triggered when a geometry is removed
				

				export let onKeyboardObservable = undefined // [observable] 
				// observable event triggered each time an keyboard event is received from the hosting window
				

				export let onLightRemovedObservable = undefined // [observable] 
				// an event triggered when a light is removed
				

				export let onMaterialRemovedObservable = undefined // [observable] 
				// an event triggered when a material is removed
				

				export let onMeshImportedObservable = undefined // [observable] 
				// this observable will when a mesh has been imported into the scene.
				

				export let onMeshRemovedObservable = undefined // [observable] 
				// an event triggered when a mesh is removed
				

				export let onMultiMaterialRemovedObservable = undefined // [observable] 
				// an event triggered when a multi material is removed
				

				export let onNewCameraAddedObservable = undefined // [observable] 
				// an event triggered when a camera is created
				

				export let onNewGeometryAddedObservable = undefined // [observable] 
				// an event triggered when a geometry is created
				

				export let onNewLightAddedObservable = undefined // [observable] 
				// an event triggered when a light is created
				

				export let onNewMaterialAddedObservable = undefined // [observable] 
				// an event triggered when a material is created
				

				export let onNewMeshAddedObservable = undefined // [observable] 
				// an event triggered when a mesh is created
				

				export let onNewMultiMaterialAddedObservable = undefined // [observable] 
				// an event triggered when a multi material is created
				

				export let onNewSkeletonAddedObservable = undefined // [observable] 
				// an event triggered when a skeleton is created
				

				export let onNewTextureAddedObservable = undefined // [observable] 
				// an event triggered when a texture is created
				

				export let onNewTransformNodeAddedObservable = undefined // [observable] 
				// an event triggered when a transform node is created
				

				export let onPointerDown = undefined // [reflection] 
				// 
				

				export let onPointerMove = undefined // [reflection] 
				// 
				

				export let onPointerObservable = undefined // [observable] 
				// observable event triggered each time an input event is received from the rendering canvas
				

				export let onPointerPick = undefined // [reflection] 
				// 
				

				export let onPointerUp = undefined // [reflection] 
				// 
				

				export let onPreKeyboardObservable = undefined // [observable] 
				// this observable event is triggered when any keyboard event si raised and registered during scene.attachcontrol()you have the possibility to skip the process and the call to onkeyboardobservable by setting keyboardinfopre.skiponpointerobservable to true
				

				export let onPrePointerObservable = undefined // [observable] 
				// this observable event is triggered when any ponter event is triggered. it is registered during scene.attachcontrol() and it is called before the 3d engine process anything (mesh/sprite picking for instance).you have the possibility to skip the process and the call to onpointerobservable by setting pointerinfopre.skiponpointerobservable to true
				

				export let onReadyObservable = undefined // [observable] 
				// an event triggered when the scene is ready
				

				export let onSkeletonRemovedObservable = undefined // [observable] 
				// an event triggered when a skeleton is removed
				

				export let onTextureRemovedObservable = undefined // [observable] 
				// an event triggered when a texture is removed
				

				export let onTransformNodeRemovedObservable = undefined // [observable] 
				// an event triggered when a transform node is removed
				

				export let particleSystems = undefined // [array] 
				// all of the particle systems added to this scene
				

				export let particlesEnabled = undefined // [boolean] 
				// gets or sets a boolean indicating if particles are enabled on this scene
				

				export let physicsEnabled = undefined // [boolean] 
				// gets or sets a boolean indicating if physic engines are enabled on this scene
				

				export let pointerDownPredicate = undefined // [reflection] 
				// 
				

				export let pointerMovePredicate = undefined // [reflection] 
				// 
				

				export let pointerMoveTrianglePredicate = undefined // [union] 
				// gets or sets a predicate used to select candidate faces for a pointer move event
				

				export let pointerUpPredicate = undefined // [reflection] 
				// 
				

				export let postProcessManager = undefined // [postprocessmanager] 
				// gets the current postprocess manager
				

				export let postProcessRenderPipelineManager = undefined // [postprocessrenderpipelinemanager] 
				// gets the postprocess render pipeline manager
				

				export let postProcesses = undefined // [array] 
				// the list of postprocesses added to the scene
				

				export let postProcessesEnabled = undefined // [boolean] 
				// gets or sets a boolean indicating if postprocesses are enabled on this scene
				

				export let prePassRenderer = undefined // [nullable] 
				// gets or sets the current prepass renderer associated to the scene.
				

				export let preventDefaultOnPointerDown = undefined // [boolean] 
				// this is used to call preventdefault() on pointer downin order to block unwanted artifacts like system double clicks
				

				export let preventDefaultOnPointerUp = undefined // [boolean] 
				// this is used to call preventdefault() on pointer upin order to block unwanted artifacts like system double clicks
				

				export let probesEnabled = undefined // [boolean] 
				// gets or sets a boolean indicating if probes are enabled on this scene
				

				export let proceduralTextures = undefined // [array] 
				// the list of procedural textures added to the scene
				

				export let proceduralTexturesEnabled = undefined // [boolean] 
				// gets or sets a boolean indicating if procedural textures are enabled on this scene
				

				export let reflectionProbes = undefined // [array] 
				// the list of reflection probes added to the scene
				

				export let renderTargetsEnabled = undefined // [boolean] 
				// gets or sets a boolean indicating if render targets are enabled on this scene
				

				export let requireLightSorting = undefined // [boolean] 
				// gets or sets a boolean indicating if lights must be sorted by priority (off by default)this is useful if there are more lights that the maximum simulteanous authorized
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let rootNodes = undefined // [array] 
				// gets the list of root nodes (ie. nodes with no parent)
				

				export let selectionOctree = undefined // [octree] 
				// gets the octree used to boost mesh selection (picking)
				

				export let simplificationQueue = undefined // [simplificationqueue] 
				// gets or sets the simplification queue attached to the scene
				

				export let skeletons = undefined // [array] 
				// the list of skeletons added to the scene
				

				export let skipPointerDownPicking = undefined // [boolean] 
				// gets or sets a boolean indicating if the user want to entirely skip the picking phase when a pointer down event occurs.
				

				export let skipPointerMovePicking = undefined // [boolean] 
				// gets or sets a boolean indicating if the user want to entirely skip the picking phase when a pointer move event occurs.
				

				export let skipPointerUpPicking = undefined // [boolean] 
				// gets or sets a boolean indicating if the user want to entirely skip the picking phase when a pointer up event occurs.  off by default.
				

				export let soundTracks = undefined // [nullable] 
				// the list of sound tracks added to the scene
				

				export let sounds = undefined // [nullable] 
				// the list of sounds used in the scene.
				

				export let spriteManagers = undefined // [array] 
				// all of the sprite managers added to this scene
				

				export let spritesEnabled = undefined // [boolean] 
				// gets or sets a boolean indicating if sprites are enabled on this scene
				

				export let subSurfaceConfiguration = undefined // [nullable] 
				// gets or sets the current prepass renderer associated to the scene.
				

				export let textures = undefined // [array] 
				// textures to keep.
				

				export let transformNodes = undefined // [array] 
				// all of the transform nodes added to this scenein the context of a scene, it is not supposed to be modified manually.any addition or removal should be done using the addtransformnode and removetransformnode scene methods.note also that the order of the transformnode within the array is not significant and might change.
				

				export let useConstantAnimationDeltaTime = undefined // [boolean] 
				// gets or sets a boolean indicating if a constant deltatime has to be usedthis is mostly useful for testing purposes when you do not want the animations to scale with the framerate
				

				export let useDelayedTextureLoading = undefined // [boolean] 
				// defines if texture loading must be delayedif true, textures will only be loaded when they need to be rendered
				

				export let useOrderIndependentTransparency = undefined // [boolean] 
				// flag to indicate if we want to use order independent transparency, despite the performance hit
				

				// ================ METHODS ================

				
				export let addActionManager = (...args) => instance.addActionManager(...args)

				export let addAnimation = (...args) => instance.addAnimation(...args)

				export let addAnimationGroup = (...args) => instance.addAnimationGroup(...args)

				export let addCamera = (...args) => instance.addCamera(...args)

				export let addEffectLayer = (...args) => instance.addEffectLayer(...args)

				export let addExternalData = (...args) => instance.addExternalData(...args)

				export let addGeometry = (...args) => instance.addGeometry(...args)

				export let addLensFlareSystem = (...args) => instance.addLensFlareSystem(...args)

				export let addLight = (...args) => instance.addLight(...args)

				export let addMaterial = (...args) => instance.addMaterial(...args)

				export let addMesh = (...args) => instance.addMesh(...args)

				export let addMorphTargetManager = (...args) => instance.addMorphTargetManager(...args)

				export let addMultiMaterial = (...args) => instance.addMultiMaterial(...args)

				export let addParticleSystem = (...args) => instance.addParticleSystem(...args)

				export let addPendingData = (...args) => instance.addPendingData(...args)

				export let addReflectionProbe = (...args) => instance.addReflectionProbe(...args)

				export let addSkeleton = (...args) => instance.addSkeleton(...args)

				export let addTexture = (...args) => instance.addTexture(...args)

				export let addTransformNode = (...args) => instance.addTransformNode(...args)

				export let animate = (...args) => instance.animate(...args)

				export let attachControl = (...args) => instance.attachControl(...args)

				export let beginAnimation = (...args) => instance.beginAnimation(...args)

				export let beginDirectAnimation = (...args) => instance.beginDirectAnimation(...args)

				export let beginDirectHierarchyAnimation = (...args) => instance.beginDirectHierarchyAnimation(...args)

				export let beginHierarchyAnimation = (...args) => instance.beginHierarchyAnimation(...args)

				export let beginWeightedAnimation = (...args) => instance.beginWeightedAnimation(...args)

				export let bindEyePosition = (...args) => instance.bindEyePosition(...args)

				export let cleanCachedTextureBuffer = (...args) => instance.cleanCachedTextureBuffer(...args)

				export let clearCachedVertexData = (...args) => instance.clearCachedVertexData(...args)

				export let createDefaultCamera = (...args) => instance.createDefaultCamera(...args)

				export let createDefaultCameraOrLight = (...args) => instance.createDefaultCameraOrLight(...args)

				export let createDefaultEnvironment = (...args) => instance.createDefaultEnvironment(...args)

				export let createDefaultLight = (...args) => instance.createDefaultLight(...args)

				export let createDefaultSkybox = (...args) => instance.createDefaultSkybox(...args)

				export let createDefaultVRExperience = (...args) => instance.createDefaultVRExperience(...args)

				export let createDefaultXRExperienceAsync = (...args) => instance.createDefaultXRExperienceAsync(...args)

				export let createOrUpdateSelectionOctree = (...args) => instance.createOrUpdateSelectionOctree(...args)

				export let createPickingRay = (...args) => instance.createPickingRay(...args)

				export let createPickingRayInCameraSpace = (...args) => instance.createPickingRayInCameraSpace(...args)

				export let createPickingRayInCameraSpaceToRef = (...args) => instance.createPickingRayInCameraSpaceToRef(...args)

				export let createPickingRayToRef = (...args) => instance.createPickingRayToRef(...args)

				export let createSceneUniformBuffer = (...args) => instance.createSceneUniformBuffer(...args)

				export let deleteCompoundImpostor = (...args) => instance.deleteCompoundImpostor(...args)

				export let detachControl = (...args) => instance.detachControl(...args)

				export let disableDepthRenderer = (...args) => instance.disableDepthRenderer(...args)

				export let disableFluidRenderer = (...args) => instance.disableFluidRenderer(...args)

				export let disableGeometryBufferRenderer = (...args) => instance.disableGeometryBufferRenderer(...args)

				export let disablePhysicsEngine = (...args) => instance.disablePhysicsEngine(...args)

				export let disablePrePassRenderer = (...args) => instance.disablePrePassRenderer(...args)

				export let disableSubSurfaceForPrePass = (...args) => instance.disableSubSurfaceForPrePass(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let enableDepthRenderer = (...args) => instance.enableDepthRenderer(...args)

				export let enableFluidRenderer = (...args) => instance.enableFluidRenderer(...args)

				export let enableGeometryBufferRenderer = (...args) => instance.enableGeometryBufferRenderer(...args)

				export let enablePhysics = (...args) => instance.enablePhysics(...args)

				export let enablePrePassRenderer = (...args) => instance.enablePrePassRenderer(...args)

				export let enableSubSurfaceForPrePass = (...args) => instance.enableSubSurfaceForPrePass(...args)

				export let executeOnceBeforeRender = (...args) => instance.executeOnceBeforeRender(...args)

				export let executeWhenReady = (...args) => instance.executeWhenReady(...args)

				export let finalizeSceneUbo = (...args) => instance.finalizeSceneUbo(...args)

				export let freeActiveMeshes = (...args) => instance.freeActiveMeshes(...args)

				export let freeProcessedMaterials = (...args) => instance.freeProcessedMaterials(...args)

				export let freeRenderingGroups = (...args) => instance.freeRenderingGroups(...args)

				export let freezeActiveMeshes = (...args) => instance.freezeActiveMeshes(...args)

				export let freezeMaterials = (...args) => instance.freezeMaterials(...args)

				export let getActiveBones = (...args) => instance.getActiveBones(...args)

				export let getActiveIndices = (...args) => instance.getActiveIndices(...args)

				export let getActiveMeshes = (...args) => instance.getActiveMeshes(...args)

				export let getActiveParticles = (...args) => instance.getActiveParticles(...args)

				export let getAllAnimatablesByTarget = (...args) => instance.getAllAnimatablesByTarget(...args)

				export let getAnimatableByTarget = (...args) => instance.getAnimatableByTarget(...args)

				export let getAnimationGroupByName = (...args) => instance.getAnimationGroupByName(...args)

				export let getAnimationRatio = (...args) => instance.getAnimationRatio(...args)

				export let getAutoClearDepthStencilSetup = (...args) => instance.getAutoClearDepthStencilSetup(...args)

				export let getBoneByID = (...args) => instance.getBoneByID(...args)

				export let getBoneById = (...args) => instance.getBoneById(...args)

				export let getBoneByName = (...args) => instance.getBoneByName(...args)

				export let getBoundingBoxRenderer = (...args) => instance.getBoundingBoxRenderer(...args)

				export let getCachedEffect = (...args) => instance.getCachedEffect(...args)

				export let getCachedMaterial = (...args) => instance.getCachedMaterial(...args)

				export let getCachedVisibility = (...args) => instance.getCachedVisibility(...args)

				export let getCameraByID = (...args) => instance.getCameraByID(...args)

				export let getCameraById = (...args) => instance.getCameraById(...args)

				export let getCameraByName = (...args) => instance.getCameraByName(...args)

				export let getCameraByUniqueID = (...args) => instance.getCameraByUniqueID(...args)

				export let getCameraByUniqueId = (...args) => instance.getCameraByUniqueId(...args)

				export let getCamerasByTags = (...args) => instance.getCamerasByTags(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getEngine = (...args) => instance.getEngine(...args)

				export let getExternalData = (...args) => instance.getExternalData(...args)

				export let getFrameId = (...args) => instance.getFrameId(...args)

				export let getGeometries = (...args) => instance.getGeometries(...args)

				export let getGeometryByID = (...args) => instance.getGeometryByID(...args)

				export let getGeometryById = (...args) => instance.getGeometryById(...args)

				export let getGlowLayerByName = (...args) => instance.getGlowLayerByName(...args)

				export let getHighlightLayerByName = (...args) => instance.getHighlightLayerByName(...args)

				export let getInternalStep = (...args) => instance.getInternalStep(...args)

				export let getLastEntryByID = (...args) => instance.getLastEntryByID(...args)

				export let getLastEntryById = (...args) => instance.getLastEntryById(...args)

				export let getLastMaterialByID = (...args) => instance.getLastMaterialByID(...args)

				export let getLastMaterialById = (...args) => instance.getLastMaterialById(...args)

				export let getLastMeshByID = (...args) => instance.getLastMeshByID(...args)

				export let getLastMeshById = (...args) => instance.getLastMeshById(...args)

				export let getLastSkeletonByID = (...args) => instance.getLastSkeletonByID(...args)

				export let getLastSkeletonById = (...args) => instance.getLastSkeletonById(...args)

				export let getLensFlareSystemByID = (...args) => instance.getLensFlareSystemByID(...args)

				export let getLensFlareSystemById = (...args) => instance.getLensFlareSystemById(...args)

				export let getLensFlareSystemByName = (...args) => instance.getLensFlareSystemByName(...args)

				export let getLightByID = (...args) => instance.getLightByID(...args)

				export let getLightById = (...args) => instance.getLightById(...args)

				export let getLightByName = (...args) => instance.getLightByName(...args)

				export let getLightByUniqueID = (...args) => instance.getLightByUniqueID(...args)

				export let getLightByUniqueId = (...args) => instance.getLightByUniqueId(...args)

				export let getLightsByTags = (...args) => instance.getLightsByTags(...args)

				export let getMaterialByID = (...args) => instance.getMaterialByID(...args)

				export let getMaterialById = (...args) => instance.getMaterialById(...args)

				export let getMaterialByName = (...args) => instance.getMaterialByName(...args)

				export let getMaterialByTags = (...args) => instance.getMaterialByTags(...args)

				export let getMaterialByUniqueID = (...args) => instance.getMaterialByUniqueID(...args)

				export let getMeshByID = (...args) => instance.getMeshByID(...args)

				export let getMeshById = (...args) => instance.getMeshById(...args)

				export let getMeshByName = (...args) => instance.getMeshByName(...args)

				export let getMeshByUniqueID = (...args) => instance.getMeshByUniqueID(...args)

				export let getMeshByUniqueId = (...args) => instance.getMeshByUniqueId(...args)

				export let getMeshesByID = (...args) => instance.getMeshesByID(...args)

				export let getMeshesById = (...args) => instance.getMeshesById(...args)

				export let getMeshesByTags = (...args) => instance.getMeshesByTags(...args)

				export let getMorphTargetById = (...args) => instance.getMorphTargetById(...args)

				export let getMorphTargetByName = (...args) => instance.getMorphTargetByName(...args)

				export let getMorphTargetManagerById = (...args) => instance.getMorphTargetManagerById(...args)

				export let getNodeByID = (...args) => instance.getNodeByID(...args)

				export let getNodeById = (...args) => instance.getNodeById(...args)

				export let getNodeByName = (...args) => instance.getNodeByName(...args)

				export let getNodes = (...args) => instance.getNodes(...args)

				export let getOrAddExternalDataWithFactory = (...args) => instance.getOrAddExternalDataWithFactory(...args)

				export let getOutlineRenderer = (...args) => instance.getOutlineRenderer(...args)

				export let getParticleSystemByID = (...args) => instance.getParticleSystemByID(...args)

				export let getParticleSystemById = (...args) => instance.getParticleSystemById(...args)

				export let getPerfCollector = (...args) => instance.getPerfCollector(...args)

				export let getPhysicsEngine = (...args) => instance.getPhysicsEngine(...args)

				export let getPointerOverMesh = (...args) => instance.getPointerOverMesh(...args)

				export let getPointerOverSprite = (...args) => instance.getPointerOverSprite(...args)

				export let getPostProcessByName = (...args) => instance.getPostProcessByName(...args)

				export let getProjectionMatrix = (...args) => instance.getProjectionMatrix(...args)

				export let getRenderId = (...args) => instance.getRenderId(...args)

				export let getSceneUniformBuffer = (...args) => instance.getSceneUniformBuffer(...args)

				export let getSkeletonById = (...args) => instance.getSkeletonById(...args)

				export let getSkeletonByName = (...args) => instance.getSkeletonByName(...args)

				export let getSkeletonByUniqueId = (...args) => instance.getSkeletonByUniqueId(...args)

				export let getSoundByName = (...args) => instance.getSoundByName(...args)

				export let getStepId = (...args) => instance.getStepId(...args)

				export let getTextureByName = (...args) => instance.getTextureByName(...args)

				export let getTextureByUniqueID = (...args) => instance.getTextureByUniqueID(...args)

				export let getTextureByUniqueId = (...args) => instance.getTextureByUniqueId(...args)

				export let getTotalVertices = (...args) => instance.getTotalVertices(...args)

				export let getTransformMatrix = (...args) => instance.getTransformMatrix(...args)

				export let getTransformNodeByID = (...args) => instance.getTransformNodeByID(...args)

				export let getTransformNodeById = (...args) => instance.getTransformNodeById(...args)

				export let getTransformNodeByName = (...args) => instance.getTransformNodeByName(...args)

				export let getTransformNodeByUniqueID = (...args) => instance.getTransformNodeByUniqueID(...args)

				export let getTransformNodeByUniqueId = (...args) => instance.getTransformNodeByUniqueId(...args)

				export let getTransformNodesByID = (...args) => instance.getTransformNodesByID(...args)

				export let getTransformNodesById = (...args) => instance.getTransformNodesById(...args)

				export let getTransformNodesByTags = (...args) => instance.getTransformNodesByTags(...args)

				export let getUniqueId = (...args) => instance.getUniqueId(...args)

				export let getViewMatrix = (...args) => instance.getViewMatrix(...args)

				export let getWaitingItemsCount = (...args) => instance.getWaitingItemsCount(...args)

				export let getWorldExtends = (...args) => instance.getWorldExtends(...args)

				export let incrementRenderId = (...args) => instance.incrementRenderId(...args)

				export let isActiveMesh = (...args) => instance.isActiveMesh(...args)

				export let isCachedMaterialInvalid = (...args) => instance.isCachedMaterialInvalid(...args)

				export let isPhysicsEnabled = (...args) => instance.isPhysicsEnabled(...args)

				export let isPointerCaptured = (...args) => instance.isPointerCaptured(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let markAllMaterialsAsDirty = (...args) => instance.markAllMaterialsAsDirty(...args)

				export let multiPick = (...args) => instance.multiPick(...args)

				export let multiPickSprite = (...args) => instance.multiPickSprite(...args)

				export let multiPickSpriteWithRay = (...args) => instance.multiPickSpriteWithRay(...args)

				export let multiPickWithRay = (...args) => instance.multiPickWithRay(...args)

				export let pick = (...args) => instance.pick(...args)

				export let pickSprite = (...args) => instance.pickSprite(...args)

				export let pickSpriteWithRay = (...args) => instance.pickSpriteWithRay(...args)

				export let pickWithBoundingInfo = (...args) => instance.pickWithBoundingInfo(...args)

				export let pickWithRay = (...args) => instance.pickWithRay(...args)

				export let pushGeometry = (...args) => instance.pushGeometry(...args)

				export let registerAfterRender = (...args) => instance.registerAfterRender(...args)

				export let registerBeforeRender = (...args) => instance.registerBeforeRender(...args)

				export let removeActionManager = (...args) => instance.removeActionManager(...args)

				export let removeAnimation = (...args) => instance.removeAnimation(...args)

				export let removeAnimationGroup = (...args) => instance.removeAnimationGroup(...args)

				export let removeCamera = (...args) => instance.removeCamera(...args)

				export let removeEffectLayer = (...args) => instance.removeEffectLayer(...args)

				export let removeExternalData = (...args) => instance.removeExternalData(...args)

				export let removeGeometry = (...args) => instance.removeGeometry(...args)

				export let removeLensFlareSystem = (...args) => instance.removeLensFlareSystem(...args)

				export let removeLight = (...args) => instance.removeLight(...args)

				export let removeMaterial = (...args) => instance.removeMaterial(...args)

				export let removeMesh = (...args) => instance.removeMesh(...args)

				export let removeMorphTargetManager = (...args) => instance.removeMorphTargetManager(...args)

				export let removeMultiMaterial = (...args) => instance.removeMultiMaterial(...args)

				export let removeParticleSystem = (...args) => instance.removeParticleSystem(...args)

				export let removePendingData = (...args) => instance.removePendingData(...args)

				export let removeReflectionProbe = (...args) => instance.removeReflectionProbe(...args)

				export let removeSkeleton = (...args) => instance.removeSkeleton(...args)

				export let removeTexture = (...args) => instance.removeTexture(...args)

				export let removeTransformNode = (...args) => instance.removeTransformNode(...args)

				export let render = (...args) => instance.render(...args)

				export let resetCachedMaterial = (...args) => instance.resetCachedMaterial(...args)

				export let resetDrawCache = (...args) => instance.resetDrawCache(...args)

				export let resetLastAnimationTimeFrame = (...args) => instance.resetLastAnimationTimeFrame(...args)

				export let setActiveCameraByID = (...args) => instance.setActiveCameraByID(...args)

				export let setActiveCameraById = (...args) => instance.setActiveCameraById(...args)

				export let setActiveCameraByName = (...args) => instance.setActiveCameraByName(...args)

				export let setDefaultCandidateProviders = (...args) => instance.setDefaultCandidateProviders(...args)

				export let setPointerOverMesh = (...args) => instance.setPointerOverMesh(...args)

				export let setPointerOverSprite = (...args) => instance.setPointerOverSprite(...args)

				export let setRenderingAutoClearDepthStencil = (...args) => instance.setRenderingAutoClearDepthStencil(...args)

				export let setRenderingOrder = (...args) => instance.setRenderingOrder(...args)

				export let setSceneUniformBuffer = (...args) => instance.setSceneUniformBuffer(...args)

				export let setStepId = (...args) => instance.setStepId(...args)

				export let setTransformMatrix = (...args) => instance.setTransformMatrix(...args)

				export let simulatePointerDown = (...args) => instance.simulatePointerDown(...args)

				export let simulatePointerMove = (...args) => instance.simulatePointerMove(...args)

				export let simulatePointerUp = (...args) => instance.simulatePointerUp(...args)

				export let sortLightsByPriority = (...args) => instance.sortLightsByPriority(...args)

				export let stopAllAnimations = (...args) => instance.stopAllAnimations(...args)

				export let stopAnimation = (...args) => instance.stopAnimation(...args)

				export let switchActiveCamera = (...args) => instance.switchActiveCamera(...args)

				export let unfreezeActiveMeshes = (...args) => instance.unfreezeActiveMeshes(...args)

				export let unfreezeMaterials = (...args) => instance.unfreezeMaterials(...args)

				export let unregisterAfterRender = (...args) => instance.unregisterAfterRender(...args)

				export let unregisterBeforeRender = (...args) => instance.unregisterBeforeRender(...args)

				export let updateTransformMatrix = (...args) => instance.updateTransformMatrix(...args)

				export let whenReadyAsync = (...args) => instance.whenReadyAsync(...args)

				export let AddIndividualParser = (...args) => instance.AddIndividualParser(...args)

				export let AddParser = (...args) => instance.AddParser(...args)

				export let CollisionCoordinatorFactory = (...args) => instance.CollisionCoordinatorFactory(...args)

				export let DefaultMaterialFactory = (...args) => instance.DefaultMaterialFactory(...args)

				export let GetIndividualParser = (...args) => instance.GetIndividualParser(...args)

				export let GetParser = (...args) => instance.GetParser(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Scene]`, ...args) : null

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

												if (engine != undefined) instance.engine = engine?.instance || engine
				engine = instance.engine
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options

				activeBonesPerfCounter = instance.activeBonesPerfCounter
				if (activeCamera != undefined) instance.activeCamera = activeCamera?.instance || activeCamera
				activeCamera = instance.activeCamera
				if (activeCameras != undefined) instance.activeCameras = activeCameras?.instance || activeCameras
				activeCameras = instance.activeCameras

				activeParticlesPerfCounter = instance.activeParticlesPerfCounter
				if (afterCameraRender != undefined) instance.afterCameraRender = afterCameraRender?.instance || afterCameraRender
				afterCameraRender = instance.afterCameraRender
				if (afterRender != undefined) instance.afterRender = afterRender?.instance || afterRender
				afterRender = instance.afterRender

				animatables = instance.animatables
				if (animationPropertiesOverride != undefined) instance.animationPropertiesOverride = animationPropertiesOverride?.instance || animationPropertiesOverride
				animationPropertiesOverride = instance.animationPropertiesOverride
				if (beforeCameraRender != undefined) instance.beforeCameraRender = beforeCameraRender?.instance || beforeCameraRender
				beforeCameraRender = instance.beforeCameraRender
				if (beforeRender != undefined) instance.beforeRender = beforeRender?.instance || beforeRender
				beforeRender = instance.beforeRender
				if (blockMaterialDirtyMechanism != undefined) instance.blockMaterialDirtyMechanism = blockMaterialDirtyMechanism?.instance || blockMaterialDirtyMechanism
				blockMaterialDirtyMechanism = instance.blockMaterialDirtyMechanism
				if (blockfreeActiveMeshesAndRenderingGroups != undefined) instance.blockfreeActiveMeshesAndRenderingGroups = blockfreeActiveMeshesAndRenderingGroups?.instance || blockfreeActiveMeshesAndRenderingGroups
				blockfreeActiveMeshesAndRenderingGroups = instance.blockfreeActiveMeshesAndRenderingGroups
				if (defaultMaterial != undefined) instance.defaultMaterial = defaultMaterial?.instance || defaultMaterial
				defaultMaterial = instance.defaultMaterial
				if (environmentTexture != undefined) instance.environmentTexture = environmentTexture?.instance || environmentTexture
				environmentTexture = instance.environmentTexture
				if (fogEnabled != undefined) instance.fogEnabled = fogEnabled?.instance || fogEnabled
				fogEnabled = instance.fogEnabled
				if (fogMode != undefined) instance.fogMode = fogMode?.instance || fogMode
				fogMode = instance.fogMode
				if (forcePointsCloud != undefined) instance.forcePointsCloud = forcePointsCloud?.instance || forcePointsCloud
				forcePointsCloud = instance.forcePointsCloud
				if (forceWireframe != undefined) instance.forceWireframe = forceWireframe?.instance || forceWireframe
				forceWireframe = instance.forceWireframe

				frustumPlanes = instance.frustumPlanes

				imageProcessingConfiguration = instance.imageProcessingConfiguration

				isDisposed = instance.isDisposed

				isLoading = instance.isLoading
				if (lightsEnabled != undefined) instance.lightsEnabled = lightsEnabled?.instance || lightsEnabled
				lightsEnabled = instance.lightsEnabled

				meshUnderPointer = instance.meshUnderPointer
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose
				if (performancePriority != undefined) instance.performancePriority = performancePriority?.instance || performancePriority
				performancePriority = instance.performancePriority
				if (pointerX != undefined) instance.pointerX = pointerX?.instance || pointerX
				pointerX = instance.pointerX
				if (pointerY != undefined) instance.pointerY = pointerY?.instance || pointerY
				pointerY = instance.pointerY

				prePass = instance.prePass

				renderingManager = instance.renderingManager
				if (shadowsEnabled != undefined) instance.shadowsEnabled = shadowsEnabled?.instance || shadowsEnabled
				shadowsEnabled = instance.shadowsEnabled
				if (skeletonsEnabled != undefined) instance.skeletonsEnabled = skeletonsEnabled?.instance || skeletonsEnabled
				skeletonsEnabled = instance.skeletonsEnabled
				if (skipFrustumClipping != undefined) instance.skipFrustumClipping = skipFrustumClipping?.instance || skipFrustumClipping
				skipFrustumClipping = instance.skipFrustumClipping
				if (texturesEnabled != undefined) instance.texturesEnabled = texturesEnabled?.instance || texturesEnabled
				texturesEnabled = instance.texturesEnabled

				totalActiveIndicesPerfCounter = instance.totalActiveIndicesPerfCounter

				totalVerticesPerfCounter = instance.totalVerticesPerfCounter

				uid = instance.uid

				unTranslatedPointer = instance.unTranslatedPointer
				if (useRightHandedSystem != undefined) instance.useRightHandedSystem = useRightHandedSystem?.instance || useRightHandedSystem
				useRightHandedSystem = instance.useRightHandedSystem
				if (_afterRenderTargetPostProcessStage != undefined) instance._afterRenderTargetPostProcessStage = _afterRenderTargetPostProcessStage?.instance || _afterRenderTargetPostProcessStage
				_afterRenderTargetPostProcessStage = instance._afterRenderTargetPostProcessStage
				if (actionManager != undefined) instance.actionManager = actionManager?.instance || actionManager
				actionManager = instance.actionManager
				if (actionManagers != undefined) instance.actionManagers = actionManagers?.instance || actionManagers
				actionManagers = instance.actionManagers
				if (ambientColor != undefined) instance.ambientColor = ambientColor?.instance || ambientColor
				ambientColor = instance.ambientColor
				if (animationGroups != undefined) instance.animationGroups = animationGroups?.instance || animationGroups
				animationGroups = instance.animationGroups
				if (animationTimeScale != undefined) instance.animationTimeScale = animationTimeScale?.instance || animationTimeScale
				animationTimeScale = instance.animationTimeScale
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (animationsEnabled != undefined) instance.animationsEnabled = animationsEnabled?.instance || animationsEnabled
				animationsEnabled = instance.animationsEnabled
				if (audioEnabled != undefined) instance.audioEnabled = audioEnabled?.instance || audioEnabled
				audioEnabled = instance.audioEnabled
				if (audioListenerPositionProvider != undefined) instance.audioListenerPositionProvider = audioListenerPositionProvider?.instance || audioListenerPositionProvider
				audioListenerPositionProvider = instance.audioListenerPositionProvider
				if (audioListenerRotationProvider != undefined) instance.audioListenerRotationProvider = audioListenerRotationProvider?.instance || audioListenerRotationProvider
				audioListenerRotationProvider = instance.audioListenerRotationProvider
				if (audioPositioningRefreshRate != undefined) instance.audioPositioningRefreshRate = audioPositioningRefreshRate?.instance || audioPositioningRefreshRate
				audioPositioningRefreshRate = instance.audioPositioningRefreshRate
				if (autoClear != undefined) instance.autoClear = autoClear?.instance || autoClear
				autoClear = instance.autoClear
				if (autoClearDepthAndStencil != undefined) instance.autoClearDepthAndStencil = autoClearDepthAndStencil?.instance || autoClearDepthAndStencil
				autoClearDepthAndStencil = instance.autoClearDepthAndStencil
				if (cameraToUseForPointers != undefined) instance.cameraToUseForPointers = cameraToUseForPointers?.instance || cameraToUseForPointers
				cameraToUseForPointers = instance.cameraToUseForPointers
				if (cameras != undefined) instance.cameras = cameras?.instance || cameras
				cameras = instance.cameras
				if (clearColor != undefined) instance.clearColor = clearColor?.instance || clearColor
				clearColor = instance.clearColor
				if (clipPlane != undefined) instance.clipPlane = clipPlane?.instance || clipPlane
				clipPlane = instance.clipPlane
				if (clipPlane2 != undefined) instance.clipPlane2 = clipPlane2?.instance || clipPlane2
				clipPlane2 = instance.clipPlane2
				if (clipPlane3 != undefined) instance.clipPlane3 = clipPlane3?.instance || clipPlane3
				clipPlane3 = instance.clipPlane3
				if (clipPlane4 != undefined) instance.clipPlane4 = clipPlane4?.instance || clipPlane4
				clipPlane4 = instance.clipPlane4
				if (clipPlane5 != undefined) instance.clipPlane5 = clipPlane5?.instance || clipPlane5
				clipPlane5 = instance.clipPlane5
				if (clipPlane6 != undefined) instance.clipPlane6 = clipPlane6?.instance || clipPlane6
				clipPlane6 = instance.clipPlane6
				if (collisionsEnabled != undefined) instance.collisionsEnabled = collisionsEnabled?.instance || collisionsEnabled
				collisionsEnabled = instance.collisionsEnabled
				if (constantlyUpdateMeshUnderPointer != undefined) instance.constantlyUpdateMeshUnderPointer = constantlyUpdateMeshUnderPointer?.instance || constantlyUpdateMeshUnderPointer
				constantlyUpdateMeshUnderPointer = instance.constantlyUpdateMeshUnderPointer
				if (customLODSelector != undefined) instance.customLODSelector = customLODSelector?.instance || customLODSelector
				customLODSelector = instance.customLODSelector
				if (customRenderTargets != undefined) instance.customRenderTargets = customRenderTargets?.instance || customRenderTargets
				customRenderTargets = instance.customRenderTargets
				if (debugLayer != undefined) instance.debugLayer = debugLayer?.instance || debugLayer
				debugLayer = instance.debugLayer
				if (defaultCursor != undefined) instance.defaultCursor = defaultCursor?.instance || defaultCursor
				defaultCursor = instance.defaultCursor
				if (deltaTime != undefined) instance.deltaTime = deltaTime?.instance || deltaTime
				deltaTime = instance.deltaTime
				if (depthPeelingRenderer != undefined) instance.depthPeelingRenderer = depthPeelingRenderer?.instance || depthPeelingRenderer
				depthPeelingRenderer = instance.depthPeelingRenderer
				if (disableOfflineSupportExceptionRules != undefined) instance.disableOfflineSupportExceptionRules = disableOfflineSupportExceptionRules?.instance || disableOfflineSupportExceptionRules
				disableOfflineSupportExceptionRules = instance.disableOfflineSupportExceptionRules
				if (dispatchAllSubMeshesOfActiveMeshes != undefined) instance.dispatchAllSubMeshesOfActiveMeshes = dispatchAllSubMeshesOfActiveMeshes?.instance || dispatchAllSubMeshesOfActiveMeshes
				dispatchAllSubMeshesOfActiveMeshes = instance.dispatchAllSubMeshesOfActiveMeshes
				if (doNotHandleCursors != undefined) instance.doNotHandleCursors = doNotHandleCursors?.instance || doNotHandleCursors
				doNotHandleCursors = instance.doNotHandleCursors
				if (dumpNextRenderTargets != undefined) instance.dumpNextRenderTargets = dumpNextRenderTargets?.instance || dumpNextRenderTargets
				dumpNextRenderTargets = instance.dumpNextRenderTargets
				if (effectLayers != undefined) instance.effectLayers = effectLayers?.instance || effectLayers
				effectLayers = instance.effectLayers
				if (environmentBRDFTexture != undefined) instance.environmentBRDFTexture = environmentBRDFTexture?.instance || environmentBRDFTexture
				environmentBRDFTexture = instance.environmentBRDFTexture
				if (environmentIntensity != undefined) instance.environmentIntensity = environmentIntensity?.instance || environmentIntensity
				environmentIntensity = instance.environmentIntensity
				if (fluidRenderer != undefined) instance.fluidRenderer = fluidRenderer?.instance || fluidRenderer
				fluidRenderer = instance.fluidRenderer
				if (fogColor != undefined) instance.fogColor = fogColor?.instance || fogColor
				fogColor = instance.fogColor
				if (fogDensity != undefined) instance.fogDensity = fogDensity?.instance || fogDensity
				fogDensity = instance.fogDensity
				if (fogEnd != undefined) instance.fogEnd = fogEnd?.instance || fogEnd
				fogEnd = instance.fogEnd
				if (fogStart != undefined) instance.fogStart = fogStart?.instance || fogStart
				fogStart = instance.fogStart
				if (forceShowBoundingBoxes != undefined) instance.forceShowBoundingBoxes = forceShowBoundingBoxes?.instance || forceShowBoundingBoxes
				forceShowBoundingBoxes = instance.forceShowBoundingBoxes
				if (gamepadManager != undefined) instance.gamepadManager = gamepadManager?.instance || gamepadManager
				gamepadManager = instance.gamepadManager
				if (geometries != undefined) instance.geometries = geometries?.instance || geometries
				geometries = instance.geometries
				if (geometryBufferRenderer != undefined) instance.geometryBufferRenderer = geometryBufferRenderer?.instance || geometryBufferRenderer
				geometryBufferRenderer = instance.geometryBufferRenderer
				if (getActiveMeshCandidates != undefined) instance.getActiveMeshCandidates = getActiveMeshCandidates?.instance || getActiveMeshCandidates
				getActiveMeshCandidates = instance.getActiveMeshCandidates
				if (getActiveSubMeshCandidates != undefined) instance.getActiveSubMeshCandidates = getActiveSubMeshCandidates?.instance || getActiveSubMeshCandidates
				getActiveSubMeshCandidates = instance.getActiveSubMeshCandidates
				if (getCollidingSubMeshCandidates != undefined) instance.getCollidingSubMeshCandidates = getCollidingSubMeshCandidates?.instance || getCollidingSubMeshCandidates
				getCollidingSubMeshCandidates = instance.getCollidingSubMeshCandidates
				if (getDeterministicFrameTime != undefined) instance.getDeterministicFrameTime = getDeterministicFrameTime?.instance || getDeterministicFrameTime
				getDeterministicFrameTime = instance.getDeterministicFrameTime
				if (getIntersectingSubMeshCandidates != undefined) instance.getIntersectingSubMeshCandidates = getIntersectingSubMeshCandidates?.instance || getIntersectingSubMeshCandidates
				getIntersectingSubMeshCandidates = instance.getIntersectingSubMeshCandidates
				if (gravity != undefined) instance.gravity = gravity?.instance || gravity
				gravity = instance.gravity
				if (headphone != undefined) instance.headphone = headphone?.instance || headphone
				headphone = instance.headphone
				if (hoverCursor != undefined) instance.hoverCursor = hoverCursor?.instance || hoverCursor
				hoverCursor = instance.hoverCursor
				if (importedMeshesFiles != undefined) instance.importedMeshesFiles = importedMeshesFiles?.instance || importedMeshesFiles
				importedMeshesFiles = instance.importedMeshesFiles
				if (layers != undefined) instance.layers = layers?.instance || layers
				layers = instance.layers
				if (lensFlareSystems != undefined) instance.lensFlareSystems = lensFlareSystems?.instance || lensFlareSystems
				lensFlareSystems = instance.lensFlareSystems
				if (lensFlaresEnabled != undefined) instance.lensFlaresEnabled = lensFlaresEnabled?.instance || lensFlaresEnabled
				lensFlaresEnabled = instance.lensFlaresEnabled
				if (lights != undefined) instance.lights = lights?.instance || lights
				lights = instance.lights
				if (loadingPluginName != undefined) instance.loadingPluginName = loadingPluginName?.instance || loadingPluginName
				loadingPluginName = instance.loadingPluginName
				if (mainSoundTrack != undefined) instance.mainSoundTrack = mainSoundTrack?.instance || mainSoundTrack
				mainSoundTrack = instance.mainSoundTrack
				if (materials != undefined) instance.materials = materials?.instance || materials
				materials = instance.materials
				if (meshes != undefined) instance.meshes = meshes?.instance || meshes
				meshes = instance.meshes
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (morphTargetManagers != undefined) instance.morphTargetManagers = morphTargetManagers?.instance || morphTargetManagers
				morphTargetManagers = instance.morphTargetManagers
				if (multiMaterials != undefined) instance.multiMaterials = multiMaterials?.instance || multiMaterials
				multiMaterials = instance.multiMaterials
				if (needsPreviousWorldMatrices != undefined) instance.needsPreviousWorldMatrices = needsPreviousWorldMatrices?.instance || needsPreviousWorldMatrices
				needsPreviousWorldMatrices = instance.needsPreviousWorldMatrices
				if (offlineProvider != undefined) instance.offlineProvider = offlineProvider?.instance || offlineProvider
				offlineProvider = instance.offlineProvider
				if (onActiveCameraChanged != undefined) instance.onActiveCameraChanged = onActiveCameraChanged?.instance || onActiveCameraChanged
				onActiveCameraChanged = instance.onActiveCameraChanged
				if (onActiveCamerasChanged != undefined) instance.onActiveCamerasChanged = onActiveCamerasChanged?.instance || onActiveCamerasChanged
				onActiveCamerasChanged = instance.onActiveCamerasChanged
				if (onAfterActiveMeshesEvaluationObservable != undefined) instance.onAfterActiveMeshesEvaluationObservable = onAfterActiveMeshesEvaluationObservable?.instance || onAfterActiveMeshesEvaluationObservable
				onAfterActiveMeshesEvaluationObservable = instance.onAfterActiveMeshesEvaluationObservable
				if (onAfterAnimationsObservable != undefined) instance.onAfterAnimationsObservable = onAfterAnimationsObservable?.instance || onAfterAnimationsObservable
				onAfterAnimationsObservable = instance.onAfterAnimationsObservable
				if (onAfterCameraRenderObservable != undefined) instance.onAfterCameraRenderObservable = onAfterCameraRenderObservable?.instance || onAfterCameraRenderObservable
				onAfterCameraRenderObservable = instance.onAfterCameraRenderObservable
				if (onAfterDrawPhaseObservable != undefined) instance.onAfterDrawPhaseObservable = onAfterDrawPhaseObservable?.instance || onAfterDrawPhaseObservable
				onAfterDrawPhaseObservable = instance.onAfterDrawPhaseObservable
				if (onAfterParticlesRenderingObservable != undefined) instance.onAfterParticlesRenderingObservable = onAfterParticlesRenderingObservable?.instance || onAfterParticlesRenderingObservable
				onAfterParticlesRenderingObservable = instance.onAfterParticlesRenderingObservable
				if (onAfterPhysicsObservable != undefined) instance.onAfterPhysicsObservable = onAfterPhysicsObservable?.instance || onAfterPhysicsObservable
				onAfterPhysicsObservable = instance.onAfterPhysicsObservable
				if (onAfterRenderCameraObservable != undefined) instance.onAfterRenderCameraObservable = onAfterRenderCameraObservable?.instance || onAfterRenderCameraObservable
				onAfterRenderCameraObservable = instance.onAfterRenderCameraObservable
				if (onAfterRenderObservable != undefined) instance.onAfterRenderObservable = onAfterRenderObservable?.instance || onAfterRenderObservable
				onAfterRenderObservable = instance.onAfterRenderObservable
				if (onAfterRenderTargetsRenderObservable != undefined) instance.onAfterRenderTargetsRenderObservable = onAfterRenderTargetsRenderObservable?.instance || onAfterRenderTargetsRenderObservable
				onAfterRenderTargetsRenderObservable = instance.onAfterRenderTargetsRenderObservable
				if (onAfterRenderingGroupObservable != undefined) instance.onAfterRenderingGroupObservable = onAfterRenderingGroupObservable?.instance || onAfterRenderingGroupObservable
				onAfterRenderingGroupObservable = instance.onAfterRenderingGroupObservable
				if (onAfterSpritesRenderingObservable != undefined) instance.onAfterSpritesRenderingObservable = onAfterSpritesRenderingObservable?.instance || onAfterSpritesRenderingObservable
				onAfterSpritesRenderingObservable = instance.onAfterSpritesRenderingObservable
				if (onAfterStepObservable != undefined) instance.onAfterStepObservable = onAfterStepObservable?.instance || onAfterStepObservable
				onAfterStepObservable = instance.onAfterStepObservable
				if (onAnimationFileImportedObservable != undefined) instance.onAnimationFileImportedObservable = onAnimationFileImportedObservable?.instance || onAnimationFileImportedObservable
				onAnimationFileImportedObservable = instance.onAnimationFileImportedObservable
				if (onBeforeActiveMeshesEvaluationObservable != undefined) instance.onBeforeActiveMeshesEvaluationObservable = onBeforeActiveMeshesEvaluationObservable?.instance || onBeforeActiveMeshesEvaluationObservable
				onBeforeActiveMeshesEvaluationObservable = instance.onBeforeActiveMeshesEvaluationObservable
				if (onBeforeAnimationsObservable != undefined) instance.onBeforeAnimationsObservable = onBeforeAnimationsObservable?.instance || onBeforeAnimationsObservable
				onBeforeAnimationsObservable = instance.onBeforeAnimationsObservable
				if (onBeforeCameraRenderObservable != undefined) instance.onBeforeCameraRenderObservable = onBeforeCameraRenderObservable?.instance || onBeforeCameraRenderObservable
				onBeforeCameraRenderObservable = instance.onBeforeCameraRenderObservable
				if (onBeforeDrawPhaseObservable != undefined) instance.onBeforeDrawPhaseObservable = onBeforeDrawPhaseObservable?.instance || onBeforeDrawPhaseObservable
				onBeforeDrawPhaseObservable = instance.onBeforeDrawPhaseObservable
				if (onBeforeParticlesRenderingObservable != undefined) instance.onBeforeParticlesRenderingObservable = onBeforeParticlesRenderingObservable?.instance || onBeforeParticlesRenderingObservable
				onBeforeParticlesRenderingObservable = instance.onBeforeParticlesRenderingObservable
				if (onBeforePhysicsObservable != undefined) instance.onBeforePhysicsObservable = onBeforePhysicsObservable?.instance || onBeforePhysicsObservable
				onBeforePhysicsObservable = instance.onBeforePhysicsObservable
				if (onBeforeRenderObservable != undefined) instance.onBeforeRenderObservable = onBeforeRenderObservable?.instance || onBeforeRenderObservable
				onBeforeRenderObservable = instance.onBeforeRenderObservable
				if (onBeforeRenderTargetsRenderObservable != undefined) instance.onBeforeRenderTargetsRenderObservable = onBeforeRenderTargetsRenderObservable?.instance || onBeforeRenderTargetsRenderObservable
				onBeforeRenderTargetsRenderObservable = instance.onBeforeRenderTargetsRenderObservable
				if (onBeforeRenderingGroupObservable != undefined) instance.onBeforeRenderingGroupObservable = onBeforeRenderingGroupObservable?.instance || onBeforeRenderingGroupObservable
				onBeforeRenderingGroupObservable = instance.onBeforeRenderingGroupObservable
				if (onBeforeSpritesRenderingObservable != undefined) instance.onBeforeSpritesRenderingObservable = onBeforeSpritesRenderingObservable?.instance || onBeforeSpritesRenderingObservable
				onBeforeSpritesRenderingObservable = instance.onBeforeSpritesRenderingObservable
				if (onBeforeStepObservable != undefined) instance.onBeforeStepObservable = onBeforeStepObservable?.instance || onBeforeStepObservable
				onBeforeStepObservable = instance.onBeforeStepObservable
				if (onCameraRemovedObservable != undefined) instance.onCameraRemovedObservable = onCameraRemovedObservable?.instance || onCameraRemovedObservable
				onCameraRemovedObservable = instance.onCameraRemovedObservable
				if (onDataLoadedObservable != undefined) instance.onDataLoadedObservable = onDataLoadedObservable?.instance || onDataLoadedObservable
				onDataLoadedObservable = instance.onDataLoadedObservable
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onGeometryRemovedObservable != undefined) instance.onGeometryRemovedObservable = onGeometryRemovedObservable?.instance || onGeometryRemovedObservable
				onGeometryRemovedObservable = instance.onGeometryRemovedObservable
				if (onKeyboardObservable != undefined) instance.onKeyboardObservable = onKeyboardObservable?.instance || onKeyboardObservable
				onKeyboardObservable = instance.onKeyboardObservable
				if (onLightRemovedObservable != undefined) instance.onLightRemovedObservable = onLightRemovedObservable?.instance || onLightRemovedObservable
				onLightRemovedObservable = instance.onLightRemovedObservable
				if (onMaterialRemovedObservable != undefined) instance.onMaterialRemovedObservable = onMaterialRemovedObservable?.instance || onMaterialRemovedObservable
				onMaterialRemovedObservable = instance.onMaterialRemovedObservable
				if (onMeshImportedObservable != undefined) instance.onMeshImportedObservable = onMeshImportedObservable?.instance || onMeshImportedObservable
				onMeshImportedObservable = instance.onMeshImportedObservable
				if (onMeshRemovedObservable != undefined) instance.onMeshRemovedObservable = onMeshRemovedObservable?.instance || onMeshRemovedObservable
				onMeshRemovedObservable = instance.onMeshRemovedObservable
				if (onMultiMaterialRemovedObservable != undefined) instance.onMultiMaterialRemovedObservable = onMultiMaterialRemovedObservable?.instance || onMultiMaterialRemovedObservable
				onMultiMaterialRemovedObservable = instance.onMultiMaterialRemovedObservable
				if (onNewCameraAddedObservable != undefined) instance.onNewCameraAddedObservable = onNewCameraAddedObservable?.instance || onNewCameraAddedObservable
				onNewCameraAddedObservable = instance.onNewCameraAddedObservable
				if (onNewGeometryAddedObservable != undefined) instance.onNewGeometryAddedObservable = onNewGeometryAddedObservable?.instance || onNewGeometryAddedObservable
				onNewGeometryAddedObservable = instance.onNewGeometryAddedObservable
				if (onNewLightAddedObservable != undefined) instance.onNewLightAddedObservable = onNewLightAddedObservable?.instance || onNewLightAddedObservable
				onNewLightAddedObservable = instance.onNewLightAddedObservable
				if (onNewMaterialAddedObservable != undefined) instance.onNewMaterialAddedObservable = onNewMaterialAddedObservable?.instance || onNewMaterialAddedObservable
				onNewMaterialAddedObservable = instance.onNewMaterialAddedObservable
				if (onNewMeshAddedObservable != undefined) instance.onNewMeshAddedObservable = onNewMeshAddedObservable?.instance || onNewMeshAddedObservable
				onNewMeshAddedObservable = instance.onNewMeshAddedObservable
				if (onNewMultiMaterialAddedObservable != undefined) instance.onNewMultiMaterialAddedObservable = onNewMultiMaterialAddedObservable?.instance || onNewMultiMaterialAddedObservable
				onNewMultiMaterialAddedObservable = instance.onNewMultiMaterialAddedObservable
				if (onNewSkeletonAddedObservable != undefined) instance.onNewSkeletonAddedObservable = onNewSkeletonAddedObservable?.instance || onNewSkeletonAddedObservable
				onNewSkeletonAddedObservable = instance.onNewSkeletonAddedObservable
				if (onNewTextureAddedObservable != undefined) instance.onNewTextureAddedObservable = onNewTextureAddedObservable?.instance || onNewTextureAddedObservable
				onNewTextureAddedObservable = instance.onNewTextureAddedObservable
				if (onNewTransformNodeAddedObservable != undefined) instance.onNewTransformNodeAddedObservable = onNewTransformNodeAddedObservable?.instance || onNewTransformNodeAddedObservable
				onNewTransformNodeAddedObservable = instance.onNewTransformNodeAddedObservable
				if (onPointerDown != undefined) instance.onPointerDown = onPointerDown?.instance || onPointerDown
				onPointerDown = instance.onPointerDown
				if (onPointerMove != undefined) instance.onPointerMove = onPointerMove?.instance || onPointerMove
				onPointerMove = instance.onPointerMove
				if (onPointerObservable != undefined) instance.onPointerObservable = onPointerObservable?.instance || onPointerObservable
				onPointerObservable = instance.onPointerObservable
				if (onPointerPick != undefined) instance.onPointerPick = onPointerPick?.instance || onPointerPick
				onPointerPick = instance.onPointerPick
				if (onPointerUp != undefined) instance.onPointerUp = onPointerUp?.instance || onPointerUp
				onPointerUp = instance.onPointerUp
				if (onPreKeyboardObservable != undefined) instance.onPreKeyboardObservable = onPreKeyboardObservable?.instance || onPreKeyboardObservable
				onPreKeyboardObservable = instance.onPreKeyboardObservable
				if (onPrePointerObservable != undefined) instance.onPrePointerObservable = onPrePointerObservable?.instance || onPrePointerObservable
				onPrePointerObservable = instance.onPrePointerObservable
				if (onReadyObservable != undefined) instance.onReadyObservable = onReadyObservable?.instance || onReadyObservable
				onReadyObservable = instance.onReadyObservable
				if (onSkeletonRemovedObservable != undefined) instance.onSkeletonRemovedObservable = onSkeletonRemovedObservable?.instance || onSkeletonRemovedObservable
				onSkeletonRemovedObservable = instance.onSkeletonRemovedObservable
				if (onTextureRemovedObservable != undefined) instance.onTextureRemovedObservable = onTextureRemovedObservable?.instance || onTextureRemovedObservable
				onTextureRemovedObservable = instance.onTextureRemovedObservable
				if (onTransformNodeRemovedObservable != undefined) instance.onTransformNodeRemovedObservable = onTransformNodeRemovedObservable?.instance || onTransformNodeRemovedObservable
				onTransformNodeRemovedObservable = instance.onTransformNodeRemovedObservable
				if (particleSystems != undefined) instance.particleSystems = particleSystems?.instance || particleSystems
				particleSystems = instance.particleSystems
				if (particlesEnabled != undefined) instance.particlesEnabled = particlesEnabled?.instance || particlesEnabled
				particlesEnabled = instance.particlesEnabled
				if (physicsEnabled != undefined) instance.physicsEnabled = physicsEnabled?.instance || physicsEnabled
				physicsEnabled = instance.physicsEnabled
				if (pointerDownPredicate != undefined) instance.pointerDownPredicate = pointerDownPredicate?.instance || pointerDownPredicate
				pointerDownPredicate = instance.pointerDownPredicate
				if (pointerMovePredicate != undefined) instance.pointerMovePredicate = pointerMovePredicate?.instance || pointerMovePredicate
				pointerMovePredicate = instance.pointerMovePredicate
				if (pointerMoveTrianglePredicate != undefined) instance.pointerMoveTrianglePredicate = pointerMoveTrianglePredicate?.instance || pointerMoveTrianglePredicate
				pointerMoveTrianglePredicate = instance.pointerMoveTrianglePredicate
				if (pointerUpPredicate != undefined) instance.pointerUpPredicate = pointerUpPredicate?.instance || pointerUpPredicate
				pointerUpPredicate = instance.pointerUpPredicate
				if (postProcessManager != undefined) instance.postProcessManager = postProcessManager?.instance || postProcessManager
				postProcessManager = instance.postProcessManager
				if (postProcesses != undefined) instance.postProcesses = postProcesses?.instance || postProcesses
				postProcesses = instance.postProcesses
				if (postProcessesEnabled != undefined) instance.postProcessesEnabled = postProcessesEnabled?.instance || postProcessesEnabled
				postProcessesEnabled = instance.postProcessesEnabled
				if (prePassRenderer != undefined) instance.prePassRenderer = prePassRenderer?.instance || prePassRenderer
				prePassRenderer = instance.prePassRenderer
				if (preventDefaultOnPointerDown != undefined) instance.preventDefaultOnPointerDown = preventDefaultOnPointerDown?.instance || preventDefaultOnPointerDown
				preventDefaultOnPointerDown = instance.preventDefaultOnPointerDown
				if (preventDefaultOnPointerUp != undefined) instance.preventDefaultOnPointerUp = preventDefaultOnPointerUp?.instance || preventDefaultOnPointerUp
				preventDefaultOnPointerUp = instance.preventDefaultOnPointerUp
				if (probesEnabled != undefined) instance.probesEnabled = probesEnabled?.instance || probesEnabled
				probesEnabled = instance.probesEnabled
				if (proceduralTextures != undefined) instance.proceduralTextures = proceduralTextures?.instance || proceduralTextures
				proceduralTextures = instance.proceduralTextures
				if (proceduralTexturesEnabled != undefined) instance.proceduralTexturesEnabled = proceduralTexturesEnabled?.instance || proceduralTexturesEnabled
				proceduralTexturesEnabled = instance.proceduralTexturesEnabled
				if (reflectionProbes != undefined) instance.reflectionProbes = reflectionProbes?.instance || reflectionProbes
				reflectionProbes = instance.reflectionProbes
				if (renderTargetsEnabled != undefined) instance.renderTargetsEnabled = renderTargetsEnabled?.instance || renderTargetsEnabled
				renderTargetsEnabled = instance.renderTargetsEnabled
				if (requireLightSorting != undefined) instance.requireLightSorting = requireLightSorting?.instance || requireLightSorting
				requireLightSorting = instance.requireLightSorting
				if (reservedDataStore != undefined) instance.reservedDataStore = reservedDataStore?.instance || reservedDataStore
				reservedDataStore = instance.reservedDataStore
				if (rootNodes != undefined) instance.rootNodes = rootNodes?.instance || rootNodes
				rootNodes = instance.rootNodes
				if (selectionOctree != undefined) instance.selectionOctree = selectionOctree?.instance || selectionOctree
				selectionOctree = instance.selectionOctree
				if (simplificationQueue != undefined) instance.simplificationQueue = simplificationQueue?.instance || simplificationQueue
				simplificationQueue = instance.simplificationQueue
				if (skeletons != undefined) instance.skeletons = skeletons?.instance || skeletons
				skeletons = instance.skeletons
				if (skipPointerDownPicking != undefined) instance.skipPointerDownPicking = skipPointerDownPicking?.instance || skipPointerDownPicking
				skipPointerDownPicking = instance.skipPointerDownPicking
				if (skipPointerMovePicking != undefined) instance.skipPointerMovePicking = skipPointerMovePicking?.instance || skipPointerMovePicking
				skipPointerMovePicking = instance.skipPointerMovePicking
				if (skipPointerUpPicking != undefined) instance.skipPointerUpPicking = skipPointerUpPicking?.instance || skipPointerUpPicking
				skipPointerUpPicking = instance.skipPointerUpPicking
				if (soundTracks != undefined) instance.soundTracks = soundTracks?.instance || soundTracks
				soundTracks = instance.soundTracks
				if (sounds != undefined) instance.sounds = sounds?.instance || sounds
				sounds = instance.sounds
				if (spriteManagers != undefined) instance.spriteManagers = spriteManagers?.instance || spriteManagers
				spriteManagers = instance.spriteManagers
				if (spritesEnabled != undefined) instance.spritesEnabled = spritesEnabled?.instance || spritesEnabled
				spritesEnabled = instance.spritesEnabled
				if (subSurfaceConfiguration != undefined) instance.subSurfaceConfiguration = subSurfaceConfiguration?.instance || subSurfaceConfiguration
				subSurfaceConfiguration = instance.subSurfaceConfiguration
				if (textures != undefined) instance.textures = textures?.instance || textures
				textures = instance.textures
				if (transformNodes != undefined) instance.transformNodes = transformNodes?.instance || transformNodes
				transformNodes = instance.transformNodes
				if (useConstantAnimationDeltaTime != undefined) instance.useConstantAnimationDeltaTime = useConstantAnimationDeltaTime?.instance || useConstantAnimationDeltaTime
				useConstantAnimationDeltaTime = instance.useConstantAnimationDeltaTime
				if (useDelayedTextureLoading != undefined) instance.useDelayedTextureLoading = useDelayedTextureLoading?.instance || useDelayedTextureLoading
				useDelayedTextureLoading = instance.useDelayedTextureLoading
				if (useOrderIndependentTransparency != undefined) instance.useOrderIndependentTransparency = useOrderIndependentTransparency?.instance || useOrderIndependentTransparency
				useOrderIndependentTransparency = instance.useOrderIndependentTransparency

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

			