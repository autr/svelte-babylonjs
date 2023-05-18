
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] 
				// defines the hosting scene
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.InputManager(scene) : {}

				// ================ ACCESSORS ================

				
				export let meshUnderPointer = undefined // [nullable] 
				// 
				

				export let pointerX = undefined // [number] 
				// 
				

				export let pointerY = undefined // [number] 
				// 
				

				export let unTranslatedPointer = undefined // [vector2] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let attachControl = (...args) => instance.attachControl(...args)

				export let detachControl = (...args) => instance.detachControl(...args)

				export let getMeshUnderPointerByPointerId = (...args) => instance.getMeshUnderPointerByPointerId(...args)

				export let getPointerOverMesh = (...args) => instance.getPointerOverMesh(...args)

				export let isPointerCaptured = (...args) => instance.isPointerCaptured(...args)

				export let setPointerOverMesh = (...args) => instance.setPointerOverMesh(...args)

				export let simulatePointerDown = (...args) => instance.simulatePointerDown(...args)

				export let simulatePointerMove = (...args) => instance.simulatePointerMove(...args)

				export let simulatePointerUp = (...args) => instance.simulatePointerUp(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:InputManager]`, ...args) : null

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

												if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene

				meshUnderPointer = instance.meshUnderPointer
				if (pointerX != undefined) instance.pointerX = pointerX?.instance || pointerX
				pointerX = instance.pointerX
				if (pointerY != undefined) instance.pointerY = pointerY?.instance || pointerY
				pointerY = instance.pointerY

				unTranslatedPointer = instance.unTranslatedPointer

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

			