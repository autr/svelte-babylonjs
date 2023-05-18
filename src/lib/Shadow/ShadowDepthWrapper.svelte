
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					baseMaterial  * required
					scene  
					options   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let baseMaterial = undefined // [material] * required
				// material to wrap
				

				export let scene = undefined // [scene] 
				// define the scene the material belongs to
				

				export let options = undefined // [iioptionshadowdepthmaterial] 
				// options used to create the wrapper
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ShadowDepthWrapper(baseMaterial,scene,options) : {}

				// ================ ACCESSORS ================

				
				export let doNotInjectCode = undefined // [boolean] 
				// 
				

				export let standalone = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getEffect = (...args) => instance.getEffect(...args)

				export let isReadyForSubMesh = (...args) => instance.isReadyForSubMesh(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ShadowDepthWrapper]`, ...args) : null

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

												if (baseMaterial != undefined) instance.baseMaterial = baseMaterial?.instance || baseMaterial
				baseMaterial = instance.baseMaterial
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options

				doNotInjectCode = instance.doNotInjectCode

				standalone = instance.standalone

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

			