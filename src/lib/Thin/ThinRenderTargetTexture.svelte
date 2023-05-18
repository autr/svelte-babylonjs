
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					engine  * required
					size  * required
					options  * required 
					anisotropicFilteringLevel  
					delayLoadState  
					wrapR  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let engine = undefined // [thinengine] * required
				// define the internaltexture to wrap
				

				export let size = undefined // [texturesize] * required
				// define the size of the rtt to create
				

				export let options = undefined // [rendertargetcreationoptions] * required
				// define rendertarget options
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ThinRenderTargetTexture(engine,size,options) : {}

				// ================ ACCESSORS ================

				
				export let coordinatesMode = undefined // [number] 
				// 
				

				export let is2DArray = undefined // [boolean] 
				// 
				

				export let is3D = undefined // [boolean] 
				// 
				

				export let isCube = undefined // [boolean] 
				// 
				

				export let renderTarget = undefined // [nullable] 
				// entry point to access the wrapper on a texture.
				

				export let samplingMode = undefined // [number] 
				// 
				

				export let wrapU = undefined // [number] 
				// 
				

				export let wrapV = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let anisotropicFilteringLevel = undefined // [number] 
				// with compliant hardware and browser (supporting anisotropic filtering)this defines the level of anisotropic filtering in the texture.the higher the better but the slower. this defaults to 4 as it seems to be the best tradeoff.
				

				export let delayLoadState = undefined // [number] 
				// define the current state of the loading sequence when in delayed load mode.
				

				export let wrapR = undefined // [number] 
				// | value | type               | description || ----- | ------------------ | ----------- || 0     | clamp_addressmode  |             || 1     | wrap_addressmode   |             || 2     | mirror_addressmode |             |
				

				// ================ METHODS ================

				
				export let delayLoad = (...args) => instance.delayLoad(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getBaseSize = (...args) => instance.getBaseSize(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getInternalTexture = (...args) => instance.getInternalTexture(...args)

				export let getSize = (...args) => instance.getSize(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let releaseInternalTexture = (...args) => instance.releaseInternalTexture(...args)

				export let resize = (...args) => instance.resize(...args)

				export let updateSamplingMode = (...args) => instance.updateSamplingMode(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ThinRenderTargetTexture]`, ...args) : null

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

												if (engine != undefined) instance.engine = engine?.instance || engine
				engine = instance.engine
				if (size != undefined) instance.size = size?.instance || size
				size = instance.size
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options

				coordinatesMode = instance.coordinatesMode
				if (is2DArray != undefined) instance.is2DArray = is2DArray?.instance || is2DArray
				is2DArray = instance.is2DArray
				if (is3D != undefined) instance.is3D = is3D?.instance || is3D
				is3D = instance.is3D
				if (isCube != undefined) instance.isCube = isCube?.instance || isCube
				isCube = instance.isCube

				renderTarget = instance.renderTarget

				samplingMode = instance.samplingMode
				if (wrapU != undefined) instance.wrapU = wrapU?.instance || wrapU
				wrapU = instance.wrapU
				if (wrapV != undefined) instance.wrapV = wrapV?.instance || wrapV
				wrapV = instance.wrapV
				if (anisotropicFilteringLevel != undefined) instance.anisotropicFilteringLevel = anisotropicFilteringLevel?.instance || anisotropicFilteringLevel
				anisotropicFilteringLevel = instance.anisotropicFilteringLevel
				if (delayLoadState != undefined) instance.delayLoadState = delayLoadState?.instance || delayLoadState
				delayLoadState = instance.delayLoadState
				if (wrapR != undefined) instance.wrapR = wrapR?.instance || wrapR
				wrapR = instance.wrapR

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

			