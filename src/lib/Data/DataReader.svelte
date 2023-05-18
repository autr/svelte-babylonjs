
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					buffer  * required 
					byteOffset  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let buffer = undefined // [idatabuffer] * required
				// the buffer to read
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.DataReader(buffer) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let byteOffset = undefined // [number] 
				// the current byte offset from the beginning of the data buffer.
				

				// ================ METHODS ================

				
				export let loadAsync = (...args) => instance.loadAsync(...args)

				export let readString = (...args) => instance.readString(...args)

				export let readUint32 = (...args) => instance.readUint32(...args)

				export let readUint8Array = (...args) => instance.readUint8Array(...args)

				export let skipBytes = (...args) => instance.skipBytes(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:DataReader]`, ...args) : null

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

												if (buffer != undefined) instance.buffer = buffer?.instance || buffer
				buffer = instance.buffer
				if (byteOffset != undefined) instance.byteOffset = byteOffset?.instance || byteOffset
				byteOffset = instance.byteOffset

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

			