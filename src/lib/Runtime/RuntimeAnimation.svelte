
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					target  * required
					animation  * required
					scene  * required
					host  * required 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let target = undefined // [any] * required
				// defines the target of the animation
				

				export let animation = undefined // [animation] * required
				// defines the source animation object
				

				export let scene = undefined // [scene] * required
				// defines the hosting scene
				

				export let host = undefined // [animatable] * required
				// defines the initiating animatable
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.RuntimeAnimation(target,animation,scene,host) : {}

				// ================ ACCESSORS ================

				
				export let currentFrame = undefined // [number] 
				// 
				

				export let currentValue = undefined // [any] 
				// 
				

				export let isAdditive = undefined // [boolean] 
				// 
				

				export let targetPath = undefined // [string] 
				// 
				

				export let weight = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let animate = (...args) => instance.animate(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let goToFrame = (...args) => instance.goToFrame(...args)

				export let isStopped = (...args) => instance.isStopped(...args)

				export let reset = (...args) => instance.reset(...args)

				export let setValue = (...args) => instance.setValue(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:RuntimeAnimation]`, ...args) : null

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

												if (target != undefined) instance.target = target?.instance || target
				target = instance.target
				if (animation != undefined) instance.animation = animation?.instance || animation
				animation = instance.animation
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (host != undefined) instance.host = host?.instance || host
				host = instance.host

				currentFrame = instance.currentFrame

				currentValue = instance.currentValue

				isAdditive = instance.isAdditive

				targetPath = instance.targetPath

				weight = instance.weight

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

			