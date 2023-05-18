
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					urlToScene  * required
					callbackManifestChecked  * required
					disableManifestCheck   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let urlToScene = undefined // [string] * required
				// defines the url to load the scene
				

				export let callbackManifestChecked = undefined // [reflection] * required
				// defines the callback to use when manifest is checked
				

				export let disableManifestCheck = undefined // [boolean] 
				// defines a boolean indicating that we want to skip the manifest validation (it will be considered validated and up to date)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Database(urlToScene,callbackManifestChecked,disableManifestCheck) : {}

				// ================ ACCESSORS ================

				
				export let enableSceneOffline = undefined // [boolean] 
				// gets a boolean indicating if scene must be saved in the database
				

				export let enableTexturesOffline = undefined // [boolean] 
				// gets a boolean indicating if textures must be saved in the database
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let loadFile = (...args) => instance.loadFile(...args)

				export let loadImage = (...args) => instance.loadImage(...args)

				export let open = (...args) => instance.open(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Database]`, ...args) : null

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

												if (urlToScene != undefined) instance.urlToScene = urlToScene?.instance || urlToScene
				urlToScene = instance.urlToScene
				if (callbackManifestChecked != undefined) instance.callbackManifestChecked = callbackManifestChecked?.instance || callbackManifestChecked
				callbackManifestChecked = instance.callbackManifestChecked
				if (disableManifestCheck != undefined) instance.disableManifestCheck = disableManifestCheck?.instance || disableManifestCheck
				disableManifestCheck = instance.disableManifestCheck

				enableSceneOffline = instance.enableSceneOffline

				enableTexturesOffline = instance.enableTexturesOffline

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

			