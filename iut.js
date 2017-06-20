var init = function() {
    // faire un CSS pour ce canvas
    var canvas = document.getElementById('renderCanvas');
    var engine = new BABYLON.Engine(canvas, true);
    var createScene;
    var scene;
    window.addEventListener("resize", function() {
        engine.resize();
    });

    Reveal.addEventListener('slidechanged', function(event) {
        // ajouter le canvas à la section qui va bien ou le retirer
        var slideId = event.currentSlide.id;
        createScene = scenes[slideId];
        scene = null;
        if (createScene) {
            scene = createScene(canvas, engine);
            moveCanvas(canvas, slideId);
        }
    });

    Reveal.initialize({
      dependencies: [
        // Interpret Markdown in <section> elements
        { src: 'reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } }
      ]
    });

    // render loop
    engine.runRenderLoop(function(){
        if (scene) {
            scene.render();
        }
    });
};

var moveCanvas = function(canvas, slide) {
    var node = document.getElementById(slide);
    node.appendChild(canvas);
};

/// Creates a Text texture
var makeTextTexture = function(text, color, scene, reverse) {
  var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 512, scene, false);
  dynamicTexture.hasAlpha = true;
  dynamicTexture.drawText(text, 5, 200, "bold 72px Arial", color, "transparent", reverse);
  // text colors : http://www.w3schools.com/cssref/css_colornames.asp
  return dynamicTexture;
};


// Creates a Text sprite from a Text texture
var makeTextSprite = function(textTexture, size, scene) {
  var spriteManager = new BABYLON.SpriteManager("sm", "", 1, 512, scene);
  spriteManager._spriteTexture = textTexture;
  spriteManager._spriteTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
  spriteManager._spriteTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
  var sprite = new BABYLON.Sprite("textSprite", spriteManager);
  sprite.size = size;
  return sprite;
};
