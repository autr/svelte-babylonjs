
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
					allowShaderHotSwapping  
					animations  
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
					diffuseTexture  
					disableColorWrite  
					disableDepthWrite  
					doNotSerialize  
					enableNoise  
					forceDepthWrite  
					getRenderTargetTextures  
					id  
					inspectableCustomProperties  
					maxSimultaneousLights  
					metadata  
					onCompiled  
					onDisposeObservable  
					onError  
					opacityFresnel  
					pluginManager  
					pointSize  
					primaryColor  
					reflectionAmount  
					reflectionBlur  
					reflectionFalloffDistance  
					reflectionFresnel  
					reflectionReflectance0  
					reflectionReflectance90  
					reflectionTexture  
					reservedDataStore  
					sceneCenter  
					separateCullingPass  
					shadowDepthWrapper  
					shadowLevel  
					shadowLights  
					shadowOnly  
					sideOrientation  
					state  
					stencil (readonly) 
					switchToBGR  
					uniqueId  
					useEquirectangularFOV  
					useRGBColor  
					zOffset  
					zOffsetUnits  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// the friendly name of the material
				

				export let scene = undefined // [scene] 
				// the scene to add the material to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BackgroundMaterial(name,scene) : {}

				// ================ ACCESSORS ================

				
				export let _perceptualColor = undefined // [nullable] 
				// 
				

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
				

				export let fovMultiplier = undefined // [number] 
				// 
				

				export let hasRenderTargetTextures = undefined // [boolean] 
				// 
				

				export let imageProcessingConfiguration = undefined // [nullable] 
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
				

				export let primaryColorHighlightLevel = undefined // [number] 
				// 
				

				export let primaryColorShadowLevel = undefined // [number] 
				// 
				

				export let reflectionStandardFresnelWeight = undefined // [] 
				// 
				

				export let transparencyMode = undefined // [nullable] 
				// 
				

				export let wireframe = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let allowShaderHotSwapping = undefined // [boolean] 
				// gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.this means that the material can keep using a previous shader while a new one is being compiled.this is mostly used when shader parallel compilation is supported (true by default)
				

				export let animations = undefined // [nullable] 
				// stores the animations for the material
				

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
				

				export let diffuseTexture = undefined // [nullable] 
				// diffuse texture used in the material.should be author in a specific way for the best result (refer to the documentation).
				

				export let disableColorWrite = undefined // [boolean] 
				// specifies if color writing should be disabled
				

				export let disableDepthWrite = undefined // [boolean] 
				// specifies if depth writing should be disabled
				

				export let doNotSerialize = undefined // [boolean] 
				// specifies if the material should be serialized
				

				export let enableNoise = undefined // [boolean] 
				// this helps reducing the banding effect that could occur on the background.
				

				export let forceDepthWrite = undefined // [boolean] 
				// specifies if depth writing should be forced
				

				export let getRenderTargetTextures = undefined // [nullable] 
				// callback triggered to get the render target textures
				

				export let id = undefined // [string] 
				// the id of the material
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let maxSimultaneousLights = undefined // [number] 
				// number of simultaneous lights allowed on the material.
				

				export let metadata = undefined // [any] 
				// gets or sets user defined metadata
				

				export let onCompiled = undefined // [nullable] 
				// callback triggered when the material is compiled
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the material is disposed
				

				export let onError = undefined // [nullable] 
				// callback triggered when an error occurs
				

				export let opacityFresnel = undefined // [boolean] 
				// this helps specifying that the material is falling off to the sky box at grazing angle.this helps ensuring a nice transition when the camera goes under the ground.
				

				export let pluginManager = undefined // [materialpluginmanager] 
				// plugin manager for this material
				

				export let pointSize = undefined // [number] 
				// stores the size of points
				

				export let primaryColor = undefined // [color3] 
				// key light color (multiply against the environment texture)
				

				export let reflectionAmount = undefined // [number] 
				// this specifies the weight of the reflection against the background in case of reflection fresnel.
				

				export let reflectionBlur = undefined // [number] 
				// reflection texture level of blur.can be use to reuse an existing hdr texture and target a specific lod to prevent authoring thetexture twice.
				

				export let reflectionFalloffDistance = undefined // [number] 
				// this helps specifying the falloff radius off the reflection texture from the scenecenter.this helps adding a nice falloff effect to the reflection if used as a mirror for instance.
				

				export let reflectionFresnel = undefined // [boolean] 
				// this helps specifying that the material is falling off from diffuse to the reflection texture at grazing angle.this helps adding a mirror texture on the ground.
				

				export let reflectionReflectance0 = undefined // [number] 
				// this specifies the weight of the reflection at grazing angle.
				

				export let reflectionReflectance90 = undefined // [number] 
				// this specifies the weight of the reflection at a perpendicular point of view.
				

				export let reflectionTexture = undefined // [nullable] 
				// reflection texture used in the material.should be author in a specific way for the best result (refer to the documentation).
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let sceneCenter = undefined // [vector3] 
				// in case of opacity fresnel or reflection falloff, this is use as a scene center.it is usually zero but might be interesting to modify according to your setup.
				

				export let separateCullingPass = undefined // [boolean] 
				// specifies if there should be a separate pass for culling
				

				export let shadowDepthWrapper = undefined // [nullable] 
				// custom shadow depth material to use for shadow rendering instead of the in-built one
				

				export let shadowLevel = undefined // [number] 
				// helps adjusting the shadow to a softer level if required.0 means black shadows and 1 means no shadows.
				

				export let shadowLights = undefined // [nullable] 
				// specify the list of lights casting shadow on the material.all scene shadow lights will be included if null.
				

				export let shadowOnly = undefined // [boolean] 
				// make the material only render shadows
				

				export let sideOrientation = undefined // [number] 
				// stores the value for side orientation
				

				export let state = undefined // [string] 
				// the state of the material
				

				export let stencil = undefined // [materialstencilstate] 
				// gives access to the stencil properties of the material
				

				export let switchToBGR = undefined // [boolean] 
				// due to a bug in ios10, video tags (which are using the background material) are in bgr and not rgb.setting this flag to true (not done automatically!) will convert it back to rgb.
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the material
				

				export let useEquirectangularFOV = undefined // [boolean] 
				// enable the fov adjustment feature controlled by fovmultiplier.
				

				export let useRGBColor = undefined // [boolean] 
				// helps to directly use the maps channels instead of their level.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BackgroundMaterial]`, ...args) : null

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
				if (_perceptualColor != undefined) instance._perceptualColor = _perceptualColor?.instance || _perceptualColor
				_perceptualColor = instance._perceptualColor
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
				if (fovMultiplier != undefined) instance.fovMultiplier = fovMultiplier?.instance || fovMultiplier
				fovMultiplier = instance.fovMultiplier

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
				if (primaryColorHighlightLevel != undefined) instance.primaryColorHighlightLevel = primaryColorHighlightLevel?.instance || primaryColorHighlightLevel
				primaryColorHighlightLevel = instance.primaryColorHighlightLevel
				if (primaryColorShadowLevel != undefined) instance.primaryColorShadowLevel = primaryColorShadowLevel?.instance || primaryColorShadowLevel
				primaryColorShadowLevel = instance.primaryColorShadowLevel
				if (reflectionStandardFresnelWeight != undefined) instance.reflectionStandardFresnelWeight = reflectionStandardFresnelWeight?.instance || reflectionStandardFresnelWeight
				reflectionStandardFresnelWeight = instance.reflectionStandardFresnelWeight
				if (transparencyMode != undefined) instance.transparencyMode = transparencyMode?.instance || transparencyMode
				transparencyMode = instance.transparencyMode
				if (wireframe != undefined) instance.wireframe = wireframe?.instance || wireframe
				wireframe = instance.wireframe
				if (allowShaderHotSwapping != undefined) instance.allowShaderHotSwapping = allowShaderHotSwapping?.instance || allowShaderHotSwapping
				allowShaderHotSwapping = instance.allowShaderHotSwapping
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
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
				if (diffuseTexture != undefined) instance.diffuseTexture = diffuseTexture?.instance || diffuseTexture
				diffuseTexture = instance.diffuseTexture
				if (disableColorWrite != undefined) instance.disableColorWrite = disableColorWrite?.instance || disableColorWrite
				disableColorWrite = instance.disableColorWrite
				if (disableDepthWrite != undefined) instance.disableDepthWrite = disableDepthWrite?.instance || disableDepthWrite
				disableDepthWrite = instance.disableDepthWrite
				if (doNotSerialize != undefined) instance.doNotSerialize = doNotSerialize?.instance || doNotSerialize
				doNotSerialize = instance.doNotSerialize
				if (enableNoise != undefined) instance.enableNoise = enableNoise?.instance || enableNoise
				enableNoise = instance.enableNoise
				if (forceDepthWrite != undefined) instance.forceDepthWrite = forceDepthWrite?.instance || forceDepthWrite
				forceDepthWrite = instance.forceDepthWrite
				if (getRenderTargetTextures != undefined) instance.getRenderTargetTextures = getRenderTargetTextures?.instance || getRenderTargetTextures
				getRenderTargetTextures = instance.getRenderTargetTextures
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
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
				if (opacityFresnel != undefined) instance.opacityFresnel = opacityFresnel?.instance || opacityFresnel
				opacityFresnel = instance.opacityFresnel
				if (pluginManager != undefined) instance.pluginManager = pluginManager?.instance || pluginManager
				pluginManager = instance.pluginManager
				if (pointSize != undefined) instance.pointSize = pointSize?.instance || pointSize
				pointSize = instance.pointSize
				if (primaryColor != undefined) instance.primaryColor = primaryColor?.instance || primaryColor
				primaryColor = instance.primaryColor
				if (reflectionAmount != undefined) instance.reflectionAmount = reflectionAmount?.instance || reflectionAmount
				reflectionAmount = instance.reflectionAmount
				if (reflectionBlur != undefined) instance.reflectionBlur = reflectionBlur?.instance || reflectionBlur
				reflectionBlur = instance.reflectionBlur
				if (reflectionFalloffDistance != undefined) instance.reflectionFalloffDistance = reflectionFalloffDistance?.instance || reflectionFalloffDistance
				reflectionFalloffDistance = instance.reflectionFalloffDistance
				if (reflectionFresnel != undefined) instance.reflectionFresnel = reflectionFresnel?.instance || reflectionFresnel
				reflectionFresnel = instance.reflectionFresnel
				if (reflectionReflectance0 != undefined) instance.reflectionReflectance0 = reflectionReflectance0?.instance || reflectionReflectance0
				reflectionReflectance0 = instance.reflectionReflectance0
				if (reflectionReflectance90 != undefined) instance.reflectionReflectance90 = reflectionReflectance90?.instance || reflectionReflectance90
				reflectionReflectance90 = instance.reflectionReflectance90
				if (reflectionTexture != undefined) instance.reflectionTexture = reflectionTexture?.instance || reflectionTexture
				reflectionTexture = instance.reflectionTexture
				if (reservedDataStore != undefined) instance.reservedDataStore = reservedDataStore?.instance || reservedDataStore
				reservedDataStore = instance.reservedDataStore
				if (sceneCenter != undefined) instance.sceneCenter = sceneCenter?.instance || sceneCenter
				sceneCenter = instance.sceneCenter
				if (separateCullingPass != undefined) instance.separateCullingPass = separateCullingPass?.instance || separateCullingPass
				separateCullingPass = instance.separateCullingPass
				if (shadowDepthWrapper != undefined) instance.shadowDepthWrapper = shadowDepthWrapper?.instance || shadowDepthWrapper
				shadowDepthWrapper = instance.shadowDepthWrapper
				if (shadowLevel != undefined) instance.shadowLevel = shadowLevel?.instance || shadowLevel
				shadowLevel = instance.shadowLevel
				if (shadowLights != undefined) instance.shadowLights = shadowLights?.instance || shadowLights
				shadowLights = instance.shadowLights
				if (shadowOnly != undefined) instance.shadowOnly = shadowOnly?.instance || shadowOnly
				shadowOnly = instance.shadowOnly
				if (sideOrientation != undefined) instance.sideOrientation = sideOrientation?.instance || sideOrientation
				sideOrientation = instance.sideOrientation
				if (state != undefined) instance.state = state?.instance || state
				state = instance.state
				if (switchToBGR != undefined) instance.switchToBGR = switchToBGR?.instance || switchToBGR
				switchToBGR = instance.switchToBGR
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (useEquirectangularFOV != undefined) instance.useEquirectangularFOV = useEquirectangularFOV?.instance || useEquirectangularFOV
				useEquirectangularFOV = instance.useEquirectangularFOV
				if (useRGBColor != undefined) instance.useRGBColor = useRGBColor?.instance || useRGBColor
				useRGBColor = instance.useRGBColor
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

			