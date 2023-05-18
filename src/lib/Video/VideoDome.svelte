
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					textureUrlOrElement  * required
					options  * required
					scene  * required
					onError   
					animations  
					id  
					ignoreNonUniformScaling  
					inspectableCustomProperties  
					metadata  
					onAccessibilityTagChangedObservable  
					onAfterWorldMatrixUpdateObservable  
					onDisposeObservable  
					onLoadErrorObservable  
					onLoadObservable  
					onReady  
					physicsBody  
					reIntegrateRotationIntoRotationQuaternion  
					reservedDataStore  
					scalingDeterminant  
					state  
					uniqueId  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// element's name, child elements will append suffixes for their own names.
				

				export let textureUrlOrElement = undefined // [union] * required
				// defines the url(s) or the (video) html element to use
				

				export let options = undefined // [reflection] * required
				// an object containing optional or exposed sub element properties
				

				export let scene = undefined // [scene] * required
				// 
				

				export let onError = undefined // [nullable] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.VideoDome(name,textureUrlOrElement,options,scene,onError) : {}

				// ================ ACCESSORS ================

				
				export let absolutePosition = undefined // [vector3] 
				// 
				

				export let absoluteRotationQuaternion = undefined // [quaternion] 
				// 
				

				export let absoluteScaling = undefined // [vector3] 
				// 
				

				export let accessibilityTag = undefined // [nullable] 
				// 
				

				export let animationPropertiesOverride = undefined // [nullable] 
				// 
				

				export let behaviors = undefined // [array] 
				// 
				

				export let billboardMode = undefined // [number] 
				// 
				

				export let crossEye = undefined // [boolean] 
				// 
				

				export let doNotSerialize = undefined // [boolean] 
				// 
				

				export let forward = undefined // [vector3] 
				// 
				

				export let fovMultiplier = undefined // [number] 
				// 
				

				export let halfDome = undefined // [boolean] 
				// 
				

				export let infiniteDistance = undefined // [boolean] 
				// 
				

				export let isWorldMatrixFrozen = undefined // [boolean] 
				// 
				

				export let material = undefined // [backgroundmaterial] 
				// 
				

				export let mesh = undefined // [mesh] 
				// 
				

				export let nonUniformScaling = undefined // [boolean] 
				// 
				

				export let onClonedObservable = undefined // [observable] 
				// 
				

				export let onDispose = undefined // [] 
				// 
				

				export let onEnabledStateChangedObservable = undefined // [observable] 
				// 
				

				export let parent = undefined // [nullable] 
				// 
				

				export let position = undefined // [vector3] 
				// 
				

				export let preserveParentRotationForBillboard = undefined // [boolean] 
				// 
				

				export let right = undefined // [vector3] 
				// 
				

				export let rotation = undefined // [vector3] 
				// 
				

				export let rotationQuaternion = undefined // [nullable] 
				// 
				

				export let scaling = undefined // [vector3] 
				// 
				

				export let texture = undefined // [t] 
				// 
				

				export let textureMode = undefined // [number] 
				// 
				

				export let up = undefined // [vector3] 
				// 
				

				export let videoMode = undefined // [number] 
				// 
				

				export let videoTexture = undefined // [videotexture] 
				// 
				

				export let worldMatrixFromCache = undefined // [matrix] 
				// 
				

				// ================ PROPERTIES ================

				
				export let animations = undefined // [array] 
				// gets a list of animations associated with the node
				

				export let id = undefined // [string] 
				// gets or sets the id of the node
				

				export let ignoreNonUniformScaling = undefined // [boolean] 
				// gets or sets a boolean indicating that non uniform scaling (when at least one component is different from others) should be ignored.by default the system will update normals to compensate
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let metadata = undefined // [any] 
				// gets or sets an object used to store user defined information for the node
				

				export let onAccessibilityTagChangedObservable = undefined // [observable] 
				// 
				

				export let onAfterWorldMatrixUpdateObservable = undefined // [observable] 
				// an event triggered after the world matrix is updated
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the mesh is disposed
				

				export let onLoadErrorObservable = undefined // [observable] 
				// observable raised when an error occurred while loading the texture
				

				export let onLoadObservable = undefined // [observable] 
				// observable raised when the texture finished loading
				

				export let onReady = undefined // [nullable] 
				// callback raised when the node is ready to be used
				

				export let physicsBody = undefined // [nullable] 
				// 
				

				export let reIntegrateRotationIntoRotationQuaternion = undefined // [boolean] 
				// gets or sets a boolean indicating that even if rotationquaternion is defined, you can keep updating rotation property and babylon.js will just mix both
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let scalingDeterminant = undefined // [number] 
				// multiplication factor on scale x/y/z when computing the world matrix. eg. for a 1x1x1 cube setting this to 2 will make it a 2x2x2 cube
				

				export let state = undefined // [string] 
				// gets or sets a string used to store user defined state for the node
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the node
				

				// ================ METHODS ================

				
				export let addBehavior = (...args) => instance.addBehavior(...args)

				export let addRotation = (...args) => instance.addRotation(...args)

				export let applyImpulse = (...args) => instance.applyImpulse(...args)

				export let attachToBone = (...args) => instance.attachToBone(...args)

				export let beginAnimation = (...args) => instance.beginAnimation(...args)

				export let clone = (...args) => instance.clone(...args)

				export let computeWorldMatrix = (...args) => instance.computeWorldMatrix(...args)

				export let createAnimationRange = (...args) => instance.createAnimationRange(...args)

				export let deleteAnimationRange = (...args) => instance.deleteAnimationRange(...args)

				export let detachFromBone = (...args) => instance.detachFromBone(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let freezeWorldMatrix = (...args) => instance.freezeWorldMatrix(...args)

				export let getAbsolutePivotPoint = (...args) => instance.getAbsolutePivotPoint(...args)

				export let getAbsolutePivotPointToRef = (...args) => instance.getAbsolutePivotPointToRef(...args)

				export let getAbsolutePosition = (...args) => instance.getAbsolutePosition(...args)

				export let getAnimationByName = (...args) => instance.getAnimationByName(...args)

				export let getAnimationRange = (...args) => instance.getAnimationRange(...args)

				export let getAnimationRanges = (...args) => instance.getAnimationRanges(...args)

				export let getBehaviorByName = (...args) => instance.getBehaviorByName(...args)

				export let getChildMeshes = (...args) => instance.getChildMeshes(...args)

				export let getChildTransformNodes = (...args) => instance.getChildTransformNodes(...args)

				export let getChildren = (...args) => instance.getChildren(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getDescendants = (...args) => instance.getDescendants(...args)

				export let getDirection = (...args) => instance.getDirection(...args)

				export let getDirectionToRef = (...args) => instance.getDirectionToRef(...args)

				export let getDistanceToCamera = (...args) => instance.getDistanceToCamera(...args)

				export let getEngine = (...args) => instance.getEngine(...args)

				export let getHierarchyBoundingVectors = (...args) => instance.getHierarchyBoundingVectors(...args)

				export let getPhysicsBody = (...args) => instance.getPhysicsBody(...args)

				export let getPivotMatrix = (...args) => instance.getPivotMatrix(...args)

				export let getPivotPoint = (...args) => instance.getPivotPoint(...args)

				export let getPivotPointToRef = (...args) => instance.getPivotPointToRef(...args)

				export let getPoseMatrix = (...args) => instance.getPoseMatrix(...args)

				export let getPositionExpressedInLocalSpace = (...args) => instance.getPositionExpressedInLocalSpace(...args)

				export let getPositionInCameraSpace = (...args) => instance.getPositionInCameraSpace(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let getWorldMatrix = (...args) => instance.getWorldMatrix(...args)

				export let instantiateHierarchy = (...args) => instance.instantiateHierarchy(...args)

				export let isDescendantOf = (...args) => instance.isDescendantOf(...args)

				export let isDisposed = (...args) => instance.isDisposed(...args)

				export let isEnabled = (...args) => instance.isEnabled(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let isUsingPivotMatrix = (...args) => instance.isUsingPivotMatrix(...args)

				export let isWorldMatrixCameraDependent = (...args) => instance.isWorldMatrixCameraDependent(...args)

				export let locallyTranslate = (...args) => instance.locallyTranslate(...args)

				export let lookAt = (...args) => instance.lookAt(...args)

				export let markAsDirty = (...args) => instance.markAsDirty(...args)

				export let normalizeToUnitCube = (...args) => instance.normalizeToUnitCube(...args)

				export let registerAfterWorldMatrixUpdate = (...args) => instance.registerAfterWorldMatrixUpdate(...args)

				export let removeBehavior = (...args) => instance.removeBehavior(...args)

				export let resetLocalMatrix = (...args) => instance.resetLocalMatrix(...args)

				export let rotate = (...args) => instance.rotate(...args)

				export let rotateAround = (...args) => instance.rotateAround(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let serializeAnimationRanges = (...args) => instance.serializeAnimationRanges(...args)

				export let setAbsolutePosition = (...args) => instance.setAbsolutePosition(...args)

				export let setDirection = (...args) => instance.setDirection(...args)

				export let setEnabled = (...args) => instance.setEnabled(...args)

				export let setParent = (...args) => instance.setParent(...args)

				export let setPivotMatrix = (...args) => instance.setPivotMatrix(...args)

				export let setPivotPoint = (...args) => instance.setPivotPoint(...args)

				export let setPositionWithLocalVector = (...args) => instance.setPositionWithLocalVector(...args)

				export let setPreTransformMatrix = (...args) => instance.setPreTransformMatrix(...args)

				export let translate = (...args) => instance.translate(...args)

				export let unfreezeWorldMatrix = (...args) => instance.unfreezeWorldMatrix(...args)

				export let unregisterAfterWorldMatrixUpdate = (...args) => instance.unregisterAfterWorldMatrixUpdate(...args)

				export let updatePoseMatrix = (...args) => instance.updatePoseMatrix(...args)

				export let AddNodeConstructor = (...args) => instance.AddNodeConstructor(...args)

				export let Construct = (...args) => instance.Construct(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let ParseAnimationRanges = (...args) => instance.ParseAnimationRanges(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:VideoDome]`, ...args) : null

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
				if (textureUrlOrElement != undefined) instance.textureUrlOrElement = textureUrlOrElement?.instance || textureUrlOrElement
				textureUrlOrElement = instance.textureUrlOrElement
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (onError != undefined) instance.onError = onError?.instance || onError
				onError = instance.onError

				absolutePosition = instance.absolutePosition

				absoluteRotationQuaternion = instance.absoluteRotationQuaternion

				absoluteScaling = instance.absoluteScaling
				if (accessibilityTag != undefined) instance.accessibilityTag = accessibilityTag?.instance || accessibilityTag
				accessibilityTag = instance.accessibilityTag
				if (animationPropertiesOverride != undefined) instance.animationPropertiesOverride = animationPropertiesOverride?.instance || animationPropertiesOverride
				animationPropertiesOverride = instance.animationPropertiesOverride

				behaviors = instance.behaviors
				if (billboardMode != undefined) instance.billboardMode = billboardMode?.instance || billboardMode
				billboardMode = instance.billboardMode
				if (crossEye != undefined) instance.crossEye = crossEye?.instance || crossEye
				crossEye = instance.crossEye
				if (doNotSerialize != undefined) instance.doNotSerialize = doNotSerialize?.instance || doNotSerialize
				doNotSerialize = instance.doNotSerialize

				forward = instance.forward
				if (fovMultiplier != undefined) instance.fovMultiplier = fovMultiplier?.instance || fovMultiplier
				fovMultiplier = instance.fovMultiplier
				if (halfDome != undefined) instance.halfDome = halfDome?.instance || halfDome
				halfDome = instance.halfDome
				if (infiniteDistance != undefined) instance.infiniteDistance = infiniteDistance?.instance || infiniteDistance
				infiniteDistance = instance.infiniteDistance

				isWorldMatrixFrozen = instance.isWorldMatrixFrozen

				material = instance.material

				mesh = instance.mesh

				nonUniformScaling = instance.nonUniformScaling

				onClonedObservable = instance.onClonedObservable
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose

				onEnabledStateChangedObservable = instance.onEnabledStateChangedObservable
				if (parent != undefined) instance.parent = parent?.instance || parent
				parent = instance.parent
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
				if (preserveParentRotationForBillboard != undefined) instance.preserveParentRotationForBillboard = preserveParentRotationForBillboard?.instance || preserveParentRotationForBillboard
				preserveParentRotationForBillboard = instance.preserveParentRotationForBillboard

				right = instance.right
				if (rotation != undefined) instance.rotation = rotation?.instance || rotation
				rotation = instance.rotation
				if (rotationQuaternion != undefined) instance.rotationQuaternion = rotationQuaternion?.instance || rotationQuaternion
				rotationQuaternion = instance.rotationQuaternion
				if (scaling != undefined) instance.scaling = scaling?.instance || scaling
				scaling = instance.scaling
				if (texture != undefined) instance.texture = texture?.instance || texture
				texture = instance.texture
				if (textureMode != undefined) instance.textureMode = textureMode?.instance || textureMode
				textureMode = instance.textureMode

				up = instance.up
				if (videoMode != undefined) instance.videoMode = videoMode?.instance || videoMode
				videoMode = instance.videoMode

				videoTexture = instance.videoTexture

				worldMatrixFromCache = instance.worldMatrixFromCache
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (ignoreNonUniformScaling != undefined) instance.ignoreNonUniformScaling = ignoreNonUniformScaling?.instance || ignoreNonUniformScaling
				ignoreNonUniformScaling = instance.ignoreNonUniformScaling
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (onAccessibilityTagChangedObservable != undefined) instance.onAccessibilityTagChangedObservable = onAccessibilityTagChangedObservable?.instance || onAccessibilityTagChangedObservable
				onAccessibilityTagChangedObservable = instance.onAccessibilityTagChangedObservable
				if (onAfterWorldMatrixUpdateObservable != undefined) instance.onAfterWorldMatrixUpdateObservable = onAfterWorldMatrixUpdateObservable?.instance || onAfterWorldMatrixUpdateObservable
				onAfterWorldMatrixUpdateObservable = instance.onAfterWorldMatrixUpdateObservable
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onLoadErrorObservable != undefined) instance.onLoadErrorObservable = onLoadErrorObservable?.instance || onLoadErrorObservable
				onLoadErrorObservable = instance.onLoadErrorObservable
				if (onLoadObservable != undefined) instance.onLoadObservable = onLoadObservable?.instance || onLoadObservable
				onLoadObservable = instance.onLoadObservable
				if (onReady != undefined) instance.onReady = onReady?.instance || onReady
				onReady = instance.onReady
				if (physicsBody != undefined) instance.physicsBody = physicsBody?.instance || physicsBody
				physicsBody = instance.physicsBody
				if (reIntegrateRotationIntoRotationQuaternion != undefined) instance.reIntegrateRotationIntoRotationQuaternion = reIntegrateRotationIntoRotationQuaternion?.instance || reIntegrateRotationIntoRotationQuaternion
				reIntegrateRotationIntoRotationQuaternion = instance.reIntegrateRotationIntoRotationQuaternion
				if (reservedDataStore != undefined) instance.reservedDataStore = reservedDataStore?.instance || reservedDataStore
				reservedDataStore = instance.reservedDataStore
				if (scalingDeterminant != undefined) instance.scalingDeterminant = scalingDeterminant?.instance || scalingDeterminant
				scalingDeterminant = instance.scalingDeterminant
				if (state != undefined) instance.state = state?.instance || state
				state = instance.state
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

			