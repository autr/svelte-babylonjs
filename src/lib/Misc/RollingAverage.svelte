
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					length  * required 
					average  
					variance  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let length = undefined // [number] * required
				// the number of samples required to saturate the sliding window
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.RollingAverage(length) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let average = undefined // [number] 
				// current average
				

				export let variance = undefined // [number] 
				// current variance
				

				// ================ METHODS ================

				
				export let add = (...args) => instance.add(...args)

				export let history = (...args) => instance.history(...args)

				export let isSaturated = (...args) => instance.isSaturated(...args)

				export let reset = (...args) => instance.reset(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:RollingAverage]`, ...args) : null

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

												if (length != undefined) instance.length = length?.instance || length
				length = instance.length
				if (average != undefined) instance.average = average?.instance || average
				average = instance.average
				if (variance != undefined) instance.variance = variance?.instance || variance
				variance = instance.variance

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

			