
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					callback  * required
					mask  * required
					scope   
					unregisterOnNextCall  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let callback = undefined // [reflection] * required
				// defines the callback to call when the observer is notified
				

				export let mask = undefined // [number] * required
				// defines the mask of the observer (used to filter notifications)
				

				export let scope = undefined // [any] 
				// defines the current scope used to restore the js context
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Observer(callback,mask,scope) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let unregisterOnNextCall = undefined // [boolean] 
				// gets or sets a property defining that the observer as to be unregistered after the next notification
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Observer]`, ...args) : null

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

												if (callback != undefined) instance.callback = callback?.instance || callback
				callback = instance.callback
				if (mask != undefined) instance.mask = mask?.instance || mask
				mask = instance.mask
				if (scope != undefined) instance.scope = scope?.instance || scope
				scope = instance.scope
				if (unregisterOnNextCall != undefined) instance.unregisterOnNextCall = unregisterOnNextCall?.instance || unregisterOnNextCall
				unregisterOnNextCall = instance.unregisterOnNextCall

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

			