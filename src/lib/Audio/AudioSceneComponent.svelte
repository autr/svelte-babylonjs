
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene   
					audioListenerPositionProvider  
					audioListenerRotationProvider  
					audioPositioningRefreshRate  
					name (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [nullable] 
				// defines the scene to register the component in
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AudioSceneComponent(scene) : {}

				// ================ ACCESSORS ================

				
				export let audioEnabled = undefined // [boolean] 
				// 
				

				export let headphone = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let audioListenerPositionProvider = undefined // [nullable] 
				// gets or sets a custom listener position for all sounds in the sceneby default, this is the position of the first active camera
				

				export let audioListenerRotationProvider = undefined // [nullable] 
				// gets or sets a custom listener rotation for all sounds in the sceneby default, this is the rotation of the first active camera
				

				export let audioPositioningRefreshRate = undefined // [number] 
				// gets or sets a refresh rate when using 3d audio positioning
				

				export let name = undefined // [literal] 
				// the component name helpful to identify the component in the list of scene components.
				

				// ================ METHODS ================

				
				export let addFromContainer = (...args) => instance.addFromContainer(...args)

				export let disableAudio = (...args) => instance.disableAudio(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let enableAudio = (...args) => instance.enableAudio(...args)

				export let rebuild = (...args) => instance.rebuild(...args)

				export let register = (...args) => instance.register(...args)

				export let removeFromContainer = (...args) => instance.removeFromContainer(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let switchAudioModeForHeadphones = (...args) => instance.switchAudioModeForHeadphones(...args)

				export let switchAudioModeForNormalSpeakers = (...args) => instance.switchAudioModeForNormalSpeakers(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AudioSceneComponent]`, ...args) : null

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

												if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene

				audioEnabled = instance.audioEnabled

				headphone = instance.headphone
				if (audioListenerPositionProvider != undefined) instance.audioListenerPositionProvider = audioListenerPositionProvider?.instance || audioListenerPositionProvider
				audioListenerPositionProvider = instance.audioListenerPositionProvider
				if (audioListenerRotationProvider != undefined) instance.audioListenerRotationProvider = audioListenerRotationProvider?.instance || audioListenerRotationProvider
				audioListenerRotationProvider = instance.audioListenerRotationProvider
				if (audioPositioningRefreshRate != undefined) instance.audioPositioningRefreshRate = audioPositioningRefreshRate?.instance || audioPositioningRefreshRate
				audioPositioningRefreshRate = instance.audioPositioningRefreshRate

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

			