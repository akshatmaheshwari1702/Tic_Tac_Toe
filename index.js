player1_turn = true ;

game_is_on = true ;

function gameWon(player_won){

    if ((document.getElementById("p1").innerHTML == document.getElementById("p4").innerHTML && document.getElementById("p4").innerHTML == document.getElementById("p7").innerHTML) || 
    (document.getElementById("p2").innerHTML == document.getElementById("p5").innerHTML && document.getElementById("p5").innerHTML == document.getElementById("p8").innerHTML) || 
    (document.getElementById("p3").innerHTML == document.getElementById("p6").innerHTML && document.getElementById("p5").innerHTML == document.getElementById("p8").innerHTML) ||
    (document.getElementById("p3").innerHTML == document.getElementById("p6").innerHTML && document.getElementById("p6").innerHTML == document.getElementById("p9").innerHTML) ||
    (document.getElementById("p1").innerHTML == document.getElementById("p2").innerHTML && document.getElementById("p2").innerHTML == document.getElementById("p3").innerHTML) ||
    (document.getElementById("p4").innerHTML == document.getElementById("p5").innerHTML && document.getElementById("p5").innerHTML == document.getElementById("p6").innerHTML) ||
    (document.getElementById("p7").innerHTML == document.getElementById("p8").innerHTML && document.getElementById("p8").innerHTML == document.getElementById("p9").innerHTML) ||
    (document.getElementById("p1").innerHTML == document.getElementById("p5").innerHTML && document.getElementById("p5").innerHTML == document.getElementById("p9").innerHTML) ||
    (document.getElementById("p3").innerHTML == document.getElementById("p5").innerHTML && document.getElementById("p5").innerHTML == document.getElementById("p7").innerHTML)){

        console.log("someone won the game") ;
        game_is_on = false ;
        
            alert("Congratulations ...... "+ player_won +" Won the game !!!") ;
           
        

    }
}

function boxClicked(position){
    
    if (game_is_on){
        if (player1_turn){
            // document.getElementById("turn2").style.visibility = "hidden" ;
            document.getElementById(position).innerHTML = "X" ;
            player1_turn = false ;
            document.getElementById(position).style.backgroundColor = "#ff9000" ;
            document.getElementById("turn2").style.visibility = "visible"
            document.getElementById("turn1").style.visibility = "hidden" ;
            gameWon("Player 1") ;
        }else{
            // document.getElementById("turn1").style.visibility = "hidden" ;
            document.getElementById(position).innerHTML = "O" ;
            player1_turn = true ;
            document.getElementById(position).style.backgroundColor = "#89c639" ;
            document.getElementById("turn1").style.visibility = "visible"
            document.getElementById("turn2").style.visibility = "hidden" ;
            gameWon("Player 2") ;
        }
    }
    
}

(function(){
    if (player1_turn){
        document.getElementById("turn2").style.visibility = "hidden" ;
    }
})() ;
