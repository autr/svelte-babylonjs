
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					texturePath  * required
					size  * required
					scene  * required
					fallbackTexture  
					generateMipMaps  
					skipJson   
					animations  
					anisotropicFilteringLevel  
					autoClear  
					delayLoadState  
					homogeneousRotationInUVTransform  
					inspectableCustomProperties  
					invertZ  
					isEnabled  
					isRenderTarget  
					level  
					metadata  
					nodeMaterialSource  
					onBeforeGenerationObservable  
					onDisposeObservable  
					onGenerated  
					onGeneratedObservable  
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

				
				export let name = undefined // [string] * required
				// define the name of the texture
				

				export let texturePath = undefined // [string] * required
				// define the folder path containing all the custom texture related files (config, shaders...)
				

				export let size = undefined // [texturesize] * required
				// define the size of the texture to create
				

				export let scene = undefined // [scene] * required
				// define the scene the texture belongs to
				

				export let fallbackTexture = undefined // [texture] 
				// define a fallback texture in case there were issues to create the custom texture
				

				export let generateMipMaps = undefined // [boolean] 
				// define if the texture should creates mip maps or not
				

				export let skipJson = undefined // [boolean] 
				// define a boolena indicating that there is no json config file to load
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.CustomProceduralTexture(name,texturePath,size,scene,fallbackTexture,generateMipMaps,skipJson) : {}

				// ================ ACCESSORS ================

				
				export let animate = undefined // [boolean] 
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
				

				export let onDispose = undefined // [] 
				// 
				

				export let refreshRate = undefined // [number] 
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
				

				export let autoClear = undefined // [boolean] 
				// define if the texture must be cleared before rendering (default is true)
				

				export let delayLoadState = undefined // [number] 
				// define the current state of the loading sequence when in delayed load mode.
				

				export let homogeneousRotationInUVTransform = undefined // [boolean] 
				// sets this property to true to avoid deformations when rotating the texture with non-uniform scaling
				

				export let inspectableCustomProperties = undefined // [nullable] 
				// list of inspectable custom properties (used by the inspector)
				

				export let invertZ = undefined // [boolean] 
				// is z inverted in the texture (useful in a cube texture).
				

				export let isEnabled = undefined // [boolean] 
				// define if the texture is enabled or not (disabled texture will not render)
				

				export let isRenderTarget = undefined // [boolean] 
				// define if the texture is a render target.
				

				export let level = undefined // [number] 
				// intensity or strength of the texture.it is commonly used by materials to fine tune the intensity of the texture
				

				export let metadata = undefined // [any] 
				// gets or sets an object used to store user defined information.
				

				export let nodeMaterialSource = undefined // [nullable] 
				// gets or sets the node material used to create this texture (null if the texture was manually created)
				

				export let onBeforeGenerationObservable = undefined // [observable] 
				// event raised before the texture is generated
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the texture is disposed.
				

				export let onGenerated = undefined // [reflection] 
				// 
				

				export let onGeneratedObservable = undefined // [observable] 
				// event raised when the texture is generated
				

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

				
				export let _setEffect = (...args) => instance._setEffect(...args)

				export let checkTransformsAreIdentical = (...args) => instance.checkTransformsAreIdentical(...args)

				export let clone = (...args) => instance.clone(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let forceSphericalPolynomialsRecompute = (...args) => instance.forceSphericalPolynomialsRecompute(...args)

				export let getBaseSize = (...args) => instance.getBaseSize(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getContent = (...args) => instance.getContent(...args)

				export let getEffect = (...args) => instance.getEffect(...args)

				export let getInternalTexture = (...args) => instance.getInternalTexture(...args)

				export let getReflectionTextureMatrix = (...args) => instance.getReflectionTextureMatrix(...args)

				export let getRenderSize = (...args) => instance.getRenderSize(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let getSize = (...args) => instance.getSize(...args)

				export let getTextureMatrix = (...args) => instance.getTextureMatrix(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let isReadyOrNotBlocking = (...args) => instance.isReadyOrNotBlocking(...args)

				export let readPixels = (...args) => instance.readPixels(...args)

				export let releaseInternalTexture = (...args) => instance.releaseInternalTexture(...args)

				export let render = (...args) => instance.render(...args)

				export let reset = (...args) => instance.reset(...args)

				export let resetRefreshCounter = (...args) => instance.resetRefreshCounter(...args)

				export let resize = (...args) => instance.resize(...args)

				export let scale = (...args) => instance.scale(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setColor3 = (...args) => instance.setColor3(...args)

				export let setColor4 = (...args) => instance.setColor4(...args)

				export let setFloat = (...args) => instance.setFloat(...args)

				export let setFloats = (...args) => instance.setFloats(...args)

				export let setFragment = (...args) => instance.setFragment(...args)

				export let setInt = (...args) => instance.setInt(...args)

				export let setMatrix = (...args) => instance.setMatrix(...args)

				export let setTexture = (...args) => instance.setTexture(...args)

				export let setVector2 = (...args) => instance.setVector2(...args)

				export let setVector3 = (...args) => instance.setVector3(...args)

				export let toString = (...args) => instance.toString(...args)

				export let updateSamplingMode = (...args) => instance.updateSamplingMode(...args)

				export let updateShaderUniforms = (...args) => instance.updateShaderUniforms(...args)

				export let updateTextures = (...args) => instance.updateTextures(...args)

				export let updateURL = (...args) => instance.updateURL(...args)

				export let CreateFromBase64String = (...args) => instance.CreateFromBase64String(...args)

				export let LoadFromDataString = (...args) => instance.LoadFromDataString(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let WhenAllReady = (...args) => instance.WhenAllReady(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:CustomProceduralTexture]`, ...args) : null

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
				if (texturePath != undefined) instance.texturePath = texturePath?.instance || texturePath
				texturePath = instance.texturePath
				if (size != undefined) instance.size = size?.instance || size
				size = instance.size
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (fallbackTexture != undefined) instance.fallbackTexture = fallbackTexture?.instance || fallbackTexture
				fallbackTexture = instance.fallbackTexture
				if (generateMipMaps != undefined) instance.generateMipMaps = generateMipMaps?.instance || generateMipMaps
				generateMipMaps = instance.generateMipMaps
				if (skipJson != undefined) instance.skipJson = skipJson?.instance || skipJson
				skipJson = instance.skipJson
				if (animate != undefined) instance.animate = animate?.instance || animate
				animate = instance.animate

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
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose
				if (refreshRate != undefined) instance.refreshRate = refreshRate?.instance || refreshRate
				refreshRate = instance.refreshRate

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
				if (autoClear != undefined) instance.autoClear = autoClear?.instance || autoClear
				autoClear = instance.autoClear
				if (delayLoadState != undefined) instance.delayLoadState = delayLoadState?.instance || delayLoadState
				delayLoadState = instance.delayLoadState
				if (homogeneousRotationInUVTransform != undefined) instance.homogeneousRotationInUVTransform = homogeneousRotationInUVTransform?.instance || homogeneousRotationInUVTransform
				homogeneousRotationInUVTransform = instance.homogeneousRotationInUVTransform
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (invertZ != undefined) instance.invertZ = invertZ?.instance || invertZ
				invertZ = instance.invertZ
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled
				if (isRenderTarget != undefined) instance.isRenderTarget = isRenderTarget?.instance || isRenderTarget
				isRenderTarget = instance.isRenderTarget
				if (level != undefined) instance.level = level?.instance || level
				level = instance.level
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (nodeMaterialSource != undefined) instance.nodeMaterialSource = nodeMaterialSource?.instance || nodeMaterialSource
				nodeMaterialSource = instance.nodeMaterialSource
				if (onBeforeGenerationObservable != undefined) instance.onBeforeGenerationObservable = onBeforeGenerationObservable?.instance || onBeforeGenerationObservable
				onBeforeGenerationObservable = instance.onBeforeGenerationObservable
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onGenerated != undefined) instance.onGenerated = onGenerated?.instance || onGenerated
				onGenerated = instance.onGenerated
				if (onGeneratedObservable != undefined) instance.onGeneratedObservable = onGeneratedObservable?.instance || onGeneratedObservable
				onGeneratedObservable = instance.onGeneratedObservable
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

			