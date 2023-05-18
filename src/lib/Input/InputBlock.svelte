
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					target  
					type   
					comments  
					convertToGammaSpace  
					convertToLinearSpace  
					groupInInspector  
					inputsAreExclusive  
					isBoolean  
					isConstant  
					matrixMode  
					max  
					min  
					onValueChangedObservable  
					uniqueId  
					visibleInInspector  
					visibleOnFrame  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the block name
				

				export let target = undefined // [nodematerialblocktargets] 
				// defines the target of that block (vertex by default)
				

				export let type = undefined // [nodematerialblockconnectionpointtypes] 
				// defines the type of the input (can be set to nodematerialblockconnectionpointtypes.autodetect)
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.InputBlock(name,target,type) : {}

				// ================ ACCESSORS ================

				
				export let animationType = undefined // [animatedinputblocktypes] 
				// 
				

				export let associatedVariableName = undefined // [string] 
				// 
				

				export let buildId = undefined // [number] 
				// 
				

				export let inputs = undefined // [array] 
				// 
				

				export let isAttribute = undefined // [boolean] 
				// 
				

				export let isFinalMerger = undefined // [boolean] 
				// 
				

				export let isInput = undefined // [boolean] 
				// 
				

				export let isSystemValue = undefined // [boolean] 
				// 
				

				export let isUndefined = undefined // [boolean] 
				// 
				

				export let isUniform = undefined // [boolean] 
				// 
				

				export let isUnique = undefined // [boolean] 
				// 
				

				export let isVarying = undefined // [boolean] 
				// 
				

				export let output = undefined // [nodematerialconnectionpoint] 
				// 
				

				export let outputs = undefined // [array] 
				// 
				

				export let systemValue = undefined // [nullable] 
				// 
				

				export let value = undefined // [any] 
				// 
				

				export let valueCallback = undefined // [reflection] 
				// 
				

				export let willBeGeneratedIntoVertexShaderFromFragmentShader = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let comments = undefined // [string] 
				// gets or sets the comments associated with this block
				

				export let convertToGammaSpace = undefined // [boolean] 
				// gets or sets a boolean indicating if content needs to be converted to gamma space (for color3/4 only)
				

				export let convertToLinearSpace = undefined // [boolean] 
				// gets or sets a boolean indicating if content needs to be converted to linear space (for color3/4 only)
				

				export let groupInInspector = undefined // [string] 
				// gets or sets the group to use to display this block in the inspector
				

				export let inputsAreExclusive = undefined // [boolean] 
				// gets or sets a boolean indicating that only one input can be connected at a time
				

				export let isBoolean = undefined // [boolean] 
				// gets or set a value indicating that this input can only get 0 and 1 values
				

				export let isConstant = undefined // [boolean] 
				// gets or sets a boolean indicating that the value of this input will not change after a build
				

				export let matrixMode = undefined // [number] 
				// gets or sets a value used by the node material editor to determine how to configure the current value if it is a matrix
				

				export let max = undefined // [number] 
				// gets or set a value used to limit the range of float values
				

				export let min = undefined // [number] 
				// gets or set a value used to limit the range of float values
				

				export let onValueChangedObservable = undefined // [observable] 
				// gets an observable raised when the value is changed
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the node
				

				export let visibleInInspector = undefined // [boolean] 
				// gets or sets a boolean indicating that this input can be edited in the inspector (false by default)
				

				export let visibleOnFrame = undefined // [boolean] 
				// gets or sets a boolean indicating that this input can be edited from a collapsed frame
				

				// ================ METHODS ================

				
				export let _deserialize = (...args) => instance._deserialize(...args)

				export let animate = (...args) => instance.animate(...args)

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

				export let setAsAttribute = (...args) => instance.setAsAttribute(...args)

				export let setAsSystemValue = (...args) => instance.setAsSystemValue(...args)

				export let setDefaultValue = (...args) => instance.setDefaultValue(...args)

				export let updateUniformsAndSamples = (...args) => instance.updateUniformsAndSamples(...args)

				export let validateBlockName = (...args) => instance.validateBlockName(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:InputBlock]`, ...args) : null

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
				if (target != undefined) instance.target = target?.instance || target
				target = instance.target
				if (type != undefined) instance.type = type?.instance || type
				type = instance.type
				if (animationType != undefined) instance.animationType = animationType?.instance || animationType
				animationType = instance.animationType
				if (associatedVariableName != undefined) instance.associatedVariableName = associatedVariableName?.instance || associatedVariableName
				associatedVariableName = instance.associatedVariableName
				if (buildId != undefined) instance.buildId = buildId?.instance || buildId
				buildId = instance.buildId

				inputs = instance.inputs
				if (isAttribute != undefined) instance.isAttribute = isAttribute?.instance || isAttribute
				isAttribute = instance.isAttribute

				isFinalMerger = instance.isFinalMerger

				isInput = instance.isInput

				isSystemValue = instance.isSystemValue

				isUndefined = instance.isUndefined
				if (isUniform != undefined) instance.isUniform = isUniform?.instance || isUniform
				isUniform = instance.isUniform

				isUnique = instance.isUnique
				if (isVarying != undefined) instance.isVarying = isVarying?.instance || isVarying
				isVarying = instance.isVarying

				output = instance.output

				outputs = instance.outputs
				if (systemValue != undefined) instance.systemValue = systemValue?.instance || systemValue
				systemValue = instance.systemValue
				if (value != undefined) instance.value = value?.instance || value
				value = instance.value
				if (valueCallback != undefined) instance.valueCallback = valueCallback?.instance || valueCallback
				valueCallback = instance.valueCallback

				willBeGeneratedIntoVertexShaderFromFragmentShader = instance.willBeGeneratedIntoVertexShaderFromFragmentShader
				if (comments != undefined) instance.comments = comments?.instance || comments
				comments = instance.comments
				if (convertToGammaSpace != undefined) instance.convertToGammaSpace = convertToGammaSpace?.instance || convertToGammaSpace
				convertToGammaSpace = instance.convertToGammaSpace
				if (convertToLinearSpace != undefined) instance.convertToLinearSpace = convertToLinearSpace?.instance || convertToLinearSpace
				convertToLinearSpace = instance.convertToLinearSpace
				if (groupInInspector != undefined) instance.groupInInspector = groupInInspector?.instance || groupInInspector
				groupInInspector = instance.groupInInspector
				if (inputsAreExclusive != undefined) instance.inputsAreExclusive = inputsAreExclusive?.instance || inputsAreExclusive
				inputsAreExclusive = instance.inputsAreExclusive
				if (isBoolean != undefined) instance.isBoolean = isBoolean?.instance || isBoolean
				isBoolean = instance.isBoolean
				if (isConstant != undefined) instance.isConstant = isConstant?.instance || isConstant
				isConstant = instance.isConstant
				if (matrixMode != undefined) instance.matrixMode = matrixMode?.instance || matrixMode
				matrixMode = instance.matrixMode
				if (max != undefined) instance.max = max?.instance || max
				max = instance.max
				if (min != undefined) instance.min = min?.instance || min
				min = instance.min
				if (onValueChangedObservable != undefined) instance.onValueChangedObservable = onValueChangedObservable?.instance || onValueChangedObservable
				onValueChangedObservable = instance.onValueChangedObservable
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

			