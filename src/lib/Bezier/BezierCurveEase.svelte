
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					x1  
					y1  
					x2  
					y2   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let x1 = undefined // [number] 
				// defines the x component of the start tangent in the bezier curve
				

				export let y1 = undefined // [number] 
				// defines the y component of the start tangent in the bezier curve
				

				export let x2 = undefined // [number] 
				// defines the x component of the end tangent in the bezier curve
				

				export let y2 = undefined // [number] 
				// defines the y component of the end tangent in the bezier curve
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BezierCurveEase(x1,y1,x2,y2) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let ease = (...args) => instance.ease(...args)

				export let getEasingMode = (...args) => instance.getEasingMode(...args)

				export let setEasingMode = (...args) => instance.setEasingMode(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BezierCurveEase]`, ...args) : null

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

												if (x1 != undefined) instance.x1 = x1?.instance || x1
				x1 = instance.x1
				if (y1 != undefined) instance.y1 = y1?.instance || y1
				y1 = instance.y1
				if (x2 != undefined) instance.x2 = x2?.instance || x2
				x2 = instance.x2
				if (y2 != undefined) instance.y2 = y2?.instance || y2
				y2 = instance.y2

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

			