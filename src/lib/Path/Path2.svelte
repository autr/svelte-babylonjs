
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					x  * required
					y  * required 
					closed  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let x = undefined // [number] * required
				// the starting points x value
				

				export let y = undefined // [number] * required
				// the starting points y value
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Path2(x,y) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let closed = undefined // [boolean] 
				// if the path start and end point are the same
				

				// ================ METHODS ================

				
				export let addArcTo = (...args) => instance.addArcTo(...args)

				export let addLineTo = (...args) => instance.addLineTo(...args)

				export let close = (...args) => instance.close(...args)

				export let getPointAtLengthPosition = (...args) => instance.getPointAtLengthPosition(...args)

				export let getPoints = (...args) => instance.getPoints(...args)

				export let length = (...args) => instance.length(...args)

				export let StartingAt = (...args) => instance.StartingAt(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Path2]`, ...args) : null

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

												if (x != undefined) instance.x = x?.instance || x
				x = instance.x
				if (y != undefined) instance.y = y?.instance || y
				y = instance.y
				if (closed != undefined) instance.closed = closed?.instance || closed
				closed = instance.closed

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

			