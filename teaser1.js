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

scenes["SceneWall"] = function(canvas, engine) {
    
        //  Particle parameters
        var size = 10;                      // particle size
        var widthNb = 30;                   // width particle number
        var heightNb = 20;                  // height particle number
        var gravity = -0.07;                // gravity
        var restitution = 0.9;              // energy restitution on ground collision ex : 0.6 => 60 %
        var friction = 0.995;               // ground friction once the particle has landed
        var radius = size * heightNb / 12;  // explosion radius
        var speed = radius * 1.2;           // particle max speed
    
        // Ground parameters
        var subdivisions = 50;
        var width = 1000;
        var height = 1000;
        var groungHeight = width / 6;
    
        // Scene and camera
        var scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3(.4, .6, .8);
        var camera = new BABYLON.ArcRotateCamera("camera1",  0, 0, 0, new BABYLON.Vector3(0, 0, -0), scene);
        camera.setPosition(new BABYLON.Vector3(0, 0, -800));
        camera.attachControl(canvas, true);
    
        // Lights
        var light = new BABYLON.HemisphericLight("light1", camera.position, scene);
        light.groundColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        light.intensity = 0.2;
    
        var dir = new BABYLON.Vector3(0, -1, 1);
        var dirLight = new BABYLON.DirectionalLight("dl", dir, scene);
        dirLight.position = new BABYLON.Vector3(0, 200, -1000);
        dirLight.diffuse = BABYLON.Color3.White();
        dirLight.intensity = 0.8;
        dirLight.specular = new BABYLON.Color3(0.5, 0.5, 0.2);
    
        var pl = new BABYLON.PointLight("pl", new BABYLON.Vector3(0, 0, 0), scene);
        pl.diffuse = new BABYLON.Color3(1, 1, 1);
        pl.specular = BABYLON.Color3.Black();
        pl.intensity = 0.4;
    
        // Text
        var text = "BabylonJS Roxxx";
        var font = "bold 56px Arial";
        var tx = new BABYLON.DynamicTexture("dt", {width:500, height: 65}, scene);
        tx.hasAlpha = true;
        //var clearColor = "transparent";
        var clearColor = "red";
        tx.drawText(text, null, 45, font, "blue", clearColor, true, false);
        tx.drawText("CLICK = BOOM", null, 60, "bold 20px Arial", "yellow", null, true, true);
    
        var mat = new BABYLON.StandardMaterial("mat1", scene);
        mat.diffuseTexture = tx;
        mat.freeze();
    
        // Landscape
        // =========
    
        // Ground
        var quadsReady = false;
        // callback function to call when the ground is ready
        var setQuads = function(mesh) {
          quadsReady = true;
          mesh.getHeightAtCoordinates(mesh.position.x, mesh.position.z);                // forces the underlying altitude array initialization
        };
        var options = {width: width, height: height, subdivisions: subdivisions, minHeight: 0,  maxHeight: groungHeight, onReady: setQuads};
        var ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("ground", "http://jerome.bousquie.fr/BJS/images/heightmap.png", options, scene);
        var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
        groundMaterial.diffuseTexture = new BABYLON.Texture("http://jerome.bousquie.fr/BJS/images/ground.jpeg", scene);
        groundMaterial.diffuseTexture.uScale = 6;
        groundMaterial.diffuseTexture.vScale = 6;
        groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        ground.material = groundMaterial;
        ground.isPickable = false;
        ground.position.y = - heightNb * size;
        ground.position.z = heightNb * size;
        groundMaterial.freeze();
        ground.freezeWorldMatrix();
    
        // Disc
        var disc = BABYLON.MeshBuilder.CreateDisc("d", {radius: width * 4}, scene);
        disc.position = ground.position;
        disc.position.y -= 0.1;
        disc.rotation.x = Math.PI / 2;
        disc.material = groundMaterial;
        disc.isPickable = false;
        disc.freezeWorldMatrix();
    
        // SPS : the particles !
        var model = BABYLON.MeshBuilder.CreateBox("m", {size: size}, scene);
        var sps = new BABYLON.SolidParticleSystem("sps", scene, {isPickable: true});
        var nb = widthNb * heightNb;
        sps.addShape(model, nb);
        model.dispose();
        var s = sps.buildMesh();
        s.material = mat;
        s.freezeWorldMatrix();
    
    
        // SPS tmp internal vars to avoid memory re-allocations
        sps.vars.target = BABYLON.Vector3.Zero();                                               // the target point where to set the explosion center
        sps.vars.tmp = BABYLON.Vector3.Zero();                                                  // tmp vector3
        sps.vars.totalWidth = size * widthNb;                                                   // wall width
        sps.vars.totalHeight = size * heightNb;                                                 // wall height
        sps.vars.shiftx = -sps.vars.totalWidth / 2;                                             // shift value to center the wall on X
        sps.vars.shifty = -sps.vars.totalHeight / 2;                                            // shift value to center the wall on Y
        sps.vars.radius = radius;                                                               // explosion radius
        sps.vars.minY = 0.0                                                                     // current ground altitude
        sps.vars.norm = BABYLON.Vector3.Zero();                                                 // current ground normal
        sps.vars.sym = 0.0;                                                                     // tmp for symetry computation around the normal
        sps.vars.loss = 0.0;                                                                    // tmp float for energy loss
        sps.vars.justClicked = false;                                                           // flag to compute or not the initial velocities
    
        // Shadows : cast to the ground and to the disc
        var shadowGenerator = new BABYLON.ShadowGenerator(1024, dirLight);
        shadowGenerator.getShadowMap().renderList.push(s);
        shadowGenerator.setDarkness(0.2);
        shadowGenerator.usePoissonSampling = true;
        ground.receiveShadows = true;
        disc.receiveShadows = true;
    
        // SPS initializer: just set the particle along a vertical wall
        sps.initParticles = function(widthNb, heightNb, size) {
            var p = 0;
            for (var j = 0; j < heightNb; j++) {
                for (var i = 0; i < widthNb; i++) {
    
                    // let's position the quads on a grid
                    sps.particles[p].position.x = i * size + sps.vars.shiftx;
                    sps.particles[p].position.y = j * size + sps.vars.shifty;
                    sps.particles[p].position.z = 0;
    
                    // let's set the texture per quad
                    sps.particles[p].uvs.x = i * size / sps.vars.totalWidth;
                    sps.particles[p].uvs.y = j * size / sps.vars.totalHeight;
                    sps.particles[p].uvs.z = (i + 1) * size / sps.vars.totalWidth;
                    sps.particles[p].uvs.w = (j + 1) * size / sps.vars.totalHeight;
    
                    // set a custom random value per particle
                    sps.particles[p].rand =  1 / (1 + Math.random()) / 10;
    
                    // increment the particle index
                    p++;
                }
            }
        }
    
    
        // Init sps
        sps.initParticles(widthNb, heightNb, size);     // compute initial particle positions
        sps.setParticles();                             // set them
        sps.refreshVisibleSize();                       // recompute once the bounding box
        sps.computeParticleColor = false;               // the colors won't change
        sps.computeParticleTexture = false;             // nor the texture now

      return scene;
    };


scenes["BlowWall"] = function(canvas, engine) {
    
        //  Particle parameters
        var size = 10;                      // particle size
        var widthNb = 30;                   // width particle number
        var heightNb = 20;                  // height particle number
        var gravity = -0.07;                // gravity
        var restitution = 0.9;              // energy restitution on ground collision ex : 0.6 => 60 %
        var friction = 0.995;               // ground friction once the particle has landed
        var radius = size * heightNb / 12;  // explosion radius
        var speed = radius * 1.2;           // particle max speed
    
        // Ground parameters
        var subdivisions = 50;
        var width = 1000;
        var height = 1000;
        var groungHeight = width / 6;
    
        // Scene and camera
        var scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3(.4, .6, .8);
        var camera = new BABYLON.ArcRotateCamera("camera1",  0, 0, 0, new BABYLON.Vector3(0, 0, -0), scene);
        camera.setPosition(new BABYLON.Vector3(0, 0, -800));
        camera.attachControl(canvas, true);
    
        // Lights
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        light.groundColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        light.intensity = 0.2;
    
        var dir = new BABYLON.Vector3(0, -1, 1);
        var dirLight = new BABYLON.DirectionalLight("dl", dir, scene);
        dirLight.position = new BABYLON.Vector3(0, 200, -1000);
        dirLight.diffuse = BABYLON.Color3.White();
        dirLight.intensity = 0.8;
        dirLight.specular = new BABYLON.Color3(0.5, 0.5, 0.2);
    
        var pl = new BABYLON.PointLight("pl", camera.position, scene);
        pl.diffuse = new BABYLON.Color3(1, 1, 1);
        pl.specular = BABYLON.Color3.Black();
        pl.intensity = 0.4;
    
        // Text
        var text = "BabylonJS Roxxx";
        var font = "bold 56px Arial";
        var tx = new BABYLON.DynamicTexture("dt", {width:500, height: 65}, scene);
        tx.hasAlpha = true;
        //var clearColor = "transparent";
        var clearColor = "red";
        tx.drawText(text, null, 45, font, "blue", clearColor, true, false);
        tx.drawText("CLICK = BOOM", null, 60, "bold 20px Arial", "yellow", null, true, true);
    
        var mat = new BABYLON.StandardMaterial("mat1", scene);
        mat.diffuseTexture = tx;
        mat.freeze();
    
        // Landscape
        // =========
    
        // Ground
        var quadsReady = false;
        // callback function to call when the ground is ready
        var setQuads = function(mesh) {
          quadsReady = true;
          mesh.getHeightAtCoordinates(mesh.position.x, mesh.position.z);                // forces the underlying altitude array initialization
        };
        var options = {width: width, height: height, subdivisions: subdivisions, minHeight: 0,  maxHeight: groungHeight, onReady: setQuads};
        var ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("ground", "http://jerome.bousquie.fr/BJS/images/heightmap.png", options, scene);
        var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
        groundMaterial.diffuseTexture = new BABYLON.Texture("http://jerome.bousquie.fr/BJS/images/ground.jpeg", scene);
        groundMaterial.diffuseTexture.uScale = 6;
        groundMaterial.diffuseTexture.vScale = 6;
        groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        ground.material = groundMaterial;
        ground.isPickable = false;
        ground.position.y = - heightNb * size;
        ground.position.z = heightNb * size;
        groundMaterial.freeze();
        ground.freezeWorldMatrix();
    
        // Disc
        var disc = BABYLON.MeshBuilder.CreateDisc("d", {radius: width * 4}, scene);
        disc.position = ground.position;
        disc.position.y -= 0.1;
        disc.rotation.x = Math.PI / 2;
        disc.material = groundMaterial;
        disc.isPickable = false;
        disc.freezeWorldMatrix();
    
        // SPS : the particles !
        var model = BABYLON.MeshBuilder.CreateBox("m", {size: size}, scene);
        var sps = new BABYLON.SolidParticleSystem("sps", scene, {isPickable: true});
        var nb = widthNb * heightNb;
        sps.addShape(model, nb);
        model.dispose();
        var s = sps.buildMesh();
        s.material = mat;
        s.freezeWorldMatrix();
    
    
        // SPS tmp internal vars to avoid memory re-allocations
        sps.vars.target = BABYLON.Vector3.Zero();                                               // the target point where to set the explosion center
        sps.vars.tmp = BABYLON.Vector3.Zero();                                                  // tmp vector3
        sps.vars.totalWidth = size * widthNb;                                                   // wall width
        sps.vars.totalHeight = size * heightNb;                                                 // wall height
        sps.vars.shiftx = -sps.vars.totalWidth / 2;                                             // shift value to center the wall on X
        sps.vars.shifty = -sps.vars.totalHeight / 2;                                            // shift value to center the wall on Y
        sps.vars.radius = radius;                                                               // explosion radius
        sps.vars.minY = 0.0                                                                     // current ground altitude
        sps.vars.norm = BABYLON.Vector3.Zero();                                                 // current ground normal
        sps.vars.sym = 0.0;                                                                     // tmp for symetry computation around the normal
        sps.vars.loss = 0.0;                                                                    // tmp float for energy loss
        sps.vars.justClicked = false;                                                           // flag to compute or not the initial velocities
    
        // Shadows : cast to the ground and to the disc
        var shadowGenerator = new BABYLON.ShadowGenerator(1024, dirLight);
        shadowGenerator.getShadowMap().renderList.push(s);
        shadowGenerator.setDarkness(0.2);
        shadowGenerator.usePoissonSampling = true;
        ground.receiveShadows = true;
        disc.receiveShadows = true;
    
        // SPS initializer: just set the particle along a vertical wall
        sps.initParticles = function(widthNb, heightNb, size) {
            var p = 0;
            for (var j = 0; j < heightNb; j++) {
                for (var i = 0; i < widthNb; i++) {
    
                    // let's position the quads on a grid
                    sps.particles[p].position.x = i * size + sps.vars.shiftx;
                    sps.particles[p].position.y = j * size + sps.vars.shifty;
                    sps.particles[p].position.z = 0;
    
                    // let's set the texture per quad
                    sps.particles[p].uvs.x = i * size / sps.vars.totalWidth;
                    sps.particles[p].uvs.y = j * size / sps.vars.totalHeight;
                    sps.particles[p].uvs.z = (i + 1) * size / sps.vars.totalWidth;
                    sps.particles[p].uvs.w = (j + 1) * size / sps.vars.totalHeight;
    
                    // set a custom random value per particle
                    sps.particles[p].rand =  1 / (1 + Math.random()) / 10;
    
                    // increment the particle index
                    p++;
                }
            }
        }
    
        // SPS behavior : this function is called by setParticles() for each particle
        sps.updateParticle = function(p) {
    
            // just after the click, set once the initial velocity
            if (sps.vars.justClicked) {
                // let's give them an initial velocity according to their distance from the explosion center
                p.position.subtractToRef(sps.vars.target, sps.vars.tmp);
                var len = sps.vars.tmp.length();
                var scl = (len < 0.001) ? 1.0 : sps.vars.radius / len;
                sps.vars.tmp.normalize();
                p.velocity.x += sps.vars.tmp.x * scl * speed * (1 + Math.random() * .3);
                p.velocity.y += sps.vars.tmp.y * scl * speed * (1 + Math.random() * .3);
                p.velocity.z += sps.vars.tmp.z * scl * speed * (1 + Math.random() * .3);
                if (p.idx == sps.nbParticles - 1) {
                    sps.vars.justClicked = false;  // last particle initialized
                }
            }
    
            // move the particle
            if (boom && !sps.vars.justClicked) {
    
                sps.vars.minY = ground.getHeightAtCoordinates(p.position.x, p.position.z) + size;  // get the current ground altitude beneath the particle
                sps.vars.loss = -restitution * p.rand * 10;             // negate and attenuation
    
                if (p.position.y < sps.vars.minY) {
                    // we compute the vector V2 symetric to the velocity vector V1 by the ground normal axis N : V2 = (2 * (N.V1) / ||N||Â²) * N - V1
                    ground.getNormalAtCoordinatesToRef(p.position.x, p.position.z, sps.vars.norm);      // get the ground normal
                    sps.vars.sym = 2 * (sps.vars.norm.x * p.velocity.x + sps.vars.norm.y * p.velocity.y + sps.vars.norm.z * p.velocity.z) / sps.vars.norm.lengthSquared();    // 2 * (N.V1) / ||N||Â²
    
                    p.velocity.x = sps.vars.sym * sps.vars.norm.x - p.velocity.x;
                    p.velocity.z = sps.vars.sym * sps.vars.norm.z - p.velocity.z;
                    p.velocity.y = sps.vars.sym * sps.vars.norm.y - p.velocity.y;
                    p.velocity.x *= sps.vars.loss;
                    p.velocity.y *= sps.vars.loss;
                    p.velocity.z *= sps.vars.loss;
                }
    
                // move
                p.velocity.y += gravity;
                p.position.x += p.velocity.x;
                p.position.y += p.velocity.y;
                p.position.z += p.velocity.z;
    
                // rotate
                p.rotation.x += (p.velocity.z) * p.rand;
                p.rotation.y += (p.velocity.x) * p.rand;
                p.rotation.z += (p.velocity.y) * p.rand;
    
                // don't fall forever : beneath a certain y velocity limit, prevent the particle from bouncing or falling and apply the ground friction
                if (p.position.y < sps.vars.minY && Math.abs(p.velocity.y) < 0.1 - gravity) {
                    p.velocity.x *= friction;
                    p.velocity.z *= friction;
                    p.position.y = sps.vars.minY;
                    p.velocity.y = 0;
                }
            }
        };
    
        // If we want the shadows to fit the bounding box, we need to update it once per frame
        sps.afterUpdateParticles = function() {
                this.refreshVisibleSize();
        };
    
    
        // Init sps
        sps.initParticles(widthNb, heightNb, size);     // compute initial particle positions
        sps.setParticles();                             // set them
        sps.refreshVisibleSize();                       // recompute once the bounding box
        sps.computeParticleColor = false;               // the colors won't change
        sps.computeParticleTexture = false;             // nor the texture now
    
        // Boom trigger
        var boom = false;
        scene.onPointerDown = function(evt, pickResult) {
            var faceId = pickResult.faceId;
            if (faceId == -1) { return; }
            var idx = sps.pickedParticles[faceId].idx;
            var p = sps.particles[idx];
            boom = true;
            // set the target (explosion center) at the distance "radius" from the picked particle on the camera-particle axis
            camera.position.subtractToRef(p.position, sps.vars.target);
            sps.vars.target.normalize();
            sps.vars.target.scaleInPlace(radius);
            sps.vars.target.addInPlace(p.position);
            sps.vars.justClicked = true;
        }
    
        // Animation
        // scene.debugLayer.show();
        scene.registerBeforeRender(function() {
            sps.setParticles();
        });
    
      return scene;
    };
    
