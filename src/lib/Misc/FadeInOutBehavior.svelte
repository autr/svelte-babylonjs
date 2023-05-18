
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					fadeInDelay  
					fadeInTime  
					fadeOutDelay  
					fadeOutTime  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FadeInOutBehavior() : {}

				// ================ ACCESSORS ================

				
				export let delay = undefined // [number] 
				// 
				

				export let name = undefined // [string] 
				// gets or sets behavior's name
				

				// ================ PROPERTIES ================

				
				export let fadeInDelay = undefined // [number] 
				// time in milliseconds to delay before fading in (default: 0)
				

				export let fadeInTime = undefined // [number] 
				// time in milliseconds for the mesh to fade in (default: 300)
				

				export let fadeOutDelay = undefined // [number] 
				// time in milliseconds to delay before fading out (default: 0)
				

				export let fadeOutTime = undefined // [number] 
				// time in milliseconds for the mesh to fade out (default: 300)
				

				// ================ METHODS ================

				
				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let fadeIn = (...args) => instance.fadeIn(...args)

				export let fadeOut = (...args) => instance.fadeOut(...args)

				export let init = (...args) => instance.init(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FadeInOutBehavior]`, ...args) : null

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

												if (delay != undefined) instance.delay = delay?.instance || delay
				delay = instance.delay

				name = instance.name
				if (fadeInDelay != undefined) instance.fadeInDelay = fadeInDelay?.instance || fadeInDelay
				fadeInDelay = instance.fadeInDelay
				if (fadeInTime != undefined) instance.fadeInTime = fadeInTime?.instance || fadeInTime
				fadeInTime = instance.fadeInTime
				if (fadeOutDelay != undefined) instance.fadeOutDelay = fadeOutDelay?.instance || fadeOutDelay
				fadeOutDelay = instance.fadeOutDelay
				if (fadeOutTime != undefined) instance.fadeOutTime = fadeOutTime?.instance || fadeOutTime
				fadeOutTime = instance.fadeOutTime

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

			