
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					data  * required
					facesExpected  * required 
					bytesOfKeyValueData  
					glBaseInternalFormat  
					glFormat  
					glInternalFormat  
					glType  
					glTypeSize  
					isInvalid  
					loadType  
					numberOfArrayElements  
					numberOfFaces  
					numberOfMipmapLevels  
					pixelDepth  
					pixelHeight  
					pixelWidth  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let data = undefined // [arraybufferview] * required
				// contents of the ktx container file
				

				export let facesExpected = undefined // [number] * required
				// should be either 1 or 6, based whether a cube texture or or
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.KhronosTextureContainer(data,facesExpected) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let bytesOfKeyValueData = undefined // [number] 
				// gets the bytes of key value data
				

				export let glBaseInternalFormat = undefined // [number] 
				// gets the base internal format
				

				export let glFormat = undefined // [number] 
				// gets the opengl format
				

				export let glInternalFormat = undefined // [number] 
				// gets the opengl internal format
				

				export let glType = undefined // [number] 
				// gets the opengl type
				

				export let glTypeSize = undefined // [number] 
				// gets the opengl type size
				

				export let isInvalid = undefined // [boolean] 
				// if the container has been made invalid (eg. constructor failed to correctly load array buffer)
				

				export let loadType = undefined // [number] 
				// gets the load type
				

				export let numberOfArrayElements = undefined // [number] 
				// gets the number of array elements
				

				export let numberOfFaces = undefined // [number] 
				// gets the number of faces
				

				export let numberOfMipmapLevels = undefined // [number] 
				// gets the number of mipmap levels
				

				export let pixelDepth = undefined // [number] 
				// gets image depth in pixels
				

				export let pixelHeight = undefined // [number] 
				// gets image height in pixel
				

				export let pixelWidth = undefined // [number] 
				// gets image width in pixel
				

				// ================ METHODS ================

				
				export let IsValid = (...args) => instance.IsValid(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:KhronosTextureContainer]`, ...args) : null

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

												if (data != undefined) instance.data = data?.instance || data
				data = instance.data
				if (facesExpected != undefined) instance.facesExpected = facesExpected?.instance || facesExpected
				facesExpected = instance.facesExpected
				if (bytesOfKeyValueData != undefined) instance.bytesOfKeyValueData = bytesOfKeyValueData?.instance || bytesOfKeyValueData
				bytesOfKeyValueData = instance.bytesOfKeyValueData
				if (glBaseInternalFormat != undefined) instance.glBaseInternalFormat = glBaseInternalFormat?.instance || glBaseInternalFormat
				glBaseInternalFormat = instance.glBaseInternalFormat
				if (glFormat != undefined) instance.glFormat = glFormat?.instance || glFormat
				glFormat = instance.glFormat
				if (glInternalFormat != undefined) instance.glInternalFormat = glInternalFormat?.instance || glInternalFormat
				glInternalFormat = instance.glInternalFormat
				if (glType != undefined) instance.glType = glType?.instance || glType
				glType = instance.glType
				if (glTypeSize != undefined) instance.glTypeSize = glTypeSize?.instance || glTypeSize
				glTypeSize = instance.glTypeSize
				if (isInvalid != undefined) instance.isInvalid = isInvalid?.instance || isInvalid
				isInvalid = instance.isInvalid
				if (loadType != undefined) instance.loadType = loadType?.instance || loadType
				loadType = instance.loadType
				if (numberOfArrayElements != undefined) instance.numberOfArrayElements = numberOfArrayElements?.instance || numberOfArrayElements
				numberOfArrayElements = instance.numberOfArrayElements
				if (numberOfFaces != undefined) instance.numberOfFaces = numberOfFaces?.instance || numberOfFaces
				numberOfFaces = instance.numberOfFaces
				if (numberOfMipmapLevels != undefined) instance.numberOfMipmapLevels = numberOfMipmapLevels?.instance || numberOfMipmapLevels
				numberOfMipmapLevels = instance.numberOfMipmapLevels
				if (pixelDepth != undefined) instance.pixelDepth = pixelDepth?.instance || pixelDepth
				pixelDepth = instance.pixelDepth
				if (pixelHeight != undefined) instance.pixelHeight = pixelHeight?.instance || pixelHeight
				pixelHeight = instance.pixelHeight
				if (pixelWidth != undefined) instance.pixelWidth = pixelWidth?.instance || pixelWidth
				pixelWidth = instance.pixelWidth

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

			