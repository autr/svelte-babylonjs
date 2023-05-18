
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required
					depthTexture  * required
					blurLevel  
					pipelineTextureType  
					blockCompilation   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// the scene the effect belongs to.
				

				export let depthTexture = undefined // [nullable] * required
				// the depth texture of the scene to compute the circle of confusion.this must be set in order for this to function but may be set after initialization if needed.
				

				export let blurLevel = undefined // [depthoffieldeffectblurlevel] 
				// 
				

				export let pipelineTextureType = undefined // [number] 
				// the type of texture to be used when performing the post processing.
				

				export let blockCompilation = undefined // [boolean] 
				// if compilation of the shader should not be done in the constructor. the updateeffect method can be used to compile the shader at a later time. (default: false)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.DepthOfFieldEffect(scene,depthTexture,blurLevel,pipelineTextureType,blockCompilation) : {}

				// ================ ACCESSORS ================

				
				export let fStop = undefined // [number] 
				// 
				

				export let focalLength = undefined // [number] 
				// 
				

				export let focusDistance = undefined // [number] 
				// 
				

				export let isSupported = undefined // [boolean] 
				// 
				

				export let lensSize = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let disposeEffects = (...args) => instance.disposeEffects(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getPostProcesses = (...args) => instance.getPostProcesses(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:DepthOfFieldEffect]`, ...args) : null

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
				if (depthTexture != undefined) instance.depthTexture = depthTexture?.instance || depthTexture
				depthTexture = instance.depthTexture
				if (blurLevel != undefined) instance.blurLevel = blurLevel?.instance || blurLevel
				blurLevel = instance.blurLevel
				if (pipelineTextureType != undefined) instance.pipelineTextureType = pipelineTextureType?.instance || pipelineTextureType
				pipelineTextureType = instance.pipelineTextureType
				if (blockCompilation != undefined) instance.blockCompilation = blockCompilation?.instance || blockCompilation
				blockCompilation = instance.blockCompilation
				if (fStop != undefined) instance.fStop = fStop?.instance || fStop
				fStop = instance.fStop
				if (focalLength != undefined) instance.focalLength = focalLength?.instance || focalLength
				focalLength = instance.focalLength
				if (focusDistance != undefined) instance.focusDistance = focusDistance?.instance || focusDistance
				focusDistance = instance.focusDistance

				isSupported = instance.isSupported
				if (lensSize != undefined) instance.lensSize = lensSize?.instance || lensSize
				lensSize = instance.lensSize

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

			