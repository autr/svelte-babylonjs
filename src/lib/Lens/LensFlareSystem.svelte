
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					emitter  * required
					scene  * required 
					borderLimit  
					id  
					layerMask  
					lensFlares  
					meshesSelectionPredicate  
					viewportBorder  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// define the name of the lens flare system in the scene
				

				export let emitter = undefined // [any] * required
				// define the source (the emitter) of the lens flares (it can be a camera, a light or a mesh).
				

				export let scene = undefined // [scene] * required
				// define the scene the lens flare system belongs to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.LensFlareSystem(name,emitter,scene) : {}

				// ================ ACCESSORS ================

				
				export let isEnabled = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let borderLimit = undefined // [number] 
				// define a limit from the border the lens flare can be visible.
				

				export let id = undefined // [string] 
				// define the id of the lens flare system in the scene.(equal to name by default)
				

				export let layerMask = undefined // [number] 
				// restricts the rendering of the effect to only the camera rendering this layer mask.
				

				export let lensFlares = undefined // [array] 
				// list of lens flares used in this system.
				

				export let meshesSelectionPredicate = undefined // [reflection] 
				// 
				

				export let viewportBorder = undefined // [number] 
				// define a viewport border we do not want to see the lens flare in.
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getEmitter = (...args) => instance.getEmitter(...args)

				export let getEmitterPosition = (...args) => instance.getEmitterPosition(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let rebuild = (...args) => instance.rebuild(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setEmitter = (...args) => instance.setEmitter(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:LensFlareSystem]`, ...args) : null

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

												if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (emitter != undefined) instance.emitter = emitter?.instance || emitter
				emitter = instance.emitter
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled
				if (borderLimit != undefined) instance.borderLimit = borderLimit?.instance || borderLimit
				borderLimit = instance.borderLimit
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (layerMask != undefined) instance.layerMask = layerMask?.instance || layerMask
				layerMask = instance.layerMask
				if (lensFlares != undefined) instance.lensFlares = lensFlares?.instance || lensFlares
				lensFlares = instance.lensFlares
				if (meshesSelectionPredicate != undefined) instance.meshesSelectionPredicate = meshesSelectionPredicate?.instance || meshesSelectionPredicate
				meshesSelectionPredicate = instance.meshesSelectionPredicate
				if (viewportBorder != undefined) instance.viewportBorder = viewportBorder?.instance || viewportBorder
				viewportBorder = instance.viewportBorder

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

			