
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					materialToUse  * required
					babylonMeshesArray  * required
					loadingOptions  * required 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let materialToUse = undefined // [array] * required
				// defines the array to fill with the list of materials to use (it will be filled by the parse function)
				

				export let babylonMeshesArray = undefined // [array] * required
				// defines the array to fill with the list of loaded meshes (it will be filled by the parse function)
				

				export let loadingOptions = undefined // [objloadingoptions] * required
				// defines the loading options to use
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SolidParser(materialToUse,babylonMeshesArray,loadingOptions) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let parse = (...args) => instance.parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SolidParser]`, ...args) : null

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

												if (materialToUse != undefined) instance.materialToUse = materialToUse?.instance || materialToUse
				materialToUse = instance.materialToUse
				if (babylonMeshesArray != undefined) instance.babylonMeshesArray = babylonMeshesArray?.instance || babylonMeshesArray
				babylonMeshesArray = instance.babylonMeshesArray
				if (loadingOptions != undefined) instance.loadingOptions = loadingOptions?.instance || loadingOptions
				loadingOptions = instance.loadingOptions

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

			