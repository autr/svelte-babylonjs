
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					source  * required
					epsilon  
					checkVerticesInsteadOfIndices   
					customInstances  
					edgesWidthScalerForOrthographic  
					edgesWidthScalerForPerspective  
					isEnabled  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let source = undefined // [abstractmesh] * required
				// linemesh used to generate edges
				

				export let epsilon = undefined // [number] 
				// not important (specified angle for edge detection)
				

				export let checkVerticesInsteadOfIndices = undefined // [boolean] 
				// not important for linemesh
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.LineEdgesRenderer(source,epsilon,checkVerticesInsteadOfIndices) : {}

				// ================ ACCESSORS ================

				
				export let lineShader = undefined // [shadermaterial] 
				// 
				

				export let linesIndices = undefined // [typeoperator] 
				// 
				

				export let linesNormals = undefined // [typeoperator] 
				// 
				

				export let linesPositions = undefined // [typeoperator] 
				// 
				

				// ================ PROPERTIES ================

				
				export let customInstances = undefined // [smartarray] 
				// list of instances to render in case the source mesh has instances
				

				export let edgesWidthScalerForOrthographic = undefined // [number] 
				// define the size of the edges with an orthographic camera
				

				export let edgesWidthScalerForPerspective = undefined // [number] 
				// define the size of the edges with a perspective camera
				

				export let isEnabled = undefined // [boolean] 
				// gets or sets a boolean indicating if the edgesrenderer is active
				

				// ================ METHODS ================

				
				export let _generateEdgesLines = (...args) => instance._generateEdgesLines(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let render = (...args) => instance.render(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:LineEdgesRenderer]`, ...args) : null

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

												if (source != undefined) instance.source = source?.instance || source
				source = instance.source
				if (epsilon != undefined) instance.epsilon = epsilon?.instance || epsilon
				epsilon = instance.epsilon
				if (checkVerticesInsteadOfIndices != undefined) instance.checkVerticesInsteadOfIndices = checkVerticesInsteadOfIndices?.instance || checkVerticesInsteadOfIndices
				checkVerticesInsteadOfIndices = instance.checkVerticesInsteadOfIndices
				if (lineShader != undefined) instance.lineShader = lineShader?.instance || lineShader
				lineShader = instance.lineShader

				linesIndices = instance.linesIndices

				linesNormals = instance.linesNormals

				linesPositions = instance.linesPositions
				if (customInstances != undefined) instance.customInstances = customInstances?.instance || customInstances
				customInstances = instance.customInstances
				if (edgesWidthScalerForOrthographic != undefined) instance.edgesWidthScalerForOrthographic = edgesWidthScalerForOrthographic?.instance || edgesWidthScalerForOrthographic
				edgesWidthScalerForOrthographic = instance.edgesWidthScalerForOrthographic
				if (edgesWidthScalerForPerspective != undefined) instance.edgesWidthScalerForPerspective = edgesWidthScalerForPerspective?.instance || edgesWidthScalerForPerspective
				edgesWidthScalerForPerspective = instance.edgesWidthScalerForPerspective
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled

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

			