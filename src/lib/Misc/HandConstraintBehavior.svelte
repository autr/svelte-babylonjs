
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					gazeProximityRadius  
					handConstraintVisibility  
					handedness  
					lerpTime  
					nodeOrientationMode  
					palmUpStrictness  
					targetOffset  
					targetZone  
					zoneOrientationMode  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.HandConstraintBehavior() : {}

				// ================ ACCESSORS ================

				
				export let name = undefined // [string] 
				// gets or sets behavior's name
				

				// ================ PROPERTIES ================

				
				export let gazeProximityRadius = undefined // [number] 
				// the radius in meters around the center of the hand that the user must gaze inside for the attached node to be enabled and appear.used with handconstraintvisibility.gaze_focus
				

				export let handConstraintVisibility = undefined // [handconstraintvisibility] 
				// sets the handconstraintvisibility level for the hand constraint
				

				export let handedness = undefined // [xrhandedness] 
				// set the hand this behavior should follow. if set to "none", it will follow any visible hand (prioritising the left one).
				

				export let lerpTime = undefined // [number] 
				// rate of interpolation of position and rotation of the attached node.higher values will give a slower interpolation.
				

				export let nodeOrientationMode = undefined // [handconstraintorientation] 
				// orientation mode of the node attached to this behavior
				

				export let palmUpStrictness = undefined // [number] 
				// a number from 0.0 to 1.0, marking how restricted the direction the palm faces is for the attached node to be enabled.a 1 means the palm must be directly facing the user before the node is enabled, a 0 means it is always enabled.used with handconstraintvisibility.palm_up
				

				export let targetOffset = undefined // [number] 
				// offset distance from the hand in meters
				

				export let targetZone = undefined // [handconstraintzone] 
				// where to place the node regarding the center of the hand.
				

				export let zoneOrientationMode = undefined // [handconstraintorientation] 
				// orientation mode of the 4 zones around the hand
				

				// ================ METHODS ================

				
				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let disable = (...args) => instance.disable(...args)

				export let enable = (...args) => instance.enable(...args)

				export let init = (...args) => instance.init(...args)

				export let linkToXRExperience = (...args) => instance.linkToXRExperience(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:HandConstraintBehavior]`, ...args) : null

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

								
				name = instance.name
				if (gazeProximityRadius != undefined) instance.gazeProximityRadius = gazeProximityRadius?.instance || gazeProximityRadius
				gazeProximityRadius = instance.gazeProximityRadius
				if (handConstraintVisibility != undefined) instance.handConstraintVisibility = handConstraintVisibility?.instance || handConstraintVisibility
				handConstraintVisibility = instance.handConstraintVisibility
				if (handedness != undefined) instance.handedness = handedness?.instance || handedness
				handedness = instance.handedness
				if (lerpTime != undefined) instance.lerpTime = lerpTime?.instance || lerpTime
				lerpTime = instance.lerpTime
				if (nodeOrientationMode != undefined) instance.nodeOrientationMode = nodeOrientationMode?.instance || nodeOrientationMode
				nodeOrientationMode = instance.nodeOrientationMode
				if (palmUpStrictness != undefined) instance.palmUpStrictness = palmUpStrictness?.instance || palmUpStrictness
				palmUpStrictness = instance.palmUpStrictness
				if (targetOffset != undefined) instance.targetOffset = targetOffset?.instance || targetOffset
				targetOffset = instance.targetOffset
				if (targetZone != undefined) instance.targetZone = targetZone?.instance || targetZone
				targetZone = instance.targetZone
				if (zoneOrientationMode != undefined) instance.zoneOrientationMode = zoneOrientationMode?.instance || zoneOrientationMode
				zoneOrientationMode = instance.zoneOrientationMode

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

			