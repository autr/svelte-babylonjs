
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					aimTransform  
					bu  
					bv  
					distance  
					faceId  
					gripTransform  
					hit  
					originMesh  
					pickedMesh  
					pickedPoint  
					pickedSprite  
					ray  
					subMeshFaceId  
					subMeshId  
					thinInstanceIndex  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PickingInfo() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let aimTransform = undefined // [nullable] 
				// the aim-space transform of the input used for picking, if it is an xr input source.
				

				export let bu = undefined // [number] 
				// (see gettexturecoordinates) the barycentric u coordinate that is used when calculating the texture coordinates of the collision.
				

				export let bv = undefined // [number] 
				// (see gettexturecoordinates) the barycentric v coordinate that is used when calculating the texture coordinates of the collision.
				

				export let distance = undefined // [number] 
				// distance away where the pick collided
				

				export let faceId = undefined // [number] 
				// the index of the face on the mesh that was picked, or the index of the line if the picked mesh is a linesmesh
				

				export let gripTransform = undefined // [nullable] 
				// the grip-space transform of the input used for picking, if it is an xr input source.some xr sources, such as input coming from head mounted displays, do not have this.
				

				export let hit = undefined // [boolean] 
				// if the pick collided with an object
				

				export let originMesh = undefined // [nullable] 
				// if a mesh was used to do the picking (eg. 6dof controller) as a "near interaction", this will be populated.
				

				export let pickedMesh = undefined // [nullable] 
				// the mesh corresponding the pick collision
				

				export let pickedPoint = undefined // [nullable] 
				// the location of pick collision
				

				export let pickedSprite = undefined // [nullable] 
				// if a sprite was picked, this will be the sprite the pick collided with
				

				export let ray = undefined // [nullable] 
				// the ray that was used to perform the picking.
				

				export let subMeshFaceId = undefined // [number] 
				// the index of the face on the submesh that was picked, or the index of the line if the picked mesh is a linesmesh
				

				export let subMeshId = undefined // [number] 
				// id of the submesh that was picked
				

				export let thinInstanceIndex = undefined // [number] 
				// if we are picking a mesh with thin instance, this will give you the picked thin instance
				

				// ================ METHODS ================

				
				export let getNormal = (...args) => instance.getNormal(...args)

				export let getTextureCoordinates = (...args) => instance.getTextureCoordinates(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PickingInfo]`, ...args) : null

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

												if (aimTransform != undefined) instance.aimTransform = aimTransform?.instance || aimTransform
				aimTransform = instance.aimTransform
				if (bu != undefined) instance.bu = bu?.instance || bu
				bu = instance.bu
				if (bv != undefined) instance.bv = bv?.instance || bv
				bv = instance.bv
				if (distance != undefined) instance.distance = distance?.instance || distance
				distance = instance.distance
				if (faceId != undefined) instance.faceId = faceId?.instance || faceId
				faceId = instance.faceId
				if (gripTransform != undefined) instance.gripTransform = gripTransform?.instance || gripTransform
				gripTransform = instance.gripTransform
				if (hit != undefined) instance.hit = hit?.instance || hit
				hit = instance.hit
				if (originMesh != undefined) instance.originMesh = originMesh?.instance || originMesh
				originMesh = instance.originMesh
				if (pickedMesh != undefined) instance.pickedMesh = pickedMesh?.instance || pickedMesh
				pickedMesh = instance.pickedMesh
				if (pickedPoint != undefined) instance.pickedPoint = pickedPoint?.instance || pickedPoint
				pickedPoint = instance.pickedPoint
				if (pickedSprite != undefined) instance.pickedSprite = pickedSprite?.instance || pickedSprite
				pickedSprite = instance.pickedSprite
				if (ray != undefined) instance.ray = ray?.instance || ray
				ray = instance.ray
				if (subMeshFaceId != undefined) instance.subMeshFaceId = subMeshFaceId?.instance || subMeshFaceId
				subMeshFaceId = instance.subMeshFaceId
				if (subMeshId != undefined) instance.subMeshId = subMeshId?.instance || subMeshId
				subMeshId = instance.subMeshId
				if (thinInstanceIndex != undefined) instance.thinInstanceIndex = thinInstanceIndex?.instance || thinInstanceIndex
				thinInstanceIndex = instance.thinInstanceIndex

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

			