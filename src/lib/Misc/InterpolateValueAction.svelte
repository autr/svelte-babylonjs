
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
					propertyPath  * required
					value  * required
					duration  
					condition  
					stopOtherAnimations  
					onInterpolationDone   
					onBeforeExecuteObservable  
					onInterpolationDoneObservable  
					trigger  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let triggerOptions = undefined // [any] * required
				// defines the trigger options
				

				export let target = undefined // [any] * required
				// defines the object containing the value to interpolate
				

				export let propertyPath = undefined // [string] * required
				// defines the path to the property in the target object
				

				export let value = undefined // [any] * required
				// defines the target value at the end of the interpolation
				

				export let duration = undefined // [number] 
				// defines the time it will take for the property to interpolate to the value.
				

				export let condition = undefined // [condition] 
				// defines the trigger related conditions
				

				export let stopOtherAnimations = undefined // [boolean] 
				// defines if the other scene animations should be stopped when the action has been triggered
				

				export let onInterpolationDone = undefined // [reflection] 
				// defines a callback raised once the interpolation animation has been done
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.InterpolateValueAction(triggerOptions,target,propertyPath,value,duration,condition,stopOtherAnimations,onInterpolationDone) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let onBeforeExecuteObservable = undefined // [observable] 
				// an event triggered prior to action being executed.
				

				export let onInterpolationDoneObservable = undefined // [observable] 
				// observable triggered once the interpolation animation has been done.
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:InterpolateValueAction]`, ...args) : null

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
				if (propertyPath != undefined) instance.propertyPath = propertyPath?.instance || propertyPath
				propertyPath = instance.propertyPath
				if (value != undefined) instance.value = value?.instance || value
				value = instance.value
				if (duration != undefined) instance.duration = duration?.instance || duration
				duration = instance.duration
				if (condition != undefined) instance.condition = condition?.instance || condition
				condition = instance.condition
				if (stopOtherAnimations != undefined) instance.stopOtherAnimations = stopOtherAnimations?.instance || stopOtherAnimations
				stopOtherAnimations = instance.stopOtherAnimations
				if (onInterpolationDone != undefined) instance.onInterpolationDone = onInterpolationDone?.instance || onInterpolationDone
				onInterpolationDone = instance.onInterpolationDone
				if (onBeforeExecuteObservable != undefined) instance.onBeforeExecuteObservable = onBeforeExecuteObservable?.instance || onBeforeExecuteObservable
				onBeforeExecuteObservable = instance.onBeforeExecuteObservable
				if (onInterpolationDoneObservable != undefined) instance.onInterpolationDoneObservable = onInterpolationDoneObservable?.instance || onInterpolationDoneObservable
				onInterpolationDoneObservable = instance.onInterpolationDoneObservable
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

			