
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_mesh  * required 
					aggressiveness  
					boundingBoxEpsilon  
					decimationIterations  
					syncIterations  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _mesh = undefined // [mesh] * required
				// defines the target mesh
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.QuadraticErrorSimplification(_mesh) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let aggressiveness = undefined // [number] 
				// gets or sets the aggressiveness of the simplifier
				

				export let boundingBoxEpsilon = undefined // [number] 
				// gets or sets the espilon to use for bounding box computation
				

				export let decimationIterations = undefined // [number] 
				// gets or sets the number of allowed iterations for decimation
				

				export let syncIterations = undefined // [number] 
				// gets or sets the number pf sync iterations
				

				// ================ METHODS ================

				
				export let simplify = (...args) => instance.simplify(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:QuadraticErrorSimplification]`, ...args) : null

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

												if (_mesh != undefined) instance._mesh = _mesh?.instance || _mesh
				_mesh = instance._mesh
				if (aggressiveness != undefined) instance.aggressiveness = aggressiveness?.instance || aggressiveness
				aggressiveness = instance.aggressiveness
				if (boundingBoxEpsilon != undefined) instance.boundingBoxEpsilon = boundingBoxEpsilon?.instance || boundingBoxEpsilon
				boundingBoxEpsilon = instance.boundingBoxEpsilon
				if (decimationIterations != undefined) instance.decimationIterations = decimationIterations?.instance || decimationIterations
				decimationIterations = instance.decimationIterations
				if (syncIterations != undefined) instance.syncIterations = syncIterations?.instance || syncIterations
				syncIterations = instance.syncIterations

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

			