
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					engine  * required
					name  * required
					getPostProcesses  * required
					singleInstance   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let engine = undefined // [engine] * required
				// the engine the effect is tied to
				

				export let name = undefined // [string] * required
				// the name of the effect
				

				export let getPostProcesses = undefined // [reflection] * required
				// a function that returns a set of post processes which the effect will run in order to be run.
				

				export let singleInstance = undefined // [boolean] 
				// false if this post process can be run on multiple cameras. (default: true)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PostProcessRenderEffect(engine,name,getPostProcesses,singleInstance) : {}

				// ================ ACCESSORS ================

				
				export let isSupported = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let getPostProcesses = (...args) => instance.getPostProcesses(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PostProcessRenderEffect]`, ...args) : null

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

												if (engine != undefined) instance.engine = engine?.instance || engine
				engine = instance.engine
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (getPostProcesses != undefined) instance.getPostProcesses = getPostProcesses?.instance || getPostProcesses
				getPostProcesses = instance.getPostProcesses
				if (singleInstance != undefined) instance.singleInstance = singleInstance?.instance || singleInstance
				singleInstance = instance.singleInstance

				isSupported = instance.isSupported

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

			