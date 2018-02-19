$(document).ready(function() {

    // Make our variables global to the runtime of our application
    var random;
    var firstCrystal;
    var secondCrystal;
    var thirdCrystal;
    var fourthCrystal;
    var total;
    var wins = 0;
    var losses = 0;


    // Use a function to initialize our game, and reset it when user wins or loses.
    var initializeGame = function() {
        total = 0;
        // Dump the total into our total div              
        $("#total").text(total);

        // Generate a random number between 19-120
        random = Math.floor(Math.random() * (120 - 19) + 1) + 19;
        // Dump the random number into our randomNumber div
        $("#randomNumber").text(random);

        //Generate random values of crystals between 1-12
        firstCrystal = Math.floor(Math.random() * 12) + 1;
        secondCrystal = Math.floor(Math.random() * 12) + 1;
        thirdCrystal = Math.floor(Math.random() * 12) + 1;
        fourthCrystal = Math.floor(Math.random() * 12) + 1;
    }

    //Check if player has won or lost
    var checkStatus = function(){
        if (total === random){
            wins++;
            $("#wins").text(wins);
            initializeGame();
        }
        else if (total > random) {
            losses++;
            $("#losses").text(losses);
            initializeGame();
        }
    }


    // Add an on click listener to crystal
    $("#img1").on("click", function() {
        
        //Add hidden value assigned to crystal to total
        total += firstCrystal;
        //Update total displayed in total div
        $("#total").text(total);

        //Call checkStatus to see if player has won or lost yet
        checkStatus();

    });

    // Add an on click listener to crystal
    $("#img2").on("click", function() {
        
        //Add hidden value assigned to crystal to total
        total += secondCrystal;
        //Update total displayed in total div
        $("#total").text(total);

        checkStatus();

    });

    // Add an on click listener to crystal
    $("#img3").on("click", function() {
        
        //Add hidden value assigned to crystal to total
        total += thirdCrystal;
        //Update total displayed in total div
        $("#total").text(total);

        //Update total displayed in total div
        checkStatus();

    });

    // Add an on click listener to crystal
    $("#img4").on("click", function() {
        
        //Add hidden value assigned to crystal to total
        total += fourthCrystal;
        //Update total displayed in total div
        $("#total").text(total);

        //Update total displayed in total div
        checkStatus();

    });

    $(".container").hide();

    $("button").on("click", function() {
        
        //When button is pressed, show game play container
        $("button").hide();
        $("p").hide();
        $(".container").show().css("margin-top", "0");
        $(".jumbotron").css("padding-bottom", "0");

        // Call initializeGame so we can set the state of our app
        initializeGame();

    });

});