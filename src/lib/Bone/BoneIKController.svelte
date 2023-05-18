
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
					options   
					poleAngle  
					poleTargetBone  
					poleTargetLocalOffset  
					poleTargetMesh  
					poleTargetPosition  
					slerpAmount  
					targetMesh  
					targetPosition  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let mesh = undefined // [transformnode] * required
				// defines the transformnode to control
				

				export let bone = undefined // [bone] * required
				// defines the bone to control. the bone needs to have a parent bone. it also needs to have a length greater than 0 or a children we can use to infer its length.
				

				export let options = undefined // [reflection] 
				// defines options to set up the controller
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BoneIKController(mesh,bone,options) : {}

				// ================ ACCESSORS ================

				
				export let maxAngle = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let poleAngle = undefined // [number] 
				// gets or sets the pole angle
				

				export let poleTargetBone = undefined // [nullable] 
				// gets or sets the bone used as pole
				

				export let poleTargetLocalOffset = undefined // [vector3] 
				// gets or sets the pole target local offset
				

				export let poleTargetMesh = undefined // [transformnode] 
				// gets or sets the mesh used as pole
				

				export let poleTargetPosition = undefined // [vector3] 
				// gets or sets the pole target position
				

				export let slerpAmount = undefined // [number] 
				// the amount to slerp (spherical linear interpolation) to the target.  set this to a value between 0 and 1 (a value of 1 disables slerp)
				

				export let targetMesh = undefined // [transformnode] 
				// gets or sets the target transformnodename kept as mesh for back compatibility
				

				export let targetPosition = undefined // [vector3] 
				// gets or sets the target position
				

				// ================ METHODS ================

				
				export let update = (...args) => instance.update(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BoneIKController]`, ...args) : null

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
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (maxAngle != undefined) instance.maxAngle = maxAngle?.instance || maxAngle
				maxAngle = instance.maxAngle
				if (poleAngle != undefined) instance.poleAngle = poleAngle?.instance || poleAngle
				poleAngle = instance.poleAngle
				if (poleTargetBone != undefined) instance.poleTargetBone = poleTargetBone?.instance || poleTargetBone
				poleTargetBone = instance.poleTargetBone
				if (poleTargetLocalOffset != undefined) instance.poleTargetLocalOffset = poleTargetLocalOffset?.instance || poleTargetLocalOffset
				poleTargetLocalOffset = instance.poleTargetLocalOffset
				if (poleTargetMesh != undefined) instance.poleTargetMesh = poleTargetMesh?.instance || poleTargetMesh
				poleTargetMesh = instance.poleTargetMesh
				if (poleTargetPosition != undefined) instance.poleTargetPosition = poleTargetPosition?.instance || poleTargetPosition
				poleTargetPosition = instance.poleTargetPosition
				if (slerpAmount != undefined) instance.slerpAmount = slerpAmount?.instance || slerpAmount
				slerpAmount = instance.slerpAmount
				if (targetMesh != undefined) instance.targetMesh = targetMesh?.instance || targetMesh
				targetMesh = instance.targetMesh
				if (targetPosition != undefined) instance.targetPosition = targetPosition?.instance || targetPosition
				targetPosition = instance.targetPosition

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

			