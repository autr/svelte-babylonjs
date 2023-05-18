
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					scene  * required
					ratio  * required
					cameras  
					forceGeometryBuffer  
					textureType   
					base  
					inspectableCustomProperties  
					maxZ  
					minZAspect  
					radius  
					totalStrength  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// the rendering pipeline name
				

				export let scene = undefined // [scene] * required
				// the scene linked to this pipeline
				

				export let ratio = undefined // [any] * required
				// the size of the postprocesses. can be a number shared between passes or an object for more precision: { ssaoratio: 0.5, blurratio: 1.0 }
				

				export let cameras = undefined // [array] 
				// the array of cameras that the rendering pipeline will be attached to
				

				export let forceGeometryBuffer = undefined // [boolean] 
				// set to true if you want to use the legacy geometry buffer renderer
				

				export let textureType = undefined // [number] 
				// the texture type used by the different post processes created by ssao (default: constants.texturetype_unsigned_int)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SSAO2RenderingPipeline(name,scene,ratio,cameras,forceGeometryBuffer,textureType) : {}

				// ================ ACCESSORS ================

				
				export let expensiveBlur = undefined // [boolean] 
				// 
				

				export let isSupported = undefined // [boolean] 
				// 
				

				export let samples = undefined // [number] 
				// 
				

				export let textureSamples = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let base = undefined // [number] 
				// the base color of the ssao post-processthe final result is "base + ssao" between [0, 1]
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let maxZ = undefined // [number] 
				// maximum depth value to still render ao. a smooth falloff makes the dimming more natural, so there will be no abrupt shading change.
				

				export let minZAspect = undefined // [number] 
				// in order to save performances, ssao radius is clamped on close geometry. this ratio changes by how much
				

				export let radius = undefined // [number] 
				// the radius around the analyzed pixel used by the ssao post-process. default value is 2.0
				

				export let totalStrength = undefined // [number] 
				// the output strength of the ssao post-process. default value is 1.0.
				

				// ================ METHODS ================

				
				export let addEffect = (...args) => instance.addEffect(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setPrePassRenderer = (...args) => instance.setPrePassRenderer(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SSAO2RenderingPipeline]`, ...args) : null

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
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (ratio != undefined) instance.ratio = ratio?.instance || ratio
				ratio = instance.ratio
				if (cameras != undefined) instance.cameras = cameras?.instance || cameras
				cameras = instance.cameras
				if (forceGeometryBuffer != undefined) instance.forceGeometryBuffer = forceGeometryBuffer?.instance || forceGeometryBuffer
				forceGeometryBuffer = instance.forceGeometryBuffer
				if (textureType != undefined) instance.textureType = textureType?.instance || textureType
				textureType = instance.textureType
				if (expensiveBlur != undefined) instance.expensiveBlur = expensiveBlur?.instance || expensiveBlur
				expensiveBlur = instance.expensiveBlur

				isSupported = instance.isSupported
				if (samples != undefined) instance.samples = samples?.instance || samples
				samples = instance.samples
				if (textureSamples != undefined) instance.textureSamples = textureSamples?.instance || textureSamples
				textureSamples = instance.textureSamples
				if (base != undefined) instance.base = base?.instance || base
				base = instance.base
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
				if (maxZ != undefined) instance.maxZ = maxZ?.instance || maxZ
				maxZ = instance.maxZ
				if (minZAspect != undefined) instance.minZAspect = minZAspect?.instance || minZAspect
				minZAspect = instance.minZAspect
				if (radius != undefined) instance.radius = radius?.instance || radius
				radius = instance.radius
				if (totalStrength != undefined) instance.totalStrength = totalStrength?.instance || totalStrength
				totalStrength = instance.totalStrength

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

			