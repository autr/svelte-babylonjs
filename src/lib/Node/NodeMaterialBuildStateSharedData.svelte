
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					allowEmptyVertexProgram  
					animatedInputs  
					bindableBlocks  
					blockingBlocks  
					blocksWithDefines  
					blocksWithFallbacks  
					buildId  
					checks  
					defineNames  
					dynamicUniformBlocks  
					emitComments  
					forcedBindableBlocks  
					fragmentOutputNodes  
					hints  
					inputBlocks  
					repeatableContentBlocks  
					scene  
					temps  
					textureBlocks  
					variableNames  
					varyingDeclaration  
					varyings  
					verbose  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.NodeMaterialBuildStateSharedData() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let allowEmptyVertexProgram = undefined // [boolean] 
				// is vertex program allowed to be empty?
				

				export let animatedInputs = undefined // [array] 
				// gets the list of animated inputs
				

				export let bindableBlocks = undefined // [array] 
				// bindable blocks (blocks that need to set data to the effect)
				

				export let blockingBlocks = undefined // [array] 
				// list of blocks that can block the isready function for the material
				

				export let blocksWithDefines = undefined // [array] 
				// list of blocks that can provide a define update
				

				export let blocksWithFallbacks = undefined // [array] 
				// list of blocks that can provide a compilation fallback
				

				export let buildId = undefined // [number] 
				// build id used to avoid multiple recompilations
				

				export let checks = undefined // [reflection] 
				// list of compilation checks
				

				export let defineNames = undefined // [reflection] 
				// list of emitted defines
				

				export let dynamicUniformBlocks = undefined // [array] 
				// list of blocks that can provide a dynamic list of uniforms
				

				export let emitComments = undefined // [boolean] 
				// should emit comments?
				

				export let forcedBindableBlocks = undefined // [array] 
				// bindable blocks (blocks that need to set data to the effect) that will always be called (by bindforsubmesh), contrary to bindableblocks that won't be called if _mustrebind() returns false
				

				export let fragmentOutputNodes = undefined // [typeoperator] 
				// list of the fragment output nodes
				

				export let hints = undefined // [reflection] 
				// gets the compilation hints emitted at compilation time
				

				export let inputBlocks = undefined // [array] 
				// input blocks
				

				export let repeatableContentBlocks = undefined // [array] 
				// list of blocks that can provide a repeatable content
				

				export let scene = undefined // [scene] 
				// gets or sets the hosting scene
				

				export let temps = undefined // [array] 
				// gets the list of emitted varyings
				

				export let textureBlocks = undefined // [array] 
				// input blocks
				

				export let variableNames = undefined // [reflection] 
				// list of emitted variables
				

				export let varyingDeclaration = undefined // [string] 
				// gets the varying declaration string
				

				export let varyings = undefined // [array] 
				// gets the list of emitted varyings
				

				export let verbose = undefined // [boolean] 
				// emit build activity
				

				// ================ METHODS ================

				
				export let emitErrors = (...args) => instance.emitErrors(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:NodeMaterialBuildStateSharedData]`, ...args) : null

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

												if (allowEmptyVertexProgram != undefined) instance.allowEmptyVertexProgram = allowEmptyVertexProgram?.instance || allowEmptyVertexProgram
				allowEmptyVertexProgram = instance.allowEmptyVertexProgram
				if (animatedInputs != undefined) instance.animatedInputs = animatedInputs?.instance || animatedInputs
				animatedInputs = instance.animatedInputs
				if (bindableBlocks != undefined) instance.bindableBlocks = bindableBlocks?.instance || bindableBlocks
				bindableBlocks = instance.bindableBlocks
				if (blockingBlocks != undefined) instance.blockingBlocks = blockingBlocks?.instance || blockingBlocks
				blockingBlocks = instance.blockingBlocks
				if (blocksWithDefines != undefined) instance.blocksWithDefines = blocksWithDefines?.instance || blocksWithDefines
				blocksWithDefines = instance.blocksWithDefines
				if (blocksWithFallbacks != undefined) instance.blocksWithFallbacks = blocksWithFallbacks?.instance || blocksWithFallbacks
				blocksWithFallbacks = instance.blocksWithFallbacks
				if (buildId != undefined) instance.buildId = buildId?.instance || buildId
				buildId = instance.buildId
				if (checks != undefined) instance.checks = checks?.instance || checks
				checks = instance.checks
				if (defineNames != undefined) instance.defineNames = defineNames?.instance || defineNames
				defineNames = instance.defineNames
				if (dynamicUniformBlocks != undefined) instance.dynamicUniformBlocks = dynamicUniformBlocks?.instance || dynamicUniformBlocks
				dynamicUniformBlocks = instance.dynamicUniformBlocks
				if (emitComments != undefined) instance.emitComments = emitComments?.instance || emitComments
				emitComments = instance.emitComments
				if (forcedBindableBlocks != undefined) instance.forcedBindableBlocks = forcedBindableBlocks?.instance || forcedBindableBlocks
				forcedBindableBlocks = instance.forcedBindableBlocks
				if (fragmentOutputNodes != undefined) instance.fragmentOutputNodes = fragmentOutputNodes?.instance || fragmentOutputNodes
				fragmentOutputNodes = instance.fragmentOutputNodes
				if (hints != undefined) instance.hints = hints?.instance || hints
				hints = instance.hints
				if (inputBlocks != undefined) instance.inputBlocks = inputBlocks?.instance || inputBlocks
				inputBlocks = instance.inputBlocks
				if (repeatableContentBlocks != undefined) instance.repeatableContentBlocks = repeatableContentBlocks?.instance || repeatableContentBlocks
				repeatableContentBlocks = instance.repeatableContentBlocks
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (temps != undefined) instance.temps = temps?.instance || temps
				temps = instance.temps
				if (textureBlocks != undefined) instance.textureBlocks = textureBlocks?.instance || textureBlocks
				textureBlocks = instance.textureBlocks
				if (variableNames != undefined) instance.variableNames = variableNames?.instance || variableNames
				variableNames = instance.variableNames
				if (varyingDeclaration != undefined) instance.varyingDeclaration = varyingDeclaration?.instance || varyingDeclaration
				varyingDeclaration = instance.varyingDeclaration
				if (varyings != undefined) instance.varyings = varyings?.instance || varyings
				varyings = instance.varyings
				if (verbose != undefined) instance.verbose = verbose?.instance || verbose
				verbose = instance.verbose

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

			