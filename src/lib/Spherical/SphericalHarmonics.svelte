
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					l00  
					l10  
					l11  
					l1_1  
					l20  
					l21  
					l22  
					l2_1  
					l2_2  
					preScaled  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SphericalHarmonics() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let l00 = undefined // [vector3] 
				// the l0,0 coefficients of the spherical harmonics
				

				export let l10 = undefined // [vector3] 
				// the l1,0 coefficients of the spherical harmonics
				

				export let l11 = undefined // [vector3] 
				// the l1,1 coefficients of the spherical harmonics
				

				export let l1_1 = undefined // [vector3] 
				// the l1,-1 coefficients of the spherical harmonics
				

				export let l20 = undefined // [vector3] 
				// the l2,0 coefficients of the spherical harmonics
				

				export let l21 = undefined // [vector3] 
				// the l2,1 coefficients of the spherical harmonics
				

				export let l22 = undefined // [vector3] 
				// the l2,2 coefficients of the spherical harmonics
				

				export let l2_1 = undefined // [vector3] 
				// the l2,-1 coefficients of the spherical harmonics
				

				export let l2_2 = undefined // [vector3] 
				// the l2,-2 coefficients of the spherical harmonics
				

				export let preScaled = undefined // [boolean] 
				// defines whether or not the harmonics have been prescaled for rendering.
				

				// ================ METHODS ================

				
				export let addLight = (...args) => instance.addLight(...args)

				export let convertIncidentRadianceToIrradiance = (...args) => instance.convertIncidentRadianceToIrradiance(...args)

				export let convertIrradianceToLambertianRadiance = (...args) => instance.convertIrradianceToLambertianRadiance(...args)

				export let preScaleForRendering = (...args) => instance.preScaleForRendering(...args)

				export let scaleInPlace = (...args) => instance.scaleInPlace(...args)

				export let updateFromArray = (...args) => instance.updateFromArray(...args)

				export let updateFromFloatsArray = (...args) => instance.updateFromFloatsArray(...args)

				export let FromArray = (...args) => instance.FromArray(...args)

				export let FromPolynomial = (...args) => instance.FromPolynomial(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SphericalHarmonics]`, ...args) : null

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

												if (l00 != undefined) instance.l00 = l00?.instance || l00
				l00 = instance.l00
				if (l10 != undefined) instance.l10 = l10?.instance || l10
				l10 = instance.l10
				if (l11 != undefined) instance.l11 = l11?.instance || l11
				l11 = instance.l11
				if (l1_1 != undefined) instance.l1_1 = l1_1?.instance || l1_1
				l1_1 = instance.l1_1
				if (l20 != undefined) instance.l20 = l20?.instance || l20
				l20 = instance.l20
				if (l21 != undefined) instance.l21 = l21?.instance || l21
				l21 = instance.l21
				if (l22 != undefined) instance.l22 = l22?.instance || l22
				l22 = instance.l22
				if (l2_1 != undefined) instance.l2_1 = l2_1?.instance || l2_1
				l2_1 = instance.l2_1
				if (l2_2 != undefined) instance.l2_2 = l2_2?.instance || l2_2
				l2_2 = instance.l2_2
				if (preScaled != undefined) instance.preScaled = preScaled?.instance || preScaled
				preScaled = instance.preScaled

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

			