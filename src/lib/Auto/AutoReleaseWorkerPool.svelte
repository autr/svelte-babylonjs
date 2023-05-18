
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					maxWorkers  * required
					createWorkerAsync  * required
					options   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let maxWorkers = undefined // [number] * required
				// 
				

				export let createWorkerAsync = undefined // [reflection] * required
				// 
				

				export let options = undefined // [autoreleaseworkerpooloptions] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AutoReleaseWorkerPool(maxWorkers,createWorkerAsync,options) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let push = (...args) => instance.push(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AutoReleaseWorkerPool]`, ...args) : null

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

												if (maxWorkers != undefined) instance.maxWorkers = maxWorkers?.instance || maxWorkers
				maxWorkers = instance.maxWorkers
				if (createWorkerAsync != undefined) instance.createWorkerAsync = createWorkerAsync?.instance || createWorkerAsync
				createWorkerAsync = instance.createWorkerAsync
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options

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

			