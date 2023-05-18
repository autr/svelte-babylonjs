
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
					disableColorWrite  
					disableDepthWrite  
					doNotSerialize  
					forceDepthWrite  
					getRenderTargetTextures  
					gridOffset  
					gridRatio  
					id  
					inspectableCustomProperties  
					lineColor  
					mainColor  
					majorUnitFrequency  
					metadata  
					minorUnitVisibility  
					onCompiled  
					onDisposeObservable  
					onError  
					opacity  
					opacityTexture  
					pluginManager  
					pointSize  
					preMultiplyAlpha  
					reservedDataStore  
					separateCullingPass  
					shadowDepthWrapper  
					sideOrientation  
					state  
					stencil (readonly) 
					uniqueId  
					useMaxLine  
					zOffset  
					zOffsetUnits  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// the name given to the material in order to identify it afterwards.
				

				export let scene = undefined // [scene] 
				// the scene the material is used in.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.GridMaterial(name,scene) : {}

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
				

				export let disableColorWrite = undefined // [boolean] 
				// specifies if color writing should be disabled
				

				export let disableDepthWrite = undefined // [boolean] 
				// specifies if depth writing should be disabled
				

				export let doNotSerialize = undefined // [boolean] 
				// specifies if the material should be serialized
				

				export let forceDepthWrite = undefined // [boolean] 
				// specifies if depth writing should be forced
				

				export let getRenderTargetTextures = undefined // [nullable] 
				// callback triggered to get the render target textures
				

				export let gridOffset = undefined // [vector3] 
				// allows setting an offset for the grid lines.
				

				export let gridRatio = undefined // [number] 
				// the scale of the grid compared to unit.
				

				export let id = undefined // [string] 
				// the id of the material
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let lineColor = undefined // [color3] 
				// color of the grid lines.
				

				export let mainColor = undefined // [color3] 
				// main color of the grid (e.g. between lines)
				

				export let majorUnitFrequency = undefined // [number] 
				// the frequency of thicker lines.
				

				export let metadata = undefined // [any] 
				// gets or sets user defined metadata
				

				export let minorUnitVisibility = undefined // [number] 
				// the visibility of minor units in the grid.
				

				export let onCompiled = undefined // [nullable] 
				// callback triggered when the material is compiled
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the material is disposed
				

				export let onError = undefined // [nullable] 
				// callback triggered when an error occurs
				

				export let opacity = undefined // [number] 
				// the grid opacity outside of the lines.
				

				export let opacityTexture = undefined // [basetexture] 
				// 
				

				export let pluginManager = undefined // [materialpluginmanager] 
				// plugin manager for this material
				

				export let pointSize = undefined // [number] 
				// stores the size of points
				

				export let preMultiplyAlpha = undefined // [boolean] 
				// determine rbg output is premultiplied by alpha value.
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let separateCullingPass = undefined // [boolean] 
				// specifies if there should be a separate pass for culling
				

				export let shadowDepthWrapper = undefined // [nullable] 
				// custom shadow depth material to use for shadow rendering instead of the in-built one
				

				export let sideOrientation = undefined // [number] 
				// stores the value for side orientation
				

				export let state = undefined // [string] 
				// the state of the material
				

				export let stencil = undefined // [materialstencilstate] 
				// gives access to the stencil properties of the material
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the material
				

				export let useMaxLine = undefined // [boolean] 
				// determines if the max line value will be used instead of the sum wherever grid lines intersect.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:GridMaterial]`, ...args) : null

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
				if (disableColorWrite != undefined) instance.disableColorWrite = disableColorWrite?.instance || disableColorWrite
				disableColorWrite = instance.disableColorWrite
				if (disableDepthWrite != undefined) instance.disableDepthWrite = disableDepthWrite?.instance || disableDepthWrite
				disableDepthWrite = instance.disableDepthWrite
				if (doNotSerialize != undefined) instance.doNotSerialize = doNotSerialize?.instance || doNotSerialize
				doNotSerialize = instance.doNotSerialize
				if (forceDepthWrite != undefined) instance.forceDepthWrite = forceDepthWrite?.instance || forceDepthWrite
				forceDepthWrite = instance.forceDepthWrite
				if (getRenderTargetTextures != undefined) instance.getRenderTargetTextures = getRenderTargetTextures?.instance || getRenderTargetTextures
				getRenderTargetTextures = instance.getRenderTargetTextures
				if (gridOffset != undefined) instance.gridOffset = gridOffset?.instance || gridOffset
				gridOffset = instance.gridOffset
				if (gridRatio != undefined) instance.gridRatio = gridRatio?.instance || gridRatio
				gridRatio = instance.gridRatio
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (lineColor != undefined) instance.lineColor = lineColor?.instance || lineColor
				lineColor = instance.lineColor
				if (mainColor != undefined) instance.mainColor = mainColor?.instance || mainColor
				mainColor = instance.mainColor
				if (majorUnitFrequency != undefined) instance.majorUnitFrequency = majorUnitFrequency?.instance || majorUnitFrequency
				majorUnitFrequency = instance.majorUnitFrequency
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (minorUnitVisibility != undefined) instance.minorUnitVisibility = minorUnitVisibility?.instance || minorUnitVisibility
				minorUnitVisibility = instance.minorUnitVisibility
				if (onCompiled != undefined) instance.onCompiled = onCompiled?.instance || onCompiled
				onCompiled = instance.onCompiled
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onError != undefined) instance.onError = onError?.instance || onError
				onError = instance.onError
				if (opacity != undefined) instance.opacity = opacity?.instance || opacity
				opacity = instance.opacity
				if (opacityTexture != undefined) instance.opacityTexture = opacityTexture?.instance || opacityTexture
				opacityTexture = instance.opacityTexture
				if (pluginManager != undefined) instance.pluginManager = pluginManager?.instance || pluginManager
				pluginManager = instance.pluginManager
				if (pointSize != undefined) instance.pointSize = pointSize?.instance || pointSize
				pointSize = instance.pointSize
				if (preMultiplyAlpha != undefined) instance.preMultiplyAlpha = preMultiplyAlpha?.instance || preMultiplyAlpha
				preMultiplyAlpha = instance.preMultiplyAlpha
				if (reservedDataStore != undefined) instance.reservedDataStore = reservedDataStore?.instance || reservedDataStore
				reservedDataStore = instance.reservedDataStore
				if (separateCullingPass != undefined) instance.separateCullingPass = separateCullingPass?.instance || separateCullingPass
				separateCullingPass = instance.separateCullingPass
				if (shadowDepthWrapper != undefined) instance.shadowDepthWrapper = shadowDepthWrapper?.instance || shadowDepthWrapper
				shadowDepthWrapper = instance.shadowDepthWrapper
				if (sideOrientation != undefined) instance.sideOrientation = sideOrientation?.instance || sideOrientation
				sideOrientation = instance.sideOrientation
				if (state != undefined) instance.state = state?.instance || state
				state = instance.state
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (useMaxLine != undefined) instance.useMaxLine = useMaxLine?.instance || useMaxLine
				useMaxLine = instance.useMaxLine
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

			