
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					onObserverAdded   
					_coroutineScheduler  
					_coroutineSchedulerDispose  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let onObserverAdded = undefined // [reflection] 
				// defines a callback to call when a new observer is added
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Observable(onObserverAdded) : {}

				// ================ ACCESSORS ================

				
				export let observers = undefined // [array] 
				// 
				

				// ================ PROPERTIES ================

				
				export let _coroutineScheduler = undefined // [coroutinescheduler] 
				// internal observable-based coroutine scheduler instance.
				

				export let _coroutineSchedulerDispose = undefined // [reflection] 
				// 
				

				// ================ METHODS ================

				
				export let add = (...args) => instance.add(...args)

				export let addOnce = (...args) => instance.addOnce(...args)

				export let cancelAllCoroutines = (...args) => instance.cancelAllCoroutines(...args)

				export let clear = (...args) => instance.clear(...args)

				export let clone = (...args) => instance.clone(...args)

				export let hasObservers = (...args) => instance.hasObservers(...args)

				export let hasSpecificMask = (...args) => instance.hasSpecificMask(...args)

				export let makeObserverBottomPriority = (...args) => instance.makeObserverBottomPriority(...args)

				export let makeObserverTopPriority = (...args) => instance.makeObserverTopPriority(...args)

				export let notifyObserver = (...args) => instance.notifyObserver(...args)

				export let notifyObservers = (...args) => instance.notifyObservers(...args)

				export let notifyObserversWithPromise = (...args) => instance.notifyObserversWithPromise(...args)

				export let remove = (...args) => instance.remove(...args)

				export let removeCallback = (...args) => instance.removeCallback(...args)

				export let runCoroutineAsync = (...args) => instance.runCoroutineAsync(...args)

				export let FromPromise = (...args) => instance.FromPromise(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Observable]`, ...args) : null

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

												if (onObserverAdded != undefined) instance.onObserverAdded = onObserverAdded?.instance || onObserverAdded
				onObserverAdded = instance.onObserverAdded

				observers = instance.observers
				if (_coroutineScheduler != undefined) instance._coroutineScheduler = _coroutineScheduler?.instance || _coroutineScheduler
				_coroutineScheduler = instance._coroutineScheduler
				if (_coroutineSchedulerDispose != undefined) instance._coroutineSchedulerDispose = _coroutineSchedulerDispose?.instance || _coroutineSchedulerDispose
				_coroutineSchedulerDispose = instance._coroutineSchedulerDispose

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

			