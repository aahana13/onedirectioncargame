class Game{
    constructor(){

	} 
	getState(){
        var stateRef = database.ref('gameState');
        stateRef.on("value",(data)=>{
          gameState = data.val();
        })
    
    }
    updateState(State){
        database.ref('/').update({
          gameState: State
        });
      }
    
    

      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
	
      }

 play(){




 }

}







