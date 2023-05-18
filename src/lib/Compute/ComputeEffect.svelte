
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					baseName  * required
					options  * required
					engine  * required
					key   
					defines  
					name  
					onBindObservable  
					onCompileObservable  
					onCompiled  
					onError  
					onErrorObservable  
					uniqueId  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let baseName = undefined // [any] * required
				// name of the effect
				

				export let options = undefined // [icomputeeffectcreationoptions] * required
				// set of all options to create the effect
				

				export let engine = undefined // [engine] * required
				// the engine the effect is created for
				

				export let key = undefined // [string] 
				// effect key identifying uniquely compiled shader variants
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ComputeEffect(baseName,options,engine,key) : {}

				// ================ ACCESSORS ================

				
				export let computeSourceCode = undefined // [string] 
				// 
				

				export let rawComputeSourceCode = undefined // [string] 
				// 
				

				// ================ PROPERTIES ================

				
				export let defines = undefined // [string] 
				// string container all the define statements that should be set on the shader.
				

				export let name = undefined // [any] 
				// name of the effect.
				

				export let onBindObservable = undefined // [observable] 
				// observable that will be called when effect is bound.
				

				export let onCompileObservable = undefined // [observable] 
				// observable that will be called when the shader is compiled.it is recommended to use executewhencompile() or to make sure that scene.isready() is called to get this observable raised.
				

				export let onCompiled = undefined // [nullable] 
				// callback that will be called when the shader is compiled.
				

				export let onError = undefined // [nullable] 
				// callback that will be called if an error occurs during shader compilation.
				

				export let onErrorObservable = undefined // [observable] 
				// observable that will be called if an error occurs during shader compilation.
				

				export let uniqueId = undefined // [number] 
				// unique id of the effect.
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let executeWhenCompiled = (...args) => instance.executeWhenCompiled(...args)

				export let getCompilationError = (...args) => instance.getCompilationError(...args)

				export let getEngine = (...args) => instance.getEngine(...args)

				export let getPipelineContext = (...args) => instance.getPipelineContext(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let RegisterShader = (...args) => instance.RegisterShader(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ComputeEffect]`, ...args) : null

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

												if (baseName != undefined) instance.baseName = baseName?.instance || baseName
				baseName = instance.baseName
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (engine != undefined) instance.engine = engine?.instance || engine
				engine = instance.engine
				if (key != undefined) instance.key = key?.instance || key
				key = instance.key

				computeSourceCode = instance.computeSourceCode

				rawComputeSourceCode = instance.rawComputeSourceCode
				if (defines != undefined) instance.defines = defines?.instance || defines
				defines = instance.defines
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (onBindObservable != undefined) instance.onBindObservable = onBindObservable?.instance || onBindObservable
				onBindObservable = instance.onBindObservable
				if (onCompileObservable != undefined) instance.onCompileObservable = onCompileObservable?.instance || onCompileObservable
				onCompileObservable = instance.onCompileObservable
				if (onCompiled != undefined) instance.onCompiled = onCompiled?.instance || onCompiled
				onCompiled = instance.onCompiled
				if (onError != undefined) instance.onError = onError?.instance || onError
				onError = instance.onError
				if (onErrorObservable != undefined) instance.onErrorObservable = onErrorObservable?.instance || onErrorObservable
				onErrorObservable = instance.onErrorObservable
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId

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

			