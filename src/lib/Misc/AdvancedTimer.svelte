
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					options  * required 
					onEachCountObservable  
					onStateChangedObservable  
					onTimerAbortedObservable  
					onTimerEndedObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let options = undefined // [itimeroptions] * required
				// construction options for this advanced timer
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AdvancedTimer(options) : {}

				// ================ ACCESSORS ================

				
				export let breakCondition = undefined // [] 
				// 
				

				// ================ PROPERTIES ================

				
				export let onEachCountObservable = undefined // [observable] 
				// will notify each time the timer calculates the remaining time
				

				export let onStateChangedObservable = undefined // [observable] 
				// will trigger when the timer state has changed
				

				export let onTimerAbortedObservable = undefined // [observable] 
				// will trigger when the timer was aborted due to the break condition
				

				export let onTimerEndedObservable = undefined // [observable] 
				// will trigger when the timer ended successfully
				

				// ================ METHODS ================

				
				export let clearObservables = (...args) => instance.clearObservables(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let start = (...args) => instance.start(...args)

				export let stop = (...args) => instance.stop(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AdvancedTimer]`, ...args) : null

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
				if (breakCondition != undefined) instance.breakCondition = breakCondition?.instance || breakCondition
				breakCondition = instance.breakCondition
				if (onEachCountObservable != undefined) instance.onEachCountObservable = onEachCountObservable?.instance || onEachCountObservable
				onEachCountObservable = instance.onEachCountObservable
				if (onStateChangedObservable != undefined) instance.onStateChangedObservable = onStateChangedObservable?.instance || onStateChangedObservable
				onStateChangedObservable = instance.onStateChangedObservable
				if (onTimerAbortedObservable != undefined) instance.onTimerAbortedObservable = onTimerAbortedObservable?.instance || onTimerAbortedObservable
				onTimerAbortedObservable = instance.onTimerAbortedObservable
				if (onTimerEndedObservable != undefined) instance.onTimerEndedObservable = onTimerEndedObservable?.instance || onTimerEndedObservable
				onTimerEndedObservable = instance.onTimerEndedObservable

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

			