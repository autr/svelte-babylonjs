
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					options  * required
					scene  * required 
					_pluginData  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let options = undefined // [physicshapeoptions] * required
				// the options for the physics shape. these are: * type: the type of the shape. this can be one of the following: sphere, box, capsule, cylinder, convex_hull, mesh, heightfield, container * parameters: the parameters of the shape. * plugindata: the plugin data of the shape. this is used if you already have a reference to the object on the plugin side.you need to specify either type or plugindata.
				

				export let scene = undefined // [scene] * required
				// the scene the shape belongs to.this code is useful for creating a new physics shape with the given type, options, and scene.it also checks that the physics engine and plugin version are correct.if not, it throws an error. this ensures that the shape is created with the correct parameters and is compatible with the physics engine.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PhysicsShape(options,scene) : {}

				// ================ ACCESSORS ================

				
				export let type = undefined // [shapetype] 
				// 
				

				// ================ PROPERTIES ================

				
				export let _pluginData = undefined // [any] 
				// v2 physics plugin private data for single shape
				

				// ================ METHODS ================

				
				export let addChild = (...args) => instance.addChild(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getBoundingBox = (...args) => instance.getBoundingBox(...args)

				export let getDensity = (...args) => instance.getDensity(...args)

				export let getFilterLayer = (...args) => instance.getFilterLayer(...args)

				export let getMaterial = (...args) => instance.getMaterial(...args)

				export let getNumChildren = (...args) => instance.getNumChildren(...args)

				export let removeChild = (...args) => instance.removeChild(...args)

				export let setDensity = (...args) => instance.setDensity(...args)

				export let setFilterLayer = (...args) => instance.setFilterLayer(...args)

				export let setMaterial = (...args) => instance.setMaterial(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PhysicsShape]`, ...args) : null

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

												if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene

				type = instance.type
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

			