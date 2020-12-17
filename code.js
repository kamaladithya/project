var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var cardboard1 = createSprite(100,20,20,80);
cardboard1.shapeColor="brown";

var cardboard2 = createSprite(27,105,80,20);
cardboard2.shapeColor="brown";

var cardboard3 = createSprite(370,300,80,20);
cardboard3.shapeColor="brown";

var cardboard4 = createSprite(265,360,20,80);
cardboard4.shapeColor="brown";

var cardboard5 = createSprite(187,124,20,80);
cardboard5.shapeColor="brown";

var cardboard6 = createSprite(364,20,20,80);
cardboard6.shapeColor="brown";

var cardboard7 = createSprite(230,123,80,20);
cardboard7.shapeColor="brown";

var cardboard8 = createSprite(370,230,80,20);
cardboard8.shapeColor="brown";

var cardboard9 = createSprite(185,260,20,100);
cardboard9.shapeColor="brown";

var cardboard10 = createSprite(225,180,20,80);
cardboard10.shapeColor="brown";

var cardboard11 = createSprite(209,25,20,80);
cardboard11.shapeColor="brown";

var cardboard12 = createSprite(27,220,80,20);
cardboard12.shapeColor="brown";

var cardboard13 = createSprite(90,340,20,100);
cardboard13.shapeColor="brown";

var cardboard14 = createSprite(170,370,80,20);
cardboard14.shapeColor="brown";

var cardboard15 = createSprite(27,290,80,20);
cardboard15.shapeColor="brown";

var cardboard16 = createSprite(27,160,80,20);
cardboard16.shapeColor="brown";

var cardboard17 = createSprite(27,340,80,20);
cardboard17.shapeColor="brown";

var cardboard18 = createSprite(286,393,80,20);
cardboard18.shapeColor="brown";

var cardboard19 = createSprite(27,251,80,20);
cardboard19.shapeColor="brown";

var cardboard20 = createSprite(104,125,20,80);
cardboard20.shapeColor="brown";

var cardboard21 = createSprite(260,216,20,80);
cardboard21.shapeColor="brown";

var cardboard22 = createSprite(230,300,80,20);
cardboard22.shapeColor="brown";

var pallavi=createSprite(15,35,20,20);
pallavi.shapeColor="pink";

var puppy=createSprite(360,360,20,20);
puppy.shapeColor="black";


function draw() {
  background("green");
  
  fill("black");
  textSize(20);
  text("Pallavi",14,18);
  
  
  text("Puppy",330,340);
  
pallavi.velocityX=0;
pallavi.velocityY=0;

if ( pallavi.bounce(puppy))  
{
  textSize(40);
  fill("blue");
  text("You Win", 200,200);
playSound("assets/category_achievements/vibrant_virtcal_achievment.mp3");

    
  }


if (keyDown("UP_ARROW")) {
  
pallavi.velocityX=0;
pallavi.velocityY=-4;
}
if (keyDown(DOWN_ARROW)) {
  
pallavi.velocityX=0;
pallavi.velocityY=4;
}
if (keyDown(LEFT_ARROW)) {
  
pallavi.velocityX=-4;
pallavi.velocityY=0;
}
if (keyDown(RIGHT_ARROW)) {
  
pallavi.velocityX=4;
pallavi.velocityY=0;
}

pallavi.bounceOff(cardboard1);
pallavi.bounceOff(cardboard2);
pallavi.bounceOff(cardboard3);
pallavi.bounceOff(cardboard4);
pallavi.bounceOff(cardboard5);
pallavi.bounceOff(cardboard6);
pallavi.bounceOff(cardboard7);
pallavi.bounceOff(cardboard8);
pallavi.bounceOff(cardboard9);
pallavi.bounceOff(cardboard10);
pallavi.bounceOff(cardboard11);
pallavi.bounceOff(cardboard12);
pallavi.bounceOff(cardboard13);
pallavi.bounceOff(cardboard14);
pallavi.bounceOff(cardboard15);
pallavi.bounceOff(cardboard16);
pallavi.bounceOff(cardboard17);
pallavi.bounceOff(cardboard18);
pallavi.bounceOff(cardboard19);
pallavi.bounceOff(cardboard20);
pallavi.bounceOff(cardboard21);
pallavi.bounceOff(cardboard22);

pallavi.collide(puppy);




createEdgeSprites();
pallavi.bounceOff(edges);

  
  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
