
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					engine  * required
					options   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let engine = undefined // [engine] * required
				// defines the babylonjs engine you wish to record.
				

				export let options = undefined // [partial] 
				// defines options that can be used to customize the capture.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.VideoRecorder(engine,options) : {}

				// ================ ACCESSORS ================

				
				export let isRecording = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let startRecording = (...args) => instance.startRecording(...args)

				export let stopRecording = (...args) => instance.stopRecording(...args)

				export let IsSupported = (...args) => instance.IsSupported(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:VideoRecorder]`, ...args) : null

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
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options

				isRecording = instance.isRecording

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

			