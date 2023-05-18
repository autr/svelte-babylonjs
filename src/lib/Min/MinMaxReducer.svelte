
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					camera  * required 
					onAfterReductionPerformed  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let camera = undefined // [camera] * required
				// the camera to use for the post processes
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.MinMaxReducer(camera) : {}

				// ================ ACCESSORS ================

				
				export let activated = undefined // [boolean] 
				// 
				

				export let refreshRate = undefined // [number] 
				// 
				

				export let sourceTexture = undefined // [nullable] 
				// 
				

				// ================ PROPERTIES ================

				
				export let onAfterReductionPerformed = undefined // [observable] 
				// observable triggered when the computation has been performed
				

				// ================ METHODS ================

				
				export let activate = (...args) => instance.activate(...args)

				export let deactivate = (...args) => instance.deactivate(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let setSourceTexture = (...args) => instance.setSourceTexture(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:MinMaxReducer]`, ...args) : null

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

												if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera

				activated = instance.activated
				if (refreshRate != undefined) instance.refreshRate = refreshRate?.instance || refreshRate
				refreshRate = instance.refreshRate

				sourceTexture = instance.sourceTexture
				if (onAfterReductionPerformed != undefined) instance.onAfterReductionPerformed = onAfterReductionPerformed?.instance || onAfterReductionPerformed
				onAfterReductionPerformed = instance.onAfterReductionPerformed

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

			