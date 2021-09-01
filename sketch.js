var hypnoticBall, database;
var position;
var form,player,game
var gameState=0
var playerCount,allPlayers

function setup(){
  database = firebase.database();
    
  game= new Game()

 game.getState()
  game.start()

}

function draw(){
  background(255)
  if(playerCount===4){
  game.update(1);
  }
  if(gameState===1)
{game.play()
}
}
