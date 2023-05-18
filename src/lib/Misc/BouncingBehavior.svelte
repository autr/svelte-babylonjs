
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					lowerRadiusTransitionRange  
					transitionDuration  
					upperRadiusTransitionRange  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BouncingBehavior() : {}

				// ================ ACCESSORS ================

				
				export let autoTransitionRange = undefined // [boolean] 
				// 
				

				export let name = undefined // [string] 
				// gets or sets behavior's name
				

				// ================ PROPERTIES ================

				
				export let lowerRadiusTransitionRange = undefined // [number] 
				// length of the distance animated by the transition when lower radius is reached
				

				export let transitionDuration = undefined // [number] 
				// the duration of the animation, in milliseconds
				

				export let upperRadiusTransitionRange = undefined // [number] 
				// length of the distance animated by the transition when upper radius is reached
				

				// ================ METHODS ================

				
				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let init = (...args) => instance.init(...args)

				export let stopAllAnimations = (...args) => instance.stopAllAnimations(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BouncingBehavior]`, ...args) : null

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

												if (autoTransitionRange != undefined) instance.autoTransitionRange = autoTransitionRange?.instance || autoTransitionRange
				autoTransitionRange = instance.autoTransitionRange

				name = instance.name
				if (lowerRadiusTransitionRange != undefined) instance.lowerRadiusTransitionRange = lowerRadiusTransitionRange?.instance || lowerRadiusTransitionRange
				lowerRadiusTransitionRange = instance.lowerRadiusTransitionRange
				if (transitionDuration != undefined) instance.transitionDuration = transitionDuration?.instance || transitionDuration
				transitionDuration = instance.transitionDuration
				if (upperRadiusTransitionRange != undefined) instance.upperRadiusTransitionRange = upperRadiusTransitionRange?.instance || upperRadiusTransitionRange
				upperRadiusTransitionRange = instance.upperRadiusTransitionRange

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

			