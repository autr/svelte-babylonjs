
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
					phi  * required 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let radius = undefined // [number] * required
				// spherical radius
				

				export let theta = undefined // [number] * required
				// angle from positive y axis to radial line from 0 to pi (vertical)
				

				export let phi = undefined // [number] * required
				// angle from positive x axis measured anticlockwise from -pi to pi (horizontal)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Spherical(radius,theta,phi) : {}

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

				export let toVector3 = (...args) => instance.toVector3(...args)

				export let toVector3ToRef = (...args) => instance.toVector3ToRef(...args)

				export let FromArray = (...args) => instance.FromArray(...args)

				export let FromVector3 = (...args) => instance.FromVector3(...args)

				export let FromVector3ToRef = (...args) => instance.FromVector3ToRef(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Spherical]`, ...args) : null

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
				if (phi != undefined) instance.phi = phi?.instance || phi
				phi = instance.phi

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

			