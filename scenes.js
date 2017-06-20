var scenes = scenes || new Object();

scenes["ReseauPhysiqueGlobal"] = function(engine) {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3( .4, .5, .8);
    var camera = new BABYLON.ArcRotateCamera("camera1",  0, 0, 0, new BABYLON.Vector3(0, 0, -0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 10, -20));

    // Lights
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.groundColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    light.intensity = 1.0;

    // buildings
    var ground = BABYLON.MeshBuilder.CreateGround("g", {width: 15, height: 5}, scene);
    var batA = BABYLON.MeshBuilder.CreateBox("A", {size: 2, width: 4}, scene);
    var batB = BABYLON.MeshBuilder.CreateBox("B", {size: 3, depth: 4}, scene);
    var batC = BABYLON.MeshBuilder.CreateBox("C", {size: 2, depth: 3}, scene);

    // positions
    ground.position.x = -2;
    batA.position = new BABYLON.Vector3(-5, 0, -5);
    batB.position = new BABYLON.Vector3(-5, 0, 5);
    batC.position = new BABYLON.Vector3(3, 0, -3);
    batC.rotation.y = 0.3;

    // links


    // labels
    var text;
    var color = "black";
    var textTexture;
    var textSprite;

    var shift = new BABYLON.Vector3(0, 1, 0);
    var texts = [
        { label: "bâtiment A", pos: batA.position.add(shift) },
        { label: "bâtiment B", pos: batB.position.add(shift) },
        { label: "bâtiment C", pos: batC.position.add(shift) },
    ];
    for (var t = 0; t < texts.length; t++) {
        text = texts[t];
        textTexture = makeTextTexture(text.label, color, scene, false);
        textSprite = makeTextSprite(textTexture, 6, scene);
        textSprite.position = text.pos;
    }

    scene.registerBeforeRender(function() {
        camera.alpha += 0.001;
    });
    return scene;
};

