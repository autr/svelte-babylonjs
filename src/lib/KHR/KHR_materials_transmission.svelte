
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					exporter  * required 
					enabled  
					name (readonly) 
					required  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let exporter = undefined // [_exporter] * required
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.KHR_materials_transmission(exporter) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let enabled = undefined // [boolean] 
				// defines whether this extension is enabled
				

				export let name = undefined // [literal] 
				// name of this extension
				

				export let required = undefined // [boolean] 
				// defines whether this extension is required
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let postExportMaterialAdditionalTextures = (...args) => instance.postExportMaterialAdditionalTextures(...args)

				export let postExportMaterialAsync = (...args) => instance.postExportMaterialAsync(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:KHR_materials_transmission]`, ...args) : null

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

												if (exporter != undefined) instance.exporter = exporter?.instance || exporter
				exporter = instance.exporter
				if (enabled != undefined) instance.enabled = enabled?.instance || enabled
				enabled = instance.enabled
				if (required != undefined) instance.required = required?.instance || required
				required = instance.required

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

			