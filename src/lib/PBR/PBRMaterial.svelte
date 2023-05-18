
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					scene   
					albedoColor  
					albedoTexture  
					allowShaderHotSwapping  
					alphaCutOff  
					ambientColor  
					ambientTexture  
					ambientTextureImpactOnAnalyticalLights  
					ambientTextureStrength  
					animations  
					anisotropy (readonly) 
					brdf (readonly) 
					bumpTexture  
					checkReadyOnEveryCall  
					checkReadyOnlyOnce  
					clearCoat (readonly) 
					clipPlane  
					clipPlane2  
					clipPlane3  
					clipPlane4  
					clipPlane5  
					clipPlane6  
					customShaderNameResolve  
					depthFunction  
					detailMap (readonly) 
					directIntensity  
					disableBumpMap  
					disableColorWrite  
					disableDepthWrite  
					disableLighting  
					doNotSerialize  
					emissiveColor  
					emissiveIntensity  
					emissiveTexture  
					enableSpecularAntiAliasing  
					environmentBRDFTexture  
					environmentIntensity  
					forceAlphaTest  
					forceDepthWrite  
					forceIrradianceInFragment  
					forceNormalForward  
					getRenderTargetTextures  
					id  
					inspectableCustomProperties  
					invertNormalMapX  
					invertNormalMapY  
					iridescence (readonly) 
					lightmapTexture  
					maxSimultaneousLights  
					metadata  
					metallic  
					metallicF0Factor  
					metallicReflectanceColor  
					metallicReflectanceTexture  
					metallicTexture  
					microSurface  
					microSurfaceTexture  
					onCompiled  
					onDisposeObservable  
					onError  
					opacityTexture  
					parallaxScaleBias  
					pluginManager  
					pointSize  
					prePassConfiguration (readonly) 
					reflectanceTexture  
					reflectionColor  
					reflectionTexture  
					reflectivityColor  
					reflectivityTexture  
					reservedDataStore  
					roughness  
					separateCullingPass  
					shadowDepthWrapper  
					sheen (readonly) 
					sideOrientation  
					specularIntensity  
					state  
					stencil (readonly) 
					subSurface (readonly) 
					twoSidedLighting  
					uniqueId  
					unlit  
					useAlphaFresnel  
					useAlphaFromAlbedoTexture  
					useAmbientInGrayScale  
					useAmbientOcclusionFromMetallicTextureRed  
					useAutoMicroSurfaceFromReflectivityMap  
					useHorizonOcclusion  
					useLightmapAsShadowmap  
					useLinearAlphaFresnel  
					useMetallnessFromMetallicTextureBlue  
					useMicroSurfaceFromReflectivityMapAlpha  
					useObjectSpaceNormalMap  
					useOnlyMetallicFromMetallicReflectanceTexture  
					useParallax  
					useParallaxOcclusion  
					useRadianceOcclusion  
					useRadianceOverAlpha  
					useRoughnessFromMetallicTextureAlpha  
					useRoughnessFromMetallicTextureGreen  
					useSpecularOverAlpha  
					zOffset  
					zOffsetUnits  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// the material name
				

				export let scene = undefined // [scene] 
				// the scene the material will be use in.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PBRMaterial(name,scene) : {}

				// ================ ACCESSORS ================

				
				export let alpha = undefined // [number] 
				// 
				

				export let alphaMode = undefined // [number] 
				// 
				

				export let backFaceCulling = undefined // [boolean] 
				// 
				

				export let blockDirtyMechanism = undefined // [boolean] 
				// 
				

				export let cameraColorCurves = undefined // [nullable] 
				// 
				

				export let cameraColorCurvesEnabled = undefined // [boolean] 
				// 
				

				export let cameraColorGradingEnabled = undefined // [boolean] 
				// 
				

				export let cameraColorGradingTexture = undefined // [nullable] 
				// 
				

				export let cameraContrast = undefined // [number] 
				// 
				

				export let cameraExposure = undefined // [number] 
				// 
				

				export let cameraToneMappingEnabled = undefined // [boolean] 
				// 
				

				export let canRenderToMRT = undefined // [boolean] 
				// 
				

				export let cullBackFaces = undefined // [boolean] 
				// 
				

				export let fillMode = undefined // [number] 
				// 
				

				export let fogEnabled = undefined // [boolean] 
				// 
				

				export let hasRenderTargetTextures = undefined // [boolean] 
				// 
				

				export let imageProcessingConfiguration = undefined // [imageprocessingconfiguration] 
				// 
				

				export let indexOfRefraction = undefined // [number] 
				// 
				

				export let invertRefractionY = undefined // [boolean] 
				// 
				

				export let isFrozen = undefined // [boolean] 
				// 
				

				export let isPrePassCapable = undefined // [boolean] 
				// 
				

				export let linkRefractionWithTransparency = undefined // [boolean] 
				// 
				

				export let needDepthPrePass = undefined // [boolean] 
				// 
				

				export let onBind = undefined // [] 
				// 
				

				export let onBindObservable = undefined // [observable] 
				// 
				

				export let onDispose = undefined // [] 
				// 
				

				export let onEffectCreatedObservable = undefined // [observable] 
				// 
				

				export let onUnBindObservable = undefined // [observable] 
				// 
				

				export let pointsCloud = undefined // [boolean] 
				// 
				

				export let realTimeFiltering = undefined // [boolean] 
				// 
				

				export let realTimeFilteringQuality = undefined // [number] 
				// 
				

				export let refractionTexture = undefined // [nullable] 
				// 
				

				export let transparencyMode = undefined // [nullable] 
				// 
				

				export let useGLTFLightFalloff = undefined // [boolean] 
				// 
				

				export let useLogarithmicDepth = undefined // [boolean] 
				// 
				

				export let usePhysicalLightFalloff = undefined // [boolean] 
				// 
				

				export let wireframe = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let albedoColor = undefined // [color3] 
				// aka diffuse color in other nomenclature.
				

				export let albedoTexture = undefined // [nullable] 
				// aka diffuse texture in standard nomenclature.
				

				export let allowShaderHotSwapping = undefined // [boolean] 
				// gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.this means that the material can keep using a previous shader while a new one is being compiled.this is mostly used when shader parallel compilation is supported (true by default)
				

				export let alphaCutOff = undefined // [number] 
				// defines the alpha limits in alpha test mode.
				

				export let ambientColor = undefined // [color3] 
				// the color of a material in ambient lighting.
				

				export let ambientTexture = undefined // [nullable] 
				// aka occlusion texture in other nomenclature.
				

				export let ambientTextureImpactOnAnalyticalLights = undefined // [number] 
				// defines how much the ao map is occluding the analytical lights (point spot...).1 means it completely occludes it0 mean it has no impact
				

				export let ambientTextureStrength = undefined // [number] 
				// aka occlusion texture intensity in other nomenclature.
				

				export let animations = undefined // [nullable] 
				// stores the animations for the material
				

				export let anisotropy = undefined // [pbranisotropicconfiguration] 
				// defines the anisotropic parameters for the material.
				

				export let brdf = undefined // [pbrbrdfconfiguration] 
				// defines the brdf parameters for the material.
				

				export let bumpTexture = undefined // [nullable] 
				// stores surface normal data used to displace a mesh in a texture.
				

				export let checkReadyOnEveryCall = undefined // [boolean] 
				// specifies if the ready state should be checked on each call
				

				export let checkReadyOnlyOnce = undefined // [boolean] 
				// specifies if the ready state should be checked once
				

				export let clearCoat = undefined // [pbrclearcoatconfiguration] 
				// defines the clear coat layer parameters for the material.
				

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
				

				export let customShaderNameResolve = undefined // [reflection] 
				// 
				

				export let depthFunction = undefined // [number] 
				// specifies the depth function that should be used. 0 means the default engine function
				

				export let detailMap = undefined // [detailmapconfiguration] 
				// defines the detail map parameters for the material.
				

				export let directIntensity = undefined // [number] 
				// intensity of the direct lights e.g. the four lights available in your scene.this impacts both the direct diffuse and specular highlights.
				

				export let disableBumpMap = undefined // [boolean] 
				// debug control allowing disabling the bump map on this material.
				

				export let disableColorWrite = undefined // [boolean] 
				// specifies if color writing should be disabled
				

				export let disableDepthWrite = undefined // [boolean] 
				// specifies if depth writing should be disabled
				

				export let disableLighting = undefined // [boolean] 
				// if sets to true, disables all the lights affecting the material.
				

				export let doNotSerialize = undefined // [boolean] 
				// specifies if the material should be serialized
				

				export let emissiveColor = undefined // [color3] 
				// the color emitted from the material.
				

				export let emissiveIntensity = undefined // [number] 
				// intensity of the emissive part of the material.this helps controlling the emissive effect without modifying the emissive color.
				

				export let emissiveTexture = undefined // [nullable] 
				// stores the emissive values in a texture.
				

				export let enableSpecularAntiAliasing = undefined // [boolean] 
				// enables specular anti aliasing in the pbr shader.it will both interacts on the geometry for analytical and ibl lighting.it also prefilter the roughness map based on the bump values.
				

				export let environmentBRDFTexture = undefined // [nullable] 
				// let user defines the brdf lookup texture used for ibl.a default 8bit version is embedded but you could point at :* default texture: https://assets.babylonjs.com/environments/correlatedmsbrdf_rgbd.png* default 16bit pixel depth texture: https://assets.babylonjs.com/environments/correlatedmsbrdf.dds* legacy default none correlated https://assets.babylonjs.com/environments/uncorrelatedbrdf_rgbd.png* legacy default none correlated 16bit pixel depth https://assets.babylonjs.com/environments/uncorrelatedbrdf.dds
				

				export let environmentIntensity = undefined // [number] 
				// intensity of the environment e.g. how much the environment will light the objecteither through harmonics for rough material or through the reflection for shiny ones.
				

				export let forceAlphaTest = undefined // [boolean] 
				// enforces alpha test in opaque or blend mode in order to improve the performances of some situations.
				

				export let forceDepthWrite = undefined // [boolean] 
				// specifies if depth writing should be forced
				

				export let forceIrradianceInFragment = undefined // [boolean] 
				// force the shader to compute irradiance in the fragment shader in order to take bump in account.
				

				export let forceNormalForward = undefined // [boolean] 
				// force normal to face away from face.
				

				export let getRenderTargetTextures = undefined // [nullable] 
				// callback triggered to get the render target textures
				

				export let id = undefined // [string] 
				// the id of the material
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let invertNormalMapX = undefined // [boolean] 
				// if sets to true, x component of normal map value will invert (x = 1.0 - x).
				

				export let invertNormalMapY = undefined // [boolean] 
				// if sets to true, y component of normal map value will invert (y = 1.0 - y).
				

				export let iridescence = undefined // [pbriridescenceconfiguration] 
				// defines the iridescence layer parameters for the material.
				

				export let lightmapTexture = undefined // [nullable] 
				// stores the pre-calculated light information of a mesh in a texture.
				

				export let maxSimultaneousLights = undefined // [number] 
				// number of simultaneous lights allowed on the material.
				

				export let metadata = undefined // [any] 
				// gets or sets user defined metadata
				

				export let metallic = undefined // [nullable] 
				// specifies the metallic scalar of the metallic/roughness workflow.can also be used to scale the metalness values of the metallic texture.
				

				export let metallicF0Factor = undefined // [number] 
				// in metallic workflow, specifies an f0 factor to help configuring the material f0.by default the indexofrefraction is used to compute f0;this is used as a factor against the default reflectance at normal incidence to tweak it.f0 = defaultf0 * metallicf0factor * metallicreflectancecolor;f90 = metallicreflectancecolor;
				

				export let metallicReflectanceColor = undefined // [color3] 
				// in metallic workflow, specifies an f90 color to help configuring the material f90.by default the f90 is always 1;please note that this factor is also used as a factor against the default reflectance at normal incidence.f0 = defaultf0 * metallicf0factor * metallicreflectancecolorf90 = metallicreflectancecolor;
				

				export let metallicReflectanceTexture = undefined // [nullable] 
				// defines to store metallicreflectancecolor in rgb and metallicf0factor in athis is multiplied against the scalar values defined in the material.if useonlymetallicfrommetallicreflectancetexture is true, don't use the rgb channels, only a
				

				export let metallicTexture = undefined // [nullable] 
				// used to switch from specular/glossiness to metallic/roughness workflow.
				

				export let microSurface = undefined // [number] 
				// aka glossiness in other nomenclature.
				

				export let microSurfaceTexture = undefined // [nullable] 
				// used to enable roughness/glossiness fetch from a separate channel depending on the current mode.gray scale represents roughness in metallic mode and glossiness in specular mode.
				

				export let onCompiled = undefined // [nullable] 
				// callback triggered when the material is compiled
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the material is disposed
				

				export let onError = undefined // [nullable] 
				// callback triggered when an error occurs
				

				export let opacityTexture = undefined // [nullable] 
				// stores the alpha values in a texture. use luminance if texture.getalphafromrgb is true.
				

				export let parallaxScaleBias = undefined // [number] 
				// controls the scale bias of the parallax mode.
				

				export let pluginManager = undefined // [materialpluginmanager] 
				// plugin manager for this material
				

				export let pointSize = undefined // [number] 
				// stores the size of points
				

				export let prePassConfiguration = undefined // [prepassconfiguration] 
				// defines additional prepass parameters for the material.
				

				export let reflectanceTexture = undefined // [nullable] 
				// defines to store reflectancecolor in rgbthis is multiplied against the scalar values defined in the material.if both reflectancetexture and metallicreflectancetexture textures are provided and useonlymetallicfrommetallicreflectancetextureis false, metallicreflectancetexture takes priority and reflectancetexture is not used
				

				export let reflectionColor = undefined // [color3] 
				// the color reflected from the material.
				

				export let reflectionTexture = undefined // [nullable] 
				// stores the reflection values in a texture.
				

				export let reflectivityColor = undefined // [color3] 
				// aka specular color in other nomenclature.
				

				export let reflectivityTexture = undefined // [nullable] 
				// aka specular texture in other nomenclature.
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let roughness = undefined // [nullable] 
				// specifies the roughness scalar of the metallic/roughness workflow.can also be used to scale the roughness values of the metallic texture.
				

				export let separateCullingPass = undefined // [boolean] 
				// specifies if there should be a separate pass for culling
				

				export let shadowDepthWrapper = undefined // [nullable] 
				// custom shadow depth material to use for shadow rendering instead of the in-built one
				

				export let sheen = undefined // [pbrsheenconfiguration] 
				// defines the sheen parameters for the material.
				

				export let sideOrientation = undefined // [number] 
				// stores the value for side orientation
				

				export let specularIntensity = undefined // [number] 
				// this is a special control allowing the reduction of the specular highlights coming from thefour lights of the scene. those highlights may not be needed in full environment lighting.
				

				export let state = undefined // [string] 
				// the state of the material
				

				export let stencil = undefined // [materialstencilstate] 
				// gives access to the stencil properties of the material
				

				export let subSurface = undefined // [pbrsubsurfaceconfiguration] 
				// defines the subsurface parameters for the material.
				

				export let twoSidedLighting = undefined // [boolean] 
				// if sets to true and backfaceculling is false, normals will be flipped on the backside.
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the material
				

				export let unlit = undefined // [boolean] 
				// if set to true, no lighting calculations will be applied.
				

				export let useAlphaFresnel = undefined // [boolean] 
				// a fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.and/or occlude the blended part. (alpha is converted to gamma to compute the fresnel)
				

				export let useAlphaFromAlbedoTexture = undefined // [boolean] 
				// specifies that the alpha is coming form the albedo channel alpha channel for alpha blending.
				

				export let useAmbientInGrayScale = undefined // [boolean] 
				// specifies if the ambient texture contains the ambient occlusion information in its red channel only.
				

				export let useAmbientOcclusionFromMetallicTextureRed = undefined // [boolean] 
				// specifies if the metallic texture contains the ambient occlusion information in its red channel.
				

				export let useAutoMicroSurfaceFromReflectivityMap = undefined // [boolean] 
				// in case the reflectivity map does not contain the microsurface information in its alpha channel,the material will try to infer what glossiness each pixel should be.
				

				export let useHorizonOcclusion = undefined // [boolean] 
				// this parameters will enable/disable horizon occlusion to prevent normal maps to look shiny when the normalmakes the reflect vector face the model (under horizon).
				

				export let useLightmapAsShadowmap = undefined // [boolean] 
				// if true, the light map contains occlusion information instead of lighting info.
				

				export let useLinearAlphaFresnel = undefined // [boolean] 
				// a fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.and/or occlude the blended part. (alpha stays linear to compute the fresnel)
				

				export let useMetallnessFromMetallicTextureBlue = undefined // [boolean] 
				// specifies if the metallic texture contains the metallness information in its blue channel.
				

				export let useMicroSurfaceFromReflectivityMapAlpha = undefined // [boolean] 
				// specifies if the reflectivity texture contains the glossiness information in its alpha channel.
				

				export let useObjectSpaceNormalMap = undefined // [boolean] 
				// allows using an object space normal map (instead of tangent space).
				

				export let useOnlyMetallicFromMetallicReflectanceTexture = undefined // [boolean] 
				// specifies that only the a channel from metallicreflectancetexture should be used.if false, both rgb and a channels will be used
				

				export let useParallax = undefined // [boolean] 
				// allows using the bump map in parallax mode.
				

				export let useParallaxOcclusion = undefined // [boolean] 
				// allows using the bump map in parallax occlusion mode.
				

				export let useRadianceOcclusion = undefined // [boolean] 
				// this parameters will enable/disable radiance occlusion by preventing the radiance to littoo much the area relying on ambient texture to define their ambient occlusion.
				

				export let useRadianceOverAlpha = undefined // [boolean] 
				// specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones).a car glass is a good example of that. when the street lights reflects on it you can not see what is behind.
				

				export let useRoughnessFromMetallicTextureAlpha = undefined // [boolean] 
				// specifies if the metallic texture contains the roughness information in its alpha channel.
				

				export let useRoughnessFromMetallicTextureGreen = undefined // [boolean] 
				// specifies if the metallic texture contains the roughness information in its green channel.
				

				export let useSpecularOverAlpha = undefined // [boolean] 
				// specifies that the material will keep the specular highlights over a transparent surface (only the most luminous ones).a car glass is a good example of that. when sun reflects on it you can not see what is behind.
				

				export let zOffset = undefined // [number] 
				// stores the z offset factor value
				

				export let zOffsetUnits = undefined // [number] 
				// stores the z offset units value
				

				// ================ METHODS ================

				
				export let atomicMaterialsUpdate = (...args) => instance.atomicMaterialsUpdate(...args)

				export let bind = (...args) => instance.bind(...args)

				export let bindEyePosition = (...args) => instance.bindEyePosition(...args)

				export let bindForSubMesh = (...args) => instance.bindForSubMesh(...args)

				export let bindOnlyNormalMatrix = (...args) => instance.bindOnlyNormalMatrix(...args)

				export let bindOnlyWorldMatrix = (...args) => instance.bindOnlyWorldMatrix(...args)

				export let bindView = (...args) => instance.bindView(...args)

				export let bindViewProjection = (...args) => instance.bindViewProjection(...args)

				export let buildUniformLayout = (...args) => instance.buildUniformLayout(...args)

				export let clone = (...args) => instance.clone(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let forceCompilation = (...args) => instance.forceCompilation(...args)

				export let forceCompilationAsync = (...args) => instance.forceCompilationAsync(...args)

				export let freeze = (...args) => instance.freeze(...args)

				export let getActiveTextures = (...args) => instance.getActiveTextures(...args)

				export let getAlphaTestTexture = (...args) => instance.getAlphaTestTexture(...args)

				export let getAnimatables = (...args) => instance.getAnimatables(...args)

				export let getBindedMeshes = (...args) => instance.getBindedMeshes(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getEffect = (...args) => instance.getEffect(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let hasTexture = (...args) => instance.hasTexture(...args)

				export let isMetallicWorkflow = (...args) => instance.isMetallicWorkflow(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let isReadyForSubMesh = (...args) => instance.isReadyForSubMesh(...args)

				export let markAsDirty = (...args) => instance.markAsDirty(...args)

				export let markDirty = (...args) => instance.markDirty(...args)

				export let needAlphaBlending = (...args) => instance.needAlphaBlending(...args)

				export let needAlphaBlendingForMesh = (...args) => instance.needAlphaBlendingForMesh(...args)

				export let needAlphaTesting = (...args) => instance.needAlphaTesting(...args)

				export let resetDrawCache = (...args) => instance.resetDrawCache(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setPrePassRenderer = (...args) => instance.setPrePassRenderer(...args)

				export let toString = (...args) => instance.toString(...args)

				export let unbind = (...args) => instance.unbind(...args)

				export let unfreeze = (...args) => instance.unfreeze(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PBRMaterial]`, ...args) : null

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
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (alpha != undefined) instance.alpha = alpha?.instance || alpha
				alpha = instance.alpha
				if (alphaMode != undefined) instance.alphaMode = alphaMode?.instance || alphaMode
				alphaMode = instance.alphaMode
				if (backFaceCulling != undefined) instance.backFaceCulling = backFaceCulling?.instance || backFaceCulling
				backFaceCulling = instance.backFaceCulling
				if (blockDirtyMechanism != undefined) instance.blockDirtyMechanism = blockDirtyMechanism?.instance || blockDirtyMechanism
				blockDirtyMechanism = instance.blockDirtyMechanism
				if (cameraColorCurves != undefined) instance.cameraColorCurves = cameraColorCurves?.instance || cameraColorCurves
				cameraColorCurves = instance.cameraColorCurves
				if (cameraColorCurvesEnabled != undefined) instance.cameraColorCurvesEnabled = cameraColorCurvesEnabled?.instance || cameraColorCurvesEnabled
				cameraColorCurvesEnabled = instance.cameraColorCurvesEnabled
				if (cameraColorGradingEnabled != undefined) instance.cameraColorGradingEnabled = cameraColorGradingEnabled?.instance || cameraColorGradingEnabled
				cameraColorGradingEnabled = instance.cameraColorGradingEnabled
				if (cameraColorGradingTexture != undefined) instance.cameraColorGradingTexture = cameraColorGradingTexture?.instance || cameraColorGradingTexture
				cameraColorGradingTexture = instance.cameraColorGradingTexture
				if (cameraContrast != undefined) instance.cameraContrast = cameraContrast?.instance || cameraContrast
				cameraContrast = instance.cameraContrast
				if (cameraExposure != undefined) instance.cameraExposure = cameraExposure?.instance || cameraExposure
				cameraExposure = instance.cameraExposure
				if (cameraToneMappingEnabled != undefined) instance.cameraToneMappingEnabled = cameraToneMappingEnabled?.instance || cameraToneMappingEnabled
				cameraToneMappingEnabled = instance.cameraToneMappingEnabled

				canRenderToMRT = instance.canRenderToMRT
				if (cullBackFaces != undefined) instance.cullBackFaces = cullBackFaces?.instance || cullBackFaces
				cullBackFaces = instance.cullBackFaces
				if (fillMode != undefined) instance.fillMode = fillMode?.instance || fillMode
				fillMode = instance.fillMode
				if (fogEnabled != undefined) instance.fogEnabled = fogEnabled?.instance || fogEnabled
				fogEnabled = instance.fogEnabled

				hasRenderTargetTextures = instance.hasRenderTargetTextures
				if (imageProcessingConfiguration != undefined) instance.imageProcessingConfiguration = imageProcessingConfiguration?.instance || imageProcessingConfiguration
				imageProcessingConfiguration = instance.imageProcessingConfiguration
				if (indexOfRefraction != undefined) instance.indexOfRefraction = indexOfRefraction?.instance || indexOfRefraction
				indexOfRefraction = instance.indexOfRefraction
				if (invertRefractionY != undefined) instance.invertRefractionY = invertRefractionY?.instance || invertRefractionY
				invertRefractionY = instance.invertRefractionY

				isFrozen = instance.isFrozen

				isPrePassCapable = instance.isPrePassCapable
				if (linkRefractionWithTransparency != undefined) instance.linkRefractionWithTransparency = linkRefractionWithTransparency?.instance || linkRefractionWithTransparency
				linkRefractionWithTransparency = instance.linkRefractionWithTransparency
				if (needDepthPrePass != undefined) instance.needDepthPrePass = needDepthPrePass?.instance || needDepthPrePass
				needDepthPrePass = instance.needDepthPrePass
				if (onBind != undefined) instance.onBind = onBind?.instance || onBind
				onBind = instance.onBind

				onBindObservable = instance.onBindObservable
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose

				onEffectCreatedObservable = instance.onEffectCreatedObservable

				onUnBindObservable = instance.onUnBindObservable
				if (pointsCloud != undefined) instance.pointsCloud = pointsCloud?.instance || pointsCloud
				pointsCloud = instance.pointsCloud
				if (realTimeFiltering != undefined) instance.realTimeFiltering = realTimeFiltering?.instance || realTimeFiltering
				realTimeFiltering = instance.realTimeFiltering
				if (realTimeFilteringQuality != undefined) instance.realTimeFilteringQuality = realTimeFilteringQuality?.instance || realTimeFilteringQuality
				realTimeFilteringQuality = instance.realTimeFilteringQuality
				if (refractionTexture != undefined) instance.refractionTexture = refractionTexture?.instance || refractionTexture
				refractionTexture = instance.refractionTexture
				if (transparencyMode != undefined) instance.transparencyMode = transparencyMode?.instance || transparencyMode
				transparencyMode = instance.transparencyMode
				if (useGLTFLightFalloff != undefined) instance.useGLTFLightFalloff = useGLTFLightFalloff?.instance || useGLTFLightFalloff
				useGLTFLightFalloff = instance.useGLTFLightFalloff
				if (useLogarithmicDepth != undefined) instance.useLogarithmicDepth = useLogarithmicDepth?.instance || useLogarithmicDepth
				useLogarithmicDepth = instance.useLogarithmicDepth
				if (usePhysicalLightFalloff != undefined) instance.usePhysicalLightFalloff = usePhysicalLightFalloff?.instance || usePhysicalLightFalloff
				usePhysicalLightFalloff = instance.usePhysicalLightFalloff
				if (wireframe != undefined) instance.wireframe = wireframe?.instance || wireframe
				wireframe = instance.wireframe
				if (albedoColor != undefined) instance.albedoColor = albedoColor?.instance || albedoColor
				albedoColor = instance.albedoColor
				if (albedoTexture != undefined) instance.albedoTexture = albedoTexture?.instance || albedoTexture
				albedoTexture = instance.albedoTexture
				if (allowShaderHotSwapping != undefined) instance.allowShaderHotSwapping = allowShaderHotSwapping?.instance || allowShaderHotSwapping
				allowShaderHotSwapping = instance.allowShaderHotSwapping
				if (alphaCutOff != undefined) instance.alphaCutOff = alphaCutOff?.instance || alphaCutOff
				alphaCutOff = instance.alphaCutOff
				if (ambientColor != undefined) instance.ambientColor = ambientColor?.instance || ambientColor
				ambientColor = instance.ambientColor
				if (ambientTexture != undefined) instance.ambientTexture = ambientTexture?.instance || ambientTexture
				ambientTexture = instance.ambientTexture
				if (ambientTextureImpactOnAnalyticalLights != undefined) instance.ambientTextureImpactOnAnalyticalLights = ambientTextureImpactOnAnalyticalLights?.instance || ambientTextureImpactOnAnalyticalLights
				ambientTextureImpactOnAnalyticalLights = instance.ambientTextureImpactOnAnalyticalLights
				if (ambientTextureStrength != undefined) instance.ambientTextureStrength = ambientTextureStrength?.instance || ambientTextureStrength
				ambientTextureStrength = instance.ambientTextureStrength
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (bumpTexture != undefined) instance.bumpTexture = bumpTexture?.instance || bumpTexture
				bumpTexture = instance.bumpTexture
				if (checkReadyOnEveryCall != undefined) instance.checkReadyOnEveryCall = checkReadyOnEveryCall?.instance || checkReadyOnEveryCall
				checkReadyOnEveryCall = instance.checkReadyOnEveryCall
				if (checkReadyOnlyOnce != undefined) instance.checkReadyOnlyOnce = checkReadyOnlyOnce?.instance || checkReadyOnlyOnce
				checkReadyOnlyOnce = instance.checkReadyOnlyOnce
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
				if (customShaderNameResolve != undefined) instance.customShaderNameResolve = customShaderNameResolve?.instance || customShaderNameResolve
				customShaderNameResolve = instance.customShaderNameResolve
				if (depthFunction != undefined) instance.depthFunction = depthFunction?.instance || depthFunction
				depthFunction = instance.depthFunction
				if (directIntensity != undefined) instance.directIntensity = directIntensity?.instance || directIntensity
				directIntensity = instance.directIntensity
				if (disableBumpMap != undefined) instance.disableBumpMap = disableBumpMap?.instance || disableBumpMap
				disableBumpMap = instance.disableBumpMap
				if (disableColorWrite != undefined) instance.disableColorWrite = disableColorWrite?.instance || disableColorWrite
				disableColorWrite = instance.disableColorWrite
				if (disableDepthWrite != undefined) instance.disableDepthWrite = disableDepthWrite?.instance || disableDepthWrite
				disableDepthWrite = instance.disableDepthWrite
				if (disableLighting != undefined) instance.disableLighting = disableLighting?.instance || disableLighting
				disableLighting = instance.disableLighting
				if (doNotSerialize != undefined) instance.doNotSerialize = doNotSerialize?.instance || doNotSerialize
				doNotSerialize = instance.doNotSerialize
				if (emissiveColor != undefined) instance.emissiveColor = emissiveColor?.instance || emissiveColor
				emissiveColor = instance.emissiveColor
				if (emissiveIntensity != undefined) instance.emissiveIntensity = emissiveIntensity?.instance || emissiveIntensity
				emissiveIntensity = instance.emissiveIntensity
				if (emissiveTexture != undefined) instance.emissiveTexture = emissiveTexture?.instance || emissiveTexture
				emissiveTexture = instance.emissiveTexture
				if (enableSpecularAntiAliasing != undefined) instance.enableSpecularAntiAliasing = enableSpecularAntiAliasing?.instance || enableSpecularAntiAliasing
				enableSpecularAntiAliasing = instance.enableSpecularAntiAliasing
				if (environmentBRDFTexture != undefined) instance.environmentBRDFTexture = environmentBRDFTexture?.instance || environmentBRDFTexture
				environmentBRDFTexture = instance.environmentBRDFTexture
				if (environmentIntensity != undefined) instance.environmentIntensity = environmentIntensity?.instance || environmentIntensity
				environmentIntensity = instance.environmentIntensity
				if (forceAlphaTest != undefined) instance.forceAlphaTest = forceAlphaTest?.instance || forceAlphaTest
				forceAlphaTest = instance.forceAlphaTest
				if (forceDepthWrite != undefined) instance.forceDepthWrite = forceDepthWrite?.instance || forceDepthWrite
				forceDepthWrite = instance.forceDepthWrite
				if (forceIrradianceInFragment != undefined) instance.forceIrradianceInFragment = forceIrradianceInFragment?.instance || forceIrradianceInFragment
				forceIrradianceInFragment = instance.forceIrradianceInFragment
				if (forceNormalForward != undefined) instance.forceNormalForward = forceNormalForward?.instance || forceNormalForward
				forceNormalForward = instance.forceNormalForward
				if (getRenderTargetTextures != undefined) instance.getRenderTargetTextures = getRenderTargetTextures?.instance || getRenderTargetTextures
				getRenderTargetTextures = instance.getRenderTargetTextures
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (invertNormalMapX != undefined) instance.invertNormalMapX = invertNormalMapX?.instance || invertNormalMapX
				invertNormalMapX = instance.invertNormalMapX
				if (invertNormalMapY != undefined) instance.invertNormalMapY = invertNormalMapY?.instance || invertNormalMapY
				invertNormalMapY = instance.invertNormalMapY
				if (lightmapTexture != undefined) instance.lightmapTexture = lightmapTexture?.instance || lightmapTexture
				lightmapTexture = instance.lightmapTexture
				if (maxSimultaneousLights != undefined) instance.maxSimultaneousLights = maxSimultaneousLights?.instance || maxSimultaneousLights
				maxSimultaneousLights = instance.maxSimultaneousLights
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (metallic != undefined) instance.metallic = metallic?.instance || metallic
				metallic = instance.metallic
				if (metallicF0Factor != undefined) instance.metallicF0Factor = metallicF0Factor?.instance || metallicF0Factor
				metallicF0Factor = instance.metallicF0Factor
				if (metallicReflectanceColor != undefined) instance.metallicReflectanceColor = metallicReflectanceColor?.instance || metallicReflectanceColor
				metallicReflectanceColor = instance.metallicReflectanceColor
				if (metallicReflectanceTexture != undefined) instance.metallicReflectanceTexture = metallicReflectanceTexture?.instance || metallicReflectanceTexture
				metallicReflectanceTexture = instance.metallicReflectanceTexture
				if (metallicTexture != undefined) instance.metallicTexture = metallicTexture?.instance || metallicTexture
				metallicTexture = instance.metallicTexture
				if (microSurface != undefined) instance.microSurface = microSurface?.instance || microSurface
				microSurface = instance.microSurface
				if (microSurfaceTexture != undefined) instance.microSurfaceTexture = microSurfaceTexture?.instance || microSurfaceTexture
				microSurfaceTexture = instance.microSurfaceTexture
				if (onCompiled != undefined) instance.onCompiled = onCompiled?.instance || onCompiled
				onCompiled = instance.onCompiled
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onError != undefined) instance.onError = onError?.instance || onError
				onError = instance.onError
				if (opacityTexture != undefined) instance.opacityTexture = opacityTexture?.instance || opacityTexture
				opacityTexture = instance.opacityTexture
				if (parallaxScaleBias != undefined) instance.parallaxScaleBias = parallaxScaleBias?.instance || parallaxScaleBias
				parallaxScaleBias = instance.parallaxScaleBias
				if (pluginManager != undefined) instance.pluginManager = pluginManager?.instance || pluginManager
				pluginManager = instance.pluginManager
				if (pointSize != undefined) instance.pointSize = pointSize?.instance || pointSize
				pointSize = instance.pointSize
				if (reflectanceTexture != undefined) instance.reflectanceTexture = reflectanceTexture?.instance || reflectanceTexture
				reflectanceTexture = instance.reflectanceTexture
				if (reflectionColor != undefined) instance.reflectionColor = reflectionColor?.instance || reflectionColor
				reflectionColor = instance.reflectionColor
				if (reflectionTexture != undefined) instance.reflectionTexture = reflectionTexture?.instance || reflectionTexture
				reflectionTexture = instance.reflectionTexture
				if (reflectivityColor != undefined) instance.reflectivityColor = reflectivityColor?.instance || reflectivityColor
				reflectivityColor = instance.reflectivityColor
				if (reflectivityTexture != undefined) instance.reflectivityTexture = reflectivityTexture?.instance || reflectivityTexture
				reflectivityTexture = instance.reflectivityTexture
				if (reservedDataStore != undefined) instance.reservedDataStore = reservedDataStore?.instance || reservedDataStore
				reservedDataStore = instance.reservedDataStore
				if (roughness != undefined) instance.roughness = roughness?.instance || roughness
				roughness = instance.roughness
				if (separateCullingPass != undefined) instance.separateCullingPass = separateCullingPass?.instance || separateCullingPass
				separateCullingPass = instance.separateCullingPass
				if (shadowDepthWrapper != undefined) instance.shadowDepthWrapper = shadowDepthWrapper?.instance || shadowDepthWrapper
				shadowDepthWrapper = instance.shadowDepthWrapper
				if (sideOrientation != undefined) instance.sideOrientation = sideOrientation?.instance || sideOrientation
				sideOrientation = instance.sideOrientation
				if (specularIntensity != undefined) instance.specularIntensity = specularIntensity?.instance || specularIntensity
				specularIntensity = instance.specularIntensity
				if (state != undefined) instance.state = state?.instance || state
				state = instance.state
				if (twoSidedLighting != undefined) instance.twoSidedLighting = twoSidedLighting?.instance || twoSidedLighting
				twoSidedLighting = instance.twoSidedLighting
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (unlit != undefined) instance.unlit = unlit?.instance || unlit
				unlit = instance.unlit
				if (useAlphaFresnel != undefined) instance.useAlphaFresnel = useAlphaFresnel?.instance || useAlphaFresnel
				useAlphaFresnel = instance.useAlphaFresnel
				if (useAlphaFromAlbedoTexture != undefined) instance.useAlphaFromAlbedoTexture = useAlphaFromAlbedoTexture?.instance || useAlphaFromAlbedoTexture
				useAlphaFromAlbedoTexture = instance.useAlphaFromAlbedoTexture
				if (useAmbientInGrayScale != undefined) instance.useAmbientInGrayScale = useAmbientInGrayScale?.instance || useAmbientInGrayScale
				useAmbientInGrayScale = instance.useAmbientInGrayScale
				if (useAmbientOcclusionFromMetallicTextureRed != undefined) instance.useAmbientOcclusionFromMetallicTextureRed = useAmbientOcclusionFromMetallicTextureRed?.instance || useAmbientOcclusionFromMetallicTextureRed
				useAmbientOcclusionFromMetallicTextureRed = instance.useAmbientOcclusionFromMetallicTextureRed
				if (useAutoMicroSurfaceFromReflectivityMap != undefined) instance.useAutoMicroSurfaceFromReflectivityMap = useAutoMicroSurfaceFromReflectivityMap?.instance || useAutoMicroSurfaceFromReflectivityMap
				useAutoMicroSurfaceFromReflectivityMap = instance.useAutoMicroSurfaceFromReflectivityMap
				if (useHorizonOcclusion != undefined) instance.useHorizonOcclusion = useHorizonOcclusion?.instance || useHorizonOcclusion
				useHorizonOcclusion = instance.useHorizonOcclusion
				if (useLightmapAsShadowmap != undefined) instance.useLightmapAsShadowmap = useLightmapAsShadowmap?.instance || useLightmapAsShadowmap
				useLightmapAsShadowmap = instance.useLightmapAsShadowmap
				if (useLinearAlphaFresnel != undefined) instance.useLinearAlphaFresnel = useLinearAlphaFresnel?.instance || useLinearAlphaFresnel
				useLinearAlphaFresnel = instance.useLinearAlphaFresnel
				if (useMetallnessFromMetallicTextureBlue != undefined) instance.useMetallnessFromMetallicTextureBlue = useMetallnessFromMetallicTextureBlue?.instance || useMetallnessFromMetallicTextureBlue
				useMetallnessFromMetallicTextureBlue = instance.useMetallnessFromMetallicTextureBlue
				if (useMicroSurfaceFromReflectivityMapAlpha != undefined) instance.useMicroSurfaceFromReflectivityMapAlpha = useMicroSurfaceFromReflectivityMapAlpha?.instance || useMicroSurfaceFromReflectivityMapAlpha
				useMicroSurfaceFromReflectivityMapAlpha = instance.useMicroSurfaceFromReflectivityMapAlpha
				if (useObjectSpaceNormalMap != undefined) instance.useObjectSpaceNormalMap = useObjectSpaceNormalMap?.instance || useObjectSpaceNormalMap
				useObjectSpaceNormalMap = instance.useObjectSpaceNormalMap
				if (useOnlyMetallicFromMetallicReflectanceTexture != undefined) instance.useOnlyMetallicFromMetallicReflectanceTexture = useOnlyMetallicFromMetallicReflectanceTexture?.instance || useOnlyMetallicFromMetallicReflectanceTexture
				useOnlyMetallicFromMetallicReflectanceTexture = instance.useOnlyMetallicFromMetallicReflectanceTexture
				if (useParallax != undefined) instance.useParallax = useParallax?.instance || useParallax
				useParallax = instance.useParallax
				if (useParallaxOcclusion != undefined) instance.useParallaxOcclusion = useParallaxOcclusion?.instance || useParallaxOcclusion
				useParallaxOcclusion = instance.useParallaxOcclusion
				if (useRadianceOcclusion != undefined) instance.useRadianceOcclusion = useRadianceOcclusion?.instance || useRadianceOcclusion
				useRadianceOcclusion = instance.useRadianceOcclusion
				if (useRadianceOverAlpha != undefined) instance.useRadianceOverAlpha = useRadianceOverAlpha?.instance || useRadianceOverAlpha
				useRadianceOverAlpha = instance.useRadianceOverAlpha
				if (useRoughnessFromMetallicTextureAlpha != undefined) instance.useRoughnessFromMetallicTextureAlpha = useRoughnessFromMetallicTextureAlpha?.instance || useRoughnessFromMetallicTextureAlpha
				useRoughnessFromMetallicTextureAlpha = instance.useRoughnessFromMetallicTextureAlpha
				if (useRoughnessFromMetallicTextureGreen != undefined) instance.useRoughnessFromMetallicTextureGreen = useRoughnessFromMetallicTextureGreen?.instance || useRoughnessFromMetallicTextureGreen
				useRoughnessFromMetallicTextureGreen = instance.useRoughnessFromMetallicTextureGreen
				if (useSpecularOverAlpha != undefined) instance.useSpecularOverAlpha = useSpecularOverAlpha?.instance || useSpecularOverAlpha
				useSpecularOverAlpha = instance.useSpecularOverAlpha
				if (zOffset != undefined) instance.zOffset = zOffset?.instance || zOffset
				zOffset = instance.zOffset
				if (zOffsetUnits != undefined) instance.zOffsetUnits = zOffsetUnits?.instance || zOffsetUnits
				zOffsetUnits = instance.zOffsetUnits

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

			