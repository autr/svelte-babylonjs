
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					enableHeadsetImpostor  
					headsetImpostorParams  
					physicsProperties  
					xrInput  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.IWebXRControllerPhysicsOptions() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let enableHeadsetImpostor = undefined // [boolean] 
				// should the headset get its own impostor
				

				export let headsetImpostorParams = undefined // [reflection] 
				// optional parameters for the headset impostor
				

				export let physicsProperties = undefined // [reflection] 
				// the physics properties of the future impostors
				

				export let xrInput = undefined // [webxrinput] 
				// the xr input to use with this pointer selection
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:IWebXRControllerPhysicsOptions]`, ...args) : null

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

												if (enableHeadsetImpostor != undefined) instance.enableHeadsetImpostor = enableHeadsetImpostor?.instance || enableHeadsetImpostor
				enableHeadsetImpostor = instance.enableHeadsetImpostor
				if (headsetImpostorParams != undefined) instance.headsetImpostorParams = headsetImpostorParams?.instance || headsetImpostorParams
				headsetImpostorParams = instance.headsetImpostorParams
				if (physicsProperties != undefined) instance.physicsProperties = physicsProperties?.instance || physicsProperties
				physicsProperties = instance.physicsProperties
				if (xrInput != undefined) instance.xrInput = xrInput?.instance || xrInput
				xrInput = instance.xrInput

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

			