
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_scene   
					onGamepadConnectedObservable  
					onGamepadDisconnectedObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _scene = undefined // [scene] 
				// babylonjs scene
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.GamepadManager(_scene) : {}

				// ================ ACCESSORS ================

				
				export let gamepads = undefined // [array] 
				// 
				

				// ================ PROPERTIES ================

				
				export let onGamepadConnectedObservable = undefined // [observable] 
				// observable to be triggered when the gamepad controller has been connected
				

				export let onGamepadDisconnectedObservable = undefined // [observable] 
				// observable to be triggered when the gamepad controller has been disconnected
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getGamepadByType = (...args) => instance.getGamepadByType(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:GamepadManager]`, ...args) : null

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

				gamepads = instance.gamepads
				if (onGamepadConnectedObservable != undefined) instance.onGamepadConnectedObservable = onGamepadConnectedObservable?.instance || onGamepadConnectedObservable
				onGamepadConnectedObservable = instance.onGamepadConnectedObservable
				if (onGamepadDisconnectedObservable != undefined) instance.onGamepadDisconnectedObservable = onGamepadDisconnectedObservable?.instance || onGamepadDisconnectedObservable
				onGamepadDisconnectedObservable = instance.onGamepadDisconnectedObservable

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

			