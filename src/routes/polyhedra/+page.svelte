<script>

	import * as CANNON from 'cannon-es'
	import * as Ammo from 'ammojs-typed'
	import 'babylonjs-post-process'

	import SSAO2RenderingPipeline from '$lib/SSA/SSAO2RenderingPipeline.svelte'

	import Engine from '$lib/Engine/Engine.svelte'
	import Scene from '$lib/Scene/Scene.svelte'

	import FreeCamera from '$lib/Free/FreeCamera.svelte'
	import ArcRotateCamera from '$lib/Arc/ArcRotateCamera.svelte'

	import HemisphericLight from '$lib/Hemispheric/HemisphericLight.svelte'
	import CreateSphere from '$lib/Create/CreateSphere.svelte'
	import CreateGround from '$lib/Create/CreateGround.svelte'
	import CreateBox from '$lib/Create/CreateBox.svelte'
	import CreatePolygon from '$lib/Create/CreatePolygon.svelte'
	import CreatePolyhedron from '$lib/Create/CreatePolyhedron.svelte'
	import CreateCylinder from '$lib/Create/CreateCylinder.svelte'
	import ExtrudeShape from '$lib/Extrude/ExtrudeShape.svelte'
	import PhysicsImpostor from '$lib/Physics/PhysicsImpostor.svelte'
	import Vector3 from '$lib/Vector/Vector3.svelte'
	import earcut from 'earcut'

	import StandardMaterial from '$lib/Standard/StandardMaterial.svelte'

	import * as BB from 'babylonjs'
	// import * as Components from '$lib/index.js'
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import { bbDebug } from '$lib/stores.js'

	bbDebug.set(false)

	import _POLYHEDRA from '$lib/polyhedra.js'
	import { getPolyhedra, initMeshAttraction, calculateMeshAttraction } from '$lib/helpers.js'

	// bind components to these variables
	let params = {}
	let canvas, engine, scene, camera, light, sphere, ground, sphere1, sphere2, material
	let inited = false

	let INDEX = 5
	const POLYHEDRA = Object.values(_POLYHEDRA)
	$: POLYHEDRON = POLYHEDRA[INDEX]
	let LENGTH = 0.5
	let MESHES = []
	let RANDOMS = []

	for (let i = 0; i < 3; i++) {
		const p = POLYHEDRA[parseInt(getRandomNumber(0,POLYHEDRA.length))]
		const a = (new BABYLON.Vector3(...p.vertex[0]))
		const b = (new BABYLON.Vector3(...p.vertex[1]))
		const distance = BABYLON.Vector3.Distance(a,b)
		p.scale = LENGTH/distance
		p.scale3 = new BABYLON.Vector3(p.scale,p.scale,p.scale)
		RANDOMS.push(p)
	}

	onMount(e => {
		if (browser) {
			window.CANNON = CANNON // very crucial!
			window.Ammo = Ammo
		}
	})

	async function onEngineMounted( engine ) {
		console.log('✅ onEngineMounted')

	}

	async function onEngineLoaded( engine ) {

		console.log('✅ onEngineLoaded')

		const ammo = await Ammo.bind(window)()

		let gravityVector = new BABYLON.Vector3(0, -9.81, 0)
		gravityVector = new BABYLON.Vector3(0, 0, 0)
		scene.enablePhysics(gravityVector, new BABYLON.AmmoJSPlugin() )

		// ground.instance.physicsImpostor = new BABYLON.PhysicsImpostor(
		// 	ground.instance,
		// 	BABYLON.PhysicsImpostor.PlaneImpostor,
		// 	{ mass: 0, restitution: 0.8 }
		// )

		initMeshAttraction(MESHES, scene)

		engine.runRenderLoop( e => {
			scene.render()
		})
		camera.attachControl(canvas, true)
		// setInterval(e => {


		// }, 1000/30)

		// scene.onBeforePhysicsObservable.add ( e => {
			
		// } )
		scene.registerBeforeRender(() => {
			calculateMeshAttraction( MESHES )

		})

		window.scene = scene



	}

	function onPipelineLoaded(pipeline) {

		console.log('✅ onPipelineLoaded')
		scene.instance.postProcessRenderPipelineManager.addPipeline(pipeline)
	    scene.instance.postProcessRenderPipelineManager.attachCamerasToRenderPipeline("ssaopipeline", [camera]);
        // pipeline.attachCameras([camera])
	}

	function onPolyhedraLoaded( instance ) {

		console.log('✅ onPolyhedraLoaded')

		MESHES.push(instance)

		setTimeout(e => {
			// instance.renderingGroupId = 1
			// instance.enableEdgesRendering()
			// instance.edgesWidth = 10
			// instance.edgesColor = new BABYLON.Color4(0,0,0,1)
			// instance.physicsImpostor = new BABYLON.PhysicsImpostor(
			// 	instance,
			// 	BABYLON.PhysicsImpostor.MeshImpostor,
			// 	{ mass: 0.8, restitution: 0.8 },
			// 	scene
			// )
		},1000)
	}

	let cameraPosition = new BABYLON.Vector3(0, 2, -15)
	let spherePosition = new BABYLON.Vector3(0,0,0)

	let toggle = false
	let rotation, polyRotate, polygon, polyhedron, wireframeMaterial, edgesMaterial, pipeline
	let polyhedra = []

	function getRandomNumber(min, max) {
	  return Math.random() * (max - min) + min;
	}

	function randomVector3() {
		const dist = 6
		const x = getRandomNumber( -dist, dist )
		const y = getRandomNumber( -dist, dist )
		const z = getRandomNumber( -dist, dist )
		return new BABYLON.Vector3(x,y,z)
	}
</script>

<div style="position:fixed;left:0;top:0;z-index:9" >
	<input type="checkbox" bind:checked={toggle} />
</div>
<canvas 
	id="canvas"
	style="position:fixed;left:0;top:0;width:100%;height:100%" 
	bind:this={canvas} />
{#if canvas}
	<Engine 
		bind:this={engine}
		canvasOrContext={document.getElementById('canvas')}
		onLoaded={onEngineLoaded}
		options={{preserveDrawingBuffer: true, stencil: true}}>
		<Scene
			onInited={onEngineMounted}
			clearColor={new BABYLON.Color4( 0,0,0,1)}
			bind:this={scene}>
<!-- 
			{#if engine && scene && camera}
				<SSAO2RenderingPipeline
					bind:this={pipeline}
					name="ssaopipeline"
					onLoaded={onPipelineLoaded}
					radius={0.2}
					cameras={[camera]}
					totalStrength={20}
					edgeStrength={3}
					edgeWithScaler={0}
					minZAspect={100}
					maxZAspect={100}
					ratio={{
						ssaoRatio: 0.1, // SSAO post-process, in a lower resolution
						blurRatio: 0.5 // combines the SSAO and the scene
					}}
					scene={scene.instance} />
			{/if}
 -->
			<StandardMaterial
				bind:this={material}
				wireframe={true}
				diffuseColor={new BABYLON.Color3(1,0,0)} />
			<StandardMaterial
				bind:this={wireframeMaterial}
				wireframe={false}
				emissiveColor={new BABYLON.Color3(0,0,0,1)}
				renderingGroupId={1} />
			<StandardMaterial
				bind:this={edgesMaterial}
				wireframe={true}
				emissiveColor={new BABYLON.Color3(0,0,1)}
				renderingGroupId={1} />
			<ArcRotateCamera
				bind:this={camera}
				name="camera1"
				target={ground}
				scene={scene}
				alpha={1}
				beta={1}
				radius={10} />
			<HemisphericLight
				name="light1" />
			<Vector3 
				bind:this={polyRotate}
				z={Math.PI / 2.6}
				x={0.01}
				y={Math.PI / 2} />
			<!-- <CreateCylinder
				name="polygon"
				bind:this={polygon}
				material={material}
				{scene}
				options={{
					tessellation: 5,
					height: 0.00000000001,
					diameterTop: 2,
					diameterBottom: 2,
				}}
				rotation={polyRotate}
				position={new BABYLON.Vector3(0,2,0)}
				earcutInjection={earcut} />
				{console.log({POLYHEDRON, POLYHEDRA})} -->

			{#each RANDOMS as PH, i}
				<CreatePolyhedron
					name={'polyhedron'+1}
					bind:this={polyhedra[i]}
					material={wireframeMaterial}
					{scene}
					options={{
						custom: PH,
						size: 1
					}}
					scaling={PH.scale3}
					onLoaded={onPolyhedraLoaded}
					position={randomVector3()}
					earcutInjection={earcut} />
			{/each}
<!-- 
			<CreateGround
				bind:this={ground}
				name="ground1",
				options={{width: 200, height: 200, subdivisions: 2, updateable: false}} /> -->
		</Scene>
	</Engine>
{/if}