
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  
					options   
					id  
					soundCollection  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [nullable] 
				// define the scene the sound track belongs to
				

				export let options = undefined // [isoundtrackoptions] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SoundTrack(scene,options) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let id = undefined // [number] 
				// the unique identifier of the sound track in the scene.
				

				export let soundCollection = undefined // [array] 
				// the list of sounds included in the sound track.
				

				// ================ METHODS ================

				
				export let addSound = (...args) => instance.addSound(...args)

				export let connectToAnalyser = (...args) => instance.connectToAnalyser(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let removeSound = (...args) => instance.removeSound(...args)

				export let setVolume = (...args) => instance.setVolume(...args)

				export let switchPanningModelToEqualPower = (...args) => instance.switchPanningModelToEqualPower(...args)

				export let switchPanningModelToHRTF = (...args) => instance.switchPanningModelToHRTF(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SoundTrack]`, ...args) : null

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
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (soundCollection != undefined) instance.soundCollection = soundCollection?.instance || soundCollection
				soundCollection = instance.soundCollection

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

			