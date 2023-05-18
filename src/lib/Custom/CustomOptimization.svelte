
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					priority   
					onApply  
					onGetDescription  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let priority = undefined // [number] 
				// defines the priority of this optimization (0 by default which means first in the list)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.CustomOptimization(priority) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let onApply = undefined // [reflection] 
				// 
				

				export let onGetDescription = undefined // [reflection] 
				// 
				

				// ================ METHODS ================

				
				export let apply = (...args) => instance.apply(...args)

				export let getDescription = (...args) => instance.getDescription(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:CustomOptimization]`, ...args) : null

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

												if (priority != undefined) instance.priority = priority?.instance || priority
				priority = instance.priority
				if (onApply != undefined) instance.onApply = onApply?.instance || onApply
				onApply = instance.onApply
				if (onGetDescription != undefined) instance.onGetDescription = onGetDescription?.instance || onGetDescription
				onGetDescription = instance.onGetDescription

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

			