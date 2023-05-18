
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required
					gamepadObject  * required
					handedness  * required 
					components (readonly) 
					disableAnimation  
					onModelLoadedObservable  
					profileId  
					rootMesh  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// 
				

				export let gamepadObject = undefined // [iminimalmotioncontrollerobject] * required
				// 
				

				export let handedness = undefined // [motioncontrollerhandedness] * required
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRMicrosoftMixedRealityController(scene,gamepadObject,handedness) : {}

				// ================ ACCESSORS ================

				
				export let handness = undefined // [motioncontrollerhandedness] 
				// 
				

				// ================ PROPERTIES ================

				
				export let components = undefined // [reflection] 
				// a map of components (webxrcontrollercomponent) in this motion controllercomponents have a componenttype and can also have both button and axis definitions
				

				export let disableAnimation = undefined // [boolean] 
				// disable the model's animation. can be set at any time.
				

				export let onModelLoadedObservable = undefined // [observable] 
				// observers registered here will be triggered when the model of this controller is done loading
				

				export let profileId = undefined // [string] 
				// the profile id of this motion controller
				

				export let rootMesh = undefined // [nullable] 
				// the root mesh of the model. it is null if the model was not yet initialized
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getAllComponentsOfType = (...args) => instance.getAllComponentsOfType(...args)

				export let getComponent = (...args) => instance.getComponent(...args)

				export let getComponentIds = (...args) => instance.getComponentIds(...args)

				export let getComponentOfType = (...args) => instance.getComponentOfType(...args)

				export let getMainComponent = (...args) => instance.getMainComponent(...args)

				export let loadModel = (...args) => instance.loadModel(...args)

				export let pulse = (...args) => instance.pulse(...args)

				export let updateFromXRFrame = (...args) => instance.updateFromXRFrame(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRMicrosoftMixedRealityController]`, ...args) : null

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
				if (gamepadObject != undefined) instance.gamepadObject = gamepadObject?.instance || gamepadObject
				gamepadObject = instance.gamepadObject
				if (handedness != undefined) instance.handedness = handedness?.instance || handedness
				handedness = instance.handedness

				handness = instance.handness
				if (disableAnimation != undefined) instance.disableAnimation = disableAnimation?.instance || disableAnimation
				disableAnimation = instance.disableAnimation
				if (onModelLoadedObservable != undefined) instance.onModelLoadedObservable = onModelLoadedObservable?.instance || onModelLoadedObservable
				onModelLoadedObservable = instance.onModelLoadedObservable
				if (profileId != undefined) instance.profileId = profileId?.instance || profileId
				profileId = instance.profileId
				if (rootMesh != undefined) instance.rootMesh = rootMesh?.instance || rootMesh
				rootMesh = instance.rootMesh

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

			