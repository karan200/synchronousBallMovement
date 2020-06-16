var canvas,backgroundImage;
var gameState = 0;
var playerCount;
var database;
var player,form,game; 

function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
//  createSprite(250,250,10,10);

}

function draw(){
  background("white");
  
}