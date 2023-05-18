
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_scene  * required
					_origin  * required
					_options  * required 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _scene = undefined // [scene] * required
				// the babylonjs scene
				

				export let _origin = undefined // [vector3] * required
				// the origin position of the vortex
				

				export let _options = undefined // [physicsvortexeventoptions] * required
				// the options for the vortex event
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PhysicsVortexEvent(_scene,_origin,_options) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let disable = (...args) => instance.disable(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let enable = (...args) => instance.enable(...args)

				export let getData = (...args) => instance.getData(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PhysicsVortexEvent]`, ...args) : null

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

												if (_scene != undefined) instance._scene = _scene?.instance || _scene
				_scene = instance._scene
				if (_origin != undefined) instance._origin = _origin?.instance || _origin
				_origin = instance._origin
				if (_options != undefined) instance._options = _options?.instance || _options
				_options = instance._options

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

			