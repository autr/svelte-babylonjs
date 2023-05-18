
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					options  * required
					scene  * required 
					onErrorObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let options = undefined // [partial] * required
				// defines the options we want to customize the helper
				

				export let scene = undefined // [scene] * required
				// the scene to add the material to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.EnvironmentHelper(options,scene) : {}

				// ================ ACCESSORS ================

				
				export let ground = undefined // [nullable] 
				// 
				

				export let groundMaterial = undefined // [nullable] 
				// 
				

				export let groundMirror = undefined // [nullable] 
				// 
				

				export let groundMirrorRenderList = undefined // [nullable] 
				// 
				

				export let groundTexture = undefined // [nullable] 
				// 
				

				export let rootMesh = undefined // [mesh] 
				// 
				

				export let skybox = undefined // [nullable] 
				// 
				

				export let skyboxMaterial = undefined // [nullable] 
				// 
				

				export let skyboxTexture = undefined // [nullable] 
				// 
				

				// ================ PROPERTIES ================

				
				export let onErrorObservable = undefined // [observable] 
				// this observable will be notified with any error during the creation of the environment,mainly texture creation errors.
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let setMainColor = (...args) => instance.setMainColor(...args)

				export let updateOptions = (...args) => instance.updateOptions(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:EnvironmentHelper]`, ...args) : null

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

												if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene

				ground = instance.ground

				groundMaterial = instance.groundMaterial

				groundMirror = instance.groundMirror

				groundMirrorRenderList = instance.groundMirrorRenderList

				groundTexture = instance.groundTexture

				rootMesh = instance.rootMesh

				skybox = instance.skybox

				skyboxMaterial = instance.skyboxMaterial

				skyboxTexture = instance.skyboxTexture
				if (onErrorObservable != undefined) instance.onErrorObservable = onErrorObservable?.instance || onErrorObservable
				onErrorObservable = instance.onErrorObservable

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

			