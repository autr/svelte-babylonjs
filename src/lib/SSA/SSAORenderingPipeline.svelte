
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
					area  
					base  
					fallOff  
					inspectableCustomProperties  
					radius  
					totalStrength  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// the rendering pipeline name
				

				export let scene = undefined // [scene] * required
				// the scene linked to this pipeline
				

				export let ratio = undefined // [any] * required
				// the size of the postprocesses. can be a number shared between passes or an object for more precision: { ssaoratio: 0.5, combineratio: 1.0 }
				

				export let cameras = undefined // [array] 
				// the array of cameras that the rendering pipeline will be attached to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SSAORenderingPipeline(name,scene,ratio,cameras) : {}

				// ================ ACCESSORS ================

				
				export let isSupported = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let area = undefined // [number] 
				// related to falloff, used to interpolate ssao samples (first interpolate function input) based on the occlusion difference of each pixelmust not be equal to falloff and superior to falloff.default value is 0.0075
				

				export let base = undefined // [number] 
				// the base color of the ssao post-processthe final result is "base + ssao" between [0, 1]
				

				export let fallOff = undefined // [number] 
				// related to area, used to interpolate ssao samples (second interpolate function input) based on the occlusion difference of each pixelmust not be equal to area and inferior to area.default value is 0.000001
				

				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				export let radius = undefined // [number] 
				// the radius around the analyzed pixel used by the ssao post-process. default value is 0.0006
				

				export let totalStrength = undefined // [number] 
				// the output strength of the ssao post-process. default value is 1.0.
				

				// ================ METHODS ================

				
				export let addEffect = (...args) => instance.addEffect(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let setPrePassRenderer = (...args) => instance.setPrePassRenderer(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SSAORenderingPipeline]`, ...args) : null

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

				isSupported = instance.isSupported
				if (area != undefined) instance.area = area?.instance || area
				area = instance.area
				if (base != undefined) instance.base = base?.instance || base
				base = instance.base
				if (fallOff != undefined) instance.fallOff = fallOff?.instance || fallOff
				fallOff = instance.fallOff
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties
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

			