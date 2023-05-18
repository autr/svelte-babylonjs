
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PerfCounter() : {}

				// ================ ACCESSORS ================

				
				export let average = undefined // [number] 
				// 
				

				export let count = undefined // [number] 
				// 
				

				export let current = undefined // [number] 
				// 
				

				export let lastSecAverage = undefined // [number] 
				// 
				

				export let max = undefined // [number] 
				// 
				

				export let min = undefined // [number] 
				// 
				

				export let total = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let addCount = (...args) => instance.addCount(...args)

				export let beginMonitoring = (...args) => instance.beginMonitoring(...args)

				export let endMonitoring = (...args) => instance.endMonitoring(...args)

				export let fetchNewFrame = (...args) => instance.fetchNewFrame(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PerfCounter]`, ...args) : null

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

								
				average = instance.average

				count = instance.count

				current = instance.current

				lastSecAverage = instance.lastSecAverage

				max = instance.max

				min = instance.min

				total = instance.total

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

			