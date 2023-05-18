
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					xrController  * required
					_jointMeshes  * required
					_handMesh  * required
					rigMapping  * required
					_leftHandedMeshes  
					_jointsInvisible  
					_jointScaleFactor   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let xrController = undefined // [webxrinputsource] * required
				// the controller to which the hand correlates.
				

				export let _jointMeshes = undefined // [array] * required
				// the meshes to be used to track the hand joints.
				

				export let _handMesh = undefined // [nullable] * required
				// an optional hand mesh.
				

				export let rigMapping = undefined // [nullable] * required
				// an optional rig mapping for the hand mesh.                  if not provided (but a hand mesh is provided),                  it will be assumed that the hand mesh's bones are named                  directly after the webxr bone names.
				

				export let _leftHandedMeshes = undefined // [boolean] 
				// are the hand meshes left-handed-system meshes
				

				export let _jointsInvisible = undefined // [boolean] 
				// are the tracked joint meshes visible
				

				export let _jointScaleFactor = undefined // [number] 
				// scale factor for all joint meshes
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRHand(xrController,_jointMeshes,_handMesh,rigMapping,_leftHandedMeshes,_jointsInvisible,_jointScaleFactor) : {}

				// ================ ACCESSORS ================

				
				export let handMesh = undefined // [nullable] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getHandPartMeshes = (...args) => instance.getHandPartMeshes(...args)

				export let getJointMesh = (...args) => instance.getJointMesh(...args)

				export let setHandMesh = (...args) => instance.setHandMesh(...args)

				export let updateFromXRFrame = (...args) => instance.updateFromXRFrame(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRHand]`, ...args) : null

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

												if (xrController != undefined) instance.xrController = xrController?.instance || xrController
				xrController = instance.xrController
				if (_jointMeshes != undefined) instance._jointMeshes = _jointMeshes?.instance || _jointMeshes
				_jointMeshes = instance._jointMeshes
				if (_handMesh != undefined) instance._handMesh = _handMesh?.instance || _handMesh
				_handMesh = instance._handMesh
				if (rigMapping != undefined) instance.rigMapping = rigMapping?.instance || rigMapping
				rigMapping = instance.rigMapping
				if (_leftHandedMeshes != undefined) instance._leftHandedMeshes = _leftHandedMeshes?.instance || _leftHandedMeshes
				_leftHandedMeshes = instance._leftHandedMeshes
				if (_jointsInvisible != undefined) instance._jointsInvisible = _jointsInvisible?.instance || _jointsInvisible
				_jointsInvisible = instance._jointsInvisible
				if (_jointScaleFactor != undefined) instance._jointScaleFactor = _jointScaleFactor?.instance || _jointScaleFactor
				_jointScaleFactor = instance._jointScaleFactor

				handMesh = instance.handMesh

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

			