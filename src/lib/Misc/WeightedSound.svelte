
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					loop  * required
					sounds  * required
					weights  * required 
					isPaused  
					isPlaying  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let loop = undefined // [boolean] * required
				// when true a sound will be selected and played when the current playing sound completes.
				

				export let sounds = undefined // [array] * required
				// array of sounds that will be selected from.
				

				export let weights = undefined // [array] * required
				// array of number values for selection weights; length must equal sounds, values will be normalized to 1
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WeightedSound(loop,sounds,weights) : {}

				// ================ ACCESSORS ================

				
				export let directionalConeInnerAngle = undefined // [number] 
				// 
				

				export let directionalConeOuterAngle = undefined // [number] 
				// 
				

				export let volume = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let isPaused = undefined // [boolean] 
				// a sound is currently paused.
				

				export let isPlaying = undefined // [boolean] 
				// a sound is currently playing.
				

				// ================ METHODS ================

				
				export let pause = (...args) => instance.pause(...args)

				export let play = (...args) => instance.play(...args)

				export let stop = (...args) => instance.stop(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WeightedSound]`, ...args) : null

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

												if (loop != undefined) instance.loop = loop?.instance || loop
				loop = instance.loop
				if (sounds != undefined) instance.sounds = sounds?.instance || sounds
				sounds = instance.sounds
				if (weights != undefined) instance.weights = weights?.instance || weights
				weights = instance.weights
				if (directionalConeInnerAngle != undefined) instance.directionalConeInnerAngle = directionalConeInnerAngle?.instance || directionalConeInnerAngle
				directionalConeInnerAngle = instance.directionalConeInnerAngle
				if (directionalConeOuterAngle != undefined) instance.directionalConeOuterAngle = directionalConeOuterAngle?.instance || directionalConeOuterAngle
				directionalConeOuterAngle = instance.directionalConeOuterAngle
				if (volume != undefined) instance.volume = volume?.instance || volume
				volume = instance.volume
				if (isPaused != undefined) instance.isPaused = isPaused?.instance || isPaused
				isPaused = instance.isPaused
				if (isPlaying != undefined) instance.isPlaying = isPlaying?.instance || isPlaying
				isPlaying = instance.isPlaying

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

			