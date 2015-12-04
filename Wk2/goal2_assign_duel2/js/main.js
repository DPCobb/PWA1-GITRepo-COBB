/*  Daniel Cobb
    12/04/2015
    Develop Duel #2
    Duel Fight Game - FINISHED
    Date: 4/09/13
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //Player one and two: name, damage, health
    var playerOne = [
        Name = "Spiderman",
        Damage = 20,
        Health = 100
    ]
    var playerTwo = [
        Name = "Batman",
        Damage = 20,
        Health = 100
    ]

    //initiate round
    var round=0; // Set the round number to 0

    function fight(){   // Start the FUNCTION fight()
        // ALERT players of their name, health, and display the start option
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);
        for (var i = 0; i < 10; i++) // i is equal to zero and if i is less than ten than add 1
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5; // Compute damage dealt to players
            var minDamage2 = playerTwo[1] * .5;
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1); // Set the amount of damage done to each player
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            //inflict damage
            playerOne[2]-=f1; // Set players new health to health minus damage
            playerTwo[2]-=f2;

            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]);  // log the players new health level

            //check for victor
            var result = winnerCheck(); // Set results equal to result of winnerCheck
            console.log(result);    // Log winner results
            if (result==="no winner") // IF there is no winner then...
            {
                round++; // Add one to the total rounds
                // ALERT players of new health and round number
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

            } else{ // If their is a winner...
                alert(result); // ALERT winner message
                break; // End round counter
            };

          };
    };

    function winnerCheck(){
        var result="no winner"; // Set result to no winner
        if (playerOneHealth<1 && playerTwoHealth<1) // Are both players health less than 1?
        {
            result = "You Both Die"; // Set result to you both die
        } else if(playerOneHealth<1){ // If just player 1 has health less than 1
            result =playerTwoName+" WINS!!!" // Result is set to player two winning
        } else if (playerTwoHealth<1) // If player 2 has health less than 1
        {
            result = playerOneName+" WINS!!!" // Result is set to player one winning
        };
       return result; //Return the value of result
    };

    /*******  The program gets started below *******/
    fight();

})();
