
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					Fragment_Before_FinalColorComposition  
					Fragment_Before_Fog  
					Fragment_Before_FragColor  
					Fragment_Before_Lights  
					Fragment_Begin  
					Fragment_Custom_Albedo  
					Fragment_Custom_Alpha  
					Fragment_Custom_MetallicRoughness  
					Fragment_Custom_MicroSurface  
					Fragment_Definitions  
					Fragment_MainBegin  
					Fragment_MainEnd  
					Vertex_After_WorldPosComputed  
					Vertex_Before_NormalUpdated  
					Vertex_Before_PositionUpdated  
					Vertex_Begin  
					Vertex_Definitions  
					Vertex_MainBegin  
					Vertex_MainEnd  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ShaderAlebdoParts() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let Fragment_Before_FinalColorComposition = undefined // [string] 
				// 
				

				export let Fragment_Before_Fog = undefined // [string] 
				// 
				

				export let Fragment_Before_FragColor = undefined // [string] 
				// 
				

				export let Fragment_Before_Lights = undefined // [string] 
				// 
				

				export let Fragment_Begin = undefined // [string] 
				// 
				

				export let Fragment_Custom_Albedo = undefined // [string] 
				// 
				

				export let Fragment_Custom_Alpha = undefined // [string] 
				// 
				

				export let Fragment_Custom_MetallicRoughness = undefined // [string] 
				// 
				

				export let Fragment_Custom_MicroSurface = undefined // [string] 
				// 
				

				export let Fragment_Definitions = undefined // [string] 
				// 
				

				export let Fragment_MainBegin = undefined // [string] 
				// 
				

				export let Fragment_MainEnd = undefined // [string] 
				// 
				

				export let Vertex_After_WorldPosComputed = undefined // [string] 
				// 
				

				export let Vertex_Before_NormalUpdated = undefined // [string] 
				// 
				

				export let Vertex_Before_PositionUpdated = undefined // [string] 
				// 
				

				export let Vertex_Begin = undefined // [string] 
				// 
				

				export let Vertex_Definitions = undefined // [string] 
				// 
				

				export let Vertex_MainBegin = undefined // [string] 
				// 
				

				export let Vertex_MainEnd = undefined // [string] 
				// 
				

				// ================ METHODS ================

				
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ShaderAlebdoParts]`, ...args) : null

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

												if (Fragment_Before_FinalColorComposition != undefined) instance.Fragment_Before_FinalColorComposition = Fragment_Before_FinalColorComposition?.instance || Fragment_Before_FinalColorComposition
				Fragment_Before_FinalColorComposition = instance.Fragment_Before_FinalColorComposition
				if (Fragment_Before_Fog != undefined) instance.Fragment_Before_Fog = Fragment_Before_Fog?.instance || Fragment_Before_Fog
				Fragment_Before_Fog = instance.Fragment_Before_Fog
				if (Fragment_Before_FragColor != undefined) instance.Fragment_Before_FragColor = Fragment_Before_FragColor?.instance || Fragment_Before_FragColor
				Fragment_Before_FragColor = instance.Fragment_Before_FragColor
				if (Fragment_Before_Lights != undefined) instance.Fragment_Before_Lights = Fragment_Before_Lights?.instance || Fragment_Before_Lights
				Fragment_Before_Lights = instance.Fragment_Before_Lights
				if (Fragment_Begin != undefined) instance.Fragment_Begin = Fragment_Begin?.instance || Fragment_Begin
				Fragment_Begin = instance.Fragment_Begin
				if (Fragment_Custom_Albedo != undefined) instance.Fragment_Custom_Albedo = Fragment_Custom_Albedo?.instance || Fragment_Custom_Albedo
				Fragment_Custom_Albedo = instance.Fragment_Custom_Albedo
				if (Fragment_Custom_Alpha != undefined) instance.Fragment_Custom_Alpha = Fragment_Custom_Alpha?.instance || Fragment_Custom_Alpha
				Fragment_Custom_Alpha = instance.Fragment_Custom_Alpha
				if (Fragment_Custom_MetallicRoughness != undefined) instance.Fragment_Custom_MetallicRoughness = Fragment_Custom_MetallicRoughness?.instance || Fragment_Custom_MetallicRoughness
				Fragment_Custom_MetallicRoughness = instance.Fragment_Custom_MetallicRoughness
				if (Fragment_Custom_MicroSurface != undefined) instance.Fragment_Custom_MicroSurface = Fragment_Custom_MicroSurface?.instance || Fragment_Custom_MicroSurface
				Fragment_Custom_MicroSurface = instance.Fragment_Custom_MicroSurface
				if (Fragment_Definitions != undefined) instance.Fragment_Definitions = Fragment_Definitions?.instance || Fragment_Definitions
				Fragment_Definitions = instance.Fragment_Definitions
				if (Fragment_MainBegin != undefined) instance.Fragment_MainBegin = Fragment_MainBegin?.instance || Fragment_MainBegin
				Fragment_MainBegin = instance.Fragment_MainBegin
				if (Fragment_MainEnd != undefined) instance.Fragment_MainEnd = Fragment_MainEnd?.instance || Fragment_MainEnd
				Fragment_MainEnd = instance.Fragment_MainEnd
				if (Vertex_After_WorldPosComputed != undefined) instance.Vertex_After_WorldPosComputed = Vertex_After_WorldPosComputed?.instance || Vertex_After_WorldPosComputed
				Vertex_After_WorldPosComputed = instance.Vertex_After_WorldPosComputed
				if (Vertex_Before_NormalUpdated != undefined) instance.Vertex_Before_NormalUpdated = Vertex_Before_NormalUpdated?.instance || Vertex_Before_NormalUpdated
				Vertex_Before_NormalUpdated = instance.Vertex_Before_NormalUpdated
				if (Vertex_Before_PositionUpdated != undefined) instance.Vertex_Before_PositionUpdated = Vertex_Before_PositionUpdated?.instance || Vertex_Before_PositionUpdated
				Vertex_Before_PositionUpdated = instance.Vertex_Before_PositionUpdated
				if (Vertex_Begin != undefined) instance.Vertex_Begin = Vertex_Begin?.instance || Vertex_Begin
				Vertex_Begin = instance.Vertex_Begin
				if (Vertex_Definitions != undefined) instance.Vertex_Definitions = Vertex_Definitions?.instance || Vertex_Definitions
				Vertex_Definitions = instance.Vertex_Definitions
				if (Vertex_MainBegin != undefined) instance.Vertex_MainBegin = Vertex_MainBegin?.instance || Vertex_MainBegin
				Vertex_MainBegin = instance.Vertex_MainBegin
				if (Vertex_MainEnd != undefined) instance.Vertex_MainEnd = Vertex_MainEnd?.instance || Vertex_MainEnd
				Vertex_MainEnd = instance.Vertex_MainEnd

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

			