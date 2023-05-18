
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required
					options  
					autoGeneratePriorities  
					improvementMode   
					onFailureObservable  
					onNewOptimizationAppliedObservable  
					onSuccessObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// defines the scene to work on
				

				export let options = undefined // [sceneoptimizeroptions] 
				// defines the options to use with the sceneoptimizer
				

				export let autoGeneratePriorities = undefined // [boolean] 
				// defines if priorities must be generated and not read from sceneoptimization property (true by default)
				

				export let improvementMode = undefined // [boolean] 
				// defines if the scene optimizer must run the maximum optimization while staying over a target frame instead of trying to reach the target framerate (false by default)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SceneOptimizer(scene,options,autoGeneratePriorities,improvementMode) : {}

				// ================ ACCESSORS ================

				
				export let currentFrameRate = undefined // [number] 
				// 
				

				export let currentPriorityLevel = undefined // [number] 
				// 
				

				export let isInImprovementMode = undefined // [boolean] 
				// 
				

				export let optimizations = undefined // [array] 
				// 
				

				export let targetFrameRate = undefined // [number] 
				// 
				

				export let trackerDuration = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let onFailureObservable = undefined // [observable] 
				// defines an observable called when the optimizer is not able to reach the target frame rate
				

				export let onNewOptimizationAppliedObservable = undefined // [observable] 
				// defines an observable called when the optimizer enables an optimization
				

				export let onSuccessObservable = undefined // [observable] 
				// defines an observable called when the optimizer reaches the target frame rate
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let reset = (...args) => instance.reset(...args)

				export let start = (...args) => instance.start(...args)

				export let stop = (...args) => instance.stop(...args)

				export let OptimizeAsync = (...args) => instance.OptimizeAsync(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SceneOptimizer]`, ...args) : null

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
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (autoGeneratePriorities != undefined) instance.autoGeneratePriorities = autoGeneratePriorities?.instance || autoGeneratePriorities
				autoGeneratePriorities = instance.autoGeneratePriorities
				if (improvementMode != undefined) instance.improvementMode = improvementMode?.instance || improvementMode
				improvementMode = instance.improvementMode

				currentFrameRate = instance.currentFrameRate

				currentPriorityLevel = instance.currentPriorityLevel
				if (isInImprovementMode != undefined) instance.isInImprovementMode = isInImprovementMode?.instance || isInImprovementMode
				isInImprovementMode = instance.isInImprovementMode

				optimizations = instance.optimizations
				if (targetFrameRate != undefined) instance.targetFrameRate = targetFrameRate?.instance || targetFrameRate
				targetFrameRate = instance.targetFrameRate
				if (trackerDuration != undefined) instance.trackerDuration = trackerDuration?.instance || trackerDuration
				trackerDuration = instance.trackerDuration
				if (onFailureObservable != undefined) instance.onFailureObservable = onFailureObservable?.instance || onFailureObservable
				onFailureObservable = instance.onFailureObservable
				if (onNewOptimizationAppliedObservable != undefined) instance.onNewOptimizationAppliedObservable = onNewOptimizationAppliedObservable?.instance || onNewOptimizationAppliedObservable
				onNewOptimizationAppliedObservable = instance.onNewOptimizationAppliedObservable
				if (onSuccessObservable != undefined) instance.onSuccessObservable = onSuccessObservable?.instance || onSuccessObservable
				onSuccessObservable = instance.onSuccessObservable

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

			