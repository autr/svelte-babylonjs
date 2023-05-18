
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
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let x = undefined // [number] 
				// defines the first coordinates (on x axis)
				

				export let y = undefined // [number] 
				// defines the second coordinates (on y axis)
				

				export let z = undefined // [number] 
				// defines the third coordinates (on z axis)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Vector3(x,y,z) : {}

				// ================ ACCESSORS ================

				
				export let hasAZeroComponent = undefined // [boolean] 
				// 
				

				export let isNonUniform = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let add = (...args) => instance.add(...args)

				export let addInPlace = (...args) => instance.addInPlace(...args)

				export let addInPlaceFromFloats = (...args) => instance.addInPlaceFromFloats(...args)

				export let addToRef = (...args) => instance.addToRef(...args)

				export let applyRotationQuaternion = (...args) => instance.applyRotationQuaternion(...args)

				export let applyRotationQuaternionInPlace = (...args) => instance.applyRotationQuaternionInPlace(...args)

				export let applyRotationQuaternionToRef = (...args) => instance.applyRotationQuaternionToRef(...args)

				export let asArray = (...args) => instance.asArray(...args)

				export let clone = (...args) => instance.clone(...args)

				export let copyFrom = (...args) => instance.copyFrom(...args)

				export let copyFromFloats = (...args) => instance.copyFromFloats(...args)

				export let cross = (...args) => instance.cross(...args)

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

				export let getNormalToRef = (...args) => instance.getNormalToRef(...args)

				export let isNonUniformWithinEpsilon = (...args) => instance.isNonUniformWithinEpsilon(...args)

				export let length = (...args) => instance.length(...args)

				export let lengthSquared = (...args) => instance.lengthSquared(...args)

				export let maximizeInPlace = (...args) => instance.maximizeInPlace(...args)

				export let maximizeInPlaceFromFloats = (...args) => instance.maximizeInPlaceFromFloats(...args)

				export let minimizeInPlace = (...args) => instance.minimizeInPlace(...args)

				export let minimizeInPlaceFromFloats = (...args) => instance.minimizeInPlaceFromFloats(...args)

				export let multiply = (...args) => instance.multiply(...args)

				export let multiplyByFloats = (...args) => instance.multiplyByFloats(...args)

				export let multiplyInPlace = (...args) => instance.multiplyInPlace(...args)

				export let multiplyToRef = (...args) => instance.multiplyToRef(...args)

				export let negate = (...args) => instance.negate(...args)

				export let negateInPlace = (...args) => instance.negateInPlace(...args)

				export let negateToRef = (...args) => instance.negateToRef(...args)

				export let normalize = (...args) => instance.normalize(...args)

				export let normalizeFromLength = (...args) => instance.normalizeFromLength(...args)

				export let normalizeToNew = (...args) => instance.normalizeToNew(...args)

				export let normalizeToRef = (...args) => instance.normalizeToRef(...args)

				export let projectOnPlane = (...args) => instance.projectOnPlane(...args)

				export let projectOnPlaneToRef = (...args) => instance.projectOnPlaneToRef(...args)

				export let reorderInPlace = (...args) => instance.reorderInPlace(...args)

				export let rotateByQuaternionAroundPointToRef = (...args) => instance.rotateByQuaternionAroundPointToRef(...args)

				export let rotateByQuaternionToRef = (...args) => instance.rotateByQuaternionToRef(...args)

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

				export let toQuaternion = (...args) => instance.toQuaternion(...args)

				export let toString = (...args) => instance.toString(...args)

				export let Backward = (...args) => instance.Backward(...args)

				export let CatmullRom = (...args) => instance.CatmullRom(...args)

				export let Center = (...args) => instance.Center(...args)

				export let CenterToRef = (...args) => instance.CenterToRef(...args)

				export let CheckExtends = (...args) => instance.CheckExtends(...args)

				export let Clamp = (...args) => instance.Clamp(...args)

				export let ClampToRef = (...args) => instance.ClampToRef(...args)

				export let Cross = (...args) => instance.Cross(...args)

				export let CrossToRef = (...args) => instance.CrossToRef(...args)

				export let Distance = (...args) => instance.Distance(...args)

				export let DistanceSquared = (...args) => instance.DistanceSquared(...args)

				export let Dot = (...args) => instance.Dot(...args)

				export let Down = (...args) => instance.Down(...args)

				export let Forward = (...args) => instance.Forward(...args)

				export let FromArray = (...args) => instance.FromArray(...args)

				export let FromArrayToRef = (...args) => instance.FromArrayToRef(...args)

				export let FromFloatArray = (...args) => instance.FromFloatArray(...args)

				export let FromFloatArrayToRef = (...args) => instance.FromFloatArrayToRef(...args)

				export let FromFloatsToRef = (...args) => instance.FromFloatsToRef(...args)

				export let GetAngleBetweenVectors = (...args) => instance.GetAngleBetweenVectors(...args)

				export let GetAngleBetweenVectorsOnPlane = (...args) => instance.GetAngleBetweenVectorsOnPlane(...args)

				export let GetClipFactor = (...args) => instance.GetClipFactor(...args)

				export let Hermite = (...args) => instance.Hermite(...args)

				export let Hermite1stDerivative = (...args) => instance.Hermite1stDerivative(...args)

				export let Hermite1stDerivativeToRef = (...args) => instance.Hermite1stDerivativeToRef(...args)

				export let Left = (...args) => instance.Left(...args)

				export let Lerp = (...args) => instance.Lerp(...args)

				export let LerpToRef = (...args) => instance.LerpToRef(...args)

				export let Maximize = (...args) => instance.Maximize(...args)

				export let Minimize = (...args) => instance.Minimize(...args)

				export let Normalize = (...args) => instance.Normalize(...args)

				export let NormalizeToRef = (...args) => instance.NormalizeToRef(...args)

				export let One = (...args) => instance.One(...args)

				export let PitchYawRollToMoveBetweenPoints = (...args) => instance.PitchYawRollToMoveBetweenPoints(...args)

				export let PitchYawRollToMoveBetweenPointsToRef = (...args) => instance.PitchYawRollToMoveBetweenPointsToRef(...args)

				export let Project = (...args) => instance.Project(...args)

				export let ProjectOnTriangleToRef = (...args) => instance.ProjectOnTriangleToRef(...args)

				export let ProjectToRef = (...args) => instance.ProjectToRef(...args)

				export let Random = (...args) => instance.Random(...args)

				export let Reflect = (...args) => instance.Reflect(...args)

				export let ReflectToRef = (...args) => instance.ReflectToRef(...args)

				export let Right = (...args) => instance.Right(...args)

				export let RotationFromAxis = (...args) => instance.RotationFromAxis(...args)

				export let RotationFromAxisToRef = (...args) => instance.RotationFromAxisToRef(...args)

				export let SlerpToRef = (...args) => instance.SlerpToRef(...args)

				export let SmoothToRef = (...args) => instance.SmoothToRef(...args)

				export let TransformCoordinates = (...args) => instance.TransformCoordinates(...args)

				export let TransformCoordinatesFromFloatsToRef = (...args) => instance.TransformCoordinatesFromFloatsToRef(...args)

				export let TransformCoordinatesToRef = (...args) => instance.TransformCoordinatesToRef(...args)

				export let TransformNormal = (...args) => instance.TransformNormal(...args)

				export let TransformNormalFromFloatsToRef = (...args) => instance.TransformNormalFromFloatsToRef(...args)

				export let TransformNormalToRef = (...args) => instance.TransformNormalToRef(...args)

				export let Unproject = (...args) => instance.Unproject(...args)

				export let UnprojectFloatsToRef = (...args) => instance.UnprojectFloatsToRef(...args)

				export let UnprojectFromTransform = (...args) => instance.UnprojectFromTransform(...args)

				export let UnprojectToRef = (...args) => instance.UnprojectToRef(...args)

				export let Up = (...args) => instance.Up(...args)

				export let Zero = (...args) => instance.Zero(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Vector3]`, ...args) : null

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

				hasAZeroComponent = instance.hasAZeroComponent

				isNonUniform = instance.isNonUniform

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

			