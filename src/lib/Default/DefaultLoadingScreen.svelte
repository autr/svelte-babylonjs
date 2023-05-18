
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_renderingCanvas  * required
					_loadingText  
					_loadingDivBackgroundColor   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _renderingCanvas = undefined // [htmlcanvaselement] * required
				// defines the canvas used to render the scene
				

				export let _loadingText = undefined // [string] 
				// defines the default text to display
				

				export let _loadingDivBackgroundColor = undefined // [string] 
				// defines the default background color
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.DefaultLoadingScreen(_renderingCanvas,_loadingText,_loadingDivBackgroundColor) : {}

				// ================ ACCESSORS ================

				
				export let loadingUIBackgroundColor = undefined // [string] 
				// gets or sets the color to use for the background
				

				export let loadingUIText = undefined // [string] 
				// gets or sets the text to display while loading
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let displayLoadingUI = (...args) => instance.displayLoadingUI(...args)

				export let hideLoadingUI = (...args) => instance.hideLoadingUI(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:DefaultLoadingScreen]`, ...args) : null

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

												if (_renderingCanvas != undefined) instance._renderingCanvas = _renderingCanvas?.instance || _renderingCanvas
				_renderingCanvas = instance._renderingCanvas
				if (_loadingText != undefined) instance._loadingText = _loadingText?.instance || _loadingText
				_loadingText = instance._loadingText
				if (_loadingDivBackgroundColor != undefined) instance._loadingDivBackgroundColor = _loadingDivBackgroundColor?.instance || _loadingDivBackgroundColor
				_loadingDivBackgroundColor = instance._loadingDivBackgroundColor
				if (loadingUIBackgroundColor != undefined) instance.loadingUIBackgroundColor = loadingUIBackgroundColor?.instance || loadingUIBackgroundColor
				loadingUIBackgroundColor = instance.loadingUIBackgroundColor
				if (loadingUIText != undefined) instance.loadingUIText = loadingUIText?.instance || loadingUIText
				loadingUIText = instance.loadingUIText

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

			