
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					data  * required
					width  * required
					height  * required
					format  * required
					sceneOrEngine  * required
					generateMipMaps  
					invertY  
					samplingMode  
					type  
					creationFlags  
					useSRGBBuffer   
					animations  
					anisotropicFilteringLevel  
					delayLoadState  
					homogeneousRotationInUVTransform  
					inspectableCustomProperties  
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
					uAng  
					uOffset  
					uRotationCenter  
					uScale  
					uniqueId  
					url  
					vAng  
					vOffset  
					vRotationCenter  
					vScale  
					wAng  
					wRotationCenter  
					wrapR  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let data = undefined // [nullable] * required
				// define the array of data to use to create the texture (null to create an empty texture)
				

				export let width = undefined // [number] * required
				// define the width of the texture
				

				export let height = undefined // [number] * required
				// define the height of the texture
				

				export let format = undefined // [number] * required
				// define the format of the data (rgb, rgba... engine.textureformat_xxx)
				

				export let sceneOrEngine = undefined // [nullable] * required
				// defines the scene or engine the texture will belong to
				

				export let generateMipMaps = undefined // [boolean] 
				// define whether mip maps should be generated or not
				

				export let invertY = undefined // [boolean] 
				// define if the data should be flipped on y when uploaded to the gpu
				

				export let samplingMode = undefined // [number] 
				// define the texture sampling mode (texture.xxx_samplingmode)
				

				export let type = undefined // [number] 
				// define the format of the data (int, float... engine.texturetype_xxx)
				

				export let creationFlags = undefined // [number] 
				// specific flags to use when creating the texture (constants.texture_creationflag_storage for storage textures, for eg)
				

				export let useSRGBBuffer = undefined // [boolean] 
				// defines if the texture must be loaded in a srgb gpu buffer (if supported by the gpu).
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.RawTexture(data,width,height,format,sceneOrEngine,generateMipMaps,invertY,samplingMode,type,creationFlags,useSRGBBuffer) : {}

				// ================ ACCESSORS ================

				
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
				

				export let mimeType = undefined // [union] 
				// 
				

				export let noMipmap = undefined // [boolean] 
				// 
				

				export let onDispose = undefined // [] 
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
				

				export let delayLoadState = undefined // [number] 
				// define the current state of the loading sequence when in delayed load mode.
				

				export let homogeneousRotationInUVTransform = undefined // [boolean] 
				// sets this property to true to avoid deformations when rotating the texture with non-uniform scaling
				

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

				
				export let checkTransformsAreIdentical = (...args) => instance.checkTransformsAreIdentical(...args)

				export let clone = (...args) => instance.clone(...args)

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

				export let toString = (...args) => instance.toString(...args)

				export let update = (...args) => instance.update(...args)

				export let updateSamplingMode = (...args) => instance.updateSamplingMode(...args)

				export let updateURL = (...args) => instance.updateURL(...args)

				export let CreateAlphaTexture = (...args) => instance.CreateAlphaTexture(...args)

				export let CreateFromBase64String = (...args) => instance.CreateFromBase64String(...args)

				export let CreateLuminanceAlphaTexture = (...args) => instance.CreateLuminanceAlphaTexture(...args)

				export let CreateLuminanceTexture = (...args) => instance.CreateLuminanceTexture(...args)

				export let CreateRGBAStorageTexture = (...args) => instance.CreateRGBAStorageTexture(...args)

				export let CreateRGBATexture = (...args) => instance.CreateRGBATexture(...args)

				export let CreateRGBTexture = (...args) => instance.CreateRGBTexture(...args)

				export let CreateRStorageTexture = (...args) => instance.CreateRStorageTexture(...args)

				export let CreateRTexture = (...args) => instance.CreateRTexture(...args)

				export let LoadFromDataString = (...args) => instance.LoadFromDataString(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let WhenAllReady = (...args) => instance.WhenAllReady(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:RawTexture]`, ...args) : null

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

												if (data != undefined) instance.data = data?.instance || data
				data = instance.data
				if (width != undefined) instance.width = width?.instance || width
				width = instance.width
				if (height != undefined) instance.height = height?.instance || height
				height = instance.height
				if (format != undefined) instance.format = format?.instance || format
				format = instance.format
				if (sceneOrEngine != undefined) instance.sceneOrEngine = sceneOrEngine?.instance || sceneOrEngine
				sceneOrEngine = instance.sceneOrEngine
				if (generateMipMaps != undefined) instance.generateMipMaps = generateMipMaps?.instance || generateMipMaps
				generateMipMaps = instance.generateMipMaps
				if (invertY != undefined) instance.invertY = invertY?.instance || invertY
				invertY = instance.invertY
				if (samplingMode != undefined) instance.samplingMode = samplingMode?.instance || samplingMode
				samplingMode = instance.samplingMode
				if (type != undefined) instance.type = type?.instance || type
				type = instance.type
				if (creationFlags != undefined) instance.creationFlags = creationFlags?.instance || creationFlags
				creationFlags = instance.creationFlags
				if (useSRGBBuffer != undefined) instance.useSRGBBuffer = useSRGBBuffer?.instance || useSRGBBuffer
				useSRGBBuffer = instance.useSRGBBuffer

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
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose

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
				if (delayLoadState != undefined) instance.delayLoadState = delayLoadState?.instance || delayLoadState
				delayLoadState = instance.delayLoadState
				if (homogeneousRotationInUVTransform != undefined) instance.homogeneousRotationInUVTransform = homogeneousRotationInUVTransform?.instance || homogeneousRotationInUVTransform
				homogeneousRotationInUVTransform = instance.homogeneousRotationInUVTransform
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

			