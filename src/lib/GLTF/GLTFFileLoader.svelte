
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					alwaysComputeBoundingBox  
					alwaysComputeSkeletonRootNode  
					animationStartMode  
					compileMaterials  
					compileShadowGenerators  
					coordinateSystemMode  
					createInstances  
					loadAllMaterials  
					loadOnlyMaterials  
					name  
					onCameraLoadedObservable (readonly) 
					onCompleteObservable (readonly) 
					onDisposeObservable (readonly) 
					onErrorObservable (readonly) 
					onExtensionLoadedObservable (readonly) 
					onLoaderStateChangedObservable  
					onMaterialLoadedObservable (readonly) 
					onMeshLoadedObservable (readonly) 
					onParsedObservable  
					onSkinLoadedObservable (readonly) 
					onTextureLoadedObservable (readonly) 
					onValidatedObservable (readonly) 
					preprocessUrlAsync  
					skipMaterials  
					targetFps  
					transparencyAsCoverage  
					useClipPlane  
					useRangeRequests  
					useSRGBBuffers  
					validate  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.GLTFFileLoader() : {}

				// ================ ACCESSORS ================

				
				export let capturePerformanceCounters = undefined // [boolean] 
				// 
				

				export let loaderState = undefined // [nullable] 
				// 
				

				export let loggingEnabled = undefined // [boolean] 
				// 
				

				export let onCameraLoaded = undefined // [] 
				// 
				

				export let onComplete = undefined // [] 
				// 
				

				export let onDispose = undefined // [] 
				// 
				

				export let onError = undefined // [] 
				// 
				

				export let onExtensionLoaded = undefined // [] 
				// 
				

				export let onMaterialLoaded = undefined // [] 
				// 
				

				export let onMeshLoaded = undefined // [] 
				// 
				

				export let onParsed = undefined // [] 
				// 
				

				export let onTextureLoaded = undefined // [] 
				// 
				

				export let onValidated = undefined // [] 
				// 
				

				// ================ PROPERTIES ================

				
				export let alwaysComputeBoundingBox = undefined // [boolean] 
				// defines if the loader should always compute the bounding boxes of meshes and not use the min/max values from the position accessor. defaults to false.
				

				export let alwaysComputeSkeletonRootNode = undefined // [boolean] 
				// defines if the loader should always compute the nearest common ancestor of the skeleton joints instead of using 
				

				export let animationStartMode = undefined // [gltfloaderanimationstartmode] 
				// the animation start mode. defaults to first.
				

				export let compileMaterials = undefined // [boolean] 
				// defines if the loader should compile materials before raising the success callback. defaults to false.
				

				export let compileShadowGenerators = undefined // [boolean] 
				// defines if the loader should compile shadow generators before raising the success callback. defaults to false.
				

				export let coordinateSystemMode = undefined // [gltfloadercoordinatesystemmode] 
				// the coordinate system mode. defaults to auto.
				

				export let createInstances = undefined // [boolean] 
				// defines if the loader should create instances when multiple gltf nodes point to the same gltf mesh. defaults to true.
				

				export let loadAllMaterials = undefined // [boolean] 
				// if true, load all materials defined in the file, even if not used by any mesh. defaults to false.
				

				export let loadOnlyMaterials = undefined // [boolean] 
				// if true, load only the materials defined in the file. defaults to false.
				

				export let name = undefined // [string] 
				// name of the loader ("gltf")
				

				export let onCameraLoadedObservable = undefined // [observable] 
				// observable raised when the loader creates a camera after parsing the gltf properties of the camera.
				

				export let onCompleteObservable = undefined // [observable] 
				// observable raised when the asset is completely loaded, immediately before the loader is disposed.for assets with lods, raised when all of the lods are complete.for assets without lods, raised when the model is complete, immediately after the loader resolves the returned promise.
				

				export let onDisposeObservable = undefined // [observable] 
				// observable raised after the loader is disposed.
				

				export let onErrorObservable = undefined // [observable] 
				// observable raised when an error occurs.
				

				export let onExtensionLoadedObservable = undefined // [observable] 
				// observable raised after a loader extension is created.set additional options for a loader extension in this event.
				

				export let onLoaderStateChangedObservable = undefined // [observable] 
				// observable raised when the loader state changes.
				

				export let onMaterialLoadedObservable = undefined // [observable] 
				// observable raised when the loader creates a material after parsing the gltf properties of the material.
				

				export let onMeshLoadedObservable = undefined // [observable] 
				// observable raised when the loader creates a mesh after parsing the gltf properties of the mesh.note that the observable is raised as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)
				

				export let onParsedObservable = undefined // [observable] 
				// raised when the asset has been parsed
				

				export let onSkinLoadedObservable = undefined // [observable] 
				// callback raised when the loader creates a skin after parsing the gltf properties of the skin node.
				

				export let onTextureLoadedObservable = undefined // [observable] 
				// observable raised when the loader creates a texture after parsing the gltf properties of the texture.
				

				export let onValidatedObservable = undefined // [observable] 
				// observable raised after validation when validate is set to true. the event data is the result of the validation.
				

				export let preprocessUrlAsync = undefined // [reflection] 
				// 
				

				export let skipMaterials = undefined // [boolean] 
				// if true, do not load any materials defined in the file. defaults to false.
				

				export let targetFps = undefined // [number] 
				// when loading gltf animations, which are defined in seconds, target them to this fps. defaults to 60.
				

				export let transparencyAsCoverage = undefined // [boolean] 
				// defines if the alpha blended materials are only applied as coverage.if false, (default) the luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.if true, no extra effects are applied to transparent pixels.
				

				export let useClipPlane = undefined // [boolean] 
				// defines if the loader should also compile materials with clip planes. defaults to false.
				

				export let useRangeRequests = undefined // [boolean] 
				// defines if the loader should use range requests when load binary gltf files from http.enabling will disable offline support and gltf validator.defaults to false.
				

				export let useSRGBBuffers = undefined // [boolean] 
				// if true, load the color (gamma encoded) textures into srgb buffers (if supported by the gpu), which will yield more accurate results when sampling the texture. defaults to true.
				

				export let validate = undefined // [boolean] 
				// defines if the loader should validate the asset.
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let rewriteRootURL = (...args) => instance.rewriteRootURL(...args)

				export let whenCompleteAsync = (...args) => instance.whenCompleteAsync(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:GLTFFileLoader]`, ...args) : null

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

												if (capturePerformanceCounters != undefined) instance.capturePerformanceCounters = capturePerformanceCounters?.instance || capturePerformanceCounters
				capturePerformanceCounters = instance.capturePerformanceCounters

				loaderState = instance.loaderState
				if (loggingEnabled != undefined) instance.loggingEnabled = loggingEnabled?.instance || loggingEnabled
				loggingEnabled = instance.loggingEnabled
				if (onCameraLoaded != undefined) instance.onCameraLoaded = onCameraLoaded?.instance || onCameraLoaded
				onCameraLoaded = instance.onCameraLoaded
				if (onComplete != undefined) instance.onComplete = onComplete?.instance || onComplete
				onComplete = instance.onComplete
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose
				if (onError != undefined) instance.onError = onError?.instance || onError
				onError = instance.onError
				if (onExtensionLoaded != undefined) instance.onExtensionLoaded = onExtensionLoaded?.instance || onExtensionLoaded
				onExtensionLoaded = instance.onExtensionLoaded
				if (onMaterialLoaded != undefined) instance.onMaterialLoaded = onMaterialLoaded?.instance || onMaterialLoaded
				onMaterialLoaded = instance.onMaterialLoaded
				if (onMeshLoaded != undefined) instance.onMeshLoaded = onMeshLoaded?.instance || onMeshLoaded
				onMeshLoaded = instance.onMeshLoaded
				if (onParsed != undefined) instance.onParsed = onParsed?.instance || onParsed
				onParsed = instance.onParsed
				if (onTextureLoaded != undefined) instance.onTextureLoaded = onTextureLoaded?.instance || onTextureLoaded
				onTextureLoaded = instance.onTextureLoaded
				if (onValidated != undefined) instance.onValidated = onValidated?.instance || onValidated
				onValidated = instance.onValidated
				if (alwaysComputeBoundingBox != undefined) instance.alwaysComputeBoundingBox = alwaysComputeBoundingBox?.instance || alwaysComputeBoundingBox
				alwaysComputeBoundingBox = instance.alwaysComputeBoundingBox
				if (alwaysComputeSkeletonRootNode != undefined) instance.alwaysComputeSkeletonRootNode = alwaysComputeSkeletonRootNode?.instance || alwaysComputeSkeletonRootNode
				alwaysComputeSkeletonRootNode = instance.alwaysComputeSkeletonRootNode
				if (animationStartMode != undefined) instance.animationStartMode = animationStartMode?.instance || animationStartMode
				animationStartMode = instance.animationStartMode
				if (compileMaterials != undefined) instance.compileMaterials = compileMaterials?.instance || compileMaterials
				compileMaterials = instance.compileMaterials
				if (compileShadowGenerators != undefined) instance.compileShadowGenerators = compileShadowGenerators?.instance || compileShadowGenerators
				compileShadowGenerators = instance.compileShadowGenerators
				if (coordinateSystemMode != undefined) instance.coordinateSystemMode = coordinateSystemMode?.instance || coordinateSystemMode
				coordinateSystemMode = instance.coordinateSystemMode
				if (createInstances != undefined) instance.createInstances = createInstances?.instance || createInstances
				createInstances = instance.createInstances
				if (loadAllMaterials != undefined) instance.loadAllMaterials = loadAllMaterials?.instance || loadAllMaterials
				loadAllMaterials = instance.loadAllMaterials
				if (loadOnlyMaterials != undefined) instance.loadOnlyMaterials = loadOnlyMaterials?.instance || loadOnlyMaterials
				loadOnlyMaterials = instance.loadOnlyMaterials
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (onLoaderStateChangedObservable != undefined) instance.onLoaderStateChangedObservable = onLoaderStateChangedObservable?.instance || onLoaderStateChangedObservable
				onLoaderStateChangedObservable = instance.onLoaderStateChangedObservable
				if (onParsedObservable != undefined) instance.onParsedObservable = onParsedObservable?.instance || onParsedObservable
				onParsedObservable = instance.onParsedObservable
				if (preprocessUrlAsync != undefined) instance.preprocessUrlAsync = preprocessUrlAsync?.instance || preprocessUrlAsync
				preprocessUrlAsync = instance.preprocessUrlAsync
				if (skipMaterials != undefined) instance.skipMaterials = skipMaterials?.instance || skipMaterials
				skipMaterials = instance.skipMaterials
				if (targetFps != undefined) instance.targetFps = targetFps?.instance || targetFps
				targetFps = instance.targetFps
				if (transparencyAsCoverage != undefined) instance.transparencyAsCoverage = transparencyAsCoverage?.instance || transparencyAsCoverage
				transparencyAsCoverage = instance.transparencyAsCoverage
				if (useClipPlane != undefined) instance.useClipPlane = useClipPlane?.instance || useClipPlane
				useClipPlane = instance.useClipPlane
				if (useRangeRequests != undefined) instance.useRangeRequests = useRangeRequests?.instance || useRangeRequests
				useRangeRequests = instance.useRangeRequests
				if (useSRGBBuffers != undefined) instance.useSRGBBuffers = useSRGBBuffers?.instance || useSRGBBuffers
				useSRGBBuffers = instance.useSRGBBuffers
				if (validate != undefined) instance.validate = validate?.instance || validate
				validate = instance.validate

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

			