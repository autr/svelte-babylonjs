
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					attributes  
					compilationString  
					constants  
					counters  
					extensions  
					functions  
					samplers  
					sharedData  
					supportUniformBuffers  
					target  
					uniforms  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.NodeMaterialBuildState() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let attributes = undefined // [array] 
				// gets the list of emitted attributes
				

				export let compilationString = undefined // [string] 
				// gets the emitted compilation strings
				

				export let constants = undefined // [array] 
				// gets the list of emitted constants
				

				export let counters = undefined // [reflection] 
				// gets the list of emitted counters
				

				export let extensions = undefined // [reflection] 
				// gets the list of emitted extensions
				

				export let functions = undefined // [reflection] 
				// gets the list of emitted functions
				

				export let samplers = undefined // [array] 
				// gets the list of emitted samplers
				

				export let sharedData = undefined // [nodematerialbuildstateshareddata] 
				// shared data between multiple nodematerialbuildstate instances
				

				export let supportUniformBuffers = undefined // [boolean] 
				// gets or sets a boolean indicating if the current state can emit uniform buffers
				

				export let target = undefined // [nodematerialblocktargets] 
				// gets the target of the compilation state
				

				export let uniforms = undefined // [array] 
				// gets the list of emitted uniforms
				

				// ================ METHODS ================

				
				export let finalize = (...args) => instance.finalize(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:NodeMaterialBuildState]`, ...args) : null

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

												if (attributes != undefined) instance.attributes = attributes?.instance || attributes
				attributes = instance.attributes
				if (compilationString != undefined) instance.compilationString = compilationString?.instance || compilationString
				compilationString = instance.compilationString
				if (constants != undefined) instance.constants = constants?.instance || constants
				constants = instance.constants
				if (counters != undefined) instance.counters = counters?.instance || counters
				counters = instance.counters
				if (extensions != undefined) instance.extensions = extensions?.instance || extensions
				extensions = instance.extensions
				if (functions != undefined) instance.functions = functions?.instance || functions
				functions = instance.functions
				if (samplers != undefined) instance.samplers = samplers?.instance || samplers
				samplers = instance.samplers
				if (sharedData != undefined) instance.sharedData = sharedData?.instance || sharedData
				sharedData = instance.sharedData
				if (supportUniformBuffers != undefined) instance.supportUniformBuffers = supportUniformBuffers?.instance || supportUniformBuffers
				supportUniformBuffers = instance.supportUniformBuffers
				if (target != undefined) instance.target = target?.instance || target
				target = instance.target
				if (uniforms != undefined) instance.uniforms = uniforms?.instance || uniforms
				uniforms = instance.uniforms

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

			