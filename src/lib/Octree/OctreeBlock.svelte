
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					minPoint  * required
					maxPoint  * required
					capacity  * required
					depth  * required
					maxDepth  * required
					creationFunc  * required 
					blocks  
					entries  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let minPoint = undefined // [vector3] * required
				// defines the minimum vector (in world space) of the block's bounding box
				

				export let maxPoint = undefined // [vector3] * required
				// defines the maximum vector (in world space) of the block's bounding box
				

				export let capacity = undefined // [number] * required
				// defines the maximum capacity of this block (if capacity is reached the block will be split into sub blocks)
				

				export let depth = undefined // [number] * required
				// defines the current depth of this block in the octree
				

				export let maxDepth = undefined // [number] * required
				// defines the maximal depth allowed (beyond this value, the capacity is ignored)
				

				export let creationFunc = undefined // [reflection] * required
				// defines a callback to call when an element is added to the block
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.OctreeBlock(minPoint,maxPoint,capacity,depth,maxDepth,creationFunc) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let blocks = undefined // [array] 
				// gets the list of block children
				

				export let entries = undefined // [array] 
				// gets the content of the current block
				

				// ================ METHODS ================

				
				export let addEntries = (...args) => instance.addEntries(...args)

				export let addEntry = (...args) => instance.addEntry(...args)

				export let createInnerBlocks = (...args) => instance.createInnerBlocks(...args)

				export let intersects = (...args) => instance.intersects(...args)

				export let intersectsRay = (...args) => instance.intersectsRay(...args)

				export let removeEntry = (...args) => instance.removeEntry(...args)

				export let select = (...args) => instance.select(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:OctreeBlock]`, ...args) : null

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

												if (minPoint != undefined) instance.minPoint = minPoint?.instance || minPoint
				minPoint = instance.minPoint
				if (maxPoint != undefined) instance.maxPoint = maxPoint?.instance || maxPoint
				maxPoint = instance.maxPoint
				if (capacity != undefined) instance.capacity = capacity?.instance || capacity
				capacity = instance.capacity
				if (depth != undefined) instance.depth = depth?.instance || depth
				depth = instance.depth
				if (maxDepth != undefined) instance.maxDepth = maxDepth?.instance || maxDepth
				maxDepth = instance.maxDepth
				if (creationFunc != undefined) instance.creationFunc = creationFunc?.instance || creationFunc
				creationFunc = instance.creationFunc
				if (blocks != undefined) instance.blocks = blocks?.instance || blocks
				blocks = instance.blocks
				if (entries != undefined) instance.entries = entries?.instance || entries
				entries = instance.entries

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

			