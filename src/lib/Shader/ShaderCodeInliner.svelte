
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					sourceCode  * required
					numMaxIterations   
					debug  
					inlineToken  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let sourceCode = undefined // [string] * required
				// shader code source to inline
				

				export let numMaxIterations = undefined // [number] 
				// maximum number of iterations (used to detect recursive calls)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ShaderCodeInliner(sourceCode,numMaxIterations) : {}

				// ================ ACCESSORS ================

				
				export let code = undefined // [string] 
				// 
				

				// ================ PROPERTIES ================

				
				export let debug = undefined // [boolean] 
				// gets or sets the debug mode
				

				export let inlineToken = undefined // [string] 
				// gets or sets the token used to mark the functions to inline
				

				// ================ METHODS ================

				
				export let processCode = (...args) => instance.processCode(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ShaderCodeInliner]`, ...args) : null

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

												if (sourceCode != undefined) instance.sourceCode = sourceCode?.instance || sourceCode
				sourceCode = instance.sourceCode
				if (numMaxIterations != undefined) instance.numMaxIterations = numMaxIterations?.instance || numMaxIterations
				numMaxIterations = instance.numMaxIterations

				code = instance.code
				if (debug != undefined) instance.debug = debug?.instance || debug
				debug = instance.debug
				if (inlineToken != undefined) instance.inlineToken = inlineToken?.instance || inlineToken
				inlineToken = instance.inlineToken

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

			