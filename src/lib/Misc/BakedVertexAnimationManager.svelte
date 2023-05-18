
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene   
					animationParameters  
					isEnabled  
					texture  
					time  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [nullable] 
				// defines the current scene
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.BakedVertexAnimationManager(scene) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let animationParameters = undefined // [vector4] 
				// the animation parameters for the mesh. see setanimationparameters()
				

				export let isEnabled = undefined // [boolean] 
				// enable or disable the vertex animation manager
				

				export let texture = undefined // [nullable] 
				// the vertex animation texture
				

				export let time = undefined // [number] 
				// the time counter, to pick the correct animation frame.
				

				// ================ METHODS ================

				
				export let bind = (...args) => instance.bind(...args)

				export let clone = (...args) => instance.clone(...args)

				export let copyTo = (...args) => instance.copyTo(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let parse = (...args) => instance.parse(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setAnimationParameters = (...args) => instance.setAnimationParameters(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:BakedVertexAnimationManager]`, ...args) : null

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
				if (animationParameters != undefined) instance.animationParameters = animationParameters?.instance || animationParameters
				animationParameters = instance.animationParameters
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled
				if (texture != undefined) instance.texture = texture?.instance || texture
				texture = instance.texture
				if (time != undefined) instance.time = time?.instance || time
				time = instance.time

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

			