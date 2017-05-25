
 $(document).ready(function() {

 	  $('#Questions').hide();
 	  $('#finishButton').hide();

   var number = 45;
	var intervalId;
	var correctGuesses = 0;
	var incorrectGuesses = 0;
	var unanswered = 0;
	var audio = new Audio("https://ia801503.us.archive.org/31/items/MandyMooreCandyMymp3converter/Mandy_Moore_-_Candy%5bMymp3converter%5d.mp3");

$("#startButton").on("click", run); 

 $("#finishButton").on("click", stop);


    function run() {
      intervalId = setInterval(decrement, 1000);
      $('#startButton').hide();
      $('#Questions').show();
      $('#finishButton').show();
      audio.play();
    }

    function decrement() {

      number--;

      $("#display").html("<h2>" + "Time remaining: " + number + " seconds" + "</h2>");

      if (number === 0) {

        stop();
        	
      }
    }

    function stop() {

      clearInterval(intervalId);

       $("#Questions").html("<h3>" + "SWEET SUCCESS!" + "</h3>" +
        	"<h2>" + "Correct Guesses: " + correctGuesses + "</h2>" +
        	"<h2>" + "Incorrect Guesses: " + incorrectGuesses + "</h2>" +
        	"<h2>" + "Unanswered: " + unanswered + "</h2>" );

        $('#finishButton').hide();
    }


    $(function () {
		$('input[name="test"]').on('click', function() {
    	if ($(this).val() == 'ans') {
        correctGuesses++;
    	} 
    else {
        incorrectGuesses++;
    }

    if ($(this).val() === undefined) {
    	unanswered++;
    }
})


})});

