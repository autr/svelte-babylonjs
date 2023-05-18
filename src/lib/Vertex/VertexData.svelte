
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					colors  
					indices  
					matricesIndices  
					matricesIndicesExtra  
					matricesWeights  
					matricesWeightsExtra  
					normals  
					positions  
					tangents  
					uvs  
					uvs2  
					uvs3  
					uvs4  
					uvs5  
					uvs6  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.VertexData() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let colors = undefined // [nullable] 
				// an array of the r, g, b, a, color of each vertex  [...., r, g, b, a, .....]
				

				export let indices = undefined // [nullable] 
				// an array of i, j, k the three vertex indices required for each triangular facet  [...., i, j, k .....]
				

				export let matricesIndices = undefined // [nullable] 
				// an array containing the list of indices to the array of matrices produced by bones, each vertex have up to 4 indices (8 if the matricesindicesextra is set).
				

				export let matricesIndicesExtra = undefined // [nullable] 
				// an array extending the number of possible indices
				

				export let matricesWeights = undefined // [nullable] 
				// an array containing the list of weights defining the weight of each indexed matrix in the final computation
				

				export let matricesWeightsExtra = undefined // [nullable] 
				// an array extending the number of possible weights when the number of indices is extended
				

				export let normals = undefined // [nullable] 
				// an array of the x, y, z normal vector of each vertex  [...., x, y, z, .....]
				

				export let positions = undefined // [nullable] 
				// an array of the x, y, z position of each vertex  [...., x, y, z, .....]
				

				export let tangents = undefined // [nullable] 
				// an array of the x, y, z tangent vector of each vertex  [...., x, y, z, .....]
				

				export let uvs = undefined // [nullable] 
				// an array of u,v which maps a texture image onto each vertex  [...., u, v, .....]
				

				export let uvs2 = undefined // [nullable] 
				// a second array of u,v which maps a texture image onto each vertex  [...., u, v, .....]
				

				export let uvs3 = undefined // [nullable] 
				// a third array of u,v which maps a texture image onto each vertex  [...., u, v, .....]
				

				export let uvs4 = undefined // [nullable] 
				// a fourth array of u,v which maps a texture image onto each vertex  [...., u, v, .....]
				

				export let uvs5 = undefined // [nullable] 
				// a fifth array of u,v which maps a texture image onto each vertex  [...., u, v, .....]
				

				export let uvs6 = undefined // [nullable] 
				// a sixth array of u,v which maps a texture image onto each vertex  [...., u, v, .....]
				

				// ================ METHODS ================

				
				export let applyToGeometry = (...args) => instance.applyToGeometry(...args)

				export let applyToMesh = (...args) => instance.applyToMesh(...args)

				export let merge = (...args) => instance.merge(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let set = (...args) => instance.set(...args)

				export let transform = (...args) => instance.transform(...args)

				export let updateGeometry = (...args) => instance.updateGeometry(...args)

				export let updateMesh = (...args) => instance.updateMesh(...args)

				export let ComputeNormals = (...args) => instance.ComputeNormals(...args)

				export let CreateBox = (...args) => instance.CreateBox(...args)

				export let CreateCapsule = (...args) => instance.CreateCapsule(...args)

				export let CreateCylinder = (...args) => instance.CreateCylinder(...args)

				export let CreateDashedLines = (...args) => instance.CreateDashedLines(...args)

				export let CreateDisc = (...args) => instance.CreateDisc(...args)

				export let CreateGround = (...args) => instance.CreateGround(...args)

				export let CreateGroundFromHeightMap = (...args) => instance.CreateGroundFromHeightMap(...args)

				export let CreateIcoSphere = (...args) => instance.CreateIcoSphere(...args)

				export let CreateLineSystem = (...args) => instance.CreateLineSystem(...args)

				export let CreatePlane = (...args) => instance.CreatePlane(...args)

				export let CreatePolygon = (...args) => instance.CreatePolygon(...args)

				export let CreatePolyhedron = (...args) => instance.CreatePolyhedron(...args)

				export let CreateRibbon = (...args) => instance.CreateRibbon(...args)

				export let CreateSphere = (...args) => instance.CreateSphere(...args)

				export let CreateTiledBox = (...args) => instance.CreateTiledBox(...args)

				export let CreateTiledGround = (...args) => instance.CreateTiledGround(...args)

				export let CreateTiledPlane = (...args) => instance.CreateTiledPlane(...args)

				export let CreateTorus = (...args) => instance.CreateTorus(...args)

				export let CreateTorusKnot = (...args) => instance.CreateTorusKnot(...args)

				export let ExtractFromGeometry = (...args) => instance.ExtractFromGeometry(...args)

				export let ExtractFromMesh = (...args) => instance.ExtractFromMesh(...args)

				export let ImportVertexData = (...args) => instance.ImportVertexData(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:VertexData]`, ...args) : null

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

												if (colors != undefined) instance.colors = colors?.instance || colors
				colors = instance.colors
				if (indices != undefined) instance.indices = indices?.instance || indices
				indices = instance.indices
				if (matricesIndices != undefined) instance.matricesIndices = matricesIndices?.instance || matricesIndices
				matricesIndices = instance.matricesIndices
				if (matricesIndicesExtra != undefined) instance.matricesIndicesExtra = matricesIndicesExtra?.instance || matricesIndicesExtra
				matricesIndicesExtra = instance.matricesIndicesExtra
				if (matricesWeights != undefined) instance.matricesWeights = matricesWeights?.instance || matricesWeights
				matricesWeights = instance.matricesWeights
				if (matricesWeightsExtra != undefined) instance.matricesWeightsExtra = matricesWeightsExtra?.instance || matricesWeightsExtra
				matricesWeightsExtra = instance.matricesWeightsExtra
				if (normals != undefined) instance.normals = normals?.instance || normals
				normals = instance.normals
				if (positions != undefined) instance.positions = positions?.instance || positions
				positions = instance.positions
				if (tangents != undefined) instance.tangents = tangents?.instance || tangents
				tangents = instance.tangents
				if (uvs != undefined) instance.uvs = uvs?.instance || uvs
				uvs = instance.uvs
				if (uvs2 != undefined) instance.uvs2 = uvs2?.instance || uvs2
				uvs2 = instance.uvs2
				if (uvs3 != undefined) instance.uvs3 = uvs3?.instance || uvs3
				uvs3 = instance.uvs3
				if (uvs4 != undefined) instance.uvs4 = uvs4?.instance || uvs4
				uvs4 = instance.uvs4
				if (uvs5 != undefined) instance.uvs5 = uvs5?.instance || uvs5
				uvs5 = instance.uvs5
				if (uvs6 != undefined) instance.uvs6 = uvs6?.instance || uvs6
				uvs6 = instance.uvs6

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

			