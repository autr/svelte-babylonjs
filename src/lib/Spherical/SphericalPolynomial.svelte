
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					x  
					xx  
					xy  
					y  
					yy  
					yz  
					z  
					zx  
					zz  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SphericalPolynomial() : {}

				// ================ ACCESSORS ================

				
				export let preScaledHarmonics = undefined // [sphericalharmonics] 
				// 
				

				// ================ PROPERTIES ================

				
				export let x = undefined // [vector3] 
				// the x coefficients of the spherical polynomial
				

				export let xx = undefined // [vector3] 
				// the xx coefficients of the spherical polynomial
				

				export let xy = undefined // [vector3] 
				// the xy coefficients of the spherical polynomial
				

				export let y = undefined // [vector3] 
				// the y coefficients of the spherical polynomial
				

				export let yy = undefined // [vector3] 
				// the yy coefficients of the spherical polynomial
				

				export let yz = undefined // [vector3] 
				// the yz coefficients of the spherical polynomial
				

				export let z = undefined // [vector3] 
				// the z coefficients of the spherical polynomial
				

				export let zx = undefined // [vector3] 
				// the zx coefficients of the spherical polynomial
				

				export let zz = undefined // [vector3] 
				// the zz coefficients of the spherical polynomial
				

				// ================ METHODS ================

				
				export let addAmbient = (...args) => instance.addAmbient(...args)

				export let scaleInPlace = (...args) => instance.scaleInPlace(...args)

				export let updateFromHarmonics = (...args) => instance.updateFromHarmonics(...args)

				export let FromArray = (...args) => instance.FromArray(...args)

				export let FromHarmonics = (...args) => instance.FromHarmonics(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SphericalPolynomial]`, ...args) : null

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

								
				preScaledHarmonics = instance.preScaledHarmonics
				if (x != undefined) instance.x = x?.instance || x
				x = instance.x
				if (xx != undefined) instance.xx = xx?.instance || xx
				xx = instance.xx
				if (xy != undefined) instance.xy = xy?.instance || xy
				xy = instance.xy
				if (y != undefined) instance.y = y?.instance || y
				y = instance.y
				if (yy != undefined) instance.yy = yy?.instance || yy
				yy = instance.yy
				if (yz != undefined) instance.yz = yz?.instance || yz
				yz = instance.yz
				if (z != undefined) instance.z = z?.instance || z
				z = instance.z
				if (zx != undefined) instance.zx = zx?.instance || zx
				zx = instance.zx
				if (zz != undefined) instance.zz = zz?.instance || zz
				zz = instance.zz

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

			