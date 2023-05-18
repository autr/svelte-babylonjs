
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					options   
					bias  
					leftColor  
					power  
					rightColor  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let options = undefined // [ifresnelparameterscreationoptions] 
				// provide your own settings to optionally to override defaults
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.FresnelParameters(options) : {}

				// ================ ACCESSORS ================

				
				export let isEnabled = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let bias = undefined // [number] 
				// define bias applied to computed fresnel term
				

				export let leftColor = undefined // [color3] 
				// define the color used on edges (grazing angle)
				

				export let power = undefined // [number] 
				// defined the power exponent applied to fresnel term
				

				export let rightColor = undefined // [color3] 
				// define the color used on center
				

				// ================ METHODS ================

				
				export let clone = (...args) => instance.clone(...args)

				export let equals = (...args) => instance.equals(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:FresnelParameters]`, ...args) : null

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

												if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled
				if (bias != undefined) instance.bias = bias?.instance || bias
				bias = instance.bias
				if (leftColor != undefined) instance.leftColor = leftColor?.instance || leftColor
				leftColor = instance.leftColor
				if (power != undefined) instance.power = power?.instance || power
				power = instance.power
				if (rightColor != undefined) instance.rightColor = rightColor?.instance || rightColor
				rightColor = instance.rightColor

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

			