
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					transformNode  * required
					type  * required
					_options  
					_scene   
					body  
					material  
					shape  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let transformNode = undefined // [transformnode] * required
				// the physics-enabled object used as the physics aggregate
				

				export let type = undefined // [number] * required
				// the type of the physics aggregate
				

				export let _options = undefined // [physicsaggregateparameters] 
				// 
				

				export let _scene = undefined // [scene] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PhysicsAggregate(transformNode,type,_options,_scene) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let body = undefined // [physicsbody] 
				// the body that is associated with this aggregate
				

				export let material = undefined // [physicsmaterial] 
				// the material that is associated with this aggregate
				

				export let shape = undefined // [physicsshape] 
				// the shape that is associated with this aggregate
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PhysicsAggregate]`, ...args) : null

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
				if (type != undefined) instance.type = type?.instance || type
				type = instance.type
				if (_options != undefined) instance._options = _options?.instance || _options
				_options = instance._options
				if (_scene != undefined) instance._scene = _scene?.instance || _scene
				_scene = instance._scene
				if (body != undefined) instance.body = body?.instance || body
				body = instance.body
				if (material != undefined) instance.material = material?.instance || material
				material = instance.material
				if (shape != undefined) instance.shape = shape?.instance || shape
				shape = instance.shape

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

			