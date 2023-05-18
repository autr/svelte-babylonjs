
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					camera  
					clearBeforeCopy  
					customResize  
					enabled  
					id (readonly) 
					target  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.EngineView() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let camera = undefined // [camera] 
				// defines an optional camera used to render the view (will use active camera else)
				

				export let clearBeforeCopy = undefined // [boolean] 
				// indicates if the destination view canvas should be cleared before copying the parent canvas. can help if the scene clear color has alpha < 1
				

				export let customResize = undefined // [reflection] 
				// 
				

				export let enabled = undefined // [boolean] 
				// indicates if the view is enabled (true by default)
				

				export let id = undefined // [string] 
				// a randomly generated unique id
				

				export let target = undefined // [htmlcanvaselement] 
				// defines the canvas where to render the view
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:EngineView]`, ...args) : null

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

												if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (clearBeforeCopy != undefined) instance.clearBeforeCopy = clearBeforeCopy?.instance || clearBeforeCopy
				clearBeforeCopy = instance.clearBeforeCopy
				if (customResize != undefined) instance.customResize = customResize?.instance || customResize
				customResize = instance.customResize
				if (enabled != undefined) instance.enabled = enabled?.instance || enabled
				enabled = instance.enabled
				if (target != undefined) instance.target = target?.instance || target
				target = instance.target

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

			