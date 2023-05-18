# Svelte Babylon.js (DEMO)

Babylon.js adapted for use with Svelte - it uses the TypeDoc definitions to generate Svelte components.

**WARNING** this is just an experiment.

## Install

Not published to npm yet - this repo is for demoing.

## Usage

```javascript
<script>
	// import classes and builders
	import { Engine, Scene, FreeCamera, HemisphericLight, Sphere, Ground } from 'svelte-babylonjs'
	// import shorthand helpers
	import { vec3 } from 'svelte-babylonjs/helpers'
	import { onMount } from 'svelte'
	// bind components to these variables
	let canvas, engine, scene, camera, light, sphere, ground
	onMount( () => {
		// access babylon.js object instance via the component
		engine.instance.runRenderLoop( scene.render() )
		sphere.instance.position.y = 1
	})
</script>

<canvas bind:this={canvas} />
<svelte:window on:resize={e => engine.resize()} />
<Engine
	bind:this={engine}
	{canvas}
	options={preserveDrawingBuffer: true, stencil: true}>
	<Scene>
		<FreeCamera
			bind:this={camera}
			name="camera1"
			position={new BABYLON.Vector3(0, 5, -10)}
			target={BABYLON.Vector3.Zero()} />
		<HemisphericLight
			name="light1"
			position={new BABYLON.Vector3(0,1,0)} />
		<Sphere
			name="sphere1",
			options={{segments: 16, diameter: 2, sideOrientation: BABYLON.Mesh.FRONTSIDE}}  />
		<Ground
			name="ground1",
			options={{width: 6, height: 6, subdivisions: 2, updateable: false}} />
	</Scene>
</Engine>
```
