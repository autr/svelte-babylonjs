
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					meshesNames  * required
					rootUrl  * required
					sceneFilename  * required
					extension   
					loadedAnimationGroups  
					loadedMeshes  
					loadedParticleSystems  
					loadedSkeletons  
					loadedTransformNodes  
					onError  
					onSuccess  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the name of the task
				

				export let meshesNames = undefined // [any] * required
				// defines the list of mesh's names you want to load
				

				export let rootUrl = undefined // [string] * required
				// defines the root url to use as a base to load your meshes and associated resources
				

				export let sceneFilename = undefined // [union] * required
				// defines the filename or file of the scene to load from
				

				export let extension = undefined // [string] 
				// defines the extension to use to load the scene (if not defined, ".babylon" will be used)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.MeshAssetTask(name,meshesNames,rootUrl,sceneFilename,extension) : {}

				// ================ ACCESSORS ================

				
				export let errorObject = undefined // [reflection] 
				// 
				

				export let isCompleted = undefined // [boolean] 
				// 
				

				export let taskState = undefined // [assettaskstate] 
				// 
				

				// ================ PROPERTIES ================

				
				export let loadedAnimationGroups = undefined // [array] 
				// gets the list of loaded animation groups
				

				export let loadedMeshes = undefined // [array] 
				// gets the list of loaded meshes
				

				export let loadedParticleSystems = undefined // [array] 
				// gets the list of loaded particle systems
				

				export let loadedSkeletons = undefined // [array] 
				// gets the list of loaded skeletons
				

				export let loadedTransformNodes = undefined // [array] 
				// gets the list of loaded transforms
				

				export let onError = undefined // [reflection] 
				// 
				

				export let onSuccess = undefined // [reflection] 
				// 
				

				// ================ METHODS ================

				
				export let reset = (...args) => instance.reset(...args)

				export let run = (...args) => instance.run(...args)

				export let runTask = (...args) => instance.runTask(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:MeshAssetTask]`, ...args) : null

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
				if (meshesNames != undefined) instance.meshesNames = meshesNames?.instance || meshesNames
				meshesNames = instance.meshesNames
				if (rootUrl != undefined) instance.rootUrl = rootUrl?.instance || rootUrl
				rootUrl = instance.rootUrl
				if (sceneFilename != undefined) instance.sceneFilename = sceneFilename?.instance || sceneFilename
				sceneFilename = instance.sceneFilename
				if (extension != undefined) instance.extension = extension?.instance || extension
				extension = instance.extension

				errorObject = instance.errorObject

				isCompleted = instance.isCompleted

				taskState = instance.taskState
				if (loadedAnimationGroups != undefined) instance.loadedAnimationGroups = loadedAnimationGroups?.instance || loadedAnimationGroups
				loadedAnimationGroups = instance.loadedAnimationGroups
				if (loadedMeshes != undefined) instance.loadedMeshes = loadedMeshes?.instance || loadedMeshes
				loadedMeshes = instance.loadedMeshes
				if (loadedParticleSystems != undefined) instance.loadedParticleSystems = loadedParticleSystems?.instance || loadedParticleSystems
				loadedParticleSystems = instance.loadedParticleSystems
				if (loadedSkeletons != undefined) instance.loadedSkeletons = loadedSkeletons?.instance || loadedSkeletons
				loadedSkeletons = instance.loadedSkeletons
				if (loadedTransformNodes != undefined) instance.loadedTransformNodes = loadedTransformNodes?.instance || loadedTransformNodes
				loadedTransformNodes = instance.loadedTransformNodes
				if (onError != undefined) instance.onError = onError?.instance || onError
				onError = instance.onError
				if (onSuccess != undefined) instance.onSuccess = onSuccess?.instance || onSuccess
				onSuccess = instance.onSuccess

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

			