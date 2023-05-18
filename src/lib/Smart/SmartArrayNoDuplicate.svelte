
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					capacity  * required 
					data  
					length  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let capacity = undefined // [number] * required
				// defines the default capacity of the array.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SmartArrayNoDuplicate(capacity) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let data = undefined // [array] 
				// the full set of data from the array.
				

				export let length = undefined // [number] 
				// the active length of the array.
				

				// ================ METHODS ================

				
				export let concat = (...args) => instance.concat(...args)

				export let concatWithNoDuplicate = (...args) => instance.concatWithNoDuplicate(...args)

				export let contains = (...args) => instance.contains(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let forEach = (...args) => instance.forEach(...args)

				export let indexOf = (...args) => instance.indexOf(...args)

				export let push = (...args) => instance.push(...args)

				export let pushNoDuplicate = (...args) => instance.pushNoDuplicate(...args)

				export let reset = (...args) => instance.reset(...args)

				export let sort = (...args) => instance.sort(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SmartArrayNoDuplicate]`, ...args) : null

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

												if (capacity != undefined) instance.capacity = capacity?.instance || capacity
				capacity = instance.capacity
				if (data != undefined) instance.data = data?.instance || data
				data = instance.data
				if (length != undefined) instance.length = length?.instance || length
				length = instance.length

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

			