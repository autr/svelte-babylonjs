
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					_scene  * required
					_enabledStrategyCallbacks   
					datasetObservable (readonly) 
					datasets (readonly) 
					metadataObservable (readonly) 
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let _scene = undefined // [scene] * required
				// the scene to collect on.
				

				export let _enabledStrategyCallbacks = undefined // [array] 
				// the list of data to collect with callbacks for initialization purposes.
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.PerformanceViewerCollector(_scene,_enabledStrategyCallbacks) : {}

				// ================ ACCESSORS ================

				
				export let hasLoadedData = undefined // [boolean] 
				// 
				

				export let isStarted = undefined // [boolean] 
				// 
				

				// ================ PROPERTIES ================

				
				export let datasetObservable = undefined // [observable] 
				// an observable you can attach to get deltas in the dataset. subscribing to this will increase memory consumption slightly, and may hurt performance due to increased garbage collection needed.updates of slices will be of the form [timestamp, numberofpoints, value1, value2...].
				

				export let datasets = undefined // [iperfdatasets] 
				// datastructure containing the collected datasets. warning: you should not modify the values in here, data will be of the form [timestamp, numberofpoints, value1, value2..., timestamp, etc...]
				

				export let metadataObservable = undefined // [observable] 
				// an observable you can attach to get the most updated map of metadatas.
				

				// ================ METHODS ================

				
				export let addCollectionStrategies = (...args) => instance.addCollectionStrategies(...args)

				export let clear = (...args) => instance.clear(...args)

				export let dispose = (...args) => instance.dispose(...args)

				export let exportDataToCsv = (...args) => instance.exportDataToCsv(...args)

				export let getCurrentSlice = (...args) => instance.getCurrentSlice(...args)

				export let loadFromFileData = (...args) => instance.loadFromFileData(...args)

				export let registerEvent = (...args) => instance.registerEvent(...args)

				export let sendEvent = (...args) => instance.sendEvent(...args)

				export let start = (...args) => instance.start(...args)

				export let stop = (...args) => instance.stop(...args)

				export let updateMetadata = (...args) => instance.updateMetadata(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:PerformanceViewerCollector]`, ...args) : null

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

												if (_scene != undefined) instance._scene = _scene?.instance || _scene
				_scene = instance._scene
				if (_enabledStrategyCallbacks != undefined) instance._enabledStrategyCallbacks = _enabledStrategyCallbacks?.instance || _enabledStrategyCallbacks
				_enabledStrategyCallbacks = instance._enabledStrategyCallbacks

				hasLoadedData = instance.hasLoadedData

				isStarted = instance.isStarted

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

			