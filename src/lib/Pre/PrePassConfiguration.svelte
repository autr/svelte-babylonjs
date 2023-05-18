
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					currentViewProjection  
					previousBones  
					previousViewProjection  
					previousWorldMatrices  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PrePassConfiguration() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let currentViewProjection = undefined // [matrix] 
				// current view projection matrixused for computing velocity
				

				export let previousBones = undefined // [reflection] 
				// previous bones of meshes carrying this materialused for computing velocity
				

				export let previousViewProjection = undefined // [matrix] 
				// previous view project matrixused for computing velocity
				

				export let previousWorldMatrices = undefined // [reflection] 
				// previous world matrices of meshes carrying this materialused for computing velocity
				

				// ================ METHODS ================

				
				export let bindForSubMesh = (...args) => instance.bindForSubMesh(...args)

				export let AddSamplers = (...args) => instance.AddSamplers(...args)

				export let AddUniforms = (...args) => instance.AddUniforms(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PrePassConfiguration]`, ...args) : null

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

												if (currentViewProjection != undefined) instance.currentViewProjection = currentViewProjection?.instance || currentViewProjection
				currentViewProjection = instance.currentViewProjection
				if (previousBones != undefined) instance.previousBones = previousBones?.instance || previousBones
				previousBones = instance.previousBones
				if (previousViewProjection != undefined) instance.previousViewProjection = previousViewProjection?.instance || previousViewProjection
				previousViewProjection = instance.previousViewProjection
				if (previousWorldMatrices != undefined) instance.previousWorldMatrices = previousWorldMatrices?.instance || previousWorldMatrices
				previousWorldMatrices = instance.previousWorldMatrices

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

			