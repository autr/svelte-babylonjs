
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					ownerBlock  * required
					direction  * required
					_blockType  * required
					_blockName  * required 
					acceptedConnectionPointTypes  
					define  
					displayName  
					excludedConnectionPointTypes  
					exposedPortPosition  
					isExposedOnFrame  
					isOptional  
					needDualDirectionValidation  
					onConnectionObservable  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the connection point name
				

				export let ownerBlock = undefined // [nodematerialblock] * required
				// defines the block hosting this connection point
				

				export let direction = undefined // [nodematerialconnectionpointdirection] * required
				// defines the direction of the connection point
				

				export let _blockType = undefined // [reflection] * required
				// 
				

				export let _blockName = undefined // [string] * required
				// 
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.NodeMaterialConnectionPointCustomObject(name,ownerBlock,direction,_blockType,_blockName) : {}

				// ================ ACCESSORS ================

				
				export let associatedVariableName = undefined // [string] 
				// 
				

				export let connectInputBlock = undefined // [nullable] 
				// 
				

				export let connectedBlocks = undefined // [array] 
				// 
				

				export let connectedPoint = undefined // [nullable] 
				// 
				

				export let endpoints = undefined // [array] 
				// 
				

				export let hasEndpoints = undefined // [boolean] 
				// 
				

				export let innerType = undefined // [nodematerialblockconnectionpointtypes] 
				// 
				

				export let isConnected = undefined // [boolean] 
				// 
				

				export let isConnectedInFragmentShader = undefined // [boolean] 
				// 
				

				export let isConnectedInVertexShader = undefined // [boolean] 
				// 
				

				export let isConnectedToInputBlock = undefined // [boolean] 
				// 
				

				export let isDirectlyConnectedToVertexOutput = undefined // [boolean] 
				// 
				

				export let sourceBlock = undefined // [nullable] 
				// 
				

				export let target = undefined // [nodematerialblocktargets] 
				// 
				

				export let type = undefined // [nodematerialblockconnectionpointtypes] 
				// 
				

				// ================ PROPERTIES ================

				
				export let acceptedConnectionPointTypes = undefined // [array] 
				// gets or sets the additional types supported by this connection point
				

				export let define = undefined // [string] 
				// gets or sets a string indicating that this uniform must be defined under a #ifdef
				

				export let displayName = undefined // [string] 
				// gets or sets the connection point name
				

				export let excludedConnectionPointTypes = undefined // [array] 
				// gets or sets the additional types excluded by this connection point
				

				export let exposedPortPosition = undefined // [number] 
				// gets or sets number indicating the position that the port is exposed to on a frame
				

				export let isExposedOnFrame = undefined // [boolean] 
				// gets or sets a boolean indicating that this connection point is exposed on a frame
				

				export let isOptional = undefined // [boolean] 
				// gets or sets a boolean indicating that this connection point can be omitted
				

				export let needDualDirectionValidation = undefined // [boolean] 
				// indicates that this connection point needs dual validation before being connected to another point
				

				export let onConnectionObservable = undefined // [observable] 
				// observable triggered when this point is connected
				

				// ================ METHODS ================

				
				export let addExcludedConnectionPointFromAllowedTypes = (...args) => instance.addExcludedConnectionPointFromAllowedTypes(...args)

				export let canConnectTo = (...args) => instance.canConnectTo(...args)

				export let checkCompatibilityState = (...args) => instance.checkCompatibilityState(...args)

				export let connectTo = (...args) => instance.connectTo(...args)

				export let createCustomInputBlock = (...args) => instance.createCustomInputBlock(...args)

				export let disconnectFrom = (...args) => instance.disconnectFrom(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let AreEquivalentTypes = (...args) => instance.AreEquivalentTypes(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:NodeMaterialConnectionPointCustomObject]`, ...args) : null

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
				if (ownerBlock != undefined) instance.ownerBlock = ownerBlock?.instance || ownerBlock
				ownerBlock = instance.ownerBlock
				if (direction != undefined) instance.direction = direction?.instance || direction
				direction = instance.direction
				if (_blockType != undefined) instance._blockType = _blockType?.instance || _blockType
				_blockType = instance._blockType
				if (_blockName != undefined) instance._blockName = _blockName?.instance || _blockName
				_blockName = instance._blockName
				if (associatedVariableName != undefined) instance.associatedVariableName = associatedVariableName?.instance || associatedVariableName
				associatedVariableName = instance.associatedVariableName

				connectInputBlock = instance.connectInputBlock

				connectedBlocks = instance.connectedBlocks

				connectedPoint = instance.connectedPoint

				endpoints = instance.endpoints

				hasEndpoints = instance.hasEndpoints

				innerType = instance.innerType

				isConnected = instance.isConnected

				isConnectedInFragmentShader = instance.isConnectedInFragmentShader

				isConnectedInVertexShader = instance.isConnectedInVertexShader

				isConnectedToInputBlock = instance.isConnectedToInputBlock

				isDirectlyConnectedToVertexOutput = instance.isDirectlyConnectedToVertexOutput

				sourceBlock = instance.sourceBlock
				if (target != undefined) instance.target = target?.instance || target
				target = instance.target
				if (type != undefined) instance.type = type?.instance || type
				type = instance.type
				if (acceptedConnectionPointTypes != undefined) instance.acceptedConnectionPointTypes = acceptedConnectionPointTypes?.instance || acceptedConnectionPointTypes
				acceptedConnectionPointTypes = instance.acceptedConnectionPointTypes
				if (define != undefined) instance.define = define?.instance || define
				define = instance.define
				if (displayName != undefined) instance.displayName = displayName?.instance || displayName
				displayName = instance.displayName
				if (excludedConnectionPointTypes != undefined) instance.excludedConnectionPointTypes = excludedConnectionPointTypes?.instance || excludedConnectionPointTypes
				excludedConnectionPointTypes = instance.excludedConnectionPointTypes
				if (exposedPortPosition != undefined) instance.exposedPortPosition = exposedPortPosition?.instance || exposedPortPosition
				exposedPortPosition = instance.exposedPortPosition
				if (isExposedOnFrame != undefined) instance.isExposedOnFrame = isExposedOnFrame?.instance || isExposedOnFrame
				isExposedOnFrame = instance.isExposedOnFrame
				if (isOptional != undefined) instance.isOptional = isOptional?.instance || isOptional
				isOptional = instance.isOptional
				if (needDualDirectionValidation != undefined) instance.needDualDirectionValidation = needDualDirectionValidation?.instance || needDualDirectionValidation
				needDualDirectionValidation = instance.needDualDirectionValidation
				if (onConnectionObservable != undefined) instance.onConnectionObservable = onConnectionObservable?.instance || onConnectionObservable
				onConnectionObservable = instance.onConnectionObservable

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

			