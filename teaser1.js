var scenes = scenes || new Object();

scenes["Demo1"] = function(canvas, engine) {
    var scene = new BABYLON.Scene(engine);

    //Adding a light
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, false);
    camera.setPosition(new BABYLON.Vector3(0, 20, -100));
    light.position = camera.position;
    
    // The first parameter can be used to specify which mesh to import. Here we import all meshes
    BABYLON.SceneLoader.ImportMesh("", "/BJS/prezBJS/", "skull.babylon", scene, function (newMeshes) {
        // Set the target of the camera to the first imported mesh
        camera.target = newMeshes[0];
    });

    return scene;
};

scenes["Mesh"] = function(canvas, engine) {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0.5, 0.65, 0.9);

    //Adding a light
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, false);
    camera.setPosition(new BABYLON.Vector3(4, 2, -8));
    light.position = camera.position;
    camera.wheelPrecision = 100;

    var material = new BABYLON.StandardMaterial("m", scene);
    material.wireframe = true;

    // Lines : local axes
    var size = 6;
    var O = BABYLON.Vector3.Zero();
    var X = new BABYLON.Vector3(size, 0, 0);
    var Y = new BABYLON.Vector3(0, size, 0);
    var Z = new BABYLON.Vector3(0, 0, size);
    var axisX = BABYLON.MeshBuilder.CreateLines("X", {points: [O, X]}, scene);
    var axisY = BABYLON.MeshBuilder.CreateLines("Y", {points: [O, Y]}, scene);
    var axisZ = BABYLON.MeshBuilder.CreateLines("Z", {points: [O, Z]}, scene);
    axisX.color = BABYLON.Color3.Red();
    axisY.color = BABYLON.Color3.Green();
    axisZ.color = BABYLON.Color3.Blue();
    
    // mesh
    var mesh = BABYLON.MeshBuilder.CreateTorusKnot("m", {radialSegments: 80, tubularSegments: 24, tube: 0.6}, scene);
    mesh.material = material;

    return scene;
};

scenes["World"] = function(canvas, engine) {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0.5, 0.65, 0.9);

    //Adding a light
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, false);
    camera.setPosition(new BABYLON.Vector3(6, 8, -20));
    light.position = camera.position;
    camera.wheelPrecision = 100;

    var material = new BABYLON.StandardMaterial("m", scene);
    material.wireframe = true;

    // Lines
    // Local axes
    var size = 6;
    var O = BABYLON.Vector3.Zero();
    var X = new BABYLON.Vector3(size, 0, 0);
    var Y = new BABYLON.Vector3(0, size, 0);
    var Z = new BABYLON.Vector3(0, 0, size);
    var axisX = BABYLON.MeshBuilder.CreateLines("X", {points: [O, X]}, scene);
    var axisY = BABYLON.MeshBuilder.CreateLines("Y", {points: [O, Y]}, scene);
    var axisZ = BABYLON.MeshBuilder.CreateLines("Z", {points: [O, Z]}, scene);
    axisX.color = BABYLON.Color3.Red();
    axisY.color = BABYLON.Color3.Green();
    axisZ.color = BABYLON.Color3.Blue();
    // World axes
    var WaxisX = BABYLON.MeshBuilder.CreateLines("WX", {points: [O, X.scale(2)]}, scene);
    var WaxisY = BABYLON.MeshBuilder.CreateLines("WY", {points: [O, Y.scale(2)]}, scene);
    var WaxisZ = BABYLON.MeshBuilder.CreateLines("WZ", {points: [O, Z.scale(2)]}, scene);
    WaxisX.color = BABYLON.Color3.Red();
    WaxisY.color = BABYLON.Color3.Green();
    WaxisZ.color = BABYLON.Color3.Blue();
    
    // Mesh
    var mesh = BABYLON.MeshBuilder.CreateTorusKnot("m", {radialSegments: 80, tubularSegments: 24, tube: 0.6}, scene);
    mesh.material = material;

    mesh.position = new BABYLON.Vector3(6, 5, 12);
    mesh.rotation.x = 0.5;
    mesh.rotation.z = 0.7;
    mesh.scaling.y = 0.9;
    mesh.scaling.z = 0.5;
    mesh.scaling.x = 0.5;

    axisX.position = mesh.position;
    axisY.position = mesh.position;
    axisZ.position = mesh.position;
    axisX.rotation = mesh.rotation;
    axisY.rotation = mesh.rotation;
    axisZ.rotation = mesh.rotation;

    return scene;
};

scenes["Rasterisation"] = function(canvas, engine) {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0.5, 0.65, 0.9);

    //Adding a light
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, false);
    camera.setPosition(new BABYLON.Vector3(4, 2, -4));
    light.position = camera.position;
    camera.wheelPrecision = 100;

    var material = new BABYLON.StandardMaterial("m", scene);
  
    // mesh
    var mesh = BABYLON.MeshBuilder.CreateTorusKnot("m", {radialSegments: 80, tubularSegments: 24, tube: 0.6}, scene);
    mesh.material = material;
    mesh.convertToFlatShadedMesh();

    return scene;
};

scenes["Normales"] = function(canvas, engine) {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0.5, 0.65, 0.9);

    //Adding a light
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, false);
    camera.setPosition(new BABYLON.Vector3(-4, 2, -4));
    light.position = camera.position;
    camera.wheelPrecision = 100;

    var material = new BABYLON.StandardMaterial("m", scene);
  
    // mesh
    var mesh = BABYLON.MeshBuilder.CreateTorusKnot("m", {radialSegments: 80, tubularSegments: 24, tube: 0.6}, scene);
    mesh.material = material;

    return scene;
};

scenes["Textures"] = function(canvas, engine) {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0.5, 0.65, 0.9);

    //Adding a light
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, false);
    camera.setPosition(new BABYLON.Vector3(-4, 2, -4));
    light.position = camera.position;
    camera.wheelPrecision = 100;

    var material = new BABYLON.StandardMaterial("m", scene);
    var url = "images/stonewall.jpg";
    var texture = new BABYLON.Texture(url, scene);
    texture.uScale = 30;
    texture.vScale = 3;
    material.diffuseTexture = texture;

  
    // mesh
    var mesh = BABYLON.MeshBuilder.CreateTorusKnot("m", {radialSegments: 80, tubularSegments: 24, tube: 0.6}, scene);
    mesh.material = material;

    return scene;
};