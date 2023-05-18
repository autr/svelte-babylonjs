
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					engine  * required 
					onDeviceConnectedObservable (readonly) 
					onDeviceDisconnectedObservable (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let engine = undefined // [engine] * required
				// used to get canvas (if applicable)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.DeviceSourceManager(engine) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let onDeviceConnectedObservable = undefined // [observable] 
				// observable to be triggered when after a device is connected, any new observers added will be triggered against already connected devices
				

				export let onDeviceDisconnectedObservable = undefined // [observable] 
				// observable to be triggered when after a device is disconnected
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getDeviceSource = (...args) => instance.getDeviceSource(...args)

				export let getDeviceSources = (...args) => instance.getDeviceSources(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:DeviceSourceManager]`, ...args) : null

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

												if (engine != undefined) instance.engine = engine?.instance || engine
				engine = instance.engine

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

			