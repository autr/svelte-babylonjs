
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

				export let instance = browser ? new BB.MaterialStencilState() : {}

				// ================ ACCESSORS ================

				
				export let enabled = undefined // [boolean] 
				// 
				

				export let func = undefined // [number] 
				// 
				

				export let funcMask = undefined // [number] 
				// 
				

				export let funcRef = undefined // [number] 
				// 
				

				export let mask = undefined // [number] 
				// 
				

				export let opDepthFail = undefined // [number] 
				// 
				

				export let opStencilDepthPass = undefined // [number] 
				// 
				

				export let opStencilFail = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let copyTo = (...args) => instance.copyTo(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let parse = (...args) => instance.parse(...args)

				export let reset = (...args) => instance.reset(...args)

				export let serialize = (...args) => instance.serialize(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:MaterialStencilState]`, ...args) : null

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

												if (enabled != undefined) instance.enabled = enabled?.instance || enabled
				enabled = instance.enabled
				if (func != undefined) instance.func = func?.instance || func
				func = instance.func
				if (funcMask != undefined) instance.funcMask = funcMask?.instance || funcMask
				funcMask = instance.funcMask
				if (funcRef != undefined) instance.funcRef = funcRef?.instance || funcRef
				funcRef = instance.funcRef
				if (mask != undefined) instance.mask = mask?.instance || mask
				mask = instance.mask
				if (opDepthFail != undefined) instance.opDepthFail = opDepthFail?.instance || opDepthFail
				opDepthFail = instance.opDepthFail
				if (opStencilDepthPass != undefined) instance.opStencilDepthPass = opStencilDepthPass?.instance || opStencilDepthPass
				opStencilDepthPass = instance.opStencilDepthPass
				if (opStencilFail != undefined) instance.opStencilFail = opStencilFail?.instance || opStencilFail
				opStencilFail = instance.opStencilFail

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

			