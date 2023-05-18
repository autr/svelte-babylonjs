
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					originalScene  * required
					handleEvents   
					mainSceneTrackerPredicate  
					onPointerOutObservable  
					onlyCheckPointerDownEvents  
					pickUtilitySceneFirst  
					pickingEnabled  
					processAllEvents  
					shouldRender  
					utilityLayerScene  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let originalScene = undefined // [scene] * required
				// the original scene that will be rendered on top of
				

				export let handleEvents = undefined // [boolean] 
				// boolean indicating if the utility layer should handle events
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.UtilityLayerRenderer(originalScene,handleEvents) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let mainSceneTrackerPredicate = undefined // [reflection] 
				// 
				

				export let onPointerOutObservable = undefined // [observable] 
				// observable raised when the pointer moves from the utility layer scene to the main scene
				

				export let onlyCheckPointerDownEvents = undefined // [boolean] 
				// if set to true, only pointer down onpointerobservable events will be blocked when picking is occluded by original scene
				

				export let pickUtilitySceneFirst = undefined // [boolean] 
				// if the picking should be done on the utility layer prior to the actual scene (default: true)
				

				export let pickingEnabled = undefined // [boolean] 
				// set to false to disable picking
				

				export let processAllEvents = undefined // [boolean] 
				// if set to false, only pointerup, pointerdown and pointermove will be sent to the utilitylayerscene (false by default)
				

				export let shouldRender = undefined // [boolean] 
				// if the utility layer should automatically be rendered on top of existing scene
				

				export let utilityLayerScene = undefined // [scene] 
				// the scene that is rendered on top of the original scene
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getRenderCamera = (...args) => instance.getRenderCamera(...args)

				export let render = (...args) => instance.render(...args)

				export let setRenderCamera = (...args) => instance.setRenderCamera(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:UtilityLayerRenderer]`, ...args) : null

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

												if (originalScene != undefined) instance.originalScene = originalScene?.instance || originalScene
				originalScene = instance.originalScene
				if (handleEvents != undefined) instance.handleEvents = handleEvents?.instance || handleEvents
				handleEvents = instance.handleEvents
				if (mainSceneTrackerPredicate != undefined) instance.mainSceneTrackerPredicate = mainSceneTrackerPredicate?.instance || mainSceneTrackerPredicate
				mainSceneTrackerPredicate = instance.mainSceneTrackerPredicate
				if (onPointerOutObservable != undefined) instance.onPointerOutObservable = onPointerOutObservable?.instance || onPointerOutObservable
				onPointerOutObservable = instance.onPointerOutObservable
				if (onlyCheckPointerDownEvents != undefined) instance.onlyCheckPointerDownEvents = onlyCheckPointerDownEvents?.instance || onlyCheckPointerDownEvents
				onlyCheckPointerDownEvents = instance.onlyCheckPointerDownEvents
				if (pickUtilitySceneFirst != undefined) instance.pickUtilitySceneFirst = pickUtilitySceneFirst?.instance || pickUtilitySceneFirst
				pickUtilitySceneFirst = instance.pickUtilitySceneFirst
				if (pickingEnabled != undefined) instance.pickingEnabled = pickingEnabled?.instance || pickingEnabled
				pickingEnabled = instance.pickingEnabled
				if (processAllEvents != undefined) instance.processAllEvents = processAllEvents?.instance || processAllEvents
				processAllEvents = instance.processAllEvents
				if (shouldRender != undefined) instance.shouldRender = shouldRender?.instance || shouldRender
				shouldRender = instance.shouldRender
				if (utilityLayerScene != undefined) instance.utilityLayerScene = utilityLayerScene?.instance || utilityLayerScene
				utilityLayerScene = instance.utilityLayerScene

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

			