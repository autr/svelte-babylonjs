
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PhysicsRaycastResult() : {}

				// ================ ACCESSORS ================

				
				export let hasHit = undefined // [boolean] 
				// 
				

				export let hitDistance = undefined // [number] 
				// 
				

				export let hitNormalWorld = undefined // [vector3] 
				// 
				

				export let hitPointWorld = undefined // [vector3] 
				// 
				

				export let rayFromWorld = undefined // [vector3] 
				// 
				

				export let rayToWorld = undefined // [vector3] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let calculateHitDistance = (...args) => instance.calculateHitDistance(...args)

				export let reset = (...args) => instance.reset(...args)

				export let setHitData = (...args) => instance.setHitData(...args)

				export let setHitDistance = (...args) => instance.setHitDistance(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PhysicsRaycastResult]`, ...args) : null

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

								
				hasHit = instance.hasHit

				hitDistance = instance.hitDistance

				hitNormalWorld = instance.hitNormalWorld

				hitPointWorld = instance.hitPointWorld

				rayFromWorld = instance.rayFromWorld

				rayToWorld = instance.rayToWorld

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

			