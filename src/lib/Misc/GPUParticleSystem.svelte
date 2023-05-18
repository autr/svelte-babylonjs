
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					options  * required
					sceneOrEngine  * required
					customEffect  
					isAnimationSheetEnabled   
					animations  
					beginAnimationFrom  
					beginAnimationLoop  
					beginAnimationOnStart  
					beginAnimationTo  
					blendMode  
					clipPlane  
					clipPlane2  
					clipPlane3  
					clipPlane4  
					clipPlane5  
					clipPlane6  
					color1  
					color2  
					colorDead  
					customShader  
					defaultProjectionMatrix  
					disposeOnStop  
					emitRate  
					emitter  
					endSpriteCellID  
					forceDepthWrite  
					gravity  
					id  
					isGPU (readonly) 
					isLocal  
					layerMask  
					limitVelocityDamping  
					manualEmitCount  
					maxAngularSpeed  
					maxEmitPower  
					maxInitialRotation  
					maxLifeTime  
					maxScaleX  
					maxScaleY  
					maxSize  
					minAngularSpeed  
					minEmitPower  
					minInitialRotation  
					minLifeTime  
					minScaleX  
					minScaleY  
					minSize  
					noiseStrength  
					onAnimationEnd  
					onDisposeObservable  
					onStoppedObservable  
					particleEmitterType  
					particleTexture  
					preWarmCycles  
					preWarmStepOffset  
					preventAutoStart  
					renderingGroupId  
					snippetId  
					spriteCellChangeSpeed  
					spriteCellHeight  
					spriteCellLoop  
					spriteCellWidth  
					spriteRandomStartCell  
					startDelay  
					startSpriteCellID  
					targetStopDuration  
					textureMask  
					translationPivot  
					uniqueId  
					updateInAnimate  
					updateSpeed  
					worldOffset  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// the name of the particle system
				

				export let options = undefined // [partial] * required
				// the options used to create the system
				

				export let sceneOrEngine = undefined // [union] * required
				// the scene the particle system belongs to or the engine to use if no scene
				

				export let customEffect = undefined // [nullable] 
				// a custom effect used to change the way particles are rendered by default
				

				export let isAnimationSheetEnabled = undefined // [boolean] 
				// must be true if using a spritesheet to animate the particles texture
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.GPUParticleSystem(name,options,sceneOrEngine,customEffect,isAnimationSheetEnabled) : {}

				// ================ ACCESSORS ================

				
				export let activeParticleCount = undefined // [number] 
				// 
				

				export let billboardMode = undefined // [number] 
				// gets or sets the billboard mode to use when isbillboardbased = true.value can be: particlesystem.billboardmode_all, particlesystem.billboardmode_y, particlesystem.billboardmode_stretched
				

				export let direction1 = undefined // [vector3] 
				// 
				

				export let direction2 = undefined // [vector3] 
				// 
				

				export let imageProcessingConfiguration = undefined // [nullable] 
				// 
				

				export let indexBuffer = undefined // [nullable] 
				// gets the index buffer used by the particle system (or null if no index buffer is used)
				

				export let isBillboardBased = undefined // [boolean] 
				// gets or sets a boolean indicating if the particles must be rendered as billboard or aligned with the direction
				

				export let maxEmitBox = undefined // [vector3] 
				// 
				

				export let minEmitBox = undefined // [vector3] 
				// 
				

				export let noiseTexture = undefined // [nullable] 
				// gets or sets a texture used to add random noise to particle positions
				

				export let onBeforeDrawParticlesObservable = undefined // [observable] 
				// observable that will be called just before the particles are drawn
				

				export let useLogarithmicDepth = undefined // [boolean] 
				// gets or sets a boolean enabling the use of logarithmic depth buffers, which is good for wide depth buffers.
				

				export let useRampGradients = undefined // [boolean] 
				// gets or sets a boolean indicating that ramp gradients must be used
				

				export let vertexBuffers = undefined // [deepimmutableobject] 
				// gets the vertex buffers used by the particle system
				

				export let vertexShaderName = undefined // [string] 
				// gets the name of the particle vertex shader
				

				// ================ PROPERTIES ================

				
				export let animations = undefined // [array] 
				// list of animations used by the particle system.
				

				export let beginAnimationFrom = undefined // [number] 
				// gets or sets the frame to start the animation from when beginanimationonstart is true
				

				export let beginAnimationLoop = undefined // [boolean] 
				// gets or sets a boolean indicating if animations must loop when beginanimationonstart is true
				

				export let beginAnimationOnStart = undefined // [boolean] 
				// gets or sets a boolean indicating that hosted animations (in the system.animations array) must be started when system.start() is called
				

				export let beginAnimationTo = undefined // [number] 
				// gets or sets the frame to end the animation on when beginanimationonstart is true
				

				export let blendMode = undefined // [number] 
				// blend mode use to render the particle, it can be either particlesystem.blendmode_oneone or particlesystem.blendmode_standard.
				

				export let clipPlane = undefined // [nullable] 
				// gets or sets the active clipplane 1
				

				export let clipPlane2 = undefined // [nullable] 
				// gets or sets the active clipplane 2
				

				export let clipPlane3 = undefined // [nullable] 
				// gets or sets the active clipplane 3
				

				export let clipPlane4 = undefined // [nullable] 
				// gets or sets the active clipplane 4
				

				export let clipPlane5 = undefined // [nullable] 
				// gets or sets the active clipplane 5
				

				export let clipPlane6 = undefined // [nullable] 
				// gets or sets the active clipplane 6
				

				export let color1 = undefined // [color4] 
				// random color of each particle after it has been emitted, between color1 and color2 vectors
				

				export let color2 = undefined // [color4] 
				// random color of each particle after it has been emitted, between color1 and color2 vectors
				

				export let colorDead = undefined // [color4] 
				// color the particle will have at the end of its lifetime
				

				export let customShader = undefined // [any] 
				// this can help using your own shader to render the particle system.the according effect will be created
				

				export let defaultProjectionMatrix = undefined // [matrix] 
				// gets or sets a matrix to use to compute projection
				

				export let disposeOnStop = undefined // [boolean] 
				// specifies whether the particle system will be disposed once it reaches the end of the animation.
				

				export let emitRate = undefined // [number] 
				// the maximum number of particles to emit per frame
				

				export let emitter = undefined // [nullable] 
				// the emitter represents the mesh or position we are attaching the particle system to.
				

				export let endSpriteCellID = undefined // [number] 
				// if using a spritesheet (isanimationsheetenabled) defines the last sprite cell to display
				

				export let forceDepthWrite = undefined // [boolean] 
				// forces the particle to write their depth information to the depth buffer. this can help preventing other draw callsto override the particles.
				

				export let gravity = undefined // [vector3] 
				// you can use gravity if you want to give an orientation to your particles.
				

				export let id = undefined // [string] 
				// the id of the particle system.
				

				export let isGPU = undefined // [literal] 
				// indicates that the particle system is gpu based
				

				export let isLocal = undefined // [boolean] 
				// specifies if the particles are updated in emitter local space or world space.
				

				export let layerMask = undefined // [number] 
				// the layer mask we are rendering the particles through.
				

				export let limitVelocityDamping = undefined // [number] 
				// gets or sets a value indicating the damping to apply if the limit velocity factor is reached
				

				export let manualEmitCount = undefined // [number] 
				// if you want to launch only a few particles at once, that can be done, as well.
				

				export let maxAngularSpeed = undefined // [number] 
				// maximum angular speed of emitting particles (z-axis rotation for each particle).
				

				export let maxEmitPower = undefined // [number] 
				// maximum power of emitting particles.
				

				export let maxInitialRotation = undefined // [number] 
				// gets or sets the maximal initial rotation in radians.
				

				export let maxLifeTime = undefined // [number] 
				// maximum life time of emitting particles.
				

				export let maxScaleX = undefined // [number] 
				// maximum scale of emitting particles on x axis.
				

				export let maxScaleY = undefined // [number] 
				// maximum scale of emitting particles on y axis.
				

				export let maxSize = undefined // [number] 
				// maximum size of emitting particles.
				

				export let minAngularSpeed = undefined // [number] 
				// minimum angular speed of emitting particles (z-axis rotation for each particle).
				

				export let minEmitPower = undefined // [number] 
				// minimum power of emitting particles.
				

				export let minInitialRotation = undefined // [number] 
				// gets or sets the minimal initial rotation in radians.
				

				export let minLifeTime = undefined // [number] 
				// minimum life time of emitting particles.
				

				export let minScaleX = undefined // [number] 
				// minimum scale of emitting particles on x axis.
				

				export let minScaleY = undefined // [number] 
				// minimum scale of emitting particles on y axis.
				

				export let minSize = undefined // [number] 
				// minimum size of emitting particles.
				

				export let noiseStrength = undefined // [vector3] 
				// gets or sets the strength to apply to the noise value (default is (10, 10, 10))
				

				export let onAnimationEnd = undefined // [nullable] 
				// callback triggered when the particle animation is ending.
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the system is disposed.
				

				export let onStoppedObservable = undefined // [observable] 
				// an event triggered when the system is stopped
				

				export let particleEmitterType = undefined // [iparticleemittertype] 
				// the particle emitter type defines the emitter used by the particle system.it can be for example box, sphere, or cone...
				

				export let particleTexture = undefined // [nullable] 
				// the texture used to render each particle. (this can be a spritesheet)
				

				export let preWarmCycles = undefined // [number] 
				// gets or sets a value indicating how many cycles (or frames) must be executed before first rendering (this value has to be set before starting the system). default is 0
				

				export let preWarmStepOffset = undefined // [number] 
				// gets or sets a value indicating the time step multiplier to use in pre-warm mode (default is 1)
				

				export let preventAutoStart = undefined // [boolean] 
				// by default particle system starts as soon as they are created. this prevents theautomatic start to happen and let you decide when to start emitting particles.
				

				export let renderingGroupId = undefined // [number] 
				// the rendering group used by the particle system to chose when to render.
				

				export let snippetId = undefined // [string] 
				// snippet id if the particle system was created from the snippet server
				

				export let spriteCellChangeSpeed = undefined // [number] 
				// if using a spritesheet (isanimationsheetenabled) defines the speed of the sprite loop (default is 1 meaning the animation will play once during the entire particle lifetime)
				

				export let spriteCellHeight = undefined // [number] 
				// if using a spritesheet (isanimationsheetenabled), defines the sprite cell height to use
				

				export let spriteCellLoop = undefined // [boolean] 
				// if using a spritesheet (isanimationsheetenabled), defines wether the sprite animation is looping
				

				export let spriteCellWidth = undefined // [number] 
				// if using a spritesheet (isanimationsheetenabled), defines the sprite cell width to use
				

				export let spriteRandomStartCell = undefined // [boolean] 
				// this allows the system to random pick the start cell id between startspritecellid and endspritecellid
				

				export let startDelay = undefined // [number] 
				// defines the delay in milliseconds before starting the system (0 by default)
				

				export let startSpriteCellID = undefined // [number] 
				// if using a spritesheet (isanimationsheetenabled) defines the first sprite cell to display
				

				export let targetStopDuration = undefined // [number] 
				// the amount of time the particle system is running (depends of the overall update speed).
				

				export let textureMask = undefined // [color4] 
				// an optional mask to filter some colors out of the texture, or filter a part of the alpha channel
				

				export let translationPivot = undefined // [vector2] 
				// gets or sets a vector2 used to move the pivot (by default (0,0))
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the particle system
				

				export let updateInAnimate = undefined // [boolean] 
				// indicates that the update of particles is done in the animate function (and not in render). default: false
				

				export let updateSpeed = undefined // [number] 
				// the overall motion speed (0.01 is default update speed, faster updates = faster animation)
				

				export let worldOffset = undefined // [vector3] 
				// gets or sets a world offset applied to all particles
				

				// ================ METHODS ================

				
				export let addAlphaRemapGradient = (...args) => instance.addAlphaRemapGradient(...args)

				export let addAngularSpeedGradient = (...args) => instance.addAngularSpeedGradient(...args)

				export let addColorGradient = (...args) => instance.addColorGradient(...args)

				export let addColorRemapGradient = (...args) => instance.addColorRemapGradient(...args)

				export let addDragGradient = (...args) => instance.addDragGradient(...args)

				export let addEmitRateGradient = (...args) => instance.addEmitRateGradient(...args)

				export let addLifeTimeGradient = (...args) => instance.addLifeTimeGradient(...args)

				export let addLimitVelocityGradient = (...args) => instance.addLimitVelocityGradient(...args)

				export let addRampGradient = (...args) => instance.addRampGradient(...args)

				export let addSizeGradient = (...args) => instance.addSizeGradient(...args)

				export let addStartSizeGradient = (...args) => instance.addStartSizeGradient(...args)

				export let addVelocityGradient = (...args) => instance.addVelocityGradient(...args)

				export let animate = (...args) => instance.animate(...args)

				export let clone = (...args) => instance.clone(...args)

				export let createBoxEmitter = (...args) => instance.createBoxEmitter(...args)

				export let createConeEmitter = (...args) => instance.createConeEmitter(...args)

				export let createCylinderEmitter = (...args) => instance.createCylinderEmitter(...args)

				export let createDirectedCylinderEmitter = (...args) => instance.createDirectedCylinderEmitter(...args)

				export let createDirectedSphereEmitter = (...args) => instance.createDirectedSphereEmitter(...args)

				export let createHemisphericEmitter = (...args) => instance.createHemisphericEmitter(...args)

				export let createPointEmitter = (...args) => instance.createPointEmitter(...args)

				export let createSphereEmitter = (...args) => instance.createSphereEmitter(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let fillDefines = (...args) => instance.fillDefines(...args)

				export let fillUniformsAttributesAndSamplerNames = (...args) => instance.fillUniformsAttributesAndSamplerNames(...args)

				export let forceRefreshGradients = (...args) => instance.forceRefreshGradients(...args)

				export let getActiveCount = (...args) => instance.getActiveCount(...args)

				export let getAlphaRemapGradients = (...args) => instance.getAlphaRemapGradients(...args)

				export let getAngularSpeedGradients = (...args) => instance.getAngularSpeedGradients(...args)

				export let getCapacity = (...args) => instance.getCapacity(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let getColorGradients = (...args) => instance.getColorGradients(...args)

				export let getColorRemapGradients = (...args) => instance.getColorRemapGradients(...args)

				export let getCustomEffect = (...args) => instance.getCustomEffect(...args)

				export let getDragGradients = (...args) => instance.getDragGradients(...args)

				export let getEmitRateGradients = (...args) => instance.getEmitRateGradients(...args)

				export let getLifeTimeGradients = (...args) => instance.getLifeTimeGradients(...args)

				export let getLimitVelocityGradients = (...args) => instance.getLimitVelocityGradients(...args)

				export let getRampGradients = (...args) => instance.getRampGradients(...args)

				export let getScene = (...args) => instance.getScene(...args)

				export let getSizeGradients = (...args) => instance.getSizeGradients(...args)

				export let getStartSizeGradients = (...args) => instance.getStartSizeGradients(...args)

				export let getVelocityGradients = (...args) => instance.getVelocityGradients(...args)

				export let isReady = (...args) => instance.isReady(...args)

				export let isStarted = (...args) => instance.isStarted(...args)

				export let isStopped = (...args) => instance.isStopped(...args)

				export let isStopping = (...args) => instance.isStopping(...args)

				export let rebuild = (...args) => instance.rebuild(...args)

				export let removeAlphaRemapGradient = (...args) => instance.removeAlphaRemapGradient(...args)

				export let removeAngularSpeedGradient = (...args) => instance.removeAngularSpeedGradient(...args)

				export let removeColorGradient = (...args) => instance.removeColorGradient(...args)

				export let removeColorRemapGradient = (...args) => instance.removeColorRemapGradient(...args)

				export let removeDragGradient = (...args) => instance.removeDragGradient(...args)

				export let removeEmitRateGradient = (...args) => instance.removeEmitRateGradient(...args)

				export let removeLifeTimeGradient = (...args) => instance.removeLifeTimeGradient(...args)

				export let removeLimitVelocityGradient = (...args) => instance.removeLimitVelocityGradient(...args)

				export let removeRampGradient = (...args) => instance.removeRampGradient(...args)

				export let removeSizeGradient = (...args) => instance.removeSizeGradient(...args)

				export let removeStartSizeGradient = (...args) => instance.removeStartSizeGradient(...args)

				export let removeVelocityGradient = (...args) => instance.removeVelocityGradient(...args)

				export let render = (...args) => instance.render(...args)

				export let reset = (...args) => instance.reset(...args)

				export let resetDrawCache = (...args) => instance.resetDrawCache(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let setCustomEffect = (...args) => instance.setCustomEffect(...args)

				export let start = (...args) => instance.start(...args)

				export let stop = (...args) => instance.stop(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:GPUParticleSystem]`, ...args) : null

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
				if (options != undefined) instance.options = options?.instance || options
				options = instance.options
				if (sceneOrEngine != undefined) instance.sceneOrEngine = sceneOrEngine?.instance || sceneOrEngine
				sceneOrEngine = instance.sceneOrEngine
				if (customEffect != undefined) instance.customEffect = customEffect?.instance || customEffect
				customEffect = instance.customEffect
				if (isAnimationSheetEnabled != undefined) instance.isAnimationSheetEnabled = isAnimationSheetEnabled?.instance || isAnimationSheetEnabled
				isAnimationSheetEnabled = instance.isAnimationSheetEnabled
				if (activeParticleCount != undefined) instance.activeParticleCount = activeParticleCount?.instance || activeParticleCount
				activeParticleCount = instance.activeParticleCount
				if (billboardMode != undefined) instance.billboardMode = billboardMode?.instance || billboardMode
				billboardMode = instance.billboardMode
				if (direction1 != undefined) instance.direction1 = direction1?.instance || direction1
				direction1 = instance.direction1
				if (direction2 != undefined) instance.direction2 = direction2?.instance || direction2
				direction2 = instance.direction2
				if (imageProcessingConfiguration != undefined) instance.imageProcessingConfiguration = imageProcessingConfiguration?.instance || imageProcessingConfiguration
				imageProcessingConfiguration = instance.imageProcessingConfiguration

				indexBuffer = instance.indexBuffer
				if (isBillboardBased != undefined) instance.isBillboardBased = isBillboardBased?.instance || isBillboardBased
				isBillboardBased = instance.isBillboardBased
				if (maxEmitBox != undefined) instance.maxEmitBox = maxEmitBox?.instance || maxEmitBox
				maxEmitBox = instance.maxEmitBox
				if (minEmitBox != undefined) instance.minEmitBox = minEmitBox?.instance || minEmitBox
				minEmitBox = instance.minEmitBox
				if (noiseTexture != undefined) instance.noiseTexture = noiseTexture?.instance || noiseTexture
				noiseTexture = instance.noiseTexture

				onBeforeDrawParticlesObservable = instance.onBeforeDrawParticlesObservable
				if (useLogarithmicDepth != undefined) instance.useLogarithmicDepth = useLogarithmicDepth?.instance || useLogarithmicDepth
				useLogarithmicDepth = instance.useLogarithmicDepth
				if (useRampGradients != undefined) instance.useRampGradients = useRampGradients?.instance || useRampGradients
				useRampGradients = instance.useRampGradients

				vertexBuffers = instance.vertexBuffers

				vertexShaderName = instance.vertexShaderName
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (beginAnimationFrom != undefined) instance.beginAnimationFrom = beginAnimationFrom?.instance || beginAnimationFrom
				beginAnimationFrom = instance.beginAnimationFrom
				if (beginAnimationLoop != undefined) instance.beginAnimationLoop = beginAnimationLoop?.instance || beginAnimationLoop
				beginAnimationLoop = instance.beginAnimationLoop
				if (beginAnimationOnStart != undefined) instance.beginAnimationOnStart = beginAnimationOnStart?.instance || beginAnimationOnStart
				beginAnimationOnStart = instance.beginAnimationOnStart
				if (beginAnimationTo != undefined) instance.beginAnimationTo = beginAnimationTo?.instance || beginAnimationTo
				beginAnimationTo = instance.beginAnimationTo
				if (blendMode != undefined) instance.blendMode = blendMode?.instance || blendMode
				blendMode = instance.blendMode
				if (clipPlane != undefined) instance.clipPlane = clipPlane?.instance || clipPlane
				clipPlane = instance.clipPlane
				if (clipPlane2 != undefined) instance.clipPlane2 = clipPlane2?.instance || clipPlane2
				clipPlane2 = instance.clipPlane2
				if (clipPlane3 != undefined) instance.clipPlane3 = clipPlane3?.instance || clipPlane3
				clipPlane3 = instance.clipPlane3
				if (clipPlane4 != undefined) instance.clipPlane4 = clipPlane4?.instance || clipPlane4
				clipPlane4 = instance.clipPlane4
				if (clipPlane5 != undefined) instance.clipPlane5 = clipPlane5?.instance || clipPlane5
				clipPlane5 = instance.clipPlane5
				if (clipPlane6 != undefined) instance.clipPlane6 = clipPlane6?.instance || clipPlane6
				clipPlane6 = instance.clipPlane6
				if (color1 != undefined) instance.color1 = color1?.instance || color1
				color1 = instance.color1
				if (color2 != undefined) instance.color2 = color2?.instance || color2
				color2 = instance.color2
				if (colorDead != undefined) instance.colorDead = colorDead?.instance || colorDead
				colorDead = instance.colorDead
				if (customShader != undefined) instance.customShader = customShader?.instance || customShader
				customShader = instance.customShader
				if (defaultProjectionMatrix != undefined) instance.defaultProjectionMatrix = defaultProjectionMatrix?.instance || defaultProjectionMatrix
				defaultProjectionMatrix = instance.defaultProjectionMatrix
				if (disposeOnStop != undefined) instance.disposeOnStop = disposeOnStop?.instance || disposeOnStop
				disposeOnStop = instance.disposeOnStop
				if (emitRate != undefined) instance.emitRate = emitRate?.instance || emitRate
				emitRate = instance.emitRate
				if (emitter != undefined) instance.emitter = emitter?.instance || emitter
				emitter = instance.emitter
				if (endSpriteCellID != undefined) instance.endSpriteCellID = endSpriteCellID?.instance || endSpriteCellID
				endSpriteCellID = instance.endSpriteCellID
				if (forceDepthWrite != undefined) instance.forceDepthWrite = forceDepthWrite?.instance || forceDepthWrite
				forceDepthWrite = instance.forceDepthWrite
				if (gravity != undefined) instance.gravity = gravity?.instance || gravity
				gravity = instance.gravity
				if (id != undefined) instance.id = id?.instance || id
				id = instance.id
				if (isLocal != undefined) instance.isLocal = isLocal?.instance || isLocal
				isLocal = instance.isLocal
				if (layerMask != undefined) instance.layerMask = layerMask?.instance || layerMask
				layerMask = instance.layerMask
				if (limitVelocityDamping != undefined) instance.limitVelocityDamping = limitVelocityDamping?.instance || limitVelocityDamping
				limitVelocityDamping = instance.limitVelocityDamping
				if (manualEmitCount != undefined) instance.manualEmitCount = manualEmitCount?.instance || manualEmitCount
				manualEmitCount = instance.manualEmitCount
				if (maxAngularSpeed != undefined) instance.maxAngularSpeed = maxAngularSpeed?.instance || maxAngularSpeed
				maxAngularSpeed = instance.maxAngularSpeed
				if (maxEmitPower != undefined) instance.maxEmitPower = maxEmitPower?.instance || maxEmitPower
				maxEmitPower = instance.maxEmitPower
				if (maxInitialRotation != undefined) instance.maxInitialRotation = maxInitialRotation?.instance || maxInitialRotation
				maxInitialRotation = instance.maxInitialRotation
				if (maxLifeTime != undefined) instance.maxLifeTime = maxLifeTime?.instance || maxLifeTime
				maxLifeTime = instance.maxLifeTime
				if (maxScaleX != undefined) instance.maxScaleX = maxScaleX?.instance || maxScaleX
				maxScaleX = instance.maxScaleX
				if (maxScaleY != undefined) instance.maxScaleY = maxScaleY?.instance || maxScaleY
				maxScaleY = instance.maxScaleY
				if (maxSize != undefined) instance.maxSize = maxSize?.instance || maxSize
				maxSize = instance.maxSize
				if (minAngularSpeed != undefined) instance.minAngularSpeed = minAngularSpeed?.instance || minAngularSpeed
				minAngularSpeed = instance.minAngularSpeed
				if (minEmitPower != undefined) instance.minEmitPower = minEmitPower?.instance || minEmitPower
				minEmitPower = instance.minEmitPower
				if (minInitialRotation != undefined) instance.minInitialRotation = minInitialRotation?.instance || minInitialRotation
				minInitialRotation = instance.minInitialRotation
				if (minLifeTime != undefined) instance.minLifeTime = minLifeTime?.instance || minLifeTime
				minLifeTime = instance.minLifeTime
				if (minScaleX != undefined) instance.minScaleX = minScaleX?.instance || minScaleX
				minScaleX = instance.minScaleX
				if (minScaleY != undefined) instance.minScaleY = minScaleY?.instance || minScaleY
				minScaleY = instance.minScaleY
				if (minSize != undefined) instance.minSize = minSize?.instance || minSize
				minSize = instance.minSize
				if (noiseStrength != undefined) instance.noiseStrength = noiseStrength?.instance || noiseStrength
				noiseStrength = instance.noiseStrength
				if (onAnimationEnd != undefined) instance.onAnimationEnd = onAnimationEnd?.instance || onAnimationEnd
				onAnimationEnd = instance.onAnimationEnd
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (onStoppedObservable != undefined) instance.onStoppedObservable = onStoppedObservable?.instance || onStoppedObservable
				onStoppedObservable = instance.onStoppedObservable
				if (particleEmitterType != undefined) instance.particleEmitterType = particleEmitterType?.instance || particleEmitterType
				particleEmitterType = instance.particleEmitterType
				if (particleTexture != undefined) instance.particleTexture = particleTexture?.instance || particleTexture
				particleTexture = instance.particleTexture
				if (preWarmCycles != undefined) instance.preWarmCycles = preWarmCycles?.instance || preWarmCycles
				preWarmCycles = instance.preWarmCycles
				if (preWarmStepOffset != undefined) instance.preWarmStepOffset = preWarmStepOffset?.instance || preWarmStepOffset
				preWarmStepOffset = instance.preWarmStepOffset
				if (preventAutoStart != undefined) instance.preventAutoStart = preventAutoStart?.instance || preventAutoStart
				preventAutoStart = instance.preventAutoStart
				if (renderingGroupId != undefined) instance.renderingGroupId = renderingGroupId?.instance || renderingGroupId
				renderingGroupId = instance.renderingGroupId
				if (snippetId != undefined) instance.snippetId = snippetId?.instance || snippetId
				snippetId = instance.snippetId
				if (spriteCellChangeSpeed != undefined) instance.spriteCellChangeSpeed = spriteCellChangeSpeed?.instance || spriteCellChangeSpeed
				spriteCellChangeSpeed = instance.spriteCellChangeSpeed
				if (spriteCellHeight != undefined) instance.spriteCellHeight = spriteCellHeight?.instance || spriteCellHeight
				spriteCellHeight = instance.spriteCellHeight
				if (spriteCellLoop != undefined) instance.spriteCellLoop = spriteCellLoop?.instance || spriteCellLoop
				spriteCellLoop = instance.spriteCellLoop
				if (spriteCellWidth != undefined) instance.spriteCellWidth = spriteCellWidth?.instance || spriteCellWidth
				spriteCellWidth = instance.spriteCellWidth
				if (spriteRandomStartCell != undefined) instance.spriteRandomStartCell = spriteRandomStartCell?.instance || spriteRandomStartCell
				spriteRandomStartCell = instance.spriteRandomStartCell
				if (startDelay != undefined) instance.startDelay = startDelay?.instance || startDelay
				startDelay = instance.startDelay
				if (startSpriteCellID != undefined) instance.startSpriteCellID = startSpriteCellID?.instance || startSpriteCellID
				startSpriteCellID = instance.startSpriteCellID
				if (targetStopDuration != undefined) instance.targetStopDuration = targetStopDuration?.instance || targetStopDuration
				targetStopDuration = instance.targetStopDuration
				if (textureMask != undefined) instance.textureMask = textureMask?.instance || textureMask
				textureMask = instance.textureMask
				if (translationPivot != undefined) instance.translationPivot = translationPivot?.instance || translationPivot
				translationPivot = instance.translationPivot
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (updateInAnimate != undefined) instance.updateInAnimate = updateInAnimate?.instance || updateInAnimate
				updateInAnimate = instance.updateInAnimate
				if (updateSpeed != undefined) instance.updateSpeed = updateSpeed?.instance || updateSpeed
				updateSpeed = instance.updateSpeed
				if (worldOffset != undefined) instance.worldOffset = worldOffset?.instance || worldOffset
				worldOffset = instance.worldOffset

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

			