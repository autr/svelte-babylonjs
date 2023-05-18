import * as BABYLON from 'babylonjs'

export function getPolyhedra(sideLength, numSides) {
	let points = []
	let indices = []

	// Generate polygon points
	for (let i = 0; i < numSides; i++) {
		const angle = (2 * Math.PI * i) / numSides
		const x = sideLength * Math.cos(angle)
		const z = sideLength * Math.sin(angle)
		points.push(new BABYLON.Vector3(x, 0, z))
	}

	// Generate polyhedron indices
	for (let i = 0; i < numSides; i++) {
		indices.push(i)
		indices.push((i + 1) % numSides)
		indices.push(numSides)
	}
	for (let i = 0; i < numSides; i++) {
		indices.push(i)
		indices.push((i + 1) % numSides)
		indices.push(numSides + 1)
	}
	for (let i = 0; i < numSides; i++) {
		indices.push(i)
		indices.push((i + 1) % numSides)
		indices.push(i + numSides)
	}

	// Add top and bottom vertices for pyramids
	points.push(new BABYLON.Vector3(0, 1, 0))
	points.push(new BABYLON.Vector3(0, -1, 0))

	return { points: points.reverse(), indices: indices }
}

export function initMeshAttraction(meshes, scene) {
	console.log('✅ initMeshAttraction')
	meshes.forEach(mesh => {
	    mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.MeshImpostor, { mass: 1, friction: 0 }, scene);
	    mesh.physicsImpostor.hello = 'world'
	});
}
export function calculateMeshAttraction(meshes, attractionStrength = 0.00001, minDistance = 0, maxDistance = 100, exponentLevel = 1) {
  // Calculate total directional and rotational forces for all meshes
  let totalDirectionalForce = BABYLON.Vector3.Zero();
  let totalRotationalForce = BABYLON.Vector3.Zero();
  for (let i = 0; i < meshes.length; i++) {
    const mesh1 = meshes[i];
    const vertices1 = mesh1.getVerticesData(BABYLON.VertexBuffer.PositionKind);
    for (let j = i + 1; j < meshes.length; j++) {
      const mesh2 = meshes[j];
      if (mesh2 === mesh1) continue;
      const vertices2 = mesh2.getVerticesData(BABYLON.VertexBuffer.PositionKind);
      for (let k = 0; k < vertices1.length; k += 3) {
        const vertexPosition1 = new BABYLON.Vector3(vertices1[k], vertices1[k + 1], vertices1[k + 2]);
        for (let l = 0; l < vertices2.length; l += 3) {
          const vertexPosition2 = new BABYLON.Vector3(vertices2[l], vertices2[l + 1], vertices2[l + 2]);

          const distance = BABYLON.Vector3.Distance(vertexPosition1, vertexPosition2);
          if (distance < minDistance) continue;

          let attractionForce = BABYLON.Vector3.Zero();
          if (distance < maxDistance) {
            const normalizedDistance = (distance - minDistance) / (maxDistance - minDistance);
            const attractionStrengthAtDistance = attractionStrength * Math.pow(normalizedDistance, exponentLevel);
            attractionForce = vertexPosition2.subtract(vertexPosition1).normalize().scale(attractionStrengthAtDistance);
          } else {
            attractionForce = vertexPosition2.subtract(vertexPosition1).normalize().scale(attractionStrength);
          }

          // Add attraction force to total directional force
          totalDirectionalForce = totalDirectionalForce.add(attractionForce);

          // Add rotational force to total rotational force
          const distanceVector = vertexPosition2.subtract(vertexPosition1);
          const crossProduct = BABYLON.Vector3.Cross(vertexPosition1, distanceVector);
          totalRotationalForce = totalRotationalForce.add(crossProduct);
        }
      }
    }
  }

  // Apply total directional and rotational force to each mesh using impulses
  // meshes.forEach(mesh => {
  const mesh = meshes[0]
  	const imposter = mesh.physicsImpostor
    const body = imposter.physicsBody;
    const mass = body.mass || 0;

    // Calculate directional impulse

    console.log({imposter,body,mass})
    const directionalImpulse = totalDirectionalForce.scale(mass);

    // Calculate rotational impulse
    const rotationalImpulse = totalRotationalForce.scale(mass);

    // Apply impulses to body
    mesh.applyImpulse(directionalImpulse, mesh.position);
    mesh.applyImpulse(rotationalImpulse, mesh.position);
  // });
}

