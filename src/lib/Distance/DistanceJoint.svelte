
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					jointData  * required 
					type  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let jointData = undefined // [distancejointdata] * required
				// the data for the distance-joint
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.DistanceJoint(jointData) : {}

				// ================ ACCESSORS ================

				
				export let physicsJoint = undefined // [any] 
				// 
				

				export let physicsPlugin = undefined // [] 
				// 
				

				// ================ PROPERTIES ================

				
				export let type = undefined // [number] 
				// the type of the physics joint
				

				// ================ METHODS ================

				
				export let executeNativeFunction = (...args) => instance.executeNativeFunction(...args)

				export let updateDistance = (...args) => instance.updateDistance(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:DistanceJoint]`, ...args) : null

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

												if (jointData != undefined) instance.jointData = jointData?.instance || jointData
				jointData = instance.jointData
				if (physicsJoint != undefined) instance.physicsJoint = physicsJoint?.instance || physicsJoint
				physicsJoint = instance.physicsJoint
				if (physicsPlugin != undefined) instance.physicsPlugin = physicsPlugin?.instance || physicsPlugin
				physicsPlugin = instance.physicsPlugin
				if (type != undefined) instance.type = type?.instance || type
				type = instance.type

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

			