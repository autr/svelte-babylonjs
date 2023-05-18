
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_useDeltaForWorldStep  
					ammoInjection  
					overlappingPairCache   
					bjsAMMO  
					name  
					onCreateCustomConvexHullImpostor  
					onCreateCustomMeshImpostor  
					onCreateCustomShape  
					world  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _useDeltaForWorldStep = undefined // [boolean] 
				// if the time between frames should be used when calculating physics steps (default: true)
				

				export let ammoInjection = undefined // [any] 
				// can be used to inject your own ammo reference
				

				export let overlappingPairCache = undefined // [any] 
				// can be used to specify your own overlapping pair cache
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AmmoJSPlugin(_useDeltaForWorldStep,ammoInjection,overlappingPairCache) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let bjsAMMO = undefined // [any] 
				// reference to the ammo library
				

				export let name = undefined // [string] 
				// name of the plugin
				

				export let onCreateCustomConvexHullImpostor = undefined // [reflection] 
				// 
				

				export let onCreateCustomMeshImpostor = undefined // [reflection] 
				// 
				

				export let onCreateCustomShape = undefined // [reflection] 
				// 
				

				export let world = undefined // [any] 
				// created ammojs world which physics bodies are added to
				

				// ================ METHODS ================

				
				export let appendAnchor = (...args) => instance.appendAnchor(...args)

				export let appendHook = (...args) => instance.appendHook(...args)

				export let applyForce = (...args) => instance.applyForce(...args)

				export let applyImpulse = (...args) => instance.applyImpulse(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let executeStep = (...args) => instance.executeStep(...args)

				export let generateJoint = (...args) => instance.generateJoint(...args)

				export let generatePhysicsBody = (...args) => instance.generatePhysicsBody(...args)

				export let getAngularVelocity = (...args) => instance.getAngularVelocity(...args)

				export let getBodyFriction = (...args) => instance.getBodyFriction(...args)

				export let getBodyMass = (...args) => instance.getBodyMass(...args)

				export let getBodyPositionIterations = (...args) => instance.getBodyPositionIterations(...args)

				export let getBodyPressure = (...args) => instance.getBodyPressure(...args)

				export let getBodyRestitution = (...args) => instance.getBodyRestitution(...args)

				export let getBodyStiffness = (...args) => instance.getBodyStiffness(...args)

				export let getBodyVelocityIterations = (...args) => instance.getBodyVelocityIterations(...args)

				export let getBoxSizeToRef = (...args) => instance.getBoxSizeToRef(...args)

				export let getLinearVelocity = (...args) => instance.getLinearVelocity(...args)

				export let getPluginVersion = (...args) => instance.getPluginVersion(...args)

				export let getRadius = (...args) => instance.getRadius(...args)

				export let getTimeStep = (...args) => instance.getTimeStep(...args)

				export let isSupported = (...args) => instance.isSupported(...args)

				export let raycast = (...args) => instance.raycast(...args)

				export let raycastToRef = (...args) => instance.raycastToRef(...args)

				export let removeJoint = (...args) => instance.removeJoint(...args)

				export let removePhysicsBody = (...args) => instance.removePhysicsBody(...args)

				export let setAngularVelocity = (...args) => instance.setAngularVelocity(...args)

				export let setBodyFriction = (...args) => instance.setBodyFriction(...args)

				export let setBodyMass = (...args) => instance.setBodyMass(...args)

				export let setBodyPositionIterations = (...args) => instance.setBodyPositionIterations(...args)

				export let setBodyPressure = (...args) => instance.setBodyPressure(...args)

				export let setBodyRestitution = (...args) => instance.setBodyRestitution(...args)

				export let setBodyStiffness = (...args) => instance.setBodyStiffness(...args)

				export let setBodyVelocityIterations = (...args) => instance.setBodyVelocityIterations(...args)

				export let setFixedTimeStep = (...args) => instance.setFixedTimeStep(...args)

				export let setGravity = (...args) => instance.setGravity(...args)

				export let setLimit = (...args) => instance.setLimit(...args)

				export let setLinearVelocity = (...args) => instance.setLinearVelocity(...args)

				export let setMaxSteps = (...args) => instance.setMaxSteps(...args)

				export let setMotor = (...args) => instance.setMotor(...args)

				export let setPhysicsBodyTransformation = (...args) => instance.setPhysicsBodyTransformation(...args)

				export let setTimeStep = (...args) => instance.setTimeStep(...args)

				export let setTransformationFromPhysicsBody = (...args) => instance.setTransformationFromPhysicsBody(...args)

				export let sleepBody = (...args) => instance.sleepBody(...args)

				export let syncMeshWithImpostor = (...args) => instance.syncMeshWithImpostor(...args)

				export let updateDistanceJoint = (...args) => instance.updateDistanceJoint(...args)

				export let wakeUpBody = (...args) => instance.wakeUpBody(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AmmoJSPlugin]`, ...args) : null

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

												if (_useDeltaForWorldStep != undefined) instance._useDeltaForWorldStep = _useDeltaForWorldStep?.instance || _useDeltaForWorldStep
				_useDeltaForWorldStep = instance._useDeltaForWorldStep
				if (ammoInjection != undefined) instance.ammoInjection = ammoInjection?.instance || ammoInjection
				ammoInjection = instance.ammoInjection
				if (overlappingPairCache != undefined) instance.overlappingPairCache = overlappingPairCache?.instance || overlappingPairCache
				overlappingPairCache = instance.overlappingPairCache
				if (bjsAMMO != undefined) instance.bjsAMMO = bjsAMMO?.instance || bjsAMMO
				bjsAMMO = instance.bjsAMMO
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (onCreateCustomConvexHullImpostor != undefined) instance.onCreateCustomConvexHullImpostor = onCreateCustomConvexHullImpostor?.instance || onCreateCustomConvexHullImpostor
				onCreateCustomConvexHullImpostor = instance.onCreateCustomConvexHullImpostor
				if (onCreateCustomMeshImpostor != undefined) instance.onCreateCustomMeshImpostor = onCreateCustomMeshImpostor?.instance || onCreateCustomMeshImpostor
				onCreateCustomMeshImpostor = instance.onCreateCustomMeshImpostor
				if (onCreateCustomShape != undefined) instance.onCreateCustomShape = onCreateCustomShape?.instance || onCreateCustomShape
				onCreateCustomShape = instance.onCreateCustomShape
				if (world != undefined) instance.world = world?.instance || world
				world = instance.world

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

			