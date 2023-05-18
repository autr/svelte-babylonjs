
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.DefaultKTX2DecoderOptions() : {}

				// ================ ACCESSORS ================

				
				export let bypassTranscoders = undefined // [union] 
				// 
				

				export let forceR8 = undefined // [union] 
				// 
				

				export let forceRG8 = undefined // [union] 
				// 
				

				export let forceRGBA = undefined // [union] 
				// 
				

				export let isDirty = undefined // [boolean] 
				// 
				

				export let useRGBAIfASTCBC7NotAvailableWhenUASTC = undefined // [union] 
				// 
				

				export let useRGBAIfOnlyBC1BC3AvailableWhenUASTC = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:DefaultKTX2DecoderOptions]`, ...args) : null

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

												if (bypassTranscoders != undefined) instance.bypassTranscoders = bypassTranscoders?.instance || bypassTranscoders
				bypassTranscoders = instance.bypassTranscoders
				if (forceR8 != undefined) instance.forceR8 = forceR8?.instance || forceR8
				forceR8 = instance.forceR8
				if (forceRG8 != undefined) instance.forceRG8 = forceRG8?.instance || forceRG8
				forceRG8 = instance.forceRG8
				if (forceRGBA != undefined) instance.forceRGBA = forceRGBA?.instance || forceRGBA
				forceRGBA = instance.forceRGBA

				isDirty = instance.isDirty
				if (useRGBAIfASTCBC7NotAvailableWhenUASTC != undefined) instance.useRGBAIfASTCBC7NotAvailableWhenUASTC = useRGBAIfASTCBC7NotAvailableWhenUASTC?.instance || useRGBAIfASTCBC7NotAvailableWhenUASTC
				useRGBAIfASTCBC7NotAvailableWhenUASTC = instance.useRGBAIfASTCBC7NotAvailableWhenUASTC
				if (useRGBAIfOnlyBC1BC3AvailableWhenUASTC != undefined) instance.useRGBAIfOnlyBC1BC3AvailableWhenUASTC = useRGBAIfOnlyBC1BC3AvailableWhenUASTC?.instance || useRGBAIfOnlyBC1BC3AvailableWhenUASTC
				useRGBAIfOnlyBC1BC3AvailableWhenUASTC = instance.useRGBAIfOnlyBC1BC3AvailableWhenUASTC

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

			