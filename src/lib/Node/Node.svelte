
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
					animations  
					id  
					inspectableCustomProperties  
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
				// the name and id to be given to this node
				

				export let scene = undefined // [nullable] 
				// the scene this node will be added to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Node(name,scene) : {}

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
				

				export let parent = undefined // [nullable] 
				// 
				

				export let worldMatrixFromCache = undefined // [matrix] 
				// 
				

				// ================ PROPERTIES ================

				
				export let animations = undefined // [array] 
				// gets a list of animations associated with the node
				

				export let id = undefined // [string] 
				// gets or sets the id of the node
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

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

				export let computeWorldMatrix = (...args) => instance.computeWorldMatrix(...args)

				export let createAnimationRange = (...args) => instance.createAnimationRange(...args)

				export let deleteAnimationRange = (...args) => instance.deleteAnimationRange(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getAnimationByName = (...args) => instance.getAnimationByName(...args)

				export let getAnimationRange = (...args) => instance.getAnimationRange(...args)

				export let getAnimationRanges = (...args) => instance.getAnimationRanges(...args)

				export let getBehaviorByName = (...args) => instance.getBehaviorByName(...args)

				export let getChildMeshes = (...args) => instance.getChildMeshes(...args)

				export let getChildren = (...args) => instance.getChildren(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getDescendants = (...args) => instance.getDescendants(...args)

				export let getEngine = (...args) => instance.getEngine(...args)

				export let getHierarchyBoundingVectors = (...args) => instance.getHierarchyBoundingVectors(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let getWorldMatrix = (...args) => instance.getWorldMatrix(...args)

				export let isDescendantOf = (...args) => instance.isDescendantOf(...args)

				export let isDisposed = (...args) => instance.isDisposed(...args)

				export let isEnabled = (...args) => instance.isEnabled(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let markAsDirty = (...args) => instance.markAsDirty(...args)

				export let removeBehavior = (...args) => instance.removeBehavior(...args)

				export let serializeAnimationRanges = (...args) => instance.serializeAnimationRanges(...args)

				export let setEnabled = (...args) => instance.setEnabled(...args)

				export let AddNodeConstructor = (...args) => instance.AddNodeConstructor(...args)

				export let Construct = (...args) => instance.Construct(...args)

				export let ParseAnimationRanges = (...args) => instance.ParseAnimationRanges(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Node]`, ...args) : null

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
				if (accessibilityTag != undefined) instance.accessibilityTag = accessibilityTag?.instance || accessibilityTag
				accessibilityTag = instance.accessibilityTag
				if (animationPropertiesOverride != undefined) instance.animationPropertiesOverride = animationPropertiesOverride?.instance || animationPropertiesOverride
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

				worldMatrixFromCache = instance.worldMatrixFromCache
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
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

			