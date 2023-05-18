
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					direction  * required
					scene  * required 
					animations  
					autoCalcShadowZBounds  
					autoUpdateExtends  
					customProjectionMatrixBuilder  
					diffuse  
					falloffType  
					id  
					inspectableCustomProperties  
					intensity  
					metadata  
					onAccessibilityTagChangedObservable  
					onDisposeObservable  
					onReady  
					renderPriority  
					reservedDataStore  
					specular  
					state  
					transformedDirection  
					transformedPosition  
					uniqueId  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// the friendly name of the light
				

				export let direction = undefined // [vector3] * required
				// the direction of the light
				

				export let scene = undefined // [scene] * required
				// the scene the light belongs to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.DirectionalLight(name,direction,scene) : {}

				// ================ ACCESSORS ================

				
				export let accessibilityTag = undefined // [nullable] 
				// 
				

				export let animationPropertiesOverride = undefined // [nullable] 
				// 
				

				export let behaviors = undefined // [array] 
				// 
				

				export let doNotSerialize = undefined // [boolean] 
				// 
				

				export let excludeWithLayerMask = undefined // [number] 
				// 
				

				export let excludedMeshes = undefined // [array] 
				// 
				

				export let includeOnlyWithLayerMask = undefined // [number] 
				// 
				

				export let includedOnlyMeshes = undefined // [array] 
				// 
				

				export let intensityMode = undefined // [number] 
				// 
				

				export let lightmapMode = undefined // [number] 
				// 
				

				export let onClonedObservable = undefined // [observable] 
				// 
				

				export let onDispose = undefined // [] 
				// 
				

				export let onEnabledStateChangedObservable = undefined // [observable] 
				// 
				

				export let orthoBottom = undefined // [number] 
				// 
				

				export let orthoLeft = undefined // [number] 
				// 
				

				export let orthoRight = undefined // [number] 
				// 
				

				export let orthoTop = undefined // [number] 
				// 
				

				export let parent = undefined // [nullable] 
				// 
				

				export let position = undefined // [vector3] 
				// the position the shadow will be casted from.
				

				export let radius = undefined // [number] 
				// 
				

				export let range = undefined // [number] 
				// 
				

				export let shadowEnabled = undefined // [boolean] 
				// gets or sets whether or not the shadows are enabled for this light. this can help turning off/on shadow without detachingthe current shadow generator.
				

				export let shadowFrustumSize = undefined // [number] 
				// 
				

				export let shadowMaxZ = undefined // [number] 
				// defines the shadow projection clipping maximum z value.
				

				export let shadowMinZ = undefined // [number] 
				// defines the shadow projection clipping minimum z value.
				

				export let shadowOrthoScale = undefined // [number] 
				// 
				

				export let worldMatrixFromCache = undefined // [matrix] 
				// 
				

				// ================ PROPERTIES ================

				
				export let animations = undefined // [array] 
				// gets a list of animations associated with the node
				

				export let autoCalcShadowZBounds = undefined // [boolean] 
				// automatically compute the shadowminz and shadowmaxz for the projection matrix to best fit (including all the casters)on each frame. autoupdateextends must be set to true for this to work
				

				export let autoUpdateExtends = undefined // [boolean] 
				// automatically compute the projection matrix to best fit (including all the casters)on each frame.
				

				export let customProjectionMatrixBuilder = undefined // [reflection] 
				// 
				

				export let diffuse = undefined // [color3] 
				// diffuse gives the basic color to an object.
				

				export let falloffType = undefined // [number] 
				// defines the falloff type for this light. this lets overriding how punctual light arefalling off base on range or angle.this can be set to any values in light.falloff_x.note: this is only useful for pbr materials at the moment. this could be extended if required toother types of materials.
				

				export let id = undefined // [string] 
				// gets or sets the id of the node
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let intensity = undefined // [number] 
				// strength of the light.note: by default it is define in the framework own unit.note: in pbr materials the intensitymode can be use to chose what unit the intensity is defined in.
				

				export let metadata = undefined // [any] 
				// gets or sets an object used to store user defined information for the node
				

				export let onAccessibilityTagChangedObservable = undefined // [observable] 
				// 
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the mesh is disposed
				

				export let onReady = undefined // [nullable] 
				// callback raised when the node is ready to be used
				

				export let renderPriority = undefined // [number] 
				// defines the rendering priority of the lights. it can help in case of fallback or number of lightsexceeding the number allowed of the materials.
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let specular = undefined // [color3] 
				// specular produces a highlight color on an object.note: this is not affecting pbr materials.
				

				export let state = undefined // [string] 
				// gets or sets a string used to store user defined state for the node
				

				export let transformedDirection = undefined // [vector3] 
				// the transformed direction. direction of the light in world space taking parenting in account.
				

				export let transformedPosition = undefined // [vector3] 
				// the transformed position. position of the light in world space taking parenting in account.
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the node
				

				// ================ METHODS ================

				
				export let _bindLight = (...args) => instance._bindLight(...args)

				export let addBehavior = (...args) => instance.addBehavior(...args)

				export let beginAnimation = (...args) => instance.beginAnimation(...args)

				export let canAffectMesh = (...args) => instance.canAffectMesh(...args)

				export let clone = (...args) => instance.clone(...args)

				export let computeTransformedInformation = (...args) => instance.computeTransformedInformation(...args)

				export let computeWorldMatrix = (...args) => instance.computeWorldMatrix(...args)

				export let createAnimationRange = (...args) => instance.createAnimationRange(...args)

				export let deleteAnimationRange = (...args) => instance.deleteAnimationRange(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let forceProjectionMatrixCompute = (...args) => instance.forceProjectionMatrixCompute(...args)

				export let getAbsolutePosition = (...args) => instance.getAbsolutePosition(...args)

				export let getAnimationByName = (...args) => instance.getAnimationByName(...args)

				export let getAnimationRange = (...args) => instance.getAnimationRange(...args)

				export let getAnimationRanges = (...args) => instance.getAnimationRanges(...args)

				export let getBehaviorByName = (...args) => instance.getBehaviorByName(...args)

				export let getChildMeshes = (...args) => instance.getChildMeshes(...args)

				export let getChildren = (...args) => instance.getChildren(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getDepthMaxZ = (...args) => instance.getDepthMaxZ(...args)

				export let getDepthMinZ = (...args) => instance.getDepthMinZ(...args)

				export let getDepthScale = (...args) => instance.getDepthScale(...args)

				export let getDescendants = (...args) => instance.getDescendants(...args)

				export let getEngine = (...args) => instance.getEngine(...args)

				export let getHierarchyBoundingVectors = (...args) => instance.getHierarchyBoundingVectors(...args)

				export let getRotation = (...args) => instance.getRotation(...args)

				export let getScaledIntensity = (...args) => instance.getScaledIntensity(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let getShadowDirection = (...args) => instance.getShadowDirection(...args)

				export let getShadowGenerator = (...args) => instance.getShadowGenerator(...args)

				export let getShadowGenerators = (...args) => instance.getShadowGenerators(...args)

				export let getTypeID = (...args) => instance.getTypeID(...args)

				export let getWorldMatrix = (...args) => instance.getWorldMatrix(...args)

				export let isDescendantOf = (...args) => instance.isDescendantOf(...args)

				export let isDisposed = (...args) => instance.isDisposed(...args)

				export let isEnabled = (...args) => instance.isEnabled(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let markAsDirty = (...args) => instance.markAsDirty(...args)

				export let needCube = (...args) => instance.needCube(...args)

				export let needProjectionMatrixCompute = (...args) => instance.needProjectionMatrixCompute(...args)

				export let prepareLightSpecificDefines = (...args) => instance.prepareLightSpecificDefines(...args)

				export let removeBehavior = (...args) => instance.removeBehavior(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let serializeAnimationRanges = (...args) => instance.serializeAnimationRanges(...args)

				export let setDirectionToTarget = (...args) => instance.setDirectionToTarget(...args)

				export let setEnabled = (...args) => instance.setEnabled(...args)

				export let setShadowProjectionMatrix = (...args) => instance.setShadowProjectionMatrix(...args)

				export let toString = (...args) => instance.toString(...args)

				export let transferTexturesToEffect = (...args) => instance.transferTexturesToEffect(...args)

				export let transferToEffect = (...args) => instance.transferToEffect(...args)

				export let transferToNodeMaterialEffect = (...args) => instance.transferToNodeMaterialEffect(...args)

				export let AddNodeConstructor = (...args) => instance.AddNodeConstructor(...args)

				export let Construct = (...args) => instance.Construct(...args)

				export let GetConstructorFromName = (...args) => instance.GetConstructorFromName(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let ParseAnimationRanges = (...args) => instance.ParseAnimationRanges(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:DirectionalLight]`, ...args) : null

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
				if (direction != undefined) instance.direction = direction?.instance || direction
				direction = instance.direction
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (accessibilityTag != undefined) instance.accessibilityTag = accessibilityTag?.instance || accessibilityTag
				accessibilityTag = instance.accessibilityTag
				if (animationPropertiesOverride != undefined) instance.animationPropertiesOverride = animationPropertiesOverride?.instance || animationPropertiesOverride
				animationPropertiesOverride = instance.animationPropertiesOverride

				behaviors = instance.behaviors
				if (doNotSerialize != undefined) instance.doNotSerialize = doNotSerialize?.instance || doNotSerialize
				doNotSerialize = instance.doNotSerialize
				if (excludeWithLayerMask != undefined) instance.excludeWithLayerMask = excludeWithLayerMask?.instance || excludeWithLayerMask
				excludeWithLayerMask = instance.excludeWithLayerMask
				if (excludedMeshes != undefined) instance.excludedMeshes = excludedMeshes?.instance || excludedMeshes
				excludedMeshes = instance.excludedMeshes
				if (includeOnlyWithLayerMask != undefined) instance.includeOnlyWithLayerMask = includeOnlyWithLayerMask?.instance || includeOnlyWithLayerMask
				includeOnlyWithLayerMask = instance.includeOnlyWithLayerMask
				if (includedOnlyMeshes != undefined) instance.includedOnlyMeshes = includedOnlyMeshes?.instance || includedOnlyMeshes
				includedOnlyMeshes = instance.includedOnlyMeshes
				if (intensityMode != undefined) instance.intensityMode = intensityMode?.instance || intensityMode
				intensityMode = instance.intensityMode
				if (lightmapMode != undefined) instance.lightmapMode = lightmapMode?.instance || lightmapMode
				lightmapMode = instance.lightmapMode

				onClonedObservable = instance.onClonedObservable
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose

				onEnabledStateChangedObservable = instance.onEnabledStateChangedObservable
				if (orthoBottom != undefined) instance.orthoBottom = orthoBottom?.instance || orthoBottom
				orthoBottom = instance.orthoBottom
				if (orthoLeft != undefined) instance.orthoLeft = orthoLeft?.instance || orthoLeft
				orthoLeft = instance.orthoLeft
				if (orthoRight != undefined) instance.orthoRight = orthoRight?.instance || orthoRight
				orthoRight = instance.orthoRight
				if (orthoTop != undefined) instance.orthoTop = orthoTop?.instance || orthoTop
				orthoTop = instance.orthoTop
				if (parent != undefined) instance.parent = parent?.instance || parent
				parent = instance.parent
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
				if (radius != undefined) instance.radius = radius?.instance || radius
				radius = instance.radius
				if (range != undefined) instance.range = range?.instance || range
				range = instance.range
				if (shadowEnabled != undefined) instance.shadowEnabled = shadowEnabled?.instance || shadowEnabled
				shadowEnabled = instance.shadowEnabled
				if (shadowFrustumSize != undefined) instance.shadowFrustumSize = shadowFrustumSize?.instance || shadowFrustumSize
				shadowFrustumSize = instance.shadowFrustumSize
				if (shadowMaxZ != undefined) instance.shadowMaxZ = shadowMaxZ?.instance || shadowMaxZ
				shadowMaxZ = instance.shadowMaxZ
				if (shadowMinZ != undefined) instance.shadowMinZ = shadowMinZ?.instance || shadowMinZ
				shadowMinZ = instance.shadowMinZ
				if (shadowOrthoScale != undefined) instance.shadowOrthoScale = shadowOrthoScale?.instance || shadowOrthoScale
				shadowOrthoScale = instance.shadowOrthoScale

				worldMatrixFromCache = instance.worldMatrixFromCache
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (autoCalcShadowZBounds != undefined) instance.autoCalcShadowZBounds = autoCalcShadowZBounds?.instance || autoCalcShadowZBounds
				autoCalcShadowZBounds = instance.autoCalcShadowZBounds
				if (autoUpdateExtends != undefined) instance.autoUpdateExtends = autoUpdateExtends?.instance || autoUpdateExtends
				autoUpdateExtends = instance.autoUpdateExtends
				if (customProjectionMatrixBuilder != undefined) instance.customProjectionMatrixBuilder = customProjectionMatrixBuilder?.instance || customProjectionMatrixBuilder
				customProjectionMatrixBuilder = instance.customProjectionMatrixBuilder
				if (diffuse != undefined) instance.diffuse = diffuse?.instance || diffuse
				diffuse = instance.diffuse
				if (falloffType != undefined) instance.falloffType = falloffType?.instance || falloffType
				falloffType = instance.falloffType
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (intensity != undefined) instance.intensity = intensity?.instance || intensity
				intensity = instance.intensity
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (onAccessibilityTagChangedObservable != undefined) instance.onAccessibilityTagChangedObservable = onAccessibilityTagChangedObservable?.instance || onAccessibilityTagChangedObservable
				onAccessibilityTagChangedObservable = instance.onAccessibilityTagChangedObservable
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onReady != undefined) instance.onReady = onReady?.instance || onReady
				onReady = instance.onReady
				if (renderPriority != undefined) instance.renderPriority = renderPriority?.instance || renderPriority
				renderPriority = instance.renderPriority
				if (reservedDataStore != undefined) instance.reservedDataStore = reservedDataStore?.instance || reservedDataStore
				reservedDataStore = instance.reservedDataStore
				if (specular != undefined) instance.specular = specular?.instance || specular
				specular = instance.specular
				if (state != undefined) instance.state = state?.instance || state
				state = instance.state
				if (transformedDirection != undefined) instance.transformedDirection = transformedDirection?.instance || transformedDirection
				transformedDirection = instance.transformedDirection
				if (transformedPosition != undefined) instance.transformedPosition = transformedPosition?.instance || transformedPosition
				transformedPosition = instance.transformedPosition
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId

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

			