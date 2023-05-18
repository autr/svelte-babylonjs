
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					particleSystem  * required 
					age  
					angle  
					angularSpeed  
					cellIndex  
					color  
					colorStep  
					direction  
					id  
					lifeTime  
					position  
					remapData  
					scale  
					size  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let particleSystem = undefined // [particlesystem] * required
				// the particle system the particle belongs to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Particle(particleSystem) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let age = undefined // [number] 
				// the current age of the particle.
				

				export let angle = undefined // [number] 
				// the current angle of the particle.
				

				export let angularSpeed = undefined // [number] 
				// defines how fast is the angle changing.
				

				export let cellIndex = undefined // [number] 
				// defines the cell index used by the particle to be rendered from a sprite.
				

				export let color = undefined // [color4] 
				// the color of the particle.
				

				export let colorStep = undefined // [color4] 
				// the color change of the particle per step.
				

				export let direction = undefined // [vector3] 
				// the world direction of the particle in the scene.
				

				export let id = undefined // [number] 
				// unique id of the particle
				

				export let lifeTime = undefined // [number] 
				// defines how long will the life of the particle be.
				

				export let position = undefined // [vector3] 
				// the world position of the particle in the scene.
				

				export let remapData = undefined // [vector4] 
				// the information required to support color remapping
				

				export let scale = undefined // [vector2] 
				// the current scale of the particle.
				

				export let size = undefined // [number] 
				// the current size of the particle.
				

				// ================ METHODS ================

				
				export let copyTo = (...args) => instance.copyTo(...args)

				export let updateCellIndex = (...args) => instance.updateCellIndex(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Particle]`, ...args) : null

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

												if (particleSystem != undefined) instance.particleSystem = particleSystem?.instance || particleSystem
				particleSystem = instance.particleSystem
				if (age != undefined) instance.age = age?.instance || age
				age = instance.age
				if (angle != undefined) instance.angle = angle?.instance || angle
				angle = instance.angle
				if (angularSpeed != undefined) instance.angularSpeed = angularSpeed?.instance || angularSpeed
				angularSpeed = instance.angularSpeed
				if (cellIndex != undefined) instance.cellIndex = cellIndex?.instance || cellIndex
				cellIndex = instance.cellIndex
				if (color != undefined) instance.color = color?.instance || color
				color = instance.color
				if (colorStep != undefined) instance.colorStep = colorStep?.instance || colorStep
				colorStep = instance.colorStep
				if (direction != undefined) instance.direction = direction?.instance || direction
				direction = instance.direction
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (lifeTime != undefined) instance.lifeTime = lifeTime?.instance || lifeTime
				lifeTime = instance.lifeTime
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
				if (remapData != undefined) instance.remapData = remapData?.instance || remapData
				remapData = instance.remapData
				if (scale != undefined) instance.scale = scale?.instance || scale
				scale = instance.scale
				if (size != undefined) instance.size = size?.instance || size
				size = instance.size

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

			