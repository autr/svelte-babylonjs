
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					particleIndex  * required
					group  * required
					groupId  * required
					idxInGroup  * required
					pcs  * required 
					_group  
					color  
					idx  
					parentId  
					pivot  
					position  
					rotation  
					rotationQuaternion  
					translateFromPivot  
					uv  
					velocity  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let particleIndex = undefined // [number] * required
				// (integer) is the particle index in the pcs pool. it's also the particle identifier.
				

				export let group = undefined // [pointsgroup] * required
				// (pointsgroup) is the group the particle belongs to
				

				export let groupId = undefined // [number] * required
				// (integer) is the group identifier in the pcs.
				

				export let idxInGroup = undefined // [number] * required
				// (integer) is the index of the particle in the current point group (ex: the 10th point of addpoints(30))
				

				export let pcs = undefined // [pointscloudsystem] * required
				// defines the pcs it is associated to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.CloudPoint(particleIndex,group,groupId,idxInGroup,pcs) : {}

				// ================ ACCESSORS ================

				
				export let quaternion = undefined // [nullable] 
				// 
				

				export let size = undefined // [vector3] 
				// 
				

				// ================ PROPERTIES ================

				
				export let _group = undefined // [pointsgroup] 
				// group this particle belongs to
				

				export let color = undefined // [nullable] 
				// the color of the particle
				

				export let idx = undefined // [number] 
				// particle global index
				

				export let parentId = undefined // [nullable] 
				// parent particle id, if any.default null.
				

				export let pivot = undefined // [vector3] 
				// the pivot point in the particle local space.
				

				export let position = undefined // [vector3] 
				// the world space position of the particle.
				

				export let rotation = undefined // [vector3] 
				// the world space rotation of the particle. (not use if rotationquaternion is set)
				

				export let rotationQuaternion = undefined // [nullable] 
				// the world space rotation quaternion of the particle.
				

				export let translateFromPivot = undefined // [boolean] 
				// must the particle be translated from its pivot point in its local space ?in this case, the pivot point is set at the origin of the particle local space and the particle is translated.default : false
				

				export let uv = undefined // [nullable] 
				// the uv of the particle.
				

				export let velocity = undefined // [vector3] 
				// the current speed of the particle.
				

				// ================ METHODS ================

				
				export let intersectsMesh = (...args) => instance.intersectsMesh(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:CloudPoint]`, ...args) : null

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
				if (group != undefined) instance.group = group?.instance || group
				group = instance.group
				if (groupId != undefined) instance.groupId = groupId?.instance || groupId
				groupId = instance.groupId
				if (idxInGroup != undefined) instance.idxInGroup = idxInGroup?.instance || idxInGroup
				idxInGroup = instance.idxInGroup
				if (pcs != undefined) instance.pcs = pcs?.instance || pcs
				pcs = instance.pcs
				if (quaternion != undefined) instance.quaternion = quaternion?.instance || quaternion
				quaternion = instance.quaternion
				if (size != undefined) instance.size = size?.instance || size
				size = instance.size
				if (_group != undefined) instance._group = _group?.instance || _group
				_group = instance._group
				if (color != undefined) instance.color = color?.instance || color
				color = instance.color
				if (idx != undefined) instance.idx = idx?.instance || idx
				idx = instance.idx
				if (parentId != undefined) instance.parentId = parentId?.instance || parentId
				parentId = instance.parentId
				if (pivot != undefined) instance.pivot = pivot?.instance || pivot
				pivot = instance.pivot
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
				if (rotation != undefined) instance.rotation = rotation?.instance || rotation
				rotation = instance.rotation
				if (rotationQuaternion != undefined) instance.rotationQuaternion = rotationQuaternion?.instance || rotationQuaternion
				rotationQuaternion = instance.rotationQuaternion
				if (translateFromPivot != undefined) instance.translateFromPivot = translateFromPivot?.instance || translateFromPivot
				translateFromPivot = instance.translateFromPivot
				if (uv != undefined) instance.uv = uv?.instance || uv
				uv = instance.uv
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

			