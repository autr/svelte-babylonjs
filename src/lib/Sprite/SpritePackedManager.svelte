
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					imgUrl  * required
					capacity  * required
					scene  * required
					spriteJSON  
					epsilon  
					samplingMode   
					isPickable  
					layerMask  
					metadata  
					onDisposeObservable  
					renderingGroupId  
					snippetId  
					sprites  
					uniqueId  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the manager's name
				

				export let imgUrl = undefined // [string] * required
				// defines the sprite sheet url
				

				export let capacity = undefined // [number] * required
				// defines the maximum allowed number of sprites
				

				export let scene = undefined // [scene] * required
				// defines the hosting scene
				

				export let spriteJSON = undefined // [union] 
				// null otherwise a json object defining sprite sheet data
				

				export let epsilon = undefined // [number] 
				// defines the epsilon value to align texture (0.01 by default)
				

				export let samplingMode = undefined // [number] 
				// defines the sampling mode to use with spritesheet
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SpritePackedManager(name,imgUrl,capacity,scene,spriteJSON,epsilon,samplingMode) : {}

				// ================ ACCESSORS ================

				
				export let blendMode = undefined // [number] 
				// 
				

				export let cellHeight = undefined // [number] 
				// defines the default height of a cell in the spritesheet
				

				export let cellWidth = undefined // [number] 
				// defines the default width of a cell in the spritesheet
				

				export let children = undefined // [array] 
				// 
				

				export let disableDepthWrite = undefined // [boolean] 
				// 
				

				export let fogEnabled = undefined // [boolean] 
				// 
				

				export let onDispose = undefined // [] 
				// 
				

				export let texture = undefined // [texture] 
				// gets or sets the spritesheet texture
				

				// ================ PROPERTIES ================

				
				export let isPickable = undefined // [boolean] 
				// gets or sets a boolean indicating if the sprites are pickable
				

				export let layerMask = undefined // [number] 
				// gets or sets camera layer mask
				

				export let metadata = undefined // [any] 
				// gets or sets an object used to store user defined information for the sprite manager
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the manager is disposed.
				

				export let renderingGroupId = undefined // [number] 
				// gets or sets the rendering group id (0 by default)
				

				export let snippetId = undefined // [string] 
				// snippet id if the manager was created from the snippet server
				

				export let sprites = undefined // [array] 
				// gets the list of sprites
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the sprite
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let intersects = (...args) => instance.intersects(...args)

				export let multiIntersects = (...args) => instance.multiIntersects(...args)

				export let rebuild = (...args) => instance.rebuild(...args)

				export let render = (...args) => instance.render(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let ParseFromFileAsync = (...args) => instance.ParseFromFileAsync(...args)

				export let ParseFromSnippetAsync = (...args) => instance.ParseFromSnippetAsync(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SpritePackedManager]`, ...args) : null

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
				if (imgUrl != undefined) instance.imgUrl = imgUrl?.instance || imgUrl
				imgUrl = instance.imgUrl
				if (capacity != undefined) instance.capacity = capacity?.instance || capacity
				capacity = instance.capacity
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (spriteJSON != undefined) instance.spriteJSON = spriteJSON?.instance || spriteJSON
				spriteJSON = instance.spriteJSON
				if (epsilon != undefined) instance.epsilon = epsilon?.instance || epsilon
				epsilon = instance.epsilon
				if (samplingMode != undefined) instance.samplingMode = samplingMode?.instance || samplingMode
				samplingMode = instance.samplingMode
				if (blendMode != undefined) instance.blendMode = blendMode?.instance || blendMode
				blendMode = instance.blendMode
				if (cellHeight != undefined) instance.cellHeight = cellHeight?.instance || cellHeight
				cellHeight = instance.cellHeight
				if (cellWidth != undefined) instance.cellWidth = cellWidth?.instance || cellWidth
				cellWidth = instance.cellWidth

				children = instance.children
				if (disableDepthWrite != undefined) instance.disableDepthWrite = disableDepthWrite?.instance || disableDepthWrite
				disableDepthWrite = instance.disableDepthWrite
				if (fogEnabled != undefined) instance.fogEnabled = fogEnabled?.instance || fogEnabled
				fogEnabled = instance.fogEnabled
				if (onDispose != undefined) instance.onDispose = onDispose?.instance || onDispose
				onDispose = instance.onDispose
				if (texture != undefined) instance.texture = texture?.instance || texture
				texture = instance.texture
				if (isPickable != undefined) instance.isPickable = isPickable?.instance || isPickable
				isPickable = instance.isPickable
				if (layerMask != undefined) instance.layerMask = layerMask?.instance || layerMask
				layerMask = instance.layerMask
				if (metadata != undefined) instance.metadata = metadata?.instance || metadata
				metadata = instance.metadata
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (renderingGroupId != undefined) instance.renderingGroupId = renderingGroupId?.instance || renderingGroupId
				renderingGroupId = instance.renderingGroupId
				if (snippetId != undefined) instance.snippetId = snippetId?.instance || snippetId
				snippetId = instance.snippetId
				if (sprites != undefined) instance.sprites = sprites?.instance || sprites
				sprites = instance.sprites
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId

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

			