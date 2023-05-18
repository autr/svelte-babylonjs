
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
					updatable  * required
					stride  
					postponeInternalCreation  
					instanced  
					useBytes  
					divisor   
					byteStride (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let engine = undefined // [any] * required
				// the engine
				

				export let data = undefined // [union] * required
				// the data to use for this buffer
				

				export let updatable = undefined // [boolean] * required
				// whether the data is updatable
				

				export let stride = undefined // [number] 
				// the stride (optional)
				

				export let postponeInternalCreation = undefined // [boolean] 
				// whether to postpone creating the internal webgl buffer (optional)
				

				export let instanced = undefined // [boolean] 
				// whether the buffer is instanced (optional)
				

				export let useBytes = undefined // [boolean] 
				// set to true if the stride in in bytes (optional)
				

				export let divisor = undefined // [number] 
				// sets an optional divisor for instances (1 by default)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Buffer(engine,data,updatable,stride,postponeInternalCreation,instanced,useBytes,divisor) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let byteStride = undefined // [number] 
				// gets the byte stride.
				

				// ================ METHODS ================

				
				export let create = (...args) => instance.create(...args)

				export let createVertexBuffer = (...args) => instance.createVertexBuffer(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getBuffer = (...args) => instance.getBuffer(...args)

				export let getData = (...args) => instance.getData(...args)

				export let getStrideSize = (...args) => instance.getStrideSize(...args)

				export let isUpdatable = (...args) => instance.isUpdatable(...args)

				export let update = (...args) => instance.update(...args)

				export let updateDirectly = (...args) => instance.updateDirectly(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Buffer]`, ...args) : null

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
				if (updatable != undefined) instance.updatable = updatable?.instance || updatable
				updatable = instance.updatable
				if (stride != undefined) instance.stride = stride?.instance || stride
				stride = instance.stride
				if (postponeInternalCreation != undefined) instance.postponeInternalCreation = postponeInternalCreation?.instance || postponeInternalCreation
				postponeInternalCreation = instance.postponeInternalCreation
				if (instanced != undefined) instance.instanced = instanced?.instance || instanced
				instanced = instance.instanced
				if (useBytes != undefined) instance.useBytes = useBytes?.instance || useBytes
				useBytes = instance.useBytes
				if (divisor != undefined) instance.divisor = divisor?.instance || divisor
				divisor = instance.divisor

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

			