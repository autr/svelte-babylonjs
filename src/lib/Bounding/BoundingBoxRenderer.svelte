
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required 
					backColor  
					enabled  
					frontColor  
					name (readonly) 
					onAfterBoxRenderingObservable  
					onBeforeBoxRenderingObservable  
					onResourcesReadyObservable  
					showBackLines  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// the scene the  renderer renders in
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BoundingBoxRenderer(scene) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let backColor = undefined // [color3] 
				// color of the bounding box lines placed behind an object
				

				export let enabled = undefined // [boolean] 
				// when false, no bounding boxes will be rendered
				

				export let frontColor = undefined // [color3] 
				// color of the bounding box lines placed in front of an object
				

				export let name = undefined // [literal] 
				// the component name helpful to identify the component in the list of scene components.
				

				export let onAfterBoxRenderingObservable = undefined // [observable] 
				// observable raised after rendering a bounding box
				

				export let onBeforeBoxRenderingObservable = undefined // [observable] 
				// observable raised before rendering a bounding box
				

				export let onResourcesReadyObservable = undefined // [observable] 
				// observable raised after resources are created
				

				export let showBackLines = undefined // [boolean] 
				// defines if the renderer should show the back lines or not
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let rebuild = (...args) => instance.rebuild(...args)

				export let register = (...args) => instance.register(...args)

				export let render = (...args) => instance.render(...args)

				export let renderOcclusionBoundingBox = (...args) => instance.renderOcclusionBoundingBox(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BoundingBoxRenderer]`, ...args) : null

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
				if (backColor != undefined) instance.backColor = backColor?.instance || backColor
				backColor = instance.backColor
				if (enabled != undefined) instance.enabled = enabled?.instance || enabled
				enabled = instance.enabled
				if (frontColor != undefined) instance.frontColor = frontColor?.instance || frontColor
				frontColor = instance.frontColor
				if (onAfterBoxRenderingObservable != undefined) instance.onAfterBoxRenderingObservable = onAfterBoxRenderingObservable?.instance || onAfterBoxRenderingObservable
				onAfterBoxRenderingObservable = instance.onAfterBoxRenderingObservable
				if (onBeforeBoxRenderingObservable != undefined) instance.onBeforeBoxRenderingObservable = onBeforeBoxRenderingObservable?.instance || onBeforeBoxRenderingObservable
				onBeforeBoxRenderingObservable = instance.onBeforeBoxRenderingObservable
				if (onResourcesReadyObservable != undefined) instance.onResourcesReadyObservable = onResourcesReadyObservable?.instance || onResourcesReadyObservable
				onResourcesReadyObservable = instance.onResourcesReadyObservable
				if (showBackLines != undefined) instance.showBackLines = showBackLines?.instance || showBackLines
				showBackLines = instance.showBackLines

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

			