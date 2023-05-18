
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					engine  * required
					source  * required
					delayAllocation   
					baseDepth  
					baseHeight  
					baseWidth  
					depth  
					format  
					generateMipMaps  
					height  
					invertY  
					is2DArray  
					is3D  
					isCube  
					isMultiview  
					isReady  
					onErrorObservable  
					onLoadedObservable  
					onRebuildCallback  
					samples  
					samplingMode  
					type  
					url  
					width  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let engine = undefined // [thinengine] * required
				// defines the engine to use
				

				export let source = undefined // [internaltexturesource] * required
				// defines the type of data that will be used
				

				export let delayAllocation = undefined // [boolean] 
				// if the texture allocation should be delayed (default: false)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.InternalTexture(engine,source,delayAllocation) : {}

				// ================ ACCESSORS ================

				
				export let anisotropicFilteringLevel = undefined // [nullable] 
				// 
				

				export let comparisonFunction = undefined // [number] 
				// 
				

				export let uniqueId = undefined // [number] 
				// 
				

				export let useMipMaps = undefined // [boolean] 
				// 
				

				export let wrapR = undefined // [nullable] 
				// 
				

				export let wrapU = undefined // [nullable] 
				// 
				

				export let wrapV = undefined // [nullable] 
				// 
				

				// ================ PROPERTIES ================

				
				export let baseDepth = undefined // [number] 
				// gets the initial depth of the texture (it could be rescaled if the current system does not support non power of two textures)
				

				export let baseHeight = undefined // [number] 
				// gets the initial height of the texture (it could be rescaled if the current system does not support non power of two textures)
				

				export let baseWidth = undefined // [number] 
				// gets the initial width of the texture (it could be rescaled if the current system does not support non power of two textures)
				

				export let depth = undefined // [number] 
				// gets the depth of the texture
				

				export let format = undefined // [number] 
				// gets the format of the texture (rgb, rgba...)
				

				export let generateMipMaps = undefined // [boolean] 
				// gets a boolean indicating if the texture needs mipmaps generation
				

				export let height = undefined // [number] 
				// gets the height of the texture
				

				export let invertY = undefined // [boolean] 
				// gets a boolean indicating if the texture is inverted on y axis
				

				export let is2DArray = undefined // [boolean] 
				// defines if the texture contains 2d array data
				

				export let is3D = undefined // [boolean] 
				// defines if the texture contains 3d data
				

				export let isCube = undefined // [boolean] 
				// defines if the texture is a cube texture
				

				export let isMultiview = undefined // [boolean] 
				// defines if the texture contains multiview data
				

				export let isReady = undefined // [boolean] 
				// defines if the texture is ready
				

				export let onErrorObservable = undefined // [observable] 
				// observable called when the texture load is raising an error
				

				export let onLoadedObservable = undefined // [observable] 
				// observable called when the texture is loaded
				

				export let onRebuildCallback = undefined // [nullable] 
				// if this callback is defined it will be called instead of the default _rebuild function
				

				export let samples = undefined // [number] 
				// gets the number of samples used by the texture (webgl2+ only)
				

				export let samplingMode = undefined // [number] 
				// gets the sampling mode of the texture
				

				export let type = undefined // [number] 
				// gets the type of the texture (int, float...)
				

				export let url = undefined // [string] 
				// gets the url used to load this texture
				

				export let width = undefined // [number] 
				// gets the width of the texture
				

				// ================ METHODS ================

				
				export let compareSampler = (...args) => instance.compareSampler(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getEngine = (...args) => instance.getEngine(...args)

				export let incrementReferences = (...args) => instance.incrementReferences(...args)

				export let setParameters = (...args) => instance.setParameters(...args)

				export let updateSize = (...args) => instance.updateSize(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:InternalTexture]`, ...args) : null

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
				if (source != undefined) instance.source = source?.instance || source
				source = instance.source
				if (delayAllocation != undefined) instance.delayAllocation = delayAllocation?.instance || delayAllocation
				delayAllocation = instance.delayAllocation
				if (anisotropicFilteringLevel != undefined) instance.anisotropicFilteringLevel = anisotropicFilteringLevel?.instance || anisotropicFilteringLevel
				anisotropicFilteringLevel = instance.anisotropicFilteringLevel
				if (comparisonFunction != undefined) instance.comparisonFunction = comparisonFunction?.instance || comparisonFunction
				comparisonFunction = instance.comparisonFunction

				uniqueId = instance.uniqueId
				if (useMipMaps != undefined) instance.useMipMaps = useMipMaps?.instance || useMipMaps
				useMipMaps = instance.useMipMaps
				if (wrapR != undefined) instance.wrapR = wrapR?.instance || wrapR
				wrapR = instance.wrapR
				if (wrapU != undefined) instance.wrapU = wrapU?.instance || wrapU
				wrapU = instance.wrapU
				if (wrapV != undefined) instance.wrapV = wrapV?.instance || wrapV
				wrapV = instance.wrapV
				if (baseDepth != undefined) instance.baseDepth = baseDepth?.instance || baseDepth
				baseDepth = instance.baseDepth
				if (baseHeight != undefined) instance.baseHeight = baseHeight?.instance || baseHeight
				baseHeight = instance.baseHeight
				if (baseWidth != undefined) instance.baseWidth = baseWidth?.instance || baseWidth
				baseWidth = instance.baseWidth
				if (depth != undefined) instance.depth = depth?.instance || depth
				depth = instance.depth
				if (format != undefined) instance.format = format?.instance || format
				format = instance.format
				if (generateMipMaps != undefined) instance.generateMipMaps = generateMipMaps?.instance || generateMipMaps
				generateMipMaps = instance.generateMipMaps
				if (height != undefined) instance.height = height?.instance || height
				height = instance.height
				if (invertY != undefined) instance.invertY = invertY?.instance || invertY
				invertY = instance.invertY
				if (is2DArray != undefined) instance.is2DArray = is2DArray?.instance || is2DArray
				is2DArray = instance.is2DArray
				if (is3D != undefined) instance.is3D = is3D?.instance || is3D
				is3D = instance.is3D
				if (isCube != undefined) instance.isCube = isCube?.instance || isCube
				isCube = instance.isCube
				if (isMultiview != undefined) instance.isMultiview = isMultiview?.instance || isMultiview
				isMultiview = instance.isMultiview
				if (isReady != undefined) instance.isReady = isReady?.instance || isReady
				isReady = instance.isReady
				if (onErrorObservable != undefined) instance.onErrorObservable = onErrorObservable?.instance || onErrorObservable
				onErrorObservable = instance.onErrorObservable
				if (onLoadedObservable != undefined) instance.onLoadedObservable = onLoadedObservable?.instance || onLoadedObservable
				onLoadedObservable = instance.onLoadedObservable
				if (onRebuildCallback != undefined) instance.onRebuildCallback = onRebuildCallback?.instance || onRebuildCallback
				onRebuildCallback = instance.onRebuildCallback
				if (samples != undefined) instance.samples = samples?.instance || samples
				samples = instance.samples
				if (samplingMode != undefined) instance.samplingMode = samplingMode?.instance || samplingMode
				samplingMode = instance.samplingMode
				if (type != undefined) instance.type = type?.instance || type
				type = instance.type
				if (url != undefined) instance.url = url?.instance || url
				url = instance.url
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

			