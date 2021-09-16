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

   car1=createSprite(100,200)
   car1.addImage(c1)
   car2=createSprite(200,200)
   car2.addImage(c2)
   car3=createSprite(300,200)
   car3.addImage(c3)
   car4=createSprite(400,200)
   car4.addImage(c4)

   cars=[car1,car2,car3,car4]
}
play(){
    form.hide()
   
   player.getInfo()
   player.getFP()

  // console.log(allPlayers)
  
  
   if(allPlayers!=undefined){
    background("white")
    image(track,0,-height*4,width,height*5)
      // var ypos=130
       var x=0
       var y
       var index=0

       for(var plr in allPlayers){
         
        y= height-allPlayers[plr].distance
        index=index+1
        x=x+200

        cars[index-1].x=x
        cars[index-1].y=y

        if(index === player.index){
             fill("red")
             ellipse(x,y,60,60)
            //cars[index-1].shapeColor="green"
            camera.position.x=width/2
            camera.position.y= cars[index-1].y
        }
        
       }    
        /*   if(plr==="player"+player.index)
               fill("red")
           else
               fill("black")    
           
        textSize(15)
           text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,ypos)
           ypos+=30
       } */ 
   }
  
    if(keyIsDown(UP_ARROW)&& player.index!==null){
        player.distance += 50
        player.update()
        console.log(player.distance)
    }
        if(player.distance>2500){
            gameState=2   
              player.rank+=1
              Player.updateFP(player.rank)
              text("rank"+ player.rank,100,-2550)
        }
    
  drawSprites()
}

end(){
    console.log("game ended")
    console.log("rank"+ player.rank)
}

}   
