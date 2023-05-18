
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					path  * required
					firstNormal  
					raw  
					alignTangentsWithPath   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let path = undefined // [array] * required
				// an array of vector3, the curve axis of the path3d
				

				export let firstNormal = undefined // [nullable] 
				// (options) vector3, the first wanted normal to the curve. ex (0, 1, 0) for a vertical normal.
				

				export let raw = undefined // [boolean] 
				// (optional, default false) : boolean, if true the returned path3d isn't normalized. useful to depict path acceleration or speed.
				

				export let alignTangentsWithPath = undefined // [boolean] 
				// (optional, default false) : boolean, if true the tangents will be aligned with the path.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Path3D(path,firstNormal,raw,alignTangentsWithPath) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let getBinormalAt = (...args) => instance.getBinormalAt(...args)

				export let getBinormals = (...args) => instance.getBinormals(...args)

				export let getClosestPositionTo = (...args) => instance.getClosestPositionTo(...args)

				export let getCurve = (...args) => instance.getCurve(...args)

				export let getDistanceAt = (...args) => instance.getDistanceAt(...args)

				export let getDistances = (...args) => instance.getDistances(...args)

				export let getNormalAt = (...args) => instance.getNormalAt(...args)

				export let getNormals = (...args) => instance.getNormals(...args)

				export let getPointAt = (...args) => instance.getPointAt(...args)

				export let getPoints = (...args) => instance.getPoints(...args)

				export let getPreviousPointIndexAt = (...args) => instance.getPreviousPointIndexAt(...args)

				export let getSubPositionAt = (...args) => instance.getSubPositionAt(...args)

				export let getTangentAt = (...args) => instance.getTangentAt(...args)

				export let getTangents = (...args) => instance.getTangents(...args)

				export let length = (...args) => instance.length(...args)

				export let slice = (...args) => instance.slice(...args)

				export let update = (...args) => instance.update(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Path3D]`, ...args) : null

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

												if (path != undefined) instance.path = path?.instance || path
				path = instance.path
				if (firstNormal != undefined) instance.firstNormal = firstNormal?.instance || firstNormal
				firstNormal = instance.firstNormal
				if (raw != undefined) instance.raw = raw?.instance || raw
				raw = instance.raw
				if (alignTangentsWithPath != undefined) instance.alignTangentsWithPath = alignTangentsWithPath?.instance || alignTangentsWithPath
				alignTangentsWithPath = instance.alignTangentsWithPath

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

			