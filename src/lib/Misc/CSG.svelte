
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					matrix  
					position  
					rotation  
					rotationQuaternion  
					scaling  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.CSG() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let matrix = undefined // [matrix] 
				// the world matrix
				

				export let position = undefined // [vector3] 
				// stores the position
				

				export let rotation = undefined // [vector3] 
				// stores the rotation
				

				export let rotationQuaternion = undefined // [nullable] 
				// stores the rotation quaternion
				

				export let scaling = undefined // [vector3] 
				// stores the scaling vector
				

				// ================ METHODS ================

				
				export let buildMeshGeometry = (...args) => instance.buildMeshGeometry(...args)

				export let clone = (...args) => instance.clone(...args)

				export let copyTransformAttributes = (...args) => instance.copyTransformAttributes(...args)

				export let intersect = (...args) => instance.intersect(...args)

				export let intersectInPlace = (...args) => instance.intersectInPlace(...args)

				export let inverse = (...args) => instance.inverse(...args)

				export let inverseInPlace = (...args) => instance.inverseInPlace(...args)

				export let subtract = (...args) => instance.subtract(...args)

				export let subtractInPlace = (...args) => instance.subtractInPlace(...args)

				export let toMesh = (...args) => instance.toMesh(...args)

				export let union = (...args) => instance.union(...args)

				export let unionInPlace = (...args) => instance.unionInPlace(...args)

				export let FromMesh = (...args) => instance.FromMesh(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:CSG]`, ...args) : null

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

												if (matrix != undefined) instance.matrix = matrix?.instance || matrix
				matrix = instance.matrix
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
				if (rotation != undefined) instance.rotation = rotation?.instance || rotation
				rotation = instance.rotation
				if (rotationQuaternion != undefined) instance.rotationQuaternion = rotationQuaternion?.instance || rotationQuaternion
				rotationQuaternion = instance.rotationQuaternion
				if (scaling != undefined) instance.scaling = scaling?.instance || scaling
				scaling = instance.scaling

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

			