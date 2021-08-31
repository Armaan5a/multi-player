class Form {
    constructor(){
      this.button=createButton("play")
      this.title =createElement('h2')
      this.box = createInput("Name")
      this.hello = createElement("h1")

    }

  hide(){
    this.box.hide()
    this.button.hide()
    this.hello.hide()
  }
  
  display(){

    this.title.html("CAR RACING GAME")
    this.title.position(130,0)
   this.box.position(130,160)
 this.button.position(250,200)
  this.button.mousePressed(()=>{
      this.box.hide()
      this.button.hide()

        player.name = this.box.value()
        
        playerCount+=1
        player.index= playerCount
        player.update()
        player.updateCount(playerCount)
                this.hello.html("hello"+player.name)
        this.hello.position(130,160)

})

}  
}