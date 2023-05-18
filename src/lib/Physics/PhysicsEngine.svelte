
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					gravity  * required
					_physicsPlugin   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let gravity = undefined // [nullable] * required
				// defines the gravity vector used by the simulation
				

				export let _physicsPlugin = undefined // [iphysicsengineplugin] 
				// defines the plugin to use (cannonjs by default)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PhysicsEngine(gravity,_physicsPlugin) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let _step = (...args) => instance._step(...args)

				export let addImpostor = (...args) => instance.addImpostor(...args)

				export let addJoint = (...args) => instance.addJoint(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getImpostorForPhysicsObject = (...args) => instance.getImpostorForPhysicsObject(...args)

				export let getImpostorWithPhysicsBody = (...args) => instance.getImpostorWithPhysicsBody(...args)

				export let getImpostors = (...args) => instance.getImpostors(...args)

				export let getPhysicsPlugin = (...args) => instance.getPhysicsPlugin(...args)

				export let getPhysicsPluginName = (...args) => instance.getPhysicsPluginName(...args)

				export let getPluginVersion = (...args) => instance.getPluginVersion(...args)

				export let getSubTimeStep = (...args) => instance.getSubTimeStep(...args)

				export let getTimeStep = (...args) => instance.getTimeStep(...args)

				export let raycast = (...args) => instance.raycast(...args)

				export let raycastToRef = (...args) => instance.raycastToRef(...args)

				export let removeImpostor = (...args) => instance.removeImpostor(...args)

				export let removeJoint = (...args) => instance.removeJoint(...args)

				export let setGravity = (...args) => instance.setGravity(...args)

				export let setSubTimeStep = (...args) => instance.setSubTimeStep(...args)

				export let setTimeStep = (...args) => instance.setTimeStep(...args)

				export let DefaultPluginFactory = (...args) => instance.DefaultPluginFactory(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PhysicsEngine]`, ...args) : null

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

												if (gravity != undefined) instance.gravity = gravity?.instance || gravity
				gravity = instance.gravity
				if (_physicsPlugin != undefined) instance._physicsPlugin = _physicsPlugin?.instance || _physicsPlugin
				_physicsPlugin = instance._physicsPlugin

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

			