
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					options   
					onPressureChanged  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let options = undefined // [pressureobserveroptions] 
				// an object containing the thresholds used to decide what value to to return for each update property (average of start and end of a threshold boundary).
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PressureObserverWrapper(options) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let onPressureChanged = undefined // [observable] 
				// an event triggered when the cpu usage/speed meets certain thresholds.note: pressure is an experimental api.
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let observe = (...args) => instance.observe(...args)

				export let unobserve = (...args) => instance.unobserve(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PressureObserverWrapper]`, ...args) : null

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

												if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (onPressureChanged != undefined) instance.onPressureChanged = onPressureChanged?.instance || onPressureChanged
				onPressureChanged = instance.onPressureChanged

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

			