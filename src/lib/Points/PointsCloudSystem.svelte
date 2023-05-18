
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					pointSize  * required
					scene  * required
					options   
					counter  
					mesh  
					nbParticles  
					particles  
					vars  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// (string) is the pcs name, this will be the underlying mesh name
				

				export let pointSize = undefined // [number] * required
				// (number) is the size for each point. has no effect on a webgpu engine.
				

				export let scene = undefined // [scene] * required
				// (scene) is the scene in which the pcs is added
				

				export let options = undefined // [reflection] 
				// defines the options of the pcs e.g.* updatable (optional boolean, default true) : if the pcs must be updatable or immutable
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PointsCloudSystem(name,pointSize,scene,options) : {}

				// ================ ACCESSORS ================

				
				export let colors = undefined // [float32array] 
				// 
				

				export let computeBoundingBox = undefined // [boolean] 
				// 
				

				export let computeParticleColor = undefined // [boolean] 
				// 
				

				export let computeParticleRotation = undefined // [] 
				// 
				

				export let computeParticleTexture = undefined // [boolean] 
				// 
				

				export let isAlwaysVisible = undefined // [boolean] 
				// 
				

				export let positions = undefined // [float32array] 
				// 
				

				export let uvs = undefined // [float32array] 
				// 
				

				// ================ PROPERTIES ================

				
				export let counter = undefined // [number] 
				// this a counter for your own usage. it's not set by any sps functions.
				

				export let mesh = undefined // [mesh] 
				// the pcs mesh. it's a standard bjs mesh, so all the methods from the mesh class are available.
				

				export let nbParticles = undefined // [number] 
				// the pcs total number of particles. read only. use pcs.counter instead if you need to set your own value.
				

				export let particles = undefined // [array] 
				// the pcs array of cloud point objects. just access each particle as with any classic array. example : var p = sps.particles[i];
				

				export let vars = undefined // [any] 
				// this empty object is intended to store some pcs specific or temporary values in order to lower the garbage collector activity.please read :
				

				// ================ METHODS ================

				
				export let addPoints = (...args) => instance.addPoints(...args)

				export let addSurfacePoints = (...args) => instance.addSurfacePoints(...args)

				export let addVolumePoints = (...args) => instance.addVolumePoints(...args)

				export let afterUpdateParticles = (...args) => instance.afterUpdateParticles(...args)

				export let beforeUpdateParticles = (...args) => instance.beforeUpdateParticles(...args)

				export let buildMeshAsync = (...args) => instance.buildMeshAsync(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let initParticles = (...args) => instance.initParticles(...args)

				export let recycleParticle = (...args) => instance.recycleParticle(...args)

				export let refreshVisibleSize = (...args) => instance.refreshVisibleSize(...args)

				export let setParticles = (...args) => instance.setParticles(...args)

				export let setVisibilityBox = (...args) => instance.setVisibilityBox(...args)

				export let updateParticle = (...args) => instance.updateParticle(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PointsCloudSystem]`, ...args) : null

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
				if (pointSize != undefined) instance.pointSize = pointSize?.instance || pointSize
				pointSize = instance.pointSize
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options

				colors = instance.colors
				if (computeBoundingBox != undefined) instance.computeBoundingBox = computeBoundingBox?.instance || computeBoundingBox
				computeBoundingBox = instance.computeBoundingBox
				if (computeParticleColor != undefined) instance.computeParticleColor = computeParticleColor?.instance || computeParticleColor
				computeParticleColor = instance.computeParticleColor
				if (computeParticleRotation != undefined) instance.computeParticleRotation = computeParticleRotation?.instance || computeParticleRotation
				computeParticleRotation = instance.computeParticleRotation
				if (computeParticleTexture != undefined) instance.computeParticleTexture = computeParticleTexture?.instance || computeParticleTexture
				computeParticleTexture = instance.computeParticleTexture
				if (isAlwaysVisible != undefined) instance.isAlwaysVisible = isAlwaysVisible?.instance || isAlwaysVisible
				isAlwaysVisible = instance.isAlwaysVisible

				positions = instance.positions

				uvs = instance.uvs
				if (counter != undefined) instance.counter = counter?.instance || counter
				counter = instance.counter
				if (mesh != undefined) instance.mesh = mesh?.instance || mesh
				mesh = instance.mesh
				if (nbParticles != undefined) instance.nbParticles = nbParticles?.instance || nbParticles
				nbParticles = instance.nbParticles
				if (particles != undefined) instance.particles = particles?.instance || particles
				particles = instance.particles
				if (vars != undefined) instance.vars = vars?.instance || vars
				vars = instance.vars

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

			