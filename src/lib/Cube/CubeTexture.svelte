
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					rootUrl  * required
					sceneOrEngine  * required
					extensions  
					noMipmap  
					files  
					onLoad  
					onError  
					format  
					prefiltered  
					forcedExtension  
					createPolynomials  
					lodScale  
					lodOffset  
					loaderOptions  
					useSRGBBuffer   
					animations  
					anisotropicFilteringLevel  
					boundingBoxPosition  
					delayLoadState  
					invertZ  
					isRenderTarget  
					level  
					metadata  
					name  
					onDisposeObservable  
					onLoadObservable  
					optimizeUVAllocation  
					reservedDataStore  
					sphericalPolynomial  
					uniqueId  
					url  
					wrapR  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let rootUrl = undefined // [string] * required
				// defines the url of the texture or the root name of the six images
				

				export let sceneOrEngine = undefined // [union] * required
				// defines the scene or engine the texture is attached to
				

				export let extensions = undefined // [nullable] 
				// defines the suffixes add to the picture name in case six images are in use like _px.jpg...
				

				export let noMipmap = undefined // [boolean] 
				// defines if mipmaps should be created or not
				

				export let files = undefined // [nullable] 
				// defines the six files to load for the different faces in that order: px, py, pz, nx, ny, nz
				

				export let onLoad = undefined // [nullable] 
				// defines a callback triggered at the end of the file load if no errors occurred
				

				export let onError = undefined // [nullable] 
				// defines a callback triggered in case of error during load
				

				export let format = undefined // [number] 
				// defines the internal format to use for the texture once loaded
				

				export let prefiltered = undefined // [boolean] 
				// defines whether or not the texture is created from prefiltered data
				

				export let forcedExtension = undefined // [any] 
				// defines the extensions to use (force a special type of file to load) in case it is different from the file name
				

				export let createPolynomials = undefined // [boolean] 
				// defines whether or not to create polynomial harmonics from the texture data if necessary
				

				export let lodScale = undefined // [number] 
				// defines the scale applied to environment texture. this manages the range of lod level used for ibl according to the roughness
				

				export let lodOffset = undefined // [number] 
				// defines the offset applied to environment texture. this manages first lod level used for ibl according to the roughness
				

				export let loaderOptions = undefined // [any] 
				// options to be passed to the loader
				

				export let useSRGBBuffer = undefined // [boolean] 
				// defines if the texture must be loaded in a srgb gpu buffer (if supported by the gpu) (default: false)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.CubeTexture(rootUrl,sceneOrEngine,extensions,noMipmap,files,onLoad,onError,format,prefiltered,forcedExtension,createPolynomials,lodScale,lodOffset,loaderOptions,useSRGBBuffer) : {}

				// ================ ACCESSORS ================

				
				export let boundingBoxSize = undefined // [vector3] 
				// 
				

				export let canRescale = undefined // [boolean] 
				// 
				

				export let coordinatesIndex = undefined // [number] 
				// 
				

				export let coordinatesMode = undefined // [number] 
				// 
				

				export let errorObject = undefined // [union] 
				// 
				

				export let gammaSpace = undefined // [boolean] 
				// 
				

				export let getAlphaFromRGB = undefined // [boolean] 
				// 
				

				export let hasAlpha = undefined // [boolean] 
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
				

				export let onDispose = undefined // [] 
				// 
				

				export let rotationY = undefined // [number] 
				// 
				

				export let samplingMode = undefined // [number] 
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

				
				export let animations = undefined // [array] 
				// define the list of animation attached to the texture.
				

				export let anisotropicFilteringLevel = undefined // [number] 
				// with compliant hardware and browser (supporting anisotropic filtering)this defines the level of anisotropic filtering in the texture.the higher the better but the slower. this defaults to 4 as it seems to be the best tradeoff.
				

				export let boundingBoxPosition = undefined // [vector3] 
				// gets or sets the center of the bounding box associated with the cube texture.it must define where the camera used to render the texture was set
				

				export let delayLoadState = undefined // [number] 
				// define the current state of the loading sequence when in delayed load mode.
				

				export let invertZ = undefined // [boolean] 
				// is z inverted in the texture (useful in a cube texture).
				

				export let isRenderTarget = undefined // [boolean] 
				// define if the texture is a render target.
				

				export let level = undefined // [number] 
				// intensity or strength of the texture.it is commonly used by materials to fine tune the intensity of the texture
				

				export let metadata = undefined // [any] 
				// gets or sets an object used to store user defined information.
				

				export let name = undefined // [string] 
				// define the name of the texture.
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the texture is disposed.
				

				export let onLoadObservable = undefined // [observable] 
				// observable triggered once the texture has been loaded.
				

				export let optimizeUVAllocation = undefined // [boolean] 
				// gets or sets a boolean indicating that the texture should try to reduce shader code if there is no uv manipulation.(ie. when texture.gettexturematrix().isidentityas3x2() returns true)
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let sphericalPolynomial = undefined // [nullable] 
				// get the polynomial representation of the texture data.this is mainly use as a fast way to recover ibl diffuse irradiance data.
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the texture
				

				export let url = undefined // [string] 
				// the url of the texture
				

				export let wrapR = undefined // [number] 
				// | value | type               | description || ----- | ------------------ | ----------- || 0     | clamp_addressmode  |             || 1     | wrap_addressmode   |             || 2     | mirror_addressmode |             |
				

				// ================ METHODS ================

				
				export let checkTransformsAreIdentical = (...args) => instance.checkTransformsAreIdentical(...args)

				export let clone = (...args) => instance.clone(...args)

				export let delayLoad = (...args) => instance.delayLoad(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let forceSphericalPolynomialsRecompute = (...args) => instance.forceSphericalPolynomialsRecompute(...args)

				export let getBaseSize = (...args) => instance.getBaseSize(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getInternalTexture = (...args) => instance.getInternalTexture(...args)

				export let getReflectionTextureMatrix = (...args) => instance.getReflectionTextureMatrix(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let getSize = (...args) => instance.getSize(...args)

				export let getTextureMatrix = (...args) => instance.getTextureMatrix(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let isReadyOrNotBlocking = (...args) => instance.isReadyOrNotBlocking(...args)

				export let readPixels = (...args) => instance.readPixels(...args)

				export let releaseInternalTexture = (...args) => instance.releaseInternalTexture(...args)

				export let scale = (...args) => instance.scale(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setReflectionTextureMatrix = (...args) => instance.setReflectionTextureMatrix(...args)

				export let toString = (...args) => instance.toString(...args)

				export let updateSamplingMode = (...args) => instance.updateSamplingMode(...args)

				export let updateURL = (...args) => instance.updateURL(...args)

				export let CreateFromImages = (...args) => instance.CreateFromImages(...args)

				export let CreateFromPrefilteredData = (...args) => instance.CreateFromPrefilteredData(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let WhenAllReady = (...args) => instance.WhenAllReady(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:CubeTexture]`, ...args) : null

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

												if (rootUrl != undefined) instance.rootUrl = rootUrl?.instance || rootUrl
				rootUrl = instance.rootUrl
				if (sceneOrEngine != undefined) instance.sceneOrEngine = sceneOrEngine?.instance || sceneOrEngine
				sceneOrEngine = instance.sceneOrEngine
				if (extensions != undefined) instance.extensions = extensions?.instance || extensions
				extensions = instance.extensions
				if (noMipmap != undefined) instance.noMipmap = noMipmap?.instance || noMipmap
				noMipmap = instance.noMipmap
				if (files != undefined) instance.files = files?.instance || files
				files = instance.files
				if (onLoad != undefined) instance.onLoad = onLoad?.instance || onLoad
				onLoad = instance.onLoad
				if (onError != undefined) instance.onError = onError?.instance || onError
				onError = instance.onError
				if (format != undefined) instance.format = format?.instance || format
				format = instance.format
				if (prefiltered != undefined) instance.prefiltered = prefiltered?.instance || prefiltered
				prefiltered = instance.prefiltered
				if (forcedExtension != undefined) instance.forcedExtension = forcedExtension?.instance || forcedExtension
				forcedExtension = instance.forcedExtension
				if (createPolynomials != undefined) instance.createPolynomials = createPolynomials?.instance || createPolynomials
				createPolynomials = instance.createPolynomials
				if (lodScale != undefined) instance.lodScale = lodScale?.instance || lodScale
				lodScale = instance.lodScale
				if (lodOffset != undefined) instance.lodOffset = lodOffset?.instance || lodOffset
				lodOffset = instance.lodOffset
				if (loaderOptions != undefined) instance.loaderOptions = loaderOptions?.instance || loaderOptions
				loaderOptions = instance.loaderOptions
				if (useSRGBBuffer != undefined) instance.useSRGBBuffer = useSRGBBuffer?.instance || useSRGBBuffer
				useSRGBBuffer = instance.useSRGBBuffer
				if (boundingBoxSize != undefined) instance.boundingBoxSize = boundingBoxSize?.instance || boundingBoxSize
				boundingBoxSize = instance.boundingBoxSize

				canRescale = instance.canRescale
				if (coordinatesIndex != undefined) instance.coordinatesIndex = coordinatesIndex?.instance || coordinatesIndex
				coordinatesIndex = instance.coordinatesIndex
				if (coordinatesMode != undefined) instance.coordinatesMode = coordinatesMode?.instance || coordinatesMode
				coordinatesMode = instance.coordinatesMode

				errorObject = instance.errorObject
				if (gammaSpace != undefined) instance.gammaSpace = gammaSpace?.instance || gammaSpace
				gammaSpace = instance.gammaSpace
				if (getAlphaFromRGB != undefined) instance.getAlphaFromRGB = getAlphaFromRGB?.instance || getAlphaFromRGB
				getAlphaFromRGB = instance.getAlphaFromRGB
				if (hasAlpha != undefined) instance.hasAlpha = hasAlpha?.instance || hasAlpha
				hasAlpha = instance.hasAlpha
				if (irradianceTexture != undefined) instance.irradianceTexture = irradianceTexture?.instance || irradianceTexture
				irradianceTexture = instance.irradianceTexture
				if (is2DArray != undefined) instance.is2DArray = is2DArray?.instance || is2DArray
				is2DArray = instance.is2DArray
				if (is3D != undefined) instance.is3D = is3D?.instance || is3D
				is3D = instance.is3D

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
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose
				if (rotationY != undefined) instance.rotationY = rotationY?.instance || rotationY
				rotationY = instance.rotationY

				samplingMode = instance.samplingMode

				textureFormat = instance.textureFormat

				textureType = instance.textureType

				uid = instance.uid
				if (wrapU != undefined) instance.wrapU = wrapU?.instance || wrapU
				wrapU = instance.wrapU
				if (wrapV != undefined) instance.wrapV = wrapV?.instance || wrapV
				wrapV = instance.wrapV
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (anisotropicFilteringLevel != undefined) instance.anisotropicFilteringLevel = anisotropicFilteringLevel?.instance || anisotropicFilteringLevel
				anisotropicFilteringLevel = instance.anisotropicFilteringLevel
				if (boundingBoxPosition != undefined) instance.boundingBoxPosition = boundingBoxPosition?.instance || boundingBoxPosition
				boundingBoxPosition = instance.boundingBoxPosition
				if (delayLoadState != undefined) instance.delayLoadState = delayLoadState?.instance || delayLoadState
				delayLoadState = instance.delayLoadState
				if (invertZ != undefined) instance.invertZ = invertZ?.instance || invertZ
				invertZ = instance.invertZ
				if (isRenderTarget != undefined) instance.isRenderTarget = isRenderTarget?.instance || isRenderTarget
				isRenderTarget = instance.isRenderTarget
				if (level != undefined) instance.level = level?.instance || level
				level = instance.level
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onLoadObservable != undefined) instance.onLoadObservable = onLoadObservable?.instance || onLoadObservable
				onLoadObservable = instance.onLoadObservable
				if (optimizeUVAllocation != undefined) instance.optimizeUVAllocation = optimizeUVAllocation?.instance || optimizeUVAllocation
				optimizeUVAllocation = instance.optimizeUVAllocation
				if (reservedDataStore != undefined) instance.reservedDataStore = reservedDataStore?.instance || reservedDataStore
				reservedDataStore = instance.reservedDataStore
				if (sphericalPolynomial != undefined) instance.sphericalPolynomial = sphericalPolynomial?.instance || sphericalPolynomial
				sphericalPolynomial = instance.sphericalPolynomial
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (url != undefined) instance.url = url?.instance || url
				url = instance.url
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

			