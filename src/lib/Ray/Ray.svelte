
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					origin  * required
					direction  * required
					length   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let origin = undefined // [vector3] * required
				// origin point
				

				export let direction = undefined // [vector3] * required
				// direction
				

				export let length = undefined // [number] 
				// length of the ray
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Ray(origin,direction,length) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let clone = (...args) => instance.clone(...args)

				export let intersectionSegment = (...args) => instance.intersectionSegment(...args)

				export let intersectsAxis = (...args) => instance.intersectsAxis(...args)

				export let intersectsBox = (...args) => instance.intersectsBox(...args)

				export let intersectsBoxMinMax = (...args) => instance.intersectsBoxMinMax(...args)

				export let intersectsMesh = (...args) => instance.intersectsMesh(...args)

				export let intersectsMeshes = (...args) => instance.intersectsMeshes(...args)

				export let intersectsPlane = (...args) => instance.intersectsPlane(...args)

				export let intersectsSphere = (...args) => instance.intersectsSphere(...args)

				export let intersectsTriangle = (...args) => instance.intersectsTriangle(...args)

				export let unprojectRayToRef = (...args) => instance.unprojectRayToRef(...args)

				export let update = (...args) => instance.update(...args)

				export let CreateNew = (...args) => instance.CreateNew(...args)

				export let CreateNewFromTo = (...args) => instance.CreateNewFromTo(...args)

				export let Transform = (...args) => instance.Transform(...args)

				export let TransformToRef = (...args) => instance.TransformToRef(...args)

				export let Zero = (...args) => instance.Zero(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Ray]`, ...args) : null

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

												if (origin != undefined) instance.origin = origin?.instance || origin
				origin = instance.origin
				if (direction != undefined) instance.direction = direction?.instance || direction
				direction = instance.direction
				if (length != undefined) instance.length = length?.instance || length
				length = instance.length

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

			