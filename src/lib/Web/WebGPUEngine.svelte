
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					canvas  * required
					options   
					activeView  
					adaptToDeviceRatio  
					canvasTabIndex  
					countersLastFrame (readonly) 
					cullBackFaces  
					currentRenderPassId  
					customAnimationFrameRequester  
					disableContextMenu  
					disableManifestCheck  
					disablePerformanceMonitorInBackground  
					disableUniformBuffers  
					disableVertexArrayObjects  
					enableOfflineSupport  
					enableUnpackFlipYCached  
					forcePOTTextures  
					hasOriginBottomLeft (readonly) 
					hostInformation  
					inputElement  
					isFullscreen  
					isInVRExclusivePointerMode  
					isNDCHalfZRange (readonly) 
					isPointerLock  
					numMaxUncapturedErrors  
					onAfterShaderCompilationObservable  
					onAfterViewRenderObservable (readonly) 
					onBeforeShaderCompilationObservable  
					onBeforeTextureInitObservable  
					onBeforeViewRenderObservable (readonly) 
					onBeginFrameObservable  
					onCanvasBlurObservable  
					onCanvasFocusObservable  
					onCanvasPointerOutObservable  
					onContextLostObservable  
					onContextRestoredObservable  
					onDisposeObservable (readonly) 
					onEndFrameObservable  
					onNewSceneAddedObservable  
					onResizeObservable  
					onVRDisplayChangedObservable  
					onVRRequestPresentComplete  
					onVRRequestPresentStart  
					postProcesses  
					premultipliedAlpha  
					preventCacheWipeBetweenFrames  
					renderEvenInBackground  
					scenes  
					startTime (readonly) 
					textureFormatInUse (readonly) 
					texturesSupported (readonly) 
					useExactSrgbConversions (readonly) 
					validateShaderPrograms  
					views  
					vrPresentationAttributes  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let canvas = undefined // [htmlcanvaselement] * required
				// defines the canvas to use to display the result
				

				export let options = undefined // [webgpuengineoptions] 
				// defines the options passed to the engine to create the gpu context dependencies
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebGPUEngine(canvas,options) : {}

				// ================ ACCESSORS ================

				
				export let activeRenderLoops = undefined // [array] 
				// 
				

				export let alphaState = undefined // [alphastate] 
				// 
				

				export let compatibilityMode = undefined // [boolean] 
				// 
				

				export let currentViewport = undefined // [nullable] 
				// 
				

				export let depthCullingState = undefined // [depthcullingstate] 
				// 
				

				export let description = undefined // [string] 
				// 
				

				export let disableCacheBindGroups = undefined // [boolean] 
				// 
				

				export let disableCacheRenderPipelines = undefined // [boolean] 
				// 
				

				export let disableCacheSamplers = undefined // [boolean] 
				// 
				

				export let doNotHandleContextLost = undefined // [boolean] 
				// 
				

				export let emptyCubeTexture = undefined // [internaltexture] 
				// 
				

				export let emptyTexture = undefined // [internaltexture] 
				// 
				

				export let emptyTexture2DArray = undefined // [internaltexture] 
				// 
				

				export let emptyTexture3D = undefined // [internaltexture] 
				// 
				

				export let enabledExtensions = undefined // [typeoperator] 
				// 
				

				export let frameId = undefined // [number] 
				// 
				

				export let framebufferDimensionsObject = undefined // [] 
				// 
				

				export let isStencilEnable = undefined // [boolean] 
				// 
				

				export let isWebGPU = undefined // [boolean] 
				// 
				

				export let loadingScreen = undefined // [iloadingscreen] 
				// 
				

				export let loadingUIBackgroundColor = undefined // [] 
				// 
				

				export let loadingUIText = undefined // [] 
				// 
				

				export let name = undefined // [string] 
				// 
				

				export let needPOTTextures = undefined // [boolean] 
				// 
				

				export let performanceMonitor = undefined // [performancemonitor] 
				// 
				

				export let shaderPlatformName = undefined // [string] 
				// 
				

				export let snapshotRendering = undefined // [boolean] 
				// 
				

				export let snapshotRenderingMode = undefined // [number] 
				// 
				

				export let stencilState = undefined // [stencilstate] 
				// 
				

				export let stencilStateComposer = undefined // [stencilstatecomposer] 
				// 
				

				export let supportedExtensions = undefined // [typeoperator] 
				// 
				

				export let supportsUniformBuffers = undefined // [boolean] 
				// 
				

				export let useReverseDepthBuffer = undefined // [boolean] 
				// 
				

				export let version = undefined // [number] 
				// 
				

				export let webGLVersion = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let activeView = undefined // [nullable] 
				// gets the current engine view
				

				export let adaptToDeviceRatio = undefined // [boolean] 
				// if set to true zooming in and out in the browser will rescale the hardware-scaling correctly.
				

				export let canvasTabIndex = undefined // [number] 
				// gets or sets the tab index to set to the rendering canvas. 1 is the minimum value to set to be able to capture keyboard events
				

				export let countersLastFrame = undefined // [reflection] 
				// counters from last frame
				

				export let cullBackFaces = undefined // [nullable] 
				// gets or sets a boolean indicating if back faces must be culled. if false, front faces are culled instead (true by default)if non null, this takes precedence over the value from the material
				

				export let currentRenderPassId = undefined // [number] 
				// gets or sets the current render pass id
				

				export let customAnimationFrameRequester = undefined // [nullable] 
				// if set, will be used to request the next animation frame for the render loop
				

				export let disableContextMenu = undefined // [boolean] 
				// gets or sets a boolean to enable/disable the context menu (right-click) from appearing on the main canvas
				

				export let disableManifestCheck = undefined // [boolean] 
				// gets or sets a boolean to enable/disable checking manifest if indexeddb support is enabled (js will always consider the database is up to date)
				

				export let disablePerformanceMonitorInBackground = undefined // [boolean] 
				// turn this value on if you want to pause fps computation when in background
				

				export let disableUniformBuffers = undefined // [boolean] 
				// gets or sets a boolean indicating that uniform buffers must be disabled even if they are supported
				

				export let disableVertexArrayObjects = undefined // [boolean] 
				// gets or sets a boolean indicating that vertex array object must be disabled even if they are supported
				

				export let enableOfflineSupport = undefined // [boolean] 
				// gets or sets a boolean to enable/disable indexeddb support and avoid xhr on .manifest
				

				export let enableUnpackFlipYCached = undefined // [boolean] 
				// in case you are sharing the context with other applications, it mightbe interested to not cache the unpack flip y state to ensure a consistentvalue would be set.
				

				export let forcePOTTextures = undefined // [boolean] 
				// gets or sets a boolean that indicates if textures must be forced to power of 2 size even if not required
				

				export let hasOriginBottomLeft = undefined // [boolean] 
				// indicates that the origin of the texture/framebuffer space is the bottom left corner. if false, the origin is top left
				

				export let hostInformation = undefined // [hostinformation] 
				// gets information about the current host
				

				export let inputElement = undefined // [nullable] 
				// gets or sets the  html element to use for attaching events
				

				export let isFullscreen = undefined // [boolean] 
				// gets a boolean indicating if the engine is currently rendering in fullscreen mode
				

				export let isInVRExclusivePointerMode = undefined // [boolean] 
				// gets a boolean indicating that the engine is currently in vr exclusive mode for the pointers
				

				export let isNDCHalfZRange = undefined // [boolean] 
				// indicates if the z range in ndc space is 0..1 (value: true) or -1..1 (value: false)
				

				export let isPointerLock = undefined // [boolean] 
				// gets a boolean indicating if the pointer is currently locked
				

				export let numMaxUncapturedErrors = undefined // [number] 
				// max number of uncaptured error messages to log
				

				export let onAfterShaderCompilationObservable = undefined // [observable] 
				// observable raised when the engine has just compiled a shader
				

				export let onAfterViewRenderObservable = undefined // [observable] 
				// will be triggered after the view rendered
				

				export let onBeforeShaderCompilationObservable = undefined // [observable] 
				// observable raised when the engine is about to compile a shader
				

				export let onBeforeTextureInitObservable = undefined // [observable] 
				// observable event triggered before each texture is initialized
				

				export let onBeforeViewRenderObservable = undefined // [observable] 
				// will be triggered before the view renders
				

				export let onBeginFrameObservable = undefined // [observable] 
				// observable raised when the engine begins a new frame
				

				export let onCanvasBlurObservable = undefined // [observable] 
				// observable event triggered each time the canvas loses focus
				

				export let onCanvasFocusObservable = undefined // [observable] 
				// observable event triggered each time the canvas gains focus
				

				export let onCanvasPointerOutObservable = undefined // [observable] 
				// observable event triggered each time the canvas receives pointerout event
				

				export let onContextLostObservable = undefined // [observable] 
				// observable signaled when a context lost event is raised
				

				export let onContextRestoredObservable = undefined // [observable] 
				// observable signaled when a context restored event is raised
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the engine is disposed.
				

				export let onEndFrameObservable = undefined // [observable] 
				// observable raised when the engine ends the current frame
				

				export let onNewSceneAddedObservable = undefined // [observable] 
				// event raised when a new scene is created
				

				export let onResizeObservable = undefined // [observable] 
				// observable event triggered each time the rendering canvas is resized
				

				export let onVRDisplayChangedObservable = undefined // [observable] 
				// observable signaled when vr display mode changes
				

				export let onVRRequestPresentComplete = undefined // [observable] 
				// observable signaled when vr request present is complete
				

				export let onVRRequestPresentStart = undefined // [observable] 
				// observable signaled when vr request present starts
				

				export let postProcesses = undefined // [array] 
				// gets the list of created postprocesses
				

				export let premultipliedAlpha = undefined // [boolean] 
				// defines whether the engine has been created with the premultipliedalpha option on or not.
				

				export let preventCacheWipeBetweenFrames = undefined // [boolean] 
				// gets or sets a boolean indicating that cache can be kept between frames
				

				export let renderEvenInBackground = undefined // [boolean] 
				// gets or sets a boolean indicating if the engine must keep rendering even if the window is not in foreground
				

				export let scenes = undefined // [array] 
				// gets the list of created scenes
				

				export let startTime = undefined // [number] 
				// the time (in milliseconds elapsed since the current page has been loaded) when the engine was initialized
				

				export let textureFormatInUse = undefined // [nullable] 
				// gets the texture format in use
				

				export let texturesSupported = undefined // [array] 
				// gets the list of texture formats supported
				

				export let useExactSrgbConversions = undefined // [boolean] 
				// gets a boolean indicating if the exact srgb conversions or faster approximations are used for converting to and from linear space.
				

				export let validateShaderPrograms = undefined // [boolean] 
				// gets or sets a boolean indicating if the engine should validate programs after compilation
				

				export let views = undefined // [array] 
				// gets or sets the list of views
				

				export let vrPresentationAttributes = undefined // [ivrpresentationattributes] 
				// gets or sets the presentation attributes used to configure vr rendering
				

				// ================ METHODS ================

				
				export let _createDepthStencilCubeTexture = (...args) => instance._createDepthStencilCubeTexture(...args)

				export let _createImageBitmapFromSource = (...args) => instance._createImageBitmapFromSource(...args)

				export let _deletePipelineContext = (...args) => instance._deletePipelineContext(...args)

				export let _renderLoop = (...args) => instance._renderLoop(...args)

				export let _updateRenderBuffer = (...args) => instance._updateRenderBuffer(...args)

				export let areAllComputeEffectsReady = (...args) => instance.areAllComputeEffectsReady(...args)

				export let areAllEffectsReady = (...args) => instance.areAllEffectsReady(...args)

				export let attachContextLostEvent = (...args) => instance.attachContextLostEvent(...args)

				export let attachContextRestoredEvent = (...args) => instance.attachContextRestoredEvent(...args)

				export let beginFrame = (...args) => instance.beginFrame(...args)

				export let beginOcclusionQuery = (...args) => instance.beginOcclusionQuery(...args)

				export let beginTransformFeedback = (...args) => instance.beginTransformFeedback(...args)

				export let bindArrayBuffer = (...args) => instance.bindArrayBuffer(...args)

				export let bindAttachments = (...args) => instance.bindAttachments(...args)

				export let bindBuffers = (...args) => instance.bindBuffers(...args)

				export let bindFramebuffer = (...args) => instance.bindFramebuffer(...args)

				export let bindInstancesBuffer = (...args) => instance.bindInstancesBuffer(...args)

				export let bindMultiviewFramebuffer = (...args) => instance.bindMultiviewFramebuffer(...args)

				export let bindTransformFeedback = (...args) => instance.bindTransformFeedback(...args)

				export let bindTransformFeedbackBuffer = (...args) => instance.bindTransformFeedbackBuffer(...args)

				export let bindUniformBlock = (...args) => instance.bindUniformBlock(...args)

				export let bindUniformBuffer = (...args) => instance.bindUniformBuffer(...args)

				export let bindUniformBufferBase = (...args) => instance.bindUniformBufferBase(...args)

				export let bindVertexArrayObject = (...args) => instance.bindVertexArrayObject(...args)

				export let buildTextureLayout = (...args) => instance.buildTextureLayout(...args)

				export let cacheStencilState = (...args) => instance.cacheStencilState(...args)

				export let captureGPUFrameTime = (...args) => instance.captureGPUFrameTime(...args)

				export let clear = (...args) => instance.clear(...args)

				export let clearInternalTexturesCache = (...args) => instance.clearInternalTexturesCache(...args)

				export let computeDispatch = (...args) => instance.computeDispatch(...args)

				export let createCanvas = (...args) => instance.createCanvas(...args)

				export let createCanvasImage = (...args) => instance.createCanvasImage(...args)

				export let createComputeContext = (...args) => instance.createComputeContext(...args)

				export let createComputeEffect = (...args) => instance.createComputeEffect(...args)

				export let createComputePipelineContext = (...args) => instance.createComputePipelineContext(...args)

				export let createCubeTexture = (...args) => instance.createCubeTexture(...args)

				export let createDepthStencilTexture = (...args) => instance.createDepthStencilTexture(...args)

				export let createDrawContext = (...args) => instance.createDrawContext(...args)

				export let createDynamicTexture = (...args) => instance.createDynamicTexture(...args)

				export let createDynamicUniformBuffer = (...args) => instance.createDynamicUniformBuffer(...args)

				export let createDynamicVertexBuffer = (...args) => instance.createDynamicVertexBuffer(...args)

				export let createEffect = (...args) => instance.createEffect(...args)

				export let createEffectForParticles = (...args) => instance.createEffectForParticles(...args)

				export let createExternalTexture = (...args) => instance.createExternalTexture(...args)

				export let createImageBitmap = (...args) => instance.createImageBitmap(...args)

				export let createIndexBuffer = (...args) => instance.createIndexBuffer(...args)

				export let createInstancesBuffer = (...args) => instance.createInstancesBuffer(...args)

				export let createMaterialContext = (...args) => instance.createMaterialContext(...args)

				export let createMultipleRenderTarget = (...args) => instance.createMultipleRenderTarget(...args)

				export let createMultiviewRenderTargetTexture = (...args) => instance.createMultiviewRenderTargetTexture(...args)

				export let createPipelineContext = (...args) => instance.createPipelineContext(...args)

				export let createPrefilteredCubeTexture = (...args) => instance.createPrefilteredCubeTexture(...args)

				export let createQuery = (...args) => instance.createQuery(...args)

				export let createRawCubeTexture = (...args) => instance.createRawCubeTexture(...args)

				export let createRawCubeTextureFromUrl = (...args) => instance.createRawCubeTextureFromUrl(...args)

				export let createRawTexture = (...args) => instance.createRawTexture(...args)

				export let createRawTexture2DArray = (...args) => instance.createRawTexture2DArray(...args)

				export let createRawTexture3D = (...args) => instance.createRawTexture3D(...args)

				export let createRenderPassId = (...args) => instance.createRenderPassId(...args)

				export let createRenderTargetCubeTexture = (...args) => instance.createRenderTargetCubeTexture(...args)

				export let createRenderTargetTexture = (...args) => instance.createRenderTargetTexture(...args)

				export let createStorageBuffer = (...args) => instance.createStorageBuffer(...args)

				export let createTexture = (...args) => instance.createTexture(...args)

				export let createTransformFeedback = (...args) => instance.createTransformFeedback(...args)

				export let createUniformBuffer = (...args) => instance.createUniformBuffer(...args)

				export let createVertexBuffer = (...args) => instance.createVertexBuffer(...args)

				export let createVideoElement = (...args) => instance.createVideoElement(...args)

				export let deleteInstancesBuffer = (...args) => instance.deleteInstancesBuffer(...args)

				export let deleteQuery = (...args) => instance.deleteQuery(...args)

				export let deleteTransformFeedback = (...args) => instance.deleteTransformFeedback(...args)

				export let disableAttributeByIndex = (...args) => instance.disableAttributeByIndex(...args)

				export let disableInstanceAttribute = (...args) => instance.disableInstanceAttribute(...args)

				export let disableInstanceAttributeByName = (...args) => instance.disableInstanceAttributeByName(...args)

				export let disableScissor = (...args) => instance.disableScissor(...args)

				export let disableVR = (...args) => instance.disableVR(...args)

				export let displayLoadingUI = (...args) => instance.displayLoadingUI(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let draw = (...args) => instance.draw(...args)

				export let drawArraysType = (...args) => instance.drawArraysType(...args)

				export let drawElementsType = (...args) => instance.drawElementsType(...args)

				export let drawPointClouds = (...args) => instance.drawPointClouds(...args)

				export let drawUnIndexed = (...args) => instance.drawUnIndexed(...args)

				export let enableEffect = (...args) => instance.enableEffect(...args)

				export let enableScissor = (...args) => instance.enableScissor(...args)

				export let enableVR = (...args) => instance.enableVR(...args)

				export let endFrame = (...args) => instance.endFrame(...args)

				export let endOcclusionQuery = (...args) => instance.endOcclusionQuery(...args)

				export let endTimeQuery = (...args) => instance.endTimeQuery(...args)

				export let endTransformFeedback = (...args) => instance.endTransformFeedback(...args)

				export let enterFullscreen = (...args) => instance.enterFullscreen(...args)

				export let enterPointerlock = (...args) => instance.enterPointerlock(...args)

				export let exitFullscreen = (...args) => instance.exitFullscreen(...args)

				export let exitPointerlock = (...args) => instance.exitPointerlock(...args)

				export let flushFramebuffer = (...args) => instance.flushFramebuffer(...args)

				export let generateMipMapsForCubemap = (...args) => instance.generateMipMapsForCubemap(...args)

				export let generateMipmaps = (...args) => instance.generateMipmaps(...args)

				export let getAlphaEquation = (...args) => instance.getAlphaEquation(...args)

				export let getAlphaMode = (...args) => instance.getAlphaMode(...args)

				export let getAspectRatio = (...args) => instance.getAspectRatio(...args)

				export let getAttributes = (...args) => instance.getAttributes(...args)

				export let getAudioContext = (...args) => instance.getAudioContext(...args)

				export let getAudioDestination = (...args) => instance.getAudioDestination(...args)

				export let getCaps = (...args) => instance.getCaps(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getColorWrite = (...args) => instance.getColorWrite(...args)

				export let getCreationOptions = (...args) => instance.getCreationOptions(...args)

				export let getCurrentRenderPassName = (...args) => instance.getCurrentRenderPassName(...args)

				export let getDeltaTime = (...args) => instance.getDeltaTime(...args)

				export let getDepthBuffer = (...args) => instance.getDepthBuffer(...args)

				export let getDepthFunction = (...args) => instance.getDepthFunction(...args)

				export let getDepthWrite = (...args) => instance.getDepthWrite(...args)

				export let getError = (...args) => instance.getError(...args)

				export let getFontOffset = (...args) => instance.getFontOffset(...args)

				export let getFps = (...args) => instance.getFps(...args)

				export let getFragmentShaderSource = (...args) => instance.getFragmentShaderSource(...args)

				export let getGPUFrameTimeCounter = (...args) => instance.getGPUFrameTimeCounter(...args)

				export let getGlInfo = (...args) => instance.getGlInfo(...args)

				export let getHardwareScalingLevel = (...args) => instance.getHardwareScalingLevel(...args)

				export let getHostDocument = (...args) => instance.getHostDocument(...args)

				export let getHostWindow = (...args) => instance.getHostWindow(...args)

				export let getInfo = (...args) => instance.getInfo(...args)

				export let getInputElement = (...args) => instance.getInputElement(...args)

				export let getInputElementClientRect = (...args) => instance.getInputElementClientRect(...args)

				export let getLoadedTexturesCache = (...args) => instance.getLoadedTexturesCache(...args)

				export let getLockstepMaxSteps = (...args) => instance.getLockstepMaxSteps(...args)

				export let getQueryResult = (...args) => instance.getQueryResult(...args)

				export let getRenderHeight = (...args) => instance.getRenderHeight(...args)

				export let getRenderPassNames = (...args) => instance.getRenderPassNames(...args)

				export let getRenderWidth = (...args) => instance.getRenderWidth(...args)

				export let getRenderingCanvas = (...args) => instance.getRenderingCanvas(...args)

				export let getRenderingCanvasClientRect = (...args) => instance.getRenderingCanvasClientRect(...args)

				export let getScreenAspectRatio = (...args) => instance.getScreenAspectRatio(...args)

				export let getStencilBuffer = (...args) => instance.getStencilBuffer(...args)

				export let getStencilFunction = (...args) => instance.getStencilFunction(...args)

				export let getStencilFunctionMask = (...args) => instance.getStencilFunctionMask(...args)

				export let getStencilFunctionReference = (...args) => instance.getStencilFunctionReference(...args)

				export let getStencilMask = (...args) => instance.getStencilMask(...args)

				export let getStencilOperationDepthFail = (...args) => instance.getStencilOperationDepthFail(...args)

				export let getStencilOperationFail = (...args) => instance.getStencilOperationFail(...args)

				export let getStencilOperationPass = (...args) => instance.getStencilOperationPass(...args)

				export let getTimeStep = (...args) => instance.getTimeStep(...args)

				export let getVRDevice = (...args) => instance.getVRDevice(...args)

				export let getVertexShaderSource = (...args) => instance.getVertexShaderSource(...args)

				export let getZOffset = (...args) => instance.getZOffset(...args)

				export let getZOffsetUnits = (...args) => instance.getZOffsetUnits(...args)

				export let hideLoadingUI = (...args) => instance.hideLoadingUI(...args)

				export let initAsync = (...args) => instance.initAsync(...args)

				export let initWebVR = (...args) => instance.initWebVR(...args)

				export let initWebVRAsync = (...args) => instance.initWebVRAsync(...args)

				export let inlineShaderCode = (...args) => instance.inlineShaderCode(...args)

				export let isDeterministicLockStep = (...args) => instance.isDeterministicLockStep(...args)

				export let isQueryResultAvailable = (...args) => instance.isQueryResultAvailable(...args)

				export let isVRDevicePresent = (...args) => instance.isVRDevicePresent(...args)

				export let isVRPresenting = (...args) => instance.isVRPresenting(...args)

				export let readFromStorageBuffer = (...args) => instance.readFromStorageBuffer(...args)

				export let readPixels = (...args) => instance.readPixels(...args)

				export let recordVertexArrayObject = (...args) => instance.recordVertexArrayObject(...args)

				export let registerView = (...args) => instance.registerView(...args)

				export let releaseComputeEffects = (...args) => instance.releaseComputeEffects(...args)

				export let releaseEffects = (...args) => instance.releaseEffects(...args)

				export let releaseRenderPassId = (...args) => instance.releaseRenderPassId(...args)

				export let releaseVertexArrayObject = (...args) => instance.releaseVertexArrayObject(...args)

				export let resetTextureCache = (...args) => instance.resetTextureCache(...args)

				export let resize = (...args) => instance.resize(...args)

				export let resizeImageBitmap = (...args) => instance.resizeImageBitmap(...args)

				export let restoreDefaultFramebuffer = (...args) => instance.restoreDefaultFramebuffer(...args)

				export let restoreSingleAttachment = (...args) => instance.restoreSingleAttachment(...args)

				export let restoreSingleAttachmentForRenderTarget = (...args) => instance.restoreSingleAttachmentForRenderTarget(...args)

				export let restoreStencilState = (...args) => instance.restoreStencilState(...args)

				export let runRenderLoop = (...args) => instance.runRenderLoop(...args)

				export let scissorClear = (...args) => instance.scissorClear(...args)

				export let setAlphaConstants = (...args) => instance.setAlphaConstants(...args)

				export let setAlphaEquation = (...args) => instance.setAlphaEquation(...args)

				export let setAlphaMode = (...args) => instance.setAlphaMode(...args)

				export let setColorWrite = (...args) => instance.setColorWrite(...args)

				export let setCompressedTextureExclusions = (...args) => instance.setCompressedTextureExclusions(...args)

				export let setDepthBuffer = (...args) => instance.setDepthBuffer(...args)

				export let setDepthFunction = (...args) => instance.setDepthFunction(...args)

				export let setDepthFunctionToGreater = (...args) => instance.setDepthFunctionToGreater(...args)

				export let setDepthFunctionToGreaterOrEqual = (...args) => instance.setDepthFunctionToGreaterOrEqual(...args)

				export let setDepthFunctionToLess = (...args) => instance.setDepthFunctionToLess(...args)

				export let setDepthFunctionToLessOrEqual = (...args) => instance.setDepthFunctionToLessOrEqual(...args)

				export let setDepthStencilTexture = (...args) => instance.setDepthStencilTexture(...args)

				export let setDepthWrite = (...args) => instance.setDepthWrite(...args)

				export let setDirectViewport = (...args) => instance.setDirectViewport(...args)

				export let setDitheringState = (...args) => instance.setDitheringState(...args)

				export let setExternalTexture = (...args) => instance.setExternalTexture(...args)

				export let setHardwareScalingLevel = (...args) => instance.setHardwareScalingLevel(...args)

				export let setInt = (...args) => instance.setInt(...args)

				export let setInt2 = (...args) => instance.setInt2(...args)

				export let setInt3 = (...args) => instance.setInt3(...args)

				export let setInt4 = (...args) => instance.setInt4(...args)

				export let setRasterizerState = (...args) => instance.setRasterizerState(...args)

				export let setSize = (...args) => instance.setSize(...args)

				export let setState = (...args) => instance.setState(...args)

				export let setStencilBuffer = (...args) => instance.setStencilBuffer(...args)

				export let setStencilFunction = (...args) => instance.setStencilFunction(...args)

				export let setStencilFunctionMask = (...args) => instance.setStencilFunctionMask(...args)

				export let setStencilFunctionReference = (...args) => instance.setStencilFunctionReference(...args)

				export let setStencilMask = (...args) => instance.setStencilMask(...args)

				export let setStencilOperationDepthFail = (...args) => instance.setStencilOperationDepthFail(...args)

				export let setStencilOperationFail = (...args) => instance.setStencilOperationFail(...args)

				export let setStencilOperationPass = (...args) => instance.setStencilOperationPass(...args)

				export let setStorageBuffer = (...args) => instance.setStorageBuffer(...args)

				export let setTexture = (...args) => instance.setTexture(...args)

				export let setTextureArray = (...args) => instance.setTextureArray(...args)

				export let setTextureFormatToUse = (...args) => instance.setTextureFormatToUse(...args)

				export let setTextureFromPostProcess = (...args) => instance.setTextureFromPostProcess(...args)

				export let setTextureFromPostProcessOutput = (...args) => instance.setTextureFromPostProcessOutput(...args)

				export let setTextureSampler = (...args) => instance.setTextureSampler(...args)

				export let setTranformFeedbackVaryings = (...args) => instance.setTranformFeedbackVaryings(...args)

				export let setUInt = (...args) => instance.setUInt(...args)

				export let setUInt2 = (...args) => instance.setUInt2(...args)

				export let setUInt3 = (...args) => instance.setUInt3(...args)

				export let setUInt4 = (...args) => instance.setUInt4(...args)

				export let setUIntArray = (...args) => instance.setUIntArray(...args)

				export let setUIntArray2 = (...args) => instance.setUIntArray2(...args)

				export let setUIntArray3 = (...args) => instance.setUIntArray3(...args)

				export let setUIntArray4 = (...args) => instance.setUIntArray4(...args)

				export let setViewport = (...args) => instance.setViewport(...args)

				export let setZOffset = (...args) => instance.setZOffset(...args)

				export let setZOffsetUnits = (...args) => instance.setZOffsetUnits(...args)

				export let snapshotRenderingReset = (...args) => instance.snapshotRenderingReset(...args)

				export let startTimeQuery = (...args) => instance.startTimeQuery(...args)

				export let stopRenderLoop = (...args) => instance.stopRenderLoop(...args)

				export let switchFullscreen = (...args) => instance.switchFullscreen(...args)

				export let unBindFramebuffer = (...args) => instance.unBindFramebuffer(...args)

				export let unBindMultiColorAttachmentFramebuffer = (...args) => instance.unBindMultiColorAttachmentFramebuffer(...args)

				export let unRegisterView = (...args) => instance.unRegisterView(...args)

				export let unbindAllAttributes = (...args) => instance.unbindAllAttributes(...args)

				export let unbindAllTextures = (...args) => instance.unbindAllTextures(...args)

				export let unbindInstanceAttributes = (...args) => instance.unbindInstanceAttributes(...args)

				export let updateArrayBuffer = (...args) => instance.updateArrayBuffer(...args)

				export let updateDynamicIndexBuffer = (...args) => instance.updateDynamicIndexBuffer(...args)

				export let updateDynamicTexture = (...args) => instance.updateDynamicTexture(...args)

				export let updateDynamicVertexBuffer = (...args) => instance.updateDynamicVertexBuffer(...args)

				export let updateMultipleRenderTargetTextureSampleCount = (...args) => instance.updateMultipleRenderTargetTextureSampleCount(...args)

				export let updateRawCubeTexture = (...args) => instance.updateRawCubeTexture(...args)

				export let updateRawTexture = (...args) => instance.updateRawTexture(...args)

				export let updateRawTexture2DArray = (...args) => instance.updateRawTexture2DArray(...args)

				export let updateRawTexture3D = (...args) => instance.updateRawTexture3D(...args)

				export let updateRenderTargetTextureSampleCount = (...args) => instance.updateRenderTargetTextureSampleCount(...args)

				export let updateStorageBuffer = (...args) => instance.updateStorageBuffer(...args)

				export let updateTextureComparisonFunction = (...args) => instance.updateTextureComparisonFunction(...args)

				export let updateTextureData = (...args) => instance.updateTextureData(...args)

				export let updateTextureDimensions = (...args) => instance.updateTextureDimensions(...args)

				export let updateTextureSamplingMode = (...args) => instance.updateTextureSamplingMode(...args)

				export let updateTextureWrappingMode = (...args) => instance.updateTextureWrappingMode(...args)

				export let updateUniformBuffer = (...args) => instance.updateUniformBuffer(...args)

				export let updateVideoTexture = (...args) => instance.updateVideoTexture(...args)

				export let wipeCaches = (...args) => instance.wipeCaches(...args)

				export let wrapWebGLTexture = (...args) => instance.wrapWebGLTexture(...args)

				export let wrapWebGPUTexture = (...args) => instance.wrapWebGPUTexture(...args)

				export let CeilingPOT = (...args) => instance.CeilingPOT(...args)

				export let CreateAsync = (...args) => instance.CreateAsync(...args)

				export let DefaultLoadingScreenFactory = (...args) => instance.DefaultLoadingScreenFactory(...args)

				export let FloorPOT = (...args) => instance.FloorPOT(...args)

				export let GetExponentOfTwo = (...args) => instance.GetExponentOfTwo(...args)

				export let MarkAllMaterialsAsDirty = (...args) => instance.MarkAllMaterialsAsDirty(...args)

				export let NearestPOT = (...args) => instance.NearestPOT(...args)

				export let QueueNewFrame = (...args) => instance.QueueNewFrame(...args)

				export let _ExitFullscreen = (...args) => instance._ExitFullscreen(...args)

				export let _ExitPointerlock = (...args) => instance._ExitPointerlock(...args)

				export let _RequestFullscreen = (...args) => instance._RequestFullscreen(...args)

				export let _RequestPointerlock = (...args) => instance._RequestPointerlock(...args)

				export let isSupported = (...args) => instance.isSupported(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebGPUEngine]`, ...args) : null

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

												if (canvas != undefined) instance.canvas = canvas?.instance || canvas
				canvas = instance.canvas
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options

				activeRenderLoops = instance.activeRenderLoops

				alphaState = instance.alphaState
				if (compatibilityMode != undefined) instance.compatibilityMode = compatibilityMode?.instance || compatibilityMode
				compatibilityMode = instance.compatibilityMode

				currentViewport = instance.currentViewport

				depthCullingState = instance.depthCullingState

				description = instance.description
				if (disableCacheBindGroups != undefined) instance.disableCacheBindGroups = disableCacheBindGroups?.instance || disableCacheBindGroups
				disableCacheBindGroups = instance.disableCacheBindGroups
				if (disableCacheRenderPipelines != undefined) instance.disableCacheRenderPipelines = disableCacheRenderPipelines?.instance || disableCacheRenderPipelines
				disableCacheRenderPipelines = instance.disableCacheRenderPipelines
				if (disableCacheSamplers != undefined) instance.disableCacheSamplers = disableCacheSamplers?.instance || disableCacheSamplers
				disableCacheSamplers = instance.disableCacheSamplers
				if (doNotHandleContextLost != undefined) instance.doNotHandleContextLost = doNotHandleContextLost?.instance || doNotHandleContextLost
				doNotHandleContextLost = instance.doNotHandleContextLost

				emptyCubeTexture = instance.emptyCubeTexture

				emptyTexture = instance.emptyTexture

				emptyTexture2DArray = instance.emptyTexture2DArray

				emptyTexture3D = instance.emptyTexture3D

				enabledExtensions = instance.enabledExtensions

				frameId = instance.frameId
				if (framebufferDimensionsObject != undefined) instance.framebufferDimensionsObject = framebufferDimensionsObject?.instance || framebufferDimensionsObject
				framebufferDimensionsObject = instance.framebufferDimensionsObject

				isStencilEnable = instance.isStencilEnable

				isWebGPU = instance.isWebGPU
				if (loadingScreen != undefined) instance.loadingScreen = loadingScreen?.instance || loadingScreen
				loadingScreen = instance.loadingScreen
				if (loadingUIBackgroundColor != undefined) instance.loadingUIBackgroundColor = loadingUIBackgroundColor?.instance || loadingUIBackgroundColor
				loadingUIBackgroundColor = instance.loadingUIBackgroundColor
				if (loadingUIText != undefined) instance.loadingUIText = loadingUIText?.instance || loadingUIText
				loadingUIText = instance.loadingUIText
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name

				needPOTTextures = instance.needPOTTextures

				performanceMonitor = instance.performanceMonitor

				shaderPlatformName = instance.shaderPlatformName
				if (snapshotRendering != undefined) instance.snapshotRendering = snapshotRendering?.instance || snapshotRendering
				snapshotRendering = instance.snapshotRendering
				if (snapshotRenderingMode != undefined) instance.snapshotRenderingMode = snapshotRenderingMode?.instance || snapshotRenderingMode
				snapshotRenderingMode = instance.snapshotRenderingMode

				stencilState = instance.stencilState

				stencilStateComposer = instance.stencilStateComposer

				supportedExtensions = instance.supportedExtensions

				supportsUniformBuffers = instance.supportsUniformBuffers
				if (useReverseDepthBuffer != undefined) instance.useReverseDepthBuffer = useReverseDepthBuffer?.instance || useReverseDepthBuffer
				useReverseDepthBuffer = instance.useReverseDepthBuffer

				version = instance.version

				webGLVersion = instance.webGLVersion
				if (activeView != undefined) instance.activeView = activeView?.instance || activeView
				activeView = instance.activeView
				if (adaptToDeviceRatio != undefined) instance.adaptToDeviceRatio = adaptToDeviceRatio?.instance || adaptToDeviceRatio
				adaptToDeviceRatio = instance.adaptToDeviceRatio
				if (canvasTabIndex != undefined) instance.canvasTabIndex = canvasTabIndex?.instance || canvasTabIndex
				canvasTabIndex = instance.canvasTabIndex
				if (cullBackFaces != undefined) instance.cullBackFaces = cullBackFaces?.instance || cullBackFaces
				cullBackFaces = instance.cullBackFaces
				if (currentRenderPassId != undefined) instance.currentRenderPassId = currentRenderPassId?.instance || currentRenderPassId
				currentRenderPassId = instance.currentRenderPassId
				if (customAnimationFrameRequester != undefined) instance.customAnimationFrameRequester = customAnimationFrameRequester?.instance || customAnimationFrameRequester
				customAnimationFrameRequester = instance.customAnimationFrameRequester
				if (disableContextMenu != undefined) instance.disableContextMenu = disableContextMenu?.instance || disableContextMenu
				disableContextMenu = instance.disableContextMenu
				if (disableManifestCheck != undefined) instance.disableManifestCheck = disableManifestCheck?.instance || disableManifestCheck
				disableManifestCheck = instance.disableManifestCheck
				if (disablePerformanceMonitorInBackground != undefined) instance.disablePerformanceMonitorInBackground = disablePerformanceMonitorInBackground?.instance || disablePerformanceMonitorInBackground
				disablePerformanceMonitorInBackground = instance.disablePerformanceMonitorInBackground
				if (disableUniformBuffers != undefined) instance.disableUniformBuffers = disableUniformBuffers?.instance || disableUniformBuffers
				disableUniformBuffers = instance.disableUniformBuffers
				if (disableVertexArrayObjects != undefined) instance.disableVertexArrayObjects = disableVertexArrayObjects?.instance || disableVertexArrayObjects
				disableVertexArrayObjects = instance.disableVertexArrayObjects
				if (enableOfflineSupport != undefined) instance.enableOfflineSupport = enableOfflineSupport?.instance || enableOfflineSupport
				enableOfflineSupport = instance.enableOfflineSupport
				if (enableUnpackFlipYCached != undefined) instance.enableUnpackFlipYCached = enableUnpackFlipYCached?.instance || enableUnpackFlipYCached
				enableUnpackFlipYCached = instance.enableUnpackFlipYCached
				if (forcePOTTextures != undefined) instance.forcePOTTextures = forcePOTTextures?.instance || forcePOTTextures
				forcePOTTextures = instance.forcePOTTextures
				if (hostInformation != undefined) instance.hostInformation = hostInformation?.instance || hostInformation
				hostInformation = instance.hostInformation
				if (inputElement != undefined) instance.inputElement = inputElement?.instance || inputElement
				inputElement = instance.inputElement
				if (isFullscreen != undefined) instance.isFullscreen = isFullscreen?.instance || isFullscreen
				isFullscreen = instance.isFullscreen
				if (isInVRExclusivePointerMode != undefined) instance.isInVRExclusivePointerMode = isInVRExclusivePointerMode?.instance || isInVRExclusivePointerMode
				isInVRExclusivePointerMode = instance.isInVRExclusivePointerMode
				if (isPointerLock != undefined) instance.isPointerLock = isPointerLock?.instance || isPointerLock
				isPointerLock = instance.isPointerLock
				if (numMaxUncapturedErrors != undefined) instance.numMaxUncapturedErrors = numMaxUncapturedErrors?.instance || numMaxUncapturedErrors
				numMaxUncapturedErrors = instance.numMaxUncapturedErrors
				if (onAfterShaderCompilationObservable != undefined) instance.onAfterShaderCompilationObservable = onAfterShaderCompilationObservable?.instance || onAfterShaderCompilationObservable
				onAfterShaderCompilationObservable = instance.onAfterShaderCompilationObservable
				if (onBeforeShaderCompilationObservable != undefined) instance.onBeforeShaderCompilationObservable = onBeforeShaderCompilationObservable?.instance || onBeforeShaderCompilationObservable
				onBeforeShaderCompilationObservable = instance.onBeforeShaderCompilationObservable
				if (onBeforeTextureInitObservable != undefined) instance.onBeforeTextureInitObservable = onBeforeTextureInitObservable?.instance || onBeforeTextureInitObservable
				onBeforeTextureInitObservable = instance.onBeforeTextureInitObservable
				if (onBeginFrameObservable != undefined) instance.onBeginFrameObservable = onBeginFrameObservable?.instance || onBeginFrameObservable
				onBeginFrameObservable = instance.onBeginFrameObservable
				if (onCanvasBlurObservable != undefined) instance.onCanvasBlurObservable = onCanvasBlurObservable?.instance || onCanvasBlurObservable
				onCanvasBlurObservable = instance.onCanvasBlurObservable
				if (onCanvasFocusObservable != undefined) instance.onCanvasFocusObservable = onCanvasFocusObservable?.instance || onCanvasFocusObservable
				onCanvasFocusObservable = instance.onCanvasFocusObservable
				if (onCanvasPointerOutObservable != undefined) instance.onCanvasPointerOutObservable = onCanvasPointerOutObservable?.instance || onCanvasPointerOutObservable
				onCanvasPointerOutObservable = instance.onCanvasPointerOutObservable
				if (onContextLostObservable != undefined) instance.onContextLostObservable = onContextLostObservable?.instance || onContextLostObservable
				onContextLostObservable = instance.onContextLostObservable
				if (onContextRestoredObservable != undefined) instance.onContextRestoredObservable = onContextRestoredObservable?.instance || onContextRestoredObservable
				onContextRestoredObservable = instance.onContextRestoredObservable
				if (onEndFrameObservable != undefined) instance.onEndFrameObservable = onEndFrameObservable?.instance || onEndFrameObservable
				onEndFrameObservable = instance.onEndFrameObservable
				if (onNewSceneAddedObservable != undefined) instance.onNewSceneAddedObservable = onNewSceneAddedObservable?.instance || onNewSceneAddedObservable
				onNewSceneAddedObservable = instance.onNewSceneAddedObservable
				if (onResizeObservable != undefined) instance.onResizeObservable = onResizeObservable?.instance || onResizeObservable
				onResizeObservable = instance.onResizeObservable
				if (onVRDisplayChangedObservable != undefined) instance.onVRDisplayChangedObservable = onVRDisplayChangedObservable?.instance || onVRDisplayChangedObservable
				onVRDisplayChangedObservable = instance.onVRDisplayChangedObservable
				if (onVRRequestPresentComplete != undefined) instance.onVRRequestPresentComplete = onVRRequestPresentComplete?.instance || onVRRequestPresentComplete
				onVRRequestPresentComplete = instance.onVRRequestPresentComplete
				if (onVRRequestPresentStart != undefined) instance.onVRRequestPresentStart = onVRRequestPresentStart?.instance || onVRRequestPresentStart
				onVRRequestPresentStart = instance.onVRRequestPresentStart
				if (postProcesses != undefined) instance.postProcesses = postProcesses?.instance || postProcesses
				postProcesses = instance.postProcesses
				if (premultipliedAlpha != undefined) instance.premultipliedAlpha = premultipliedAlpha?.instance || premultipliedAlpha
				premultipliedAlpha = instance.premultipliedAlpha
				if (preventCacheWipeBetweenFrames != undefined) instance.preventCacheWipeBetweenFrames = preventCacheWipeBetweenFrames?.instance || preventCacheWipeBetweenFrames
				preventCacheWipeBetweenFrames = instance.preventCacheWipeBetweenFrames
				if (renderEvenInBackground != undefined) instance.renderEvenInBackground = renderEvenInBackground?.instance || renderEvenInBackground
				renderEvenInBackground = instance.renderEvenInBackground
				if (scenes != undefined) instance.scenes = scenes?.instance || scenes
				scenes = instance.scenes
				if (validateShaderPrograms != undefined) instance.validateShaderPrograms = validateShaderPrograms?.instance || validateShaderPrograms
				validateShaderPrograms = instance.validateShaderPrograms
				if (views != undefined) instance.views = views?.instance || views
				views = instance.views
				if (vrPresentationAttributes != undefined) instance.vrPresentationAttributes = vrPresentationAttributes?.instance || vrPresentationAttributes
				vrPresentationAttributes = instance.vrPresentationAttributes

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

			