function play() {
   //this sets the highest number possible at 6 for die1
    var die1 = Math.ceil(Math.random() * 6);
    //this sets the highest number possible at 6 for die2
    var die2 = Math.ceil(Math.random() * 6);
//this is the variable for the sum of die1 and die 2
    var sum =die1+die2;
//this displays the results of die1 in the HTML
    document.getElementById("die1Res").innerHTML = "die1 =" + die1
    //this displays the results of die2 in the HTML
    document.getElementById("die2Res").innerHTML = "die2 =" + die2
    //this displays the results of the sum in the HTML
    document.getElementById("sumRes").innerHTML = "sum =" +sum

    //this line is stating the conditional statement of either a sum of 7 or 11, you lose
    if (sum == 7 || sum == 11) {
        //this line displays the final results in the HTML if you lose
        document.getElementById("finalRes").innerHTML = "Craps - YOU LOSE";
    }
    //this line is stating the conditional statement that if die1 and die2 are the same you have doubles
    else if (die1==die2 && die1 % 2 == 0) {
        //this line displays the final results in the HTML for doubles
        document.getElementById("finalRes").innerHTML = "Doubles - YOU WIN";
    } 
    //this line is stating the conditional statement that if you do not have either a 7, 11 or doubles you do not win or lose to try again
    else {

        document.getElementById("finalRes").innerHTML = "Neither win nor lose - TRY AGAIN";
    
    }
}