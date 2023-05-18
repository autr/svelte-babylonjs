
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					camera  
					customComputeDeltaFromMouseWheel  
					wheelDeltaPercentage  
					wheelPrecision  
					zoomToMouseLocation  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ArcRotateCameraMouseWheelInput() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let camera = undefined // [arcrotatecamera] 
				// defines the camera the input is attached to.
				

				export let customComputeDeltaFromMouseWheel = undefined // [nullable] 
				// if set, this function will be used to set the radius delta that will be added to the current camera radius
				

				export let wheelDeltaPercentage = undefined // [number] 
				// wheeldeltapercentage will be used instead of wheelprecision if different from 0.it defines the percentage of current camera.radius to use as delta when wheel is used.
				

				export let wheelPrecision = undefined // [number] 
				// gets or set the mouse wheel precision or how fast is the camera zooming.
				

				export let zoomToMouseLocation = undefined // [boolean] 
				// gets or set the boolean value that controls whether or not the mouse wheelzooms to the location of the mouse pointer or not.  the default is false.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ArcRotateCameraMouseWheelInput]`, ...args) : null

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
				if (customComputeDeltaFromMouseWheel != undefined) instance.customComputeDeltaFromMouseWheel = customComputeDeltaFromMouseWheel?.instance || customComputeDeltaFromMouseWheel
				customComputeDeltaFromMouseWheel = instance.customComputeDeltaFromMouseWheel
				if (wheelDeltaPercentage != undefined) instance.wheelDeltaPercentage = wheelDeltaPercentage?.instance || wheelDeltaPercentage
				wheelDeltaPercentage = instance.wheelDeltaPercentage
				if (wheelPrecision != undefined) instance.wheelPrecision = wheelPrecision?.instance || wheelPrecision
				wheelPrecision = instance.wheelPrecision
				if (zoomToMouseLocation != undefined) instance.zoomToMouseLocation = zoomToMouseLocation?.instance || zoomToMouseLocation
				zoomToMouseLocation = instance.zoomToMouseLocation

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

			