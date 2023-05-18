
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					radius  
					direction1  
					direction2   
					directionRandomizer  
					radiusRange  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let radius = undefined // [number] 
				// the radius of the emission sphere (1 by default)
				

				export let direction1 = undefined // [vector3] 
				// the min limit of the emission direction (up vector by default)
				

				export let direction2 = undefined // [vector3] 
				// the max limit of the emission direction (up vector by default)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SphereDirectedParticleEmitter(radius,direction1,direction2) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let directionRandomizer = undefined // [number] 
				// how much to randomize the particle direction [0-1].
				

				export let radiusRange = undefined // [number] 
				// the range of emission [0-1] 0 surface only, 1 entire radius.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SphereDirectedParticleEmitter]`, ...args) : null

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
				if (direction1 != undefined) instance.direction1 = direction1?.instance || direction1
				direction1 = instance.direction1
				if (direction2 != undefined) instance.direction2 = direction2?.instance || direction2
				direction2 = instance.direction2
				if (directionRandomizer != undefined) instance.directionRandomizer = directionRandomizer?.instance || directionRandomizer
				directionRandomizer = instance.directionRandomizer
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

			