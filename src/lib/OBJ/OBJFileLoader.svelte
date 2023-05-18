
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					loadingOptions   
					extensions  
					name  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let loadingOptions = undefined // [objloadingoptions] 
				// options for loading and parsing obj/mtl files.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.OBJFileLoader(loadingOptions) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let extensions = undefined // [string] 
				// defines the extension the plugin is able to load.
				

				export let name = undefined // [string] 
				// defines the name of the plugin.
				

				// ================ METHODS ================

				
				export let canDirectLoad = (...args) => instance.canDirectLoad(...args)

				export let createPlugin = (...args) => instance.createPlugin(...args)

				export let importMeshAsync = (...args) => instance.importMeshAsync(...args)

				export let loadAssetContainerAsync = (...args) => instance.loadAssetContainerAsync(...args)

				export let loadAsync = (...args) => instance.loadAsync(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:OBJFileLoader]`, ...args) : null

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

												if (loadingOptions != undefined) instance.loadingOptions = loadingOptions?.instance || loadingOptions
				loadingOptions = instance.loadingOptions
				if (extensions != undefined) instance.extensions = extensions?.instance || extensions
				extensions = instance.extensions
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name

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

			