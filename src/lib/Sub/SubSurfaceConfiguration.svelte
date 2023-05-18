
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required 
					enabled  
					metersPerUnit  
					name  
					needsImageProcessing  
					postProcess  
					ssDiffusionProfileColors  
					texturesRequired (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// the scene
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SubSurfaceConfiguration(scene) : {}

				// ================ ACCESSORS ================

				
				export let ssDiffusionD = undefined // [array] 
				// 
				

				export let ssDiffusionS = undefined // [array] 
				// 
				

				export let ssFilterRadii = undefined // [array] 
				// 
				

				// ================ PROPERTIES ================

				
				export let enabled = undefined // [boolean] 
				// is subsurface enabled
				

				export let metersPerUnit = undefined // [number] 
				// defines the ratio real world => scene units.used for subsurface scattering
				

				export let name = undefined // [string] 
				// name of the configuration
				

				export let needsImageProcessing = undefined // [boolean] 
				// does the output of this prepass need to go through imageprocessing
				

				export let postProcess = undefined // [subsurfacescatteringpostprocess] 
				// post process to attach for screen space subsurface scattering
				

				export let ssDiffusionProfileColors = undefined // [array] 
				// diffusion profile colors for subsurface scatteringyou can add one diffusion color using 
				

				export let texturesRequired = undefined // [array] 
				// textures that should be present in the mrt for this effect to work
				

				// ================ METHODS ================

				
				export let addDiffusionProfile = (...args) => instance.addDiffusionProfile(...args)

				export let clearAllDiffusionProfiles = (...args) => instance.clearAllDiffusionProfiles(...args)

				export let createPostProcess = (...args) => instance.createPostProcess(...args)

				export let dispose = (...args) => instance.dispose(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SubSurfaceConfiguration]`, ...args) : null

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

				ssDiffusionD = instance.ssDiffusionD

				ssDiffusionS = instance.ssDiffusionS

				ssFilterRadii = instance.ssFilterRadii
				if (enabled != undefined) instance.enabled = enabled?.instance || enabled
				enabled = instance.enabled
				if (metersPerUnit != undefined) instance.metersPerUnit = metersPerUnit?.instance || metersPerUnit
				metersPerUnit = instance.metersPerUnit
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (needsImageProcessing != undefined) instance.needsImageProcessing = needsImageProcessing?.instance || needsImageProcessing
				needsImageProcessing = instance.needsImageProcessing
				if (postProcess != undefined) instance.postProcess = postProcess?.instance || postProcess
				postProcess = instance.postProcess
				if (ssDiffusionProfileColors != undefined) instance.ssDiffusionProfileColors = ssDiffusionProfileColors?.instance || ssDiffusionProfileColors
				ssDiffusionProfileColors = instance.ssDiffusionProfileColors

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

			