
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					baseExperience  
					enterExitUI  
					input  
					nearInteraction  
					pointerSelection  
					renderTarget  
					teleportation  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRDefaultExperience() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let baseExperience = undefined // [webxrexperiencehelper] 
				// base experience
				

				export let enterExitUI = undefined // [webxrenterexitui] 
				// enables ui for entering/exiting xr
				

				export let input = undefined // [webxrinput] 
				// input experience extension
				

				export let nearInteraction = undefined // [webxrnearinteraction] 
				// enables near interaction for hands/controllers
				

				export let pointerSelection = undefined // [webxrcontrollerpointerselection] 
				// enables laser pointer and selection
				

				export let renderTarget = undefined // [webxrrendertarget] 
				// default target xr should render to
				

				export let teleportation = undefined // [webxrmotioncontrollerteleportation] 
				// enables teleportation
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let CreateAsync = (...args) => instance.CreateAsync(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRDefaultExperience]`, ...args) : null

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

												if (baseExperience != undefined) instance.baseExperience = baseExperience?.instance || baseExperience
				baseExperience = instance.baseExperience
				if (enterExitUI != undefined) instance.enterExitUI = enterExitUI?.instance || enterExitUI
				enterExitUI = instance.enterExitUI
				if (input != undefined) instance.input = input?.instance || input
				input = instance.input
				if (nearInteraction != undefined) instance.nearInteraction = nearInteraction?.instance || nearInteraction
				nearInteraction = instance.nearInteraction
				if (pointerSelection != undefined) instance.pointerSelection = pointerSelection?.instance || pointerSelection
				pointerSelection = instance.pointerSelection
				if (renderTarget != undefined) instance.renderTarget = renderTarget?.instance || renderTarget
				renderTarget = instance.renderTarget
				if (teleportation != undefined) instance.teleportation = teleportation?.instance || teleportation
				teleportation = instance.teleportation

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

			