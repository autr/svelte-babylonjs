
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					hostElement  
					audioContext  
					audioDestination   
					WarnedWebAudioUnsupported  
					canUseWebAudio  
					isMP3supported  
					isOGGsupported  
					masterGain  
					onAudioLockedObservable  
					onAudioUnlockedObservable  
					unlocked  
					useCustomUnlockedButton  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let hostElement = undefined // [nullable] 
				// defines the host element where to display the mute icon if necessary
				

				export let audioContext = undefined // [nullable] 
				// defines the audio context to be used by the audio engine
				

				export let audioDestination = undefined // [nullable] 
				// defines the audio destination node to be used by audio engine
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AudioEngine(hostElement,audioContext,audioDestination) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let WarnedWebAudioUnsupported = undefined // [boolean] 
				// defines if babylon should emit a warning if webaudio is not supported.
				

				export let canUseWebAudio = undefined // [boolean] 
				// gets whether the current host supports web audio and thus could create audiocontexts.
				

				export let isMP3supported = undefined // [boolean] 
				// gets whether or not mp3 are supported by your browser.
				

				export let isOGGsupported = undefined // [boolean] 
				// gets whether or not ogg are supported by your browser.
				

				export let masterGain = undefined // [gainnode] 
				// the master gain node defines the global audio volume of your audio engine.
				

				export let onAudioLockedObservable = undefined // [observable] 
				// event raised when audio has been locked on the browser.
				

				export let onAudioUnlockedObservable = undefined // [observable] 
				// event raised when audio has been unlocked on the browser.
				

				export let unlocked = undefined // [boolean] 
				// gets whether audio has been unlocked on the device.some browsers have strong restrictions about audio and won t autoplay unlessa user interaction has happened.
				

				export let useCustomUnlockedButton = undefined // [boolean] 
				// defines if the audio engine relies on a custom unlocked button.in this case, the embedded button will not be displayed.
				

				// ================ METHODS ================

				
				export let connectToAnalyser = (...args) => instance.connectToAnalyser(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getGlobalVolume = (...args) => instance.getGlobalVolume(...args)

				export let lock = (...args) => instance.lock(...args)

				export let setGlobalVolume = (...args) => instance.setGlobalVolume(...args)

				export let unlock = (...args) => instance.unlock(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AudioEngine]`, ...args) : null

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

												if (hostElement != undefined) instance.hostElement = hostElement?.instance || hostElement
				hostElement = instance.hostElement
				if (audioContext != undefined) instance.audioContext = audioContext?.instance || audioContext
				audioContext = instance.audioContext
				if (audioDestination != undefined) instance.audioDestination = audioDestination?.instance || audioDestination
				audioDestination = instance.audioDestination
				if (WarnedWebAudioUnsupported != undefined) instance.WarnedWebAudioUnsupported = WarnedWebAudioUnsupported?.instance || WarnedWebAudioUnsupported
				WarnedWebAudioUnsupported = instance.WarnedWebAudioUnsupported
				if (canUseWebAudio != undefined) instance.canUseWebAudio = canUseWebAudio?.instance || canUseWebAudio
				canUseWebAudio = instance.canUseWebAudio
				if (isMP3supported != undefined) instance.isMP3supported = isMP3supported?.instance || isMP3supported
				isMP3supported = instance.isMP3supported
				if (isOGGsupported != undefined) instance.isOGGsupported = isOGGsupported?.instance || isOGGsupported
				isOGGsupported = instance.isOGGsupported
				if (masterGain != undefined) instance.masterGain = masterGain?.instance || masterGain
				masterGain = instance.masterGain
				if (onAudioLockedObservable != undefined) instance.onAudioLockedObservable = onAudioLockedObservable?.instance || onAudioLockedObservable
				onAudioLockedObservable = instance.onAudioLockedObservable
				if (onAudioUnlockedObservable != undefined) instance.onAudioUnlockedObservable = onAudioUnlockedObservable?.instance || onAudioUnlockedObservable
				onAudioUnlockedObservable = instance.onAudioUnlockedObservable
				if (unlocked != undefined) instance.unlocked = unlocked?.instance || unlocked
				unlocked = instance.unlocked
				if (useCustomUnlockedButton != undefined) instance.useCustomUnlockedButton = useCustomUnlockedButton?.instance || useCustomUnlockedButton
				useCustomUnlockedButton = instance.useCustomUnlockedButton

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

			