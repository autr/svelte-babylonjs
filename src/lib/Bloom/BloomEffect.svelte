
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required
					_bloomScale  * required
					bloomWeight  * required
					bloomKernel  * required
					pipelineTextureType  
					blockCompilation   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// the scene the effect belongs to.
				

				export let _bloomScale = undefined // [number] * required
				// the ratio of the blur texture to the input texture that should be used to compute the bloom.
				

				export let bloomWeight = undefined // [number] * required
				// the the strength of bloom.
				

				export let bloomKernel = undefined // [number] * required
				// the size of the kernel to be used when applying the blur.
				

				export let pipelineTextureType = undefined // [number] 
				// the type of texture to be used when performing the post processing.
				

				export let blockCompilation = undefined // [boolean] 
				// if compilation of the shader should not be done in the constructor. the updateeffect method can be used to compile the shader at a later time. (default: false)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BloomEffect(scene,_bloomScale,bloomWeight,bloomKernel,pipelineTextureType,blockCompilation) : {}

				// ================ ACCESSORS ================

				
				export let isSupported = undefined // [boolean] 
				// 
				

				export let kernel = undefined // [number] 
				// 
				

				export let threshold = undefined // [number] 
				// 
				

				export let weight = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let disposeEffects = (...args) => instance.disposeEffects(...args)

				export let getPostProcesses = (...args) => instance.getPostProcesses(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BloomEffect]`, ...args) : null

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
				if (_bloomScale != undefined) instance._bloomScale = _bloomScale?.instance || _bloomScale
				_bloomScale = instance._bloomScale
				if (bloomWeight != undefined) instance.bloomWeight = bloomWeight?.instance || bloomWeight
				bloomWeight = instance.bloomWeight
				if (bloomKernel != undefined) instance.bloomKernel = bloomKernel?.instance || bloomKernel
				bloomKernel = instance.bloomKernel
				if (pipelineTextureType != undefined) instance.pipelineTextureType = pipelineTextureType?.instance || pipelineTextureType
				pipelineTextureType = instance.pipelineTextureType
				if (blockCompilation != undefined) instance.blockCompilation = blockCompilation?.instance || blockCompilation
				blockCompilation = instance.blockCompilation

				isSupported = instance.isSupported
				if (kernel != undefined) instance.kernel = kernel?.instance || kernel
				kernel = instance.kernel
				if (threshold != undefined) instance.threshold = threshold?.instance || threshold
				threshold = instance.threshold
				if (weight != undefined) instance.weight = weight?.instance || weight
				weight = instance.weight

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

			