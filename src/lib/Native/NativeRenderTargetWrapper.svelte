
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					isMulti  * required
					isCube  * required
					size  * required
					engine  * required 
					_engine (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let isMulti = undefined // [boolean] * required
				// 
				

				export let isCube = undefined // [boolean] * required
				// 
				

				export let size = undefined // [texturesize] * required
				// 
				

				export let engine = undefined // [nativeengine] * required
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.NativeRenderTargetWrapper(isMulti,isCube,size,engine) : {}

				// ================ ACCESSORS ================

				
				export let _framebuffer = undefined // [nullable] 
				// 
				

				export let _framebufferDepthStencil = undefined // [nullable] 
				// 
				

				export let depthStencilTexture = undefined // [nullable] 
				// 
				

				export let depthStencilTextureWithStencil = undefined // [boolean] 
				// 
				

				export let height = undefined // [number] 
				// 
				

				export let is2DArray = undefined // [boolean] 
				// 
				

				export let layers = undefined // [number] 
				// 
				

				export let samples = undefined // [number] 
				// 
				

				export let texture = undefined // [nullable] 
				// 
				

				export let textures = undefined // [nullable] 
				// 
				

				export let width = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let _engine = undefined // [nativeengine] 
				// 
				

				// ================ METHODS ================

				
				export let createDepthStencilTexture = (...args) => instance.createDepthStencilTexture(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let releaseTextures = (...args) => instance.releaseTextures(...args)

				export let setSamples = (...args) => instance.setSamples(...args)

				export let setTexture = (...args) => instance.setTexture(...args)

				export let setTextures = (...args) => instance.setTextures(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:NativeRenderTargetWrapper]`, ...args) : null

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

												if (isMulti != undefined) instance.isMulti = isMulti?.instance || isMulti
				isMulti = instance.isMulti
				if (isCube != undefined) instance.isCube = isCube?.instance || isCube
				isCube = instance.isCube
				if (size != undefined) instance.size = size?.instance || size
				size = instance.size
				if (engine != undefined) instance.engine = engine?.instance || engine
				engine = instance.engine
				if (_framebuffer != undefined) instance._framebuffer = _framebuffer?.instance || _framebuffer
				_framebuffer = instance._framebuffer
				if (_framebufferDepthStencil != undefined) instance._framebufferDepthStencil = _framebufferDepthStencil?.instance || _framebufferDepthStencil
				_framebufferDepthStencil = instance._framebufferDepthStencil

				depthStencilTexture = instance.depthStencilTexture

				depthStencilTextureWithStencil = instance.depthStencilTextureWithStencil

				height = instance.height

				is2DArray = instance.is2DArray

				layers = instance.layers

				samples = instance.samples

				texture = instance.texture

				textures = instance.textures

				width = instance.width

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

			