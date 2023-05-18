
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					blendingSpeed  
					enableBlending  
					loopMode  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AnimationPropertiesOverride() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let blendingSpeed = undefined // [number] 
				// gets or sets the blending speed to use when enableblending is true
				

				export let enableBlending = undefined // [boolean] 
				// gets or sets a value indicating if animation blending must be used
				

				export let loopMode = undefined // [number] 
				// gets or sets the default loop mode to use
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AnimationPropertiesOverride]`, ...args) : null

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

												if (blendingSpeed != undefined) instance.blendingSpeed = blendingSpeed?.instance || blendingSpeed
				blendingSpeed = instance.blendingSpeed
				if (enableBlending != undefined) instance.enableBlending = enableBlending?.instance || enableBlending
				enableBlending = instance.enableBlending
				if (loopMode != undefined) instance.loopMode = loopMode?.instance || loopMode
				loopMode = instance.loopMode

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

			