
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					autoCorrectCameraLimitsAndSensibility  
					onTargetFramingAnimationEndObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FramingBehavior() : {}

				// ================ ACCESSORS ================

				
				export let defaultElevation = undefined // [number] 
				// 
				

				export let elevationReturnTime = undefined // [number] 
				// 
				

				export let elevationReturnWaitTime = undefined // [number] 
				// 
				

				export let framingTime = undefined // [number] 
				// 
				

				export let isUserIsMoving = undefined // [boolean] 
				// 
				

				export let mode = undefined // [number] 
				// 
				

				export let name = undefined // [string] 
				// gets or sets behavior's name
				

				export let positionScale = undefined // [number] 
				// 
				

				export let radiusScale = undefined // [number] 
				// 
				

				export let zoomStopsAnimation = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let autoCorrectCameraLimitsAndSensibility = undefined // [boolean] 
				// define if the behavior should automatically change the configuredcamera limits and sensibilities.
				

				export let onTargetFramingAnimationEndObservable = undefined // [observable] 
				// an event triggered when the animation to zoom on target mesh has ended
				

				// ================ METHODS ================

				
				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let init = (...args) => instance.init(...args)

				export let stopAllAnimations = (...args) => instance.stopAllAnimations(...args)

				export let zoomOnBoundingInfo = (...args) => instance.zoomOnBoundingInfo(...args)

				export let zoomOnMesh = (...args) => instance.zoomOnMesh(...args)

				export let zoomOnMeshHierarchy = (...args) => instance.zoomOnMeshHierarchy(...args)

				export let zoomOnMeshesHierarchy = (...args) => instance.zoomOnMeshesHierarchy(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FramingBehavior]`, ...args) : null

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

												if (defaultElevation != undefined) instance.defaultElevation = defaultElevation?.instance || defaultElevation
				defaultElevation = instance.defaultElevation
				if (elevationReturnTime != undefined) instance.elevationReturnTime = elevationReturnTime?.instance || elevationReturnTime
				elevationReturnTime = instance.elevationReturnTime
				if (elevationReturnWaitTime != undefined) instance.elevationReturnWaitTime = elevationReturnWaitTime?.instance || elevationReturnWaitTime
				elevationReturnWaitTime = instance.elevationReturnWaitTime
				if (framingTime != undefined) instance.framingTime = framingTime?.instance || framingTime
				framingTime = instance.framingTime

				isUserIsMoving = instance.isUserIsMoving
				if (mode != undefined) instance.mode = mode?.instance || mode
				mode = instance.mode

				name = instance.name
				if (positionScale != undefined) instance.positionScale = positionScale?.instance || positionScale
				positionScale = instance.positionScale
				if (radiusScale != undefined) instance.radiusScale = radiusScale?.instance || radiusScale
				radiusScale = instance.radiusScale
				if (zoomStopsAnimation != undefined) instance.zoomStopsAnimation = zoomStopsAnimation?.instance || zoomStopsAnimation
				zoomStopsAnimation = instance.zoomStopsAnimation
				if (autoCorrectCameraLimitsAndSensibility != undefined) instance.autoCorrectCameraLimitsAndSensibility = autoCorrectCameraLimitsAndSensibility?.instance || autoCorrectCameraLimitsAndSensibility
				autoCorrectCameraLimitsAndSensibility = instance.autoCorrectCameraLimitsAndSensibility
				if (onTargetFramingAnimationEndObservable != undefined) instance.onTargetFramingAnimationEndObservable = onTargetFramingAnimationEndObservable?.instance || onTargetFramingAnimationEndObservable
				onTargetFramingAnimationEndObservable = instance.onTargetFramingAnimationEndObservable

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

			