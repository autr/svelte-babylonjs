
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene   
					checksIsEnabled (readonly) 
					name (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] 
				// defines the scene to register the component in
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.OctreeSceneComponent(scene) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let checksIsEnabled = undefined // [literal] 
				// indicates if the meshes have been checked to make sure they are isenabled()
				

				export let name = undefined // [literal] 
				// the component name help to identify the component in the list of scene components.
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getActiveMeshCandidates = (...args) => instance.getActiveMeshCandidates(...args)

				export let getActiveSubMeshCandidates = (...args) => instance.getActiveSubMeshCandidates(...args)

				export let getCollidingSubMeshCandidates = (...args) => instance.getCollidingSubMeshCandidates(...args)

				export let getIntersectingSubMeshCandidates = (...args) => instance.getIntersectingSubMeshCandidates(...args)

				export let rebuild = (...args) => instance.rebuild(...args)

				export let register = (...args) => instance.register(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:OctreeSceneComponent]`, ...args) : null

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

												if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene

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

			