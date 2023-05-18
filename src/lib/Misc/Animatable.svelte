
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required
					target  * required
					fromFrame  
					toFrame  
					loopAnimation  
					speedRatio  
					onAnimationEnd  
					animations  
					onAnimationLoop  
					isAdditive   
					animationStarted  
					disposeOnEnd  
					onAnimationEndObservable  
					onAnimationLoopObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// defines the hosting scene
				

				export let target = undefined // [any] * required
				// defines the target object
				

				export let fromFrame = undefined // [number] 
				// defines the starting frame number (default is 0)
				

				export let toFrame = undefined // [number] 
				// defines the ending frame number (default is 100)
				

				export let loopAnimation = undefined // [boolean] 
				// defines if the animation must loop (default is false)
				

				export let speedRatio = undefined // [number] 
				// defines the factor to apply to animation speed (default is 1)
				

				export let onAnimationEnd = undefined // [nullable] 
				// defines a callback to call when animation ends if it is not looping
				

				export let animations = undefined // [array] 
				// defines a group of animation to add to the new animatable
				

				export let onAnimationLoop = undefined // [nullable] 
				// defines a callback to call when animation loops
				

				export let isAdditive = undefined // [boolean] 
				// defines whether the animation should be evaluated additively
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Animatable(scene,target,fromFrame,toFrame,loopAnimation,speedRatio,onAnimationEnd,animations,onAnimationLoop,isAdditive) : {}

				// ================ ACCESSORS ================

				
				export let masterFrame = undefined // [number] 
				// 
				

				export let syncRoot = undefined // [nullable] 
				// 
				

				export let weight = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let animationStarted = undefined // [boolean] 
				// gets a boolean indicating if the animation has started
				

				export let disposeOnEnd = undefined // [boolean] 
				// gets or sets a boolean indicating if the animatable must be disposed and removed at the end of the animation.this will only apply for non looping animation (default is true)
				

				export let onAnimationEndObservable = undefined // [observable] 
				// observer raised when the animation ends
				

				export let onAnimationLoopObservable = undefined // [observable] 
				// observer raised when the animation loops
				

				// ================ METHODS ================

				
				export let appendAnimations = (...args) => instance.appendAnimations(...args)

				export let disableBlending = (...args) => instance.disableBlending(...args)

				export let enableBlending = (...args) => instance.enableBlending(...args)

				export let getAnimationByTargetProperty = (...args) => instance.getAnimationByTargetProperty(...args)

				export let getAnimations = (...args) => instance.getAnimations(...args)

				export let getRuntimeAnimationByTargetProperty = (...args) => instance.getRuntimeAnimationByTargetProperty(...args)

				export let goToFrame = (...args) => instance.goToFrame(...args)

				export let pause = (...args) => instance.pause(...args)

				export let reset = (...args) => instance.reset(...args)

				export let restart = (...args) => instance.restart(...args)

				export let stop = (...args) => instance.stop(...args)

				export let syncWith = (...args) => instance.syncWith(...args)

				export let waitAsync = (...args) => instance.waitAsync(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Animatable]`, ...args) : null

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

												if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (target != undefined) instance.target = target?.instance || target
				target = instance.target
				if (fromFrame != undefined) instance.fromFrame = fromFrame?.instance || fromFrame
				fromFrame = instance.fromFrame
				if (toFrame != undefined) instance.toFrame = toFrame?.instance || toFrame
				toFrame = instance.toFrame
				if (loopAnimation != undefined) instance.loopAnimation = loopAnimation?.instance || loopAnimation
				loopAnimation = instance.loopAnimation
				if (speedRatio != undefined) instance.speedRatio = speedRatio?.instance || speedRatio
				speedRatio = instance.speedRatio
				if (onAnimationEnd != undefined) instance.onAnimationEnd = onAnimationEnd?.instance || onAnimationEnd
				onAnimationEnd = instance.onAnimationEnd
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (onAnimationLoop != undefined) instance.onAnimationLoop = onAnimationLoop?.instance || onAnimationLoop
				onAnimationLoop = instance.onAnimationLoop
				if (isAdditive != undefined) instance.isAdditive = isAdditive?.instance || isAdditive
				isAdditive = instance.isAdditive

				masterFrame = instance.masterFrame

				syncRoot = instance.syncRoot
				if (weight != undefined) instance.weight = weight?.instance || weight
				weight = instance.weight
				if (animationStarted != undefined) instance.animationStarted = animationStarted?.instance || animationStarted
				animationStarted = instance.animationStarted
				if (disposeOnEnd != undefined) instance.disposeOnEnd = disposeOnEnd?.instance || disposeOnEnd
				disposeOnEnd = instance.disposeOnEnd
				if (onAnimationEndObservable != undefined) instance.onAnimationEndObservable = onAnimationEndObservable?.instance || onAnimationEndObservable
				onAnimationEndObservable = instance.onAnimationEndObservable
				if (onAnimationLoopObservable != undefined) instance.onAnimationLoopObservable = onAnimationLoopObservable?.instance || onAnimationLoopObservable
				onAnimationLoopObservable = instance.onAnimationLoopObservable

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

			