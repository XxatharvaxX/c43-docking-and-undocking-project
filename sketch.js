var spacecraft, spacecraftImg1, spacecraftImg2, spacecraftImg3, spacecraftImg4;
var bgImg;
var iss, issImg;
var satellite, satelliteImg;
var hasDocked = false;

function preload(){
  spacecraftImg1 = loadImage("image5.png");
  spacecraftImg2 = loadImage("image3.png");
  spacecraftImg3 = loadImage("image2.png");
  spacecraftImg4 = loadImage("image1.png");
  issImg = loadImage("image7.png");
  bgImg = loadImage("image6.jpg");
  satelliteImg = loadImage("image4.png");
}

function setup() {
  createCanvas(800,400);
  
  iss = createSprite(250,150);
  iss.addImage(issImg);
  iss.scale = 0.7;

  spacecraft = createSprite(250,300);
  spacecraft.addImage(spacecraftImg1);
  spacecraft.scale = 0.2;
}

function draw() {
  background(bgImg);  

  if(!hasDocked)
  {
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("LEFT_ARROW"))
    {
      spacecraft.addImage(spacecraftImg3);
      spacecraft.x -= 1;
    }

    if(keyDown("RIGHT_ARROW"))
    {
      spacecraft.addImage(spacecraftImg4);
      spacecraft.x += 1;
    }

    if(keyDown("DOWN_ARROW"))
    {
      spacecraft.addImage(spacecraftImg2);
    }

    if(keyDown("UP_ARROW"))
    {
      spacecraft.y -= 1;
    }
  }

  if(spacecraft.y <= (iss.y + 70) && spacecraft.x <= (iss.x - 10))
  {
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful!",200,300);
  }

  drawSprites();
}