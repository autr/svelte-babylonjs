
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					frameSampleSize   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let frameSampleSize = undefined // [number] 
				// the number of samples required to saturate the sliding window
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PerformanceMonitor(frameSampleSize) : {}

				// ================ ACCESSORS ================

				
				export let averageFPS = undefined // [number] 
				// 
				

				export let averageFrameTime = undefined // [number] 
				// 
				

				export let averageFrameTimeVariance = undefined // [number] 
				// 
				

				export let instantaneousFPS = undefined // [number] 
				// 
				

				export let instantaneousFrameTime = undefined // [number] 
				// 
				

				export let isEnabled = undefined // [boolean] 
				// 
				

				export let isSaturated = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let disable = (...args) => instance.disable(...args)

				export let enable = (...args) => instance.enable(...args)

				export let reset = (...args) => instance.reset(...args)

				export let sampleFrame = (...args) => instance.sampleFrame(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PerformanceMonitor]`, ...args) : null

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

												if (frameSampleSize != undefined) instance.frameSampleSize = frameSampleSize?.instance || frameSampleSize
				frameSampleSize = instance.frameSampleSize

				averageFPS = instance.averageFPS

				averageFrameTime = instance.averageFrameTime

				averageFrameTimeVariance = instance.averageFrameTimeVariance

				instantaneousFPS = instance.instantaneousFPS

				instantaneousFrameTime = instance.instantaneousFrameTime

				isEnabled = instance.isEnabled

				isSaturated = instance.isSaturated

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

			