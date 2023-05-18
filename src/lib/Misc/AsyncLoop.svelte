
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					iterations  * required
					func  * required
					successCallback  * required
					offset   
					index  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let iterations = undefined // [number] * required
				// the number of iterations.
				

				export let func = undefined // [reflection] * required
				// the function to run each iteration
				

				export let successCallback = undefined // [reflection] * required
				// the callback that will be called upon successful execution
				

				export let offset = undefined // [number] 
				// starting offset.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AsyncLoop(iterations,func,successCallback,offset) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let index = undefined // [number] 
				// defines the current index of the loop.
				

				// ================ METHODS ================

				
				export let breakLoop = (...args) => instance.breakLoop(...args)

				export let executeNext = (...args) => instance.executeNext(...args)

				export let Run = (...args) => instance.Run(...args)

				export let SyncAsyncForLoop = (...args) => instance.SyncAsyncForLoop(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AsyncLoop]`, ...args) : null

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

												if (iterations != undefined) instance.iterations = iterations?.instance || iterations
				iterations = instance.iterations
				if (func != undefined) instance.func = func?.instance || func
				func = instance.func
				if (successCallback != undefined) instance.successCallback = successCallback?.instance || successCallback
				successCallback = instance.successCallback
				if (offset != undefined) instance.offset = offset?.instance || offset
				offset = instance.offset
				if (index != undefined) instance.index = index?.instance || index
				index = instance.index

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

			