
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebRequest() : {}

				// ================ ACCESSORS ================

				
				export let onprogress = undefined // [union] 
				// 
				

				export let readyState = undefined // [number] 
				// 
				

				export let response = undefined // [any] 
				// 
				

				export let responseText = undefined // [string] 
				// 
				

				export let responseType = undefined // [xmlhttprequestresponsetype] 
				// 
				

				export let responseURL = undefined // [string] 
				// returns client's response url
				

				export let status = undefined // [number] 
				// returns client's status
				

				export let statusText = undefined // [string] 
				// returns client's status as a text
				

				export let timeout = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let abort = (...args) => instance.abort(...args)

				export let getResponseHeader = (...args) => instance.getResponseHeader(...args)

				export let open = (...args) => instance.open(...args)

				export let send = (...args) => instance.send(...args)

				export let setRequestHeader = (...args) => instance.setRequestHeader(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebRequest]`, ...args) : null

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

												if (onprogress != undefined) instance.onprogress = onprogress?.instance || onprogress
				onprogress = instance.onprogress

				readyState = instance.readyState

				response = instance.response

				responseText = instance.responseText
				if (responseType != undefined) instance.responseType = responseType?.instance || responseType
				responseType = instance.responseType

				responseURL = instance.responseURL

				status = instance.status

				statusText = instance.statusText
				if (timeout != undefined) instance.timeout = timeout?.instance || timeout
				timeout = instance.timeout

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

			