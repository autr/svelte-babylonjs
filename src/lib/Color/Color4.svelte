
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					r  
					g  
					b  
					a   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let r = undefined // [number] 
				// defines the red component (between 0 and 1, default is 0)
				

				export let g = undefined // [number] 
				// defines the green component (between 0 and 1, default is 0)
				

				export let b = undefined // [number] 
				// defines the blue component (between 0 and 1, default is 0)
				

				export let a = undefined // [number] 
				// defines the alpha component (between 0 and 1, default is 1)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Color4(r,g,b,a) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let add = (...args) => instance.add(...args)

				export let addInPlace = (...args) => instance.addInPlace(...args)

				export let asArray = (...args) => instance.asArray(...args)

				export let clampToRef = (...args) => instance.clampToRef(...args)

				export let clone = (...args) => instance.clone(...args)

				export let copyFrom = (...args) => instance.copyFrom(...args)

				export let copyFromFloats = (...args) => instance.copyFromFloats(...args)

				export let equals = (...args) => instance.equals(...args)

				export let fromArray = (...args) => instance.fromArray(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getHashCode = (...args) => instance.getHashCode(...args)

				export let multiply = (...args) => instance.multiply(...args)

				export let multiplyToRef = (...args) => instance.multiplyToRef(...args)

				export let scale = (...args) => instance.scale(...args)

				export let scaleAndAddToRef = (...args) => instance.scaleAndAddToRef(...args)

				export let scaleInPlace = (...args) => instance.scaleInPlace(...args)

				export let scaleToRef = (...args) => instance.scaleToRef(...args)

				export let set = (...args) => instance.set(...args)

				export let subtract = (...args) => instance.subtract(...args)

				export let subtractToRef = (...args) => instance.subtractToRef(...args)

				export let toArray = (...args) => instance.toArray(...args)

				export let toGammaSpace = (...args) => instance.toGammaSpace(...args)

				export let toGammaSpaceToRef = (...args) => instance.toGammaSpaceToRef(...args)

				export let toHexString = (...args) => instance.toHexString(...args)

				export let toLinearSpace = (...args) => instance.toLinearSpace(...args)

				export let toLinearSpaceToRef = (...args) => instance.toLinearSpaceToRef(...args)

				export let toString = (...args) => instance.toString(...args)

				export let CheckColors4 = (...args) => instance.CheckColors4(...args)

				export let FromArray = (...args) => instance.FromArray(...args)

				export let FromArrayToRef = (...args) => instance.FromArrayToRef(...args)

				export let FromColor3 = (...args) => instance.FromColor3(...args)

				export let FromHexString = (...args) => instance.FromHexString(...args)

				export let FromInts = (...args) => instance.FromInts(...args)

				export let Hermite = (...args) => instance.Hermite(...args)

				export let Hermite1stDerivative = (...args) => instance.Hermite1stDerivative(...args)

				export let Hermite1stDerivativeToRef = (...args) => instance.Hermite1stDerivativeToRef(...args)

				export let Lerp = (...args) => instance.Lerp(...args)

				export let LerpToRef = (...args) => instance.LerpToRef(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Color4]`, ...args) : null

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

												if (r != undefined) instance.r = r?.instance || r
				r = instance.r
				if (g != undefined) instance.g = g?.instance || g
				g = instance.g
				if (b != undefined) instance.b = b?.instance || b
				b = instance.b
				if (a != undefined) instance.a = a?.instance || a
				a = instance.a

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

			