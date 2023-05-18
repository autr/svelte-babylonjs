
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene   
					autoHideLoadingUI  
					onFinish  
					onProgress  
					onProgressObservable  
					onTaskError  
					onTaskErrorObservable  
					onTaskSuccess  
					onTaskSuccessObservable  
					onTasksDoneObservable  
					useDefaultLoadingScreen  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] 
				// defines the scene to work on
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AssetsManager(scene) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let autoHideLoadingUI = undefined // [boolean] 
				// gets or sets a boolean defining if the assetsmanager should automatically hide the loading screenwhen all assets have been downloaded.if set to false, you need to manually call in hideloadingui() once your scene is ready.
				

				export let onFinish = undefined // [reflection] 
				// 
				

				export let onProgress = undefined // [reflection] 
				// 
				

				export let onProgressObservable = undefined // [observable] 
				// observable called when a task is done (whatever the result is)
				

				export let onTaskError = undefined // [reflection] 
				// 
				

				export let onTaskErrorObservable = undefined // [observable] 
				// observable called when a task had an error
				

				export let onTaskSuccess = undefined // [reflection] 
				// 
				

				export let onTaskSuccessObservable = undefined // [observable] 
				// observable called when all tasks are processed
				

				export let onTasksDoneObservable = undefined // [observable] 
				// observable called when all tasks were executed
				

				export let useDefaultLoadingScreen = undefined // [boolean] 
				// gets or sets a boolean defining if the assetsmanager should use the default loading screen
				

				// ================ METHODS ================

				
				export let addBinaryFileTask = (...args) => instance.addBinaryFileTask(...args)

				export let addContainerTask = (...args) => instance.addContainerTask(...args)

				export let addCubeTextureTask = (...args) => instance.addCubeTextureTask(...args)

				export let addEquiRectangularCubeTextureAssetTask = (...args) => instance.addEquiRectangularCubeTextureAssetTask(...args)

				export let addHDRCubeTextureTask = (...args) => instance.addHDRCubeTextureTask(...args)

				export let addImageTask = (...args) => instance.addImageTask(...args)

				export let addMeshTask = (...args) => instance.addMeshTask(...args)

				export let addTextFileTask = (...args) => instance.addTextFileTask(...args)

				export let addTextureTask = (...args) => instance.addTextureTask(...args)

				export let load = (...args) => instance.load(...args)

				export let loadAsync = (...args) => instance.loadAsync(...args)

				export let removeTask = (...args) => instance.removeTask(...args)

				export let reset = (...args) => instance.reset(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AssetsManager]`, ...args) : null

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
				if (autoHideLoadingUI != undefined) instance.autoHideLoadingUI = autoHideLoadingUI?.instance || autoHideLoadingUI
				autoHideLoadingUI = instance.autoHideLoadingUI
				if (onFinish != undefined) instance.onFinish = onFinish?.instance || onFinish
				onFinish = instance.onFinish
				if (onProgress != undefined) instance.onProgress = onProgress?.instance || onProgress
				onProgress = instance.onProgress
				if (onProgressObservable != undefined) instance.onProgressObservable = onProgressObservable?.instance || onProgressObservable
				onProgressObservable = instance.onProgressObservable
				if (onTaskError != undefined) instance.onTaskError = onTaskError?.instance || onTaskError
				onTaskError = instance.onTaskError
				if (onTaskErrorObservable != undefined) instance.onTaskErrorObservable = onTaskErrorObservable?.instance || onTaskErrorObservable
				onTaskErrorObservable = instance.onTaskErrorObservable
				if (onTaskSuccess != undefined) instance.onTaskSuccess = onTaskSuccess?.instance || onTaskSuccess
				onTaskSuccess = instance.onTaskSuccess
				if (onTaskSuccessObservable != undefined) instance.onTaskSuccessObservable = onTaskSuccessObservable?.instance || onTaskSuccessObservable
				onTaskSuccessObservable = instance.onTaskSuccessObservable
				if (onTasksDoneObservable != undefined) instance.onTasksDoneObservable = onTasksDoneObservable?.instance || onTasksDoneObservable
				onTasksDoneObservable = instance.onTasksDoneObservable
				if (useDefaultLoadingScreen != undefined) instance.useDefaultLoadingScreen = useDefaultLoadingScreen?.instance || useDefaultLoadingScreen
				useDefaultLoadingScreen = instance.useDefaultLoadingScreen

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

			