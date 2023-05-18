
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required 
					comments  
					inputsAreExclusive  
					uniqueId  
					visibleInInspector  
					visibleOnFrame  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the block name
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.AddBlock(name) : {}

				// ================ ACCESSORS ================

				
				export let buildId = undefined // [number] 
				// 
				

				export let inputs = undefined // [array] 
				// 
				

				export let isFinalMerger = undefined // [boolean] 
				// 
				

				export let isInput = undefined // [boolean] 
				// 
				

				export let isUnique = undefined // [boolean] 
				// 
				

				export let left = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let output = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let outputs = undefined // [array] 
				// 
				

				export let right = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let target = undefined // [nodematerialblocktargets] 
				// 
				

				export let willBeGeneratedIntoVertexShaderFromFragmentShader = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let comments = undefined // [string] 
				// gets or sets the comments associated with this block
				

				export let inputsAreExclusive = undefined // [boolean] 
				// gets or sets a boolean indicating that only one input can be connected at a time
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the node
				

				export let visibleInInspector = undefined // [boolean] 
				// gets or sets a boolean indicating that this input can be edited in the inspector (false by default)
				

				export let visibleOnFrame = undefined // [boolean] 
				// gets or sets a boolean indicating that this input can be edited from a collapsed frame
				

				// ================ METHODS ================

				
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

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:AddBlock]`, ...args) : null

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
				if (buildId != undefined) instance.buildId = buildId?.instance || buildId
				buildId = instance.buildId

				inputs = instance.inputs

				isFinalMerger = instance.isFinalMerger

				isInput = instance.isInput

				isUnique = instance.isUnique

				left = instance.left

				output = instance.output

				outputs = instance.outputs

				right = instance.right
				if (target != undefined) instance.target = target?.instance || target
				target = instance.target

				willBeGeneratedIntoVertexShaderFromFragmentShader = instance.willBeGeneratedIntoVertexShaderFromFragmentShader
				if (comments != undefined) instance.comments = comments?.instance || comments
				comments = instance.comments
				if (inputsAreExclusive != undefined) instance.inputsAreExclusive = inputsAreExclusive?.instance || inputsAreExclusive
				inputsAreExclusive = instance.inputsAreExclusive
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
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

			