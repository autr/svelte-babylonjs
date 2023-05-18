
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					size  * required
					scene  
					generateMipMaps  
					type  
					samplingMode  
					generateDepthBuffer   
					activeCamera  
					animations  
					anisotropicFilteringLevel  
					boundingBoxPosition  
					clearColor  
					customIsReadyFunction  
					customRenderFunction  
					delayLoadState  
					forceLayerMaskCheck  
					getCustomRenderList  
					homogeneousRotationInUVTransform  
					ignoreCameraViewport  
					inspectableCustomProperties  
					invertZ  
					isRenderTarget  
					level  
					metadata  
					mirrorPlane  
					noPrePassRenderer  
					onAfterRenderObservable  
					onAfterUnbindObservable  
					onBeforeBindObservable  
					onBeforeRenderObservable  
					onClearObservable  
					onDisposeObservable  
					onLoadObservable  
					onResizeObservable  
					optimizeUVAllocation  
					renderListPredicate  
					renderParticles  
					renderPassId  
					renderSprites  
					reservedDataStore  
					skipInitialClear  
					sphericalPolynomial  
					uAng  
					uOffset  
					uRotationCenter  
					uScale  
					uniqueId  
					url  
					useCameraPostProcesses  
					vAng  
					vOffset  
					vRotationCenter  
					vScale  
					wAng  
					wRotationCenter  
					wrapR  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// 
				

				export let size = undefined // [union] * required
				// 
				

				export let scene = undefined // [scene] 
				// 
				

				export let generateMipMaps = undefined // [boolean] 
				// 
				

				export let type = undefined // [number] 
				// 
				

				export let samplingMode = undefined // [number] 
				// 
				

				export let generateDepthBuffer = undefined // [boolean] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.MirrorTexture(name,size,scene,generateMipMaps,type,samplingMode,generateDepthBuffer) : {}

				// ================ ACCESSORS ================

				
				export let adaptiveBlurKernel = undefined // [] 
				// 
				

				export let blurKernel = undefined // [] 
				// 
				

				export let blurKernelX = undefined // [number] 
				// 
				

				export let blurKernelY = undefined // [number] 
				// 
				

				export let blurRatio = undefined // [number] 
				// 
				

				export let boundingBoxSize = undefined // [vector3] 
				// 
				

				export let canRescale = undefined // [boolean] 
				// 
				

				export let coordinatesIndex = undefined // [number] 
				// 
				

				export let coordinatesMode = undefined // [number] 
				// 
				

				export let currentRefreshId = undefined // [number] 
				// 
				

				export let depthStencilTexture = undefined // [nullable] 
				// 
				

				export let errorObject = undefined // [union] 
				// 
				

				export let gammaSpace = undefined // [boolean] 
				// 
				

				export let getAlphaFromRGB = undefined // [boolean] 
				// 
				

				export let hasAlpha = undefined // [boolean] 
				// 
				

				export let invertY = undefined // [boolean] 
				// 
				

				export let irradianceTexture = undefined // [nullable] 
				// 
				

				export let is2DArray = undefined // [boolean] 
				// 
				

				export let is3D = undefined // [boolean] 
				// 
				

				export let isBlocking = undefined // [boolean] 
				// 
				

				export let isCube = undefined // [boolean] 
				// 
				

				export let isRGBD = undefined // [boolean] 
				// 
				

				export let linearSpecularLOD = undefined // [boolean] 
				// 
				

				export let loadingError = undefined // [boolean] 
				// 
				

				export let lodGenerationOffset = undefined // [number] 
				// 
				

				export let lodGenerationScale = undefined // [number] 
				// 
				

				export let mimeType = undefined // [union] 
				// 
				

				export let noMipmap = undefined // [boolean] 
				// 
				

				export let onAfterRender = undefined // [] 
				// 
				

				export let onAfterUnbind = undefined // [] 
				// 
				

				export let onBeforeRender = undefined // [] 
				// 
				

				export let onClear = undefined // [] 
				// 
				

				export let onDispose = undefined // [] 
				// 
				

				export let postProcesses = undefined // [array] 
				// 
				

				export let refreshRate = undefined // [number] 
				// 
				

				export let renderList = undefined // [nullable] 
				// 
				

				export let renderPassIds = undefined // [typeoperator] 
				// 
				

				export let renderTarget = undefined // [nullable] 
				// entry point to access the wrapper on a texture.
				

				export let renderTargetOptions = undefined // [rendertargetcreationoptions] 
				// 
				

				export let samples = undefined // [number] 
				// 
				

				export let textureFormat = undefined // [number] 
				// 
				

				export let textureType = undefined // [number] 
				// 
				

				export let uid = undefined // [string] 
				// 
				

				export let wrapU = undefined // [number] 
				// 
				

				export let wrapV = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let activeCamera = undefined // [nullable] 
				// define the camera used to render the texture.
				

				export let animations = undefined // [array] 
				// define the list of animation attached to the texture.
				

				export let anisotropicFilteringLevel = undefined // [number] 
				// with compliant hardware and browser (supporting anisotropic filtering)this defines the level of anisotropic filtering in the texture.the higher the better but the slower. this defaults to 4 as it seems to be the best tradeoff.
				

				export let boundingBoxPosition = undefined // [vector3] 
				// gets or sets the center of the bounding box associated with the texture (when in cube mode)it must define where the camera used to render the texture is set
				

				export let clearColor = undefined // [color4] 
				// define the clear color of the render target if it should be different from the scene.
				

				export let customIsReadyFunction = undefined // [reflection] 
				// 
				

				export let customRenderFunction = undefined // [reflection] 
				// 
				

				export let delayLoadState = undefined // [number] 
				// define the current state of the loading sequence when in delayed load mode.
				

				export let forceLayerMaskCheck = undefined // [boolean] 
				// force checking the layermask property even if a custom list of meshes is provided (ie. if renderlist is not undefined)
				

				export let getCustomRenderList = undefined // [reflection] 
				// 
				

				export let homogeneousRotationInUVTransform = undefined // [boolean] 
				// sets this property to true to avoid deformations when rotating the texture with non-uniform scaling
				

				export let ignoreCameraViewport = undefined // [boolean] 
				// define if the camera viewport should be respected while rendering the texture or if the render should be done to the entire texture.
				

				export let inspectableCustomProperties = undefined // [nullable] 
				// list of inspectable custom properties (used by the inspector)
				

				export let invertZ = undefined // [boolean] 
				// is z inverted in the texture (useful in a cube texture).
				

				export let isRenderTarget = undefined // [boolean] 
				// define if the texture is a render target.
				

				export let level = undefined // [number] 
				// intensity or strength of the texture.it is commonly used by materials to fine tune the intensity of the texture
				

				export let metadata = undefined // [any] 
				// gets or sets an object used to store user defined information.
				

				export let mirrorPlane = undefined // [plane] 
				// define the reflection plane we want to use. the mirrorplane is usually set to the constructed reflector.it is possible to directly set the mirrorplane by directly using a plane(a, b, c, d) where a, b and c give the plane normal vector (a, b, c) and d is a scalar displacement from the mirrorplane to the origin. however in all but the very simplest of situations it is more straight forward to set it to the reflector as stated in the doc.
				

				export let noPrePassRenderer = undefined // [boolean] 
				// gets or sets a boolean indicating that the prepass renderer should not be used with this render target
				

				export let onAfterRenderObservable = undefined // [observable] 
				// an event triggered after rendering the texture
				

				export let onAfterUnbindObservable = undefined // [observable] 
				// an event triggered when the texture is unbind.
				

				export let onBeforeBindObservable = undefined // [observable] 
				// an event triggered when the texture is unbind.
				

				export let onBeforeRenderObservable = undefined // [observable] 
				// an event triggered before rendering the texture
				

				export let onClearObservable = undefined // [observable] 
				// an event triggered after the texture clear
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the texture is disposed.
				

				export let onLoadObservable = undefined // [observable] 
				// observable triggered once the texture has been loaded.
				

				export let onResizeObservable = undefined // [observable] 
				// an event triggered when the texture is resized.
				

				export let optimizeUVAllocation = undefined // [boolean] 
				// gets or sets a boolean indicating that the texture should try to reduce shader code if there is no uv manipulation.(ie. when texture.gettexturematrix().isidentityas3x2() returns true)
				

				export let renderListPredicate = undefined // [reflection] 
				// 
				

				export let renderParticles = undefined // [boolean] 
				// define if particles should be rendered in your texture.
				

				export let renderPassId = undefined // [number] 
				// current render pass id of the render target texture. note it can change over the rendering as there's a separate id for each face of a cube / each layer of an array layer!
				

				export let renderSprites = undefined // [boolean] 
				// define if sprites should be rendered in your texture.
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let skipInitialClear = undefined // [boolean] 
				// skip the initial clear of the rtt at the beginning of the frame render loop
				

				export let sphericalPolynomial = undefined // [nullable] 
				// get the polynomial representation of the texture data.this is mainly use as a fast way to recover ibl diffuse irradiance data.
				

				export let uAng = undefined // [number] 
				// define an offset on the texture to rotate around the u coordinates of the uvsthe angle is defined in radians.
				

				export let uOffset = undefined // [number] 
				// define an offset on the texture to offset the u coordinates of the uvs
				

				export let uRotationCenter = undefined // [number] 
				// defines the center of rotation (u)
				

				export let uScale = undefined // [number] 
				// define an offset on the texture to scale the u coordinates of the uvs
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the texture
				

				export let url = undefined // [nullable] 
				// define the url of the texture.
				

				export let useCameraPostProcesses = undefined // [boolean] 
				// define if camera post processes should be use while rendering the texture.
				

				export let vAng = undefined // [number] 
				// define an offset on the texture to rotate around the v coordinates of the uvsthe angle is defined in radians.
				

				export let vOffset = undefined // [number] 
				// define an offset on the texture to offset the v coordinates of the uvs
				

				export let vRotationCenter = undefined // [number] 
				// defines the center of rotation (v)
				

				export let vScale = undefined // [number] 
				// define an offset on the texture to scale the v coordinates of the uvs
				

				export let wAng = undefined // [number] 
				// define an offset on the texture to rotate around the w coordinates of the uvs (in case of 3d texture)the angle is defined in radians.
				

				export let wRotationCenter = undefined // [number] 
				// defines the center of rotation (w)
				

				export let wrapR = undefined // [number] 
				// | value | type               | description || ----- | ------------------ | ----------- || 0     | clamp_addressmode  |             || 1     | wrap_addressmode   |             || 2     | mirror_addressmode |             |
				

				// ================ METHODS ================

				
				export let addPostProcess = (...args) => instance.addPostProcess(...args)

				export let checkTransformsAreIdentical = (...args) => instance.checkTransformsAreIdentical(...args)

				export let clearPostProcesses = (...args) => instance.clearPostProcesses(...args)

				export let clone = (...args) => instance.clone(...args)

				export let createDepthStencilTexture = (...args) => instance.createDepthStencilTexture(...args)

				export let disableRescaling = (...args) => instance.disableRescaling(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let disposeFramebufferObjects = (...args) => instance.disposeFramebufferObjects(...args)

				export let forceSphericalPolynomialsRecompute = (...args) => instance.forceSphericalPolynomialsRecompute(...args)

				export let freeRenderingGroups = (...args) => instance.freeRenderingGroups(...args)

				export let getBaseSize = (...args) => instance.getBaseSize(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getInternalTexture = (...args) => instance.getInternalTexture(...args)

				export let getReflectionTextureMatrix = (...args) => instance.getReflectionTextureMatrix(...args)

				export let getRenderHeight = (...args) => instance.getRenderHeight(...args)

				export let getRenderLayers = (...args) => instance.getRenderLayers(...args)

				export let getRenderSize = (...args) => instance.getRenderSize(...args)

				export let getRenderWidth = (...args) => instance.getRenderWidth(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let getSize = (...args) => instance.getSize(...args)

				export let getTextureMatrix = (...args) => instance.getTextureMatrix(...args)

				export let getViewCount = (...args) => instance.getViewCount(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let isReadyForRendering = (...args) => instance.isReadyForRendering(...args)

				export let isReadyOrNotBlocking = (...args) => instance.isReadyOrNotBlocking(...args)

				export let readPixels = (...args) => instance.readPixels(...args)

				export let releaseInternalTexture = (...args) => instance.releaseInternalTexture(...args)

				export let removePostProcess = (...args) => instance.removePostProcess(...args)

				export let render = (...args) => instance.render(...args)

				export let resetRefreshCounter = (...args) => instance.resetRefreshCounter(...args)

				export let resize = (...args) => instance.resize(...args)

				export let scale = (...args) => instance.scale(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setMaterialForRendering = (...args) => instance.setMaterialForRendering(...args)

				export let setRenderingAutoClearDepthStencil = (...args) => instance.setRenderingAutoClearDepthStencil(...args)

				export let setRenderingOrder = (...args) => instance.setRenderingOrder(...args)

				export let toString = (...args) => instance.toString(...args)

				export let updateSamplingMode = (...args) => instance.updateSamplingMode(...args)

				export let updateURL = (...args) => instance.updateURL(...args)

				export let CreateFromBase64String = (...args) => instance.CreateFromBase64String(...args)

				export let LoadFromDataString = (...args) => instance.LoadFromDataString(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let WhenAllReady = (...args) => instance.WhenAllReady(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:MirrorTexture]`, ...args) : null

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
				if (size != undefined) instance.size = size?.instance || size
				size = instance.size
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (generateMipMaps != undefined) instance.generateMipMaps = generateMipMaps?.instance || generateMipMaps
				generateMipMaps = instance.generateMipMaps
				if (type != undefined) instance.type = type?.instance || type
				type = instance.type
				if (samplingMode != undefined) instance.samplingMode = samplingMode?.instance || samplingMode
				samplingMode = instance.samplingMode
				if (generateDepthBuffer != undefined) instance.generateDepthBuffer = generateDepthBuffer?.instance || generateDepthBuffer
				generateDepthBuffer = instance.generateDepthBuffer
				if (adaptiveBlurKernel != undefined) instance.adaptiveBlurKernel = adaptiveBlurKernel?.instance || adaptiveBlurKernel
				adaptiveBlurKernel = instance.adaptiveBlurKernel
				if (blurKernel != undefined) instance.blurKernel = blurKernel?.instance || blurKernel
				blurKernel = instance.blurKernel
				if (blurKernelX != undefined) instance.blurKernelX = blurKernelX?.instance || blurKernelX
				blurKernelX = instance.blurKernelX
				if (blurKernelY != undefined) instance.blurKernelY = blurKernelY?.instance || blurKernelY
				blurKernelY = instance.blurKernelY
				if (blurRatio != undefined) instance.blurRatio = blurRatio?.instance || blurRatio
				blurRatio = instance.blurRatio
				if (boundingBoxSize != undefined) instance.boundingBoxSize = boundingBoxSize?.instance || boundingBoxSize
				boundingBoxSize = instance.boundingBoxSize

				canRescale = instance.canRescale
				if (coordinatesIndex != undefined) instance.coordinatesIndex = coordinatesIndex?.instance || coordinatesIndex
				coordinatesIndex = instance.coordinatesIndex
				if (coordinatesMode != undefined) instance.coordinatesMode = coordinatesMode?.instance || coordinatesMode
				coordinatesMode = instance.coordinatesMode

				currentRefreshId = instance.currentRefreshId

				depthStencilTexture = instance.depthStencilTexture

				errorObject = instance.errorObject
				if (gammaSpace != undefined) instance.gammaSpace = gammaSpace?.instance || gammaSpace
				gammaSpace = instance.gammaSpace
				if (getAlphaFromRGB != undefined) instance.getAlphaFromRGB = getAlphaFromRGB?.instance || getAlphaFromRGB
				getAlphaFromRGB = instance.getAlphaFromRGB
				if (hasAlpha != undefined) instance.hasAlpha = hasAlpha?.instance || hasAlpha
				hasAlpha = instance.hasAlpha

				invertY = instance.invertY
				if (irradianceTexture != undefined) instance.irradianceTexture = irradianceTexture?.instance || irradianceTexture
				irradianceTexture = instance.irradianceTexture
				if (is2DArray != undefined) instance.is2DArray = is2DArray?.instance || is2DArray
				is2DArray = instance.is2DArray
				if (is3D != undefined) instance.is3D = is3D?.instance || is3D
				is3D = instance.is3D
				if (isBlocking != undefined) instance.isBlocking = isBlocking?.instance || isBlocking
				isBlocking = instance.isBlocking
				if (isCube != undefined) instance.isCube = isCube?.instance || isCube
				isCube = instance.isCube
				if (isRGBD != undefined) instance.isRGBD = isRGBD?.instance || isRGBD
				isRGBD = instance.isRGBD
				if (linearSpecularLOD != undefined) instance.linearSpecularLOD = linearSpecularLOD?.instance || linearSpecularLOD
				linearSpecularLOD = instance.linearSpecularLOD

				loadingError = instance.loadingError
				if (lodGenerationOffset != undefined) instance.lodGenerationOffset = lodGenerationOffset?.instance || lodGenerationOffset
				lodGenerationOffset = instance.lodGenerationOffset
				if (lodGenerationScale != undefined) instance.lodGenerationScale = lodGenerationScale?.instance || lodGenerationScale
				lodGenerationScale = instance.lodGenerationScale

				mimeType = instance.mimeType

				noMipmap = instance.noMipmap
				if (onAfterRender != undefined) instance.onAfterRender = onAfterRender?.instance || onAfterRender
				onAfterRender = instance.onAfterRender
				if (onAfterUnbind != undefined) instance.onAfterUnbind = onAfterUnbind?.instance || onAfterUnbind
				onAfterUnbind = instance.onAfterUnbind
				if (onBeforeRender != undefined) instance.onBeforeRender = onBeforeRender?.instance || onBeforeRender
				onBeforeRender = instance.onBeforeRender
				if (onClear != undefined) instance.onClear = onClear?.instance || onClear
				onClear = instance.onClear
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose

				postProcesses = instance.postProcesses
				if (refreshRate != undefined) instance.refreshRate = refreshRate?.instance || refreshRate
				refreshRate = instance.refreshRate
				if (renderList != undefined) instance.renderList = renderList?.instance || renderList
				renderList = instance.renderList

				renderPassIds = instance.renderPassIds

				renderTarget = instance.renderTarget

				renderTargetOptions = instance.renderTargetOptions
				if (samples != undefined) instance.samples = samples?.instance || samples
				samples = instance.samples

				textureFormat = instance.textureFormat

				textureType = instance.textureType

				uid = instance.uid
				if (wrapU != undefined) instance.wrapU = wrapU?.instance || wrapU
				wrapU = instance.wrapU
				if (wrapV != undefined) instance.wrapV = wrapV?.instance || wrapV
				wrapV = instance.wrapV
				if (activeCamera != undefined) instance.activeCamera = activeCamera?.instance || activeCamera
				activeCamera = instance.activeCamera
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (anisotropicFilteringLevel != undefined) instance.anisotropicFilteringLevel = anisotropicFilteringLevel?.instance || anisotropicFilteringLevel
				anisotropicFilteringLevel = instance.anisotropicFilteringLevel
				if (boundingBoxPosition != undefined) instance.boundingBoxPosition = boundingBoxPosition?.instance || boundingBoxPosition
				boundingBoxPosition = instance.boundingBoxPosition
				if (clearColor != undefined) instance.clearColor = clearColor?.instance || clearColor
				clearColor = instance.clearColor
				if (customIsReadyFunction != undefined) instance.customIsReadyFunction = customIsReadyFunction?.instance || customIsReadyFunction
				customIsReadyFunction = instance.customIsReadyFunction
				if (customRenderFunction != undefined) instance.customRenderFunction = customRenderFunction?.instance || customRenderFunction
				customRenderFunction = instance.customRenderFunction
				if (delayLoadState != undefined) instance.delayLoadState = delayLoadState?.instance || delayLoadState
				delayLoadState = instance.delayLoadState
				if (forceLayerMaskCheck != undefined) instance.forceLayerMaskCheck = forceLayerMaskCheck?.instance || forceLayerMaskCheck
				forceLayerMaskCheck = instance.forceLayerMaskCheck
				if (getCustomRenderList != undefined) instance.getCustomRenderList = getCustomRenderList?.instance || getCustomRenderList
				getCustomRenderList = instance.getCustomRenderList
				if (homogeneousRotationInUVTransform != undefined) instance.homogeneousRotationInUVTransform = homogeneousRotationInUVTransform?.instance || homogeneousRotationInUVTransform
				homogeneousRotationInUVTransform = instance.homogeneousRotationInUVTransform
				if (ignoreCameraViewport != undefined) instance.ignoreCameraViewport = ignoreCameraViewport?.instance || ignoreCameraViewport
				ignoreCameraViewport = instance.ignoreCameraViewport
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (invertZ != undefined) instance.invertZ = invertZ?.instance || invertZ
				invertZ = instance.invertZ
				if (isRenderTarget != undefined) instance.isRenderTarget = isRenderTarget?.instance || isRenderTarget
				isRenderTarget = instance.isRenderTarget
				if (level != undefined) instance.level = level?.instance || level
				level = instance.level
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (mirrorPlane != undefined) instance.mirrorPlane = mirrorPlane?.instance || mirrorPlane
				mirrorPlane = instance.mirrorPlane
				if (noPrePassRenderer != undefined) instance.noPrePassRenderer = noPrePassRenderer?.instance || noPrePassRenderer
				noPrePassRenderer = instance.noPrePassRenderer
				if (onAfterRenderObservable != undefined) instance.onAfterRenderObservable = onAfterRenderObservable?.instance || onAfterRenderObservable
				onAfterRenderObservable = instance.onAfterRenderObservable
				if (onAfterUnbindObservable != undefined) instance.onAfterUnbindObservable = onAfterUnbindObservable?.instance || onAfterUnbindObservable
				onAfterUnbindObservable = instance.onAfterUnbindObservable
				if (onBeforeBindObservable != undefined) instance.onBeforeBindObservable = onBeforeBindObservable?.instance || onBeforeBindObservable
				onBeforeBindObservable = instance.onBeforeBindObservable
				if (onBeforeRenderObservable != undefined) instance.onBeforeRenderObservable = onBeforeRenderObservable?.instance || onBeforeRenderObservable
				onBeforeRenderObservable = instance.onBeforeRenderObservable
				if (onClearObservable != undefined) instance.onClearObservable = onClearObservable?.instance || onClearObservable
				onClearObservable = instance.onClearObservable
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onLoadObservable != undefined) instance.onLoadObservable = onLoadObservable?.instance || onLoadObservable
				onLoadObservable = instance.onLoadObservable
				if (onResizeObservable != undefined) instance.onResizeObservable = onResizeObservable?.instance || onResizeObservable
				onResizeObservable = instance.onResizeObservable
				if (optimizeUVAllocation != undefined) instance.optimizeUVAllocation = optimizeUVAllocation?.instance || optimizeUVAllocation
				optimizeUVAllocation = instance.optimizeUVAllocation
				if (renderListPredicate != undefined) instance.renderListPredicate = renderListPredicate?.instance || renderListPredicate
				renderListPredicate = instance.renderListPredicate
				if (renderParticles != undefined) instance.renderParticles = renderParticles?.instance || renderParticles
				renderParticles = instance.renderParticles
				if (renderPassId != undefined) instance.renderPassId = renderPassId?.instance || renderPassId
				renderPassId = instance.renderPassId
				if (renderSprites != undefined) instance.renderSprites = renderSprites?.instance || renderSprites
				renderSprites = instance.renderSprites
				if (reservedDataStore != undefined) instance.reservedDataStore = reservedDataStore?.instance || reservedDataStore
				reservedDataStore = instance.reservedDataStore
				if (skipInitialClear != undefined) instance.skipInitialClear = skipInitialClear?.instance || skipInitialClear
				skipInitialClear = instance.skipInitialClear
				if (sphericalPolynomial != undefined) instance.sphericalPolynomial = sphericalPolynomial?.instance || sphericalPolynomial
				sphericalPolynomial = instance.sphericalPolynomial
				if (uAng != undefined) instance.uAng = uAng?.instance || uAng
				uAng = instance.uAng
				if (uOffset != undefined) instance.uOffset = uOffset?.instance || uOffset
				uOffset = instance.uOffset
				if (uRotationCenter != undefined) instance.uRotationCenter = uRotationCenter?.instance || uRotationCenter
				uRotationCenter = instance.uRotationCenter
				if (uScale != undefined) instance.uScale = uScale?.instance || uScale
				uScale = instance.uScale
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (url != undefined) instance.url = url?.instance || url
				url = instance.url
				if (useCameraPostProcesses != undefined) instance.useCameraPostProcesses = useCameraPostProcesses?.instance || useCameraPostProcesses
				useCameraPostProcesses = instance.useCameraPostProcesses
				if (vAng != undefined) instance.vAng = vAng?.instance || vAng
				vAng = instance.vAng
				if (vOffset != undefined) instance.vOffset = vOffset?.instance || vOffset
				vOffset = instance.vOffset
				if (vRotationCenter != undefined) instance.vRotationCenter = vRotationCenter?.instance || vRotationCenter
				vRotationCenter = instance.vRotationCenter
				if (vScale != undefined) instance.vScale = vScale?.instance || vScale
				vScale = instance.vScale
				if (wAng != undefined) instance.wAng = wAng?.instance || wAng
				wAng = instance.wAng
				if (wRotationCenter != undefined) instance.wRotationCenter = wRotationCenter?.instance || wRotationCenter
				wRotationCenter = instance.wRotationCenter
				if (wrapR != undefined) instance.wrapR = wrapR?.instance || wrapR
				wrapR = instance.wrapR

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

			