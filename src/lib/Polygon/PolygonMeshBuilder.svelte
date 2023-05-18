
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					contours  * required
					scene  
					earcutInjection   
					bjsEarcut  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// name of the builder
				

				export let contours = undefined // [any] * required
				// path of the polygon
				

				export let scene = undefined // [scene] 
				// scene to add to when creating the mesh
				

				export let earcutInjection = undefined // [any] 
				// can be used to inject your own earcut reference
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PolygonMeshBuilder(name,contours,scene,earcutInjection) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let bjsEarcut = undefined // [any] 
				// babylon reference to the earcut plugin.
				

				// ================ METHODS ================

				
				export let addHole = (...args) => instance.addHole(...args)

				export let build = (...args) => instance.build(...args)

				export let buildVertexData = (...args) => instance.buildVertexData(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PolygonMeshBuilder]`, ...args) : null

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
				if (contours != undefined) instance.contours = contours?.instance || contours
				contours = instance.contours
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (earcutInjection != undefined) instance.earcutInjection = earcutInjection?.instance || earcutInjection
				earcutInjection = instance.earcutInjection
				if (bjsEarcut != undefined) instance.bjsEarcut = bjsEarcut?.instance || bjsEarcut
				bjsEarcut = instance.bjsEarcut

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

			