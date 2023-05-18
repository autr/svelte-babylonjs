
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					scene  
					options   
					customEmissiveColorSelector  
					customEmissiveTextureSelector  
					disableBoundingBoxesFromEffectLayer  
					isEnabled  
					neutralColor  
					onAfterComposeObservable  
					onAfterRenderMeshToEffect  
					onBeforeComposeObservable  
					onBeforeRenderMainTextureObservable  
					onBeforeRenderMeshToEffect  
					onDisposeObservable  
					onSizeChangedObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// the name of the layer
				

				export let scene = undefined // [scene] 
				// the scene to use the layer in
				

				export let options = undefined // [partial] 
				// sets of none mandatory options to use with the layer (see iglowlayeroptions for more information)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.GlowLayer(name,scene,options) : {}

				// ================ ACCESSORS ================

				
				export let blurKernelSize = undefined // [number] 
				// 
				

				export let camera = undefined // [nullable] 
				// 
				

				export let intensity = undefined // [number] 
				// 
				

				export let mainTexture = undefined // [rendertargettexture] 
				// 
				

				export let renderingGroupId = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let customEmissiveColorSelector = undefined // [reflection] 
				// 
				

				export let customEmissiveTextureSelector = undefined // [reflection] 
				// 
				

				export let disableBoundingBoxesFromEffectLayer = undefined // [boolean] 
				// specifies if the bounding boxes should be rendered normally or if they should undergo the effect of the layer
				

				export let isEnabled = undefined // [boolean] 
				// specifies whether the highlight layer is enabled or not.
				

				export let neutralColor = undefined // [color4] 
				// the clear color of the texture used to generate the glow map.
				

				export let onAfterComposeObservable = undefined // [observable] 
				// an event triggered when the generated texture has been merged in the scene.
				

				export let onAfterRenderMeshToEffect = undefined // [observable] 
				// an event triggered after the mesh has been rendered into the effect render target.
				

				export let onBeforeComposeObservable = undefined // [observable] 
				// an event triggered when the generated texture is being merged in the scene.
				

				export let onBeforeRenderMainTextureObservable = undefined // [observable] 
				// an event triggered when the effect layer is about rendering the main texture with the glowy parts.
				

				export let onBeforeRenderMeshToEffect = undefined // [observable] 
				// an event triggered when the mesh is rendered into the effect render target.
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the effect layer has been disposed.
				

				export let onSizeChangedObservable = undefined // [observable] 
				// an event triggered when the effect layer changes its size.
				

				// ================ METHODS ================

				
				export let addExcludedMesh = (...args) => instance.addExcludedMesh(...args)

				export let addIncludedOnlyMesh = (...args) => instance.addIncludedOnlyMesh(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getEffectName = (...args) => instance.getEffectName(...args)

				export let hasMesh = (...args) => instance.hasMesh(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let needStencil = (...args) => instance.needStencil(...args)

				export let referenceMeshToUseItsOwnMaterial = (...args) => instance.referenceMeshToUseItsOwnMaterial(...args)

				export let removeExcludedMesh = (...args) => instance.removeExcludedMesh(...args)

				export let removeIncludedOnlyMesh = (...args) => instance.removeIncludedOnlyMesh(...args)

				export let render = (...args) => instance.render(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setMaterialForRendering = (...args) => instance.setMaterialForRendering(...args)

				export let shouldRender = (...args) => instance.shouldRender(...args)

				export let unReferenceMeshFromUsingItsOwnMaterial = (...args) => instance.unReferenceMeshFromUsingItsOwnMaterial(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:GlowLayer]`, ...args) : null

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
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (blurKernelSize != undefined) instance.blurKernelSize = blurKernelSize?.instance || blurKernelSize
				blurKernelSize = instance.blurKernelSize

				camera = instance.camera
				if (intensity != undefined) instance.intensity = intensity?.instance || intensity
				intensity = instance.intensity

				mainTexture = instance.mainTexture
				if (renderingGroupId != undefined) instance.renderingGroupId = renderingGroupId?.instance || renderingGroupId
				renderingGroupId = instance.renderingGroupId
				if (customEmissiveColorSelector != undefined) instance.customEmissiveColorSelector = customEmissiveColorSelector?.instance || customEmissiveColorSelector
				customEmissiveColorSelector = instance.customEmissiveColorSelector
				if (customEmissiveTextureSelector != undefined) instance.customEmissiveTextureSelector = customEmissiveTextureSelector?.instance || customEmissiveTextureSelector
				customEmissiveTextureSelector = instance.customEmissiveTextureSelector
				if (disableBoundingBoxesFromEffectLayer != undefined) instance.disableBoundingBoxesFromEffectLayer = disableBoundingBoxesFromEffectLayer?.instance || disableBoundingBoxesFromEffectLayer
				disableBoundingBoxesFromEffectLayer = instance.disableBoundingBoxesFromEffectLayer
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled
				if (neutralColor != undefined) instance.neutralColor = neutralColor?.instance || neutralColor
				neutralColor = instance.neutralColor
				if (onAfterComposeObservable != undefined) instance.onAfterComposeObservable = onAfterComposeObservable?.instance || onAfterComposeObservable
				onAfterComposeObservable = instance.onAfterComposeObservable
				if (onAfterRenderMeshToEffect != undefined) instance.onAfterRenderMeshToEffect = onAfterRenderMeshToEffect?.instance || onAfterRenderMeshToEffect
				onAfterRenderMeshToEffect = instance.onAfterRenderMeshToEffect
				if (onBeforeComposeObservable != undefined) instance.onBeforeComposeObservable = onBeforeComposeObservable?.instance || onBeforeComposeObservable
				onBeforeComposeObservable = instance.onBeforeComposeObservable
				if (onBeforeRenderMainTextureObservable != undefined) instance.onBeforeRenderMainTextureObservable = onBeforeRenderMainTextureObservable?.instance || onBeforeRenderMainTextureObservable
				onBeforeRenderMainTextureObservable = instance.onBeforeRenderMainTextureObservable
				if (onBeforeRenderMeshToEffect != undefined) instance.onBeforeRenderMeshToEffect = onBeforeRenderMeshToEffect?.instance || onBeforeRenderMeshToEffect
				onBeforeRenderMeshToEffect = instance.onBeforeRenderMeshToEffect
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onSizeChangedObservable != undefined) instance.onSizeChangedObservable = onSizeChangedObservable?.instance || onSizeChangedObservable
				onSizeChangedObservable = instance.onSizeChangedObservable

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

			