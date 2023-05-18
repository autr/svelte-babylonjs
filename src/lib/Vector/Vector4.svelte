
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					x  
					y  
					z  
					w   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let x = undefined // [number] 
				// x value of the vector
				

				export let y = undefined // [number] 
				// y value of the vector
				

				export let z = undefined // [number] 
				// z value of the vector
				

				export let w = undefined // [number] 
				// w value of the vector
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Vector4(x,y,z,w) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let add = (...args) => instance.add(...args)

				export let addInPlace = (...args) => instance.addInPlace(...args)

				export let addToRef = (...args) => instance.addToRef(...args)

				export let asArray = (...args) => instance.asArray(...args)

				export let clone = (...args) => instance.clone(...args)

				export let copyFrom = (...args) => instance.copyFrom(...args)

				export let copyFromFloats = (...args) => instance.copyFromFloats(...args)

				export let divide = (...args) => instance.divide(...args)

				export let divideInPlace = (...args) => instance.divideInPlace(...args)

				export let divideToRef = (...args) => instance.divideToRef(...args)

				export let equals = (...args) => instance.equals(...args)

				export let equalsToFloats = (...args) => instance.equalsToFloats(...args)

				export let equalsWithEpsilon = (...args) => instance.equalsWithEpsilon(...args)

				export let floor = (...args) => instance.floor(...args)

				export let fract = (...args) => instance.fract(...args)

				export let fromArray = (...args) => instance.fromArray(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getHashCode = (...args) => instance.getHashCode(...args)

				export let length = (...args) => instance.length(...args)

				export let lengthSquared = (...args) => instance.lengthSquared(...args)

				export let maximizeInPlace = (...args) => instance.maximizeInPlace(...args)

				export let minimizeInPlace = (...args) => instance.minimizeInPlace(...args)

				export let multiply = (...args) => instance.multiply(...args)

				export let multiplyByFloats = (...args) => instance.multiplyByFloats(...args)

				export let multiplyInPlace = (...args) => instance.multiplyInPlace(...args)

				export let multiplyToRef = (...args) => instance.multiplyToRef(...args)

				export let negate = (...args) => instance.negate(...args)

				export let negateInPlace = (...args) => instance.negateInPlace(...args)

				export let negateToRef = (...args) => instance.negateToRef(...args)

				export let normalize = (...args) => instance.normalize(...args)

				export let scale = (...args) => instance.scale(...args)

				export let scaleAndAddToRef = (...args) => instance.scaleAndAddToRef(...args)

				export let scaleInPlace = (...args) => instance.scaleInPlace(...args)

				export let scaleToRef = (...args) => instance.scaleToRef(...args)

				export let set = (...args) => instance.set(...args)

				export let setAll = (...args) => instance.setAll(...args)

				export let subtract = (...args) => instance.subtract(...args)

				export let subtractFromFloats = (...args) => instance.subtractFromFloats(...args)

				export let subtractFromFloatsToRef = (...args) => instance.subtractFromFloatsToRef(...args)

				export let subtractInPlace = (...args) => instance.subtractInPlace(...args)

				export let subtractToRef = (...args) => instance.subtractToRef(...args)

				export let toArray = (...args) => instance.toArray(...args)

				export let toString = (...args) => instance.toString(...args)

				export let toVector3 = (...args) => instance.toVector3(...args)

				export let Center = (...args) => instance.Center(...args)

				export let CenterToRef = (...args) => instance.CenterToRef(...args)

				export let Distance = (...args) => instance.Distance(...args)

				export let DistanceSquared = (...args) => instance.DistanceSquared(...args)

				export let FromArray = (...args) => instance.FromArray(...args)

				export let FromArrayToRef = (...args) => instance.FromArrayToRef(...args)

				export let FromFloatArrayToRef = (...args) => instance.FromFloatArrayToRef(...args)

				export let FromFloatsToRef = (...args) => instance.FromFloatsToRef(...args)

				export let FromVector3 = (...args) => instance.FromVector3(...args)

				export let Maximize = (...args) => instance.Maximize(...args)

				export let Minimize = (...args) => instance.Minimize(...args)

				export let Normalize = (...args) => instance.Normalize(...args)

				export let NormalizeToRef = (...args) => instance.NormalizeToRef(...args)

				export let One = (...args) => instance.One(...args)

				export let Random = (...args) => instance.Random(...args)

				export let TransformCoordinates = (...args) => instance.TransformCoordinates(...args)

				export let TransformCoordinatesFromFloatsToRef = (...args) => instance.TransformCoordinatesFromFloatsToRef(...args)

				export let TransformCoordinatesToRef = (...args) => instance.TransformCoordinatesToRef(...args)

				export let TransformNormal = (...args) => instance.TransformNormal(...args)

				export let TransformNormalFromFloatsToRef = (...args) => instance.TransformNormalFromFloatsToRef(...args)

				export let TransformNormalToRef = (...args) => instance.TransformNormalToRef(...args)

				export let Zero = (...args) => instance.Zero(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Vector4]`, ...args) : null

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
				if (z != undefined) instance.z = z?.instance || z
				z = instance.z
				if (w != undefined) instance.w = w?.instance || w
				w = instance.w

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

			