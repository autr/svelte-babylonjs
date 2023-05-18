
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					recastInjection   
					bjsRECAST  
					name  
					navMesh  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let recastInjection = undefined // [any] 
				// can be used to inject your own recast reference
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.RecastJSPlugin(recastInjection) : {}

				// ================ ACCESSORS ================

				
				export let timeFactor = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let bjsRECAST = undefined // [any] 
				// reference to the recast library
				

				export let name = undefined // [string] 
				// plugin name
				

				export let navMesh = undefined // [any] 
				// the first navmesh created. we might extend this to support multiple navmeshes
				

				// ================ METHODS ================

				
				export let addBoxObstacle = (...args) => instance.addBoxObstacle(...args)

				export let addCylinderObstacle = (...args) => instance.addCylinderObstacle(...args)

				export let buildFromNavmeshData = (...args) => instance.buildFromNavmeshData(...args)

				export let computePath = (...args) => instance.computePath(...args)

				export let createCrowd = (...args) => instance.createCrowd(...args)

				export let createDebugNavMesh = (...args) => instance.createDebugNavMesh(...args)

				export let createNavMesh = (...args) => instance.createNavMesh(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getClosestPoint = (...args) => instance.getClosestPoint(...args)

				export let getClosestPointToRef = (...args) => instance.getClosestPointToRef(...args)

				export let getDefaultQueryExtent = (...args) => instance.getDefaultQueryExtent(...args)

				export let getDefaultQueryExtentToRef = (...args) => instance.getDefaultQueryExtentToRef(...args)

				export let getMaximumSubStepCount = (...args) => instance.getMaximumSubStepCount(...args)

				export let getNavmeshData = (...args) => instance.getNavmeshData(...args)

				export let getRandomPointAround = (...args) => instance.getRandomPointAround(...args)

				export let getRandomPointAroundToRef = (...args) => instance.getRandomPointAroundToRef(...args)

				export let getTimeStep = (...args) => instance.getTimeStep(...args)

				export let isSupported = (...args) => instance.isSupported(...args)

				export let moveAlong = (...args) => instance.moveAlong(...args)

				export let moveAlongToRef = (...args) => instance.moveAlongToRef(...args)

				export let removeObstacle = (...args) => instance.removeObstacle(...args)

				export let setDefaultQueryExtent = (...args) => instance.setDefaultQueryExtent(...args)

				export let setMaximumSubStepCount = (...args) => instance.setMaximumSubStepCount(...args)

				export let setTimeStep = (...args) => instance.setTimeStep(...args)

				export let setWorkerURL = (...args) => instance.setWorkerURL(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:RecastJSPlugin]`, ...args) : null

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

												if (recastInjection != undefined) instance.recastInjection = recastInjection?.instance || recastInjection
				recastInjection = instance.recastInjection
				if (timeFactor != undefined) instance.timeFactor = timeFactor?.instance || timeFactor
				timeFactor = instance.timeFactor
				if (bjsRECAST != undefined) instance.bjsRECAST = bjsRECAST?.instance || bjsRECAST
				bjsRECAST = instance.bjsRECAST
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (navMesh != undefined) instance.navMesh = navMesh?.instance || navMesh
				navMesh = instance.navMesh

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

			