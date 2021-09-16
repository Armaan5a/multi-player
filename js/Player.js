class Player {

     constructor(){
        this.index = null
        this.distance = 0
        this.name=null
        this.rank=null
     }

getCount(){
  var plcref =database.ref('playerCount')
plcref.on('value',(data)=>{
    playerCount=data.val()
})
}
updateCount(count){

    database.ref('/').update({
        playerCount:count,
        finishedPlayers:0
    })
}

update(){
    var plIndex= "players/player"+this.index    
    database.ref(plIndex).update({
        name:this.name,
        distance:this.distance
    })
}

getInfo(){

        var plInfo = database.ref('players')
        plInfo.on("value",(data)=>{
            allPlayers=data.val()
        })
    
    }

getFP()
{
var finish = database.ref('finishedPlayers')
     finish.on('value',(data)=>{
          this.rank=data.val()
     })
}

static updateFP(count)
{
    database.ref('/').update({
      finishedPlayers:count
    })
}
}

