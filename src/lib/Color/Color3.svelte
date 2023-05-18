
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
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let r = undefined // [number] 
				// defines the red component (between 0 and 1, default is 0)
				

				export let g = undefined // [number] 
				// defines the green component (between 0 and 1, default is 0)
				

				export let b = undefined // [number] 
				// defines the blue component (between 0 and 1, default is 0)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Color3(r,g,b) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let add = (...args) => instance.add(...args)

				export let addToRef = (...args) => instance.addToRef(...args)

				export let asArray = (...args) => instance.asArray(...args)

				export let clampToRef = (...args) => instance.clampToRef(...args)

				export let clone = (...args) => instance.clone(...args)

				export let copyFrom = (...args) => instance.copyFrom(...args)

				export let copyFromFloats = (...args) => instance.copyFromFloats(...args)

				export let equals = (...args) => instance.equals(...args)

				export let equalsFloats = (...args) => instance.equalsFloats(...args)

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

				export let toColor4 = (...args) => instance.toColor4(...args)

				export let toGammaSpace = (...args) => instance.toGammaSpace(...args)

				export let toGammaSpaceToRef = (...args) => instance.toGammaSpaceToRef(...args)

				export let toHSV = (...args) => instance.toHSV(...args)

				export let toHSVToRef = (...args) => instance.toHSVToRef(...args)

				export let toHexString = (...args) => instance.toHexString(...args)

				export let toLinearSpace = (...args) => instance.toLinearSpace(...args)

				export let toLinearSpaceToRef = (...args) => instance.toLinearSpaceToRef(...args)

				export let toLuminance = (...args) => instance.toLuminance(...args)

				export let toString = (...args) => instance.toString(...args)

				export let Black = (...args) => instance.Black(...args)

				export let Blue = (...args) => instance.Blue(...args)

				export let FromArray = (...args) => instance.FromArray(...args)

				export let FromArrayToRef = (...args) => instance.FromArrayToRef(...args)

				export let FromHSV = (...args) => instance.FromHSV(...args)

				export let FromHexString = (...args) => instance.FromHexString(...args)

				export let FromInts = (...args) => instance.FromInts(...args)

				export let Gray = (...args) => instance.Gray(...args)

				export let Green = (...args) => instance.Green(...args)

				export let HSVtoRGBToRef = (...args) => instance.HSVtoRGBToRef(...args)

				export let Hermite = (...args) => instance.Hermite(...args)

				export let Hermite1stDerivative = (...args) => instance.Hermite1stDerivative(...args)

				export let Hermite1stDerivativeToRef = (...args) => instance.Hermite1stDerivativeToRef(...args)

				export let Lerp = (...args) => instance.Lerp(...args)

				export let LerpToRef = (...args) => instance.LerpToRef(...args)

				export let Magenta = (...args) => instance.Magenta(...args)

				export let Purple = (...args) => instance.Purple(...args)

				export let Random = (...args) => instance.Random(...args)

				export let Red = (...args) => instance.Red(...args)

				export let Teal = (...args) => instance.Teal(...args)

				export let White = (...args) => instance.White(...args)

				export let Yellow = (...args) => instance.Yellow(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Color3]`, ...args) : null

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

			