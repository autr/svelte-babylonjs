
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					minimum  * required
					maximum  * required
					worldMatrix   
					boundingBox (readonly) 
					boundingSphere (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let minimum = undefined // [deepimmutableobject] * required
				// min vector of the bounding box/sphere
				

				export let maximum = undefined // [deepimmutableobject] * required
				// max vector of the bounding box/sphere
				

				export let worldMatrix = undefined // [deepimmutableobject] 
				// defines the new world matrix
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BoundingInfo(minimum,maximum,worldMatrix) : {}

				// ================ ACCESSORS ================

				
				export let diagonalLength = undefined // [number] 
				// 
				

				export let isLocked = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let boundingBox = undefined // [boundingbox] 
				// bounding box for the mesh
				

				export let boundingSphere = undefined // [boundingsphere] 
				// bounding sphere for the mesh
				

				// ================ METHODS ================

				
				export let centerOn = (...args) => instance.centerOn(...args)

				export let encapsulate = (...args) => instance.encapsulate(...args)

				export let encapsulateBoundingInfo = (...args) => instance.encapsulateBoundingInfo(...args)

				export let intersects = (...args) => instance.intersects(...args)

				export let intersectsPoint = (...args) => instance.intersectsPoint(...args)

				export let isCompletelyInFrustum = (...args) => instance.isCompletelyInFrustum(...args)

				export let isInFrustum = (...args) => instance.isInFrustum(...args)

				export let reConstruct = (...args) => instance.reConstruct(...args)

				export let scale = (...args) => instance.scale(...args)

				export let update = (...args) => instance.update(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BoundingInfo]`, ...args) : null

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

												if (minimum != undefined) instance.minimum = minimum?.instance || minimum
				minimum = instance.minimum
				if (maximum != undefined) instance.maximum = maximum?.instance || maximum
				maximum = instance.maximum
				if (worldMatrix != undefined) instance.worldMatrix = worldMatrix?.instance || worldMatrix
				worldMatrix = instance.worldMatrix

				diagonalLength = instance.diagonalLength
				if (isLocked != undefined) instance.isLocked = isLocked?.instance || isLocked
				isLocked = instance.isLocked

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

			