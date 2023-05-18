
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					frame  * required
					action  * required
					onlyOnce   
					isDone  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let frame = undefined // [number] * required
				// the frame for which the event is triggered
				

				export let action = undefined // [reflection] * required
				// the event to perform when triggered
				

				export let onlyOnce = undefined // [boolean] 
				// specifies if the event should be triggered only once
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AnimationEvent(frame,action,onlyOnce) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let isDone = undefined // [boolean] 
				// specifies if the animation event is done
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AnimationEvent]`, ...args) : null

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

												if (frame != undefined) instance.frame = frame?.instance || frame
				frame = instance.frame
				if (action != undefined) instance.action = action?.instance || action
				action = instance.action
				if (onlyOnce != undefined) instance.onlyOnce = onlyOnce?.instance || onlyOnce
				onlyOnce = instance.onlyOnce
				if (isDone != undefined) instance.isDone = isDone?.instance || isDone
				isDone = instance.isDone

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

			