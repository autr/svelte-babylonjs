
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SceneLoader() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let Append = (...args) => instance.Append(...args)

				export let AppendAsync = (...args) => instance.AppendAsync(...args)

				export let GetDefaultPlugin = (...args) => instance.GetDefaultPlugin(...args)

				export let GetPluginForExtension = (...args) => instance.GetPluginForExtension(...args)

				export let ImportAnimations = (...args) => instance.ImportAnimations(...args)

				export let ImportAnimationsAsync = (...args) => instance.ImportAnimationsAsync(...args)

				export let ImportMesh = (...args) => instance.ImportMesh(...args)

				export let ImportMeshAsync = (...args) => instance.ImportMeshAsync(...args)

				export let IsPluginForExtensionAvailable = (...args) => instance.IsPluginForExtensionAvailable(...args)

				export let Load = (...args) => instance.Load(...args)

				export let LoadAssetContainer = (...args) => instance.LoadAssetContainer(...args)

				export let LoadAssetContainerAsync = (...args) => instance.LoadAssetContainerAsync(...args)

				export let LoadAsync = (...args) => instance.LoadAsync(...args)

				export let RegisterPlugin = (...args) => instance.RegisterPlugin(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SceneLoader]`, ...args) : null

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

			