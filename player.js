class Player{
    constructor (){
        this.index=null
	this.distance=0;
	this.name=null
	}

getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })

}
updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

update(){
	var playerIn='players/player '+ this.index
    database.ref(playerIn).set({
		name:this.name, 
		distance:this.distance
    })
    
    
}
 static getPlayerInfo(){
var playersRef = database.ref('players');
playersRef.on("value",(data)=>{
    allPlayers = data.val();           

})
}

}