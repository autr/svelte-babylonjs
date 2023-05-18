
			<script>
				import { onMount, onDestroy } from 'svelte'
				import { browser } from '$app/environment'
				import { bbLookup, bbIniting, bbDebug } from '$lib/stores.js'
				import * as BB from 'babylonjs'
				import { createEventDispatcher } from 'svelte'
				

				// ================ QUICKLOOK ================

				/*  
					angle  
					cellIndex  
					cellRef  
					color  
					height  
					invertU  
					invertV  
					isVisible  
					position  
					width  
				*/

				// ================ CONSTRUCTOR PROPERTIES ================

				

				// ================ CLASS INSTANCE ================

				export let instance = browser ? new BB.ThinSprite() : {}

				// ================ ACCESSORS ================

				
				export let animationStarted = undefined // [boolean] 
				// 
				

				export let delay = undefined // [number] 
				// 
				

				export let fromIndex = undefined // [number] 
				// 
				

				export let loopAnimation = undefined // [boolean] 
				// 
				

				export let toIndex = undefined // [number] 
				// 
				

				// ================ PROPERTIES ================

				
				export let angle = undefined // [number] 
				// gets or sets rotation angle
				

				export let cellIndex = undefined // [number] 
				// gets or sets the cell index in the sprite sheet
				

				export let cellRef = undefined // [string] 
				// gets or sets the cell reference in the sprite sheet, uses sprite's filename when added to sprite sheet
				

				export let color = undefined // [icolor4like] 
				// gets or sets the main color
				

				export let height = undefined // [number] 
				// gets or sets the height
				

				export let invertU = undefined // [boolean] 
				// gets or sets a boolean indicating if uv coordinates should be inverted in u axis
				

				export let invertV = undefined // [boolean] 
				// gets or sets a boolean indicating if uv coordinates should be inverted in b axis
				

				export let isVisible = undefined // [boolean] 
				// gets or sets a boolean indicating if the sprite is visible (renderable). default is true
				

				export let position = undefined // [ivector3like] 
				// gets or sets the current world position
				

				export let width = undefined // [number] 
				// gets or sets the width
				

				// ================ METHODS ================

				
				export let playAnimation = (...args) => instance.playAnimation(...args)

				export let stopAnimation = (...args) => instance.stopAnimation(...args)
				
				// ================ LIFECYCLE ================
				

				export let onMounted = () => {}
				export let onInited = () => {}
				export let onLoaded = () => {}

				const DEBUG = (...args) => $bbDebug ? console.log(`[${name}:ThinSprite]`, ...args) : null

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

								
				animationStarted = instance.animationStarted

				delay = instance.delay

				fromIndex = instance.fromIndex

				loopAnimation = instance.loopAnimation

				toIndex = instance.toIndex
				if (angle != undefined) instance.angle = angle?.instance || angle
				angle = instance.angle
				if (cellIndex != undefined) instance.cellIndex = cellIndex?.instance || cellIndex
				cellIndex = instance.cellIndex
				if (cellRef != undefined) instance.cellRef = cellRef?.instance || cellRef
				cellRef = instance.cellRef
				if (color != undefined) instance.color = color?.instance || color
				color = instance.color
				if (height != undefined) instance.height = height?.instance || height
				height = instance.height
				if (invertU != undefined) instance.invertU = invertU?.instance || invertU
				invertU = instance.invertU
				if (invertV != undefined) instance.invertV = invertV?.instance || invertV
				invertV = instance.invertV
				if (isVisible != undefined) instance.isVisible = isVisible?.instance || isVisible
				isVisible = instance.isVisible
				if (position != undefined) instance.position = position?.instance || position
				position = instance.position
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

			