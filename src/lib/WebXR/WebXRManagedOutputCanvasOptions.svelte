
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					canvasElement  
					canvasOptions  
					newCanvasCssStyle  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRManagedOutputCanvasOptions() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let canvasElement = undefined // [htmlcanvaselement] 
				// an optional canvas in case you wish to create it yourself and provide it here.if not provided, a new canvas will be created
				

				export let canvasOptions = undefined // [xrwebgllayerinit] 
				// options for this xr layer output
				

				export let newCanvasCssStyle = undefined // [string] 
				// css styling for a newly created canvas (if not provided)
				

				// ================ METHODS ================

				
				export let GetDefaults = (...args) => instance.GetDefaults(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRManagedOutputCanvasOptions]`, ...args) : null

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

												if (canvasElement != undefined) instance.canvasElement = canvasElement?.instance || canvasElement
				canvasElement = instance.canvasElement
				if (canvasOptions != undefined) instance.canvasOptions = canvasOptions?.instance || canvasOptions
				canvasOptions = instance.canvasOptions
				if (newCanvasCssStyle != undefined) instance.newCanvasCssStyle = newCanvasCssStyle?.instance || newCanvasCssStyle
				newCanvasCssStyle = instance.newCanvasCssStyle

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

			