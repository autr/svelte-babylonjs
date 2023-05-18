
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					targetFrameRate  
					trackerDuration   
					optimizations  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let targetFrameRate = undefined // [number] 
				// defines the target frame rate to reach (60 by default)
				

				export let trackerDuration = undefined // [number] 
				// defines the interval between two checks (2000ms by default)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.SceneOptimizerOptions(targetFrameRate,trackerDuration) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let optimizations = undefined // [array] 
				// gets the list of optimizations to apply
				

				// ================ METHODS ================

				
				export let addCustomOptimization = (...args) => instance.addCustomOptimization(...args)

				export let addOptimization = (...args) => instance.addOptimization(...args)

				export let HighDegradationAllowed = (...args) => instance.HighDegradationAllowed(...args)

				export let LowDegradationAllowed = (...args) => instance.LowDegradationAllowed(...args)

				export let ModerateDegradationAllowed = (...args) => instance.ModerateDegradationAllowed(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:SceneOptimizerOptions]`, ...args) : null

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

												if (targetFrameRate != undefined) instance.targetFrameRate = targetFrameRate?.instance || targetFrameRate
				targetFrameRate = instance.targetFrameRate
				if (trackerDuration != undefined) instance.trackerDuration = trackerDuration?.instance || trackerDuration
				trackerDuration = instance.trackerDuration
				if (optimizations != undefined) instance.optimizations = optimizations?.instance || optimizations
				optimizations = instance.optimizations

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

			