
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					parameters  * required
					scene  * required
					ratio  
					cameras   
					inspectableCustomProperties  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// the rendering pipeline name
				

				export let parameters = undefined // [any] * required
				// an object containing all parameters (see above)
				

				export let scene = undefined // [scene] * required
				// the scene linked to this pipeline
				

				export let ratio = undefined // [number] 
				// the size of the postprocesses (0.5 means that your postprocess will have a width = canvas.width 0.5 and a height = canvas.height 0.5)
				

				export let cameras = undefined // [array] 
				// the array of cameras that the rendering pipeline will be attached to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.LensRenderingPipeline(name,parameters,scene,ratio,cameras) : {}

				// ================ ACCESSORS ================

				
				export let blurNoise = undefined // [boolean] 
				// 
				

				export let chromaticAberration = undefined // [number] 
				// 
				

				export let darkenOutOfFocus = undefined // [number] 
				// 
				

				export let dofAperture = undefined // [number] 
				// 
				

				export let dofDistortion = undefined // [number] 
				// 
				

				export let edgeBlur = undefined // [number] 
				// 
				

				export let edgeDistortion = undefined // [number] 
				// 
				

				export let grainAmount = undefined // [number] 
				// 
				

				export let highlightsGain = undefined // [number] 
				// 
				

				export let highlightsThreshold = undefined // [number] 
				// 
				

				export let isSupported = undefined // [boolean] 
				// 
				

				export let pentagonBokeh = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				// ================ METHODS ================

				
				export let addEffect = (...args) => instance.addEffect(...args)

				export let disableChromaticAberration = (...args) => instance.disableChromaticAberration(...args)

				export let disableDepthOfField = (...args) => instance.disableDepthOfField(...args)

				export let disableEdgeBlur = (...args) => instance.disableEdgeBlur(...args)

				export let disableEdgeDistortion = (...args) => instance.disableEdgeDistortion(...args)

				export let disableGrain = (...args) => instance.disableGrain(...args)

				export let disableHighlights = (...args) => instance.disableHighlights(...args)

				export let disableNoiseBlur = (...args) => instance.disableNoiseBlur(...args)

				export let disablePentagonBokeh = (...args) => instance.disablePentagonBokeh(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let enableNoiseBlur = (...args) => instance.enableNoiseBlur(...args)

				export let enablePentagonBokeh = (...args) => instance.enablePentagonBokeh(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let setAperture = (...args) => instance.setAperture(...args)

				export let setChromaticAberration = (...args) => instance.setChromaticAberration(...args)

				export let setDarkenOutOfFocus = (...args) => instance.setDarkenOutOfFocus(...args)

				export let setEdgeBlur = (...args) => instance.setEdgeBlur(...args)

				export let setEdgeDistortion = (...args) => instance.setEdgeDistortion(...args)

				export let setFocusDistance = (...args) => instance.setFocusDistance(...args)

				export let setGrainAmount = (...args) => instance.setGrainAmount(...args)

				export let setHighlightsGain = (...args) => instance.setHighlightsGain(...args)

				export let setHighlightsThreshold = (...args) => instance.setHighlightsThreshold(...args)

				export let setPrePassRenderer = (...args) => instance.setPrePassRenderer(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:LensRenderingPipeline]`, ...args) : null

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
				if (parameters != undefined) instance.parameters = parameters?.instance || parameters
				parameters = instance.parameters
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (ratio != undefined) instance.ratio = ratio?.instance || ratio
				ratio = instance.ratio
				if (cameras != undefined) instance.cameras = cameras?.instance || cameras
				cameras = instance.cameras
				if (blurNoise != undefined) instance.blurNoise = blurNoise?.instance || blurNoise
				blurNoise = instance.blurNoise
				if (chromaticAberration != undefined) instance.chromaticAberration = chromaticAberration?.instance || chromaticAberration
				chromaticAberration = instance.chromaticAberration
				if (darkenOutOfFocus != undefined) instance.darkenOutOfFocus = darkenOutOfFocus?.instance || darkenOutOfFocus
				darkenOutOfFocus = instance.darkenOutOfFocus
				if (dofAperture != undefined) instance.dofAperture = dofAperture?.instance || dofAperture
				dofAperture = instance.dofAperture
				if (dofDistortion != undefined) instance.dofDistortion = dofDistortion?.instance || dofDistortion
				dofDistortion = instance.dofDistortion
				if (edgeBlur != undefined) instance.edgeBlur = edgeBlur?.instance || edgeBlur
				edgeBlur = instance.edgeBlur
				if (edgeDistortion != undefined) instance.edgeDistortion = edgeDistortion?.instance || edgeDistortion
				edgeDistortion = instance.edgeDistortion
				if (grainAmount != undefined) instance.grainAmount = grainAmount?.instance || grainAmount
				grainAmount = instance.grainAmount
				if (highlightsGain != undefined) instance.highlightsGain = highlightsGain?.instance || highlightsGain
				highlightsGain = instance.highlightsGain
				if (highlightsThreshold != undefined) instance.highlightsThreshold = highlightsThreshold?.instance || highlightsThreshold
				highlightsThreshold = instance.highlightsThreshold

				isSupported = instance.isSupported
				if (pentagonBokeh != undefined) instance.pentagonBokeh = pentagonBokeh?.instance || pentagonBokeh
				pentagonBokeh = instance.pentagonBokeh
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties

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

			