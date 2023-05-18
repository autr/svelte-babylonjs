
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
					CustomParts  
					FragmentShader  
					VertexShader  
					_createdShaderName  
					_customAttributes  
					_customUniform  
					_isCreatedShader  
					_newSamplerInstances  
					_newUniformInstances  
					_newUniforms  
					allowShaderHotSwapping  
					alphaCutOff  
					ambientColor  
					ambientTexture  
					animations  
					bumpTexture  
					checkReadyOnEveryCall  
					checkReadyOnlyOnce  
					clipPlane  
					clipPlane2  
					clipPlane3  
					clipPlane4  
					clipPlane5  
					clipPlane6  
					customShaderNameResolve  
					depthFunction  
					detailMap (readonly) 
					diffuseColor  
					diffuseFresnelParameters  
					diffuseTexture  
					disableColorWrite  
					disableDepthWrite  
					disableLighting  
					doNotSerialize  
					emissiveColor  
					emissiveFresnelParameters  
					emissiveTexture  
					forceDepthWrite  
					getRenderTargetTextures  
					id  
					indexOfRefraction  
					inspectableCustomProperties  
					invertNormalMapX  
					invertNormalMapY  
					invertRefractionY  
					lightmapTexture  
					linkEmissiveWithDiffuse  
					maxSimultaneousLights  
					metadata  
					onCompiled  
					onDisposeObservable  
					onError  
					opacityFresnelParameters  
					opacityTexture  
					parallaxScaleBias  
					pluginManager  
					pointSize  
					prePassConfiguration (readonly) 
					reflectionFresnelParameters  
					reflectionTexture  
					refractionFresnelParameters  
					refractionTexture  
					reservedDataStore  
					roughness  
					separateCullingPass  
					shadowDepthWrapper  
					sideOrientation  
					specularColor  
					specularPower  
					specularTexture  
					state  
					stencil (readonly) 
					twoSidedLighting  
					uniqueId  
					useAlphaFromDiffuseTexture  
					useEmissiveAsIllumination  
					useGlossinessFromSpecularMapAlpha  
					useLightmapAsShadowmap  
					useObjectSpaceNormalMap  
					useParallax  
					useParallaxOcclusion  
					useReflectionFresnelFromSpecular  
					useReflectionOverAlpha  
					useSpecularOverAlpha  
					zOffset  
					zOffsetUnits  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// 
				

				export let scene = undefined // [scene] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.CustomMaterial(name,scene) : {}

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
				

				export let isFrozen = undefined // [boolean] 
				// 
				

				export let isPrePassCapable = undefined // [boolean] 
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
				

				export let transparencyMode = undefined // [nullable] 
				// 
				

				export let useLogarithmicDepth = undefined // [boolean] 
				// 
				

				export let wireframe = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let CustomParts = undefined // [shaderspecialparts] 
				// 
				

				export let FragmentShader = undefined // [string] 
				// 
				

				export let VertexShader = undefined // [string] 
				// 
				

				export let _createdShaderName = undefined // [string] 
				// 
				

				export let _customAttributes = undefined // [array] 
				// 
				

				export let _customUniform = undefined // [array] 
				// 
				

				export let _isCreatedShader = undefined // [boolean] 
				// 
				

				export let _newSamplerInstances = undefined // [reflection] 
				// 
				

				export let _newUniformInstances = undefined // [reflection] 
				// 
				

				export let _newUniforms = undefined // [array] 
				// 
				

				export let allowShaderHotSwapping = undefined // [boolean] 
				// gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.this means that the material can keep using a previous shader while a new one is being compiled.this is mostly used when shader parallel compilation is supported (true by default)
				

				export let alphaCutOff = undefined // [number] 
				// defines the alpha limits in alpha test mode.
				

				export let ambientColor = undefined // [color3] 
				// the color of the material lit by the environmental background lighting.
				

				export let ambientTexture = undefined // [nullable] 
				// aka occlusion texture in other nomenclature, it helps adding baked shadows into your material.
				

				export let animations = undefined // [nullable] 
				// stores the animations for the material
				

				export let bumpTexture = undefined // [nullable] 
				// bump mapping is a technique to simulate bump and dents on a rendered surface.these are made by creating a normal map from an image. the means to do this can be found on the web, a search for 'normal map generator' will bring up free and paid for methods of doing this.
				

				export let checkReadyOnEveryCall = undefined // [boolean] 
				// specifies if the ready state should be checked on each call
				

				export let checkReadyOnlyOnce = undefined // [boolean] 
				// specifies if the ready state should be checked once
				

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
				

				export let diffuseColor = undefined // [color3] 
				// the basic color of the material as viewed under a light.
				

				export let diffuseFresnelParameters = undefined // [fresnelparameters] 
				// define the diffuse fresnel parameters of the material.
				

				export let diffuseTexture = undefined // [nullable] 
				// the basic texture of the material as viewed under a light.
				

				export let disableColorWrite = undefined // [boolean] 
				// specifies if color writing should be disabled
				

				export let disableDepthWrite = undefined // [boolean] 
				// specifies if depth writing should be disabled
				

				export let disableLighting = undefined // [boolean] 
				// does lights from the scene impacts this material.it can be a nice trick for performance to disable lighting on a fully emissive material.
				

				export let doNotSerialize = undefined // [boolean] 
				// specifies if the material should be serialized
				

				export let emissiveColor = undefined // [color3] 
				// define the color of the material as if self lit.this will be mixed in the final result even in the absence of light.
				

				export let emissiveFresnelParameters = undefined // [fresnelparameters] 
				// define the emissive fresnel parameters of the material.
				

				export let emissiveTexture = undefined // [nullable] 
				// define texture of the material as if self lit.this will be mixed in the final result even in the absence of light.
				

				export let forceDepthWrite = undefined // [boolean] 
				// specifies if depth writing should be forced
				

				export let getRenderTargetTextures = undefined // [nullable] 
				// callback triggered to get the render target textures
				

				export let id = undefined // [string] 
				// the id of the material
				

				export let indexOfRefraction = undefined // [number] 
				// in case of refraction, define the value of the index of refraction.
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let invertNormalMapX = undefined // [boolean] 
				// if sets to true, x component of normal map value will invert (x = 1.0 - x).
				

				export let invertNormalMapY = undefined // [boolean] 
				// if sets to true, y component of normal map value will invert (y = 1.0 - y).
				

				export let invertRefractionY = undefined // [boolean] 
				// invert the refraction texture alongside the y axis.it can be useful with procedural textures or probe for instance.
				

				export let lightmapTexture = undefined // [nullable] 
				// complex lighting can be computationally expensive to compute at runtime.to save on computation, lightmaps may be used to store calculated lighting in a texture which will be applied to a given mesh.
				

				export let linkEmissiveWithDiffuse = undefined // [boolean] 
				// if true, some kind of energy conservation will prevent the end result to be more than 1 by reducingthe emissive level when the final color is close to one.
				

				export let maxSimultaneousLights = undefined // [number] 
				// defines the maximum number of lights that can be used in the material
				

				export let metadata = undefined // [any] 
				// gets or sets user defined metadata
				

				export let onCompiled = undefined // [nullable] 
				// callback triggered when the material is compiled
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the material is disposed
				

				export let onError = undefined // [nullable] 
				// callback triggered when an error occurs
				

				export let opacityFresnelParameters = undefined // [fresnelparameters] 
				// define the opacity fresnel parameters of the material.
				

				export let opacityTexture = undefined // [nullable] 
				// define the transparency of the material from a texture.the final alpha value can be read either from the red channel (if texture.getalphafromrgb is false)or from the luminance or the current texel (if texture.getalphafromrgb is true)
				

				export let parallaxScaleBias = undefined // [number] 
				// apply a scaling factor that determine which "depth" the height map should reprensent. a value between 0.05 and 0.1 is reasonnable in parallax, you can reach 0.2 using parallax occlusion.
				

				export let pluginManager = undefined // [materialpluginmanager] 
				// plugin manager for this material
				

				export let pointSize = undefined // [number] 
				// stores the size of points
				

				export let prePassConfiguration = undefined // [prepassconfiguration] 
				// defines additional prepass parameters for the material.
				

				export let reflectionFresnelParameters = undefined // [fresnelparameters] 
				// define the reflection fresnel parameters of the material.
				

				export let reflectionTexture = undefined // [nullable] 
				// define the texture used to display the reflection.
				

				export let refractionFresnelParameters = undefined // [fresnelparameters] 
				// define the refraction fresnel parameters of the material.
				

				export let refractionTexture = undefined // [nullable] 
				// define the texture used to display the refraction.
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let roughness = undefined // [number] 
				// helps to define how blurry the reflections should appears in the material.
				

				export let separateCullingPass = undefined // [boolean] 
				// specifies if there should be a separate pass for culling
				

				export let shadowDepthWrapper = undefined // [nullable] 
				// custom shadow depth material to use for shadow rendering instead of the in-built one
				

				export let sideOrientation = undefined // [number] 
				// stores the value for side orientation
				

				export let specularColor = undefined // [color3] 
				// define how the color and intensity of the highlight given by the light in the material.
				

				export let specularPower = undefined // [number] 
				// defines how sharp are the highlights in the material.the bigger the value the sharper giving a more glossy feeling to the result.reversely, the smaller the value the blurrier giving a more rough feeling to the result.
				

				export let specularTexture = undefined // [nullable] 
				// define how the color and intensity of the highlight given by the light in the material.
				

				export let state = undefined // [string] 
				// the state of the material
				

				export let stencil = undefined // [materialstencilstate] 
				// gives access to the stencil properties of the material
				

				export let twoSidedLighting = undefined // [boolean] 
				// if sets to true and backfaceculling is false, normals will be flipped on the backside.
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the material
				

				export let useAlphaFromDiffuseTexture = undefined // [boolean] 
				// does the transparency come from the diffuse texture alpha channel.
				

				export let useEmissiveAsIllumination = undefined // [boolean] 
				// if true, the emissive value is added into the end result, otherwise it is multiplied in.
				

				export let useGlossinessFromSpecularMapAlpha = undefined // [boolean] 
				// defines if the glossiness/roughness of the material should be read from the specular map alpha channel
				

				export let useLightmapAsShadowmap = undefined // [boolean] 
				// in case of light mapping, define whether the map contains light or shadow informations.
				

				export let useObjectSpaceNormalMap = undefined // [boolean] 
				// allows using an object space normal map (instead of tangent space).
				

				export let useParallax = undefined // [boolean] 
				// is parallax enabled or not.
				

				export let useParallaxOcclusion = undefined // [boolean] 
				// is parallax occlusion enabled or not.if true, the outcome is way more realistic than traditional parallax but you can expect a performance hit that worthes consideration.
				

				export let useReflectionFresnelFromSpecular = undefined // [boolean] 
				// if true automatically deducts the fresnels values from the material specularity.
				

				export let useReflectionOverAlpha = undefined // [boolean] 
				// specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones).a car glass is a good exemple of that. when the street lights reflects on it you can not see what is behind.
				

				export let useSpecularOverAlpha = undefined // [boolean] 
				// specifies that the material will keep the specular highlights over a transparent surface (only the most luminous ones).a car glass is a good exemple of that. when sun reflects on it you can not see what is behind.
				

				export let zOffset = undefined // [number] 
				// stores the z offset factor value
				

				export let zOffsetUnits = undefined // [number] 
				// stores the z offset units value
				

				// ================ METHODS ================

				
				export let AddAttribute = (...args) => instance.AddAttribute(...args)

				export let AddUniform = (...args) => instance.AddUniform(...args)

				export let AttachAfterBind = (...args) => instance.AttachAfterBind(...args)

				export let Builder = (...args) => instance.Builder(...args)

				export let Fragment_Before_Fog = (...args) => instance.Fragment_Before_Fog(...args)

				export let Fragment_Before_FragColor = (...args) => instance.Fragment_Before_FragColor(...args)

				export let Fragment_Before_Lights = (...args) => instance.Fragment_Before_Lights(...args)

				export let Fragment_Begin = (...args) => instance.Fragment_Begin(...args)

				export let Fragment_Custom_Alpha = (...args) => instance.Fragment_Custom_Alpha(...args)

				export let Fragment_Custom_Diffuse = (...args) => instance.Fragment_Custom_Diffuse(...args)

				export let Fragment_Definitions = (...args) => instance.Fragment_Definitions(...args)

				export let Fragment_MainBegin = (...args) => instance.Fragment_MainBegin(...args)

				export let Fragment_MainEnd = (...args) => instance.Fragment_MainEnd(...args)

				export let ReviewUniform = (...args) => instance.ReviewUniform(...args)

				export let Vertex_After_WorldPosComputed = (...args) => instance.Vertex_After_WorldPosComputed(...args)

				export let Vertex_Before_NormalUpdated = (...args) => instance.Vertex_Before_NormalUpdated(...args)

				export let Vertex_Before_PositionUpdated = (...args) => instance.Vertex_Before_PositionUpdated(...args)

				export let Vertex_Begin = (...args) => instance.Vertex_Begin(...args)

				export let Vertex_Definitions = (...args) => instance.Vertex_Definitions(...args)

				export let Vertex_MainBegin = (...args) => instance.Vertex_MainBegin(...args)

				export let Vertex_MainEnd = (...args) => instance.Vertex_MainEnd(...args)

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:CustomMaterial]`, ...args) : null

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

				isFrozen = instance.isFrozen

				isPrePassCapable = instance.isPrePassCapable
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
				if (transparencyMode != undefined) instance.transparencyMode = transparencyMode?.instance || transparencyMode
				transparencyMode = instance.transparencyMode
				if (useLogarithmicDepth != undefined) instance.useLogarithmicDepth = useLogarithmicDepth?.instance || useLogarithmicDepth
				useLogarithmicDepth = instance.useLogarithmicDepth
				if (wireframe != undefined) instance.wireframe = wireframe?.instance || wireframe
				wireframe = instance.wireframe
				if (CustomParts != undefined) instance.CustomParts = CustomParts?.instance || CustomParts
				CustomParts = instance.CustomParts
				if (FragmentShader != undefined) instance.FragmentShader = FragmentShader?.instance || FragmentShader
				FragmentShader = instance.FragmentShader
				if (VertexShader != undefined) instance.VertexShader = VertexShader?.instance || VertexShader
				VertexShader = instance.VertexShader
				if (_createdShaderName != undefined) instance._createdShaderName = _createdShaderName?.instance || _createdShaderName
				_createdShaderName = instance._createdShaderName
				if (_customAttributes != undefined) instance._customAttributes = _customAttributes?.instance || _customAttributes
				_customAttributes = instance._customAttributes
				if (_customUniform != undefined) instance._customUniform = _customUniform?.instance || _customUniform
				_customUniform = instance._customUniform
				if (_isCreatedShader != undefined) instance._isCreatedShader = _isCreatedShader?.instance || _isCreatedShader
				_isCreatedShader = instance._isCreatedShader
				if (_newSamplerInstances != undefined) instance._newSamplerInstances = _newSamplerInstances?.instance || _newSamplerInstances
				_newSamplerInstances = instance._newSamplerInstances
				if (_newUniformInstances != undefined) instance._newUniformInstances = _newUniformInstances?.instance || _newUniformInstances
				_newUniformInstances = instance._newUniformInstances
				if (_newUniforms != undefined) instance._newUniforms = _newUniforms?.instance || _newUniforms
				_newUniforms = instance._newUniforms
				if (allowShaderHotSwapping != undefined) instance.allowShaderHotSwapping = allowShaderHotSwapping?.instance || allowShaderHotSwapping
				allowShaderHotSwapping = instance.allowShaderHotSwapping
				if (alphaCutOff != undefined) instance.alphaCutOff = alphaCutOff?.instance || alphaCutOff
				alphaCutOff = instance.alphaCutOff
				if (ambientColor != undefined) instance.ambientColor = ambientColor?.instance || ambientColor
				ambientColor = instance.ambientColor
				if (ambientTexture != undefined) instance.ambientTexture = ambientTexture?.instance || ambientTexture
				ambientTexture = instance.ambientTexture
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
				if (diffuseColor != undefined) instance.diffuseColor = diffuseColor?.instance || diffuseColor
				diffuseColor = instance.diffuseColor
				if (diffuseFresnelParameters != undefined) instance.diffuseFresnelParameters = diffuseFresnelParameters?.instance || diffuseFresnelParameters
				diffuseFresnelParameters = instance.diffuseFresnelParameters
				if (diffuseTexture != undefined) instance.diffuseTexture = diffuseTexture?.instance || diffuseTexture
				diffuseTexture = instance.diffuseTexture
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
				if (emissiveFresnelParameters != undefined) instance.emissiveFresnelParameters = emissiveFresnelParameters?.instance || emissiveFresnelParameters
				emissiveFresnelParameters = instance.emissiveFresnelParameters
				if (emissiveTexture != undefined) instance.emissiveTexture = emissiveTexture?.instance || emissiveTexture
				emissiveTexture = instance.emissiveTexture
				if (forceDepthWrite != undefined) instance.forceDepthWrite = forceDepthWrite?.instance || forceDepthWrite
				forceDepthWrite = instance.forceDepthWrite
				if (getRenderTargetTextures != undefined) instance.getRenderTargetTextures = getRenderTargetTextures?.instance || getRenderTargetTextures
				getRenderTargetTextures = instance.getRenderTargetTextures
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (indexOfRefraction != undefined) instance.indexOfRefraction = indexOfRefraction?.instance || indexOfRefraction
				indexOfRefraction = instance.indexOfRefraction
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (invertNormalMapX != undefined) instance.invertNormalMapX = invertNormalMapX?.instance || invertNormalMapX
				invertNormalMapX = instance.invertNormalMapX
				if (invertNormalMapY != undefined) instance.invertNormalMapY = invertNormalMapY?.instance || invertNormalMapY
				invertNormalMapY = instance.invertNormalMapY
				if (invertRefractionY != undefined) instance.invertRefractionY = invertRefractionY?.instance || invertRefractionY
				invertRefractionY = instance.invertRefractionY
				if (lightmapTexture != undefined) instance.lightmapTexture = lightmapTexture?.instance || lightmapTexture
				lightmapTexture = instance.lightmapTexture
				if (linkEmissiveWithDiffuse != undefined) instance.linkEmissiveWithDiffuse = linkEmissiveWithDiffuse?.instance || linkEmissiveWithDiffuse
				linkEmissiveWithDiffuse = instance.linkEmissiveWithDiffuse
				if (maxSimultaneousLights != undefined) instance.maxSimultaneousLights = maxSimultaneousLights?.instance || maxSimultaneousLights
				maxSimultaneousLights = instance.maxSimultaneousLights
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (onCompiled != undefined) instance.onCompiled = onCompiled?.instance || onCompiled
				onCompiled = instance.onCompiled
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onError != undefined) instance.onError = onError?.instance || onError
				onError = instance.onError
				if (opacityFresnelParameters != undefined) instance.opacityFresnelParameters = opacityFresnelParameters?.instance || opacityFresnelParameters
				opacityFresnelParameters = instance.opacityFresnelParameters
				if (opacityTexture != undefined) instance.opacityTexture = opacityTexture?.instance || opacityTexture
				opacityTexture = instance.opacityTexture
				if (parallaxScaleBias != undefined) instance.parallaxScaleBias = parallaxScaleBias?.instance || parallaxScaleBias
				parallaxScaleBias = instance.parallaxScaleBias
				if (pluginManager != undefined) instance.pluginManager = pluginManager?.instance || pluginManager
				pluginManager = instance.pluginManager
				if (pointSize != undefined) instance.pointSize = pointSize?.instance || pointSize
				pointSize = instance.pointSize
				if (reflectionFresnelParameters != undefined) instance.reflectionFresnelParameters = reflectionFresnelParameters?.instance || reflectionFresnelParameters
				reflectionFresnelParameters = instance.reflectionFresnelParameters
				if (reflectionTexture != undefined) instance.reflectionTexture = reflectionTexture?.instance || reflectionTexture
				reflectionTexture = instance.reflectionTexture
				if (refractionFresnelParameters != undefined) instance.refractionFresnelParameters = refractionFresnelParameters?.instance || refractionFresnelParameters
				refractionFresnelParameters = instance.refractionFresnelParameters
				if (refractionTexture != undefined) instance.refractionTexture = refractionTexture?.instance || refractionTexture
				refractionTexture = instance.refractionTexture
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
				if (specularColor != undefined) instance.specularColor = specularColor?.instance || specularColor
				specularColor = instance.specularColor
				if (specularPower != undefined) instance.specularPower = specularPower?.instance || specularPower
				specularPower = instance.specularPower
				if (specularTexture != undefined) instance.specularTexture = specularTexture?.instance || specularTexture
				specularTexture = instance.specularTexture
				if (state != undefined) instance.state = state?.instance || state
				state = instance.state
				if (twoSidedLighting != undefined) instance.twoSidedLighting = twoSidedLighting?.instance || twoSidedLighting
				twoSidedLighting = instance.twoSidedLighting
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (useAlphaFromDiffuseTexture != undefined) instance.useAlphaFromDiffuseTexture = useAlphaFromDiffuseTexture?.instance || useAlphaFromDiffuseTexture
				useAlphaFromDiffuseTexture = instance.useAlphaFromDiffuseTexture
				if (useEmissiveAsIllumination != undefined) instance.useEmissiveAsIllumination = useEmissiveAsIllumination?.instance || useEmissiveAsIllumination
				useEmissiveAsIllumination = instance.useEmissiveAsIllumination
				if (useGlossinessFromSpecularMapAlpha != undefined) instance.useGlossinessFromSpecularMapAlpha = useGlossinessFromSpecularMapAlpha?.instance || useGlossinessFromSpecularMapAlpha
				useGlossinessFromSpecularMapAlpha = instance.useGlossinessFromSpecularMapAlpha
				if (useLightmapAsShadowmap != undefined) instance.useLightmapAsShadowmap = useLightmapAsShadowmap?.instance || useLightmapAsShadowmap
				useLightmapAsShadowmap = instance.useLightmapAsShadowmap
				if (useObjectSpaceNormalMap != undefined) instance.useObjectSpaceNormalMap = useObjectSpaceNormalMap?.instance || useObjectSpaceNormalMap
				useObjectSpaceNormalMap = instance.useObjectSpaceNormalMap
				if (useParallax != undefined) instance.useParallax = useParallax?.instance || useParallax
				useParallax = instance.useParallax
				if (useParallaxOcclusion != undefined) instance.useParallaxOcclusion = useParallaxOcclusion?.instance || useParallaxOcclusion
				useParallaxOcclusion = instance.useParallaxOcclusion
				if (useReflectionFresnelFromSpecular != undefined) instance.useReflectionFresnelFromSpecular = useReflectionFresnelFromSpecular?.instance || useReflectionFresnelFromSpecular
				useReflectionFresnelFromSpecular = instance.useReflectionFresnelFromSpecular
				if (useReflectionOverAlpha != undefined) instance.useReflectionOverAlpha = useReflectionOverAlpha?.instance || useReflectionOverAlpha
				useReflectionOverAlpha = instance.useReflectionOverAlpha
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

			