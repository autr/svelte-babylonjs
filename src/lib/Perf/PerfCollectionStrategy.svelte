
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PerfCollectionStrategy() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let AbsoluteFpsStrategy = (...args) => instance.AbsoluteFpsStrategy(...args)

				export let ActiveBonesStrategy = (...args) => instance.ActiveBonesStrategy(...args)

				export let ActiveFacesStrategy = (...args) => instance.ActiveFacesStrategy(...args)

				export let ActiveIndicesStrategy = (...args) => instance.ActiveIndicesStrategy(...args)

				export let ActiveMeshesStrategy = (...args) => instance.ActiveMeshesStrategy(...args)

				export let ActiveParticlesStrategy = (...args) => instance.ActiveParticlesStrategy(...args)

				export let AnimationsStrategy = (...args) => instance.AnimationsStrategy(...args)

				export let DrawCallsStrategy = (...args) => instance.DrawCallsStrategy(...args)

				export let FpsStrategy = (...args) => instance.FpsStrategy(...args)

				export let FrameTotalStrategy = (...args) => instance.FrameTotalStrategy(...args)

				export let GpuFrameTimeStrategy = (...args) => instance.GpuFrameTimeStrategy(...args)

				export let InterFrameStrategy = (...args) => instance.InterFrameStrategy(...args)

				export let MeshesSelectionStrategy = (...args) => instance.MeshesSelectionStrategy(...args)

				export let ParticlesStrategy = (...args) => instance.ParticlesStrategy(...args)

				export let PhysicsStrategy = (...args) => instance.PhysicsStrategy(...args)

				export let PowerSupplyStrategy = (...args) => instance.PowerSupplyStrategy(...args)

				export let PressureStrategy = (...args) => instance.PressureStrategy(...args)

				export let RenderStrategy = (...args) => instance.RenderStrategy(...args)

				export let RenderTargetsStrategy = (...args) => instance.RenderTargetsStrategy(...args)

				export let SpritesStrategy = (...args) => instance.SpritesStrategy(...args)

				export let ThermalStrategy = (...args) => instance.ThermalStrategy(...args)

				export let TotalLightsStrategy = (...args) => instance.TotalLightsStrategy(...args)

				export let TotalMaterialsStrategy = (...args) => instance.TotalMaterialsStrategy(...args)

				export let TotalMeshesStrategy = (...args) => instance.TotalMeshesStrategy(...args)

				export let TotalTexturesStrategy = (...args) => instance.TotalTexturesStrategy(...args)

				export let TotalVerticesStrategy = (...args) => instance.TotalVerticesStrategy(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PerfCollectionStrategy]`, ...args) : null

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

			