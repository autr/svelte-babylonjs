
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					transformNode  * required
					scene  * required 
					_pluginData  
					_pluginDataInstances  
					disablePreStep  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let transformNode = undefined // [transformnode] * required
				// the transform node to construct the physics body for.
				

				export let scene = undefined // [scene] * required
				// the scene containing the physics engine.this code is useful for creating a physics body for a given transform node in a scene.it checks the version of the physics engine and the physics plugin, and initializes the body accordingly.it also sets the node's rotation quaternion if it is not already set. finally, it adds the body to the physics engine.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PhysicsBody(transformNode,scene) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let _pluginData = undefined // [any] 
				// v2 physics plugin private data for single transform
				

				export let _pluginDataInstances = undefined // [array] 
				// v2 physics plugin private data for instances
				

				export let disablePreStep = undefined // [boolean] 
				// disable pre-step that consists in updating physics body from transform node translation/orientation.true by default for maximum performance.
				

				// ================ METHODS ================

				
				export let addConstraint = (...args) => instance.addConstraint(...args)

				export let applyForce = (...args) => instance.applyForce(...args)

				export let applyImpulse = (...args) => instance.applyImpulse(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getAngularDamping = (...args) => instance.getAngularDamping(...args)

				export let getAngularVelocityToRef = (...args) => instance.getAngularVelocityToRef(...args)

				export let getEventMask = (...args) => instance.getEventMask(...args)

				export let getFilterGroup = (...args) => instance.getFilterGroup(...args)

				export let getGeometry = (...args) => instance.getGeometry(...args)

				export let getLinearDamping = (...args) => instance.getLinearDamping(...args)

				export let getLinearVelocityToRef = (...args) => instance.getLinearVelocityToRef(...args)

				export let getMassProperties = (...args) => instance.getMassProperties(...args)

				export let getObjectCenter = (...args) => instance.getObjectCenter(...args)

				export let getObjectExtents = (...args) => instance.getObjectExtents(...args)

				export let getShape = (...args) => instance.getShape(...args)

				export let registerOnCollide = (...args) => instance.registerOnCollide(...args)

				export let setAngularDamping = (...args) => instance.setAngularDamping(...args)

				export let setAngularVelocity = (...args) => instance.setAngularVelocity(...args)

				export let setEventMask = (...args) => instance.setEventMask(...args)

				export let setFilterGroup = (...args) => instance.setFilterGroup(...args)

				export let setLinearDamping = (...args) => instance.setLinearDamping(...args)

				export let setLinearVelocity = (...args) => instance.setLinearVelocity(...args)

				export let setMassProperties = (...args) => instance.setMassProperties(...args)

				export let setShape = (...args) => instance.setShape(...args)

				export let unregisterOnCollide = (...args) => instance.unregisterOnCollide(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PhysicsBody]`, ...args) : null

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

												if (transformNode != undefined) instance.transformNode = transformNode?.instance || transformNode
				transformNode = instance.transformNode
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (_pluginData != undefined) instance._pluginData = _pluginData?.instance || _pluginData
				_pluginData = instance._pluginData
				if (_pluginDataInstances != undefined) instance._pluginDataInstances = _pluginDataInstances?.instance || _pluginDataInstances
				_pluginDataInstances = instance._pluginDataInstances
				if (disablePreStep != undefined) instance.disablePreStep = disablePreStep?.instance || disablePreStep
				disablePreStep = instance.disablePreStep

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

			