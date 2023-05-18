
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					engine  * required 
					isAsync  
					isReady  
					nativeProgram  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let engine = undefined // [nativeengine] * required
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.NativePipelineContext(engine) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let isAsync = undefined // [boolean] 
				// gets a boolean indicating that this pipeline context is supporting asynchronous creating
				

				export let isReady = undefined // [boolean] 
				// gets a boolean indicating that the context is ready to be used (like shaders / pipelines are compiled and ready for instance)
				

				export let nativeProgram = undefined // [any] 
				// 
				

				// ================ METHODS ================

				
				export let _fillEffectInformation = (...args) => instance._fillEffectInformation(...args)

				export let _getFragmentShaderCode = (...args) => instance._getFragmentShaderCode(...args)

				export let _getVertexShaderCode = (...args) => instance._getVertexShaderCode(...args)

				export let _handlesSpectorRebuildCallback = (...args) => instance._handlesSpectorRebuildCallback(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let setArray = (...args) => instance.setArray(...args)

				export let setArray2 = (...args) => instance.setArray2(...args)

				export let setArray3 = (...args) => instance.setArray3(...args)

				export let setArray4 = (...args) => instance.setArray4(...args)

				export let setBool = (...args) => instance.setBool(...args)

				export let setColor3 = (...args) => instance.setColor3(...args)

				export let setColor4 = (...args) => instance.setColor4(...args)

				export let setDirectColor4 = (...args) => instance.setDirectColor4(...args)

				export let setFloat = (...args) => instance.setFloat(...args)

				export let setFloat2 = (...args) => instance.setFloat2(...args)

				export let setFloat3 = (...args) => instance.setFloat3(...args)

				export let setFloat4 = (...args) => instance.setFloat4(...args)

				export let setFloatArray = (...args) => instance.setFloatArray(...args)

				export let setFloatArray2 = (...args) => instance.setFloatArray2(...args)

				export let setFloatArray3 = (...args) => instance.setFloatArray3(...args)

				export let setFloatArray4 = (...args) => instance.setFloatArray4(...args)

				export let setInt = (...args) => instance.setInt(...args)

				export let setInt2 = (...args) => instance.setInt2(...args)

				export let setInt3 = (...args) => instance.setInt3(...args)

				export let setInt4 = (...args) => instance.setInt4(...args)

				export let setIntArray = (...args) => instance.setIntArray(...args)

				export let setIntArray2 = (...args) => instance.setIntArray2(...args)

				export let setIntArray3 = (...args) => instance.setIntArray3(...args)

				export let setIntArray4 = (...args) => instance.setIntArray4(...args)

				export let setMatrices = (...args) => instance.setMatrices(...args)

				export let setMatrix = (...args) => instance.setMatrix(...args)

				export let setMatrix2x2 = (...args) => instance.setMatrix2x2(...args)

				export let setMatrix3x3 = (...args) => instance.setMatrix3x3(...args)

				export let setQuaternion = (...args) => instance.setQuaternion(...args)

				export let setUInt = (...args) => instance.setUInt(...args)

				export let setUInt2 = (...args) => instance.setUInt2(...args)

				export let setUInt3 = (...args) => instance.setUInt3(...args)

				export let setUInt4 = (...args) => instance.setUInt4(...args)

				export let setUIntArray = (...args) => instance.setUIntArray(...args)

				export let setUIntArray2 = (...args) => instance.setUIntArray2(...args)

				export let setUIntArray3 = (...args) => instance.setUIntArray3(...args)

				export let setUIntArray4 = (...args) => instance.setUIntArray4(...args)

				export let setVector2 = (...args) => instance.setVector2(...args)

				export let setVector3 = (...args) => instance.setVector3(...args)

				export let setVector4 = (...args) => instance.setVector4(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:NativePipelineContext]`, ...args) : null

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

												if (engine != undefined) instance.engine = engine?.instance || engine
				engine = instance.engine
				if (isAsync != undefined) instance.isAsync = isAsync?.instance || isAsync
				isAsync = instance.isAsync
				if (isReady != undefined) instance.isReady = isReady?.instance || isReady
				isReady = instance.isReady
				if (nativeProgram != undefined) instance.nativeProgram = nativeProgram?.instance || nativeProgram
				nativeProgram = instance.nativeProgram

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

			