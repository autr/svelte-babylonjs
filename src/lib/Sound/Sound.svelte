
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					urlOrArrayBuffer  * required
					scene  
					readyToPlayCallback  
					options   
					autoplay  
					distanceModel  
					isPaused  
					isPlaying  
					maxDistance  
					metadata  
					onEndedObservable  
					refDistance  
					rolloffFactor  
					soundTrackId  
					useCustomAttenuation  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// name of your sound
				

				export let urlOrArrayBuffer = undefined // [any] * required
				// url to the sound to load async or arraybuffer, it also works with mediastreams and audiobuffers
				

				export let scene = undefined // [nullable] 
				// defines the scene the sound belongs to
				

				export let readyToPlayCallback = undefined // [nullable] 
				// provide a callback function if you'd like to load your code once the sound is ready to be played
				

				export let options = undefined // [isoundoptions] 
				// objects to provide with the current available options: autoplay, loop, volume, spatialsound, maxdistance, rollofffactor, refdistance, distancemodel, panningmodel, streaming
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Sound(name,urlOrArrayBuffer,scene,readyToPlayCallback,options) : {}

				// ================ ACCESSORS ================

				
				export let currentTime = undefined // [number] 
				// 
				

				export let directionalConeInnerAngle = undefined // [number] 
				// 
				

				export let directionalConeOuterAngle = undefined // [number] 
				// 
				

				export let loop = undefined // [boolean] 
				// 
				

				export let spatialSound = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let autoplay = undefined // [boolean] 
				// does the sound autoplay once loaded.
				

				export let distanceModel = undefined // [string] 
				// define the distance attenuation model the sound will follow.
				

				export let isPaused = undefined // [boolean] 
				// is this sound currently paused.
				

				export let isPlaying = undefined // [boolean] 
				// is this sound currently played.
				

				export let maxDistance = undefined // [number] 
				// define the max distance the sound should be heard (intensity just became 0 at this point).
				

				export let metadata = undefined // [any] 
				// gets or sets an object used to store user defined information for the sound.
				

				export let onEndedObservable = undefined // [observable] 
				// observable event when the current playing sound finishes.
				

				export let refDistance = undefined // [number] 
				// define the reference distance the sound should be heard perfectly.
				

				export let rolloffFactor = undefined // [number] 
				// define the roll off factor of spatial sounds.
				

				export let soundTrackId = undefined // [number] 
				// the sound track id this sound belongs to.
				

				export let useCustomAttenuation = undefined // [boolean] 
				// does the sound use a custom attenuation curve to simulate the falloffhappening when the source gets further away from the camera.
				

				// ================ METHODS ================

				
				export let attachToMesh = (...args) => instance.attachToMesh(...args)

				export let clone = (...args) => instance.clone(...args)

				export let connectToSoundTrackAudioNode = (...args) => instance.connectToSoundTrackAudioNode(...args)

				export let detachFromMesh = (...args) => instance.detachFromMesh(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getAudioBuffer = (...args) => instance.getAudioBuffer(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getPlaybackRate = (...args) => instance.getPlaybackRate(...args)

				export let getSoundGain = (...args) => instance.getSoundGain(...args)

				export let getSoundSource = (...args) => instance.getSoundSource(...args)

				export let getVolume = (...args) => instance.getVolume(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let pause = (...args) => instance.pause(...args)

				export let play = (...args) => instance.play(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setAttenuationFunction = (...args) => instance.setAttenuationFunction(...args)

				export let setAudioBuffer = (...args) => instance.setAudioBuffer(...args)

				export let setDirectionalCone = (...args) => instance.setDirectionalCone(...args)

				export let setLocalDirectionToMesh = (...args) => instance.setLocalDirectionToMesh(...args)

				export let setPlaybackRate = (...args) => instance.setPlaybackRate(...args)

				export let setPosition = (...args) => instance.setPosition(...args)

				export let setVolume = (...args) => instance.setVolume(...args)

				export let stop = (...args) => instance.stop(...args)

				export let switchPanningModelToEqualPower = (...args) => instance.switchPanningModelToEqualPower(...args)

				export let switchPanningModelToHRTF = (...args) => instance.switchPanningModelToHRTF(...args)

				export let updateOptions = (...args) => instance.updateOptions(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Sound]`, ...args) : null

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

												if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (urlOrArrayBuffer != undefined) instance.urlOrArrayBuffer = urlOrArrayBuffer?.instance || urlOrArrayBuffer
				urlOrArrayBuffer = instance.urlOrArrayBuffer
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (readyToPlayCallback != undefined) instance.readyToPlayCallback = readyToPlayCallback?.instance || readyToPlayCallback
				readyToPlayCallback = instance.readyToPlayCallback
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options

				currentTime = instance.currentTime
				if (directionalConeInnerAngle != undefined) instance.directionalConeInnerAngle = directionalConeInnerAngle?.instance || directionalConeInnerAngle
				directionalConeInnerAngle = instance.directionalConeInnerAngle
				if (directionalConeOuterAngle != undefined) instance.directionalConeOuterAngle = directionalConeOuterAngle?.instance || directionalConeOuterAngle
				directionalConeOuterAngle = instance.directionalConeOuterAngle
				if (loop != undefined) instance.loop = loop?.instance || loop
				loop = instance.loop
				if (spatialSound != undefined) instance.spatialSound = spatialSound?.instance || spatialSound
				spatialSound = instance.spatialSound
				if (autoplay != undefined) instance.autoplay = autoplay?.instance || autoplay
				autoplay = instance.autoplay
				if (distanceModel != undefined) instance.distanceModel = distanceModel?.instance || distanceModel
				distanceModel = instance.distanceModel
				if (isPaused != undefined) instance.isPaused = isPaused?.instance || isPaused
				isPaused = instance.isPaused
				if (isPlaying != undefined) instance.isPlaying = isPlaying?.instance || isPlaying
				isPlaying = instance.isPlaying
				if (maxDistance != undefined) instance.maxDistance = maxDistance?.instance || maxDistance
				maxDistance = instance.maxDistance
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (onEndedObservable != undefined) instance.onEndedObservable = onEndedObservable?.instance || onEndedObservable
				onEndedObservable = instance.onEndedObservable
				if (refDistance != undefined) instance.refDistance = refDistance?.instance || refDistance
				refDistance = instance.refDistance
				if (rolloffFactor != undefined) instance.rolloffFactor = rolloffFactor?.instance || rolloffFactor
				rolloffFactor = instance.rolloffFactor
				if (soundTrackId != undefined) instance.soundTrackId = soundTrackId?.instance || soundTrackId
				soundTrackId = instance.soundTrackId
				if (useCustomAttenuation != undefined) instance.useCustomAttenuation = useCustomAttenuation?.instance || useCustomAttenuation
				useCustomAttenuation = instance.useCustomAttenuation

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

			