
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					type  * required
					event  * required
					localX  * required
					localY  * required 
					localPosition  
					nearInteractionPickingInfo  
					originalPickingInfo  
					ray  
					skipOnPointerObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let type = undefined // [number] * required
				// defines the type of event (pointereventtypes)
				

				export let event = undefined // [imouseevent] * required
				// defines the related dom event
				

				export let localX = undefined // [number] * required
				// defines the local x coordinates of the pointer when the event occured
				

				export let localY = undefined // [number] * required
				// defines the local y coordinates of the pointer when the event occured
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PointerInfoPre(type,event,localX,localY) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let localPosition = undefined // [vector2] 
				// defines the local position of the pointer on the canvas.
				

				export let nearInteractionPickingInfo = undefined // [nullable] 
				// defines picking info coming from a near interaction (proximity instead of ray-based picking)
				

				export let originalPickingInfo = undefined // [nullable] 
				// the original picking info that was used to trigger the pointer event
				

				export let ray = undefined // [nullable] 
				// ray from a pointer if available (eg. 6dof controller)
				

				export let skipOnPointerObservable = undefined // [boolean] 
				// defines whether the engine should skip the next onpointerobservable associated to this pre.
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PointerInfoPre]`, ...args) : null

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

												if (type != undefined) instance.type = type?.instance || type
				type = instance.type
				if (event != undefined) instance.event = event?.instance || event
				event = instance.event
				if (localX != undefined) instance.localX = localX?.instance || localX
				localX = instance.localX
				if (localY != undefined) instance.localY = localY?.instance || localY
				localY = instance.localY
				if (localPosition != undefined) instance.localPosition = localPosition?.instance || localPosition
				localPosition = instance.localPosition
				if (nearInteractionPickingInfo != undefined) instance.nearInteractionPickingInfo = nearInteractionPickingInfo?.instance || nearInteractionPickingInfo
				nearInteractionPickingInfo = instance.nearInteractionPickingInfo
				if (originalPickingInfo != undefined) instance.originalPickingInfo = originalPickingInfo?.instance || originalPickingInfo
				originalPickingInfo = instance.originalPickingInfo
				if (ray != undefined) instance.ray = ray?.instance || ray
				ray = instance.ray
				if (skipOnPointerObservable != undefined) instance.skipOnPointerObservable = skipOnPointerObservable?.instance || skipOnPointerObservable
				skipOnPointerObservable = instance.skipOnPointerObservable

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

			