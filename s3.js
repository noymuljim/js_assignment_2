function  bestTeam( player1, player2 ) {
          if( typeof player1!=='object' && typeof player2!== "object"){
            return 'Invalid'
          }

const p1Score= player1.cardR+player1.cardY+player1.foul;
const p2Score= player2.cardR+player2.cardY+player2.foul;


if(p1Score>p2Score){
    return player2.name;
}
else if( p1Score<p2Score){
    return player1.name;
}
else{
    return "Tie"
}
         
}




console.log(bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 })
)