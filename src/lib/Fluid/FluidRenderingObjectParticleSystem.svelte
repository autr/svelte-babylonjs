
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required
					ps  * required 
					onParticleSizeChanged  
					particleThicknessAlpha  
					priority  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// the scene the particle system is part of
				

				export let ps = undefined // [iparticlesystem] * required
				// the particle system
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FluidRenderingObjectParticleSystem(scene,ps) : {}

				// ================ ACCESSORS ================

				
				export let indexBuffer = undefined // [nullable] 
				// 
				

				export let numParticles = undefined // [number] 
				// 
				

				export let particleSize = undefined // [number] 
				// 
				

				export let particleSystem = undefined // [iparticlesystem] 
				// 
				

				export let useInstancing = undefined // [boolean] 
				// 
				

				export let useTrueRenderingForDiffuseTexture = undefined // [boolean] 
				// 
				

				export let useVelocity = undefined // [boolean] 
				// 
				

				export let vertexBuffers = undefined // [reflection] 
				// 
				

				// ================ PROPERTIES ================

				
				export let onParticleSizeChanged = undefined // [observable] 
				// observable triggered when the size of the particle is changed
				

				export let particleThicknessAlpha = undefined // [number] 
				// defines the alpha value of a particle
				

				export let priority = undefined // [number] 
				// defines the priority of the object. objects will be rendered in ascending order of priority
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let renderDepthTexture = (...args) => instance.renderDepthTexture(...args)

				export let renderDiffuseTexture = (...args) => instance.renderDiffuseTexture(...args)

				export let renderThicknessTexture = (...args) => instance.renderThicknessTexture(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FluidRenderingObjectParticleSystem]`, ...args) : null

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

												if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (ps != undefined) instance.ps = ps?.instance || ps
				ps = instance.ps

				indexBuffer = instance.indexBuffer

				numParticles = instance.numParticles
				if (particleSize != undefined) instance.particleSize = particleSize?.instance || particleSize
				particleSize = instance.particleSize

				particleSystem = instance.particleSystem

				useInstancing = instance.useInstancing
				if (useTrueRenderingForDiffuseTexture != undefined) instance.useTrueRenderingForDiffuseTexture = useTrueRenderingForDiffuseTexture?.instance || useTrueRenderingForDiffuseTexture
				useTrueRenderingForDiffuseTexture = instance.useTrueRenderingForDiffuseTexture
				if (useVelocity != undefined) instance.useVelocity = useVelocity?.instance || useVelocity
				useVelocity = instance.useVelocity

				vertexBuffers = instance.vertexBuffers
				if (onParticleSizeChanged != undefined) instance.onParticleSizeChanged = onParticleSizeChanged?.instance || onParticleSizeChanged
				onParticleSizeChanged = instance.onParticleSizeChanged
				if (particleThicknessAlpha != undefined) instance.particleThicknessAlpha = particleThicknessAlpha?.instance || particleThicknessAlpha
				particleThicknessAlpha = instance.particleThicknessAlpha
				if (priority != undefined) instance.priority = priority?.instance || priority
				priority = instance.priority

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

			