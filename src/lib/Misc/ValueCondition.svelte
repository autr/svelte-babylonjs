
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					actionManager  * required
					target  * required
					propertyPath  * required
					value  * required
					operator   
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let actionManager = undefined // [actionmanager] * required
				// manager for the action the condition applies to
				

				export let target = undefined // [any] * required
				// for the action
				

				export let propertyPath = undefined // [string] * required
				// path to specify the property of the target the conditional operator uses
				

				export let value = undefined // [any] * required
				// the value compared by the conditional operator against the current value of the property
				

				export let operator = undefined // [number] 
				// the conditional operator, default valuecondition.isequal
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ValueCondition(actionManager,target,propertyPath,value,operator) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let isValid = (...args) => instance.isValid(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let GetOperatorName = (...args) => instance.GetOperatorName(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ValueCondition]`, ...args) : null

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

												if (actionManager != undefined) instance.actionManager = actionManager?.instance || actionManager
				actionManager = instance.actionManager
				if (target != undefined) instance.target = target?.instance || target
				target = instance.target
				if (propertyPath != undefined) instance.propertyPath = propertyPath?.instance || propertyPath
				propertyPath = instance.propertyPath
				if (value != undefined) instance.value = value?.instance || value
				value = instance.value
				if (operator != undefined) instance.operator = operator?.instance || operator
				operator = instance.operator

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

			