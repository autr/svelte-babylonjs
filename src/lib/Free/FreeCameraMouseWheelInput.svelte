
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					camera  
					onChangedObservable  
					wheelPrecisionX  
					wheelPrecisionY  
					wheelPrecisionZ  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FreeCameraMouseWheelInput() : {}

				// ================ ACCESSORS ================

				
				export let wheelXMoveRelative = undefined // [nullable] 
				// 
				

				export let wheelXMoveScene = undefined // [nullable] 
				// 
				

				export let wheelXRotateRelative = undefined // [nullable] 
				// 
				

				export let wheelYMoveRelative = undefined // [nullable] 
				// 
				

				export let wheelYMoveScene = undefined // [nullable] 
				// 
				

				export let wheelYRotateRelative = undefined // [nullable] 
				// 
				

				export let wheelZMoveRelative = undefined // [nullable] 
				// 
				

				export let wheelZMoveScene = undefined // [nullable] 
				// 
				

				export let wheelZRotateRelative = undefined // [nullable] 
				// 
				

				// ================ PROPERTIES ================

				
				export let camera = undefined // [freecamera] 
				// defines the camera the input is attached to.
				

				export let onChangedObservable = undefined // [observable] 
				// observable for when a mouse wheel move event occurs.
				

				export let wheelPrecisionX = undefined // [number] 
				// how fast is the camera moves in relation to x axis mousewheel events.use negative value to reverse direction.
				

				export let wheelPrecisionY = undefined // [number] 
				// how fast is the camera moves in relation to y axis mousewheel events.use negative value to reverse direction.
				

				export let wheelPrecisionZ = undefined // [number] 
				// how fast is the camera moves in relation to z axis mousewheel events.use negative value to reverse direction.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FreeCameraMouseWheelInput]`, ...args) : null

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

												if (wheelXMoveRelative != undefined) instance.wheelXMoveRelative = wheelXMoveRelative?.instance || wheelXMoveRelative
				wheelXMoveRelative = instance.wheelXMoveRelative
				if (wheelXMoveScene != undefined) instance.wheelXMoveScene = wheelXMoveScene?.instance || wheelXMoveScene
				wheelXMoveScene = instance.wheelXMoveScene
				if (wheelXRotateRelative != undefined) instance.wheelXRotateRelative = wheelXRotateRelative?.instance || wheelXRotateRelative
				wheelXRotateRelative = instance.wheelXRotateRelative
				if (wheelYMoveRelative != undefined) instance.wheelYMoveRelative = wheelYMoveRelative?.instance || wheelYMoveRelative
				wheelYMoveRelative = instance.wheelYMoveRelative
				if (wheelYMoveScene != undefined) instance.wheelYMoveScene = wheelYMoveScene?.instance || wheelYMoveScene
				wheelYMoveScene = instance.wheelYMoveScene
				if (wheelYRotateRelative != undefined) instance.wheelYRotateRelative = wheelYRotateRelative?.instance || wheelYRotateRelative
				wheelYRotateRelative = instance.wheelYRotateRelative
				if (wheelZMoveRelative != undefined) instance.wheelZMoveRelative = wheelZMoveRelative?.instance || wheelZMoveRelative
				wheelZMoveRelative = instance.wheelZMoveRelative
				if (wheelZMoveScene != undefined) instance.wheelZMoveScene = wheelZMoveScene?.instance || wheelZMoveScene
				wheelZMoveScene = instance.wheelZMoveScene
				if (wheelZRotateRelative != undefined) instance.wheelZRotateRelative = wheelZRotateRelative?.instance || wheelZRotateRelative
				wheelZRotateRelative = instance.wheelZRotateRelative
				if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (onChangedObservable != undefined) instance.onChangedObservable = onChangedObservable?.instance || onChangedObservable
				onChangedObservable = instance.onChangedObservable
				if (wheelPrecisionX != undefined) instance.wheelPrecisionX = wheelPrecisionX?.instance || wheelPrecisionX
				wheelPrecisionX = instance.wheelPrecisionX
				if (wheelPrecisionY != undefined) instance.wheelPrecisionY = wheelPrecisionY?.instance || wheelPrecisionY
				wheelPrecisionY = instance.wheelPrecisionY
				if (wheelPrecisionZ != undefined) instance.wheelPrecisionZ = wheelPrecisionZ?.instance || wheelPrecisionZ
				wheelPrecisionZ = instance.wheelPrecisionZ

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

			