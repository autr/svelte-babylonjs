
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					id  * required
					type  * required
					_buttonIndex  
					_axesIndices   
					onAxisValueChangedObservable  
					onButtonStateChangedObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let id = undefined // [string] * required
				// the id of this component
				

				export let type = undefined // [motioncontrollercomponenttype] * required
				// the type of the component
				

				export let _buttonIndex = undefined // [number] 
				// index in the buttons array of the gamepad
				

				export let _axesIndices = undefined // [array] 
				// indices of the values in the axes array of the gamepad
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRControllerComponent(id,type,_buttonIndex,_axesIndices) : {}

				// ================ ACCESSORS ================

				
				export let axes = undefined // [iwebxrmotioncontrolleraxesvalue] 
				// 
				

				export let changes = undefined // [iwebxrmotioncontrollercomponentchanges] 
				// 
				

				export let hasChanges = undefined // [boolean] 
				// 
				

				export let pressed = undefined // [boolean] 
				// 
				

				export let touched = undefined // [boolean] 
				// 
				

				export let value = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let onAxisValueChangedObservable = undefined // [observable] 
				// if axes are available for this component (like a touchpad or thumbstick) the observers will be notified whenthe axes data changes
				

				export let onButtonStateChangedObservable = undefined // [observable] 
				// observers registered here will be triggered when the state of a button changesstate change is either pressed / touched / value
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let isAxes = (...args) => instance.isAxes(...args)

				export let isButton = (...args) => instance.isButton(...args)

				export let update = (...args) => instance.update(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRControllerComponent]`, ...args) : null

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
				if (type != undefined) instance.type = type?.instance || type
				type = instance.type
				if (_buttonIndex != undefined) instance._buttonIndex = _buttonIndex?.instance || _buttonIndex
				_buttonIndex = instance._buttonIndex
				if (_axesIndices != undefined) instance._axesIndices = _axesIndices?.instance || _axesIndices
				_axesIndices = instance._axesIndices

				axes = instance.axes

				changes = instance.changes

				hasChanges = instance.hasChanges

				pressed = instance.pressed

				touched = instance.touched

				value = instance.value
				if (onAxisValueChangedObservable != undefined) instance.onAxisValueChangedObservable = onAxisValueChangedObservable?.instance || onAxisValueChangedObservable
				onAxisValueChangedObservable = instance.onAxisValueChangedObservable
				if (onButtonStateChangedObservable != undefined) instance.onButtonStateChangedObservable = onButtonStateChangedObservable?.instance || onButtonStateChangedObservable
				onButtonStateChangedObservable = instance.onButtonStateChangedObservable

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

			