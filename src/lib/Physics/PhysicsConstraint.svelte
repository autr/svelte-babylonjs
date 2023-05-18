
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					type  * required
					options  * required
					scene  * required 
					_pluginData  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let type = undefined // [constrainttype] * required
				// the type of constraint to create.
				

				export let options = undefined // [physicsconstraintparameters] * required
				// the options for the constraint.
				

				export let scene = undefined // [scene] * required
				// the scene the constraint belongs to.this code is useful for creating a new constraint for the physics engine. it checks if the scene has a physics engine, and if the plugin version is correct.if all checks pass, it initializes the constraint with the given type and options.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PhysicsConstraint(type,options,scene) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let _pluginData = undefined // [any] 
				// v2 physics plugin private data for a physics material
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getAxisFriction = (...args) => instance.getAxisFriction(...args)

				export let getAxisMaxLimit = (...args) => instance.getAxisMaxLimit(...args)

				export let getAxisMinLimit = (...args) => instance.getAxisMinLimit(...args)

				export let getAxisMode = (...args) => instance.getAxisMode(...args)

				export let getAxisMotorMaxForce = (...args) => instance.getAxisMotorMaxForce(...args)

				export let getAxisMotorTarget = (...args) => instance.getAxisMotorTarget(...args)

				export let getAxisMotorType = (...args) => instance.getAxisMotorType(...args)

				export let getCollisionsEnabled = (...args) => instance.getCollisionsEnabled(...args)

				export let getEnabled = (...args) => instance.getEnabled(...args)

				export let getOptions = (...args) => instance.getOptions(...args)

				export let getType = (...args) => instance.getType(...args)

				export let setAxisFriction = (...args) => instance.setAxisFriction(...args)

				export let setAxisMaxLimit = (...args) => instance.setAxisMaxLimit(...args)

				export let setAxisMinLimit = (...args) => instance.setAxisMinLimit(...args)

				export let setAxisMode = (...args) => instance.setAxisMode(...args)

				export let setAxisMotorMaxForce = (...args) => instance.setAxisMotorMaxForce(...args)

				export let setAxisMotorTarget = (...args) => instance.setAxisMotorTarget(...args)

				export let setAxisMotorType = (...args) => instance.setAxisMotorType(...args)

				export let setCollisionsEnabled = (...args) => instance.setCollisionsEnabled(...args)

				export let setEnabled = (...args) => instance.setEnabled(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PhysicsConstraint]`, ...args) : null

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

												if (type != undefined) instance.type = type?.instance || type
				type = instance.type
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (_pluginData != undefined) instance._pluginData = _pluginData?.instance || _pluginData
				_pluginData = instance._pluginData

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

			