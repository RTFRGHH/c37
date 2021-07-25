class Game{
           
constructor(){} 
getState(){
    var gr=database.ref('gameState')
    gr.on("value",function(data){
        gameState=data.val()

    })
}

update(state){
    database.ref('/').update({
        gameState:state
    })
}


async start(){
    if(gameState===0)
    {
        player=new Player();
        var pr=await database.ref('playerCount').once("value")
        if(pr.exists()){
            playerCount=pr.val()
            player.getCount()
        }
    
        form=new Form();
        form.display();

    }

}
 play(){
     form.hide()
     textSize(30)
     text("GameStart",120,100)
     Player.getPlayerInfo()
     if(allPlayers!==undefined){
         var displayPosition=130;
         for(var plr in allPlayers){

         
         if(plr==="player"+player.index)
        fill("red")
        else
        fill("black")
         
         displayPosition+=20
         textSize(15)
         text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
         }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50
            player.update()
        }
 }
 



}