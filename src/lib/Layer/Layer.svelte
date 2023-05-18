
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					imgUrl  * required
					scene  * required
					isBackground  
					color   
					alphaBlendingMode  
					alphaTest  
					isEnabled  
					layerMask  
					offset  
					onAfterRenderObservable  
					onBeforeRenderObservable  
					onDisposeObservable  
					renderOnlyInRenderTargetTextures  
					renderTargetTextures  
					scale  
					texture  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// define the name of the layer in the scene
				

				export let imgUrl = undefined // [nullable] * required
				// define the url of the texture to display in the layer
				

				export let scene = undefined // [nullable] * required
				// define the scene the layer belongs to
				

				export let isBackground = undefined // [boolean] 
				// defines whether the layer is displayed in front or behind the scene
				

				export let color = undefined // [color4] 
				// defines a color for the layer
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Layer(name,imgUrl,scene,isBackground,color) : {}

				// ================ ACCESSORS ================

				
				export let applyPostProcess = undefined // [boolean] 
				// 
				

				export let onAfterRender = undefined // [] 
				// 
				

				export let onBeforeRender = undefined // [] 
				// 
				

				export let onDispose = undefined // [] 
				// 
				

				// ================ PROPERTIES ================

				
				export let alphaBlendingMode = undefined // [number] 
				// define the alpha blending mode used in the layer in case the texture or color has an alpha.
				

				export let alphaTest = undefined // [boolean] 
				// define if the layer should alpha test or alpha blend with the rest of the scene.alpha test will not mix with the background color in case of transparency.it will either use the texture color or the background depending on the alpha value of the current pixel.
				

				export let isEnabled = undefined // [boolean] 
				// define if the layer is enabled (ie. should be displayed). default: true
				

				export let layerMask = undefined // [number] 
				// define a mask to restrict the layer to only some of the scene cameras.
				

				export let offset = undefined // [vector2] 
				// define an offset for the layer in order to shift the texture.
				

				export let onAfterRenderObservable = undefined // [observable] 
				// an event triggered after rendering the scene
				

				export let onBeforeRenderObservable = undefined // [observable] 
				// an event triggered before rendering the scene
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the layer is disposed.
				

				export let renderOnlyInRenderTargetTextures = undefined // [boolean] 
				// define if the layer is only used in rendertarget or if it alsorenders in the main frame buffer of the canvas.
				

				export let renderTargetTextures = undefined // [array] 
				// define the list of render target the layer is visible into.
				

				export let scale = undefined // [vector2] 
				// define the scale of the layer in order to zoom in out of the texture.
				

				export let texture = undefined // [nullable] 
				// define the texture the layer should display.
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let render = (...args) => instance.render(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Layer]`, ...args) : null

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

												if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (imgUrl != undefined) instance.imgUrl = imgUrl?.instance || imgUrl
				imgUrl = instance.imgUrl
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (isBackground != undefined) instance.isBackground = isBackground?.instance || isBackground
				isBackground = instance.isBackground
				if (color != undefined) instance.color = color?.instance || color
				color = instance.color
				if (applyPostProcess != undefined) instance.applyPostProcess = applyPostProcess?.instance || applyPostProcess
				applyPostProcess = instance.applyPostProcess
				if (onAfterRender != undefined) instance.onAfterRender = onAfterRender?.instance || onAfterRender
				onAfterRender = instance.onAfterRender
				if (onBeforeRender != undefined) instance.onBeforeRender = onBeforeRender?.instance || onBeforeRender
				onBeforeRender = instance.onBeforeRender
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose
				if (alphaBlendingMode != undefined) instance.alphaBlendingMode = alphaBlendingMode?.instance || alphaBlendingMode
				alphaBlendingMode = instance.alphaBlendingMode
				if (alphaTest != undefined) instance.alphaTest = alphaTest?.instance || alphaTest
				alphaTest = instance.alphaTest
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled
				if (layerMask != undefined) instance.layerMask = layerMask?.instance || layerMask
				layerMask = instance.layerMask
				if (offset != undefined) instance.offset = offset?.instance || offset
				offset = instance.offset
				if (onAfterRenderObservable != undefined) instance.onAfterRenderObservable = onAfterRenderObservable?.instance || onAfterRenderObservable
				onAfterRenderObservable = instance.onAfterRenderObservable
				if (onBeforeRenderObservable != undefined) instance.onBeforeRenderObservable = onBeforeRenderObservable?.instance || onBeforeRenderObservable
				onBeforeRenderObservable = instance.onBeforeRenderObservable
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (renderOnlyInRenderTargetTextures != undefined) instance.renderOnlyInRenderTargetTextures = renderOnlyInRenderTargetTextures?.instance || renderOnlyInRenderTargetTextures
				renderOnlyInRenderTargetTextures = instance.renderOnlyInRenderTargetTextures
				if (renderTargetTextures != undefined) instance.renderTargetTextures = renderTargetTextures?.instance || renderTargetTextures
				renderTargetTextures = instance.renderTargetTextures
				if (scale != undefined) instance.scale = scale?.instance || scale
				scale = instance.scale
				if (texture != undefined) instance.texture = texture?.instance || texture
				texture = instance.texture

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

			