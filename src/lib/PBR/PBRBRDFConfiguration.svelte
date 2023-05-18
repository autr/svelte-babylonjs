
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					material  * required
					addToPluginList   
					markAllDefinesAsDirty (readonly) 
					name  
					priority  
					registerForExtraEvents  
					useEnergyConservation  
					useSmithVisibilityHeightCorrelated  
					useSpecularGlossinessInputEnergyConservation  
					useSphericalHarmonics  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let material = undefined // [pbrbasematerial] * required
				// 
				

				export let addToPluginList = undefined // [boolean] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PBRBRDFConfiguration(material,addToPluginList) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let markAllDefinesAsDirty = undefined // [reflection] 
				// 
				

				export let name = undefined // [string] 
				// defines the name of the plugin
				

				export let priority = undefined // [number] 
				// defines the priority of the plugin. lower numbers run first.
				

				export let registerForExtraEvents = undefined // [boolean] 
				// indicates that this plugin should be notified for the extra events (hasrendertargettextures / fillrendertargettextures / hardbindforsubmesh)
				

				export let useEnergyConservation = undefined // [boolean] 
				// defines if the material uses energy conservation.
				

				export let useSmithVisibilityHeightCorrelated = undefined // [boolean] 
				// legacy mode set to falsedefines if the material uses height smith correlated visibility term.if you intent to not use our default brdf, you need to load a separate brdf texture for the pbryou can either load https://assets.babylonjs.com/environments/uncorrelatedbrdf.pngor https://assets.babylonjs.com/environments/uncorrelatedbrdf.dds to have more precisionnot relying on height correlated will also disable energy conservation.
				

				export let useSpecularGlossinessInputEnergyConservation = undefined // [boolean] 
				// defines if the material uses energy conservation, when the specular workflow is active.if activated, the albedo color is multiplied with (1. - maxchannel(specular color)).if deactivated, a material is only physically plausible, when (albedo color + specular color) < 1.in the deactivated case, the material author has to ensure energy conservation, for a physically plausible rendering.
				

				export let useSphericalHarmonics = undefined // [boolean] 
				// legacy mode set to falsedefines if the material uses spherical harmonics vs spherical polynomials for thediffuse part of the ibl.the harmonics despite a tiny bigger cost has been proven to provide closer resultsto the ground truth.
				

				// ================ METHODS ================

				
				export let addFallbacks = (...args) => instance.addFallbacks(...args)

				export let bindForSubMesh = (...args) => instance.bindForSubMesh(...args)

				export let collectDefines = (...args) => instance.collectDefines(...args)

				export let copyTo = (...args) => instance.copyTo(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let fillRenderTargetTextures = (...args) => instance.fillRenderTargetTextures(...args)

				export let getActiveTextures = (...args) => instance.getActiveTextures(...args)

				export let getAnimatables = (...args) => instance.getAnimatables(...args)

				export let getAttributes = (...args) => instance.getAttributes(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getCustomCode = (...args) => instance.getCustomCode(...args)

				export let getSamplers = (...args) => instance.getSamplers(...args)

				export let getUniformBuffersNames = (...args) => instance.getUniformBuffersNames(...args)

				export let getUniforms = (...args) => instance.getUniforms(...args)

				export let hardBindForSubMesh = (...args) => instance.hardBindForSubMesh(...args)

				export let hasRenderTargetTextures = (...args) => instance.hasRenderTargetTextures(...args)

				export let hasTexture = (...args) => instance.hasTexture(...args)

				export let isReadyForSubMesh = (...args) => instance.isReadyForSubMesh(...args)

				export let parse = (...args) => instance.parse(...args)

				export let prepareDefines = (...args) => instance.prepareDefines(...args)

				export let prepareDefinesBeforeAttributes = (...args) => instance.prepareDefinesBeforeAttributes(...args)

				export let serialize = (...args) => instance.serialize(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PBRBRDFConfiguration]`, ...args) : null

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

												if (material != undefined) instance.material = material?.instance || material
				material = instance.material
				if (addToPluginList != undefined) instance.addToPluginList = addToPluginList?.instance || addToPluginList
				addToPluginList = instance.addToPluginList
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (priority != undefined) instance.priority = priority?.instance || priority
				priority = instance.priority
				if (registerForExtraEvents != undefined) instance.registerForExtraEvents = registerForExtraEvents?.instance || registerForExtraEvents
				registerForExtraEvents = instance.registerForExtraEvents
				if (useEnergyConservation != undefined) instance.useEnergyConservation = useEnergyConservation?.instance || useEnergyConservation
				useEnergyConservation = instance.useEnergyConservation
				if (useSmithVisibilityHeightCorrelated != undefined) instance.useSmithVisibilityHeightCorrelated = useSmithVisibilityHeightCorrelated?.instance || useSmithVisibilityHeightCorrelated
				useSmithVisibilityHeightCorrelated = instance.useSmithVisibilityHeightCorrelated
				if (useSpecularGlossinessInputEnergyConservation != undefined) instance.useSpecularGlossinessInputEnergyConservation = useSpecularGlossinessInputEnergyConservation?.instance || useSpecularGlossinessInputEnergyConservation
				useSpecularGlossinessInputEnergyConservation = instance.useSpecularGlossinessInputEnergyConservation
				if (useSphericalHarmonics != undefined) instance.useSphericalHarmonics = useSphericalHarmonics?.instance || useSphericalHarmonics
				useSphericalHarmonics = instance.useSphericalHarmonics

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

			