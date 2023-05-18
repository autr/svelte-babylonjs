
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					plugin  * required
					maxAgents  * required
					maxAgentRadius  * required
					scene  * required 
					agents  
					bjsRECASTPlugin  
					onReachTargetObservable  
					reachRadii  
					recastCrowd  
					transforms  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let plugin = undefined // [recastjsplugin] * required
				// recastjs plugin
				

				export let maxAgents = undefined // [number] * required
				// the maximum agent count in the crowd
				

				export let maxAgentRadius = undefined // [number] * required
				// the maximum radius an agent can have
				

				export let scene = undefined // [scene] * required
				// to attach the crowd to
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.RecastJSCrowd(plugin,maxAgents,maxAgentRadius,scene) : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				
				export let agents = undefined // [array] 
				// all agents created
				

				export let bjsRECASTPlugin = undefined // [recastjsplugin] 
				// recast/detour plugin
				

				export let onReachTargetObservable = undefined // [observable] 
				// fires each time an agent is in reach radius of its destination
				

				export let reachRadii = undefined // [array] 
				// agents reach radius
				

				export let recastCrowd = undefined // [any] 
				// link to the detour crowd
				

				export let transforms = undefined // [array] 
				// one transform per agent
				

				// ================ METHODS ================

				
				export let addAgent = (...args) => instance.addAgent(...args)

				export let agentGoto = (...args) => instance.agentGoto(...args)

				export let agentTeleport = (...args) => instance.agentTeleport(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getAgentNextTargetPath = (...args) => instance.getAgentNextTargetPath(...args)

				export let getAgentNextTargetPathToRef = (...args) => instance.getAgentNextTargetPathToRef(...args)

				export let getAgentPosition = (...args) => instance.getAgentPosition(...args)

				export let getAgentPositionToRef = (...args) => instance.getAgentPositionToRef(...args)

				export let getAgentState = (...args) => instance.getAgentState(...args)

				export let getAgentVelocity = (...args) => instance.getAgentVelocity(...args)

				export let getAgentVelocityToRef = (...args) => instance.getAgentVelocityToRef(...args)

				export let getAgents = (...args) => instance.getAgents(...args)

				export let getCorners = (...args) => instance.getCorners(...args)

				export let getDefaultQueryExtent = (...args) => instance.getDefaultQueryExtent(...args)

				export let getDefaultQueryExtentToRef = (...args) => instance.getDefaultQueryExtentToRef(...args)

				export let overOffmeshConnection = (...args) => instance.overOffmeshConnection(...args)

				export let removeAgent = (...args) => instance.removeAgent(...args)

				export let setDefaultQueryExtent = (...args) => instance.setDefaultQueryExtent(...args)

				export let update = (...args) => instance.update(...args)

				export let updateAgentParameters = (...args) => instance.updateAgentParameters(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:RecastJSCrowd]`, ...args) : null

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

												if (plugin != undefined) instance.plugin = plugin?.instance || plugin
				plugin = instance.plugin
				if (maxAgents != undefined) instance.maxAgents = maxAgents?.instance || maxAgents
				maxAgents = instance.maxAgents
				if (maxAgentRadius != undefined) instance.maxAgentRadius = maxAgentRadius?.instance || maxAgentRadius
				maxAgentRadius = instance.maxAgentRadius
				if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene
				if (agents != undefined) instance.agents = agents?.instance || agents
				agents = instance.agents
				if (bjsRECASTPlugin != undefined) instance.bjsRECASTPlugin = bjsRECASTPlugin?.instance || bjsRECASTPlugin
				bjsRECASTPlugin = instance.bjsRECASTPlugin
				if (onReachTargetObservable != undefined) instance.onReachTargetObservable = onReachTargetObservable?.instance || onReachTargetObservable
				onReachTargetObservable = instance.onReachTargetObservable
				if (reachRadii != undefined) instance.reachRadii = reachRadii?.instance || reachRadii
				reachRadii = instance.reachRadii
				if (recastCrowd != undefined) instance.recastCrowd = recastCrowd?.instance || recastCrowd
				recastCrowd = instance.recastCrowd
				if (transforms != undefined) instance.transforms = transforms?.instance || transforms
				transforms = instance.transforms

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

			