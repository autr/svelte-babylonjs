
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					startPoint  * required
					midPoint  * required
					endPoint  * required 
					angle  
					centerPoint  
					orientation  
					radius  
					startAngle  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let startPoint = undefined // [vector2] * required
				// defines the start point of the arc
				

				export let midPoint = undefined // [vector2] * required
				// defines the middle point of the arc
				

				export let endPoint = undefined // [vector2] * required
				// defines the end point of the arc
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Arc2(startPoint,midPoint,endPoint) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let angle = undefined // [angle] 
				// defines the angle of the arc (from mid point to end point).
				

				export let centerPoint = undefined // [vector2] 
				// defines the center point of the arc.
				

				export let orientation = undefined // [orientation] 
				// defines the orientation of the arc (clock wise/counter clock wise).
				

				export let radius = undefined // [number] 
				// defines the radius of the arc.
				

				export let startAngle = undefined // [angle] 
				// defines the start angle of the arc (from start point to middle point).
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Arc2]`, ...args) : null

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

												if (startPoint != undefined) instance.startPoint = startPoint?.instance || startPoint
				startPoint = instance.startPoint
				if (midPoint != undefined) instance.midPoint = midPoint?.instance || midPoint
				midPoint = instance.midPoint
				if (endPoint != undefined) instance.endPoint = endPoint?.instance || endPoint
				endPoint = instance.endPoint
				if (angle != undefined) instance.angle = angle?.instance || angle
				angle = instance.angle
				if (centerPoint != undefined) instance.centerPoint = centerPoint?.instance || centerPoint
				centerPoint = instance.centerPoint
				if (orientation != undefined) instance.orientation = orientation?.instance || orientation
				orientation = instance.orientation
				if (radius != undefined) instance.radius = radius?.instance || radius
				radius = instance.radius
				if (startAngle != undefined) instance.startAngle = startAngle?.instance || startAngle
				startAngle = instance.startAngle

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

			