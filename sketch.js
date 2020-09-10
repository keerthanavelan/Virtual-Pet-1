var dogImg, happyDog, database, foodS, foodStock, dog;
// 
function preload()
{
  dogImg = loadImage('Dog.png');
  happyDog = loadImage('happydog.png');
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref("pet/food");
  foodStock.on("value", readStock)
  dog = createSprite(250,250)
  dog.addImage(dogImg)
  dog.scale = 0.3
  
  console.log("Is there a problem in sketch.js:16?")
  
  console.log("NP");
  
  
}

function draw() {  
  background(64, 224, 208);
  fill("white");
  textSize(18);
  text("Press the up arrow key to feed the dog", 100,50);
  if (keyWentUp(UP_ARROW)){
    writeStock(foodStock);
    dog.addImage(happyDog);

  }
  drawSprites();
  //add styles here
  
  //readStock();
  //writeStock();
}

function readStock(data){
  foodStock = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food : x
  })
}
