
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					engine  * required
					shaderPath  * required
					options   
					onCompiled  
					onError  
					uniqueId (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the name of the compute shader in the scene
				

				export let engine = undefined // [thinengine] * required
				// defines the engine the compute shader belongs to
				

				export let shaderPath = undefined // [any] * required
				// defines  the route to the shader code in one of three ways: * object: { compute: "custom" }, used with shaderstore.shadersstorewgsl["customcomputeshader"] * object: { computeelement: "htmlelementid" }, used with shader code in script tags * object: { computesource: "compute shader code string" using with string containing the shader code * string: try first to find the code in shaderstore.shadersstorewgsl[shaderpath + "computeshader"]. if not, assumes it is a file with name shaderpath.compute.fx in index.html folder.
				

				export let options = undefined // [partial] 
				// define the options used to create the shader
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ComputeShader(name,engine,shaderPath,options) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let onCompiled = undefined // [nullable] 
				// callback triggered when the shader is compiled
				

				export let onError = undefined // [nullable] 
				// callback triggered when an error occurs
				

				export let uniqueId = undefined // [number] 
				// gets the unique id of the compute shader
				

				// ================ METHODS ================

				
				export let dispatch = (...args) => instance.dispatch(...args)

				export let dispatchWhenReady = (...args) => instance.dispatchWhenReady(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setStorageBuffer = (...args) => instance.setStorageBuffer(...args)

				export let setStorageTexture = (...args) => instance.setStorageTexture(...args)

				export let setTexture = (...args) => instance.setTexture(...args)

				export let setTextureSampler = (...args) => instance.setTextureSampler(...args)

				export let setUniformBuffer = (...args) => instance.setUniformBuffer(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ComputeShader]`, ...args) : null

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
				if (engine != undefined) instance.engine = engine?.instance || engine
				engine = instance.engine
				if (shaderPath != undefined) instance.shaderPath = shaderPath?.instance || shaderPath
				shaderPath = instance.shaderPath
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (onCompiled != undefined) instance.onCompiled = onCompiled?.instance || onCompiled
				onCompiled = instance.onCompiled
				if (onError != undefined) instance.onError = onError?.instance || onError
				onError = instance.onError

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

			