
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_path  * required 
					animations  
					value  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _path = undefined // [path2] * required
				// the path to track
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PathCursor(_path) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let animations = undefined // [array] 
				// the animation array of the path cursor
				

				export let value = undefined // [number] 
				// the value of the path cursor
				

				// ================ METHODS ================

				
				export let getPoint = (...args) => instance.getPoint(...args)

				export let move = (...args) => instance.move(...args)

				export let moveAhead = (...args) => instance.moveAhead(...args)

				export let moveBack = (...args) => instance.moveBack(...args)

				export let onchange = (...args) => instance.onchange(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PathCursor]`, ...args) : null

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

												if (_path != undefined) instance._path = _path?.instance || _path
				_path = instance._path
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (value != undefined) instance.value = value?.instance || value
				value = instance.value

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

			