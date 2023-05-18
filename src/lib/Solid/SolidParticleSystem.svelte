
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					scene  * required
					options   
					billboard  
					counter  
					depthSortedParticles  
					mesh  
					nbParticles  
					particles  
					pickedBySubMesh  
					pickedParticles  
					recomputeNormals  
					vars  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// (string) is the sps name, this will be the underlying mesh name.
				

				export let scene = undefined // [scene] * required
				// (scene) is the scene in which the sps is added.
				

				export let options = undefined // [reflection] 
				// defines the options of the sps e.g.* updatable (optional boolean, default true) : if the sps must be updatable or immutable.* ispickable (optional boolean, default false) : if the solid particles must be pickable.* enabledepthsort (optional boolean, default false) : if the solid particles must be sorted in the geometry according to their distance to the camera.* usemodelmaterial (optional boolean, default false) : if the model materials must be used to create the sps multimaterial. this enables the multimaterial supports of the sps.* enablemultimaterial (optional boolean, default false) : if the solid particles can be given different materials.* expandable (optional boolean, default false) : if particles can still be added after the initial sps mesh creation.* particleintersection (optional boolean, default false) : if the solid particle intersections must be computed.* boundingsphereonly (optional boolean, default false) : if the particle intersection must be computed only with the bounding sphere (no bounding box computation, so faster).* bsphereradiusfactor (optional float, default 1.0) : a number to multiply the bounding sphere radius by in order to reduce it for instance.* computeboundingbox (optional boolean, default false): if the bounding box of the entire sps will be computed (for occlusion detection, for example). if it is false, the bounding box will be the bounding box of the first particle.* autofixfaceorientation (optional boolean, default false): if the particle face orientations will be flipped for transformations that change orientation (scale (-1, 1, 1), for example)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SolidParticleSystem(name,scene,options) : {}

				// ================ ACCESSORS ================

				
				export let autoUpdateSubMeshes = undefined // [boolean] 
				// 
				

				export let computeBoundingBox = undefined // [boolean] 
				// 
				

				export let computeParticleColor = undefined // [boolean] 
				// 
				

				export let computeParticleRotation = undefined // [boolean] 
				// 
				

				export let computeParticleTexture = undefined // [boolean] 
				// 
				

				export let computeParticleVertex = undefined // [boolean] 
				// 
				

				export let depthSortParticles = undefined // [boolean] 
				// 
				

				export let expandable = undefined // [boolean] 
				// 
				

				export let isAlwaysVisible = undefined // [boolean] 
				// 
				

				export let isVisibilityBoxLocked = undefined // [boolean] 
				// 
				

				export let materials = undefined // [array] 
				// 
				

				export let multimaterial = undefined // [multimaterial] 
				// 
				

				export let multimaterialEnabled = undefined // [boolean] 
				// 
				

				export let useModelMaterial = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let billboard = undefined // [boolean] 
				// if the particles must ever face the camera (default false). useful for planar particles.
				

				export let counter = undefined // [number] 
				// this a counter ofr your own usage. it's not set by any sps functions.
				

				export let depthSortedParticles = undefined // [array] 
				// this array is populated when 
				

				export let mesh = undefined // [mesh] 
				// the sps mesh. it's a standard bjs mesh, so all the methods from the mesh class are available.
				

				export let nbParticles = undefined // [number] 
				// the sps total number of particles. read only. use sps.counter instead if you need to set your own value.
				

				export let particles = undefined // [array] 
				// the sps array of solid particle objects. just access each particle as with any classic array. example : var p = sps.particles[i];
				

				export let pickedBySubMesh = undefined // [array] 
				// this array is populated when the sps is set as 'pickable'each key of this array is a submesh index.each element of this array is a second array defined like this :each key of this second array is a 
				

				export let pickedParticles = undefined // [array] 
				// this array is populated when the sps is set as 'pickable'.each key of this array is a 
				

				export let recomputeNormals = undefined // [boolean] 
				// recompute normals when adding a shape
				

				export let vars = undefined // [any] 
				// this empty object is intended to store some sps specific or temporary values in order to lower the garbage collector activity.please read : https://doc.babylonjs.com/features/featuresdeepdive/particles/solid_particle_system/optimize_sps#limit-garbage-collection
				

				// ================ METHODS ================

				
				export let addShape = (...args) => instance.addShape(...args)

				export let afterUpdateParticles = (...args) => instance.afterUpdateParticles(...args)

				export let beforeUpdateParticles = (...args) => instance.beforeUpdateParticles(...args)

				export let buildMesh = (...args) => instance.buildMesh(...args)

				export let computeSubMeshes = (...args) => instance.computeSubMeshes(...args)

				export let digest = (...args) => instance.digest(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getParticleById = (...args) => instance.getParticleById(...args)

				export let getParticlesByShapeId = (...args) => instance.getParticlesByShapeId(...args)

				export let getParticlesByShapeIdToRef = (...args) => instance.getParticlesByShapeIdToRef(...args)

				export let initParticles = (...args) => instance.initParticles(...args)

				export let insertParticlesFromArray = (...args) => instance.insertParticlesFromArray(...args)

				export let pickedParticle = (...args) => instance.pickedParticle(...args)

				export let rebuildMesh = (...args) => instance.rebuildMesh(...args)

				export let recycleParticle = (...args) => instance.recycleParticle(...args)

				export let refreshVisibleSize = (...args) => instance.refreshVisibleSize(...args)

				export let removeParticles = (...args) => instance.removeParticles(...args)

				export let setMultiMaterial = (...args) => instance.setMultiMaterial(...args)

				export let setParticles = (...args) => instance.setParticles(...args)

				export let setVisibilityBox = (...args) => instance.setVisibilityBox(...args)

				export let updateParticle = (...args) => instance.updateParticle(...args)

				export let updateParticleVertex = (...args) => instance.updateParticleVertex(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SolidParticleSystem]`, ...args) : null

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
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (autoUpdateSubMeshes != undefined) instance.autoUpdateSubMeshes = autoUpdateSubMeshes?.instance || autoUpdateSubMeshes
				autoUpdateSubMeshes = instance.autoUpdateSubMeshes
				if (computeBoundingBox != undefined) instance.computeBoundingBox = computeBoundingBox?.instance || computeBoundingBox
				computeBoundingBox = instance.computeBoundingBox
				if (computeParticleColor != undefined) instance.computeParticleColor = computeParticleColor?.instance || computeParticleColor
				computeParticleColor = instance.computeParticleColor
				if (computeParticleRotation != undefined) instance.computeParticleRotation = computeParticleRotation?.instance || computeParticleRotation
				computeParticleRotation = instance.computeParticleRotation
				if (computeParticleTexture != undefined) instance.computeParticleTexture = computeParticleTexture?.instance || computeParticleTexture
				computeParticleTexture = instance.computeParticleTexture
				if (computeParticleVertex != undefined) instance.computeParticleVertex = computeParticleVertex?.instance || computeParticleVertex
				computeParticleVertex = instance.computeParticleVertex
				if (depthSortParticles != undefined) instance.depthSortParticles = depthSortParticles?.instance || depthSortParticles
				depthSortParticles = instance.depthSortParticles

				expandable = instance.expandable
				if (isAlwaysVisible != undefined) instance.isAlwaysVisible = isAlwaysVisible?.instance || isAlwaysVisible
				isAlwaysVisible = instance.isAlwaysVisible
				if (isVisibilityBoxLocked != undefined) instance.isVisibilityBoxLocked = isVisibilityBoxLocked?.instance || isVisibilityBoxLocked
				isVisibilityBoxLocked = instance.isVisibilityBoxLocked

				materials = instance.materials
				if (multimaterial != undefined) instance.multimaterial = multimaterial?.instance || multimaterial
				multimaterial = instance.multimaterial

				multimaterialEnabled = instance.multimaterialEnabled

				useModelMaterial = instance.useModelMaterial
				if (billboard != undefined) instance.billboard = billboard?.instance || billboard
				billboard = instance.billboard
				if (counter != undefined) instance.counter = counter?.instance || counter
				counter = instance.counter
				if (depthSortedParticles != undefined) instance.depthSortedParticles = depthSortedParticles?.instance || depthSortedParticles
				depthSortedParticles = instance.depthSortedParticles
				if (mesh != undefined) instance.mesh = mesh?.instance || mesh
				mesh = instance.mesh
				if (nbParticles != undefined) instance.nbParticles = nbParticles?.instance || nbParticles
				nbParticles = instance.nbParticles
				if (particles != undefined) instance.particles = particles?.instance || particles
				particles = instance.particles
				if (pickedBySubMesh != undefined) instance.pickedBySubMesh = pickedBySubMesh?.instance || pickedBySubMesh
				pickedBySubMesh = instance.pickedBySubMesh
				if (pickedParticles != undefined) instance.pickedParticles = pickedParticles?.instance || pickedParticles
				pickedParticles = instance.pickedParticles
				if (recomputeNormals != undefined) instance.recomputeNormals = recomputeNormals?.instance || recomputeNormals
				recomputeNormals = instance.recomputeNormals
				if (vars != undefined) instance.vars = vars?.instance || vars
				vars = instance.vars

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

			