
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					centrifugalForceMultiplier  
					centripetalForceMultiplier  
					centripetalForceThreshold  
					height  
					radius  
					strength  
					updraftForceMultiplier  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PhysicsVortexEventOptions() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let centrifugalForceMultiplier = undefined // [number] 
				// this multiplier determines with how much force the objects will be pushed sideways/around the vortex, when above the threshold.
				

				export let centripetalForceMultiplier = undefined // [number] 
				// this multiplier determines with how much force the objects will be pushed sideways/around the vortex, when below the threshold.
				

				export let centripetalForceThreshold = undefined // [number] 
				// at which distance, relative to the radius the centripetal forces should kick in? range: 0-1
				

				export let height = undefined // [number] 
				// the height of the cylinder for the vortex.
				

				export let radius = undefined // [number] 
				// the radius of the cylinder for the vortex
				

				export let strength = undefined // [number] 
				// the strength of the vortex.
				

				export let updraftForceMultiplier = undefined // [number] 
				// this multiplier determines with how much force the objects will be pushed upwards, when in the vortex.
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PhysicsVortexEventOptions]`, ...args) : null

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

												if (centrifugalForceMultiplier != undefined) instance.centrifugalForceMultiplier = centrifugalForceMultiplier?.instance || centrifugalForceMultiplier
				centrifugalForceMultiplier = instance.centrifugalForceMultiplier
				if (centripetalForceMultiplier != undefined) instance.centripetalForceMultiplier = centripetalForceMultiplier?.instance || centripetalForceMultiplier
				centripetalForceMultiplier = instance.centripetalForceMultiplier
				if (centripetalForceThreshold != undefined) instance.centripetalForceThreshold = centripetalForceThreshold?.instance || centripetalForceThreshold
				centripetalForceThreshold = instance.centripetalForceThreshold
				if (height != undefined) instance.height = height?.instance || height
				height = instance.height
				if (radius != undefined) instance.radius = radius?.instance || radius
				radius = instance.radius
				if (strength != undefined) instance.strength = strength?.instance || strength
				strength = instance.strength
				if (updraftForceMultiplier != undefined) instance.updraftForceMultiplier = updraftForceMultiplier?.instance || updraftForceMultiplier
				updraftForceMultiplier = instance.updraftForceMultiplier

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

			