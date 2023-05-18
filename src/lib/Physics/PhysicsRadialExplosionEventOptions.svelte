
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					affectedBodiesCallback  
					affectedImpostorsCallback  
					falloff  
					radius  
					sphere  
					strength  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PhysicsRadialExplosionEventOptions() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let affectedBodiesCallback = undefined // [reflection] 
				// 
				

				export let affectedImpostorsCallback = undefined // [reflection] 
				// 
				

				export let falloff = undefined // [physicsradialimpulsefalloff] 
				// the strength of the force in correspondence to the distance of the affected object
				

				export let radius = undefined // [number] 
				// the radius of the sphere for the radial explosion.
				

				export let sphere = undefined // [reflection] 
				// sphere options for the radial explosion.
				

				export let strength = undefined // [number] 
				// the strength of the explosion.
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PhysicsRadialExplosionEventOptions]`, ...args) : null

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

												if (affectedBodiesCallback != undefined) instance.affectedBodiesCallback = affectedBodiesCallback?.instance || affectedBodiesCallback
				affectedBodiesCallback = instance.affectedBodiesCallback
				if (affectedImpostorsCallback != undefined) instance.affectedImpostorsCallback = affectedImpostorsCallback?.instance || affectedImpostorsCallback
				affectedImpostorsCallback = instance.affectedImpostorsCallback
				if (falloff != undefined) instance.falloff = falloff?.instance || falloff
				falloff = instance.falloff
				if (radius != undefined) instance.radius = radius?.instance || radius
				radius = instance.radius
				if (sphere != undefined) instance.sphere = sphere?.instance || sphere
				sphere = instance.sphere
				if (strength != undefined) instance.strength = strength?.instance || strength
				strength = instance.strength

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

			