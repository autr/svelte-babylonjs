
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					capacity  
					is32Bits  
					nativeIndexBuffer  
					nativeVertexBuffer  
					references  
					uniqueId (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.NativeDataBuffer() : {}

				// ================ ACCESSORS ================

				
				export let underlyingResource = undefined // [any] 
				// 
				

				// ================ PROPERTIES ================

				
				export let capacity = undefined // [number] 
				// gets or sets the size of the underlying buffer
				

				export let is32Bits = undefined // [boolean] 
				// gets or sets a boolean indicating if the buffer contains 32bits indices
				

				export let nativeIndexBuffer = undefined // [uint32array] 
				// accessor value used to identify/retrieve a natively-stored index buffer.
				

				export let nativeVertexBuffer = undefined // [uint32array] 
				// accessor value used to identify/retrieve a natively-stored vertex buffer.
				

				export let references = undefined // [number] 
				// gets or sets the number of objects referencing this buffer
				

				export let uniqueId = undefined // [number] 
				// gets the unique id of this buffer
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:NativeDataBuffer]`, ...args) : null

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

								
				underlyingResource = instance.underlyingResource
				if (capacity != undefined) instance.capacity = capacity?.instance || capacity
				capacity = instance.capacity
				if (is32Bits != undefined) instance.is32Bits = is32Bits?.instance || is32Bits
				is32Bits = instance.is32Bits
				if (nativeIndexBuffer != undefined) instance.nativeIndexBuffer = nativeIndexBuffer?.instance || nativeIndexBuffer
				nativeIndexBuffer = instance.nativeIndexBuffer
				if (nativeVertexBuffer != undefined) instance.nativeVertexBuffer = nativeVertexBuffer?.instance || nativeVertexBuffer
				nativeVertexBuffer = instance.nativeVertexBuffer
				if (references != undefined) instance.references = references?.instance || references
				references = instance.references

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

			