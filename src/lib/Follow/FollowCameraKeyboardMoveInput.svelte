
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					camera  
					heightSensibility  
					keysHeightOffsetDecr  
					keysHeightOffsetIncr  
					keysHeightOffsetModifierAlt  
					keysHeightOffsetModifierCtrl  
					keysHeightOffsetModifierShift  
					keysRadiusDecr  
					keysRadiusIncr  
					keysRadiusModifierAlt  
					keysRadiusModifierCtrl  
					keysRadiusModifierShift  
					keysRotationOffsetDecr  
					keysRotationOffsetIncr  
					keysRotationOffsetModifierAlt  
					keysRotationOffsetModifierCtrl  
					keysRotationOffsetModifierShift  
					radiusSensibility  
					rotationSensibility  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FollowCameraKeyboardMoveInput() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let camera = undefined // [followcamera] 
				// defines the camera the input is attached to.
				

				export let heightSensibility = undefined // [number] 
				// defines the rate of change of heightoffset.
				

				export let keysHeightOffsetDecr = undefined // [array] 
				// defines the list of key codes associated with the down action (decrease heightoffset)
				

				export let keysHeightOffsetIncr = undefined // [array] 
				// defines the list of key codes associated with the up action (increase heightoffset)
				

				export let keysHeightOffsetModifierAlt = undefined // [boolean] 
				// defines whether the alt modifier key is required to move up/down (alter heightoffset)
				

				export let keysHeightOffsetModifierCtrl = undefined // [boolean] 
				// defines whether the ctrl modifier key is required to move up/down (alter heightoffset)
				

				export let keysHeightOffsetModifierShift = undefined // [boolean] 
				// defines whether the shift modifier key is required to move up/down (alter heightoffset)
				

				export let keysRadiusDecr = undefined // [array] 
				// defines the list of key codes associated with the zoom-out action (increase radius)
				

				export let keysRadiusIncr = undefined // [array] 
				// defines the list of key codes associated with the zoom-in action (decrease radius)
				

				export let keysRadiusModifierAlt = undefined // [boolean] 
				// defines whether the alt modifier key is required to zoom in/out (alter radius value)
				

				export let keysRadiusModifierCtrl = undefined // [boolean] 
				// defines whether the ctrl modifier key is required to zoom in/out (alter radius value)
				

				export let keysRadiusModifierShift = undefined // [boolean] 
				// defines whether the shift modifier key is required to zoom in/out (alter radius value)
				

				export let keysRotationOffsetDecr = undefined // [array] 
				// defines the list of key codes associated with the right action (decrease rotationoffset)
				

				export let keysRotationOffsetIncr = undefined // [array] 
				// defines the list of key codes associated with the left action (increase rotationoffset)
				

				export let keysRotationOffsetModifierAlt = undefined // [boolean] 
				// defines whether the alt modifier key is required to move left/right (alter rotationoffset)
				

				export let keysRotationOffsetModifierCtrl = undefined // [boolean] 
				// defines whether the ctrl modifier key is required to move left/right (alter rotationoffset)
				

				export let keysRotationOffsetModifierShift = undefined // [boolean] 
				// defines whether the shift modifier key is required to move left/right (alter rotationoffset)
				

				export let radiusSensibility = undefined // [number] 
				// defines the rate of change of radius.
				

				export let rotationSensibility = undefined // [number] 
				// defines the rate of change of rotationoffset.
				

				// ================ METHODS ================

				
				export let attachControl = (...args) => instance.attachControl(...args)

				export let checkInputs = (...args) => instance.checkInputs(...args)

				export let detachControl = (...args) => instance.detachControl(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getSimpleName = (...args) => instance.getSimpleName(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FollowCameraKeyboardMoveInput]`, ...args) : null

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

												if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (heightSensibility != undefined) instance.heightSensibility = heightSensibility?.instance || heightSensibility
				heightSensibility = instance.heightSensibility
				if (keysHeightOffsetDecr != undefined) instance.keysHeightOffsetDecr = keysHeightOffsetDecr?.instance || keysHeightOffsetDecr
				keysHeightOffsetDecr = instance.keysHeightOffsetDecr
				if (keysHeightOffsetIncr != undefined) instance.keysHeightOffsetIncr = keysHeightOffsetIncr?.instance || keysHeightOffsetIncr
				keysHeightOffsetIncr = instance.keysHeightOffsetIncr
				if (keysHeightOffsetModifierAlt != undefined) instance.keysHeightOffsetModifierAlt = keysHeightOffsetModifierAlt?.instance || keysHeightOffsetModifierAlt
				keysHeightOffsetModifierAlt = instance.keysHeightOffsetModifierAlt
				if (keysHeightOffsetModifierCtrl != undefined) instance.keysHeightOffsetModifierCtrl = keysHeightOffsetModifierCtrl?.instance || keysHeightOffsetModifierCtrl
				keysHeightOffsetModifierCtrl = instance.keysHeightOffsetModifierCtrl
				if (keysHeightOffsetModifierShift != undefined) instance.keysHeightOffsetModifierShift = keysHeightOffsetModifierShift?.instance || keysHeightOffsetModifierShift
				keysHeightOffsetModifierShift = instance.keysHeightOffsetModifierShift
				if (keysRadiusDecr != undefined) instance.keysRadiusDecr = keysRadiusDecr?.instance || keysRadiusDecr
				keysRadiusDecr = instance.keysRadiusDecr
				if (keysRadiusIncr != undefined) instance.keysRadiusIncr = keysRadiusIncr?.instance || keysRadiusIncr
				keysRadiusIncr = instance.keysRadiusIncr
				if (keysRadiusModifierAlt != undefined) instance.keysRadiusModifierAlt = keysRadiusModifierAlt?.instance || keysRadiusModifierAlt
				keysRadiusModifierAlt = instance.keysRadiusModifierAlt
				if (keysRadiusModifierCtrl != undefined) instance.keysRadiusModifierCtrl = keysRadiusModifierCtrl?.instance || keysRadiusModifierCtrl
				keysRadiusModifierCtrl = instance.keysRadiusModifierCtrl
				if (keysRadiusModifierShift != undefined) instance.keysRadiusModifierShift = keysRadiusModifierShift?.instance || keysRadiusModifierShift
				keysRadiusModifierShift = instance.keysRadiusModifierShift
				if (keysRotationOffsetDecr != undefined) instance.keysRotationOffsetDecr = keysRotationOffsetDecr?.instance || keysRotationOffsetDecr
				keysRotationOffsetDecr = instance.keysRotationOffsetDecr
				if (keysRotationOffsetIncr != undefined) instance.keysRotationOffsetIncr = keysRotationOffsetIncr?.instance || keysRotationOffsetIncr
				keysRotationOffsetIncr = instance.keysRotationOffsetIncr
				if (keysRotationOffsetModifierAlt != undefined) instance.keysRotationOffsetModifierAlt = keysRotationOffsetModifierAlt?.instance || keysRotationOffsetModifierAlt
				keysRotationOffsetModifierAlt = instance.keysRotationOffsetModifierAlt
				if (keysRotationOffsetModifierCtrl != undefined) instance.keysRotationOffsetModifierCtrl = keysRotationOffsetModifierCtrl?.instance || keysRotationOffsetModifierCtrl
				keysRotationOffsetModifierCtrl = instance.keysRotationOffsetModifierCtrl
				if (keysRotationOffsetModifierShift != undefined) instance.keysRotationOffsetModifierShift = keysRotationOffsetModifierShift?.instance || keysRotationOffsetModifierShift
				keysRotationOffsetModifierShift = instance.keysRotationOffsetModifierShift
				if (radiusSensibility != undefined) instance.radiusSensibility = radiusSensibility?.instance || radiusSensibility
				radiusSensibility = instance.radiusSensibility
				if (rotationSensibility != undefined) instance.rotationSensibility = rotationSensibility?.instance || rotationSensibility
				rotationSensibility = instance.rotationSensibility

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

			