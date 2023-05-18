
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					min  * required
					max  * required
					worldMatrix   
					center (readonly) 
					centerWorld (readonly) 
					directions (readonly) 
					extendSize (readonly) 
					extendSizeWorld (readonly) 
					maximum (readonly) 
					maximumWorld (readonly) 
					minimum (readonly) 
					minimumWorld (readonly) 
					vectors (readonly) 
					vectorsWorld (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let min = undefined // [deepimmutableobject] * required
				// defines the minimum vector (in local space)
				

				export let max = undefined // [deepimmutableobject] * required
				// defines the maximum vector (in local space)
				

				export let worldMatrix = undefined // [deepimmutableobject] 
				// defines the new world matrix
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BoundingBox(min,max,worldMatrix) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let center = undefined // [vector3] 
				// gets the center of the bounding box in local space
				

				export let centerWorld = undefined // [vector3] 
				// gets the center of the bounding box in world space
				

				export let directions = undefined // [array] 
				// gets the obb (object bounding box) directions
				

				export let extendSize = undefined // [vector3] 
				// gets the extend size in local space
				

				export let extendSizeWorld = undefined // [vector3] 
				// gets the extend size in world space
				

				export let maximum = undefined // [vector3] 
				// gets the maximum vector in local space
				

				export let maximumWorld = undefined // [vector3] 
				// gets the maximum vector in world space
				

				export let minimum = undefined // [vector3] 
				// gets the minimum vector in local space
				

				export let minimumWorld = undefined // [vector3] 
				// gets the minimum vector in world space
				

				export let vectors = undefined // [array] 
				// gets the 8 vectors representing the bounding box in local space
				

				export let vectorsWorld = undefined // [array] 
				// gets the 8 vectors representing the bounding box in world space
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getWorldMatrix = (...args) => instance.getWorldMatrix(...args)

				export let intersectsMinMax = (...args) => instance.intersectsMinMax(...args)

				export let intersectsPoint = (...args) => instance.intersectsPoint(...args)

				export let intersectsSphere = (...args) => instance.intersectsSphere(...args)

				export let isCompletelyInFrustum = (...args) => instance.isCompletelyInFrustum(...args)

				export let isInFrustum = (...args) => instance.isInFrustum(...args)

				export let reConstruct = (...args) => instance.reConstruct(...args)

				export let scale = (...args) => instance.scale(...args)

				export let Intersects = (...args) => instance.Intersects(...args)

				export let IntersectsSphere = (...args) => instance.IntersectsSphere(...args)

				export let IsCompletelyInFrustum = (...args) => instance.IsCompletelyInFrustum(...args)

				export let IsInFrustum = (...args) => instance.IsInFrustum(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BoundingBox]`, ...args) : null

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

												if (min != undefined) instance.min = min?.instance || min
				min = instance.min
				if (max != undefined) instance.max = max?.instance || max
				max = instance.max
				if (worldMatrix != undefined) instance.worldMatrix = worldMatrix?.instance || worldMatrix
				worldMatrix = instance.worldMatrix

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

			