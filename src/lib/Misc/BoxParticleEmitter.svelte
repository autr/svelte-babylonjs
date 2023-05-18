
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					direction1  
					direction2  
					maxEmitBox  
					minEmitBox  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BoxParticleEmitter() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let direction1 = undefined // [vector3] 
				// random direction of each particle after it has been emitted, between direction1 and direction2 vectors.
				

				export let direction2 = undefined // [vector3] 
				// random direction of each particle after it has been emitted, between direction1 and direction2 vectors.
				

				export let maxEmitBox = undefined // [vector3] 
				// maximum box point around our emitter. our emitter is the center of particles source, but if you want your particles to emit from more than one point, then you can tell it to do so.
				

				export let minEmitBox = undefined // [vector3] 
				// minimum box point around our emitter. our emitter is the center of particles source, but if you want your particles to emit from more than one point, then you can tell it to do so.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BoxParticleEmitter]`, ...args) : null

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

												if (direction1 != undefined) instance.direction1 = direction1?.instance || direction1
				direction1 = instance.direction1
				if (direction2 != undefined) instance.direction2 = direction2?.instance || direction2
				direction2 = instance.direction2
				if (maxEmitBox != undefined) instance.maxEmitBox = maxEmitBox?.instance || maxEmitBox
				maxEmitBox = instance.maxEmitBox
				if (minEmitBox != undefined) instance.minEmitBox = minEmitBox?.instance || minEmitBox
				minEmitBox = instance.minEmitBox

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

			