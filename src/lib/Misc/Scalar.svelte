
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

				export let instance = browser ? new BB.Scalar() : {}

				// ================ ACCESSORS ================

				

				// ================ PROPERTIES ================

				

				// ================ METHODS ================

				
				export let Clamp = (...args) => instance.Clamp(...args)

				export let DeltaAngle = (...args) => instance.DeltaAngle(...args)

				export let Denormalize = (...args) => instance.Denormalize(...args)

				export let HCF = (...args) => instance.HCF(...args)

				export let Hermite = (...args) => instance.Hermite(...args)

				export let Hermite1stDerivative = (...args) => instance.Hermite1stDerivative(...args)

				export let ILog2 = (...args) => instance.ILog2(...args)

				export let InverseLerp = (...args) => instance.InverseLerp(...args)

				export let Lerp = (...args) => instance.Lerp(...args)

				export let LerpAngle = (...args) => instance.LerpAngle(...args)

				export let Log2 = (...args) => instance.Log2(...args)

				export let MoveTowards = (...args) => instance.MoveTowards(...args)

				export let MoveTowardsAngle = (...args) => instance.MoveTowardsAngle(...args)

				export let Normalize = (...args) => instance.Normalize(...args)

				export let NormalizeRadians = (...args) => instance.NormalizeRadians(...args)

				export let PercentToRange = (...args) => instance.PercentToRange(...args)

				export let PingPong = (...args) => instance.PingPong(...args)

				export let RandomRange = (...args) => instance.RandomRange(...args)

				export let RangeToPercent = (...args) => instance.RangeToPercent(...args)

				export let Repeat = (...args) => instance.Repeat(...args)

				export let Sign = (...args) => instance.Sign(...args)

				export let SmoothStep = (...args) => instance.SmoothStep(...args)

				export let ToHex = (...args) => instance.ToHex(...args)

				export let WithinEpsilon = (...args) => instance.WithinEpsilon(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Scalar]`, ...args) : null

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

			