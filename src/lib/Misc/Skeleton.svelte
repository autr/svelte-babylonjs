
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					id  * required
					scene  * required 
					animations  
					bones  
					dimensionsAtRest  
					doNotSerialize  
					inspectableCustomProperties  
					needInitialSkinMatrix  
					onBeforeComputeObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the skeleton name
				

				export let id = undefined // [string] * required
				// defines the skeleton id
				

				export let scene = undefined // [scene] * required
				// defines the hosting scene
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Skeleton(name,id,scene) : {}

				// ================ ACCESSORS ================

				
				export let animationPropertiesOverride = undefined // [nullable] 
				// 
				

				export let isUsingTextureForMatrices = undefined // [boolean] 
				// 
				

				export let uniqueId = undefined // [number] 
				// 
				

				export let useTextureToStoreBoneMatrices = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let animations = undefined // [array] 
				// gets the list of animations attached to this skeleton
				

				export let bones = undefined // [array] 
				// defines the list of child bones
				

				export let dimensionsAtRest = undefined // [vector3] 
				// defines an estimate of the dimension of the skeleton at rest
				

				export let doNotSerialize = undefined // [boolean] 
				// specifies if the skeleton should be serialized
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let needInitialSkinMatrix = undefined // [boolean] 
				// defines a boolean indicating if the root matrix is provided by meshes or by the current skeleton (this is the default value)
				

				export let onBeforeComputeObservable = undefined // [observable] 
				// an observable triggered before computing the skeleton's matrices
				

				// ================ METHODS ================

				
				export let beginAnimation = (...args) => instance.beginAnimation(...args)

				export let clone = (...args) => instance.clone(...args)

				export let computeAbsoluteTransforms = (...args) => instance.computeAbsoluteTransforms(...args)

				export let copyAnimationRange = (...args) => instance.copyAnimationRange(...args)

				export let createAnimationRange = (...args) => instance.createAnimationRange(...args)

				export let deleteAnimationRange = (...args) => instance.deleteAnimationRange(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let enableBlending = (...args) => instance.enableBlending(...args)

				export let getAnimatables = (...args) => instance.getAnimatables(...args)

				export let getAnimationRange = (...args) => instance.getAnimationRange(...args)

				export let getAnimationRanges = (...args) => instance.getAnimationRanges(...args)

				export let getBoneIndexByName = (...args) => instance.getBoneIndexByName(...args)

				export let getChildren = (...args) => instance.getChildren(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getPoseMatrix = (...args) => instance.getPoseMatrix(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let getTransformMatrices = (...args) => instance.getTransformMatrices(...args)

				export let getTransformMatrixTexture = (...args) => instance.getTransformMatrixTexture(...args)

				export let prepare = (...args) => instance.prepare(...args)

				export let returnToRest = (...args) => instance.returnToRest(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setCurrentPoseAsRest = (...args) => instance.setCurrentPoseAsRest(...args)

				export let sortBones = (...args) => instance.sortBones(...args)

				export let toString = (...args) => instance.toString(...args)

				export let MakeAnimationAdditive = (...args) => instance.MakeAnimationAdditive(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Skeleton]`, ...args) : null

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
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (animationPropertiesOverride != undefined) instance.animationPropertiesOverride = animationPropertiesOverride?.instance || animationPropertiesOverride
				animationPropertiesOverride = instance.animationPropertiesOverride

				isUsingTextureForMatrices = instance.isUsingTextureForMatrices

				uniqueId = instance.uniqueId
				if (useTextureToStoreBoneMatrices != undefined) instance.useTextureToStoreBoneMatrices = useTextureToStoreBoneMatrices?.instance || useTextureToStoreBoneMatrices
				useTextureToStoreBoneMatrices = instance.useTextureToStoreBoneMatrices
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (bones != undefined) instance.bones = bones?.instance || bones
				bones = instance.bones
				if (dimensionsAtRest != undefined) instance.dimensionsAtRest = dimensionsAtRest?.instance || dimensionsAtRest
				dimensionsAtRest = instance.dimensionsAtRest
				if (doNotSerialize != undefined) instance.doNotSerialize = doNotSerialize?.instance || doNotSerialize
				doNotSerialize = instance.doNotSerialize
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (needInitialSkinMatrix != undefined) instance.needInitialSkinMatrix = needInitialSkinMatrix?.instance || needInitialSkinMatrix
				needInitialSkinMatrix = instance.needInitialSkinMatrix
				if (onBeforeComputeObservable != undefined) instance.onBeforeComputeObservable = onBeforeComputeObservable?.instance || onBeforeComputeObservable
				onBeforeComputeObservable = instance.onBeforeComputeObservable

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

			