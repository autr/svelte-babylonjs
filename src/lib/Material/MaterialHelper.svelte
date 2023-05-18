
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

				export let instance = browser ? new BB.MaterialHelper() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let BindBonesParameters = (...args) => instance.BindBonesParameters(...args)

				export let BindFogParameters = (...args) => instance.BindFogParameters(...args)

				export let BindLight = (...args) => instance.BindLight(...args)

				export let BindLightProperties = (...args) => instance.BindLightProperties(...args)

				export let BindLights = (...args) => instance.BindLights(...args)

				export let BindLogDepth = (...args) => instance.BindLogDepth(...args)

				export let BindMorphTargetParameters = (...args) => instance.BindMorphTargetParameters(...args)

				export let BindSceneUniformBuffer = (...args) => instance.BindSceneUniformBuffer(...args)

				export let BindTextureMatrix = (...args) => instance.BindTextureMatrix(...args)

				export let GetFogState = (...args) => instance.GetFogState(...args)

				export let HandleFallbacksForShadows = (...args) => instance.HandleFallbacksForShadows(...args)

				export let PrepareAttributesForBakedVertexAnimation = (...args) => instance.PrepareAttributesForBakedVertexAnimation(...args)

				export let PrepareAttributesForBones = (...args) => instance.PrepareAttributesForBones(...args)

				export let PrepareAttributesForInstances = (...args) => instance.PrepareAttributesForInstances(...args)

				export let PrepareAttributesForMorphTargets = (...args) => instance.PrepareAttributesForMorphTargets(...args)

				export let PrepareAttributesForMorphTargetsInfluencers = (...args) => instance.PrepareAttributesForMorphTargetsInfluencers(...args)

				export let PrepareDefinesForAttributes = (...args) => instance.PrepareDefinesForAttributes(...args)

				export let PrepareDefinesForBakedVertexAnimation = (...args) => instance.PrepareDefinesForBakedVertexAnimation(...args)

				export let PrepareDefinesForBones = (...args) => instance.PrepareDefinesForBones(...args)

				export let PrepareDefinesForCamera = (...args) => instance.PrepareDefinesForCamera(...args)

				export let PrepareDefinesForFrameBoundValues = (...args) => instance.PrepareDefinesForFrameBoundValues(...args)

				export let PrepareDefinesForLight = (...args) => instance.PrepareDefinesForLight(...args)

				export let PrepareDefinesForLights = (...args) => instance.PrepareDefinesForLights(...args)

				export let PrepareDefinesForMergedUV = (...args) => instance.PrepareDefinesForMergedUV(...args)

				export let PrepareDefinesForMisc = (...args) => instance.PrepareDefinesForMisc(...args)

				export let PrepareDefinesForMorphTargets = (...args) => instance.PrepareDefinesForMorphTargets(...args)

				export let PrepareDefinesForMultiview = (...args) => instance.PrepareDefinesForMultiview(...args)

				export let PrepareDefinesForOIT = (...args) => instance.PrepareDefinesForOIT(...args)

				export let PrepareDefinesForPrePass = (...args) => instance.PrepareDefinesForPrePass(...args)

				export let PrepareUniformsAndSamplersForLight = (...args) => instance.PrepareUniformsAndSamplersForLight(...args)

				export let PrepareUniformsAndSamplersList = (...args) => instance.PrepareUniformsAndSamplersList(...args)

				export let PushAttributesForInstances = (...args) => instance.PushAttributesForInstances(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:MaterialHelper]`, ...args) : null

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

			