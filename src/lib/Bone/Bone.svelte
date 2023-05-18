
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					skeleton  * required
					parentBone  
					localMatrix  
					restPose  
					baseMatrix  
					index   
					animations  
					children  
					id  
					inspectableCustomProperties  
					length  
					metadata  
					onAccessibilityTagChangedObservable  
					onDisposeObservable  
					onReady  
					reservedDataStore  
					state  
					uniqueId  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the bone name
				

				export let skeleton = undefined // [skeleton] * required
				// defines the parent skeleton
				

				export let parentBone = undefined // [nullable] 
				// defines the parent (can be null if the bone is the root)
				

				export let localMatrix = undefined // [nullable] 
				// defines the local matrix
				

				export let restPose = undefined // [nullable] 
				// defines the rest pose matrix
				

				export let baseMatrix = undefined // [nullable] 
				// defines the base matrix
				

				export let index = undefined // [nullable] 
				// defines index of the bone in the hierarchy
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Bone(name,skeleton,parentBone,localMatrix,restPose,baseMatrix,index) : {}

				// ================ ACCESSORS ================

				
				export let accessibilityTag = undefined // [nullable] 
				// 
				

				export let animationPropertiesOverride = undefined // [nullable] 
				// 
				

				export let behaviors = undefined // [array] 
				// 
				

				export let doNotSerialize = undefined // [boolean] 
				// 
				

				export let onClonedObservable = undefined // [observable] 
				// 
				

				export let onDispose = undefined // [] 
				// 
				

				export let onEnabledStateChangedObservable = undefined // [observable] 
				// 
				

				export let parent = undefined // [bone] 
				// 
				

				export let position = undefined // [vector3] 
				// 
				

				export let rotation = undefined // [vector3] 
				// 
				

				export let rotationQuaternion = undefined // [quaternion] 
				// 
				

				export let scaling = undefined // [vector3] 
				// 
				

				export let worldMatrixFromCache = undefined // [matrix] 
				// 
				

				// ================ PROPERTIES ================

				
				export let animations = undefined // [array] 
				// gets the animations associated with this bone
				

				export let children = undefined // [array] 
				// gets the list of child bones
				

				export let id = undefined // [string] 
				// gets or sets the id of the node
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let length = undefined // [number] 
				// gets or sets bone length
				

				export let metadata = undefined // [any] 
				// gets or sets an object used to store user defined information for the node
				

				export let onAccessibilityTagChangedObservable = undefined // [observable] 
				// 
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the mesh is disposed
				

				export let onReady = undefined // [nullable] 
				// callback raised when the node is ready to be used
				

				export let reservedDataStore = undefined // [any] 
				// for internal use only. please do not use.
				

				export let state = undefined // [string] 
				// gets or sets a string used to store user defined state for the node
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the node
				

				// ================ METHODS ================

				
				export let addBehavior = (...args) => instance.addBehavior(...args)

				export let beginAnimation = (...args) => instance.beginAnimation(...args)

				export let computeAbsoluteTransforms = (...args) => instance.computeAbsoluteTransforms(...args)

				export let computeWorldMatrix = (...args) => instance.computeWorldMatrix(...args)

				export let copyAnimationRange = (...args) => instance.copyAnimationRange(...args)

				export let createAnimationRange = (...args) => instance.createAnimationRange(...args)

				export let deleteAnimationRange = (...args) => instance.deleteAnimationRange(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getAbsolutePosition = (...args) => instance.getAbsolutePosition(...args)

				export let getAbsolutePositionFromLocal = (...args) => instance.getAbsolutePositionFromLocal(...args)

				export let getAbsolutePositionFromLocalToRef = (...args) => instance.getAbsolutePositionFromLocalToRef(...args)

				export let getAbsolutePositionToRef = (...args) => instance.getAbsolutePositionToRef(...args)

				export let getAbsoluteTransform = (...args) => instance.getAbsoluteTransform(...args)

				export let getAnimationByName = (...args) => instance.getAnimationByName(...args)

				export let getAnimationRange = (...args) => instance.getAnimationRange(...args)

				export let getAnimationRanges = (...args) => instance.getAnimationRanges(...args)

				export let getBaseMatrix = (...args) => instance.getBaseMatrix(...args)

				export let getBehaviorByName = (...args) => instance.getBehaviorByName(...args)

				export let getBindPose = (...args) => instance.getBindPose(...args)

				export let getChildMeshes = (...args) => instance.getChildMeshes(...args)

				export let getChildren = (...args) => instance.getChildren(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getDescendants = (...args) => instance.getDescendants(...args)

				export let getDirection = (...args) => instance.getDirection(...args)

				export let getDirectionToRef = (...args) => instance.getDirectionToRef(...args)

				export let getEngine = (...args) => instance.getEngine(...args)

				export let getHierarchyBoundingVectors = (...args) => instance.getHierarchyBoundingVectors(...args)

				export let getIndex = (...args) => instance.getIndex(...args)

				export let getInvertedAbsoluteTransform = (...args) => instance.getInvertedAbsoluteTransform(...args)

				export let getLocalMatrix = (...args) => instance.getLocalMatrix(...args)

				export let getLocalPositionFromAbsolute = (...args) => instance.getLocalPositionFromAbsolute(...args)

				export let getLocalPositionFromAbsoluteToRef = (...args) => instance.getLocalPositionFromAbsoluteToRef(...args)

				export let getParent = (...args) => instance.getParent(...args)

				export let getPosition = (...args) => instance.getPosition(...args)

				export let getPositionToRef = (...args) => instance.getPositionToRef(...args)

				export let getRestPose = (...args) => instance.getRestPose(...args)

				export let getRotation = (...args) => instance.getRotation(...args)

				export let getRotationMatrix = (...args) => instance.getRotationMatrix(...args)

				export let getRotationMatrixToRef = (...args) => instance.getRotationMatrixToRef(...args)

				export let getRotationQuaternion = (...args) => instance.getRotationQuaternion(...args)

				export let getRotationQuaternionToRef = (...args) => instance.getRotationQuaternionToRef(...args)

				export let getRotationToRef = (...args) => instance.getRotationToRef(...args)

				export let getScale = (...args) => instance.getScale(...args)

				export let getScaleToRef = (...args) => instance.getScaleToRef(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let getSkeleton = (...args) => instance.getSkeleton(...args)

				export let getTransformNode = (...args) => instance.getTransformNode(...args)

				export let getWorldMatrix = (...args) => instance.getWorldMatrix(...args)

				export let isDescendantOf = (...args) => instance.isDescendantOf(...args)

				export let isDisposed = (...args) => instance.isDisposed(...args)

				export let isEnabled = (...args) => instance.isEnabled(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let linkTransformNode = (...args) => instance.linkTransformNode(...args)

				export let markAsDirty = (...args) => instance.markAsDirty(...args)

				export let removeBehavior = (...args) => instance.removeBehavior(...args)

				export let returnToRest = (...args) => instance.returnToRest(...args)

				export let rotate = (...args) => instance.rotate(...args)

				export let scale = (...args) => instance.scale(...args)

				export let serializeAnimationRanges = (...args) => instance.serializeAnimationRanges(...args)

				export let setAbsolutePosition = (...args) => instance.setAbsolutePosition(...args)

				export let setAxisAngle = (...args) => instance.setAxisAngle(...args)

				export let setBindPose = (...args) => instance.setBindPose(...args)

				export let setCurrentPoseAsRest = (...args) => instance.setCurrentPoseAsRest(...args)

				export let setEnabled = (...args) => instance.setEnabled(...args)

				export let setParent = (...args) => instance.setParent(...args)

				export let setPosition = (...args) => instance.setPosition(...args)

				export let setRestPose = (...args) => instance.setRestPose(...args)

				export let setRotation = (...args) => instance.setRotation(...args)

				export let setRotationMatrix = (...args) => instance.setRotationMatrix(...args)

				export let setRotationQuaternion = (...args) => instance.setRotationQuaternion(...args)

				export let setScale = (...args) => instance.setScale(...args)

				export let setYawPitchRoll = (...args) => instance.setYawPitchRoll(...args)

				export let translate = (...args) => instance.translate(...args)

				export let updateMatrix = (...args) => instance.updateMatrix(...args)

				export let AddNodeConstructor = (...args) => instance.AddNodeConstructor(...args)

				export let Construct = (...args) => instance.Construct(...args)

				export let ParseAnimationRanges = (...args) => instance.ParseAnimationRanges(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Bone]`, ...args) : null

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
				if (skeleton != undefined) instance.skeleton = skeleton?.instance || skeleton
				skeleton = instance.skeleton
				if (parentBone != undefined) instance.parentBone = parentBone?.instance || parentBone
				parentBone = instance.parentBone
				if (localMatrix != undefined) instance.localMatrix = localMatrix?.instance || localMatrix
				localMatrix = instance.localMatrix
				if (restPose != undefined) instance.restPose = restPose?.instance || restPose
				restPose = instance.restPose
				if (baseMatrix != undefined) instance.baseMatrix = baseMatrix?.instance || baseMatrix
				baseMatrix = instance.baseMatrix
				if (index != undefined) instance.index = index?.instance || index
				index = instance.index
				if (accessibilityTag != undefined) instance.accessibilityTag = accessibilityTag?.instance || accessibilityTag
				accessibilityTag = instance.accessibilityTag

				animationPropertiesOverride = instance.animationPropertiesOverride

				behaviors = instance.behaviors
				if (doNotSerialize != undefined) instance.doNotSerialize = doNotSerialize?.instance || doNotSerialize
				doNotSerialize = instance.doNotSerialize

				onClonedObservable = instance.onClonedObservable
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose

				onEnabledStateChangedObservable = instance.onEnabledStateChangedObservable
				if (parent != undefined) instance.parent = parent?.instance || parent
				parent = instance.parent
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
				if (rotation != undefined) instance.rotation = rotation?.instance || rotation
				rotation = instance.rotation
				if (rotationQuaternion != undefined) instance.rotationQuaternion = rotationQuaternion?.instance || rotationQuaternion
				rotationQuaternion = instance.rotationQuaternion
				if (scaling != undefined) instance.scaling = scaling?.instance || scaling
				scaling = instance.scaling

				worldMatrixFromCache = instance.worldMatrixFromCache
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (children != undefined) instance.children = children?.instance || children
				children = instance.children
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (length != undefined) instance.length = length?.instance || length
				length = instance.length
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (onAccessibilityTagChangedObservable != undefined) instance.onAccessibilityTagChangedObservable = onAccessibilityTagChangedObservable?.instance || onAccessibilityTagChangedObservable
				onAccessibilityTagChangedObservable = instance.onAccessibilityTagChangedObservable
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onReady != undefined) instance.onReady = onReady?.instance || onReady
				onReady = instance.onReady
				if (reservedDataStore != undefined) instance.reservedDataStore = reservedDataStore?.instance || reservedDataStore
				reservedDataStore = instance.reservedDataStore
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

			