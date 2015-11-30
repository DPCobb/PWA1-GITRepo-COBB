/*  Daniel Cobb
    11/30/2015
    Analyze Duel #1
    Duel Fight Game - FINISHED
    Date: 4/09/13
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";    //Set the first players name to Spiderman
    var playerTwoName = "Batman";   //Set the second players name to Batman

    //player damage
    var player1Damage = 20; //Set the maximum damage player one and two can deal per round to 20
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;  //Set both players initial health to 100
    var playerTwoHealth = 100;

    //initiate round
    var round=0; //Set the round number to 0

    function fight(){   //Start the FUNCTION fight()
        //ALERT players of their name, health, and display the start option
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++) // i is equal to zero and if i is less than ten than add 1
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; // Compute damage dealt to players
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); // Set the amount of damage done to each player
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1; //Set players new health to health minus damage
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);  //log the players new health level

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();
