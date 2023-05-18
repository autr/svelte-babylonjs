
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					targetProperty  * required
					framePerSecond  * required
					dataType  * required
					loopMode  
					enableBlending   
					blendingSpeed  
					snippetId  
					targetPropertyPath  
					uniqueId  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// name of the animation
				

				export let targetProperty = undefined // [string] * required
				// property to animate
				

				export let framePerSecond = undefined // [number] * required
				// the frames per second of the animation
				

				export let dataType = undefined // [number] * required
				// the data type of the animation
				

				export let loopMode = undefined // [number] 
				// the loop mode of the animation
				

				export let enableBlending = undefined // [boolean] 
				// specifies if blending should be enabled
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Animation(name,targetProperty,framePerSecond,dataType,loopMode,enableBlending) : {}

				// ================ ACCESSORS ================

				
				export let hasRunningRuntimeAnimations = undefined // [boolean] 
				// 
				

				export let runtimeAnimations = undefined // [array] 
				// 
				

				// ================ PROPERTIES ================

				
				export let blendingSpeed = undefined // [number] 
				// stores the blending speed of the animation
				

				export let snippetId = undefined // [string] 
				// snippet id if the animation was created from the snippet server
				

				export let targetPropertyPath = undefined // [array] 
				// stores an array of target property paths
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the animation (the uniqueness is solely among other animations)
				

				// ================ METHODS ================

				
				export let addEvent = (...args) => instance.addEvent(...args)

				export let clone = (...args) => instance.clone(...args)

				export let color3InterpolateFunction = (...args) => instance.color3InterpolateFunction(...args)

				export let color3InterpolateFunctionWithTangents = (...args) => instance.color3InterpolateFunctionWithTangents(...args)

				export let color4InterpolateFunction = (...args) => instance.color4InterpolateFunction(...args)

				export let color4InterpolateFunctionWithTangents = (...args) => instance.color4InterpolateFunctionWithTangents(...args)

				export let createRange = (...args) => instance.createRange(...args)

				export let deleteRange = (...args) => instance.deleteRange(...args)

				export let evaluate = (...args) => instance.evaluate(...args)

				export let floatInterpolateFunction = (...args) => instance.floatInterpolateFunction(...args)

				export let floatInterpolateFunctionWithTangents = (...args) => instance.floatInterpolateFunctionWithTangents(...args)

				export let getEasingFunction = (...args) => instance.getEasingFunction(...args)

				export let getEvents = (...args) => instance.getEvents(...args)

				export let getHighestFrame = (...args) => instance.getHighestFrame(...args)

				export let getKeys = (...args) => instance.getKeys(...args)

				export let getRange = (...args) => instance.getRange(...args)

				export let matrixInterpolateFunction = (...args) => instance.matrixInterpolateFunction(...args)

				export let quaternionInterpolateFunction = (...args) => instance.quaternionInterpolateFunction(...args)

				export let quaternionInterpolateFunctionWithTangents = (...args) => instance.quaternionInterpolateFunctionWithTangents(...args)

				export let removeEvents = (...args) => instance.removeEvents(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setEasingFunction = (...args) => instance.setEasingFunction(...args)

				export let setKeys = (...args) => instance.setKeys(...args)

				export let sizeInterpolateFunction = (...args) => instance.sizeInterpolateFunction(...args)

				export let toString = (...args) => instance.toString(...args)

				export let vector2InterpolateFunction = (...args) => instance.vector2InterpolateFunction(...args)

				export let vector2InterpolateFunctionWithTangents = (...args) => instance.vector2InterpolateFunctionWithTangents(...args)

				export let vector3InterpolateFunction = (...args) => instance.vector3InterpolateFunction(...args)

				export let vector3InterpolateFunctionWithTangents = (...args) => instance.vector3InterpolateFunctionWithTangents(...args)

				export let AppendSerializedAnimations = (...args) => instance.AppendSerializedAnimations(...args)

				export let CreateAndStartAnimation = (...args) => instance.CreateAndStartAnimation(...args)

				export let CreateAndStartHierarchyAnimation = (...args) => instance.CreateAndStartHierarchyAnimation(...args)

				export let CreateAnimation = (...args) => instance.CreateAnimation(...args)

				export let CreateMergeAndStartAnimation = (...args) => instance.CreateMergeAndStartAnimation(...args)

				export let MakeAnimationAdditive = (...args) => instance.MakeAnimationAdditive(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let ParseFromFileAsync = (...args) => instance.ParseFromFileAsync(...args)

				export let ParseFromSnippetAsync = (...args) => instance.ParseFromSnippetAsync(...args)

				export let TransitionTo = (...args) => instance.TransitionTo(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Animation]`, ...args) : null

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
				if (targetProperty != undefined) instance.targetProperty = targetProperty?.instance || targetProperty
				targetProperty = instance.targetProperty
				if (framePerSecond != undefined) instance.framePerSecond = framePerSecond?.instance || framePerSecond
				framePerSecond = instance.framePerSecond
				if (dataType != undefined) instance.dataType = dataType?.instance || dataType
				dataType = instance.dataType
				if (loopMode != undefined) instance.loopMode = loopMode?.instance || loopMode
				loopMode = instance.loopMode
				if (enableBlending != undefined) instance.enableBlending = enableBlending?.instance || enableBlending
				enableBlending = instance.enableBlending

				hasRunningRuntimeAnimations = instance.hasRunningRuntimeAnimations

				runtimeAnimations = instance.runtimeAnimations
				if (blendingSpeed != undefined) instance.blendingSpeed = blendingSpeed?.instance || blendingSpeed
				blendingSpeed = instance.blendingSpeed
				if (snippetId != undefined) instance.snippetId = snippetId?.instance || snippetId
				snippetId = instance.snippetId
				if (targetPropertyPath != undefined) instance.targetPropertyPath = targetPropertyPath?.instance || targetPropertyPath
				targetPropertyPath = instance.targetPropertyPath
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

			