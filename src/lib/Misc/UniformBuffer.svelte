
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					engine  * required
					data  
					dynamic  
					name  
					forceNoUniformBuffer   
					updateArray  
					updateColor3  
					updateColor4  
					updateDirectColor4  
					updateFloat  
					updateFloat2  
					updateFloat3  
					updateFloat4  
					updateFloatArray  
					updateInt  
					updateInt2  
					updateInt3  
					updateInt4  
					updateIntArray  
					updateMatrices  
					updateMatrix  
					updateMatrix2x2  
					updateMatrix3x3  
					updateUInt  
					updateUInt2  
					updateUInt3  
					updateUInt4  
					updateUIntArray  
					updateVector3  
					updateVector4  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let engine = undefined // [thinengine] * required
				// define the engine the buffer is associated with
				

				export let data = undefined // [array] 
				// define the data contained in the buffer
				

				export let dynamic = undefined // [boolean] 
				// define if the buffer is updatable
				

				export let name = undefined // [string] 
				// to assign to the buffer (debugging purpose)
				

				export let forceNoUniformBuffer = undefined // [boolean] 
				// define that this object must not rely on ubo objects
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.UniformBuffer(engine,data,dynamic,name,forceNoUniformBuffer) : {}

				// ================ ACCESSORS ================

				
				export let isSync = undefined // [boolean] 
				// 
				

				export let useUbo = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let updateArray = undefined // [reflection] 
				// 
				

				export let updateColor3 = undefined // [reflection] 
				// 
				

				export let updateColor4 = undefined // [reflection] 
				// 
				

				export let updateDirectColor4 = undefined // [reflection] 
				// 
				

				export let updateFloat = undefined // [reflection] 
				// 
				

				export let updateFloat2 = undefined // [reflection] 
				// 
				

				export let updateFloat3 = undefined // [reflection] 
				// 
				

				export let updateFloat4 = undefined // [reflection] 
				// 
				

				export let updateFloatArray = undefined // [reflection] 
				// 
				

				export let updateInt = undefined // [reflection] 
				// 
				

				export let updateInt2 = undefined // [reflection] 
				// 
				

				export let updateInt3 = undefined // [reflection] 
				// 
				

				export let updateInt4 = undefined // [reflection] 
				// 
				

				export let updateIntArray = undefined // [reflection] 
				// 
				

				export let updateMatrices = undefined // [reflection] 
				// 
				

				export let updateMatrix = undefined // [reflection] 
				// 
				

				export let updateMatrix2x2 = undefined // [reflection] 
				// 
				

				export let updateMatrix3x3 = undefined // [reflection] 
				// 
				

				export let updateUInt = undefined // [reflection] 
				// 
				

				export let updateUInt2 = undefined // [reflection] 
				// 
				

				export let updateUInt3 = undefined // [reflection] 
				// 
				

				export let updateUInt4 = undefined // [reflection] 
				// 
				

				export let updateUIntArray = undefined // [reflection] 
				// 
				

				export let updateVector3 = undefined // [reflection] 
				// 
				

				export let updateVector4 = undefined // [reflection] 
				// 
				

				// ================ METHODS ================

				
				export let addColor3 = (...args) => instance.addColor3(...args)

				export let addColor4 = (...args) => instance.addColor4(...args)

				export let addFloat2 = (...args) => instance.addFloat2(...args)

				export let addFloat3 = (...args) => instance.addFloat3(...args)

				export let addMatrix = (...args) => instance.addMatrix(...args)

				export let addMatrix2x2 = (...args) => instance.addMatrix2x2(...args)

				export let addMatrix3x3 = (...args) => instance.addMatrix3x3(...args)

				export let addUniform = (...args) => instance.addUniform(...args)

				export let addVector3 = (...args) => instance.addVector3(...args)

				export let bindToEffect = (...args) => instance.bindToEffect(...args)

				export let bindUniformBuffer = (...args) => instance.bindUniformBuffer(...args)

				export let create = (...args) => instance.create(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getBuffer = (...args) => instance.getBuffer(...args)

				export let getData = (...args) => instance.getData(...args)

				export let isDynamic = (...args) => instance.isDynamic(...args)

				export let setDataBuffer = (...args) => instance.setDataBuffer(...args)

				export let setTexture = (...args) => instance.setTexture(...args)

				export let unbindEffect = (...args) => instance.unbindEffect(...args)

				export let update = (...args) => instance.update(...args)

				export let updateUniform = (...args) => instance.updateUniform(...args)

				export let updateUniformArray = (...args) => instance.updateUniformArray(...args)

				export let updateUniformDirectly = (...args) => instance.updateUniformDirectly(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:UniformBuffer]`, ...args) : null

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
				if (data != undefined) instance.data = data?.instance || data
				data = instance.data
				if (dynamic != undefined) instance.dynamic = dynamic?.instance || dynamic
				dynamic = instance.dynamic
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (forceNoUniformBuffer != undefined) instance.forceNoUniformBuffer = forceNoUniformBuffer?.instance || forceNoUniformBuffer
				forceNoUniformBuffer = instance.forceNoUniformBuffer

				isSync = instance.isSync

				useUbo = instance.useUbo
				if (updateArray != undefined) instance.updateArray = updateArray?.instance || updateArray
				updateArray = instance.updateArray
				if (updateColor3 != undefined) instance.updateColor3 = updateColor3?.instance || updateColor3
				updateColor3 = instance.updateColor3
				if (updateColor4 != undefined) instance.updateColor4 = updateColor4?.instance || updateColor4
				updateColor4 = instance.updateColor4
				if (updateDirectColor4 != undefined) instance.updateDirectColor4 = updateDirectColor4?.instance || updateDirectColor4
				updateDirectColor4 = instance.updateDirectColor4
				if (updateFloat != undefined) instance.updateFloat = updateFloat?.instance || updateFloat
				updateFloat = instance.updateFloat
				if (updateFloat2 != undefined) instance.updateFloat2 = updateFloat2?.instance || updateFloat2
				updateFloat2 = instance.updateFloat2
				if (updateFloat3 != undefined) instance.updateFloat3 = updateFloat3?.instance || updateFloat3
				updateFloat3 = instance.updateFloat3
				if (updateFloat4 != undefined) instance.updateFloat4 = updateFloat4?.instance || updateFloat4
				updateFloat4 = instance.updateFloat4
				if (updateFloatArray != undefined) instance.updateFloatArray = updateFloatArray?.instance || updateFloatArray
				updateFloatArray = instance.updateFloatArray
				if (updateInt != undefined) instance.updateInt = updateInt?.instance || updateInt
				updateInt = instance.updateInt
				if (updateInt2 != undefined) instance.updateInt2 = updateInt2?.instance || updateInt2
				updateInt2 = instance.updateInt2
				if (updateInt3 != undefined) instance.updateInt3 = updateInt3?.instance || updateInt3
				updateInt3 = instance.updateInt3
				if (updateInt4 != undefined) instance.updateInt4 = updateInt4?.instance || updateInt4
				updateInt4 = instance.updateInt4
				if (updateIntArray != undefined) instance.updateIntArray = updateIntArray?.instance || updateIntArray
				updateIntArray = instance.updateIntArray
				if (updateMatrices != undefined) instance.updateMatrices = updateMatrices?.instance || updateMatrices
				updateMatrices = instance.updateMatrices
				if (updateMatrix != undefined) instance.updateMatrix = updateMatrix?.instance || updateMatrix
				updateMatrix = instance.updateMatrix
				if (updateMatrix2x2 != undefined) instance.updateMatrix2x2 = updateMatrix2x2?.instance || updateMatrix2x2
				updateMatrix2x2 = instance.updateMatrix2x2
				if (updateMatrix3x3 != undefined) instance.updateMatrix3x3 = updateMatrix3x3?.instance || updateMatrix3x3
				updateMatrix3x3 = instance.updateMatrix3x3
				if (updateUInt != undefined) instance.updateUInt = updateUInt?.instance || updateUInt
				updateUInt = instance.updateUInt
				if (updateUInt2 != undefined) instance.updateUInt2 = updateUInt2?.instance || updateUInt2
				updateUInt2 = instance.updateUInt2
				if (updateUInt3 != undefined) instance.updateUInt3 = updateUInt3?.instance || updateUInt3
				updateUInt3 = instance.updateUInt3
				if (updateUInt4 != undefined) instance.updateUInt4 = updateUInt4?.instance || updateUInt4
				updateUInt4 = instance.updateUInt4
				if (updateUIntArray != undefined) instance.updateUIntArray = updateUIntArray?.instance || updateUIntArray
				updateUIntArray = instance.updateUIntArray
				if (updateVector3 != undefined) instance.updateVector3 = updateVector3?.instance || updateVector3
				updateVector3 = instance.updateVector3
				if (updateVector4 != undefined) instance.updateVector4 = updateVector4?.instance || updateVector4
				updateVector4 = instance.updateVector4

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

			