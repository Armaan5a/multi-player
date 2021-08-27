var hypnoticBall, database;
var position;
var form,player,game
var gameState=0
var playerCount

function setup(){
  database = firebase.database();
    
  game= new Game()
 game.getState()
  game.start()

}

function draw(){
  if(playerCount===4){
  game.update(1);
  }
  if(gameState===1)
{game.play()
}
}
