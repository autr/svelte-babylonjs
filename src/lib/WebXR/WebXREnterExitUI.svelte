
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_scene  * required
					options  * required 
					activeButtonChangedObservable  
					overlay (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _scene = undefined // [scene] * required
				// babylon scene object to use
				

				export let options = undefined // [webxrenterexituioptions] * required
				// (read-only) version of the options passed to this ui
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXREnterExitUI(_scene,options) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let activeButtonChangedObservable = undefined // [observable] 
				// fired every time the active button is changed.when xr is entered via a button that launches xr that button will be the callback parameterwhen exiting xr the callback parameter will be null)
				

				export let overlay = undefined // [htmldivelement] 
				// the html div element to which buttons are added.
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let setHelperAsync = (...args) => instance.setHelperAsync(...args)

				export let CreateAsync = (...args) => instance.CreateAsync(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXREnterExitUI]`, ...args) : null

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

												if (_scene != undefined) instance._scene = _scene?.instance || _scene
				_scene = instance._scene
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (activeButtonChangedObservable != undefined) instance.activeButtonChangedObservable = activeButtonChangedObservable?.instance || activeButtonChangedObservable
				activeButtonChangedObservable = instance.activeButtonChangedObservable

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

			