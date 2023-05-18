
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
					metadata  
					onAnimationEndObservable  
					onAnimationGroupEndObservable  
					onAnimationGroupLoopObservable  
					onAnimationGroupPauseObservable  
					onAnimationGroupPlayObservable  
					onAnimationLoopObservable  
					uniqueId  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the name of the group
				

				export let scene = undefined // [nullable] 
				// defines the scene the group belongs to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AnimationGroup(name,scene) : {}

				// ================ ACCESSORS ================

				
				export let animatables = undefined // [array] 
				// 
				

				export let children = undefined // [array] 
				// 
				

				export let from = undefined // [number] 
				// 
				

				export let isAdditive = undefined // [boolean] 
				// 
				

				export let isPlaying = undefined // [boolean] 
				// 
				

				export let isStarted = undefined // [boolean] 
				// 
				

				export let loopAnimation = undefined // [boolean] 
				// 
				

				export let speedRatio = undefined // [number] 
				// 
				

				export let targetedAnimations = undefined // [array] 
				// 
				

				export let to = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let metadata = undefined // [any] 
				// gets or sets an object used to store user defined information for the node
				

				export let onAnimationEndObservable = undefined // [observable] 
				// this observable will notify when one animation have ended
				

				export let onAnimationGroupEndObservable = undefined // [observable] 
				// this observable will notify when all animations have ended.
				

				export let onAnimationGroupLoopObservable = undefined // [observable] 
				// observer raised when all animations have looped
				

				export let onAnimationGroupPauseObservable = undefined // [observable] 
				// this observable will notify when all animations have paused.
				

				export let onAnimationGroupPlayObservable = undefined // [observable] 
				// this observable will notify when all animations are playing.
				

				export let onAnimationLoopObservable = undefined // [observable] 
				// observer raised when one animation loops
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the node
				

				// ================ METHODS ================

				
				export let addTargetedAnimation = (...args) => instance.addTargetedAnimation(...args)

				export let clone = (...args) => instance.clone(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let goToFrame = (...args) => instance.goToFrame(...args)

				export let normalize = (...args) => instance.normalize(...args)

				export let pause = (...args) => instance.pause(...args)

				export let play = (...args) => instance.play(...args)

				export let reset = (...args) => instance.reset(...args)

				export let restart = (...args) => instance.restart(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setWeightForAllAnimatables = (...args) => instance.setWeightForAllAnimatables(...args)

				export let start = (...args) => instance.start(...args)

				export let stop = (...args) => instance.stop(...args)

				export let syncAllAnimationsWith = (...args) => instance.syncAllAnimationsWith(...args)

				export let toString = (...args) => instance.toString(...args)

				export let MakeAnimationAdditive = (...args) => instance.MakeAnimationAdditive(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AnimationGroup]`, ...args) : null

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

				animatables = instance.animatables

				children = instance.children

				from = instance.from
				if (isAdditive != undefined) instance.isAdditive = isAdditive?.instance || isAdditive
				isAdditive = instance.isAdditive

				isPlaying = instance.isPlaying

				isStarted = instance.isStarted
				if (loopAnimation != undefined) instance.loopAnimation = loopAnimation?.instance || loopAnimation
				loopAnimation = instance.loopAnimation
				if (speedRatio != undefined) instance.speedRatio = speedRatio?.instance || speedRatio
				speedRatio = instance.speedRatio

				targetedAnimations = instance.targetedAnimations

				to = instance.to
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (onAnimationEndObservable != undefined) instance.onAnimationEndObservable = onAnimationEndObservable?.instance || onAnimationEndObservable
				onAnimationEndObservable = instance.onAnimationEndObservable
				if (onAnimationGroupEndObservable != undefined) instance.onAnimationGroupEndObservable = onAnimationGroupEndObservable?.instance || onAnimationGroupEndObservable
				onAnimationGroupEndObservable = instance.onAnimationGroupEndObservable
				if (onAnimationGroupLoopObservable != undefined) instance.onAnimationGroupLoopObservable = onAnimationGroupLoopObservable?.instance || onAnimationGroupLoopObservable
				onAnimationGroupLoopObservable = instance.onAnimationGroupLoopObservable
				if (onAnimationGroupPauseObservable != undefined) instance.onAnimationGroupPauseObservable = onAnimationGroupPauseObservable?.instance || onAnimationGroupPauseObservable
				onAnimationGroupPauseObservable = instance.onAnimationGroupPauseObservable
				if (onAnimationGroupPlayObservable != undefined) instance.onAnimationGroupPlayObservable = onAnimationGroupPlayObservable?.instance || onAnimationGroupPlayObservable
				onAnimationGroupPlayObservable = instance.onAnimationGroupPlayObservable
				if (onAnimationLoopObservable != undefined) instance.onAnimationLoopObservable = onAnimationLoopObservable?.instance || onAnimationLoopObservable
				onAnimationLoopObservable = instance.onAnimationLoopObservable
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

			