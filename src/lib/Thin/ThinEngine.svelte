
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					canvasOrContext  * required
					antialias  
					options  
					adaptToDeviceRatio   
					cullBackFaces  
					disableUniformBuffers  
					disableVertexArrayObjects  
					enableUnpackFlipYCached  
					forcePOTTextures  
					hasOriginBottomLeft (readonly) 
					hostInformation  
					isFullscreen  
					isNDCHalfZRange (readonly) 
					onBeforeTextureInitObservable  
					onContextLostObservable  
					onContextRestoredObservable  
					onDisposeObservable (readonly) 
					premultipliedAlpha  
					preventCacheWipeBetweenFrames  
					renderEvenInBackground  
					startTime (readonly) 
					useExactSrgbConversions (readonly) 
					validateShaderPrograms  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let canvasOrContext = undefined // [nullable] * required
				// defines the canvas or webgl context to use for rendering. if you provide a webgl context, babylon.js will not hook events on the canvas (like pointers, keyboards, etc...) so no event observables will be available. this is mostly used when babylon.js is used as a plugin on a system which already used the webgl context
				

				export let antialias = undefined // [boolean] 
				// defines enable antialiasing (default: false)
				

				export let options = undefined // [engineoptions] 
				// defines further options to be sent to the getcontext() function
				

				export let adaptToDeviceRatio = undefined // [boolean] 
				// defines whether to adapt to the device's viewport characteristics (default: false)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ThinEngine(canvasOrContext,antialias,options,adaptToDeviceRatio) : {}

				// ================ ACCESSORS ================

				
				export let activeRenderLoops = undefined // [array] 
				// 
				

				export let alphaState = undefined // [alphastate] 
				// 
				

				export let currentViewport = undefined // [nullable] 
				// 
				

				export let depthCullingState = undefined // [depthcullingstate] 
				// 
				

				export let description = undefined // [string] 
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
				

				export let frameId = undefined // [number] 
				// 
				

				export let framebufferDimensionsObject = undefined // [] 
				// 
				

				export let isStencilEnable = undefined // [boolean] 
				// 
				

				export let isWebGPU = undefined // [boolean] 
				// 
				

				export let name = undefined // [string] 
				// 
				

				export let needPOTTextures = undefined // [boolean] 
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
				

				export let supportsUniformBuffers = undefined // [boolean] 
				// 
				

				export let useReverseDepthBuffer = undefined // [boolean] 
				// 
				

				export let version = undefined // [number] 
				// 
				

				export let webGLVersion = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let cullBackFaces = undefined // [nullable] 
				// gets or sets a boolean indicating if back faces must be culled. if false, front faces are culled instead (true by default)if non null, this takes precedence over the value from the material
				

				export let disableUniformBuffers = undefined // [boolean] 
				// gets or sets a boolean indicating that uniform buffers must be disabled even if they are supported
				

				export let disableVertexArrayObjects = undefined // [boolean] 
				// gets or sets a boolean indicating that vertex array object must be disabled even if they are supported
				

				export let enableUnpackFlipYCached = undefined // [boolean] 
				// in case you are sharing the context with other applications, it mightbe interested to not cache the unpack flip y state to ensure a consistentvalue would be set.
				

				export let forcePOTTextures = undefined // [boolean] 
				// gets or sets a boolean that indicates if textures must be forced to power of 2 size even if not required
				

				export let hasOriginBottomLeft = undefined // [boolean] 
				// indicates that the origin of the texture/framebuffer space is the bottom left corner. if false, the origin is top left
				

				export let hostInformation = undefined // [hostinformation] 
				// gets information about the current host
				

				export let isFullscreen = undefined // [boolean] 
				// gets a boolean indicating if the engine is currently rendering in fullscreen mode
				

				export let isNDCHalfZRange = undefined // [boolean] 
				// indicates if the z range in ndc space is 0..1 (value: true) or -1..1 (value: false)
				

				export let onBeforeTextureInitObservable = undefined // [observable] 
				// observable event triggered before each texture is initialized
				

				export let onContextLostObservable = undefined // [observable] 
				// observable signaled when a context lost event is raised
				

				export let onContextRestoredObservable = undefined // [observable] 
				// observable signaled when a context restored event is raised
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the engine is disposed.
				

				export let premultipliedAlpha = undefined // [boolean] 
				// defines whether the engine has been created with the premultipliedalpha option on or not.
				

				export let preventCacheWipeBetweenFrames = undefined // [boolean] 
				// gets or sets a boolean indicating that cache can be kept between frames
				

				export let renderEvenInBackground = undefined // [boolean] 
				// gets or sets a boolean indicating if the engine must keep rendering even if the window is not in foreground
				

				export let startTime = undefined // [number] 
				// the time (in milliseconds elapsed since the current page has been loaded) when the engine was initialized
				

				export let useExactSrgbConversions = undefined // [boolean] 
				// gets a boolean indicating if the exact srgb conversions or faster approximations are used for converting to and from linear space.
				

				export let validateShaderPrograms = undefined // [boolean] 
				// gets or sets a boolean indicating if the engine should validate programs after compilation
				

				// ================ METHODS ================

				
				export let _createDepthStencilCubeTexture = (...args) => instance._createDepthStencilCubeTexture(...args)

				export let _updateRenderBuffer = (...args) => instance._updateRenderBuffer(...args)

				export let applyStates = (...args) => instance.applyStates(...args)

				export let areAllComputeEffectsReady = (...args) => instance.areAllComputeEffectsReady(...args)

				export let areAllEffectsReady = (...args) => instance.areAllEffectsReady(...args)

				export let attachContextLostEvent = (...args) => instance.attachContextLostEvent(...args)

				export let attachContextRestoredEvent = (...args) => instance.attachContextRestoredEvent(...args)

				export let beginFrame = (...args) => instance.beginFrame(...args)

				export let bindArrayBuffer = (...args) => instance.bindArrayBuffer(...args)

				export let bindAttachments = (...args) => instance.bindAttachments(...args)

				export let bindBuffers = (...args) => instance.bindBuffers(...args)

				export let bindBuffersDirectly = (...args) => instance.bindBuffersDirectly(...args)

				export let bindFramebuffer = (...args) => instance.bindFramebuffer(...args)

				export let bindInstancesBuffer = (...args) => instance.bindInstancesBuffer(...args)

				export let bindSamplers = (...args) => instance.bindSamplers(...args)

				export let bindUniformBlock = (...args) => instance.bindUniformBlock(...args)

				export let bindUniformBuffer = (...args) => instance.bindUniformBuffer(...args)

				export let bindUniformBufferBase = (...args) => instance.bindUniformBufferBase(...args)

				export let bindVertexArrayObject = (...args) => instance.bindVertexArrayObject(...args)

				export let buildTextureLayout = (...args) => instance.buildTextureLayout(...args)

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

				export let createExternalTexture = (...args) => instance.createExternalTexture(...args)

				export let createIndexBuffer = (...args) => instance.createIndexBuffer(...args)

				export let createMaterialContext = (...args) => instance.createMaterialContext(...args)

				export let createMultipleRenderTarget = (...args) => instance.createMultipleRenderTarget(...args)

				export let createPipelineContext = (...args) => instance.createPipelineContext(...args)

				export let createPrefilteredCubeTexture = (...args) => instance.createPrefilteredCubeTexture(...args)

				export let createRawCubeTexture = (...args) => instance.createRawCubeTexture(...args)

				export let createRawCubeTextureFromUrl = (...args) => instance.createRawCubeTextureFromUrl(...args)

				export let createRawShaderProgram = (...args) => instance.createRawShaderProgram(...args)

				export let createRawTexture = (...args) => instance.createRawTexture(...args)

				export let createRawTexture2DArray = (...args) => instance.createRawTexture2DArray(...args)

				export let createRawTexture3D = (...args) => instance.createRawTexture3D(...args)

				export let createRenderTargetCubeTexture = (...args) => instance.createRenderTargetCubeTexture(...args)

				export let createRenderTargetTexture = (...args) => instance.createRenderTargetTexture(...args)

				export let createShaderProgram = (...args) => instance.createShaderProgram(...args)

				export let createStorageBuffer = (...args) => instance.createStorageBuffer(...args)

				export let createTexture = (...args) => instance.createTexture(...args)

				export let createUniformBuffer = (...args) => instance.createUniformBuffer(...args)

				export let createVertexBuffer = (...args) => instance.createVertexBuffer(...args)

				export let disableAttributeByIndex = (...args) => instance.disableAttributeByIndex(...args)

				export let disableInstanceAttribute = (...args) => instance.disableInstanceAttribute(...args)

				export let disableInstanceAttributeByName = (...args) => instance.disableInstanceAttributeByName(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let draw = (...args) => instance.draw(...args)

				export let drawArraysType = (...args) => instance.drawArraysType(...args)

				export let drawElementsType = (...args) => instance.drawElementsType(...args)

				export let drawPointClouds = (...args) => instance.drawPointClouds(...args)

				export let drawUnIndexed = (...args) => instance.drawUnIndexed(...args)

				export let enableEffect = (...args) => instance.enableEffect(...args)

				export let endFrame = (...args) => instance.endFrame(...args)

				export let flushFramebuffer = (...args) => instance.flushFramebuffer(...args)

				export let generateMipmaps = (...args) => instance.generateMipmaps(...args)

				export let getAlphaEquation = (...args) => instance.getAlphaEquation(...args)

				export let getAlphaMode = (...args) => instance.getAlphaMode(...args)

				export let getAttributes = (...args) => instance.getAttributes(...args)

				export let getAudioContext = (...args) => instance.getAudioContext(...args)

				export let getAudioDestination = (...args) => instance.getAudioDestination(...args)

				export let getCaps = (...args) => instance.getCaps(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getColorWrite = (...args) => instance.getColorWrite(...args)

				export let getCreationOptions = (...args) => instance.getCreationOptions(...args)

				export let getDepthBuffer = (...args) => instance.getDepthBuffer(...args)

				export let getError = (...args) => instance.getError(...args)

				export let getGlInfo = (...args) => instance.getGlInfo(...args)

				export let getHardwareScalingLevel = (...args) => instance.getHardwareScalingLevel(...args)

				export let getHostDocument = (...args) => instance.getHostDocument(...args)

				export let getHostWindow = (...args) => instance.getHostWindow(...args)

				export let getInfo = (...args) => instance.getInfo(...args)

				export let getLoadedTexturesCache = (...args) => instance.getLoadedTexturesCache(...args)

				export let getRenderHeight = (...args) => instance.getRenderHeight(...args)

				export let getRenderWidth = (...args) => instance.getRenderWidth(...args)

				export let getRenderingCanvas = (...args) => instance.getRenderingCanvas(...args)

				export let getUniforms = (...args) => instance.getUniforms(...args)

				export let getZOffset = (...args) => instance.getZOffset(...args)

				export let getZOffsetUnits = (...args) => instance.getZOffsetUnits(...args)

				export let inlineShaderCode = (...args) => instance.inlineShaderCode(...args)

				export let readFromStorageBuffer = (...args) => instance.readFromStorageBuffer(...args)

				export let readPixels = (...args) => instance.readPixels(...args)

				export let recordVertexArrayObject = (...args) => instance.recordVertexArrayObject(...args)

				export let releaseComputeEffects = (...args) => instance.releaseComputeEffects(...args)

				export let releaseEffects = (...args) => instance.releaseEffects(...args)

				export let releaseVertexArrayObject = (...args) => instance.releaseVertexArrayObject(...args)

				export let resetTextureCache = (...args) => instance.resetTextureCache(...args)

				export let resize = (...args) => instance.resize(...args)

				export let restoreDefaultFramebuffer = (...args) => instance.restoreDefaultFramebuffer(...args)

				export let restoreSingleAttachment = (...args) => instance.restoreSingleAttachment(...args)

				export let restoreSingleAttachmentForRenderTarget = (...args) => instance.restoreSingleAttachmentForRenderTarget(...args)

				export let runRenderLoop = (...args) => instance.runRenderLoop(...args)

				export let setAlphaConstants = (...args) => instance.setAlphaConstants(...args)

				export let setAlphaEquation = (...args) => instance.setAlphaEquation(...args)

				export let setAlphaMode = (...args) => instance.setAlphaMode(...args)

				export let setArray = (...args) => instance.setArray(...args)

				export let setArray2 = (...args) => instance.setArray2(...args)

				export let setArray3 = (...args) => instance.setArray3(...args)

				export let setArray4 = (...args) => instance.setArray4(...args)

				export let setColorWrite = (...args) => instance.setColorWrite(...args)

				export let setDepthBuffer = (...args) => instance.setDepthBuffer(...args)

				export let setExternalTexture = (...args) => instance.setExternalTexture(...args)

				export let setFloat = (...args) => instance.setFloat(...args)

				export let setFloat2 = (...args) => instance.setFloat2(...args)

				export let setFloat3 = (...args) => instance.setFloat3(...args)

				export let setFloat4 = (...args) => instance.setFloat4(...args)

				export let setHardwareScalingLevel = (...args) => instance.setHardwareScalingLevel(...args)

				export let setInt = (...args) => instance.setInt(...args)

				export let setInt2 = (...args) => instance.setInt2(...args)

				export let setInt3 = (...args) => instance.setInt3(...args)

				export let setInt4 = (...args) => instance.setInt4(...args)

				export let setIntArray = (...args) => instance.setIntArray(...args)

				export let setIntArray2 = (...args) => instance.setIntArray2(...args)

				export let setIntArray3 = (...args) => instance.setIntArray3(...args)

				export let setIntArray4 = (...args) => instance.setIntArray4(...args)

				export let setMatrices = (...args) => instance.setMatrices(...args)

				export let setMatrix2x2 = (...args) => instance.setMatrix2x2(...args)

				export let setMatrix3x3 = (...args) => instance.setMatrix3x3(...args)

				export let setSize = (...args) => instance.setSize(...args)

				export let setState = (...args) => instance.setState(...args)

				export let setStorageBuffer = (...args) => instance.setStorageBuffer(...args)

				export let setTexture = (...args) => instance.setTexture(...args)

				export let setTextureArray = (...args) => instance.setTextureArray(...args)

				export let setTextureSampler = (...args) => instance.setTextureSampler(...args)

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

				export let stopRenderLoop = (...args) => instance.stopRenderLoop(...args)

				export let unBindFramebuffer = (...args) => instance.unBindFramebuffer(...args)

				export let unBindMultiColorAttachmentFramebuffer = (...args) => instance.unBindMultiColorAttachmentFramebuffer(...args)

				export let unbindAllAttributes = (...args) => instance.unbindAllAttributes(...args)

				export let unbindAllTextures = (...args) => instance.unbindAllTextures(...args)

				export let unbindInstanceAttributes = (...args) => instance.unbindInstanceAttributes(...args)

				export let updateAndBindInstancesBuffer = (...args) => instance.updateAndBindInstancesBuffer(...args)

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

				export let updateTextureData = (...args) => instance.updateTextureData(...args)

				export let updateTextureDimensions = (...args) => instance.updateTextureDimensions(...args)

				export let updateTextureSamplingMode = (...args) => instance.updateTextureSamplingMode(...args)

				export let updateTextureWrappingMode = (...args) => instance.updateTextureWrappingMode(...args)

				export let updateUniformBuffer = (...args) => instance.updateUniformBuffer(...args)

				export let updateVideoTexture = (...args) => instance.updateVideoTexture(...args)

				export let wipeCaches = (...args) => instance.wipeCaches(...args)

				export let CeilingPOT = (...args) => instance.CeilingPOT(...args)

				export let FloorPOT = (...args) => instance.FloorPOT(...args)

				export let GetExponentOfTwo = (...args) => instance.GetExponentOfTwo(...args)

				export let NearestPOT = (...args) => instance.NearestPOT(...args)

				export let QueueNewFrame = (...args) => instance.QueueNewFrame(...args)

				export let isSupported = (...args) => instance.isSupported(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ThinEngine]`, ...args) : null

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

												if (canvasOrContext != undefined) instance.canvasOrContext = canvasOrContext?.instance || canvasOrContext
				canvasOrContext = instance.canvasOrContext
				if (antialias != undefined) instance.antialias = antialias?.instance || antialias
				antialias = instance.antialias
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (adaptToDeviceRatio != undefined) instance.adaptToDeviceRatio = adaptToDeviceRatio?.instance || adaptToDeviceRatio
				adaptToDeviceRatio = instance.adaptToDeviceRatio

				activeRenderLoops = instance.activeRenderLoops

				alphaState = instance.alphaState

				currentViewport = instance.currentViewport

				depthCullingState = instance.depthCullingState

				description = instance.description
				if (doNotHandleContextLost != undefined) instance.doNotHandleContextLost = doNotHandleContextLost?.instance || doNotHandleContextLost
				doNotHandleContextLost = instance.doNotHandleContextLost

				emptyCubeTexture = instance.emptyCubeTexture

				emptyTexture = instance.emptyTexture

				emptyTexture2DArray = instance.emptyTexture2DArray

				emptyTexture3D = instance.emptyTexture3D

				frameId = instance.frameId
				if (framebufferDimensionsObject != undefined) instance.framebufferDimensionsObject = framebufferDimensionsObject?.instance || framebufferDimensionsObject
				framebufferDimensionsObject = instance.framebufferDimensionsObject

				isStencilEnable = instance.isStencilEnable

				isWebGPU = instance.isWebGPU
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name

				needPOTTextures = instance.needPOTTextures

				shaderPlatformName = instance.shaderPlatformName
				if (snapshotRendering != undefined) instance.snapshotRendering = snapshotRendering?.instance || snapshotRendering
				snapshotRendering = instance.snapshotRendering
				if (snapshotRenderingMode != undefined) instance.snapshotRenderingMode = snapshotRenderingMode?.instance || snapshotRenderingMode
				snapshotRenderingMode = instance.snapshotRenderingMode

				stencilState = instance.stencilState

				stencilStateComposer = instance.stencilStateComposer

				supportsUniformBuffers = instance.supportsUniformBuffers
				if (useReverseDepthBuffer != undefined) instance.useReverseDepthBuffer = useReverseDepthBuffer?.instance || useReverseDepthBuffer
				useReverseDepthBuffer = instance.useReverseDepthBuffer

				version = instance.version

				webGLVersion = instance.webGLVersion
				if (cullBackFaces != undefined) instance.cullBackFaces = cullBackFaces?.instance || cullBackFaces
				cullBackFaces = instance.cullBackFaces
				if (disableUniformBuffers != undefined) instance.disableUniformBuffers = disableUniformBuffers?.instance || disableUniformBuffers
				disableUniformBuffers = instance.disableUniformBuffers
				if (disableVertexArrayObjects != undefined) instance.disableVertexArrayObjects = disableVertexArrayObjects?.instance || disableVertexArrayObjects
				disableVertexArrayObjects = instance.disableVertexArrayObjects
				if (enableUnpackFlipYCached != undefined) instance.enableUnpackFlipYCached = enableUnpackFlipYCached?.instance || enableUnpackFlipYCached
				enableUnpackFlipYCached = instance.enableUnpackFlipYCached
				if (forcePOTTextures != undefined) instance.forcePOTTextures = forcePOTTextures?.instance || forcePOTTextures
				forcePOTTextures = instance.forcePOTTextures
				if (hostInformation != undefined) instance.hostInformation = hostInformation?.instance || hostInformation
				hostInformation = instance.hostInformation
				if (isFullscreen != undefined) instance.isFullscreen = isFullscreen?.instance || isFullscreen
				isFullscreen = instance.isFullscreen
				if (onBeforeTextureInitObservable != undefined) instance.onBeforeTextureInitObservable = onBeforeTextureInitObservable?.instance || onBeforeTextureInitObservable
				onBeforeTextureInitObservable = instance.onBeforeTextureInitObservable
				if (onContextLostObservable != undefined) instance.onContextLostObservable = onContextLostObservable?.instance || onContextLostObservable
				onContextLostObservable = instance.onContextLostObservable
				if (onContextRestoredObservable != undefined) instance.onContextRestoredObservable = onContextRestoredObservable?.instance || onContextRestoredObservable
				onContextRestoredObservable = instance.onContextRestoredObservable
				if (premultipliedAlpha != undefined) instance.premultipliedAlpha = premultipliedAlpha?.instance || premultipliedAlpha
				premultipliedAlpha = instance.premultipliedAlpha
				if (preventCacheWipeBetweenFrames != undefined) instance.preventCacheWipeBetweenFrames = preventCacheWipeBetweenFrames?.instance || preventCacheWipeBetweenFrames
				preventCacheWipeBetweenFrames = instance.preventCacheWipeBetweenFrames
				if (renderEvenInBackground != undefined) instance.renderEvenInBackground = renderEvenInBackground?.instance || renderEvenInBackground
				renderEvenInBackground = instance.renderEvenInBackground
				if (validateShaderPrograms != undefined) instance.validateShaderPrograms = validateShaderPrograms?.instance || validateShaderPrograms
				validateShaderPrograms = instance.validateShaderPrograms

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

			