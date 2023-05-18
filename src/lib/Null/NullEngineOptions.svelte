
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					deterministicLockstep  
					lockstepMaxSteps  
					renderHeight  
					renderWidth  
					textureSize  
					useHighPrecisionMatrix  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.NullEngineOptions() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let deterministicLockstep = undefined // [boolean] 
				// if delta time between frames should be constant
				

				export let lockstepMaxSteps = undefined // [number] 
				// maximum about of steps between frames (default: 4)
				

				export let renderHeight = undefined // [number] 
				// render height (default: 256)
				

				export let renderWidth = undefined // [number] 
				// render width (default: 512)
				

				export let textureSize = undefined // [number] 
				// texture size (default: 512)
				

				export let useHighPrecisionMatrix = undefined // [boolean] 
				// make the matrix computations to be performed in 64 bits instead of 32 bits. false by default
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:NullEngineOptions]`, ...args) : null

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

												if (deterministicLockstep != undefined) instance.deterministicLockstep = deterministicLockstep?.instance || deterministicLockstep
				deterministicLockstep = instance.deterministicLockstep
				if (lockstepMaxSteps != undefined) instance.lockstepMaxSteps = lockstepMaxSteps?.instance || lockstepMaxSteps
				lockstepMaxSteps = instance.lockstepMaxSteps
				if (renderHeight != undefined) instance.renderHeight = renderHeight?.instance || renderHeight
				renderHeight = instance.renderHeight
				if (renderWidth != undefined) instance.renderWidth = renderWidth?.instance || renderWidth
				renderWidth = instance.renderWidth
				if (textureSize != undefined) instance.textureSize = textureSize?.instance || textureSize
				textureSize = instance.textureSize
				if (useHighPrecisionMatrix != undefined) instance.useHighPrecisionMatrix = useHighPrecisionMatrix?.instance || useHighPrecisionMatrix
				useHighPrecisionMatrix = instance.useHighPrecisionMatrix

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

			