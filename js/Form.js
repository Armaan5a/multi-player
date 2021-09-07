class Form {
    constructor(){
      this.button=createButton("play")
      this.title =createElement('h2')
     // this.box = createInput("Name")
      this.hello = createElement("h1")
      this.button2 =createButton("dont press")
      this.box= createInput("").attribute("placeholder","Name")
    }

  hide(){
    this.box.hide()
    this.button.hide()
    this.hello.hide()
    this.title.hide()
  }
  
  display(){

    this.title.html("CAR RACING GAME")
    this.title.position(width/2-50,0)
   this.box.position(width/2-40,height/2-80)
 this.button.position(width/2+30,height/2)
 this.button2.position(width-100,20)
  this.button.mousePressed(()=>{
      this.box.hide()
      this.button.hide()

        player.name = this.box.value()
        
        playerCount+=1
        player.index= playerCount
        player.update()
        player.updateCount(playerCount)
                this.hello.html("hello"+player.name)
        this.hello.position(width/2-70,height/4)

  })

this.button2.mousePressed(()=>{
  player.updateCount(0)
  game.update(0)
} )
}
}