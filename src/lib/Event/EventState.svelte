
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					mask  * required
					skipNextObservers  
					target  
					currentTarget   
					lastReturnValue  
					userInfo  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let mask = undefined // [number] * required
				// defines the mask associated with this state
				

				export let skipNextObservers = undefined // [boolean] 
				// defines a flag which will instruct the observable to skip following observers when set to true
				

				export let target = undefined // [any] 
				// defines the original target of the state
				

				export let currentTarget = undefined // [any] 
				// defines the current target of the state
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.EventState(mask,skipNextObservers,target,currentTarget) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let lastReturnValue = undefined // [any] 
				// this will be populated with the return value of the last function that was executed.if it is the first function in the callback chain it will be the event data.
				

				export let userInfo = undefined // [any] 
				// user defined information that will be sent to observers
				

				// ================ METHODS ================

				
				export let initialize = (...args) => instance.initialize(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:EventState]`, ...args) : null

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

												if (mask != undefined) instance.mask = mask?.instance || mask
				mask = instance.mask
				if (skipNextObservers != undefined) instance.skipNextObservers = skipNextObservers?.instance || skipNextObservers
				skipNextObservers = instance.skipNextObservers
				if (target != undefined) instance.target = target?.instance || target
				target = instance.target
				if (currentTarget != undefined) instance.currentTarget = currentTarget?.instance || currentTarget
				currentTarget = instance.currentTarget
				if (lastReturnValue != undefined) instance.lastReturnValue = lastReturnValue?.instance || lastReturnValue
				lastReturnValue = instance.lastReturnValue
				if (userInfo != undefined) instance.userInfo = userInfo?.instance || userInfo
				userInfo = instance.userInfo

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

			