
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					engine  * required
					size  * required
					creationFlags   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let engine = undefined // [thinengine] * required
				// the engine the buffer will be created inside
				

				export let size = undefined // [number] * required
				// the size of the buffer in bytes
				

				export let creationFlags = undefined // [number] 
				// flags to use when creating the buffer (see constants.buffer_creationflag_xxx). the buffer_creationflag_storage flag will be automatically added.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.StorageBuffer(engine,size,creationFlags) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getBuffer = (...args) => instance.getBuffer(...args)

				export let read = (...args) => instance.read(...args)

				export let update = (...args) => instance.update(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:StorageBuffer]`, ...args) : null

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

												if (engine != undefined) instance.engine = engine?.instance || engine
				engine = instance.engine
				if (size != undefined) instance.size = size?.instance || size
				size = instance.size
				if (creationFlags != undefined) instance.creationFlags = creationFlags?.instance || creationFlags
				creationFlags = instance.creationFlags

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

			