
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
					maximum (readonly) 
					minimum (readonly) 
					radius  
					radiusWorld  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let min = undefined // [deepimmutableobject] * required
				// defines the minimum vector (in local space)
				

				export let max = undefined // [deepimmutableobject] * required
				// defines the maximum vector (in local space)
				

				export let worldMatrix = undefined // [deepimmutableobject] 
				// defines the new world matrix
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BoundingSphere(min,max,worldMatrix) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let center = undefined // [vector3] 
				// gets the center of the bounding sphere in local space
				

				export let centerWorld = undefined // [vector3] 
				// gets the center of the bounding sphere in world space
				

				export let maximum = undefined // [vector3] 
				// gets the maximum vector in local space
				

				export let minimum = undefined // [vector3] 
				// gets the minimum vector in local space
				

				export let radius = undefined // [number] 
				// radius of the bounding sphere in local space
				

				export let radiusWorld = undefined // [number] 
				// radius of the bounding sphere in world space
				

				// ================ METHODS ================

				
				export let getWorldMatrix = (...args) => instance.getWorldMatrix(...args)

				export let intersectsPoint = (...args) => instance.intersectsPoint(...args)

				export let isCenterInFrustum = (...args) => instance.isCenterInFrustum(...args)

				export let isInFrustum = (...args) => instance.isInFrustum(...args)

				export let reConstruct = (...args) => instance.reConstruct(...args)

				export let scale = (...args) => instance.scale(...args)

				export let CreateFromCenterAndRadius = (...args) => instance.CreateFromCenterAndRadius(...args)

				export let Intersects = (...args) => instance.Intersects(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BoundingSphere]`, ...args) : null

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
				if (radius != undefined) instance.radius = radius?.instance || radius
				radius = instance.radius
				if (radiusWorld != undefined) instance.radiusWorld = radiusWorld?.instance || radiusWorld
				radiusWorld = instance.radiusWorld

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

			