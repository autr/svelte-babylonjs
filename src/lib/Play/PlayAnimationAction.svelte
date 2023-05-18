
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					triggerOptions  * required
					target  * required
					from  * required
					to  * required
					loop  
					condition   
					onBeforeExecuteObservable  
					trigger  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let triggerOptions = undefined // [any] * required
				// defines the trigger options
				

				export let target = undefined // [any] * required
				// defines the target animation or animation name
				

				export let from = undefined // [number] * required
				// defines from where the animation should start (animation frame)
				

				export let to = undefined // [number] * required
				// defines where the animation should stop (animation frame)
				

				export let loop = undefined // [boolean] 
				// defines if the animation should loop or stop after the first play
				

				export let condition = undefined // [condition] 
				// defines the trigger related conditions
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PlayAnimationAction(triggerOptions,target,from,to,loop,condition) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let onBeforeExecuteObservable = undefined // [observable] 
				// an event triggered prior to action being executed.
				

				export let trigger = undefined // [number] 
				// trigger for the action
				

				// ================ METHODS ================

				
				export let execute = (...args) => instance.execute(...args)

				export let getTriggerParameter = (...args) => instance.getTriggerParameter(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setTriggerParameter = (...args) => instance.setTriggerParameter(...args)

				export let skipToNextActiveAction = (...args) => instance.skipToNextActiveAction(...args)

				export let then = (...args) => instance.then(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PlayAnimationAction]`, ...args) : null

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

												if (triggerOptions != undefined) instance.triggerOptions = triggerOptions?.instance || triggerOptions
				triggerOptions = instance.triggerOptions
				if (target != undefined) instance.target = target?.instance || target
				target = instance.target
				if (from != undefined) instance.from = from?.instance || from
				from = instance.from
				if (to != undefined) instance.to = to?.instance || to
				to = instance.to
				if (loop != undefined) instance.loop = loop?.instance || loop
				loop = instance.loop
				if (condition != undefined) instance.condition = condition?.instance || condition
				condition = instance.condition
				if (onBeforeExecuteObservable != undefined) instance.onBeforeExecuteObservable = onBeforeExecuteObservable?.instance || onBeforeExecuteObservable
				onBeforeExecuteObservable = instance.onBeforeExecuteObservable
				if (trigger != undefined) instance.trigger = trigger?.instance || trigger
				trigger = instance.trigger

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

			