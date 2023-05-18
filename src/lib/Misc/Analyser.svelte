
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene   
					BARGRAPHAMPLITUDE  
					DEBUGCANVASPOS  
					DEBUGCANVASSIZE  
					FFT_SIZE  
					SMOOTHING  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [nullable] 
				// defines hosting scene
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Analyser(scene) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let BARGRAPHAMPLITUDE = undefined // [number] 
				// gets or sets the bar graph amplitude
				

				export let DEBUGCANVASPOS = undefined // [reflection] 
				// gets or sets the position of the debug canvas
				

				export let DEBUGCANVASSIZE = undefined // [reflection] 
				// gets or sets the debug canvas size
				

				export let FFT_SIZE = undefined // [number] 
				// gets or sets the fft table size
				

				export let SMOOTHING = undefined // [number] 
				// gets or sets the smoothing
				

				// ================ METHODS ================

				
				export let connectAudioNodes = (...args) => instance.connectAudioNodes(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let drawDebugCanvas = (...args) => instance.drawDebugCanvas(...args)

				export let getByteFrequencyData = (...args) => instance.getByteFrequencyData(...args)

				export let getByteTimeDomainData = (...args) => instance.getByteTimeDomainData(...args)

				export let getFloatFrequencyData = (...args) => instance.getFloatFrequencyData(...args)

				export let getFrequencyBinCount = (...args) => instance.getFrequencyBinCount(...args)

				export let stopDebugCanvas = (...args) => instance.stopDebugCanvas(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Analyser]`, ...args) : null

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
				if (BARGRAPHAMPLITUDE != undefined) instance.BARGRAPHAMPLITUDE = BARGRAPHAMPLITUDE?.instance || BARGRAPHAMPLITUDE
				BARGRAPHAMPLITUDE = instance.BARGRAPHAMPLITUDE
				if (DEBUGCANVASPOS != undefined) instance.DEBUGCANVASPOS = DEBUGCANVASPOS?.instance || DEBUGCANVASPOS
				DEBUGCANVASPOS = instance.DEBUGCANVASPOS
				if (DEBUGCANVASSIZE != undefined) instance.DEBUGCANVASSIZE = DEBUGCANVASSIZE?.instance || DEBUGCANVASSIZE
				DEBUGCANVASSIZE = instance.DEBUGCANVASSIZE
				if (FFT_SIZE != undefined) instance.FFT_SIZE = FFT_SIZE?.instance || FFT_SIZE
				FFT_SIZE = instance.FFT_SIZE
				if (SMOOTHING != undefined) instance.SMOOTHING = SMOOTHING?.instance || SMOOTHING
				SMOOTHING = instance.SMOOTHING

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

			