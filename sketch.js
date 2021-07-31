
var background;
var snowsGroup,snowImage;
function preload(){
  snowImage = loadImage("snow4.webp")
 backgroundImage = loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
  background = createSprite(400,200,800,400);
  background.addImage(backgroundImage);
  background.scale = 1.6
  snowsGroup = createGroup(); 
  wall = createSprite(400,400,800,10);
  //wall.collide(snow);

}

function draw() {
  drawSprites();
  makeSnow();
}
function makeSnow() {
  //write code here to spawn the clouds
  if (frameCount % 40 === 0) {
    var snow = createSprite (0,0,40,10);
    snow.x = Math.round(random(0,800));
    snow.lifetime = 200;
    snow.addImage(snowImage);
    snow.scale = 0.1;
    snow.velocityY = 3;

    //add each cloud to the group
      
    snowsGroup.add(snow);

  }

}