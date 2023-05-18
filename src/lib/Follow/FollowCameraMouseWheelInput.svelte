
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					axisControlHeight  
					axisControlRadius  
					axisControlRotation  
					camera  
					wheelDeltaPercentage  
					wheelPrecision  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FollowCameraMouseWheelInput() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let axisControlHeight = undefined // [boolean] 
				// moue wheel controls height. (mouse wheel modifies camera.heightoffset value.)
				

				export let axisControlRadius = undefined // [boolean] 
				// moue wheel controls zoom. (mouse wheel modifies camera.radius value.)
				

				export let axisControlRotation = undefined // [boolean] 
				// moue wheel controls angle. (mouse wheel modifies camera.rotationoffset value.)
				

				export let camera = undefined // [followcamera] 
				// defines the camera the input is attached to.
				

				export let wheelDeltaPercentage = undefined // [number] 
				// wheeldeltapercentage will be used instead of wheelprecision if different from 0.it defines the percentage of current camera.radius to use as delta when wheel is used.
				

				export let wheelPrecision = undefined // [number] 
				// gets or set the mouse wheel precision or how fast is the camera moves inrelation to mousewheel events.
				

				// ================ METHODS ================

				
				export let attachControl = (...args) => instance.attachControl(...args)

				export let detachControl = (...args) => instance.detachControl(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getSimpleName = (...args) => instance.getSimpleName(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FollowCameraMouseWheelInput]`, ...args) : null

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

												if (axisControlHeight != undefined) instance.axisControlHeight = axisControlHeight?.instance || axisControlHeight
				axisControlHeight = instance.axisControlHeight
				if (axisControlRadius != undefined) instance.axisControlRadius = axisControlRadius?.instance || axisControlRadius
				axisControlRadius = instance.axisControlRadius
				if (axisControlRotation != undefined) instance.axisControlRotation = axisControlRotation?.instance || axisControlRotation
				axisControlRotation = instance.axisControlRotation
				if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (wheelDeltaPercentage != undefined) instance.wheelDeltaPercentage = wheelDeltaPercentage?.instance || wheelDeltaPercentage
				wheelDeltaPercentage = instance.wheelDeltaPercentage
				if (wheelPrecision != undefined) instance.wheelPrecision = wheelPrecision?.instance || wheelPrecision
				wheelPrecision = instance.wheelPrecision

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

			