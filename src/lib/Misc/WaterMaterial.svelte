
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
					renderTargetSize   
					allowShaderHotSwapping  
					animations  
					bumpAffectsReflection  
					bumpHeight  
					bumpSuperimpose  
					bumpTexture  
					checkReadyOnEveryCall  
					checkReadyOnlyOnce  
					clipPlane  
					clipPlane2  
					clipPlane3  
					clipPlane4  
					clipPlane5  
					clipPlane6  
					colorBlendFactor  
					colorBlendFactor2  
					customShaderNameResolve  
					depthFunction  
					diffuseColor  
					disableClipPlane  
					disableColorWrite  
					disableDepthWrite  
					disableLighting  
					doNotSerialize  
					forceDepthWrite  
					fresnelSeparate  
					getRenderTargetTextures  
					id  
					inspectableCustomProperties  
					maxSimultaneousLights  
					metadata  
					onCompiled  
					onDisposeObservable  
					onError  
					pluginManager  
					pointSize  
					reservedDataStore  
					separateCullingPass  
					shadowDepthWrapper  
					sideOrientation  
					specularColor  
					specularPower  
					state  
					stencil (readonly) 
					uniqueId  
					waterColor  
					waterColor2  
					waveCount  
					waveHeight  
					waveLength  
					waveSpeed  
					windDirection  
					windForce  
					zOffset  
					zOffsetUnits  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// 
				

				export let scene = undefined // [scene] 
				// 
				

				export let renderTargetSize = undefined // [vector2] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WaterMaterial(name,scene,renderTargetSize) : {}

				// ================ ACCESSORS ================

				
				export let alpha = undefined // [number] 
				// 
				

				export let alphaMode = undefined // [number] 
				// 
				

				export let backFaceCulling = undefined // [boolean] 
				// 
				

				export let blockDirtyMechanism = undefined // [boolean] 
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
				

				export let reflectionTexture = undefined // [nullable] 
				// 
				

				export let refractionTexture = undefined // [nullable] 
				// 
				

				export let renderTargetsEnabled = undefined // [boolean] 
				// 
				

				export let transparencyMode = undefined // [nullable] 
				// 
				

				export let useLogarithmicDepth = undefined // [boolean] 
				// 
				

				export let wireframe = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let allowShaderHotSwapping = undefined // [boolean] 
				// gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.this means that the material can keep using a previous shader while a new one is being compiled.this is mostly used when shader parallel compilation is supported (true by default)
				

				export let animations = undefined // [nullable] 
				// stores the animations for the material
				

				export let bumpAffectsReflection = undefined // [boolean] 
				// 
				

				export let bumpHeight = undefined // [number] 
				// defines the bump height related to the bump map.
				

				export let bumpSuperimpose = undefined // [boolean] 
				// 
				

				export let bumpTexture = undefined // [basetexture] 
				// 
				

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
				

				export let colorBlendFactor = undefined // [number] 
				// defines the blend factor related to the water color.
				

				export let colorBlendFactor2 = undefined // [number] 
				// defines the blend factor related to the water color (reflection, far).
				

				export let customShaderNameResolve = undefined // [reflection] 
				// 
				

				export let depthFunction = undefined // [number] 
				// specifies the depth function that should be used. 0 means the default engine function
				

				export let diffuseColor = undefined // [color3] 
				// 
				

				export let disableClipPlane = undefined // [boolean] 
				// sets or gets whether or not automatic clipping should be enabled or not. setting to true will save performances andwill avoid calculating useless pixels in the pixel shader of the water material.
				

				export let disableColorWrite = undefined // [boolean] 
				// specifies if color writing should be disabled
				

				export let disableDepthWrite = undefined // [boolean] 
				// specifies if depth writing should be disabled
				

				export let disableLighting = undefined // [boolean] 
				// 
				

				export let doNotSerialize = undefined // [boolean] 
				// specifies if the material should be serialized
				

				export let forceDepthWrite = undefined // [boolean] 
				// specifies if depth writing should be forced
				

				export let fresnelSeparate = undefined // [boolean] 
				// 
				

				export let getRenderTargetTextures = undefined // [nullable] 
				// callback triggered to get the render target textures
				

				export let id = undefined // [string] 
				// the id of the material
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let maxSimultaneousLights = undefined // [number] 
				// 
				

				export let metadata = undefined // [any] 
				// gets or sets user defined metadata
				

				export let onCompiled = undefined // [nullable] 
				// callback triggered when the material is compiled
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the material is disposed
				

				export let onError = undefined // [nullable] 
				// callback triggered when an error occurs
				

				export let pluginManager = undefined // [materialpluginmanager] 
				// plugin manager for this material
				

				export let pointSize = undefined // [number] 
				// stores the size of points
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let separateCullingPass = undefined // [boolean] 
				// specifies if there should be a separate pass for culling
				

				export let shadowDepthWrapper = undefined // [nullable] 
				// custom shadow depth material to use for shadow rendering instead of the in-built one
				

				export let sideOrientation = undefined // [number] 
				// stores the value for side orientation
				

				export let specularColor = undefined // [color3] 
				// 
				

				export let specularPower = undefined // [number] 
				// 
				

				export let state = undefined // [string] 
				// the state of the material
				

				export let stencil = undefined // [materialstencilstate] 
				// gives access to the stencil properties of the material
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the material
				

				export let waterColor = undefined // [color3] 
				// defines the water color blended with the refraction (near).
				

				export let waterColor2 = undefined // [color3] 
				// defines the water color blended with the reflection (far).
				

				export let waveCount = undefined // [number] 
				// defines the number of times waves are repeated. this is typically used to adjust waves count according to the ground's size where the material is applied on.
				

				export let waveHeight = undefined // [number] 
				// defines the height of the waves.
				

				export let waveLength = undefined // [number] 
				// defines the maximum length of a wave.
				

				export let waveSpeed = undefined // [number] 
				// defines the waves speed.
				

				export let windDirection = undefined // [vector2] 
				// defines the direction of the wind in the plane (x, z).
				

				export let windForce = undefined // [number] 
				// defines the wind force.
				

				export let zOffset = undefined // [number] 
				// stores the z offset factor value
				

				export let zOffsetUnits = undefined // [number] 
				// stores the z offset units value
				

				// ================ METHODS ================

				
				export let addToRenderList = (...args) => instance.addToRenderList(...args)

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

				export let enableRenderTargets = (...args) => instance.enableRenderTargets(...args)

				export let forceCompilation = (...args) => instance.forceCompilation(...args)

				export let forceCompilationAsync = (...args) => instance.forceCompilationAsync(...args)

				export let freeze = (...args) => instance.freeze(...args)

				export let getActiveTextures = (...args) => instance.getActiveTextures(...args)

				export let getAlphaTestTexture = (...args) => instance.getAlphaTestTexture(...args)

				export let getAnimatables = (...args) => instance.getAnimatables(...args)

				export let getBindedMeshes = (...args) => instance.getBindedMeshes(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getEffect = (...args) => instance.getEffect(...args)

				export let getRenderList = (...args) => instance.getRenderList(...args)

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

				export let CreateDefaultMesh = (...args) => instance.CreateDefaultMesh(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WaterMaterial]`, ...args) : null

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
				if (renderTargetSize != undefined) instance.renderTargetSize = renderTargetSize?.instance || renderTargetSize
				renderTargetSize = instance.renderTargetSize
				if (alpha != undefined) instance.alpha = alpha?.instance || alpha
				alpha = instance.alpha
				if (alphaMode != undefined) instance.alphaMode = alphaMode?.instance || alphaMode
				alphaMode = instance.alphaMode
				if (backFaceCulling != undefined) instance.backFaceCulling = backFaceCulling?.instance || backFaceCulling
				backFaceCulling = instance.backFaceCulling
				if (blockDirtyMechanism != undefined) instance.blockDirtyMechanism = blockDirtyMechanism?.instance || blockDirtyMechanism
				blockDirtyMechanism = instance.blockDirtyMechanism

				canRenderToMRT = instance.canRenderToMRT
				if (cullBackFaces != undefined) instance.cullBackFaces = cullBackFaces?.instance || cullBackFaces
				cullBackFaces = instance.cullBackFaces
				if (fillMode != undefined) instance.fillMode = fillMode?.instance || fillMode
				fillMode = instance.fillMode
				if (fogEnabled != undefined) instance.fogEnabled = fogEnabled?.instance || fogEnabled
				fogEnabled = instance.fogEnabled

				hasRenderTargetTextures = instance.hasRenderTargetTextures

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

				reflectionTexture = instance.reflectionTexture

				refractionTexture = instance.refractionTexture

				renderTargetsEnabled = instance.renderTargetsEnabled
				if (transparencyMode != undefined) instance.transparencyMode = transparencyMode?.instance || transparencyMode
				transparencyMode = instance.transparencyMode
				if (useLogarithmicDepth != undefined) instance.useLogarithmicDepth = useLogarithmicDepth?.instance || useLogarithmicDepth
				useLogarithmicDepth = instance.useLogarithmicDepth
				if (wireframe != undefined) instance.wireframe = wireframe?.instance || wireframe
				wireframe = instance.wireframe
				if (allowShaderHotSwapping != undefined) instance.allowShaderHotSwapping = allowShaderHotSwapping?.instance || allowShaderHotSwapping
				allowShaderHotSwapping = instance.allowShaderHotSwapping
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (bumpAffectsReflection != undefined) instance.bumpAffectsReflection = bumpAffectsReflection?.instance || bumpAffectsReflection
				bumpAffectsReflection = instance.bumpAffectsReflection
				if (bumpHeight != undefined) instance.bumpHeight = bumpHeight?.instance || bumpHeight
				bumpHeight = instance.bumpHeight
				if (bumpSuperimpose != undefined) instance.bumpSuperimpose = bumpSuperimpose?.instance || bumpSuperimpose
				bumpSuperimpose = instance.bumpSuperimpose
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
				if (colorBlendFactor != undefined) instance.colorBlendFactor = colorBlendFactor?.instance || colorBlendFactor
				colorBlendFactor = instance.colorBlendFactor
				if (colorBlendFactor2 != undefined) instance.colorBlendFactor2 = colorBlendFactor2?.instance || colorBlendFactor2
				colorBlendFactor2 = instance.colorBlendFactor2
				if (customShaderNameResolve != undefined) instance.customShaderNameResolve = customShaderNameResolve?.instance || customShaderNameResolve
				customShaderNameResolve = instance.customShaderNameResolve
				if (depthFunction != undefined) instance.depthFunction = depthFunction?.instance || depthFunction
				depthFunction = instance.depthFunction
				if (diffuseColor != undefined) instance.diffuseColor = diffuseColor?.instance || diffuseColor
				diffuseColor = instance.diffuseColor
				if (disableClipPlane != undefined) instance.disableClipPlane = disableClipPlane?.instance || disableClipPlane
				disableClipPlane = instance.disableClipPlane
				if (disableColorWrite != undefined) instance.disableColorWrite = disableColorWrite?.instance || disableColorWrite
				disableColorWrite = instance.disableColorWrite
				if (disableDepthWrite != undefined) instance.disableDepthWrite = disableDepthWrite?.instance || disableDepthWrite
				disableDepthWrite = instance.disableDepthWrite
				if (disableLighting != undefined) instance.disableLighting = disableLighting?.instance || disableLighting
				disableLighting = instance.disableLighting
				if (doNotSerialize != undefined) instance.doNotSerialize = doNotSerialize?.instance || doNotSerialize
				doNotSerialize = instance.doNotSerialize
				if (forceDepthWrite != undefined) instance.forceDepthWrite = forceDepthWrite?.instance || forceDepthWrite
				forceDepthWrite = instance.forceDepthWrite
				if (fresnelSeparate != undefined) instance.fresnelSeparate = fresnelSeparate?.instance || fresnelSeparate
				fresnelSeparate = instance.fresnelSeparate
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
				if (pluginManager != undefined) instance.pluginManager = pluginManager?.instance || pluginManager
				pluginManager = instance.pluginManager
				if (pointSize != undefined) instance.pointSize = pointSize?.instance || pointSize
				pointSize = instance.pointSize
				if (reservedDataStore != undefined) instance.reservedDataStore = reservedDataStore?.instance || reservedDataStore
				reservedDataStore = instance.reservedDataStore
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
				if (state != undefined) instance.state = state?.instance || state
				state = instance.state
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (waterColor != undefined) instance.waterColor = waterColor?.instance || waterColor
				waterColor = instance.waterColor
				if (waterColor2 != undefined) instance.waterColor2 = waterColor2?.instance || waterColor2
				waterColor2 = instance.waterColor2
				if (waveCount != undefined) instance.waveCount = waveCount?.instance || waveCount
				waveCount = instance.waveCount
				if (waveHeight != undefined) instance.waveHeight = waveHeight?.instance || waveHeight
				waveHeight = instance.waveHeight
				if (waveLength != undefined) instance.waveLength = waveLength?.instance || waveLength
				waveLength = instance.waveLength
				if (waveSpeed != undefined) instance.waveSpeed = waveSpeed?.instance || waveSpeed
				waveSpeed = instance.waveSpeed
				if (windDirection != undefined) instance.windDirection = windDirection?.instance || windDirection
				windDirection = instance.windDirection
				if (windForce != undefined) instance.windForce = windForce?.instance || windForce
				windForce = instance.windForce
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

			