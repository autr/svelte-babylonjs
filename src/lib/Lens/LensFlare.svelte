
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					size  * required
					position  * required
					color  * required
					imgUrl  * required
					system  * required 
					alphaMode  
					texture  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let size = undefined // [number] * required
				// define the size of the lens flare in the system (a floating value between 0 and 1)
				

				export let position = undefined // [number] * required
				// define the position of the lens flare in the system. (a floating value between -1 and 1). a value of 0 is located on the emitter. a value greater than 0 is beyond the emitter and a value lesser than 0 is behind.
				

				export let color = undefined // [color3] * required
				// define the lens color
				

				export let imgUrl = undefined // [string] * required
				// define the lens texture url
				

				export let system = undefined // [lensflaresystem] * required
				// define the 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.LensFlare(size,position,color,imgUrl,system) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let alphaMode = undefined // [number] 
				// define the alpha mode to render this particular lens.
				

				export let texture = undefined // [nullable] 
				// define the lens texture.
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let AddFlare = (...args) => instance.AddFlare(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:LensFlare]`, ...args) : null

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

												if (size != undefined) instance.size = size?.instance || size
				size = instance.size
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
				if (color != undefined) instance.color = color?.instance || color
				color = instance.color
				if (imgUrl != undefined) instance.imgUrl = imgUrl?.instance || imgUrl
				imgUrl = instance.imgUrl
				if (system != undefined) instance.system = system?.instance || system
				system = instance.system
				if (alphaMode != undefined) instance.alphaMode = alphaMode?.instance || alphaMode
				alphaMode = instance.alphaMode
				if (texture != undefined) instance.texture = texture?.instance || texture
				texture = instance.texture

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

			