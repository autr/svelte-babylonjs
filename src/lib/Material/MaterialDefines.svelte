
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					externalProperties   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let externalProperties = undefined // [reflection] 
				// list of external properties to inject into the object
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.MaterialDefines(externalProperties) : {}

				// ================ ACCESSORS ================

				
				export let isDirty = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let cloneTo = (...args) => instance.cloneTo(...args)

				export let isEqual = (...args) => instance.isEqual(...args)

				export let markAllAsDirty = (...args) => instance.markAllAsDirty(...args)

				export let markAsAttributesDirty = (...args) => instance.markAsAttributesDirty(...args)

				export let markAsFresnelDirty = (...args) => instance.markAsFresnelDirty(...args)

				export let markAsImageProcessingDirty = (...args) => instance.markAsImageProcessingDirty(...args)

				export let markAsLightDirty = (...args) => instance.markAsLightDirty(...args)

				export let markAsMiscDirty = (...args) => instance.markAsMiscDirty(...args)

				export let markAsPrePassDirty = (...args) => instance.markAsPrePassDirty(...args)

				export let markAsProcessed = (...args) => instance.markAsProcessed(...args)

				export let markAsTexturesDirty = (...args) => instance.markAsTexturesDirty(...args)

				export let markAsUnprocessed = (...args) => instance.markAsUnprocessed(...args)

				export let rebuild = (...args) => instance.rebuild(...args)

				export let reset = (...args) => instance.reset(...args)

				export let toString = (...args) => instance.toString(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:MaterialDefines]`, ...args) : null

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

												if (externalProperties != undefined) instance.externalProperties = externalProperties?.instance || externalProperties
				externalProperties = instance.externalProperties

				isDirty = instance.isDirty

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

			