var dogimg,dogeatingimg,dog;
var dogfood = 100;
function preload()
{
dogimg = loadImage("images/dogimg.png");
dogeatingimg = loadImage("images/dogimg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(800, 700);
  dog = createSprite(410,450,50,50);
  dog.addImage("dog",dogimg)
  dog.scale = 0.2;
}


function draw() {
  background(250,200,0);
  drawSprites();
  textSize(30);
  fill(0,100,50);
  if(keyDown(UP_ARROW)&&dogfood > 0){
  dogfood = dogfood -1;
  dog.addImage("dog",dogeatingimg);
  }
  if(dogfood == 0){
  text("dog ded" ,350,450);
  dog.x = 1000;
  dog.y = 1000;
  }
  text("food = " + dogfood , 350,350);

}
/*function writePosition(neverenough){
  //.set() is used to set the values in database 
  database.ref('dog').set({
  food : neverenough,
  })
}

function readPosition(data){
  var dogfood = database('value',dog);
  dog = data.val();//.val() to read the value 
  
}*/
