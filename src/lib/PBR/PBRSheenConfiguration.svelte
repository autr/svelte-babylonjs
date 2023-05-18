
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
					albedoScaling  
					color  
					intensity  
					isEnabled  
					linkSheenWithAlbedo  
					markAllDefinesAsDirty (readonly) 
					name  
					priority  
					registerForExtraEvents  
					roughness  
					texture  
					textureRoughness  
					useRoughnessFromMainTexture  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let material = undefined // [pbrbasematerial] * required
				// 
				

				export let addToPluginList = undefined // [boolean] 
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PBRSheenConfiguration(material,addToPluginList) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let albedoScaling = undefined // [boolean] 
				// if true, the sheen effect is layered above the base brdf with the albedo-scaling technique.it allows the strength of the sheen effect to not depend on the base color of the material,making it easier to setup and tweak the effect
				

				export let color = undefined // [color3] 
				// defines the sheen color.
				

				export let intensity = undefined // [number] 
				// defines the sheen intensity.
				

				export let isEnabled = undefined // [boolean] 
				// defines if the material uses sheen.
				

				export let linkSheenWithAlbedo = undefined // [boolean] 
				// defines if the sheen is linked to the sheen color.
				

				export let markAllDefinesAsDirty = undefined // [reflection] 
				// 
				

				export let name = undefined // [string] 
				// defines the name of the plugin
				

				export let priority = undefined // [number] 
				// defines the priority of the plugin. lower numbers run first.
				

				export let registerForExtraEvents = undefined // [boolean] 
				// indicates that this plugin should be notified for the extra events (hasrendertargettextures / fillrendertargettextures / hardbindforsubmesh)
				

				export let roughness = undefined // [nullable] 
				// defines the sheen roughness.it is not taken into account if linksheenwithalbedo is true.to stay backward compatible, material roughness is used instead if sheen roughness = null
				

				export let texture = undefined // [nullable] 
				// stores the sheen tint values in a texture.rgb is tinta is a intensity or roughness if the roughness property has been defined and useroughnessfromtexture is true (in that case, textureroughness won't be used)if the roughness property has been defined and useroughnessfromtexture is false then the alpha channel is not used to modulate roughness
				

				export let textureRoughness = undefined // [nullable] 
				// stores the sheen roughness in a texture.alpha channel is the roughness. this texture won't be used if the texture property is not empty and useroughnessfromtexture is true
				

				export let useRoughnessFromMainTexture = undefined // [boolean] 
				// indicates that the alpha channel of the texture property will be used for roughness.has no effect if the roughness (and texture!) property is not defined
				

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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PBRSheenConfiguration]`, ...args) : null

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
				if (albedoScaling != undefined) instance.albedoScaling = albedoScaling?.instance || albedoScaling
				albedoScaling = instance.albedoScaling
				if (color != undefined) instance.color = color?.instance || color
				color = instance.color
				if (intensity != undefined) instance.intensity = intensity?.instance || intensity
				intensity = instance.intensity
				if (isEnabled != undefined) instance.isEnabled = isEnabled?.instance || isEnabled
				isEnabled = instance.isEnabled
				if (linkSheenWithAlbedo != undefined) instance.linkSheenWithAlbedo = linkSheenWithAlbedo?.instance || linkSheenWithAlbedo
				linkSheenWithAlbedo = instance.linkSheenWithAlbedo
				if (name != undefined) instance.name = name?.instance || name
				name = instance.name
				if (priority != undefined) instance.priority = priority?.instance || priority
				priority = instance.priority
				if (registerForExtraEvents != undefined) instance.registerForExtraEvents = registerForExtraEvents?.instance || registerForExtraEvents
				registerForExtraEvents = instance.registerForExtraEvents
				if (roughness != undefined) instance.roughness = roughness?.instance || roughness
				roughness = instance.roughness
				if (texture != undefined) instance.texture = texture?.instance || texture
				texture = instance.texture
				if (textureRoughness != undefined) instance.textureRoughness = textureRoughness?.instance || textureRoughness
				textureRoughness = instance.textureRoughness
				if (useRoughnessFromMainTexture != undefined) instance.useRoughnessFromMainTexture = useRoughnessFromMainTexture?.instance || useRoughnessFromMainTexture
				useRoughnessFromMainTexture = instance.useRoughnessFromMainTexture

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

			