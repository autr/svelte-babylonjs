
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required
					ratio  
					depthFormat   
					excludedSkinnedMeshesFromVelocity  
					renderTransparentMeshes  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// the scene the buffer belongs to
				

				export let ratio = undefined // [number] 
				// how big is the buffer related to the main canvas (default: 1)
				

				export let depthFormat = undefined // [number] 
				// format of the depth texture (default: constants.textureformat_depth16)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.GeometryBufferRenderer(scene,ratio,depthFormat) : {}

				// ================ ACCESSORS ================

				
				export let enablePosition = undefined // [boolean] 
				// 
				

				export let enableReflectivity = undefined // [boolean] 
				// 
				

				export let enableVelocity = undefined // [boolean] 
				// 
				

				export let isSupported = undefined // [boolean] 
				// 
				

				export let renderList = undefined // [nullable] 
				// 
				

				export let samples = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let excludedSkinnedMeshesFromVelocity = undefined // [array] 
				// array used to store the ignored skinned meshes while computing velocity map (typically used by the motion blur post-process).avoids computing bones velocities and computes only mesh's velocity itself (position, rotation, scaling).
				

				export let renderTransparentMeshes = undefined // [boolean] 
				// gets or sets a boolean indicating if transparent meshes should be rendered
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getGBuffer = (...args) => instance.getGBuffer(...args)

				export let getTextureIndex = (...args) => instance.getTextureIndex(...args)

				export let isReady = (...args) => instance.isReady(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:GeometryBufferRenderer]`, ...args) : null

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
				if (ratio != undefined) instance.ratio = ratio?.instance || ratio
				ratio = instance.ratio
				if (depthFormat != undefined) instance.depthFormat = depthFormat?.instance || depthFormat
				depthFormat = instance.depthFormat
				if (enablePosition != undefined) instance.enablePosition = enablePosition?.instance || enablePosition
				enablePosition = instance.enablePosition
				if (enableReflectivity != undefined) instance.enableReflectivity = enableReflectivity?.instance || enableReflectivity
				enableReflectivity = instance.enableReflectivity
				if (enableVelocity != undefined) instance.enableVelocity = enableVelocity?.instance || enableVelocity
				enableVelocity = instance.enableVelocity

				isSupported = instance.isSupported
				if (renderList != undefined) instance.renderList = renderList?.instance || renderList
				renderList = instance.renderList
				if (samples != undefined) instance.samples = samples?.instance || samples
				samples = instance.samples
				if (excludedSkinnedMeshesFromVelocity != undefined) instance.excludedSkinnedMeshesFromVelocity = excludedSkinnedMeshesFromVelocity?.instance || excludedSkinnedMeshesFromVelocity
				excludedSkinnedMeshesFromVelocity = instance.excludedSkinnedMeshesFromVelocity
				if (renderTransparentMeshes != undefined) instance.renderTransparentMeshes = renderTransparentMeshes?.instance || renderTransparentMeshes
				renderTransparentMeshes = instance.renderTransparentMeshes

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

			