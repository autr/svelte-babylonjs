
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// defines the scene to instrument
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SceneInstrumentation(scene) : {}

				// ================ ACCESSORS ================

				
				export let activeMeshesEvaluationTimeCounter = undefined // [perfcounter] 
				// 
				

				export let animationsTimeCounter = undefined // [perfcounter] 
				// 
				

				export let cameraRenderTimeCounter = undefined // [perfcounter] 
				// 
				

				export let captureActiveMeshesEvaluationTime = undefined // [boolean] 
				// 
				

				export let captureAnimationsTime = undefined // [boolean] 
				// 
				

				export let captureCameraRenderTime = undefined // [boolean] 
				// 
				

				export let captureFrameTime = undefined // [boolean] 
				// 
				

				export let captureInterFrameTime = undefined // [boolean] 
				// 
				

				export let captureParticlesRenderTime = undefined // [boolean] 
				// 
				

				export let capturePhysicsTime = undefined // [boolean] 
				// 
				

				export let captureRenderTargetsRenderTime = undefined // [boolean] 
				// 
				

				export let captureRenderTime = undefined // [boolean] 
				// 
				

				export let captureSpritesRenderTime = undefined // [boolean] 
				// 
				

				export let drawCallsCounter = undefined // [perfcounter] 
				// 
				

				export let frameTimeCounter = undefined // [perfcounter] 
				// 
				

				export let interFrameTimeCounter = undefined // [perfcounter] 
				// 
				

				export let particlesRenderTimeCounter = undefined // [perfcounter] 
				// 
				

				export let physicsTimeCounter = undefined // [perfcounter] 
				// 
				

				export let renderTargetsRenderTimeCounter = undefined // [perfcounter] 
				// 
				

				export let renderTimeCounter = undefined // [perfcounter] 
				// 
				

				export let spritesRenderTimeCounter = undefined // [perfcounter] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SceneInstrumentation]`, ...args) : null

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

				activeMeshesEvaluationTimeCounter = instance.activeMeshesEvaluationTimeCounter

				animationsTimeCounter = instance.animationsTimeCounter

				cameraRenderTimeCounter = instance.cameraRenderTimeCounter
				if (captureActiveMeshesEvaluationTime != undefined) instance.captureActiveMeshesEvaluationTime = captureActiveMeshesEvaluationTime?.instance || captureActiveMeshesEvaluationTime
				captureActiveMeshesEvaluationTime = instance.captureActiveMeshesEvaluationTime
				if (captureAnimationsTime != undefined) instance.captureAnimationsTime = captureAnimationsTime?.instance || captureAnimationsTime
				captureAnimationsTime = instance.captureAnimationsTime
				if (captureCameraRenderTime != undefined) instance.captureCameraRenderTime = captureCameraRenderTime?.instance || captureCameraRenderTime
				captureCameraRenderTime = instance.captureCameraRenderTime
				if (captureFrameTime != undefined) instance.captureFrameTime = captureFrameTime?.instance || captureFrameTime
				captureFrameTime = instance.captureFrameTime
				if (captureInterFrameTime != undefined) instance.captureInterFrameTime = captureInterFrameTime?.instance || captureInterFrameTime
				captureInterFrameTime = instance.captureInterFrameTime
				if (captureParticlesRenderTime != undefined) instance.captureParticlesRenderTime = captureParticlesRenderTime?.instance || captureParticlesRenderTime
				captureParticlesRenderTime = instance.captureParticlesRenderTime
				if (capturePhysicsTime != undefined) instance.capturePhysicsTime = capturePhysicsTime?.instance || capturePhysicsTime
				capturePhysicsTime = instance.capturePhysicsTime
				if (captureRenderTargetsRenderTime != undefined) instance.captureRenderTargetsRenderTime = captureRenderTargetsRenderTime?.instance || captureRenderTargetsRenderTime
				captureRenderTargetsRenderTime = instance.captureRenderTargetsRenderTime
				if (captureRenderTime != undefined) instance.captureRenderTime = captureRenderTime?.instance || captureRenderTime
				captureRenderTime = instance.captureRenderTime
				if (captureSpritesRenderTime != undefined) instance.captureSpritesRenderTime = captureSpritesRenderTime?.instance || captureSpritesRenderTime
				captureSpritesRenderTime = instance.captureSpritesRenderTime

				drawCallsCounter = instance.drawCallsCounter

				frameTimeCounter = instance.frameTimeCounter

				interFrameTimeCounter = instance.interFrameTimeCounter

				particlesRenderTimeCounter = instance.particlesRenderTimeCounter

				physicsTimeCounter = instance.physicsTimeCounter

				renderTargetsRenderTimeCounter = instance.renderTargetsRenderTimeCounter

				renderTimeCounter = instance.renderTimeCounter

				spritesRenderTimeCounter = instance.spritesRenderTimeCounter

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

			