
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					size  * required
					scene  * required
					generateMipMaps  
					useFloat  
					linearSpace   
					metadata  
					position  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the name of the probe
				

				export let size = undefined // [number] * required
				// defines the texture resolution (for each face)
				

				export let scene = undefined // [scene] * required
				// defines the hosting scene
				

				export let generateMipMaps = undefined // [boolean] 
				// defines if mip maps should be generated automatically (true by default)
				

				export let useFloat = undefined // [boolean] 
				// defines if hdr data (float data) should be used to store colors (false by default)
				

				export let linearSpace = undefined // [boolean] 
				// defines if the probe should be generated in linear space or not (false by default)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ReflectionProbe(name,size,scene,generateMipMaps,useFloat,linearSpace) : {}

				// ================ ACCESSORS ================

				
				export let cubeTexture = undefined // [rendertargettexture] 
				// 
				

				export let refreshRate = undefined // [number] 
				// 
				

				export let renderList = undefined // [nullable] 
				// 
				

				export let samples = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let metadata = undefined // [any] 
				// gets or sets an object used to store user defined information for the reflection probe.
				

				export let position = undefined // [vector3] 
				// gets or sets probe position (center of the cube map)
				

				// ================ METHODS ================

				
				export let attachToMesh = (...args) => instance.attachToMesh(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setRenderingAutoClearDepthStencil = (...args) => instance.setRenderingAutoClearDepthStencil(...args)

				export let toString = (...args) => instance.toString(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ReflectionProbe]`, ...args) : null

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
				if (size != undefined) instance.size = size?.instance || size
				size = instance.size
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (generateMipMaps != undefined) instance.generateMipMaps = generateMipMaps?.instance || generateMipMaps
				generateMipMaps = instance.generateMipMaps
				if (useFloat != undefined) instance.useFloat = useFloat?.instance || useFloat
				useFloat = instance.useFloat
				if (linearSpace != undefined) instance.linearSpace = linearSpace?.instance || linearSpace
				linearSpace = instance.linearSpace

				cubeTexture = instance.cubeTexture
				if (refreshRate != undefined) instance.refreshRate = refreshRate?.instance || refreshRate
				refreshRate = instance.refreshRate

				renderList = instance.renderList
				if (samples != undefined) instance.samples = samples?.instance || samples
				samples = instance.samples
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position

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

			