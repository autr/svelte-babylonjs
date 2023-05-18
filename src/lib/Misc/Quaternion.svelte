
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
				// defines the first component (0 by default)
				

				export let y = undefined // [number] 
				// defines the second component (0 by default)
				

				export let z = undefined // [number] 
				// defines the third component (0 by default)
				

				export let w = undefined // [number] 
				// defines the fourth component (1.0 by default)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Quaternion(x,y,z,w) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let add = (...args) => instance.add(...args)

				export let addInPlace = (...args) => instance.addInPlace(...args)

				export let asArray = (...args) => instance.asArray(...args)

				export let clone = (...args) => instance.clone(...args)

				export let conjugate = (...args) => instance.conjugate(...args)

				export let conjugateInPlace = (...args) => instance.conjugateInPlace(...args)

				export let conjugateToRef = (...args) => instance.conjugateToRef(...args)

				export let copyFrom = (...args) => instance.copyFrom(...args)

				export let copyFromFloats = (...args) => instance.copyFromFloats(...args)

				export let equals = (...args) => instance.equals(...args)

				export let equalsWithEpsilon = (...args) => instance.equalsWithEpsilon(...args)

				export let fromRotationMatrix = (...args) => instance.fromRotationMatrix(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getHashCode = (...args) => instance.getHashCode(...args)

				export let invert = (...args) => instance.invert(...args)

				export let invertInPlace = (...args) => instance.invertInPlace(...args)

				export let length = (...args) => instance.length(...args)

				export let lengthSquared = (...args) => instance.lengthSquared(...args)

				export let multiply = (...args) => instance.multiply(...args)

				export let multiplyInPlace = (...args) => instance.multiplyInPlace(...args)

				export let multiplyToRef = (...args) => instance.multiplyToRef(...args)

				export let normalize = (...args) => instance.normalize(...args)

				export let normalizeToNew = (...args) => instance.normalizeToNew(...args)

				export let scale = (...args) => instance.scale(...args)

				export let scaleAndAddToRef = (...args) => instance.scaleAndAddToRef(...args)

				export let scaleInPlace = (...args) => instance.scaleInPlace(...args)

				export let scaleToRef = (...args) => instance.scaleToRef(...args)

				export let set = (...args) => instance.set(...args)

				export let subtract = (...args) => instance.subtract(...args)

				export let subtractInPlace = (...args) => instance.subtractInPlace(...args)

				export let toArray = (...args) => instance.toArray(...args)

				export let toEulerAngles = (...args) => instance.toEulerAngles(...args)

				export let toEulerAnglesToRef = (...args) => instance.toEulerAnglesToRef(...args)

				export let toRotationMatrix = (...args) => instance.toRotationMatrix(...args)

				export let toString = (...args) => instance.toString(...args)

				export let AreClose = (...args) => instance.AreClose(...args)

				export let Dot = (...args) => instance.Dot(...args)

				export let FromArray = (...args) => instance.FromArray(...args)

				export let FromArrayToRef = (...args) => instance.FromArrayToRef(...args)

				export let FromEulerAngles = (...args) => instance.FromEulerAngles(...args)

				export let FromEulerAnglesToRef = (...args) => instance.FromEulerAnglesToRef(...args)

				export let FromEulerVector = (...args) => instance.FromEulerVector(...args)

				export let FromEulerVectorToRef = (...args) => instance.FromEulerVectorToRef(...args)

				export let FromLookDirectionLH = (...args) => instance.FromLookDirectionLH(...args)

				export let FromLookDirectionLHToRef = (...args) => instance.FromLookDirectionLHToRef(...args)

				export let FromLookDirectionRH = (...args) => instance.FromLookDirectionRH(...args)

				export let FromLookDirectionRHToRef = (...args) => instance.FromLookDirectionRHToRef(...args)

				export let FromRotationMatrix = (...args) => instance.FromRotationMatrix(...args)

				export let FromRotationMatrixToRef = (...args) => instance.FromRotationMatrixToRef(...args)

				export let FromUnitVectorsToRef = (...args) => instance.FromUnitVectorsToRef(...args)

				export let Hermite = (...args) => instance.Hermite(...args)

				export let Hermite1stDerivative = (...args) => instance.Hermite1stDerivative(...args)

				export let Hermite1stDerivativeToRef = (...args) => instance.Hermite1stDerivativeToRef(...args)

				export let Identity = (...args) => instance.Identity(...args)

				export let Inverse = (...args) => instance.Inverse(...args)

				export let InverseToRef = (...args) => instance.InverseToRef(...args)

				export let IsIdentity = (...args) => instance.IsIdentity(...args)

				export let RotationAlphaBetaGamma = (...args) => instance.RotationAlphaBetaGamma(...args)

				export let RotationAlphaBetaGammaToRef = (...args) => instance.RotationAlphaBetaGammaToRef(...args)

				export let RotationAxis = (...args) => instance.RotationAxis(...args)

				export let RotationAxisToRef = (...args) => instance.RotationAxisToRef(...args)

				export let RotationQuaternionFromAxis = (...args) => instance.RotationQuaternionFromAxis(...args)

				export let RotationQuaternionFromAxisToRef = (...args) => instance.RotationQuaternionFromAxisToRef(...args)

				export let RotationYawPitchRoll = (...args) => instance.RotationYawPitchRoll(...args)

				export let RotationYawPitchRollToRef = (...args) => instance.RotationYawPitchRollToRef(...args)

				export let Slerp = (...args) => instance.Slerp(...args)

				export let SlerpToRef = (...args) => instance.SlerpToRef(...args)

				export let SmoothToRef = (...args) => instance.SmoothToRef(...args)

				export let Zero = (...args) => instance.Zero(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Quaternion]`, ...args) : null

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

			