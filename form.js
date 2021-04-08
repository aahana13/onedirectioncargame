class Form{
	constructor(){
this.input  = createInput("name")
this.button = createButton("start")
	}

	hide(){
		
		this.button.hide();
		this.input.hide();
		
	  }
	display(){
		var title = createElement('h2')
		title.html("The coolCar game")
        title.position(300,50)
		this.input.position (80,100)
		this.button.position(80,200)



		this.button.mousePressed( ()=>{
			this.input.hide()
			this.button.hide()
			player.name=this.input.value()
			playerCount = playerCount + 1
            player.index=playerCount
player.updateCount( playerCount )
player.update() 
			var greeting = createElement('h3')
		greeting.html("hello +plauer.name")
        greeting.position(300,50)



			
		})
	}
}
