
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					targetAlpha  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AutoRotationBehavior() : {}

				// ================ ACCESSORS ================

				
				export let idleRotationSpeed = undefined // [number] 
				// 
				

				export let idleRotationSpinupTime = undefined // [number] 
				// 
				

				export let idleRotationWaitTime = undefined // [number] 
				// 
				

				export let name = undefined // [string] 
				// gets or sets behavior's name
				

				export let rotationInProgress = undefined // [boolean] 
				// 
				

				export let zoomStopsAnimation = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let targetAlpha = undefined // [nullable] 
				// 
				

				// ================ METHODS ================

				
				export let attach = (...args) => instance.attach(...args)

				export let detach = (...args) => instance.detach(...args)

				export let init = (...args) => instance.init(...args)

				export let resetLastInteractionTime = (...args) => instance.resetLastInteractionTime(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AutoRotationBehavior]`, ...args) : null

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

												if (idleRotationSpeed != undefined) instance.idleRotationSpeed = idleRotationSpeed?.instance || idleRotationSpeed
				idleRotationSpeed = instance.idleRotationSpeed
				if (idleRotationSpinupTime != undefined) instance.idleRotationSpinupTime = idleRotationSpinupTime?.instance || idleRotationSpinupTime
				idleRotationSpinupTime = instance.idleRotationSpinupTime
				if (idleRotationWaitTime != undefined) instance.idleRotationWaitTime = idleRotationWaitTime?.instance || idleRotationWaitTime
				idleRotationWaitTime = instance.idleRotationWaitTime

				name = instance.name

				rotationInProgress = instance.rotationInProgress
				if (zoomStopsAnimation != undefined) instance.zoomStopsAnimation = zoomStopsAnimation?.instance || zoomStopsAnimation
				zoomStopsAnimation = instance.zoomStopsAnimation
				if (targetAlpha != undefined) instance.targetAlpha = targetAlpha?.instance || targetAlpha
				targetAlpha = instance.targetAlpha

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

			