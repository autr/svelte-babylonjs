
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					engine  * required
					data  * required
					kind  * required
					updatable  * required
					postponeInternalCreation  
					stride  
					instanced  
					offset  
					size  
					type  
					normalized  
					useBytes  
					divisor  
					takeBufferOwnership   
					byteOffset (readonly) 
					byteStride (readonly) 
					hashCode (readonly) 
					uniqueId (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let engine = undefined // [any] * required
				// the engine
				

				export let data = undefined // [union] * required
				// the data to use for this vertex buffer
				

				export let kind = undefined // [string] * required
				// the vertex buffer kind
				

				export let updatable = undefined // [boolean] * required
				// whether the data is updatable
				

				export let postponeInternalCreation = undefined // [boolean] 
				// whether to postpone creating the internal webgl buffer (optional)
				

				export let stride = undefined // [number] 
				// the stride (optional)
				

				export let instanced = undefined // [boolean] 
				// whether the buffer is instanced (optional)
				

				export let offset = undefined // [number] 
				// the offset of the data (optional)
				

				export let size = undefined // [number] 
				// the number of components (optional)
				

				export let type = undefined // [number] 
				// the type of the component (optional)
				

				export let normalized = undefined // [boolean] 
				// whether the data contains normalized data (optional)
				

				export let useBytes = undefined // [boolean] 
				// set to true if stride and offset are in bytes (optional)
				

				export let divisor = undefined // [number] 
				// defines the instance divisor to use (1 by default)
				

				export let takeBufferOwnership = undefined // [boolean] 
				// defines if the buffer should be released when the vertex buffer is disposed
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.VertexBuffer(engine,data,kind,updatable,postponeInternalCreation,stride,instanced,offset,size,type,normalized,useBytes,divisor,takeBufferOwnership) : {}

				// ================ ACCESSORS ================

				
				export let instanceDivisor = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let byteOffset = undefined // [number] 
				// gets the byte offset.
				

				export let byteStride = undefined // [number] 
				// gets the byte stride.
				

				export let hashCode = undefined // [number] 
				// gets a hash code representing the format (type, normalized, size, instanced, stride) of this bufferall buffers with the same format will have the same hash code
				

				export let uniqueId = undefined // [number] 
				// gets the unique id of this vertex buffer
				

				// ================ METHODS ================

				
				export let create = (...args) => instance.create(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let forEach = (...args) => instance.forEach(...args)

				export let getBuffer = (...args) => instance.getBuffer(...args)

				export let getData = (...args) => instance.getData(...args)

				export let getFloatData = (...args) => instance.getFloatData(...args)

				export let getInstanceDivisor = (...args) => instance.getInstanceDivisor(...args)

				export let getIsInstanced = (...args) => instance.getIsInstanced(...args)

				export let getKind = (...args) => instance.getKind(...args)

				export let getOffset = (...args) => instance.getOffset(...args)

				export let getSize = (...args) => instance.getSize(...args)

				export let getStrideSize = (...args) => instance.getStrideSize(...args)

				export let isUpdatable = (...args) => instance.isUpdatable(...args)

				export let update = (...args) => instance.update(...args)

				export let updateDirectly = (...args) => instance.updateDirectly(...args)

				export let DeduceStride = (...args) => instance.DeduceStride(...args)

				export let ForEach = (...args) => instance.ForEach(...args)

				export let GetTypeByteLength = (...args) => instance.GetTypeByteLength(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:VertexBuffer]`, ...args) : null

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
				if (data != undefined) instance.data = data?.instance || data
				data = instance.data
				if (kind != undefined) instance.kind = kind?.instance || kind
				kind = instance.kind
				if (updatable != undefined) instance.updatable = updatable?.instance || updatable
				updatable = instance.updatable
				if (postponeInternalCreation != undefined) instance.postponeInternalCreation = postponeInternalCreation?.instance || postponeInternalCreation
				postponeInternalCreation = instance.postponeInternalCreation
				if (stride != undefined) instance.stride = stride?.instance || stride
				stride = instance.stride
				if (instanced != undefined) instance.instanced = instanced?.instance || instanced
				instanced = instance.instanced
				if (offset != undefined) instance.offset = offset?.instance || offset
				offset = instance.offset
				if (size != undefined) instance.size = size?.instance || size
				size = instance.size
				if (type != undefined) instance.type = type?.instance || type
				type = instance.type
				if (normalized != undefined) instance.normalized = normalized?.instance || normalized
				normalized = instance.normalized
				if (useBytes != undefined) instance.useBytes = useBytes?.instance || useBytes
				useBytes = instance.useBytes
				if (divisor != undefined) instance.divisor = divisor?.instance || divisor
				divisor = instance.divisor
				if (takeBufferOwnership != undefined) instance.takeBufferOwnership = takeBufferOwnership?.instance || takeBufferOwnership
				takeBufferOwnership = instance.takeBufferOwnership
				if (instanceDivisor != undefined) instance.instanceDivisor = instanceDivisor?.instance || instanceDivisor
				instanceDivisor = instance.instanceDivisor

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

			