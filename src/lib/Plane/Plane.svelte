
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					a  * required
					b  * required
					c  * required
					d  * required 
					normal  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let a = undefined // [number] * required
				// a component of the plane
				

				export let b = undefined // [number] * required
				// b component of the plane
				

				export let c = undefined // [number] * required
				// c component of the plane
				

				export let d = undefined // [number] * required
				// d component of the plane
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Plane(a,b,c,d) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let normal = undefined // [vector3] 
				// normal of the plane (a,b,c)
				

				// ================ METHODS ================

				
				export let asArray = (...args) => instance.asArray(...args)

				export let clone = (...args) => instance.clone(...args)

				export let copyFromPoints = (...args) => instance.copyFromPoints(...args)

				export let dotCoordinate = (...args) => instance.dotCoordinate(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getHashCode = (...args) => instance.getHashCode(...args)

				export let isFrontFacingTo = (...args) => instance.isFrontFacingTo(...args)

				export let normalize = (...args) => instance.normalize(...args)

				export let signedDistanceTo = (...args) => instance.signedDistanceTo(...args)

				export let transform = (...args) => instance.transform(...args)

				export let FromArray = (...args) => instance.FromArray(...args)

				export let FromPoints = (...args) => instance.FromPoints(...args)

				export let FromPositionAndNormal = (...args) => instance.FromPositionAndNormal(...args)

				export let SignedDistanceToPlaneFromPositionAndNormal = (...args) => instance.SignedDistanceToPlaneFromPositionAndNormal(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Plane]`, ...args) : null

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

												if (a != undefined) instance.a = a?.instance || a
				a = instance.a
				if (b != undefined) instance.b = b?.instance || b
				b = instance.b
				if (c != undefined) instance.c = c?.instance || c
				c = instance.c
				if (d != undefined) instance.d = d?.instance || d
				d = instance.d
				if (normal != undefined) instance.normal = normal?.instance || normal
				normal = instance.normal

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

			