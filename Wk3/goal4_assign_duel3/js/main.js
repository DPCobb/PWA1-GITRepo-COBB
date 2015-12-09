/*  Daniel Cobb
    12/09/2015
    Develop Duel #3
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");
    //Get html elements and assign variable
    var btn = document.getElementById('fightbutton');
    var player1 = document.getElementById('spiderman');
    var player2 = document.getElementById('batman');

    //Player one and two objects: name, damage, health
    var playerOne={
        name:"Spiderman",
        damage:20,
        health:100
    };
    var playerTwo={
        name:"Batman",
        damage:20,
        health:100
    };

    //Add fight button event listener
    btn.addEventListener("click", fightAction);

    function fightAction(){
        fight();
    }

    //initiate round
    var round=0; // Set the round number to 0

    function fight(){   // Start the FUNCTION fight()
        // ALERT players of their name, health, and display the start option
        alert(playerOne.name+":"+playerOne.health+"  *START*  "+playerTwo.name+":"+playerTwo.health);
        for (var i = 0; i < 10; i++) // i is equal to zero and if i is less than ten than add 1
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne.damage * .5; // Compute damage dealt to players
            var minDamage2 = playerTwo.damage * .5;
            var f1 = Math.floor(Math.random()*(playerOne.damage-minDamage1)+minDamage1); // Set the amount of damage done to each player
            var f2 = Math.floor(Math.random()*(playerTwo.damage-minDamage2)+minDamage2);

            //inflict damage
            playerOne.health-=f1; // Set players new health to health minus damage
            playerTwo.health-=f2;

            console.log(playerOne.name + ": " + playerOne.health + " " + playerTwo.name + ":" + playerTwo.health);  // log the players new health level

            //check for victor
            var result = winnerCheck(); // Set results equal to result of winnerCheck
            console.log(result);    // Log winner results
            if (result==="no winner") // IF there is no winner then...
            {
                round++; // Add one to the total rounds
                // ALERT players of new health and round number
                alert(playerOne.name+":"+playerOne.health+"  *ROUND "+round+" OVER"+"*  "+playerTwo.name+":"+playerTwo.health);

            } else{ // If their is a winner...
                alert(result); // ALERT winner message
                break; // End round counter
            };

          };
    };

    function winnerCheck(){
        var result="no winner"; // Set result to no winner
        if (playerOne.health<1 && playerTwo.health<1) // Are both players health less than 1?
        {
            result = "You Both Die"; // Set result to you both die
        } else if(playerOne.health<1){ // If just player 1 has health less than 1
            result =playerTwo.name+" WINS!!!" // Result is set to player two winning
        } else if (playerTwo.health<1) // If player 2 has health less than 1
        {
            result = playerOne.name+" WINS!!!" // Result is set to player one winning
        };
       return result; //Return the value of result
    };

    /*******  The program gets started below *******/
    fight();

})();
