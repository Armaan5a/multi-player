class Game{
    constructor(){

    }

    getState(){
        var gstate = database.ref('gameState');
        gstate.on("value",function(data){
            gameState=data.val()
        })
    }
    
update(s){
    database.ref('/').update({
      gameState:s
               
    })
  
  
}

async start(){
   if(gameState===0){
      player = new Player()
       //   player.getCount()
       var ply=await database.ref('playerCount').once("value")
       if(ply.exists()){
           playerCount=ply.val()
           player.getCount()
       }
      
    form= new Form()
       form.display()
   }
}
play(){
    form.hide()
    textSize(30)
    text("hi",120,100)
   player.getInfo()
   console.log(allPlayers)
   if(allPlayers!=undefined){
       var ypos=130

       for(var plr in allPlayers){
           if(plr==="player"+player.index)
               fill("red")
           else
               fill("black")    
           
        textSize(15)
           text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,ypos)
           ypos+=30
       }
   }
  
    if(keyIsDown(UP_ARROW)){
        player.distance += 50
        player.update()
    }
}
}