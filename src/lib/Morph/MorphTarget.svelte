
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					influence  
					scene   
					animations  
					id  
					onInfluenceChanged  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the name of the target
				

				export let influence = undefined // [number] 
				// defines the influence to use
				

				export let scene = undefined // [nullable] 
				// defines the scene the morphtarget belongs to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.MorphTarget(name,influence,scene) : {}

				// ================ ACCESSORS ================

				
				export let animationPropertiesOverride = undefined // [nullable] 
				// 
				

				export let hasNormals = undefined // [boolean] 
				// 
				

				export let hasPositions = undefined // [boolean] 
				// 
				

				export let hasTangents = undefined // [boolean] 
				// 
				

				export let hasUVs = undefined // [boolean] 
				// 
				

				export let uniqueId = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let animations = undefined // [array] 
				// gets or sets the list of animations
				

				export let id = undefined // [string] 
				// gets or sets the id of the morph target
				

				export let onInfluenceChanged = undefined // [observable] 
				// observable raised when the influence changes
				

				// ================ METHODS ================

				
				export let clone = (...args) => instance.clone(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getNormals = (...args) => instance.getNormals(...args)

				export let getPositions = (...args) => instance.getPositions(...args)

				export let getTangents = (...args) => instance.getTangents(...args)

				export let getUVs = (...args) => instance.getUVs(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setNormals = (...args) => instance.setNormals(...args)

				export let setPositions = (...args) => instance.setPositions(...args)

				export let setTangents = (...args) => instance.setTangents(...args)

				export let setUVs = (...args) => instance.setUVs(...args)

				export let FromMesh = (...args) => instance.FromMesh(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:MorphTarget]`, ...args) : null

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
				if (influence != undefined) instance.influence = influence?.instance || influence
				influence = instance.influence
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (animationPropertiesOverride != undefined) instance.animationPropertiesOverride = animationPropertiesOverride?.instance || animationPropertiesOverride
				animationPropertiesOverride = instance.animationPropertiesOverride

				hasNormals = instance.hasNormals

				hasPositions = instance.hasPositions

				hasTangents = instance.hasTangents

				hasUVs = instance.hasUVs

				uniqueId = instance.uniqueId
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (onInfluenceChanged != undefined) instance.onInfluenceChanged = onInfluenceChanged?.instance || onInfluenceChanged
				onInfluenceChanged = instance.onInfluenceChanged

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

			