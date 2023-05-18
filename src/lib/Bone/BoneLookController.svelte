
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					mesh  * required
					bone  * required
					target  * required
					options   
					adjustPitch  
					adjustRoll  
					adjustYaw  
					slerpAmount  
					upAxis  
					upAxisSpace  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let mesh = undefined // [transformnode] * required
				// the transformnode that the bone belongs to
				

				export let bone = undefined // [bone] * required
				// the bone that will be looking to the target
				

				export let target = undefined // [vector3] * required
				// the target vector3 to look at
				

				export let options = undefined // [reflection] 
				// optional settings:* maxyaw: the maximum angle the bone will yaw to* minyaw: the minimum angle the bone will yaw to* maxpitch: the maximum angle the bone will pitch to* minpitch: the minimum angle the bone will yaw to* slerpamount: set the between 0 and 1 to make the bone slerp to the target.* upaxis: the up axis of the coordinate system* upaxisspace: the space that the up axis is in - space.bone, space.local (default), or space.world.* yawaxis: set yawaxis if the bone does not yaw on the y axis* pitchaxis: set pitchaxis if the bone does not pitch on the x axis* adjustyaw: used to make an adjustment to the yaw of the bone* adjustpitch: used to make an adjustment to the pitch of the bone* adjustroll: used to make an adjustment to the roll of the bone
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BoneLookController(mesh,bone,target,options) : {}

				// ================ ACCESSORS ================

				
				export let maxPitch = undefined // [number] 
				// 
				

				export let maxYaw = undefined // [number] 
				// 
				

				export let minPitch = undefined // [number] 
				// 
				

				export let minYaw = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let adjustPitch = undefined // [number] 
				// used to make an adjustment to the pitch of the bone
				

				export let adjustRoll = undefined // [number] 
				// used to make an adjustment to the roll of the bone
				

				export let adjustYaw = undefined // [number] 
				// used to make an adjustment to the yaw of the bone
				

				export let slerpAmount = undefined // [number] 
				// the amount to slerp (spherical linear interpolation) to the target.  set this to a value between 0 and 1 (a value of 1 disables slerp)
				

				export let upAxis = undefined // [vector3] 
				// the up axis of the coordinate system that is used when the bone is rotated
				

				export let upAxisSpace = undefined // [space] 
				// the space that the up axis is in - space.bone, space.local (default), or space.world
				

				// ================ METHODS ================

				
				export let update = (...args) => instance.update(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BoneLookController]`, ...args) : null

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

												if (mesh != undefined) instance.mesh = mesh?.instance || mesh
				mesh = instance.mesh
				if (bone != undefined) instance.bone = bone?.instance || bone
				bone = instance.bone
				if (target != undefined) instance.target = target?.instance || target
				target = instance.target
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (maxPitch != undefined) instance.maxPitch = maxPitch?.instance || maxPitch
				maxPitch = instance.maxPitch
				if (maxYaw != undefined) instance.maxYaw = maxYaw?.instance || maxYaw
				maxYaw = instance.maxYaw
				if (minPitch != undefined) instance.minPitch = minPitch?.instance || minPitch
				minPitch = instance.minPitch
				if (minYaw != undefined) instance.minYaw = minYaw?.instance || minYaw
				minYaw = instance.minYaw
				if (adjustPitch != undefined) instance.adjustPitch = adjustPitch?.instance || adjustPitch
				adjustPitch = instance.adjustPitch
				if (adjustRoll != undefined) instance.adjustRoll = adjustRoll?.instance || adjustRoll
				adjustRoll = instance.adjustRoll
				if (adjustYaw != undefined) instance.adjustYaw = adjustYaw?.instance || adjustYaw
				adjustYaw = instance.adjustYaw
				if (slerpAmount != undefined) instance.slerpAmount = slerpAmount?.instance || slerpAmount
				slerpAmount = instance.slerpAmount
				if (upAxis != undefined) instance.upAxis = upAxis?.instance || upAxis
				upAxis = instance.upAxis
				if (upAxisSpace != undefined) instance.upAxisSpace = upAxisSpace?.instance || upAxisSpace
				upAxisSpace = instance.upAxisSpace

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

			