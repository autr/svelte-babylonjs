
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					creationFunc  * required
					maxBlockCapacity  
					maxDepth   
					blocks  
					dynamicContent  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let creationFunc = undefined // [reflection] * required
				// function to be used to instantiate the octree
				

				export let maxBlockCapacity = undefined // [number] 
				// defines the maximum number of meshes you want on your octree's leaves (default: 64)
				

				export let maxDepth = undefined // [number] 
				// defines the maximum depth (sub-levels) for your octree. default value is 2, which means 8 8 8 = 512 blocks :) (this parameter takes precedence over capacity.)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Octree(creationFunc,maxBlockCapacity,maxDepth) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let blocks = undefined // [array] 
				// blocks within the octree containing objects
				

				export let dynamicContent = undefined // [array] 
				// content stored in the octree
				

				// ================ METHODS ================

				
				export let addMesh = (...args) => instance.addMesh(...args)

				export let intersects = (...args) => instance.intersects(...args)

				export let intersectsRay = (...args) => instance.intersectsRay(...args)

				export let removeMesh = (...args) => instance.removeMesh(...args)

				export let select = (...args) => instance.select(...args)

				export let update = (...args) => instance.update(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Octree]`, ...args) : null

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

												if (creationFunc != undefined) instance.creationFunc = creationFunc?.instance || creationFunc
				creationFunc = instance.creationFunc
				if (maxBlockCapacity != undefined) instance.maxBlockCapacity = maxBlockCapacity?.instance || maxBlockCapacity
				maxBlockCapacity = instance.maxBlockCapacity
				if (maxDepth != undefined) instance.maxDepth = maxDepth?.instance || maxDepth
				maxDepth = instance.maxDepth
				if (blocks != undefined) instance.blocks = blocks?.instance || blocks
				blocks = instance.blocks
				if (dynamicContent != undefined) instance.dynamicContent = dynamicContent?.instance || dynamicContent
				dynamicContent = instance.dynamicContent

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

			