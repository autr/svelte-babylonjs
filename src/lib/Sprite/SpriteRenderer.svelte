
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					engine  * required
					capacity  * required
					epsilon  
					scene   
					autoResetAlpha  
					blendMode  
					cellHeight  
					cellWidth  
					disableDepthWrite  
					fogEnabled  
					texture  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let engine = undefined // [thinengine] * required
				// defines the engine the renderer works with
				

				export let capacity = undefined // [number] * required
				// defines the maximum allowed number of sprites
				

				export let epsilon = undefined // [number] 
				// defines the epsilon value to align texture (0.01 by default)
				

				export let scene = undefined // [nullable] 
				// defines the hosting scene
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SpriteRenderer(engine,capacity,epsilon,scene) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let autoResetAlpha = undefined // [boolean] 
				// gets or sets a boolean indicating if alpha mode is automaticallyreset.
				

				export let blendMode = undefined // [number] 
				// blend mode use to render the particle, it can be any ofthe static constants.alpha_x properties provided in this class.default value is constants.alpha_combine
				

				export let cellHeight = undefined // [number] 
				// defines the default height of a cell in the spritesheet
				

				export let cellWidth = undefined // [number] 
				// defines the default width of a cell in the spritesheet
				

				export let disableDepthWrite = undefined // [boolean] 
				// disables writing to the depth buffer when rendering the sprites.it can be handy to disable depth writing when using textures without alpha channeland setting some specific blend modes.
				

				export let fogEnabled = undefined // [boolean] 
				// gets or sets a boolean indicating if the manager must consider scene fog when rendering
				

				export let texture = undefined // [nullable] 
				// defines the texture of the spritesheet
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let rebuild = (...args) => instance.rebuild(...args)

				export let render = (...args) => instance.render(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SpriteRenderer]`, ...args) : null

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

												if (engine != undefined) instance.engine = engine?.instance || engine
				engine = instance.engine
				if (capacity != undefined) instance.capacity = capacity?.instance || capacity
				capacity = instance.capacity
				if (epsilon != undefined) instance.epsilon = epsilon?.instance || epsilon
				epsilon = instance.epsilon
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (autoResetAlpha != undefined) instance.autoResetAlpha = autoResetAlpha?.instance || autoResetAlpha
				autoResetAlpha = instance.autoResetAlpha
				if (blendMode != undefined) instance.blendMode = blendMode?.instance || blendMode
				blendMode = instance.blendMode
				if (cellHeight != undefined) instance.cellHeight = cellHeight?.instance || cellHeight
				cellHeight = instance.cellHeight
				if (cellWidth != undefined) instance.cellWidth = cellWidth?.instance || cellWidth
				cellWidth = instance.cellWidth
				if (disableDepthWrite != undefined) instance.disableDepthWrite = disableDepthWrite?.instance || disableDepthWrite
				disableDepthWrite = instance.disableDepthWrite
				if (fogEnabled != undefined) instance.fogEnabled = fogEnabled?.instance || fogEnabled
				fogEnabled = instance.fogEnabled
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

			