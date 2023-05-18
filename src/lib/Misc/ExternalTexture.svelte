
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					video  * required 
					type (readonly) 
					uniqueId (readonly) 
					useMipMaps  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let video = undefined // [htmlvideoelement] * required
				// the video the texture should be wrapped around
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ExternalTexture(video) : {}

				// ================ ACCESSORS ================

				
				export let underlyingResource = undefined // [any] 
				// 
				

				// ================ PROPERTIES ================

				
				export let type = undefined // [literal] 
				// the type of the underlying texture is implementation dependent, so return "undefined" for the type
				

				export let uniqueId = undefined // [number] 
				// gets the unique id of this texture
				

				export let useMipMaps = undefined // [boolean] 
				// gets a boolean indicating if the texture uses mipmaps
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let IsExternalTexture = (...args) => instance.IsExternalTexture(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ExternalTexture]`, ...args) : null

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

												if (video != undefined) instance.video = video?.instance || video
				video = instance.video

				underlyingResource = instance.underlyingResource
				if (useMipMaps != undefined) instance.useMipMaps = useMipMaps?.instance || useMipMaps
				useMipMaps = instance.useMipMaps

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

			