
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					atlasJSON  * required
					spriteSheet  * required
					options  * required
					scene  * required 
					sprites  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the spritemaps name
				

				export let atlasJSON = undefined // [ispritejsonatlas] * required
				// is the json file that controls the sprites frames and meta
				

				export let spriteSheet = undefined // [texture] * required
				// is the texture that the sprites are on.
				

				export let options = undefined // [ispritemapoptions] * required
				// a basic deployment configuration
				

				export let scene = undefined // [scene] * required
				// the scene that the map is deployed on
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SpriteMap(name,atlasJSON,spriteSheet,options,scene) : {}

				// ================ ACCESSORS ================

				
				export let animationMap = undefined // [rawtexture] 
				// 
				

				export let position = undefined // [vector3] 
				// 
				

				export let rotation = undefined // [vector3] 
				// 
				

				export let spriteCount = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let sprites = undefined // [array] 
				// public sprite storage array, parsed from atlasjson
				

				// ================ METHODS ================

				
				export let addAnimationToTile = (...args) => instance.addAnimationToTile(...args)

				export let changeTiles = (...args) => instance.changeTiles(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getMousePosition = (...args) => instance.getMousePosition(...args)

				export let getTileID = (...args) => instance.getTileID(...args)

				export let loadTileMaps = (...args) => instance.loadTileMaps(...args)

				export let saveTileMaps = (...args) => instance.saveTileMaps(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SpriteMap]`, ...args) : null

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
				if (atlasJSON != undefined) instance.atlasJSON = atlasJSON?.instance || atlasJSON
				atlasJSON = instance.atlasJSON
				if (spriteSheet != undefined) instance.spriteSheet = spriteSheet?.instance || spriteSheet
				spriteSheet = instance.spriteSheet
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (animationMap != undefined) instance.animationMap = animationMap?.instance || animationMap
				animationMap = instance.animationMap
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
				if (rotation != undefined) instance.rotation = rotation?.instance || rotation
				rotation = instance.rotation

				spriteCount = instance.spriteCount
				if (sprites != undefined) instance.sprites = sprites?.instance || sprites
				sprites = instance.sprites

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

			