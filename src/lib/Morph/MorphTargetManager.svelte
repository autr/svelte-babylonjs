
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene   
					enableNormalMorphing  
					enableTangentMorphing  
					enableUVMorphing  
					optimizeInfluencers  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [nullable] 
				// defines the current scene
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.MorphTargetManager(scene) : {}

				// ================ ACCESSORS ================

				
				export let areUpdatesFrozen = undefined // [boolean] 
				// 
				

				export let influences = undefined // [float32array] 
				// 
				

				export let isUsingTextureForTargets = undefined // [boolean] 
				// 
				

				export let numInfluencers = undefined // [number] 
				// 
				

				export let numTargets = undefined // [number] 
				// 
				

				export let supportsNormals = undefined // [boolean] 
				// 
				

				export let supportsTangents = undefined // [boolean] 
				// 
				

				export let supportsUVs = undefined // [boolean] 
				// 
				

				export let uniqueId = undefined // [number] 
				// 
				

				export let useTextureToStoreTargets = undefined // [boolean] 
				// 
				

				export let vertexCount = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let enableNormalMorphing = undefined // [boolean] 
				// gets or sets a boolean indicating if normals must be morphed
				

				export let enableTangentMorphing = undefined // [boolean] 
				// gets or sets a boolean indicating if tangents must be morphed
				

				export let enableUVMorphing = undefined // [boolean] 
				// gets or sets a boolean indicating if uv must be morphed
				

				export let optimizeInfluencers = undefined // [boolean] 
				// gets or sets a boolean indicating if influencers must be optimized (eg. recompiling the shader if less influencers are used)
				

				// ================ METHODS ================

				
				export let addTarget = (...args) => instance.addTarget(...args)

				export let clone = (...args) => instance.clone(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getActiveTarget = (...args) => instance.getActiveTarget(...args)

				export let getTarget = (...args) => instance.getTarget(...args)

				export let removeTarget = (...args) => instance.removeTarget(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let synchronize = (...args) => instance.synchronize(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:MorphTargetManager]`, ...args) : null

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

												if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (areUpdatesFrozen != undefined) instance.areUpdatesFrozen = areUpdatesFrozen?.instance || areUpdatesFrozen
				areUpdatesFrozen = instance.areUpdatesFrozen

				influences = instance.influences

				isUsingTextureForTargets = instance.isUsingTextureForTargets

				numInfluencers = instance.numInfluencers

				numTargets = instance.numTargets

				supportsNormals = instance.supportsNormals

				supportsTangents = instance.supportsTangents

				supportsUVs = instance.supportsUVs

				uniqueId = instance.uniqueId
				if (useTextureToStoreTargets != undefined) instance.useTextureToStoreTargets = useTextureToStoreTargets?.instance || useTextureToStoreTargets
				useTextureToStoreTargets = instance.useTextureToStoreTargets

				vertexCount = instance.vertexCount
				if (enableNormalMorphing != undefined) instance.enableNormalMorphing = enableNormalMorphing?.instance || enableNormalMorphing
				enableNormalMorphing = instance.enableNormalMorphing
				if (enableTangentMorphing != undefined) instance.enableTangentMorphing = enableTangentMorphing?.instance || enableTangentMorphing
				enableTangentMorphing = instance.enableTangentMorphing
				if (enableUVMorphing != undefined) instance.enableUVMorphing = enableUVMorphing?.instance || enableUVMorphing
				enableUVMorphing = instance.enableUVMorphing
				if (optimizeInfluencers != undefined) instance.optimizeInfluencers = optimizeInfluencers?.instance || optimizeInfluencers
				optimizeInfluencers = instance.optimizeInfluencers

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

			