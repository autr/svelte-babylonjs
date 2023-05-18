
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					particleIndex  * required
					particleId  * required
					positionIndex  * required
					indiceIndex  * required
					model  * required
					shapeId  * required
					idxInShape  * required
					sps  * required
					modelBoundingInfo  
					materialIndex   
					alive  
					color  
					cullingStrategy  
					id  
					idx  
					isVisible  
					parentId  
					pivot  
					position  
					props  
					rotation  
					rotationQuaternion  
					scaling  
					translateFromPivot  
					uvs  
					velocity  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let particleIndex = undefined // [number] * required
				// (integer) is the particle index in the solid particle system pool.
				

				export let particleId = undefined // [number] * required
				// (integer) is the particle identifier. unless some particles are removed from the sps, it's the same value than the particle idx.
				

				export let positionIndex = undefined // [number] * required
				// (integer) is the starting index of the particle vertices in the sps "positions" array.
				

				export let indiceIndex = undefined // [number] * required
				// (integer) is the starting index of the particle indices in the sps "indices" array.
				

				export let model = undefined // [nullable] * required
				// (modelshape) is a reference to the model shape on what the particle is designed.
				

				export let shapeId = undefined // [number] * required
				// (integer) is the model shape identifier in the sps.
				

				export let idxInShape = undefined // [number] * required
				// (integer) is the index of the particle in the current model (ex: the 10th box of addshape(box, 30))
				

				export let sps = undefined // [solidparticlesystem] * required
				// defines the sps it is associated to
				

				export let modelBoundingInfo = undefined // [nullable] 
				// is the reference to the model boundinginfo used for intersection computations.
				

				export let materialIndex = undefined // [nullable] 
				// is the particle material identifier (integer) when the multimaterials are enabled in the sps.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SolidParticle(particleIndex,particleId,positionIndex,indiceIndex,model,shapeId,idxInShape,sps,modelBoundingInfo,materialIndex) : {}

				// ================ ACCESSORS ================

				
				export let hasBoundingInfo = undefined // [boolean] 
				// 
				

				export let quaternion = undefined // [nullable] 
				// 
				

				export let scale = undefined // [vector3] 
				// 
				

				// ================ PROPERTIES ================

				
				export let alive = undefined // [boolean] 
				// is the particle active or not ?
				

				export let color = undefined // [nullable] 
				// the color of the particle
				

				export let cullingStrategy = undefined // [number] 
				// the culling strategy to use to check whether the solid particle must be culled or not when using isinfrustum().the possible values are :- abstractmesh.cullingstrategy_standard- abstractmesh.cullingstrategy_boundingsphere_only- abstractmesh.cullingstrategy_optimistic_inclusion- abstractmesh.cullingstrategy_optimistic_inclusion_then_bsphere_onlythe default value for solid particles is abstractmesh.cullingstrategy_boundingsphere_onlyplease read each static variable documentation in the class abstractmesh to get details about the culling process.
				

				export let id = undefined // [number] 
				// particle identifier
				

				export let idx = undefined // [number] 
				// particle global index
				

				export let isVisible = undefined // [boolean] 
				// is the particle visible or not ?
				

				export let parentId = undefined // [nullable] 
				// parent particle id, if any.default null.
				

				export let pivot = undefined // [vector3] 
				// the pivot point in the particle local space.
				

				export let position = undefined // [vector3] 
				// the world space position of the particle.
				

				export let props = undefined // [any] 
				// custom object or properties.
				

				export let rotation = undefined // [vector3] 
				// the world space rotation of the particle. (not use if rotationquaternion is set)
				

				export let rotationQuaternion = undefined // [nullable] 
				// the world space rotation quaternion of the particle.
				

				export let scaling = undefined // [vector3] 
				// the scaling of the particle.
				

				export let translateFromPivot = undefined // [boolean] 
				// must the particle be translated from its pivot point in its local space ?in this case, the pivot point is set at the origin of the particle local space and the particle is translated.default : false
				

				export let uvs = undefined // [vector4] 
				// the uvs of the particle.
				

				export let velocity = undefined // [vector3] 
				// the current speed of the particle.
				

				// ================ METHODS ================

				
				export let copyToRef = (...args) => instance.copyToRef(...args)

				export let getBoundingInfo = (...args) => instance.getBoundingInfo(...args)

				export let intersectsMesh = (...args) => instance.intersectsMesh(...args)

				export let isInFrustum = (...args) => instance.isInFrustum(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SolidParticle]`, ...args) : null

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

												if (particleIndex != undefined) instance.particleIndex = particleIndex?.instance || particleIndex
				particleIndex = instance.particleIndex
				if (particleId != undefined) instance.particleId = particleId?.instance || particleId
				particleId = instance.particleId
				if (positionIndex != undefined) instance.positionIndex = positionIndex?.instance || positionIndex
				positionIndex = instance.positionIndex
				if (indiceIndex != undefined) instance.indiceIndex = indiceIndex?.instance || indiceIndex
				indiceIndex = instance.indiceIndex
				if (model != undefined) instance.model = model?.instance || model
				model = instance.model
				if (shapeId != undefined) instance.shapeId = shapeId?.instance || shapeId
				shapeId = instance.shapeId
				if (idxInShape != undefined) instance.idxInShape = idxInShape?.instance || idxInShape
				idxInShape = instance.idxInShape
				if (sps != undefined) instance.sps = sps?.instance || sps
				sps = instance.sps
				if (modelBoundingInfo != undefined) instance.modelBoundingInfo = modelBoundingInfo?.instance || modelBoundingInfo
				modelBoundingInfo = instance.modelBoundingInfo
				if (materialIndex != undefined) instance.materialIndex = materialIndex?.instance || materialIndex
				materialIndex = instance.materialIndex

				hasBoundingInfo = instance.hasBoundingInfo
				if (quaternion != undefined) instance.quaternion = quaternion?.instance || quaternion
				quaternion = instance.quaternion
				if (scale != undefined) instance.scale = scale?.instance || scale
				scale = instance.scale
				if (alive != undefined) instance.alive = alive?.instance || alive
				alive = instance.alive
				if (color != undefined) instance.color = color?.instance || color
				color = instance.color
				if (cullingStrategy != undefined) instance.cullingStrategy = cullingStrategy?.instance || cullingStrategy
				cullingStrategy = instance.cullingStrategy
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (idx != undefined) instance.idx = idx?.instance || idx
				idx = instance.idx
				if (isVisible != undefined) instance.isVisible = isVisible?.instance || isVisible
				isVisible = instance.isVisible
				if (parentId != undefined) instance.parentId = parentId?.instance || parentId
				parentId = instance.parentId
				if (pivot != undefined) instance.pivot = pivot?.instance || pivot
				pivot = instance.pivot
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
				if (props != undefined) instance.props = props?.instance || props
				props = instance.props
				if (rotation != undefined) instance.rotation = rotation?.instance || rotation
				rotation = instance.rotation
				if (rotationQuaternion != undefined) instance.rotationQuaternion = rotationQuaternion?.instance || rotationQuaternion
				rotationQuaternion = instance.rotationQuaternion
				if (scaling != undefined) instance.scaling = scaling?.instance || scaling
				scaling = instance.scaling
				if (translateFromPivot != undefined) instance.translateFromPivot = translateFromPivot?.instance || translateFromPivot
				translateFromPivot = instance.translateFromPivot
				if (uvs != undefined) instance.uvs = uvs?.instance || uvs
				uvs = instance.uvs
				if (velocity != undefined) instance.velocity = velocity?.instance || velocity
				velocity = instance.velocity

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

			