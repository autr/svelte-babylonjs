
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					type  * required
					event  * required 
					skipOnKeyboardObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let type = undefined // [number] * required
				// defines the type of event (keyboardeventtypes)
				

				export let event = undefined // [ikeyboardevent] * required
				// defines the related dom event
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.KeyboardInfoPre(type,event) : {}

				// ================ ACCESSORS ================

				
				export let skipOnPointerObservable = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let skipOnKeyboardObservable = undefined // [boolean] 
				// defines whether the engine should skip the next onkeyboardobservable associated to this pre.
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:KeyboardInfoPre]`, ...args) : null

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

												if (type != undefined) instance.type = type?.instance || type
				type = instance.type
				if (event != undefined) instance.event = event?.instance || event
				event = instance.event
				if (skipOnPointerObservable != undefined) instance.skipOnPointerObservable = skipOnPointerObservable?.instance || skipOnPointerObservable
				skipOnPointerObservable = instance.skipOnPointerObservable
				if (skipOnKeyboardObservable != undefined) instance.skipOnKeyboardObservable = skipOnKeyboardObservable?.instance || skipOnKeyboardObservable
				skipOnKeyboardObservable = instance.skipOnKeyboardObservable

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

			