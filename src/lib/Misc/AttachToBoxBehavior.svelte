
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_ui  * required 
					distanceAwayFromBottomOfFace  
					distanceAwayFromFace  
					name  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _ui = undefined // [transformnode] * required
				// the transform node that should be attached to the mesh
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AttachToBoxBehavior(_ui) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let distanceAwayFromBottomOfFace = undefined // [number] 
				// the distance from the bottom of the face that the ui should be attached to (default: 0.15)
				

				export let distanceAwayFromFace = undefined // [number] 
				// the distance away from the face of the mesh that the ui should be attached to (default: 0.15)
				

				export let name = undefined // [string] 
				// the name of the behavior
				

				// ================ METHODS ================

				
				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let init = (...args) => instance.init(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AttachToBoxBehavior]`, ...args) : null

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

												if (_ui != undefined) instance._ui = _ui?.instance || _ui
				_ui = instance._ui
				if (distanceAwayFromBottomOfFace != undefined) instance.distanceAwayFromBottomOfFace = distanceAwayFromBottomOfFace?.instance || distanceAwayFromBottomOfFace
				distanceAwayFromBottomOfFace = instance.distanceAwayFromBottomOfFace
				if (distanceAwayFromFace != undefined) instance.distanceAwayFromFace = distanceAwayFromFace?.instance || distanceAwayFromFace
				distanceAwayFromFace = instance.distanceAwayFromFace
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name

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

			