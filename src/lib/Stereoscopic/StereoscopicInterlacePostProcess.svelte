
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					rigCameras  * required
					isStereoscopicHoriz  * required
					samplingMode  
					engine  
					reusable   
					adaptScaleToCurrentViewport  
					alphaConstants  
					alphaMode  
					alwaysForcePOT  
					animations  
					autoClear  
					clearColor  
					enablePixelPerfectMode  
					externalTextureSamplerBinding  
					forceFullscreenViewport  
					height  
					inspectableCustomProperties  
					nodeMaterialSource  
					onActivateObservable  
					onAfterRenderObservable  
					onApplyObservable  
					onBeforeRenderObservable  
					onSizeChangedObservable  
					renderTargetSamplingMode  
					scaleMode  
					uniqueId  
					width  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// the name of the effect.
				

				export let rigCameras = undefined // [array] * required
				// the rig cameras to be applied to the post process
				

				export let isStereoscopicHoriz = undefined // [boolean] * required
				// if the rendered results are horizontal or vertical
				

				export let samplingMode = undefined // [number] 
				// the sampling mode to be used when computing the pass. (default: 0)
				

				export let engine = undefined // [engine] 
				// the engine which the post process will be applied. (default: current engine)
				

				export let reusable = undefined // [boolean] 
				// if the post process can be reused on the same frame. (default: false)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.StereoscopicInterlacePostProcess(name,rigCameras,isStereoscopicHoriz,samplingMode,engine,reusable) : {}

				// ================ ACCESSORS ================

				
				export let aspectRatio = undefined // [number] 
				// 
				

				export let inputTexture = undefined // [rendertargetwrapper] 
				// 
				

				export let isSupported = undefined // [boolean] 
				// 
				

				export let onActivate = undefined // [] 
				// 
				

				export let onAfterRender = undefined // [] 
				// 
				

				export let onApply = undefined // [] 
				// 
				

				export let onBeforeRender = undefined // [] 
				// 
				

				export let onSizeChanged = undefined // [] 
				// 
				

				export let samples = undefined // [number] 
				// 
				

				export let texelSize = undefined // [vector2] 
				// 
				

				// ================ PROPERTIES ================

				
				export let adaptScaleToCurrentViewport = undefined // [boolean] 
				// modify the scale of the post process to be the same as the viewport (default: false)
				

				export let alphaConstants = undefined // [color4] 
				// sets the setalphablendconstants of the babylon engine
				

				export let alphaMode = undefined // [number] 
				// type of alpha mode to use when performing the post process (default: engine.alpha_disable)
				

				export let alwaysForcePOT = undefined // [boolean] 
				// force textures to be a power of two (default: false)
				

				export let animations = undefined // [array] 
				// animations to be used for the post processing
				

				export let autoClear = undefined // [boolean] 
				// if the buffer needs to be cleared before applying the post process. (default: true)should be set to false if shader will overwrite all previous pixels.
				

				export let clearColor = undefined // [color4] 
				// clear color to use when screen clearing
				

				export let enablePixelPerfectMode = undefined // [boolean] 
				// enable pixel perfect mode where texture is not scaled to be power of 2.can only be used on a single postprocess or on the last one of a chain. (default: false)
				

				export let externalTextureSamplerBinding = undefined // [boolean] 
				// if externaltexturesamplerbinding is true, the "apply" method won't bind the texturesampler texture, it is expected to be done by the "outside" (by the onapplyobservable observer most probably).counter-productive in some cases because if the texture bound by "apply" is different from the currently texture bound, (the one set by the onapplyobservable observer, for eg) someinternal structures (materialcontext) will be dirtified, which may impact performances
				

				export let forceFullscreenViewport = undefined // [boolean] 
				// force the postprocess to be applied without taking in account viewport
				

				export let height = undefined // [number] 
				// height of the texture to apply the post process on
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let nodeMaterialSource = undefined // [nullable] 
				// gets the node material used to create this postprocess (null if the postprocess was manually created)
				

				export let onActivateObservable = undefined // [observable] 
				// an event triggered when the postprocess is activated.
				

				export let onAfterRenderObservable = undefined // [observable] 
				// an event triggered after rendering the postprocess
				

				export let onApplyObservable = undefined // [observable] 
				// an event triggered when the postprocess applies its effect.
				

				export let onBeforeRenderObservable = undefined // [observable] 
				// an event triggered before rendering the postprocess
				

				export let onSizeChangedObservable = undefined // [observable] 
				// an event triggered when the postprocess changes its size.
				

				export let renderTargetSamplingMode = undefined // [number] 
				// sampling mode used by the shadersee https://doc.babylonjs.com/classes/3.1/texture
				

				export let scaleMode = undefined // [number] 
				// scale mode for the post process (default: engine.scalemode_floor)| value | type                                | description || ----- | ----------------------------------- | ----------- || 1     | scalemode_floor                     | [engine.scalemode_floor](https://doc.babylonjs.com/api/classes/babylon.engine#scalemode_floor) || 2     | scalemode_nearest                   | [engine.scalemode_nearest](https://doc.babylonjs.com/api/classes/babylon.engine#scalemode_nearest) || 3     | scalemode_ceiling                   | [engine.scalemode_ceiling](https://doc.babylonjs.com/api/classes/babylon.engine#scalemode_ceiling) |
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the post process
				

				export let width = undefined // [number] 
				// width of the texture to apply the post process on
				

				// ================ METHODS ================

				
				export let activate = (...args) => instance.activate(...args)

				export let apply = (...args) => instance.apply(...args)

				export let clone = (...args) => instance.clone(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getCamera = (...args) => instance.getCamera(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getEffect = (...args) => instance.getEffect(...args)

				export let getEffectName = (...args) => instance.getEffectName(...args)

				export let getEngine = (...args) => instance.getEngine(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let isReusable = (...args) => instance.isReusable(...args)

				export let markTextureDirty = (...args) => instance.markTextureDirty(...args)

				export let restoreDefaultInputTexture = (...args) => instance.restoreDefaultInputTexture(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setPrePassRenderer = (...args) => instance.setPrePassRenderer(...args)

				export let shareOutputWith = (...args) => instance.shareOutputWith(...args)

				export let updateEffect = (...args) => instance.updateEffect(...args)

				export let useOwnOutput = (...args) => instance.useOwnOutput(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let RegisterShaderCodeProcessing = (...args) => instance.RegisterShaderCodeProcessing(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:StereoscopicInterlacePostProcess]`, ...args) : null

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
				if (rigCameras != undefined) instance.rigCameras = rigCameras?.instance || rigCameras
				rigCameras = instance.rigCameras
				if (isStereoscopicHoriz != undefined) instance.isStereoscopicHoriz = isStereoscopicHoriz?.instance || isStereoscopicHoriz
				isStereoscopicHoriz = instance.isStereoscopicHoriz
				if (samplingMode != undefined) instance.samplingMode = samplingMode?.instance || samplingMode
				samplingMode = instance.samplingMode
				if (engine != undefined) instance.engine = engine?.instance || engine
				engine = instance.engine
				if (reusable != undefined) instance.reusable = reusable?.instance || reusable
				reusable = instance.reusable

				aspectRatio = instance.aspectRatio
				if (inputTexture != undefined) instance.inputTexture = inputTexture?.instance || inputTexture
				inputTexture = instance.inputTexture

				isSupported = instance.isSupported
				if (onActivate != undefined) instance.onActivate = onActivate?.instance || onActivate
				onActivate = instance.onActivate
				if (onAfterRender != undefined) instance.onAfterRender = onAfterRender?.instance || onAfterRender
				onAfterRender = instance.onAfterRender
				if (onApply != undefined) instance.onApply = onApply?.instance || onApply
				onApply = instance.onApply
				if (onBeforeRender != undefined) instance.onBeforeRender = onBeforeRender?.instance || onBeforeRender
				onBeforeRender = instance.onBeforeRender
				if (onSizeChanged != undefined) instance.onSizeChanged = onSizeChanged?.instance || onSizeChanged
				onSizeChanged = instance.onSizeChanged
				if (samples != undefined) instance.samples = samples?.instance || samples
				samples = instance.samples

				texelSize = instance.texelSize
				if (adaptScaleToCurrentViewport != undefined) instance.adaptScaleToCurrentViewport = adaptScaleToCurrentViewport?.instance || adaptScaleToCurrentViewport
				adaptScaleToCurrentViewport = instance.adaptScaleToCurrentViewport
				if (alphaConstants != undefined) instance.alphaConstants = alphaConstants?.instance || alphaConstants
				alphaConstants = instance.alphaConstants
				if (alphaMode != undefined) instance.alphaMode = alphaMode?.instance || alphaMode
				alphaMode = instance.alphaMode
				if (alwaysForcePOT != undefined) instance.alwaysForcePOT = alwaysForcePOT?.instance || alwaysForcePOT
				alwaysForcePOT = instance.alwaysForcePOT
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (autoClear != undefined) instance.autoClear = autoClear?.instance || autoClear
				autoClear = instance.autoClear
				if (clearColor != undefined) instance.clearColor = clearColor?.instance || clearColor
				clearColor = instance.clearColor
				if (enablePixelPerfectMode != undefined) instance.enablePixelPerfectMode = enablePixelPerfectMode?.instance || enablePixelPerfectMode
				enablePixelPerfectMode = instance.enablePixelPerfectMode
				if (externalTextureSamplerBinding != undefined) instance.externalTextureSamplerBinding = externalTextureSamplerBinding?.instance || externalTextureSamplerBinding
				externalTextureSamplerBinding = instance.externalTextureSamplerBinding
				if (forceFullscreenViewport != undefined) instance.forceFullscreenViewport = forceFullscreenViewport?.instance || forceFullscreenViewport
				forceFullscreenViewport = instance.forceFullscreenViewport
				if (height != undefined) instance.height = height?.instance || height
				height = instance.height
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (nodeMaterialSource != undefined) instance.nodeMaterialSource = nodeMaterialSource?.instance || nodeMaterialSource
				nodeMaterialSource = instance.nodeMaterialSource
				if (onActivateObservable != undefined) instance.onActivateObservable = onActivateObservable?.instance || onActivateObservable
				onActivateObservable = instance.onActivateObservable
				if (onAfterRenderObservable != undefined) instance.onAfterRenderObservable = onAfterRenderObservable?.instance || onAfterRenderObservable
				onAfterRenderObservable = instance.onAfterRenderObservable
				if (onApplyObservable != undefined) instance.onApplyObservable = onApplyObservable?.instance || onApplyObservable
				onApplyObservable = instance.onApplyObservable
				if (onBeforeRenderObservable != undefined) instance.onBeforeRenderObservable = onBeforeRenderObservable?.instance || onBeforeRenderObservable
				onBeforeRenderObservable = instance.onBeforeRenderObservable
				if (onSizeChangedObservable != undefined) instance.onSizeChangedObservable = onSizeChangedObservable?.instance || onSizeChangedObservable
				onSizeChangedObservable = instance.onSizeChangedObservable
				if (renderTargetSamplingMode != undefined) instance.renderTargetSamplingMode = renderTargetSamplingMode?.instance || renderTargetSamplingMode
				renderTargetSamplingMode = instance.renderTargetSamplingMode
				if (scaleMode != undefined) instance.scaleMode = scaleMode?.instance || scaleMode
				scaleMode = instance.scaleMode
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (width != undefined) instance.width = width?.instance || width
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

			