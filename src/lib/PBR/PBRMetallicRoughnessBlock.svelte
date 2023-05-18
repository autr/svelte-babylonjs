
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required 
					alphaTestCutoff  
					comments  
					debugFactor  
					debugLimit  
					debugMode  
					directIntensity  
					enableSpecularAntiAliasing  
					environmentIntensity  
					forceNormalForward  
					generateOnlyFragmentCode  
					inputsAreExclusive  
					light  
					lightFalloff  
					realTimeFiltering  
					realTimeFilteringQuality  
					specularIntensity  
					uniqueId  
					unlit  
					useAlphaBlending  
					useAlphaTest  
					useEnergyConservation  
					useHorizonOcclusion  
					useRadianceOcclusion  
					useRadianceOverAlpha  
					useSpecularOverAlpha  
					visibleInInspector  
					visibleOnFrame  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the block name
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PBRMetallicRoughnessBlock(name) : {}

				// ================ ACCESSORS ================

				
				export let alpha = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let ambientClr = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let ambientColor = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let ambientOcc = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let anisotropy = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let baseColor = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let buildId = undefined // [number] 
				// 
				

				export let cameraPosition = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let clearcoat = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let clearcoatDir = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let clearcoatInd = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let diffuseDir = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let diffuseInd = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let indexOfRefraction = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let inputs = undefined // [array] 
				// 
				

				export let iridescence = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let isFinalMerger = undefined // [boolean] 
				// 
				

				export let isInput = undefined // [boolean] 
				// 
				

				export let isUnique = undefined // [boolean] 
				// 
				

				export let lighting = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let metallic = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let opacity = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let outputs = undefined // [array] 
				// 
				

				export let perturbedNormal = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let reflection = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let refraction = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let roughness = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let shadow = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let sheen = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let sheenDir = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let sheenInd = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let specularDir = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let specularInd = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let subsurface = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let target = undefined // [nodematerialblocktargets] 
				// 
				

				export let view = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let willBeGeneratedIntoVertexShaderFromFragmentShader = undefined // [boolean] 
				// 
				

				export let worldNormal = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let worldPosition = undefined // [nodematerialconnectionpoint] 
				// 
				

				// ================ PROPERTIES ================

				
				export let alphaTestCutoff = undefined // [number] 
				// defines the alpha limits in alpha test mode.
				

				export let comments = undefined // [string] 
				// gets or sets the comments associated with this block
				

				export let debugFactor = undefined // [number] 
				// as the default viewing range might not be enough (if the ambient is really small for instance)you can use the factor to better multiply the final value.
				

				export let debugLimit = undefined // [number] 
				// specify from where on screen the debug mode should start.the value goes from -1 (full screen) to 1 (not visible)it helps with side by side comparison against the final renderthis defaults to 0
				

				export let debugMode = undefined // [number] 
				// defines the material debug mode.it helps seeing only some components of the material while troubleshooting.
				

				export let directIntensity = undefined // [number] 
				// intensity of the direct lights e.g. the four lights available in your scene.this impacts both the direct diffuse and specular highlights.
				

				export let enableSpecularAntiAliasing = undefined // [boolean] 
				// enables specular anti aliasing in the pbr shader.it will both interacts on the geometry for analytical and ibl lighting.it also prefilter the roughness map based on the bump values.
				

				export let environmentIntensity = undefined // [number] 
				// intensity of the environment e.g. how much the environment will light the objecteither through harmonics for rough material or through the reflection for shiny ones.
				

				export let forceNormalForward = undefined // [boolean] 
				// force normal to face away from face.
				

				export let generateOnlyFragmentCode = undefined // [boolean] 
				// indicates that no code should be generated in the vertex shader. can be useful in some specific circumstances (like when doing ray marching for eg)
				

				export let inputsAreExclusive = undefined // [boolean] 
				// gets or sets a boolean indicating that only one input can be connected at a time
				

				export let light = undefined // [nullable] 
				// gets or sets the light associated with this block
				

				export let lightFalloff = undefined // [number] 
				// defines the  falloff type used in this material.it by default is physical.
				

				export let realTimeFiltering = undefined // [boolean] 
				// enables realtime filtering on the texture.
				

				export let realTimeFilteringQuality = undefined // [number] 
				// quality switch for realtime filtering
				

				export let specularIntensity = undefined // [number] 
				// this is a special control allowing the reduction of the specular highlights coming from thefour lights of the scene. those highlights may not be needed in full environment lighting.
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the node
				

				export let unlit = undefined // [boolean] 
				// if set to true, no lighting calculations will be applied.
				

				export let useAlphaBlending = undefined // [boolean] 
				// specifies that alpha blending should be used
				

				export let useAlphaTest = undefined // [boolean] 
				// specifies that alpha test should be used
				

				export let useEnergyConservation = undefined // [boolean] 
				// defines if the material uses energy conservation.
				

				export let useHorizonOcclusion = undefined // [boolean] 
				// this parameters will enable/disable horizon occlusion to prevent normal maps to look shiny when the normalmakes the reflect vector face the model (under horizon).
				

				export let useRadianceOcclusion = undefined // [boolean] 
				// this parameters will enable/disable radiance occlusion by preventing the radiance to littoo much the area relying on ambient texture to define their ambient occlusion.
				

				export let useRadianceOverAlpha = undefined // [boolean] 
				// specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones).a car glass is a good example of that. when the street lights reflects on it you can not see what is behind.
				

				export let useSpecularOverAlpha = undefined // [boolean] 
				// specifies that the material will keeps the specular highlights over a transparent surface (only the most luminous ones).a car glass is a good example of that. when sun reflects on it you can not see what is behind.
				

				export let visibleInInspector = undefined // [boolean] 
				// gets or sets a boolean indicating that this input can be edited in the inspector (false by default)
				

				export let visibleOnFrame = undefined // [boolean] 
				// gets or sets a boolean indicating that this input can be edited from a collapsed frame
				

				// ================ METHODS ================

				
				export let _deserialize = (...args) => instance._deserialize(...args)

				export let autoConfigure = (...args) => instance.autoConfigure(...args)

				export let bind = (...args) => instance.bind(...args)

				export let build = (...args) => instance.build(...args)

				export let clone = (...args) => instance.clone(...args)

				export let connectTo = (...args) => instance.connectTo(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getFirstAvailableInput = (...args) => instance.getFirstAvailableInput(...args)

				export let getFirstAvailableOutput = (...args) => instance.getFirstAvailableOutput(...args)

				export let getInputByName = (...args) => instance.getInputByName(...args)

				export let getOutputByName = (...args) => instance.getOutputByName(...args)

				export let getSiblingOutput = (...args) => instance.getSiblingOutput(...args)

				export let initialize = (...args) => instance.initialize(...args)

				export let initializeDefines = (...args) => instance.initializeDefines(...args)

				export let isAnAncestorOf = (...args) => instance.isAnAncestorOf(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let prepareDefines = (...args) => instance.prepareDefines(...args)

				export let provideFallbacks = (...args) => instance.provideFallbacks(...args)

				export let registerInput = (...args) => instance.registerInput(...args)

				export let registerOutput = (...args) => instance.registerOutput(...args)

				export let replaceRepeatableContent = (...args) => instance.replaceRepeatableContent(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let updateUniformsAndSamples = (...args) => instance.updateUniformsAndSamples(...args)

				export let validateBlockName = (...args) => instance.validateBlockName(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PBRMetallicRoughnessBlock]`, ...args) : null

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

												if (name != undefined) instance.name = name?.instance || name
				name = instance.name

				alpha = instance.alpha

				ambientClr = instance.ambientClr

				ambientColor = instance.ambientColor

				ambientOcc = instance.ambientOcc

				anisotropy = instance.anisotropy

				baseColor = instance.baseColor
				if (buildId != undefined) instance.buildId = buildId?.instance || buildId
				buildId = instance.buildId

				cameraPosition = instance.cameraPosition

				clearcoat = instance.clearcoat

				clearcoatDir = instance.clearcoatDir

				clearcoatInd = instance.clearcoatInd

				diffuseDir = instance.diffuseDir

				diffuseInd = instance.diffuseInd

				indexOfRefraction = instance.indexOfRefraction

				inputs = instance.inputs

				iridescence = instance.iridescence

				isFinalMerger = instance.isFinalMerger

				isInput = instance.isInput

				isUnique = instance.isUnique

				lighting = instance.lighting

				metallic = instance.metallic

				opacity = instance.opacity

				outputs = instance.outputs

				perturbedNormal = instance.perturbedNormal

				reflection = instance.reflection

				refraction = instance.refraction

				roughness = instance.roughness

				shadow = instance.shadow

				sheen = instance.sheen

				sheenDir = instance.sheenDir

				sheenInd = instance.sheenInd

				specularDir = instance.specularDir

				specularInd = instance.specularInd

				subsurface = instance.subsurface
				if (target != undefined) instance.target = target?.instance || target
				target = instance.target

				view = instance.view

				willBeGeneratedIntoVertexShaderFromFragmentShader = instance.willBeGeneratedIntoVertexShaderFromFragmentShader

				worldNormal = instance.worldNormal

				worldPosition = instance.worldPosition
				if (alphaTestCutoff != undefined) instance.alphaTestCutoff = alphaTestCutoff?.instance || alphaTestCutoff
				alphaTestCutoff = instance.alphaTestCutoff
				if (comments != undefined) instance.comments = comments?.instance || comments
				comments = instance.comments
				if (debugFactor != undefined) instance.debugFactor = debugFactor?.instance || debugFactor
				debugFactor = instance.debugFactor
				if (debugLimit != undefined) instance.debugLimit = debugLimit?.instance || debugLimit
				debugLimit = instance.debugLimit
				if (debugMode != undefined) instance.debugMode = debugMode?.instance || debugMode
				debugMode = instance.debugMode
				if (directIntensity != undefined) instance.directIntensity = directIntensity?.instance || directIntensity
				directIntensity = instance.directIntensity
				if (enableSpecularAntiAliasing != undefined) instance.enableSpecularAntiAliasing = enableSpecularAntiAliasing?.instance || enableSpecularAntiAliasing
				enableSpecularAntiAliasing = instance.enableSpecularAntiAliasing
				if (environmentIntensity != undefined) instance.environmentIntensity = environmentIntensity?.instance || environmentIntensity
				environmentIntensity = instance.environmentIntensity
				if (forceNormalForward != undefined) instance.forceNormalForward = forceNormalForward?.instance || forceNormalForward
				forceNormalForward = instance.forceNormalForward
				if (generateOnlyFragmentCode != undefined) instance.generateOnlyFragmentCode = generateOnlyFragmentCode?.instance || generateOnlyFragmentCode
				generateOnlyFragmentCode = instance.generateOnlyFragmentCode
				if (inputsAreExclusive != undefined) instance.inputsAreExclusive = inputsAreExclusive?.instance || inputsAreExclusive
				inputsAreExclusive = instance.inputsAreExclusive
				if (light != undefined) instance.light = light?.instance || light
				light = instance.light
				if (lightFalloff != undefined) instance.lightFalloff = lightFalloff?.instance || lightFalloff
				lightFalloff = instance.lightFalloff
				if (realTimeFiltering != undefined) instance.realTimeFiltering = realTimeFiltering?.instance || realTimeFiltering
				realTimeFiltering = instance.realTimeFiltering
				if (realTimeFilteringQuality != undefined) instance.realTimeFilteringQuality = realTimeFilteringQuality?.instance || realTimeFilteringQuality
				realTimeFilteringQuality = instance.realTimeFilteringQuality
				if (specularIntensity != undefined) instance.specularIntensity = specularIntensity?.instance || specularIntensity
				specularIntensity = instance.specularIntensity
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (unlit != undefined) instance.unlit = unlit?.instance || unlit
				unlit = instance.unlit
				if (useAlphaBlending != undefined) instance.useAlphaBlending = useAlphaBlending?.instance || useAlphaBlending
				useAlphaBlending = instance.useAlphaBlending
				if (useAlphaTest != undefined) instance.useAlphaTest = useAlphaTest?.instance || useAlphaTest
				useAlphaTest = instance.useAlphaTest
				if (useEnergyConservation != undefined) instance.useEnergyConservation = useEnergyConservation?.instance || useEnergyConservation
				useEnergyConservation = instance.useEnergyConservation
				if (useHorizonOcclusion != undefined) instance.useHorizonOcclusion = useHorizonOcclusion?.instance || useHorizonOcclusion
				useHorizonOcclusion = instance.useHorizonOcclusion
				if (useRadianceOcclusion != undefined) instance.useRadianceOcclusion = useRadianceOcclusion?.instance || useRadianceOcclusion
				useRadianceOcclusion = instance.useRadianceOcclusion
				if (useRadianceOverAlpha != undefined) instance.useRadianceOverAlpha = useRadianceOverAlpha?.instance || useRadianceOverAlpha
				useRadianceOverAlpha = instance.useRadianceOverAlpha
				if (useSpecularOverAlpha != undefined) instance.useSpecularOverAlpha = useSpecularOverAlpha?.instance || useSpecularOverAlpha
				useSpecularOverAlpha = instance.useSpecularOverAlpha
				if (visibleInInspector != undefined) instance.visibleInInspector = visibleInInspector?.instance || visibleInInspector
				visibleInInspector = instance.visibleInInspector
				if (visibleOnFrame != undefined) instance.visibleOnFrame = visibleOnFrame?.instance || visibleOnFrame
				visibleOnFrame = instance.visibleOnFrame

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

			