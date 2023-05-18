
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/* 
					name  * required
					manager  * required 
					actionManager  
					angle  
					animations  
					cellIndex  
					cellRef  
					color  
					disposeWhenFinishedAnimating  
					height  
					invertU  
					invertV  
					isPickable  
					isVisible  
					onDisposeObservable  
					position  
					uniqueId  
					useAlphaForPicking  
					width  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				
				export let name = undefined // [string] * required
				// defines the name
				

				export let manager = undefined // [ispritemanager] * required
				// defines the manager
				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.Sprite(name,manager) : {}

				// ================ ACCESSORS ================

				
				export let animationStarted = undefined // [boolean] 
				// 
				

				export let delay = undefined // [number] 
				// 
				

				export let fromIndex = undefined // [number] 
				// 
				

				export let loopAnimation = undefined // [boolean] 
				// 
				

				export let size = undefined // [number] 
				// 
				

				export let toIndex = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let actionManager = undefined // [nullable] 
				// gets or sets the associated action manager
				

				export let angle = undefined // [number] 
				// gets or sets rotation angle
				

				export let animations = undefined // [nullable] 
				// gets the list of attached animations
				

				export let cellIndex = undefined // [number] 
				// gets or sets the cell index in the sprite sheet
				

				export let cellRef = undefined // [string] 
				// gets or sets the cell reference in the sprite sheet, uses sprite's filename when added to sprite sheet
				

				export let color = undefined // [color4] 
				// gets or sets the main color
				

				export let disposeWhenFinishedAnimating = undefined // [boolean] 
				// gets or sets a boolean indicating that this sprite should be disposed after animation ends
				

				export let height = undefined // [number] 
				// gets or sets the height
				

				export let invertU = undefined // [boolean] 
				// gets or sets a boolean indicating if uv coordinates should be inverted in u axis
				

				export let invertV = undefined // [boolean] 
				// gets or sets a boolean indicating if uv coordinates should be inverted in b axis
				

				export let isPickable = undefined // [boolean] 
				// gets or sets a boolean indicating if the sprite can be picked
				

				export let isVisible = undefined // [boolean] 
				// gets or sets a boolean indicating if the sprite is visible (renderable). default is true
				

				export let onDisposeObservable = undefined // [observable] 
				// an event triggered when the control has been disposed
				

				export let position = undefined // [vector3] 
				// gets or sets the current world position
				

				export let uniqueId = undefined // [number] 
				// gets or sets the unique id of the sprite
				

				export let useAlphaForPicking = undefined // [boolean] 
				// gets or sets a boolean indicating that sprite texture alpha will be used for precise picking (false by default)
				

				export let width = undefined // [number] 
				// gets or sets the width
				

				// ================ METHODS ================

				
				export let dispose = (...args) => instance.dispose(...args)

				export let getClassName = (...args) => instance.getClassName(...args)

				export let playAnimation = (...args) => instance.playAnimation(...args)

				export let serialize = (...args) => instance.serialize(...args)

				export let stopAnimation = (...args) => instance.stopAnimation(...args)

				export let Parse = (...args) => instance.Parse(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:Sprite]`, ...args) : null

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
				if (manager != undefined) instance.manager = manager?.instance || manager
				manager = instance.manager

				animationStarted = instance.animationStarted
				if (delay != undefined) instance.delay = delay?.instance || delay
				delay = instance.delay
				if (fromIndex != undefined) instance.fromIndex = fromIndex?.instance || fromIndex
				fromIndex = instance.fromIndex
				if (loopAnimation != undefined) instance.loopAnimation = loopAnimation?.instance || loopAnimation
				loopAnimation = instance.loopAnimation
				if (size != undefined) instance.size = size?.instance || size
				size = instance.size
				if (toIndex != undefined) instance.toIndex = toIndex?.instance || toIndex
				toIndex = instance.toIndex
				if (actionManager != undefined) instance.actionManager = actionManager?.instance || actionManager
				actionManager = instance.actionManager
				if (angle != undefined) instance.angle = angle?.instance || angle
				angle = instance.angle
				if (animations != undefined) instance.animations = animations?.instance || animations
				animations = instance.animations
				if (cellIndex != undefined) instance.cellIndex = cellIndex?.instance || cellIndex
				cellIndex = instance.cellIndex
				if (cellRef != undefined) instance.cellRef = cellRef?.instance || cellRef
				cellRef = instance.cellRef
				if (color != undefined) instance.color = color?.instance || color
				color = instance.color
				if (disposeWhenFinishedAnimating != undefined) instance.disposeWhenFinishedAnimating = disposeWhenFinishedAnimating?.instance || disposeWhenFinishedAnimating
				disposeWhenFinishedAnimating = instance.disposeWhenFinishedAnimating
				if (height != undefined) instance.height = height?.instance || height
				height = instance.height
				if (invertU != undefined) instance.invertU = invertU?.instance || invertU
				invertU = instance.invertU
				if (invertV != undefined) instance.invertV = invertV?.instance || invertV
				invertV = instance.invertV
				if (isPickable != undefined) instance.isPickable = isPickable?.instance || isPickable
				isPickable = instance.isPickable
				if (isVisible != undefined) instance.isVisible = isVisible?.instance || isVisible
				isVisible = instance.isVisible
				if (onDisposeObservable != undefined) instance.onDisposeObservable = onDisposeObservable?.instance || onDisposeObservable
				onDisposeObservable = instance.onDisposeObservable
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
				if (uniqueId != undefined) instance.uniqueId = uniqueId?.instance || uniqueId
				uniqueId = instance.uniqueId
				if (useAlphaForPicking != undefined) instance.useAlphaForPicking = useAlphaForPicking?.instance || useAlphaForPicking
				useAlphaForPicking = instance.useAlphaForPicking
				if (width != undefined) instance.width = width?.instance || width
				width = instance.width

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

			