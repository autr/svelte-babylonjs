
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required
					type  
					camera  
					storeNonLinearDepth  
					samplingMode  
					storeCameraSpaceZ  
					name   
					clearColor  
					enabled  
					forceDepthWriteTransparentMeshes  
					isPacked (readonly) 
					reverseCulling  
					useOnlyInActiveCamera  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// the scene the renderer belongs to
				

				export let type = undefined // [number] 
				// the texture type of the depth map (default: engine.texturetype_float)
				

				export let camera = undefined // [nullable] 
				// the camera to be used to render the depth map (default: scene's active camera)
				

				export let storeNonLinearDepth = undefined // [boolean] 
				// defines whether the depth is stored linearly like in babylon shadows or directly like glfragcoord.z
				

				export let samplingMode = undefined // [number] 
				// the sampling mode to be used with the render target (linear, nearest...) (default: trilinear_samplingmode)
				

				export let storeCameraSpaceZ = undefined // [boolean] 
				// defines whether the depth stored is the z coordinate in camera space. if true, storenonlineardepth has no effect. (default: false)
				

				export let name = undefined // [string] 
				// name of the render target (default: depthrenderer)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.DepthRenderer(scene,type,camera,storeNonLinearDepth,samplingMode,storeCameraSpaceZ,name) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let clearColor = undefined // [color4] 
				// color used to clear the depth texture. default: (1,0,0,1)
				

				export let enabled = undefined // [boolean] 
				// enable or disable the depth renderer. when disabled, the depth texture is not updated
				

				export let forceDepthWriteTransparentMeshes = undefined // [boolean] 
				// force writing the transparent objects into the depth map
				

				export let isPacked = undefined // [boolean] 
				// get if the depth renderer is using packed depth or not
				

				export let reverseCulling = undefined // [boolean] 
				// if true, reverse the culling of materials before writing to the depth texture.so, basically, when "true", back facing instead of front facing faces are rasterized into the texture
				

				export let useOnlyInActiveCamera = undefined // [boolean] 
				// specifies that the depth renderer will only be used withinthe camera it is created for.this can help forcing its rendering during the camera processing.
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getDepthMap = (...args) => instance.getDepthMap(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let setMaterialForRendering = (...args) => instance.setMaterialForRendering(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:DepthRenderer]`, ...args) : null

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
				if (type != undefined) instance.type = type?.instance || type
				type = instance.type
				if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (storeNonLinearDepth != undefined) instance.storeNonLinearDepth = storeNonLinearDepth?.instance || storeNonLinearDepth
				storeNonLinearDepth = instance.storeNonLinearDepth
				if (samplingMode != undefined) instance.samplingMode = samplingMode?.instance || samplingMode
				samplingMode = instance.samplingMode
				if (storeCameraSpaceZ != undefined) instance.storeCameraSpaceZ = storeCameraSpaceZ?.instance || storeCameraSpaceZ
				storeCameraSpaceZ = instance.storeCameraSpaceZ
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (clearColor != undefined) instance.clearColor = clearColor?.instance || clearColor
				clearColor = instance.clearColor
				if (enabled != undefined) instance.enabled = enabled?.instance || enabled
				enabled = instance.enabled
				if (forceDepthWriteTransparentMeshes != undefined) instance.forceDepthWriteTransparentMeshes = forceDepthWriteTransparentMeshes?.instance || forceDepthWriteTransparentMeshes
				forceDepthWriteTransparentMeshes = instance.forceDepthWriteTransparentMeshes
				if (reverseCulling != undefined) instance.reverseCulling = reverseCulling?.instance || reverseCulling
				reverseCulling = instance.reverseCulling
				if (useOnlyInActiveCamera != undefined) instance.useOnlyInActiveCamera = useOnlyInActiveCamera?.instance || useOnlyInActiveCamera
				useOnlyInActiveCamera = instance.useOnlyInActiveCamera

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

			