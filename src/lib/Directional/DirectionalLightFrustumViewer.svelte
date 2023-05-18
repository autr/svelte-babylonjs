
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					light  * required
					camera  * required 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let light = undefined // [directionallight] * required
				// directional light to display the frustum for
				

				export let camera = undefined // [camera] * required
				// camera used to retrieve the minz / maxz values if the shadowminz/shadowmaxz values of the light are not setup
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.DirectionalLightFrustumViewer(light,camera) : {}

				// ================ ACCESSORS ================

				
				export let showLines = undefined // [boolean] 
				// 
				

				export let showPlanes = undefined // [boolean] 
				// 
				

				export let transparency = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let hide = (...args) => instance.hide(...args)

				export let show = (...args) => instance.show(...args)

				export let update = (...args) => instance.update(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:DirectionalLightFrustumViewer]`, ...args) : null

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

												if (light != undefined) instance.light = light?.instance || light
				light = instance.light
				if (camera != undefined) instance.camera = camera?.instance || camera
				camera = instance.camera
				if (showLines != undefined) instance.showLines = showLines?.instance || showLines
				showLines = instance.showLines
				if (showPlanes != undefined) instance.showPlanes = showPlanes?.instance || showPlanes
				showPlanes = instance.showPlanes
				if (transparency != undefined) instance.transparency = transparency?.instance || transparency
				transparency = instance.transparency

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

			