
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Tools() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let BackCompatCameraNoPreventDefault = (...args) => instance.BackCompatCameraNoPreventDefault(...args)

				export let CleanUrl = (...args) => instance.CleanUrl(...args)

				export let ClearLogCache = (...args) => instance.ClearLogCache(...args)

				export let CreateScreenshot = (...args) => instance.CreateScreenshot(...args)

				export let CreateScreenshotAsync = (...args) => instance.CreateScreenshotAsync(...args)

				export let CreateScreenshotUsingRenderTarget = (...args) => instance.CreateScreenshotUsingRenderTarget(...args)

				export let CreateScreenshotUsingRenderTargetAsync = (...args) => instance.CreateScreenshotUsingRenderTargetAsync(...args)

				export let DecodeBase64 = (...args) => instance.DecodeBase64(...args)

				export let DeepCopy = (...args) => instance.DeepCopy(...args)

				export let DelayAsync = (...args) => instance.DelayAsync(...args)

				export let Download = (...args) => instance.Download(...args)

				export let DownloadBlob = (...args) => instance.DownloadBlob(...args)

				export let DumpData = (...args) => instance.DumpData(...args)

				export let DumpDataAsync = (...args) => instance.DumpDataAsync(...args)

				export let DumpFramebuffer = (...args) => instance.DumpFramebuffer(...args)

				export let EncodeScreenshotCanvasData = (...args) => instance.EncodeScreenshotCanvasData(...args)

				export let Error = (...args) => instance.Error(...args)

				export let FetchToRef = (...args) => instance.FetchToRef(...args)

				export let FileAsURL = (...args) => instance.FileAsURL(...args)

				export let First = (...args) => instance.First(...args)

				export let FloatRound = (...args) => instance.FloatRound(...args)

				export let Format = (...args) => instance.Format(...args)

				export let GetClassName = (...args) => instance.GetClassName(...args)

				export let GetFilename = (...args) => instance.GetFilename(...args)

				export let GetFolderPath = (...args) => instance.GetFolderPath(...args)

				export let GetPointerPrefix = (...args) => instance.GetPointerPrefix(...args)

				export let Instantiate = (...args) => instance.Instantiate(...args)

				export let IsBase64 = (...args) => instance.IsBase64(...args)

				export let IsEmpty = (...args) => instance.IsEmpty(...args)

				export let IsExponentOfTwo = (...args) => instance.IsExponentOfTwo(...args)

				export let IsSafari = (...args) => instance.IsSafari(...args)

				export let LoadFile = (...args) => instance.LoadFile(...args)

				export let LoadFileAsync = (...args) => instance.LoadFileAsync(...args)

				export let LoadImage = (...args) => instance.LoadImage(...args)

				export let LoadScript = (...args) => instance.LoadScript(...args)

				export let LoadScriptAsync = (...args) => instance.LoadScriptAsync(...args)

				export let Log = (...args) => instance.Log(...args)

				export let MakeArray = (...args) => instance.MakeArray(...args)

				export let Mix = (...args) => instance.Mix(...args)

				export let RandomId = (...args) => instance.RandomId(...args)

				export let ReadFile = (...args) => instance.ReadFile(...args)

				export let ReadFileAsDataURL = (...args) => instance.ReadFileAsDataURL(...args)

				export let RegisterTopRootEvents = (...args) => instance.RegisterTopRootEvents(...args)

				export let SetCorsBehavior = (...args) => instance.SetCorsBehavior(...args)

				export let SetImmediate = (...args) => instance.SetImmediate(...args)

				export let SetReferrerPolicyBehavior = (...args) => instance.SetReferrerPolicyBehavior(...args)

				export let SmoothAngleChange = (...args) => instance.SmoothAngleChange(...args)

				export let ToBlob = (...args) => instance.ToBlob(...args)

				export let ToDegrees = (...args) => instance.ToDegrees(...args)

				export let ToRadians = (...args) => instance.ToRadians(...args)

				export let UnregisterTopRootEvents = (...args) => instance.UnregisterTopRootEvents(...args)

				export let Warn = (...args) => instance.Warn(...args)

				export let getFullClassName = (...args) => instance.getFullClassName(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Tools]`, ...args) : null

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

			