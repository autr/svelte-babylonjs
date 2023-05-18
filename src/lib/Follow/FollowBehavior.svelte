
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					attachedNode  
					defaultDistance  
					fixedVerticalOffset  
					ignoreAngleClamp  
					ignoreCameraPitchAndRoll  
					ignoreDistanceClamp  
					interpolatePose  
					lerpTime  
					maxViewHorizontalDegrees  
					maxViewVerticalDegrees  
					maximumDistance  
					minimumDistance  
					orientToCameraDeadzoneDegrees  
					pitchOffset  
					useFixedVerticalOffset  
					verticalMaxDistance  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FollowBehavior() : {}

				// ================ ACCESSORS ================

				
				export let followedCamera = undefined // [nullable] 
				// 
				

				export let name = undefined // [string] 
				// gets or sets behavior's name
				

				// ================ PROPERTIES ================

				
				export let attachedNode = undefined // [nullable] 
				// attached node of this behavior
				

				export let defaultDistance = undefined // [number] 
				// default distance from eye to attached node, i.e. the sphere radius
				

				export let fixedVerticalOffset = undefined // [number] 
				// fixed vertical position offset distance.
				

				export let ignoreAngleClamp = undefined // [boolean] 
				// option to ignore angle clamping
				

				export let ignoreCameraPitchAndRoll = undefined // [boolean] 
				// if the behavior should ignore the pitch and roll of the camera.
				

				export let ignoreDistanceClamp = undefined // [boolean] 
				// option to ignore distance clamping
				

				export let interpolatePose = undefined // [boolean] 
				// set to false if the node should strictly follow the camera without any interpolation time
				

				export let lerpTime = undefined // [number] 
				// rate of interpolation of position and rotation of the attached node.higher values will give a slower interpolation.
				

				export let maxViewHorizontalDegrees = undefined // [number] 
				// the horizontal angle from the camera forward axis to the owner will not exceed this value
				

				export let maxViewVerticalDegrees = undefined // [number] 
				// the vertical angle from the camera forward axis to the owner will not exceed this value
				

				export let maximumDistance = undefined // [number] 
				// max distance from eye to attached node, i.e. the sphere radius
				

				export let minimumDistance = undefined // [number] 
				// min distance from eye to attached node, i.e. the sphere radius
				

				export let orientToCameraDeadzoneDegrees = undefined // [number] 
				// the attached node will not reorient until the angle between its forward vector and the vector to the camera is greater than this value
				

				export let pitchOffset = undefined // [number] 
				// pitch offset from camera (relative to max distance)is only effective if 
				

				export let useFixedVerticalOffset = undefined // [boolean] 
				// ignore vertical movement and lock the y position of the object.
				

				export let verticalMaxDistance = undefined // [number] 
				// max vertical distance between the attachednode and camera
				

				// ================ METHODS ================

				
				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let init = (...args) => instance.init(...args)

				export let recenter = (...args) => instance.recenter(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FollowBehavior]`, ...args) : null

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

												if (followedCamera != undefined) instance.followedCamera = followedCamera?.instance || followedCamera
				followedCamera = instance.followedCamera

				name = instance.name
				if (attachedNode != undefined) instance.attachedNode = attachedNode?.instance || attachedNode
				attachedNode = instance.attachedNode
				if (defaultDistance != undefined) instance.defaultDistance = defaultDistance?.instance || defaultDistance
				defaultDistance = instance.defaultDistance
				if (fixedVerticalOffset != undefined) instance.fixedVerticalOffset = fixedVerticalOffset?.instance || fixedVerticalOffset
				fixedVerticalOffset = instance.fixedVerticalOffset
				if (ignoreAngleClamp != undefined) instance.ignoreAngleClamp = ignoreAngleClamp?.instance || ignoreAngleClamp
				ignoreAngleClamp = instance.ignoreAngleClamp
				if (ignoreCameraPitchAndRoll != undefined) instance.ignoreCameraPitchAndRoll = ignoreCameraPitchAndRoll?.instance || ignoreCameraPitchAndRoll
				ignoreCameraPitchAndRoll = instance.ignoreCameraPitchAndRoll
				if (ignoreDistanceClamp != undefined) instance.ignoreDistanceClamp = ignoreDistanceClamp?.instance || ignoreDistanceClamp
				ignoreDistanceClamp = instance.ignoreDistanceClamp
				if (interpolatePose != undefined) instance.interpolatePose = interpolatePose?.instance || interpolatePose
				interpolatePose = instance.interpolatePose
				if (lerpTime != undefined) instance.lerpTime = lerpTime?.instance || lerpTime
				lerpTime = instance.lerpTime
				if (maxViewHorizontalDegrees != undefined) instance.maxViewHorizontalDegrees = maxViewHorizontalDegrees?.instance || maxViewHorizontalDegrees
				maxViewHorizontalDegrees = instance.maxViewHorizontalDegrees
				if (maxViewVerticalDegrees != undefined) instance.maxViewVerticalDegrees = maxViewVerticalDegrees?.instance || maxViewVerticalDegrees
				maxViewVerticalDegrees = instance.maxViewVerticalDegrees
				if (maximumDistance != undefined) instance.maximumDistance = maximumDistance?.instance || maximumDistance
				maximumDistance = instance.maximumDistance
				if (minimumDistance != undefined) instance.minimumDistance = minimumDistance?.instance || minimumDistance
				minimumDistance = instance.minimumDistance
				if (orientToCameraDeadzoneDegrees != undefined) instance.orientToCameraDeadzoneDegrees = orientToCameraDeadzoneDegrees?.instance || orientToCameraDeadzoneDegrees
				orientToCameraDeadzoneDegrees = instance.orientToCameraDeadzoneDegrees
				if (pitchOffset != undefined) instance.pitchOffset = pitchOffset?.instance || pitchOffset
				pitchOffset = instance.pitchOffset
				if (useFixedVerticalOffset != undefined) instance.useFixedVerticalOffset = useFixedVerticalOffset?.instance || useFixedVerticalOffset
				useFixedVerticalOffset = instance.useFixedVerticalOffset
				if (verticalMaxDistance != undefined) instance.verticalMaxDistance = verticalMaxDistance?.instance || verticalMaxDistance
				verticalMaxDistance = instance.verticalMaxDistance

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

			