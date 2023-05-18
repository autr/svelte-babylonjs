
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					engine  * required
					scene  * required
					sceneLoadedCallback  * required
					progressCallback  * required
					additionalRenderLoopLogicCallback  * required
					textureLoadingCallback  * required
					startingProcessingFilesCallback  * required
					onReloadCallback  * required
					errorCallback  * required 
					loadAsync  
					onProcessFileCallback  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let engine = undefined // [engine] * required
				// defines the rendering engine
				

				export let scene = undefined // [nullable] * required
				// defines the hosting scene
				

				export let sceneLoadedCallback = undefined // [nullable] * required
				// callback called when scene is loaded
				

				export let progressCallback = undefined // [nullable] * required
				// callback called to track progress
				

				export let additionalRenderLoopLogicCallback = undefined // [nullable] * required
				// callback called to add user logic to the rendering loop
				

				export let textureLoadingCallback = undefined // [nullable] * required
				// callback called when a texture is loading
				

				export let startingProcessingFilesCallback = undefined // [nullable] * required
				// callback called when the system is about to process all files
				

				export let onReloadCallback = undefined // [nullable] * required
				// callback called when a reload is requested
				

				export let errorCallback = undefined // [nullable] * required
				// callback call if an error occurs
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FilesInput(engine,scene,sceneLoadedCallback,progressCallback,additionalRenderLoopLogicCallback,textureLoadingCallback,startingProcessingFilesCallback,onReloadCallback,errorCallback) : {}

				// ================ ACCESSORS ================

				
				export let filesToLoad = undefined // [array] 
				// 
				

				// ================ PROPERTIES ================

				
				export let loadAsync = undefined // [reflection] 
				// 
				

				export let onProcessFileCallback = undefined // [reflection] 
				// 
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let loadFiles = (...args) => instance.loadFiles(...args)

				export let monitorElementForDragNDrop = (...args) => instance.monitorElementForDragNDrop(...args)

				export let reload = (...args) => instance.reload(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FilesInput]`, ...args) : null

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
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (sceneLoadedCallback != undefined) instance.sceneLoadedCallback = sceneLoadedCallback?.instance || sceneLoadedCallback
				sceneLoadedCallback = instance.sceneLoadedCallback
				if (progressCallback != undefined) instance.progressCallback = progressCallback?.instance || progressCallback
				progressCallback = instance.progressCallback
				if (additionalRenderLoopLogicCallback != undefined) instance.additionalRenderLoopLogicCallback = additionalRenderLoopLogicCallback?.instance || additionalRenderLoopLogicCallback
				additionalRenderLoopLogicCallback = instance.additionalRenderLoopLogicCallback
				if (textureLoadingCallback != undefined) instance.textureLoadingCallback = textureLoadingCallback?.instance || textureLoadingCallback
				textureLoadingCallback = instance.textureLoadingCallback
				if (startingProcessingFilesCallback != undefined) instance.startingProcessingFilesCallback = startingProcessingFilesCallback?.instance || startingProcessingFilesCallback
				startingProcessingFilesCallback = instance.startingProcessingFilesCallback
				if (onReloadCallback != undefined) instance.onReloadCallback = onReloadCallback?.instance || onReloadCallback
				onReloadCallback = instance.onReloadCallback
				if (errorCallback != undefined) instance.errorCallback = errorCallback?.instance || errorCallback
				errorCallback = instance.errorCallback

				filesToLoad = instance.filesToLoad
				if (loadAsync != undefined) instance.loadAsync = loadAsync?.instance || loadAsync
				loadAsync = instance.loadAsync
				if (onProcessFileCallback != undefined) instance.onProcessFileCallback = onProcessFileCallback?.instance || onProcessFileCallback
				onProcessFileCallback = instance.onProcessFileCallback

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

			