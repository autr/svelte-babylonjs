
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					friction  * required
					restitution  * required
					scene  * required 
					_pluginData  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let friction = undefined // [number] * required
				// the friction of the material.
				

				export let restitution = undefined // [number] * required
				// the restitution of the material.
				

				export let scene = undefined // [scene] * required
				// the scene to which the physics engine belongs.this code is useful for initializing the physics material with thegiven friction, restitution and scene. it also checks if thephysics engine and plugin are available and if the plugin versionis correct. if all conditions are met, it initializes the materialwith the physics plugin.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PhysicsMaterial(friction,restitution,scene) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let _pluginData = undefined // [any] 
				// v2 physics plugin private data for a physics material
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getFriction = (...args) => instance.getFriction(...args)

				export let getRestitution = (...args) => instance.getRestitution(...args)

				export let setFriction = (...args) => instance.setFriction(...args)

				export let setRestitution = (...args) => instance.setRestitution(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PhysicsMaterial]`, ...args) : null

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

												if (friction != undefined) instance.friction = friction?.instance || friction
				friction = instance.friction
				if (restitution != undefined) instance.restitution = restitution?.instance || restitution
				restitution = instance.restitution
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

			