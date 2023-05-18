
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					baseName  * required
					attributesNamesOrOptions  * required
					uniformsNamesOrEngine  * required
					samplers  
					engine  
					defines  
					fallbacks  
					onCompiled  
					onError  
					indexParameters  
					key  
					shaderLanguage   
					name  
					onBind  
					onCompileObservable  
					onErrorObservable  
					setArray  
					setArray2  
					setArray3  
					setArray4  
					setColor3  
					setColor4  
					setDirectColor4  
					setFloat  
					setFloat2  
					setFloat3  
					setFloat4  
					setInt  
					setInt2  
					setInt3  
					setInt4  
					setIntArray  
					setIntArray2  
					setIntArray3  
					setIntArray4  
					setMatrices  
					setMatrix  
					setMatrix2x2  
					setMatrix3x3  
					setQuaternion  
					setUInt  
					setUInt2  
					setUInt3  
					setUInt4  
					setUIntArray  
					setUIntArray2  
					setUIntArray3  
					setUIntArray4  
					setVector2  
					setVector3  
					setVector4  
					uniqueId  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let baseName = undefined // [any] * required
				// name of the effect.
				

				export let attributesNamesOrOptions = undefined // [union] * required
				// list of attribute names that will be passed to the shader or set of all options to create the effect.
				

				export let uniformsNamesOrEngine = undefined // [union] * required
				// list of uniform variable names that will be passed to the shader or the engine that will be used to render effect.
				

				export let samplers = undefined // [nullable] 
				// list of sampler variables that will be passed to the shader.
				

				export let engine = undefined // [thinengine] 
				// engine to be used to render the effect
				

				export let defines = undefined // [nullable] 
				// define statements to be added to the shader.
				

				export let fallbacks = undefined // [nullable] 
				// possible fallbacks for this effect to improve performance when needed.
				

				export let onCompiled = undefined // [nullable] 
				// callback that will be called when the shader is compiled.
				

				export let onError = undefined // [nullable] 
				// callback that will be called if an error occurs during shader compilation.
				

				export let indexParameters = undefined // [any] 
				// parameters to be used with babylons include syntax to iterate over an array (eg. {lights: 10})
				

				export let key = undefined // [string] 
				// effect key identifying uniquely compiled shader variants
				

				export let shaderLanguage = undefined // [shaderlanguage] 
				// the language the shader is written in (default: glsl)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Effect(baseName,attributesNamesOrOptions,uniformsNamesOrEngine,samplers,engine,defines,fallbacks,onCompiled,onError,indexParameters,key,shaderLanguage) : {}

				// ================ ACCESSORS ================

				
				export let fragmentSourceCode = undefined // [string] 
				// 
				

				export let fragmentSourceCodeBeforeMigration = undefined // [string] 
				// 
				

				export let isSupported = undefined // [boolean] 
				// 
				

				export let onBindObservable = undefined // [observable] 
				// 
				

				export let rawFragmentSourceCode = undefined // [string] 
				// 
				

				export let rawVertexSourceCode = undefined // [string] 
				// 
				

				export let vertexSourceCode = undefined // [string] 
				// 
				

				export let vertexSourceCodeBeforeMigration = undefined // [string] 
				// 
				

				// ================ PROPERTIES ================

				
				export let name = undefined // [any] 
				// name of the effect.
				

				export let onBind = undefined // [nullable] 
				// callback that will be called when effect is bound.
				

				export let onCompileObservable = undefined // [observable] 
				// observable that will be called when the shader is compiled.it is recommended to use executewhencompile() or to make sure that scene.isready() is called to get this observable raised.
				

				export let onErrorObservable = undefined // [observable] 
				// observable that will be called if an error occurs during shader compilation.
				

				export let setArray = undefined // [reflection] 
				// 
				

				export let setArray2 = undefined // [reflection] 
				// 
				

				export let setArray3 = undefined // [reflection] 
				// 
				

				export let setArray4 = undefined // [reflection] 
				// 
				

				export let setColor3 = undefined // [reflection] 
				// 
				

				export let setColor4 = undefined // [reflection] 
				// 
				

				export let setDirectColor4 = undefined // [reflection] 
				// 
				

				export let setFloat = undefined // [reflection] 
				// 
				

				export let setFloat2 = undefined // [reflection] 
				// 
				

				export let setFloat3 = undefined // [reflection] 
				// 
				

				export let setFloat4 = undefined // [reflection] 
				// 
				

				export let setInt = undefined // [reflection] 
				// 
				

				export let setInt2 = undefined // [reflection] 
				// 
				

				export let setInt3 = undefined // [reflection] 
				// 
				

				export let setInt4 = undefined // [reflection] 
				// 
				

				export let setIntArray = undefined // [reflection] 
				// 
				

				export let setIntArray2 = undefined // [reflection] 
				// 
				

				export let setIntArray3 = undefined // [reflection] 
				// 
				

				export let setIntArray4 = undefined // [reflection] 
				// 
				

				export let setMatrices = undefined // [reflection] 
				// 
				

				export let setMatrix = undefined // [reflection] 
				// 
				

				export let setMatrix2x2 = undefined // [reflection] 
				// 
				

				export let setMatrix3x3 = undefined // [reflection] 
				// 
				

				export let setQuaternion = undefined // [reflection] 
				// 
				

				export let setUInt = undefined // [reflection] 
				// 
				

				export let setUInt2 = undefined // [reflection] 
				// 
				

				export let setUInt3 = undefined // [reflection] 
				// 
				

				export let setUInt4 = undefined // [reflection] 
				// 
				

				export let setUIntArray = undefined // [reflection] 
				// 
				

				export let setUIntArray2 = undefined // [reflection] 
				// 
				

				export let setUIntArray3 = undefined // [reflection] 
				// 
				

				export let setUIntArray4 = undefined // [reflection] 
				// 
				

				export let setVector2 = undefined // [reflection] 
				// 
				

				export let setVector3 = undefined // [reflection] 
				// 
				

				export let setVector4 = undefined // [reflection] 
				// 
				

				export let uniqueId = undefined // [number] 
				// unique id of the effect.
				

				// ================ METHODS ================

				
				export let allFallbacksProcessed = (...args) => instance.allFallbacksProcessed(...args)

				export let bindUniformBlock = (...args) => instance.bindUniformBlock(...args)

				export let bindUniformBuffer = (...args) => instance.bindUniformBuffer(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let executeWhenCompiled = (...args) => instance.executeWhenCompiled(...args)

				export let getAttributeLocation = (...args) => instance.getAttributeLocation(...args)

				export let getAttributeLocationByName = (...args) => instance.getAttributeLocationByName(...args)

				export let getAttributesCount = (...args) => instance.getAttributesCount(...args)

				export let getAttributesNames = (...args) => instance.getAttributesNames(...args)

				export let getCompilationError = (...args) => instance.getCompilationError(...args)

				export let getEngine = (...args) => instance.getEngine(...args)

				export let getIndexParameters = (...args) => instance.getIndexParameters(...args)

				export let getPipelineContext = (...args) => instance.getPipelineContext(...args)

				export let getSamplers = (...args) => instance.getSamplers(...args)

				export let getUniform = (...args) => instance.getUniform(...args)

				export let getUniformBuffersNames = (...args) => instance.getUniformBuffersNames(...args)

				export let getUniformIndex = (...args) => instance.getUniformIndex(...args)

				export let getUniformNames = (...args) => instance.getUniformNames(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let setBool = (...args) => instance.setBool(...args)

				export let setDepthStencilTexture = (...args) => instance.setDepthStencilTexture(...args)

				export let setExternalTexture = (...args) => instance.setExternalTexture(...args)

				export let setFloatArray = (...args) => instance.setFloatArray(...args)

				export let setFloatArray2 = (...args) => instance.setFloatArray2(...args)

				export let setFloatArray3 = (...args) => instance.setFloatArray3(...args)

				export let setFloatArray4 = (...args) => instance.setFloatArray4(...args)

				export let setStorageBuffer = (...args) => instance.setStorageBuffer(...args)

				export let setTexture = (...args) => instance.setTexture(...args)

				export let setTextureArray = (...args) => instance.setTextureArray(...args)

				export let setTextureFromPostProcess = (...args) => instance.setTextureFromPostProcess(...args)

				export let setTextureFromPostProcessOutput = (...args) => instance.setTextureFromPostProcessOutput(...args)

				export let setTextureSampler = (...args) => instance.setTextureSampler(...args)

				export let RegisterShader = (...args) => instance.RegisterShader(...args)

				export let ResetCache = (...args) => instance.ResetCache(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Effect]`, ...args) : null

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
				if (attributesNamesOrOptions != undefined) instance.attributesNamesOrOptions = attributesNamesOrOptions?.instance || attributesNamesOrOptions
				attributesNamesOrOptions = instance.attributesNamesOrOptions
				if (uniformsNamesOrEngine != undefined) instance.uniformsNamesOrEngine = uniformsNamesOrEngine?.instance || uniformsNamesOrEngine
				uniformsNamesOrEngine = instance.uniformsNamesOrEngine
				if (samplers != undefined) instance.samplers = samplers?.instance || samplers
				samplers = instance.samplers
				if (engine != undefined) instance.engine = engine?.instance || engine
				engine = instance.engine
				if (defines != undefined) instance.defines = defines?.instance || defines
				defines = instance.defines
				if (fallbacks != undefined) instance.fallbacks = fallbacks?.instance || fallbacks
				fallbacks = instance.fallbacks
				if (onCompiled != undefined) instance.onCompiled = onCompiled?.instance || onCompiled
				onCompiled = instance.onCompiled
				if (onError != undefined) instance.onError = onError?.instance || onError
				onError = instance.onError
				if (indexParameters != undefined) instance.indexParameters = indexParameters?.instance || indexParameters
				indexParameters = instance.indexParameters
				if (key != undefined) instance.key = key?.instance || key
				key = instance.key
				if (shaderLanguage != undefined) instance.shaderLanguage = shaderLanguage?.instance || shaderLanguage
				shaderLanguage = instance.shaderLanguage

				fragmentSourceCode = instance.fragmentSourceCode

				fragmentSourceCodeBeforeMigration = instance.fragmentSourceCodeBeforeMigration

				isSupported = instance.isSupported

				onBindObservable = instance.onBindObservable

				rawFragmentSourceCode = instance.rawFragmentSourceCode

				rawVertexSourceCode = instance.rawVertexSourceCode

				vertexSourceCode = instance.vertexSourceCode

				vertexSourceCodeBeforeMigration = instance.vertexSourceCodeBeforeMigration
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (onBind != undefined) instance.onBind = onBind?.instance || onBind
				onBind = instance.onBind
				if (onCompileObservable != undefined) instance.onCompileObservable = onCompileObservable?.instance || onCompileObservable
				onCompileObservable = instance.onCompileObservable
				if (onErrorObservable != undefined) instance.onErrorObservable = onErrorObservable?.instance || onErrorObservable
				onErrorObservable = instance.onErrorObservable
				if (setArray != undefined) instance.setArray = setArray?.instance || setArray
				setArray = instance.setArray
				if (setArray2 != undefined) instance.setArray2 = setArray2?.instance || setArray2
				setArray2 = instance.setArray2
				if (setArray3 != undefined) instance.setArray3 = setArray3?.instance || setArray3
				setArray3 = instance.setArray3
				if (setArray4 != undefined) instance.setArray4 = setArray4?.instance || setArray4
				setArray4 = instance.setArray4
				if (setColor3 != undefined) instance.setColor3 = setColor3?.instance || setColor3
				setColor3 = instance.setColor3
				if (setColor4 != undefined) instance.setColor4 = setColor4?.instance || setColor4
				setColor4 = instance.setColor4
				if (setDirectColor4 != undefined) instance.setDirectColor4 = setDirectColor4?.instance || setDirectColor4
				setDirectColor4 = instance.setDirectColor4
				if (setFloat != undefined) instance.setFloat = setFloat?.instance || setFloat
				setFloat = instance.setFloat
				if (setFloat2 != undefined) instance.setFloat2 = setFloat2?.instance || setFloat2
				setFloat2 = instance.setFloat2
				if (setFloat3 != undefined) instance.setFloat3 = setFloat3?.instance || setFloat3
				setFloat3 = instance.setFloat3
				if (setFloat4 != undefined) instance.setFloat4 = setFloat4?.instance || setFloat4
				setFloat4 = instance.setFloat4
				if (setInt != undefined) instance.setInt = setInt?.instance || setInt
				setInt = instance.setInt
				if (setInt2 != undefined) instance.setInt2 = setInt2?.instance || setInt2
				setInt2 = instance.setInt2
				if (setInt3 != undefined) instance.setInt3 = setInt3?.instance || setInt3
				setInt3 = instance.setInt3
				if (setInt4 != undefined) instance.setInt4 = setInt4?.instance || setInt4
				setInt4 = instance.setInt4
				if (setIntArray != undefined) instance.setIntArray = setIntArray?.instance || setIntArray
				setIntArray = instance.setIntArray
				if (setIntArray2 != undefined) instance.setIntArray2 = setIntArray2?.instance || setIntArray2
				setIntArray2 = instance.setIntArray2
				if (setIntArray3 != undefined) instance.setIntArray3 = setIntArray3?.instance || setIntArray3
				setIntArray3 = instance.setIntArray3
				if (setIntArray4 != undefined) instance.setIntArray4 = setIntArray4?.instance || setIntArray4
				setIntArray4 = instance.setIntArray4
				if (setMatrices != undefined) instance.setMatrices = setMatrices?.instance || setMatrices
				setMatrices = instance.setMatrices
				if (setMatrix != undefined) instance.setMatrix = setMatrix?.instance || setMatrix
				setMatrix = instance.setMatrix
				if (setMatrix2x2 != undefined) instance.setMatrix2x2 = setMatrix2x2?.instance || setMatrix2x2
				setMatrix2x2 = instance.setMatrix2x2
				if (setMatrix3x3 != undefined) instance.setMatrix3x3 = setMatrix3x3?.instance || setMatrix3x3
				setMatrix3x3 = instance.setMatrix3x3
				if (setQuaternion != undefined) instance.setQuaternion = setQuaternion?.instance || setQuaternion
				setQuaternion = instance.setQuaternion
				if (setUInt != undefined) instance.setUInt = setUInt?.instance || setUInt
				setUInt = instance.setUInt
				if (setUInt2 != undefined) instance.setUInt2 = setUInt2?.instance || setUInt2
				setUInt2 = instance.setUInt2
				if (setUInt3 != undefined) instance.setUInt3 = setUInt3?.instance || setUInt3
				setUInt3 = instance.setUInt3
				if (setUInt4 != undefined) instance.setUInt4 = setUInt4?.instance || setUInt4
				setUInt4 = instance.setUInt4
				if (setUIntArray != undefined) instance.setUIntArray = setUIntArray?.instance || setUIntArray
				setUIntArray = instance.setUIntArray
				if (setUIntArray2 != undefined) instance.setUIntArray2 = setUIntArray2?.instance || setUIntArray2
				setUIntArray2 = instance.setUIntArray2
				if (setUIntArray3 != undefined) instance.setUIntArray3 = setUIntArray3?.instance || setUIntArray3
				setUIntArray3 = instance.setUIntArray3
				if (setUIntArray4 != undefined) instance.setUIntArray4 = setUIntArray4?.instance || setUIntArray4
				setUIntArray4 = instance.setUIntArray4
				if (setVector2 != undefined) instance.setVector2 = setVector2?.instance || setVector2
				setVector2 = instance.setVector2
				if (setVector3 != undefined) instance.setVector3 = setVector3?.instance || setVector3
				setVector3 = instance.setVector3
				if (setVector4 != undefined) instance.setVector4 = setVector4?.instance || setVector4
				setVector4 = instance.setVector4
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

			