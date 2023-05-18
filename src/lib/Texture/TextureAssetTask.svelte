
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					url  * required
					noMipmap  
					invertY  
					samplingMode   
					onError  
					onSuccess  
					texture  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the name of the task
				

				export let url = undefined // [string] * required
				// defines the location of the file to load
				

				export let noMipmap = undefined // [boolean] 
				// defines if mipmap should not be generated (default is false)
				

				export let invertY = undefined // [boolean] 
				// defines if texture must be inverted on y axis (default is true)
				

				export let samplingMode = undefined // [number] 
				// defines the sampling mode to use (default is texture.trilinear_samplingmode)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.TextureAssetTask(name,url,noMipmap,invertY,samplingMode) : {}

				// ================ ACCESSORS ================

				
				export let errorObject = undefined // [reflection] 
				// 
				

				export let isCompleted = undefined // [boolean] 
				// 
				

				export let taskState = undefined // [assettaskstate] 
				// 
				

				// ================ PROPERTIES ================

				
				export let onError = undefined // [reflection] 
				// 
				

				export let onSuccess = undefined // [reflection] 
				// 
				

				export let texture = undefined // [texture] 
				// gets the loaded texture
				

				// ================ METHODS ================

				
				export let reset = (...args) => instance.reset(...args)

				export let run = (...args) => instance.run(...args)

				export let runTask = (...args) => instance.runTask(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:TextureAssetTask]`, ...args) : null

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
				if (url != undefined) instance.url = url?.instance || url
				url = instance.url
				if (noMipmap != undefined) instance.noMipmap = noMipmap?.instance || noMipmap
				noMipmap = instance.noMipmap
				if (invertY != undefined) instance.invertY = invertY?.instance || invertY
				invertY = instance.invertY
				if (samplingMode != undefined) instance.samplingMode = samplingMode?.instance || samplingMode
				samplingMode = instance.samplingMode

				errorObject = instance.errorObject

				isCompleted = instance.isCompleted

				taskState = instance.taskState
				if (onError != undefined) instance.onError = onError?.instance || onError
				onError = instance.onError
				if (onSuccess != undefined) instance.onSuccess = onSuccess?.instance || onSuccess
				onSuccess = instance.onSuccess
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

			