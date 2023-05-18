
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

				export let instance = browser ? new BB.ColorCurves() : {}

				// ================ ACCESSORS ================

				
				export let globalDensity = undefined // [number] 
				// 
				

				export let globalExposure = undefined // [number] 
				// 
				

				export let globalHue = undefined // [number] 
				// 
				

				export let globalSaturation = undefined // [number] 
				// 
				

				export let highlightsDensity = undefined // [number] 
				// 
				

				export let highlightsExposure = undefined // [number] 
				// 
				

				export let highlightsHue = undefined // [number] 
				// 
				

				export let highlightsSaturation = undefined // [number] 
				// 
				

				export let midtonesDensity = undefined // [number] 
				// 
				

				export let midtonesExposure = undefined // [number] 
				// 
				

				export let midtonesHue = undefined // [number] 
				// 
				

				export let midtonesSaturation = undefined // [number] 
				// 
				

				export let shadowsDensity = undefined // [number] 
				// 
				

				export let shadowsExposure = undefined // [number] 
				// 
				

				export let shadowsHue = undefined // [number] 
				// 
				

				export let shadowsSaturation = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let clone = (...args) => instance.clone(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let Bind = (...args) => instance.Bind(...args)

				export let Parse = (...args) => instance.Parse(...args)

				export let PrepareUniforms = (...args) => instance.PrepareUniforms(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ColorCurves]`, ...args) : null

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

												if (globalDensity != undefined) instance.globalDensity = globalDensity?.instance || globalDensity
				globalDensity = instance.globalDensity
				if (globalExposure != undefined) instance.globalExposure = globalExposure?.instance || globalExposure
				globalExposure = instance.globalExposure
				if (globalHue != undefined) instance.globalHue = globalHue?.instance || globalHue
				globalHue = instance.globalHue
				if (globalSaturation != undefined) instance.globalSaturation = globalSaturation?.instance || globalSaturation
				globalSaturation = instance.globalSaturation
				if (highlightsDensity != undefined) instance.highlightsDensity = highlightsDensity?.instance || highlightsDensity
				highlightsDensity = instance.highlightsDensity
				if (highlightsExposure != undefined) instance.highlightsExposure = highlightsExposure?.instance || highlightsExposure
				highlightsExposure = instance.highlightsExposure
				if (highlightsHue != undefined) instance.highlightsHue = highlightsHue?.instance || highlightsHue
				highlightsHue = instance.highlightsHue
				if (highlightsSaturation != undefined) instance.highlightsSaturation = highlightsSaturation?.instance || highlightsSaturation
				highlightsSaturation = instance.highlightsSaturation
				if (midtonesDensity != undefined) instance.midtonesDensity = midtonesDensity?.instance || midtonesDensity
				midtonesDensity = instance.midtonesDensity
				if (midtonesExposure != undefined) instance.midtonesExposure = midtonesExposure?.instance || midtonesExposure
				midtonesExposure = instance.midtonesExposure
				if (midtonesHue != undefined) instance.midtonesHue = midtonesHue?.instance || midtonesHue
				midtonesHue = instance.midtonesHue
				if (midtonesSaturation != undefined) instance.midtonesSaturation = midtonesSaturation?.instance || midtonesSaturation
				midtonesSaturation = instance.midtonesSaturation
				if (shadowsDensity != undefined) instance.shadowsDensity = shadowsDensity?.instance || shadowsDensity
				shadowsDensity = instance.shadowsDensity
				if (shadowsExposure != undefined) instance.shadowsExposure = shadowsExposure?.instance || shadowsExposure
				shadowsExposure = instance.shadowsExposure
				if (shadowsHue != undefined) instance.shadowsHue = shadowsHue?.instance || shadowsHue
				shadowsHue = instance.shadowsHue
				if (shadowsSaturation != undefined) instance.shadowsSaturation = shadowsSaturation?.instance || shadowsSaturation
				shadowsSaturation = instance.shadowsSaturation

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

			