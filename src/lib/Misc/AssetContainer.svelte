
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene   
					actionManagers  
					animationGroups  
					animations  
					cameras  
					effectLayers  
					fluidRenderer  
					geometries  
					layers  
					lensFlareSystems  
					lights  
					materials  
					meshes  
					morphTargetManagers  
					multiMaterials  
					particleSystems  
					postProcesses  
					prePassRenderer  
					proceduralTextures  
					reflectionProbes  
					rootNodes  
					skeletons  
					sounds  
					subSurfaceConfiguration  
					textures  
					transformNodes  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [nullable] 
				// the scene the assetcontainer belongs to.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AssetContainer(scene) : {}

				// ================ ACCESSORS ================

				
				export let environmentTexture = undefined // [nullable] 
				// 
				

				// ================ PROPERTIES ================

				
				export let actionManagers = undefined // [array] 
				// actionmanagers available on the scene.
				

				export let animationGroups = undefined // [array] 
				// all of the animation groups added to this scene
				

				export let animations = undefined // [array] 
				// gets a list of animations associated with the scene
				

				export let cameras = undefined // [array] 
				// all of the cameras added to this scene
				

				export let effectLayers = undefined // [array] 
				// the list of effect layers (highlights/glow) added to the scene
				

				export let fluidRenderer = undefined // [nullable] 
				// gets or sets the fluid renderer associated to the scene.
				

				export let geometries = undefined // [array] 
				// the list of geometries used in the scene.
				

				export let layers = undefined // [array] 
				// the list of layers (background and foreground) of the scene
				

				export let lensFlareSystems = undefined // [array] 
				// the list of lens flare system added to the scene
				

				export let lights = undefined // [array] 
				// all of the lights added to this scene
				

				export let materials = undefined // [array] 
				// all of the materials added to this scenein the context of a scene, it is not supposed to be modified manually.any addition or removal should be done using the addmaterial and removematerial scene methods.note also that the order of the material within the array is not significant and might change.
				

				export let meshes = undefined // [array] 
				// all of the (abstract) meshes added to this scene
				

				export let morphTargetManagers = undefined // [array] 
				// the list of morph target managers added to the scene
				

				export let multiMaterials = undefined // [array] 
				// all of the multi-materials added to this scene
				

				export let particleSystems = undefined // [array] 
				// all of the particle systems added to this scene
				

				export let postProcesses = undefined // [array] 
				// the list of postprocesses added to the scene
				

				export let prePassRenderer = undefined // [nullable] 
				// gets or sets the current prepass renderer associated to the scene.
				

				export let proceduralTextures = undefined // [array] 
				// the list of procedural textures added to the scene
				

				export let reflectionProbes = undefined // [array] 
				// the list of reflection probes added to the scene
				

				export let rootNodes = undefined // [array] 
				// gets the list of root nodes (ie. nodes with no parent)
				

				export let skeletons = undefined // [array] 
				// the list of skeletons added to the scene
				

				export let sounds = undefined // [nullable] 
				// the list of sounds used in the scene.
				

				export let subSurfaceConfiguration = undefined // [nullable] 
				// gets or sets the current prepass renderer associated to the scene.
				

				export let textures = undefined // [array] 
				// textures to keep.
				

				export let transformNodes = undefined // [array] 
				// all of the transform nodes added to this scenein the context of a scene, it is not supposed to be modified manually.any addition or removal should be done using the addtransformnode and removetransformnode scene methods.note also that the order of the transformnode within the array is not significant and might change.
				

				// ================ METHODS ================

				
				export let addAllToScene = (...args) => instance.addAllToScene(...args)

				export let addEffectLayer = (...args) => instance.addEffectLayer(...args)

				export let addLensFlareSystem = (...args) => instance.addLensFlareSystem(...args)

				export let addReflectionProbe = (...args) => instance.addReflectionProbe(...args)

				export let addToScene = (...args) => instance.addToScene(...args)

				export let createRootMesh = (...args) => instance.createRootMesh(...args)

				export let disableFluidRenderer = (...args) => instance.disableFluidRenderer(...args)

				export let disablePrePassRenderer = (...args) => instance.disablePrePassRenderer(...args)

				export let disableSubSurfaceForPrePass = (...args) => instance.disableSubSurfaceForPrePass(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let enableFluidRenderer = (...args) => instance.enableFluidRenderer(...args)

				export let enablePrePassRenderer = (...args) => instance.enablePrePassRenderer(...args)

				export let enableSubSurfaceForPrePass = (...args) => instance.enableSubSurfaceForPrePass(...args)

				export let getGlowLayerByName = (...args) => instance.getGlowLayerByName(...args)

				export let getHighlightLayerByName = (...args) => instance.getHighlightLayerByName(...args)

				export let getLensFlareSystemByID = (...args) => instance.getLensFlareSystemByID(...args)

				export let getLensFlareSystemById = (...args) => instance.getLensFlareSystemById(...args)

				export let getLensFlareSystemByName = (...args) => instance.getLensFlareSystemByName(...args)

				export let getNodes = (...args) => instance.getNodes(...args)

				export let instantiateModelsToScene = (...args) => instance.instantiateModelsToScene(...args)

				export let mergeAnimationsTo = (...args) => instance.mergeAnimationsTo(...args)

				export let moveAllFromScene = (...args) => instance.moveAllFromScene(...args)

				export let removeAllFromScene = (...args) => instance.removeAllFromScene(...args)

				export let removeEffectLayer = (...args) => instance.removeEffectLayer(...args)

				export let removeFromScene = (...args) => instance.removeFromScene(...args)

				export let removeLensFlareSystem = (...args) => instance.removeLensFlareSystem(...args)

				export let removeReflectionProbe = (...args) => instance.removeReflectionProbe(...args)

				export let AddIndividualParser = (...args) => instance.AddIndividualParser(...args)

				export let AddParser = (...args) => instance.AddParser(...args)

				export let GetIndividualParser = (...args) => instance.GetIndividualParser(...args)

				export let GetParser = (...args) => instance.GetParser(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AssetContainer]`, ...args) : null

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
				if (environmentTexture != undefined) instance.environmentTexture = environmentTexture?.instance || environmentTexture
				environmentTexture = instance.environmentTexture
				if (actionManagers != undefined) instance.actionManagers = actionManagers?.instance || actionManagers
				actionManagers = instance.actionManagers
				if (animationGroups != undefined) instance.animationGroups = animationGroups?.instance || animationGroups
				animationGroups = instance.animationGroups
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (cameras != undefined) instance.cameras = cameras?.instance || cameras
				cameras = instance.cameras
				if (effectLayers != undefined) instance.effectLayers = effectLayers?.instance || effectLayers
				effectLayers = instance.effectLayers
				if (fluidRenderer != undefined) instance.fluidRenderer = fluidRenderer?.instance || fluidRenderer
				fluidRenderer = instance.fluidRenderer
				if (geometries != undefined) instance.geometries = geometries?.instance || geometries
				geometries = instance.geometries
				if (layers != undefined) instance.layers = layers?.instance || layers
				layers = instance.layers
				if (lensFlareSystems != undefined) instance.lensFlareSystems = lensFlareSystems?.instance || lensFlareSystems
				lensFlareSystems = instance.lensFlareSystems
				if (lights != undefined) instance.lights = lights?.instance || lights
				lights = instance.lights
				if (materials != undefined) instance.materials = materials?.instance || materials
				materials = instance.materials
				if (meshes != undefined) instance.meshes = meshes?.instance || meshes
				meshes = instance.meshes
				if (morphTargetManagers != undefined) instance.morphTargetManagers = morphTargetManagers?.instance || morphTargetManagers
				morphTargetManagers = instance.morphTargetManagers
				if (multiMaterials != undefined) instance.multiMaterials = multiMaterials?.instance || multiMaterials
				multiMaterials = instance.multiMaterials
				if (particleSystems != undefined) instance.particleSystems = particleSystems?.instance || particleSystems
				particleSystems = instance.particleSystems
				if (postProcesses != undefined) instance.postProcesses = postProcesses?.instance || postProcesses
				postProcesses = instance.postProcesses
				if (prePassRenderer != undefined) instance.prePassRenderer = prePassRenderer?.instance || prePassRenderer
				prePassRenderer = instance.prePassRenderer
				if (proceduralTextures != undefined) instance.proceduralTextures = proceduralTextures?.instance || proceduralTextures
				proceduralTextures = instance.proceduralTextures
				if (reflectionProbes != undefined) instance.reflectionProbes = reflectionProbes?.instance || reflectionProbes
				reflectionProbes = instance.reflectionProbes
				if (rootNodes != undefined) instance.rootNodes = rootNodes?.instance || rootNodes
				rootNodes = instance.rootNodes
				if (skeletons != undefined) instance.skeletons = skeletons?.instance || skeletons
				skeletons = instance.skeletons
				if (sounds != undefined) instance.sounds = sounds?.instance || sounds
				sounds = instance.sounds
				if (subSurfaceConfiguration != undefined) instance.subSurfaceConfiguration = subSurfaceConfiguration?.instance || subSurfaceConfiguration
				subSurfaceConfiguration = instance.subSurfaceConfiguration
				if (textures != undefined) instance.textures = textures?.instance || textures
				textures = instance.textures
				if (transformNodes != undefined) instance.transformNodes = transformNodes?.instance || transformNodes
				transformNodes = instance.transformNodes

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

			