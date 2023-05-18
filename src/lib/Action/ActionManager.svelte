
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene   
					actions  
					hoverCursor  
					isRecursive  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [nullable] 
				// defines the hosting scene
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ActionManager(scene) : {}

				// ================ ACCESSORS ================

				
				export let hasPickTriggers = undefined // [boolean] 
				// 
				

				export let hasPointerTriggers = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let actions = undefined // [array] 
				// gets the list of actions
				

				export let hoverCursor = undefined // [string] 
				// gets the cursor to use when hovering items
				

				export let isRecursive = undefined // [boolean] 
				// gets or sets a boolean indicating that the manager is recursive meaning that it can trigger action from children
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let hasSpecificTrigger = (...args) => instance.hasSpecificTrigger(...args)

				export let hasSpecificTriggers = (...args) => instance.hasSpecificTriggers(...args)

				export let hasSpecificTriggers2 = (...args) => instance.hasSpecificTriggers2(...args)

				export let processTrigger = (...args) => instance.processTrigger(...args)

				export let registerAction = (...args) => instance.registerAction(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let unregisterAction = (...args) => instance.unregisterAction(...args)

				export let GetTriggerName = (...args) => instance.GetTriggerName(...args)

				export let HasSpecificTrigger = (...args) => instance.HasSpecificTrigger(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ActionManager]`, ...args) : null

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

				hasPickTriggers = instance.hasPickTriggers

				hasPointerTriggers = instance.hasPointerTriggers
				if (actions != undefined) instance.actions = actions?.instance || actions
				actions = instance.actions
				if (hoverCursor != undefined) instance.hoverCursor = hoverCursor?.instance || hoverCursor
				hoverCursor = instance.hoverCursor
				if (isRecursive != undefined) instance.isRecursive = isRecursive?.instance || isRecursive
				isRecursive = instance.isRecursive

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

			