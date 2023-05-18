
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					id  * required
					scene  
					vertexData  
					updatable  
					mesh   
					delayLoadState  
					delayLoadingFile  
					onGeometryUpdated  
					uniqueId  
					useBoundingInfoFromGeometry  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let id = undefined // [string] * required
				// defines the unique id
				

				export let scene = undefined // [scene] 
				// defines the hosting scene
				

				export let vertexData = undefined // [vertexdata] 
				// defines the vertexdata used to get geometry data
				

				export let updatable = undefined // [boolean] 
				// defines if geometry must be updatable (false by default)
				

				export let mesh = undefined // [nullable] 
				// defines the mesh that will be associated with the geometry
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Geometry(id,scene,vertexData,updatable,mesh) : {}

				// ================ ACCESSORS ================

				
				export let boundingBias = undefined // [vector2] 
				// 
				

				export let doNotSerialize = undefined // [boolean] 
				// 
				

				export let extend = undefined // [reflection] 
				// 
				

				export let meshes = undefined // [array] 
				// 
				

				// ================ PROPERTIES ================

				
				export let delayLoadState = undefined // [number] 
				// gets the delay loading state of the geometry (none by default which means not delayed)
				

				export let delayLoadingFile = undefined // [nullable] 
				// gets the file containing the data to load when running in delay load state
				

				export let onGeometryUpdated = undefined // [reflection] 
				// 
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the geometry
				

				export let useBoundingInfoFromGeometry = undefined // [boolean] 
				// if set to true (false by default), the bounding info applied to the meshes sharing this geometry will be the bounding info defined at the class leveland won't be computed based on the vertex positions (which is what we get when useboundinginfofromgeometry = false)
				

				// ================ METHODS ================

				
				export let applyToMesh = (...args) => instance.applyToMesh(...args)

				export let clearCachedData = (...args) => instance.clearCachedData(...args)

				export let copy = (...args) => instance.copy(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getEngine = (...args) => instance.getEngine(...args)

				export let getIndexBuffer = (...args) => instance.getIndexBuffer(...args)

				export let getIndices = (...args) => instance.getIndices(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let getTotalIndices = (...args) => instance.getTotalIndices(...args)

				export let getTotalVertices = (...args) => instance.getTotalVertices(...args)

				export let getVertexBuffer = (...args) => instance.getVertexBuffer(...args)

				export let getVertexBuffers = (...args) => instance.getVertexBuffers(...args)

				export let getVerticesData = (...args) => instance.getVerticesData(...args)

				export let getVerticesDataKinds = (...args) => instance.getVerticesDataKinds(...args)

				export let isDisposed = (...args) => instance.isDisposed(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let isVertexBufferUpdatable = (...args) => instance.isVertexBufferUpdatable(...args)

				export let isVerticesDataPresent = (...args) => instance.isVerticesDataPresent(...args)

				export let load = (...args) => instance.load(...args)

				export let releaseForMesh = (...args) => instance.releaseForMesh(...args)

				export let removeVerticesData = (...args) => instance.removeVerticesData(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let serializeVerticeData = (...args) => instance.serializeVerticeData(...args)

				export let setAllVerticesData = (...args) => instance.setAllVerticesData(...args)

				export let setIndices = (...args) => instance.setIndices(...args)

				export let setVerticesBuffer = (...args) => instance.setVerticesBuffer(...args)

				export let setVerticesData = (...args) => instance.setVerticesData(...args)

				export let toLeftHanded = (...args) => instance.toLeftHanded(...args)

				export let updateIndices = (...args) => instance.updateIndices(...args)

				export let updateVerticesData = (...args) => instance.updateVerticesData(...args)

				export let updateVerticesDataDirectly = (...args) => instance.updateVerticesDataDirectly(...args)

				export let CreateGeometryForMesh = (...args) => instance.CreateGeometryForMesh(...args)

				export let ExtractFromMesh = (...args) => instance.ExtractFromMesh(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let RandomId = (...args) => instance.RandomId(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Geometry]`, ...args) : null

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

												if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (vertexData != undefined) instance.vertexData = vertexData?.instance || vertexData
				vertexData = instance.vertexData
				if (updatable != undefined) instance.updatable = updatable?.instance || updatable
				updatable = instance.updatable
				if (mesh != undefined) instance.mesh = mesh?.instance || mesh
				mesh = instance.mesh
				if (boundingBias != undefined) instance.boundingBias = boundingBias?.instance || boundingBias
				boundingBias = instance.boundingBias

				doNotSerialize = instance.doNotSerialize

				extend = instance.extend

				meshes = instance.meshes
				if (delayLoadState != undefined) instance.delayLoadState = delayLoadState?.instance || delayLoadState
				delayLoadState = instance.delayLoadState
				if (delayLoadingFile != undefined) instance.delayLoadingFile = delayLoadingFile?.instance || delayLoadingFile
				delayLoadingFile = instance.delayLoadingFile
				if (onGeometryUpdated != undefined) instance.onGeometryUpdated = onGeometryUpdated?.instance || onGeometryUpdated
				onGeometryUpdated = instance.onGeometryUpdated
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (useBoundingInfoFromGeometry != undefined) instance.useBoundingInfoFromGeometry = useBoundingInfoFromGeometry?.instance || useBoundingInfoFromGeometry
				useBoundingInfoFromGeometry = instance.useBoundingInfoFromGeometry

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

			