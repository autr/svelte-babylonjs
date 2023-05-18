
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					particleSystem  * required 
					inheritDirection  
					inheritedVelocityAmount  
					type  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let particleSystem = undefined // [particlesystem] * required
				// the particle system to be used by the sub emitter
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SubEmitter(particleSystem) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let inheritDirection = undefined // [boolean] 
				// if the particle should inherit the direction from the particle it's attached to. (+y will face the direction the particle is moving) (default: false)note: this only is supported when using an emitter of type mesh
				

				export let inheritedVelocityAmount = undefined // [number] 
				// how much of the attached particles speed should be added to the sub emitted particle (default: 0)
				

				export let type = undefined // [subemittertype] 
				// type of the submitter (default: end)
				

				// ================ METHODS ================

				
				export let clone = (...args) => instance.clone(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SubEmitter]`, ...args) : null

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
				if (inheritDirection != undefined) instance.inheritDirection = inheritDirection?.instance || inheritDirection
				inheritDirection = instance.inheritDirection
				if (inheritedVelocityAmount != undefined) instance.inheritedVelocityAmount = inheritedVelocityAmount?.instance || inheritedVelocityAmount
				inheritedVelocityAmount = instance.inheritedVelocityAmount
				if (type != undefined) instance.type = type?.instance || type
				type = instance.type

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

			