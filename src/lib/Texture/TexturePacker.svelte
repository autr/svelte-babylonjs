
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					meshes  * required
					options  * required
					scene  * required 
					frames  
					promise  
					sets  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// the name of the package
				

				export let meshes = undefined // [array] * required
				// the target meshes to compose the package from
				

				export let options = undefined // [itexturepackeroptions] * required
				// the arguments that texture packer should follow while building.
				

				export let scene = undefined // [scene] * required
				// the scene which the textures are scoped to.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.TexturePacker(name,meshes,options,scene) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let frames = undefined // [array] 
				// the container array for the frames that are generated
				

				export let promise = undefined // [nullable] 
				// the promise that is started upon initialization
				

				export let sets = undefined // [object] 
				// the container object for the channel sets that are generated
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let download = (...args) => instance.download(...args)

				export let processAsync = (...args) => instance.processAsync(...args)

				export let setMeshToFrame = (...args) => instance.setMeshToFrame(...args)

				export let updateFromJSON = (...args) => instance.updateFromJSON(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:TexturePacker]`, ...args) : null

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
				if (meshes != undefined) instance.meshes = meshes?.instance || meshes
				meshes = instance.meshes
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (frames != undefined) instance.frames = frames?.instance || frames
				frames = instance.frames
				if (promise != undefined) instance.promise = promise?.instance || promise
				promise = instance.promise
				if (sets != undefined) instance.sets = sets?.instance || sets
				sets = instance.sets

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

			