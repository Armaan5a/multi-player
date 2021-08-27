class Player {

     constructor(){

     }

getCount(){
  var plcref =database.ref('playerCount')
plcref.on('value',(data)=>{
    playerCount=data.val()
})
}
updateCount(count){

    database.ref('/').update({
        playerCount:count
    })
}



}