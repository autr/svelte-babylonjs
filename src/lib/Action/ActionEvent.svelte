
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					source  * required
					pointerX  * required
					pointerY  * required
					meshUnderPointer  * required
					sourceEvent  
					additionalData   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let source = undefined // [any] * required
				// the mesh or sprite that triggered the action
				

				export let pointerX = undefined // [number] * required
				// the x mouse cursor position at the time of the event
				

				export let pointerY = undefined // [number] * required
				// the y mouse cursor position at the time of the event
				

				export let meshUnderPointer = undefined // [nullable] * required
				// the mesh that is currently pointed at (can be null)
				

				export let sourceEvent = undefined // [any] 
				// the original (browser) event that triggered the actionevent
				

				export let additionalData = undefined // [any] 
				// additional data for the event
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ActionEvent(source,pointerX,pointerY,meshUnderPointer,sourceEvent,additionalData) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let CreateNew = (...args) => instance.CreateNew(...args)

				export let CreateNewFromPrimitive = (...args) => instance.CreateNewFromPrimitive(...args)

				export let CreateNewFromScene = (...args) => instance.CreateNewFromScene(...args)

				export let CreateNewFromSprite = (...args) => instance.CreateNewFromSprite(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ActionEvent]`, ...args) : null

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

												if (source != undefined) instance.source = source?.instance || source
				source = instance.source
				if (pointerX != undefined) instance.pointerX = pointerX?.instance || pointerX
				pointerX = instance.pointerX
				if (pointerY != undefined) instance.pointerY = pointerY?.instance || pointerY
				pointerY = instance.pointerY
				if (meshUnderPointer != undefined) instance.meshUnderPointer = meshUnderPointer?.instance || meshUnderPointer
				meshUnderPointer = instance.meshUnderPointer
				if (sourceEvent != undefined) instance.sourceEvent = sourceEvent?.instance || sourceEvent
				sourceEvent = instance.sourceEvent
				if (additionalData != undefined) instance.additionalData = additionalData?.instance || additionalData
				additionalData = instance.additionalData

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

			