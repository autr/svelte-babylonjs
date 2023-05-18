
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					radius  * required
					theta  * required 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let radius = undefined // [number] * required
				// the radius of the vector
				

				export let theta = undefined // [number] * required
				// the angle of the vector
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Polar(radius,theta) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let add = (...args) => instance.add(...args)

				export let addInPlace = (...args) => instance.addInPlace(...args)

				export let addInPlaceFromFloats = (...args) => instance.addInPlaceFromFloats(...args)

				export let addToRef = (...args) => instance.addToRef(...args)

				export let asArray = (...args) => instance.asArray(...args)

				export let clone = (...args) => instance.clone(...args)

				export let copyFrom = (...args) => instance.copyFrom(...args)

				export let copyFromFloats = (...args) => instance.copyFromFloats(...args)

				export let divide = (...args) => instance.divide(...args)

				export let divideInPlace = (...args) => instance.divideInPlace(...args)

				export let divideToRef = (...args) => instance.divideToRef(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let multiply = (...args) => instance.multiply(...args)

				export let multiplyInPlace = (...args) => instance.multiplyInPlace(...args)

				export let multiplyToRef = (...args) => instance.multiplyToRef(...args)

				export let scale = (...args) => instance.scale(...args)

				export let scaleInPlace = (...args) => instance.scaleInPlace(...args)

				export let scaleToRef = (...args) => instance.scaleToRef(...args)

				export let set = (...args) => instance.set(...args)

				export let setAll = (...args) => instance.setAll(...args)

				export let subtract = (...args) => instance.subtract(...args)

				export let subtractFromFloats = (...args) => instance.subtractFromFloats(...args)

				export let subtractFromFloatsToRef = (...args) => instance.subtractFromFloatsToRef(...args)

				export let subtractInPlace = (...args) => instance.subtractInPlace(...args)

				export let subtractToRef = (...args) => instance.subtractToRef(...args)

				export let toString = (...args) => instance.toString(...args)

				export let toVector2 = (...args) => instance.toVector2(...args)

				export let toVector2ToRef = (...args) => instance.toVector2ToRef(...args)

				export let FromArray = (...args) => instance.FromArray(...args)

				export let FromVector2 = (...args) => instance.FromVector2(...args)

				export let FromVector2ToRef = (...args) => instance.FromVector2ToRef(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Polar]`, ...args) : null

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

												if (radius != undefined) instance.radius = radius?.instance || radius
				radius = instance.radius
				if (theta != undefined) instance.theta = theta?.instance || theta
				theta = instance.theta

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

			