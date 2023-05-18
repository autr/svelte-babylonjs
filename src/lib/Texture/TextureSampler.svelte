
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					samplingMode  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.TextureSampler() : {}

				// ================ ACCESSORS ================

				
				export let anisotropicFilteringLevel = undefined // [nullable] 
				// 
				

				export let comparisonFunction = undefined // [number] 
				// 
				

				export let useMipMaps = undefined // [boolean] 
				// 
				

				export let wrapR = undefined // [nullable] 
				// 
				

				export let wrapU = undefined // [nullable] 
				// 
				

				export let wrapV = undefined // [nullable] 
				// 
				

				// ================ PROPERTIES ================

				
				export let samplingMode = undefined // [number] 
				// gets the sampling mode of the texture
				

				// ================ METHODS ================

				
				export let compareSampler = (...args) => instance.compareSampler(...args)

				export let setParameters = (...args) => instance.setParameters(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:TextureSampler]`, ...args) : null

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

												if (anisotropicFilteringLevel != undefined) instance.anisotropicFilteringLevel = anisotropicFilteringLevel?.instance || anisotropicFilteringLevel
				anisotropicFilteringLevel = instance.anisotropicFilteringLevel
				if (comparisonFunction != undefined) instance.comparisonFunction = comparisonFunction?.instance || comparisonFunction
				comparisonFunction = instance.comparisonFunction
				if (useMipMaps != undefined) instance.useMipMaps = useMipMaps?.instance || useMipMaps
				useMipMaps = instance.useMipMaps
				if (wrapR != undefined) instance.wrapR = wrapR?.instance || wrapR
				wrapR = instance.wrapR
				if (wrapU != undefined) instance.wrapU = wrapU?.instance || wrapU
				wrapU = instance.wrapU
				if (wrapV != undefined) instance.wrapV = wrapV?.instance || wrapV
				wrapV = instance.wrapV
				if (samplingMode != undefined) instance.samplingMode = samplingMode?.instance || samplingMode
				samplingMode = instance.samplingMode

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

			