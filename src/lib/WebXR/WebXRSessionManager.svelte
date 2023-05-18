
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					scene  * required 
					baseReferenceSpace  
					currentFrame  
					currentTimestamp  
					defaultHeightCompensation  
					inXRFrameLoop  
					inXRSession  
					onXRFrameObservable  
					onXRReferenceSpaceChanged  
					onXRSessionEnded  
					onXRSessionInit  
					session  
					viewerReferenceSpace  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let scene = undefined // [scene] * required
				// the scene which the session should be created for
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.WebXRSessionManager(scene) : {}

				// ================ ACCESSORS ================

				
				export let currentFrameRate = undefined // [union] 
				// 
				

				export let fixedFoveation = undefined // [nullable] 
				// 
				

				export let isFixedFoveationSupported = undefined // [boolean] 
				// 
				

				export let isNative = undefined // [boolean] 
				// 
				

				export let referenceSpace = undefined // [xrreferencespace] 
				// 
				

				export let sessionMode = undefined // [xrsessionmode] 
				// 
				

				export let supportedFrameRates = undefined // [union] 
				// 
				

				// ================ PROPERTIES ================

				
				export let baseReferenceSpace = undefined // [xrreferencespace] 
				// the base reference space from which the session started. good if you want to reset yourreference space
				

				export let currentFrame = undefined // [nullable] 
				// current xr frame
				

				export let currentTimestamp = undefined // [number] 
				// webxr timestamp updated every frame
				

				export let defaultHeightCompensation = undefined // [number] 
				// used just in case of a failure to initialize an immersive session.the viewer reference space is compensated using this height, creating a kind of "viewer-floor" reference space
				

				export let inXRFrameLoop = undefined // [boolean] 
				// are we currently in the xr loop?
				

				export let inXRSession = undefined // [boolean] 
				// are we in an xr session?
				

				export let onXRFrameObservable = undefined // [observable] 
				// fires every time a new xrframe arrives which can be used to update the camera
				

				export let onXRReferenceSpaceChanged = undefined // [observable] 
				// fires when the reference space changed
				

				export let onXRSessionEnded = undefined // [observable] 
				// fires when the xr session is ended either by the device or manually done
				

				export let onXRSessionInit = undefined // [observable] 
				// fires when the xr session is initialized: right after requestsession was called and returned with a successful result
				

				export let session = undefined // [xrsession] 
				// underlying xr session
				

				export let viewerReferenceSpace = undefined // [xrreferencespace] 
				// the viewer (head position) reference space. this can be used to get the xr world coordinatesor get the offset the player is currently at.
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let exitXRAsync = (...args) => instance.exitXRAsync(...args)

				export let getRenderTargetTextureForEye = (...args) => instance.getRenderTargetTextureForEye(...args)

				export let getRenderTargetTextureForView = (...args) => instance.getRenderTargetTextureForView(...args)

				export let getWebXRRenderTarget = (...args) => instance.getWebXRRenderTarget(...args)

				export let initializeAsync = (...args) => instance.initializeAsync(...args)

				export let initializeSessionAsync = (...args) => instance.initializeSessionAsync(...args)

				export let isSessionSupportedAsync = (...args) => instance.isSessionSupportedAsync(...args)

				export let resetReferenceSpace = (...args) => instance.resetReferenceSpace(...args)

				export let runInXRFrame = (...args) => instance.runInXRFrame(...args)

				export let runXRRenderLoop = (...args) => instance.runXRRenderLoop(...args)

				export let setReferenceSpaceTypeAsync = (...args) => instance.setReferenceSpaceTypeAsync(...args)

				export let trySetViewportForView = (...args) => instance.trySetViewportForView(...args)

				export let updateRenderState = (...args) => instance.updateRenderState(...args)

				export let updateRenderStateAsync = (...args) => instance.updateRenderStateAsync(...args)

				export let updateTargetFrameRate = (...args) => instance.updateTargetFrameRate(...args)

				export let IsSessionSupportedAsync = (...args) => instance.IsSessionSupportedAsync(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:WebXRSessionManager]`, ...args) : null

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

												if (scene != undefined) instance.scene = scene?.instance || scene
				scene = instance.scene

				currentFrameRate = instance.currentFrameRate
				if (fixedFoveation != undefined) instance.fixedFoveation = fixedFoveation?.instance || fixedFoveation
				fixedFoveation = instance.fixedFoveation

				isFixedFoveationSupported = instance.isFixedFoveationSupported

				isNative = instance.isNative
				if (referenceSpace != undefined) instance.referenceSpace = referenceSpace?.instance || referenceSpace
				referenceSpace = instance.referenceSpace

				sessionMode = instance.sessionMode

				supportedFrameRates = instance.supportedFrameRates
				if (baseReferenceSpace != undefined) instance.baseReferenceSpace = baseReferenceSpace?.instance || baseReferenceSpace
				baseReferenceSpace = instance.baseReferenceSpace
				if (currentFrame != undefined) instance.currentFrame = currentFrame?.instance || currentFrame
				currentFrame = instance.currentFrame
				if (currentTimestamp != undefined) instance.currentTimestamp = currentTimestamp?.instance || currentTimestamp
				currentTimestamp = instance.currentTimestamp
				if (defaultHeightCompensation != undefined) instance.defaultHeightCompensation = defaultHeightCompensation?.instance || defaultHeightCompensation
				defaultHeightCompensation = instance.defaultHeightCompensation
				if (inXRFrameLoop != undefined) instance.inXRFrameLoop = inXRFrameLoop?.instance || inXRFrameLoop
				inXRFrameLoop = instance.inXRFrameLoop
				if (inXRSession != undefined) instance.inXRSession = inXRSession?.instance || inXRSession
				inXRSession = instance.inXRSession
				if (onXRFrameObservable != undefined) instance.onXRFrameObservable = onXRFrameObservable?.instance || onXRFrameObservable
				onXRFrameObservable = instance.onXRFrameObservable
				if (onXRReferenceSpaceChanged != undefined) instance.onXRReferenceSpaceChanged = onXRReferenceSpaceChanged?.instance || onXRReferenceSpaceChanged
				onXRReferenceSpaceChanged = instance.onXRReferenceSpaceChanged
				if (onXRSessionEnded != undefined) instance.onXRSessionEnded = onXRSessionEnded?.instance || onXRSessionEnded
				onXRSessionEnded = instance.onXRSessionEnded
				if (onXRSessionInit != undefined) instance.onXRSessionInit = onXRSessionInit?.instance || onXRSessionInit
				onXRSessionInit = instance.onXRSessionInit
				if (session != undefined) instance.session = session?.instance || session
				session = instance.session
				if (viewerReferenceSpace != undefined) instance.viewerReferenceSpace = viewerReferenceSpace?.instance || viewerReferenceSpace
				viewerReferenceSpace = instance.viewerReferenceSpace

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

			