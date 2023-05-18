
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					updateFlag  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Matrix() : {}

				// ================ ACCESSORS ================

				
				export let m = undefined // [union] 
				// 
				

				// ================ PROPERTIES ================

				
				export let updateFlag = undefined // [number] 
				// gets the update flag of the matrix which is an unique number for the matrix.it will be incremented every time the matrix data change.you can use it to speed the comparison between two versions of the same matrix.
				

				// ================ METHODS ================

				
				export let add = (...args) => instance.add(...args)

				export let addAtIndex = (...args) => instance.addAtIndex(...args)

				export let addToRef = (...args) => instance.addToRef(...args)

				export let addToSelf = (...args) => instance.addToSelf(...args)

				export let addTranslationFromFloats = (...args) => instance.addTranslationFromFloats(...args)

				export let asArray = (...args) => instance.asArray(...args)

				export let clone = (...args) => instance.clone(...args)

				export let copyFrom = (...args) => instance.copyFrom(...args)

				export let copyToArray = (...args) => instance.copyToArray(...args)

				export let decompose = (...args) => instance.decompose(...args)

				export let decomposeToTransformNode = (...args) => instance.decomposeToTransformNode(...args)

				export let determinant = (...args) => instance.determinant(...args)

				export let equals = (...args) => instance.equals(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getHashCode = (...args) => instance.getHashCode(...args)

				export let getRotationMatrix = (...args) => instance.getRotationMatrix(...args)

				export let getRotationMatrixToRef = (...args) => instance.getRotationMatrixToRef(...args)

				export let getRow = (...args) => instance.getRow(...args)

				export let getRowToRef = (...args) => instance.getRowToRef(...args)

				export let getTranslation = (...args) => instance.getTranslation(...args)

				export let getTranslationToRef = (...args) => instance.getTranslationToRef(...args)

				export let invert = (...args) => instance.invert(...args)

				export let invertToRef = (...args) => instance.invertToRef(...args)

				export let isIdentity = (...args) => instance.isIdentity(...args)

				export let isIdentityAs3x2 = (...args) => instance.isIdentityAs3x2(...args)

				export let markAsUpdated = (...args) => instance.markAsUpdated(...args)

				export let multiply = (...args) => instance.multiply(...args)

				export let multiplyAtIndex = (...args) => instance.multiplyAtIndex(...args)

				export let multiplyToArray = (...args) => instance.multiplyToArray(...args)

				export let multiplyToRef = (...args) => instance.multiplyToRef(...args)

				export let removeRotationAndScaling = (...args) => instance.removeRotationAndScaling(...args)

				export let reset = (...args) => instance.reset(...args)

				export let scale = (...args) => instance.scale(...args)

				export let scaleAndAddToRef = (...args) => instance.scaleAndAddToRef(...args)

				export let scaleToRef = (...args) => instance.scaleToRef(...args)

				export let setRow = (...args) => instance.setRow(...args)

				export let setRowFromFloats = (...args) => instance.setRowFromFloats(...args)

				export let setTranslation = (...args) => instance.setTranslation(...args)

				export let setTranslationFromFloats = (...args) => instance.setTranslationFromFloats(...args)

				export let toArray = (...args) => instance.toArray(...args)

				export let toNormalMatrix = (...args) => instance.toNormalMatrix(...args)

				export let toggleModelMatrixHandInPlace = (...args) => instance.toggleModelMatrixHandInPlace(...args)

				export let toggleProjectionMatrixHandInPlace = (...args) => instance.toggleProjectionMatrixHandInPlace(...args)

				export let transpose = (...args) => instance.transpose(...args)

				export let transposeToRef = (...args) => instance.transposeToRef(...args)

				export let Compose = (...args) => instance.Compose(...args)

				export let ComposeToRef = (...args) => instance.ComposeToRef(...args)

				export let DecomposeLerp = (...args) => instance.DecomposeLerp(...args)

				export let DecomposeLerpToRef = (...args) => instance.DecomposeLerpToRef(...args)

				export let FromArray = (...args) => instance.FromArray(...args)

				export let FromArrayToRef = (...args) => instance.FromArrayToRef(...args)

				export let FromFloat32ArrayToRefScaled = (...args) => instance.FromFloat32ArrayToRefScaled(...args)

				export let FromQuaternionToRef = (...args) => instance.FromQuaternionToRef(...args)

				export let FromValues = (...args) => instance.FromValues(...args)

				export let FromValuesToRef = (...args) => instance.FromValuesToRef(...args)

				export let FromXYZAxesToRef = (...args) => instance.FromXYZAxesToRef(...args)

				export let GetAsMatrix2x2 = (...args) => instance.GetAsMatrix2x2(...args)

				export let GetAsMatrix3x3 = (...args) => instance.GetAsMatrix3x3(...args)

				export let GetFinalMatrix = (...args) => instance.GetFinalMatrix(...args)

				export let Identity = (...args) => instance.Identity(...args)

				export let IdentityToRef = (...args) => instance.IdentityToRef(...args)

				export let Invert = (...args) => instance.Invert(...args)

				export let Lerp = (...args) => instance.Lerp(...args)

				export let LerpToRef = (...args) => instance.LerpToRef(...args)

				export let LookAtLH = (...args) => instance.LookAtLH(...args)

				export let LookAtLHToRef = (...args) => instance.LookAtLHToRef(...args)

				export let LookAtRH = (...args) => instance.LookAtRH(...args)

				export let LookAtRHToRef = (...args) => instance.LookAtRHToRef(...args)

				export let LookDirectionLH = (...args) => instance.LookDirectionLH(...args)

				export let LookDirectionLHToRef = (...args) => instance.LookDirectionLHToRef(...args)

				export let LookDirectionRH = (...args) => instance.LookDirectionRH(...args)

				export let LookDirectionRHToRef = (...args) => instance.LookDirectionRHToRef(...args)

				export let OrthoLH = (...args) => instance.OrthoLH(...args)

				export let OrthoLHToRef = (...args) => instance.OrthoLHToRef(...args)

				export let OrthoOffCenterLH = (...args) => instance.OrthoOffCenterLH(...args)

				export let OrthoOffCenterLHToRef = (...args) => instance.OrthoOffCenterLHToRef(...args)

				export let OrthoOffCenterRH = (...args) => instance.OrthoOffCenterRH(...args)

				export let OrthoOffCenterRHToRef = (...args) => instance.OrthoOffCenterRHToRef(...args)

				export let PerspectiveFovLH = (...args) => instance.PerspectiveFovLH(...args)

				export let PerspectiveFovLHToRef = (...args) => instance.PerspectiveFovLHToRef(...args)

				export let PerspectiveFovRH = (...args) => instance.PerspectiveFovRH(...args)

				export let PerspectiveFovRHToRef = (...args) => instance.PerspectiveFovRHToRef(...args)

				export let PerspectiveFovReverseLHToRef = (...args) => instance.PerspectiveFovReverseLHToRef(...args)

				export let PerspectiveFovReverseRHToRef = (...args) => instance.PerspectiveFovReverseRHToRef(...args)

				export let PerspectiveFovWebVRToRef = (...args) => instance.PerspectiveFovWebVRToRef(...args)

				export let PerspectiveLH = (...args) => instance.PerspectiveLH(...args)

				export let Reflection = (...args) => instance.Reflection(...args)

				export let ReflectionToRef = (...args) => instance.ReflectionToRef(...args)

				export let RotationAlignToRef = (...args) => instance.RotationAlignToRef(...args)

				export let RotationAxis = (...args) => instance.RotationAxis(...args)

				export let RotationAxisToRef = (...args) => instance.RotationAxisToRef(...args)

				export let RotationX = (...args) => instance.RotationX(...args)

				export let RotationXToRef = (...args) => instance.RotationXToRef(...args)

				export let RotationY = (...args) => instance.RotationY(...args)

				export let RotationYToRef = (...args) => instance.RotationYToRef(...args)

				export let RotationYawPitchRoll = (...args) => instance.RotationYawPitchRoll(...args)

				export let RotationYawPitchRollToRef = (...args) => instance.RotationYawPitchRollToRef(...args)

				export let RotationZ = (...args) => instance.RotationZ(...args)

				export let RotationZToRef = (...args) => instance.RotationZToRef(...args)

				export let Scaling = (...args) => instance.Scaling(...args)

				export let ScalingToRef = (...args) => instance.ScalingToRef(...args)

				export let Translation = (...args) => instance.Translation(...args)

				export let TranslationToRef = (...args) => instance.TranslationToRef(...args)

				export let Transpose = (...args) => instance.Transpose(...args)

				export let TransposeToRef = (...args) => instance.TransposeToRef(...args)

				export let Zero = (...args) => instance.Zero(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Matrix]`, ...args) : null

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

								
				m = instance.m
				if (updateFlag != undefined) instance.updateFlag = updateFlag?.instance || updateFlag
				updateFlag = instance.updateFlag

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

			