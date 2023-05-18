
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_engine  * required
					name  * required 
					inspectableCustomProperties  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _engine = undefined // [engine] * required
				// engine to add the pipeline to
				

				export let name = undefined // [string] * required
				// name of the pipeline
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PostProcessRenderPipeline(_engine,name) : {}

				// ================ ACCESSORS ================

				
				export let cameras = undefined // [array] 
				// 
				

				export let isSupported = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let inspectableCustomProperties = undefined // [array] 
				// list of inspectable custom properties (used by the inspector)
				

				// ================ METHODS ================

				
				export let addEffect = (...args) => instance.addEffect(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let setPrePassRenderer = (...args) => instance.setPrePassRenderer(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PostProcessRenderPipeline]`, ...args) : null

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

												if (_engine != undefined) instance._engine = _engine?.instance || _engine
				_engine = instance._engine
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name

				cameras = instance.cameras

				isSupported = instance.isSupported
				if (inspectableCustomProperties != undefined) instance.inspectableCustomProperties = inspectableCustomProperties?.instance || inspectableCustomProperties
				inspectableCustomProperties = instance.inspectableCustomProperties

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

			