
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					id  * required
					index  * required
					browserGamepad  * required
					leftStickX  
					leftStickY  
					rightStickX  
					rightStickY   
					type  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let id = undefined // [string] * required
				// the id of the gamepad
				

				export let index = undefined // [number] * required
				// the index of the gamepad
				

				export let browserGamepad = undefined // [any] * required
				// the browser gamepad
				

				export let leftStickX = undefined // [number] 
				// the x component of the left joystick
				

				export let leftStickY = undefined // [number] 
				// the y component of the left joystick
				

				export let rightStickX = undefined // [number] 
				// the x component of the right joystick
				

				export let rightStickY = undefined // [number] 
				// the y component of the right joystick
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Gamepad(id,index,browserGamepad,leftStickX,leftStickY,rightStickX,rightStickY) : {}

				// ================ ACCESSORS ================

				
				export let isConnected = undefined // [boolean] 
				// 
				

				export let leftStick = undefined // [stickvalues] 
				// 
				

				export let rightStick = undefined // [stickvalues] 
				// 
				

				// ================ PROPERTIES ================

				
				export let type = undefined // [number] 
				// specifies what type of gamepad this represents
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let onleftstickchanged = (...args) => instance.onleftstickchanged(...args)

				export let onrightstickchanged = (...args) => instance.onrightstickchanged(...args)

				export let update = (...args) => instance.update(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Gamepad]`, ...args) : null

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

												if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (index != undefined) instance.index = index?.instance || index
				index = instance.index
				if (browserGamepad != undefined) instance.browserGamepad = browserGamepad?.instance || browserGamepad
				browserGamepad = instance.browserGamepad
				if (leftStickX != undefined) instance.leftStickX = leftStickX?.instance || leftStickX
				leftStickX = instance.leftStickX
				if (leftStickY != undefined) instance.leftStickY = leftStickY?.instance || leftStickY
				leftStickY = instance.leftStickY
				if (rightStickX != undefined) instance.rightStickX = rightStickX?.instance || rightStickX
				rightStickX = instance.rightStickX
				if (rightStickY != undefined) instance.rightStickY = rightStickY?.instance || rightStickY
				rightStickY = instance.rightStickY

				isConnected = instance.isConnected
				if (leftStick != undefined) instance.leftStick = leftStick?.instance || leftStick
				leftStick = instance.leftStick
				if (rightStick != undefined) instance.rightStick = rightStick?.instance || rightStick
				rightStick = instance.rightStick
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

			