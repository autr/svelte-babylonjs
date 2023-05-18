
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					enabled  
					hitNormalOffset  
					interpolatePose  
					keepOrientationVertical  
					lerpTime  
					maxStickingDistance  
					meshes  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SurfaceMagnetismBehavior() : {}

				// ================ ACCESSORS ================

				
				export let name = undefined // [string] 
				// gets or sets behavior's name
				

				// ================ PROPERTIES ================

				
				export let enabled = undefined // [boolean] 
				// is this behavior reacting to pointer events
				

				export let hitNormalOffset = undefined // [number] 
				// distance offset from the hit point to place the target at, along the hit normal.
				

				export let interpolatePose = undefined // [boolean] 
				// set to false if the node should strictly follow the camera without any interpolation time
				

				export let keepOrientationVertical = undefined // [boolean] 
				// if true, pitch and roll are omitted.
				

				export let lerpTime = undefined // [number] 
				// rate of interpolation of position and rotation of the attached node.higher values will give a slower interpolation.
				

				export let maxStickingDistance = undefined // [number] 
				// maximum distance for the node to stick to the surface
				

				export let meshes = undefined // [array] 
				// spatial mapping meshes to collide with
				

				// ================ METHODS ================

				
				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let findAndUpdateTarget = (...args) => instance.findAndUpdateTarget(...args)

				export let init = (...args) => instance.init(...args)

				export let updateAttachPoint = (...args) => instance.updateAttachPoint(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SurfaceMagnetismBehavior]`, ...args) : null

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
				if (enabled != undefined) instance.enabled = enabled?.instance || enabled
				enabled = instance.enabled
				if (hitNormalOffset != undefined) instance.hitNormalOffset = hitNormalOffset?.instance || hitNormalOffset
				hitNormalOffset = instance.hitNormalOffset
				if (interpolatePose != undefined) instance.interpolatePose = interpolatePose?.instance || interpolatePose
				interpolatePose = instance.interpolatePose
				if (keepOrientationVertical != undefined) instance.keepOrientationVertical = keepOrientationVertical?.instance || keepOrientationVertical
				keepOrientationVertical = instance.keepOrientationVertical
				if (lerpTime != undefined) instance.lerpTime = lerpTime?.instance || lerpTime
				lerpTime = instance.lerpTime
				if (maxStickingDistance != undefined) instance.maxStickingDistance = maxStickingDistance?.instance || maxStickingDistance
				maxStickingDistance = instance.maxStickingDistance
				if (meshes != undefined) instance.meshes = meshes?.instance || meshes
				meshes = instance.meshes

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

			