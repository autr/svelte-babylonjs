
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					loadMipmapLevels  
					loadSingleImage  
					supportedCompressionFormats  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BasisTranscodeConfiguration() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let loadMipmapLevels = undefined // [boolean] 
				// if mipmap levels should be loaded for transcoded images (default: true)
				

				export let loadSingleImage = undefined // [number] 
				// index of a single image to load (default: all images)
				

				export let supportedCompressionFormats = undefined // [reflection] 
				// supported compression formats used to determine the supported output format of the transcoder
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BasisTranscodeConfiguration]`, ...args) : null

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

												if (loadMipmapLevels != undefined) instance.loadMipmapLevels = loadMipmapLevels?.instance || loadMipmapLevels
				loadMipmapLevels = instance.loadMipmapLevels
				if (loadSingleImage != undefined) instance.loadSingleImage = loadSingleImage?.instance || loadSingleImage
				loadSingleImage = instance.loadSingleImage
				if (supportedCompressionFormats != undefined) instance.supportedCompressionFormats = supportedCompressionFormats?.instance || supportedCompressionFormats
				supportedCompressionFormats = instance.supportedCompressionFormats

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

			