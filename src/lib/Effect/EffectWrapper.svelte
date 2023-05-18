
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					creationOptions  * required 
					onApplyObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let creationOptions = undefined // [effectwrappercreationoptions] * required
				// options to create the effect
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.EffectWrapper(creationOptions) : {}

				// ================ ACCESSORS ================

				
				export let effect = undefined // [effect] 
				// 
				

				// ================ PROPERTIES ================

				
				export let onApplyObservable = undefined // [observable] 
				// event that is fired right before the effect is drawn (should be used to update uniforms)
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:EffectWrapper]`, ...args) : null

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

												if (creationOptions != undefined) instance.creationOptions = creationOptions?.instance || creationOptions
				creationOptions = instance.creationOptions
				if (effect != undefined) instance.effect = effect?.instance || effect
				effect = instance.effect
				if (onApplyObservable != undefined) instance.onApplyObservable = onApplyObservable?.instance || onApplyObservable
				onApplyObservable = instance.onApplyObservable

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

			