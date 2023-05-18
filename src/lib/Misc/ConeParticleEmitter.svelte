
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					radius  
					angle  
					directionRandomizer   
					emitFromSpawnPointOnly  
					heightRange  
					radiusRange  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let radius = undefined // [number] 
				// the radius of the emission cone (1 by default)
				

				export let angle = undefined // [number] 
				// the cone base angle (pi by default)
				

				export let directionRandomizer = undefined // [number] 
				// defines how much to randomize the particle direction [0-1] (default is 0)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ConeParticleEmitter(radius,angle,directionRandomizer) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let emitFromSpawnPointOnly = undefined // [boolean] 
				// gets or sets a value indicating if all the particles should be emitted from the spawn point only (the base of the cone)
				

				export let heightRange = undefined // [number] 
				// gets or sets a value indicating where on the height the start position should be picked (1 = everywhere, 0 = only surface)
				

				export let radiusRange = undefined // [number] 
				// gets or sets a value indicating where on the radius the start position should be picked (1 = everywhere, 0 = only surface)
				

				// ================ METHODS ================

				
				export let applyToShader = (...args) => instance.applyToShader(...args)

				export let buildUniformLayout = (...args) => instance.buildUniformLayout(...args)

				export let clone = (...args) => instance.clone(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getEffectDefines = (...args) => instance.getEffectDefines(...args)

				export let parse = (...args) => instance.parse(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let startDirectionFunction = (...args) => instance.startDirectionFunction(...args)

				export let startPositionFunction = (...args) => instance.startPositionFunction(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ConeParticleEmitter]`, ...args) : null

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

												if (radius != undefined) instance.radius = radius?.instance || radius
				radius = instance.radius
				if (angle != undefined) instance.angle = angle?.instance || angle
				angle = instance.angle
				if (directionRandomizer != undefined) instance.directionRandomizer = directionRandomizer?.instance || directionRandomizer
				directionRandomizer = instance.directionRandomizer
				if (emitFromSpawnPointOnly != undefined) instance.emitFromSpawnPointOnly = emitFromSpawnPointOnly?.instance || emitFromSpawnPointOnly
				emitFromSpawnPointOnly = instance.emitFromSpawnPointOnly
				if (heightRange != undefined) instance.heightRange = heightRange?.instance || heightRange
				heightRange = instance.heightRange
				if (radiusRange != undefined) instance.radiusRange = radiusRange?.instance || radiusRange
				radiusRange = instance.radiusRange

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

			