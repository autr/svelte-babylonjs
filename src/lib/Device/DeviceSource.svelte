
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					deviceInputSystem  * required
					deviceType  * required
					deviceSlot   
					onInputChangedObservable (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let deviceInputSystem = undefined // [ideviceinputsystem] * required
				// reference to deviceinputsystem
				

				export let deviceType = undefined // [t] * required
				// type of device
				

				export let deviceSlot = undefined // [number] 
				// "slot" or index that device is referenced in
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.DeviceSource(deviceInputSystem,deviceType,deviceSlot) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let onInputChangedObservable = undefined // [observable] 
				// observable to handle device input changes per device
				

				// ================ METHODS ================

				
				export let getInput = (...args) => instance.getInput(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:DeviceSource]`, ...args) : null

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

												if (deviceInputSystem != undefined) instance.deviceInputSystem = deviceInputSystem?.instance || deviceInputSystem
				deviceInputSystem = instance.deviceInputSystem
				if (deviceType != undefined) instance.deviceType = deviceType?.instance || deviceType
				deviceType = instance.deviceType
				if (deviceSlot != undefined) instance.deviceSlot = deviceSlot?.instance || deviceSlot
				deviceSlot = instance.deviceSlot

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

			