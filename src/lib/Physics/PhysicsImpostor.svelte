
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					object  * required
					type  * required
					_options  
					_scene   
					afterStep  
					beforeStep  
					onCollide  
					onCollideEvent  
					uniqueId  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let object = undefined // [iphysicsenabledobject] * required
				// the physics-enabled object used as the physics imposter
				

				export let type = undefined // [number] * required
				// the type of the physics imposter. types are available as static members of this class.
				

				export let _options = undefined // [physicsimpostorparameters] 
				// the options for the physics imposter
				

				export let _scene = undefined // [scene] 
				// the babylon scene
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PhysicsImpostor(object,type,_options,_scene) : {}

				// ================ ACCESSORS ================

				
				export let friction = undefined // [number] 
				// 
				

				export let isDisposed = undefined // [boolean] 
				// 
				

				export let mass = undefined // [number] 
				// 
				

				export let parent = undefined // [nullable] 
				// 
				

				export let physicsBody = undefined // [any] 
				// 
				

				export let positionIterations = undefined // [number] 
				// 
				

				export let pressure = undefined // [number] 
				// 
				

				export let restitution = undefined // [number] 
				// 
				

				export let stiffness = undefined // [number] 
				// 
				

				export let velocityIterations = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let afterStep = undefined // [reflection] 
				// 
				

				export let beforeStep = undefined // [reflection] 
				// 
				

				export let onCollide = undefined // [reflection] 
				// 
				

				export let onCollideEvent = undefined // [nullable] 
				// legacy collision detection event support
				

				export let uniqueId = undefined // [number] 
				// the unique id of the physics imposterset by the physics engine when adding this impostor to the array
				

				// ================ METHODS ================

				
				export let addAnchor = (...args) => instance.addAnchor(...args)

				export let addHook = (...args) => instance.addHook(...args)

				export let addJoint = (...args) => instance.addJoint(...args)

				export let applyForce = (...args) => instance.applyForce(...args)

				export let applyImpulse = (...args) => instance.applyImpulse(...args)

				export let clone = (...args) => instance.clone(...args)

				export let createJoint = (...args) => instance.createJoint(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let executeNativeFunction = (...args) => instance.executeNativeFunction(...args)

				export let forceUpdate = (...args) => instance.forceUpdate(...args)

				export let getAngularVelocity = (...args) => instance.getAngularVelocity(...args)

				export let getBoxSizeToRef = (...args) => instance.getBoxSizeToRef(...args)

				export let getLinearVelocity = (...args) => instance.getLinearVelocity(...args)

				export let getObjectCenter = (...args) => instance.getObjectCenter(...args)

				export let getObjectExtents = (...args) => instance.getObjectExtents(...args)

				export let getParam = (...args) => instance.getParam(...args)

				export let getParentsRotation = (...args) => instance.getParentsRotation(...args)

				export let getRadius = (...args) => instance.getRadius(...args)

				export let isBodyInitRequired = (...args) => instance.isBodyInitRequired(...args)

				export let registerAfterPhysicsStep = (...args) => instance.registerAfterPhysicsStep(...args)

				export let registerBeforePhysicsStep = (...args) => instance.registerBeforePhysicsStep(...args)

				export let registerOnPhysicsCollide = (...args) => instance.registerOnPhysicsCollide(...args)

				export let resetUpdateFlags = (...args) => instance.resetUpdateFlags(...args)

				export let setAngularVelocity = (...args) => instance.setAngularVelocity(...args)

				export let setDeltaPosition = (...args) => instance.setDeltaPosition(...args)

				export let setDeltaRotation = (...args) => instance.setDeltaRotation(...args)

				export let setLinearVelocity = (...args) => instance.setLinearVelocity(...args)

				export let setMass = (...args) => instance.setMass(...args)

				export let setParam = (...args) => instance.setParam(...args)

				export let setScalingUpdated = (...args) => instance.setScalingUpdated(...args)

				export let sleep = (...args) => instance.sleep(...args)

				export let syncBoneWithImpostor = (...args) => instance.syncBoneWithImpostor(...args)

				export let syncImpostorWithBone = (...args) => instance.syncImpostorWithBone(...args)

				export let unregisterAfterPhysicsStep = (...args) => instance.unregisterAfterPhysicsStep(...args)

				export let unregisterBeforePhysicsStep = (...args) => instance.unregisterBeforePhysicsStep(...args)

				export let unregisterOnPhysicsCollide = (...args) => instance.unregisterOnPhysicsCollide(...args)

				export let wakeUp = (...args) => instance.wakeUp(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PhysicsImpostor]`, ...args) : null

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

												if (object != undefined) instance.object = object?.instance || object
				object = instance.object
				if (type != undefined) instance.type = type?.instance || type
				type = instance.type
				if (_options != undefined) instance._options = _options?.instance || _options
				_options = instance._options
				if (_scene != undefined) instance._scene = _scene?.instance || _scene
				_scene = instance._scene
				if (friction != undefined) instance.friction = friction?.instance || friction
				friction = instance.friction

				isDisposed = instance.isDisposed
				if (mass != undefined) instance.mass = mass?.instance || mass
				mass = instance.mass
				if (parent != undefined) instance.parent = parent?.instance || parent
				parent = instance.parent
				if (physicsBody != undefined) instance.physicsBody = physicsBody?.instance || physicsBody
				physicsBody = instance.physicsBody
				if (positionIterations != undefined) instance.positionIterations = positionIterations?.instance || positionIterations
				positionIterations = instance.positionIterations
				if (pressure != undefined) instance.pressure = pressure?.instance || pressure
				pressure = instance.pressure
				if (restitution != undefined) instance.restitution = restitution?.instance || restitution
				restitution = instance.restitution
				if (stiffness != undefined) instance.stiffness = stiffness?.instance || stiffness
				stiffness = instance.stiffness
				if (velocityIterations != undefined) instance.velocityIterations = velocityIterations?.instance || velocityIterations
				velocityIterations = instance.velocityIterations
				if (afterStep != undefined) instance.afterStep = afterStep?.instance || afterStep
				afterStep = instance.afterStep
				if (beforeStep != undefined) instance.beforeStep = beforeStep?.instance || beforeStep
				beforeStep = instance.beforeStep
				if (onCollide != undefined) instance.onCollide = onCollide?.instance || onCollide
				onCollide = instance.onCollide
				if (onCollideEvent != undefined) instance.onCollideEvent = onCollideEvent?.instance || onCollideEvent
				onCollideEvent = instance.onCollideEvent
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId

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

			