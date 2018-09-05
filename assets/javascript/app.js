var time = 20;
var intervalId = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var arrayFinder = 0;


var question01 = {
	question: "What car manufactuerer was supposed to be sold to Ford in 1963?",
	answers: ["Mercury", "Ferrari", "Lincoln", "Aston Martin"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Ferrari",
	image: "assets/images/enzo.jpg"
};
var question02 = {
	question: "What was the only color the Model T was available in?",
	answers: ["Black", "White", "Grey", "Blue"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Black",
	image: "assets/images/modelt.jpg"
};
var question03 = {
	question: "Which car manufactuerer started out making tractors?",
	answers: ["Porsche", "Ford", "Chevrolet", "Lamborghini"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "Lamborghini",
	image: "assets/images/lambotractor.jpg"
};
var question04 = {
	question: "Which car manufactuerer started out working for VW?",
	answers: ["Audi", "BMW", "Porsche", "Mercedes Benz"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Porsche",
	image: "assets/images/ferry.jpg"
};
var question05 = {
	question: "Which car manufacteurer has more 24 Hours of LeMans victories than any other?",
	answers: ["Porsche", "Ferrari", "Ford", "Lamborghini"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Porsche",
	image: "assets/images/917.jpg"
};
var question06 = {
	question: "Which NASCAR driver has the most Championships?",
	answers: ["Dale Earnhardt Sr.", "Richard Petty", "Jimmie Johnson", "All of the above"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "All of the above",
	image: "assets/images/jimmiejohnson.jpg"
};
var question07 = {
	question: "Which driver has won the most F1 World Championships?",
	answers: ["Ayrton Senna", "Michael Schumacher", "Sebastian Vettel", "Lewis Hamilton"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Michael Schumacher",
	image: "assets/images/michael.jpg"
};
var question08 = {
	question: "What is the most expensive car ever sold at auciton?",
	answers: ["Porsche 550 Spyder", "Bugatti Chiron", "Ferrari 250 GTO", "Mercedes 300SL Gullwing"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Ferrari 250 GTO",
	image: "assets/images/250GTO.jpg"
};
var question09 = {
	question: "What is the longest racetrack in the world?",
	answers: ["Nardo Test Circuit", "Monza", "Nurburgring", "Spa-Francorchamps"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Nurburgring",
	image: "assets/images/nurburgring.jpg"
};
var question10 = {
	question: "The Ford GT40 gets its name because?",
	answers: ["It's 40 in. tall", "It's 40 in. wide", "It's 40 in. long", "It's 40 years old"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "It's 40 in. tall",
	image: "assets/images/gt40.jpeg"
};
var question11 = {
	question: "Which car manufactuerer has the most F1 Constructors Titles?",
	answers: ["McLaren", "Ferrari", "Williams", "Red Bull F1"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Ferrari",
	image: "assets/images/f2004.jpg"
};
var question12 = {
	question: "Which country is Bruce McLaren from?",
	answers: ["New Zealand", "Australia", "England", "Scotland"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "New Zealand",
	image: "assets/images/p1.jpg"
};
var question13 = {
	question: "The Bugatti Chiron has how many turbos?",
	answers: ["0", "1", "2", "4"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "4",
	image: "assets/images/chiron.jpg"
};
var question14 = {
	question: "A NHRA Top Fuel drag car produces how much horsepower?",
	answers: ["500", "800", "8000", "4000"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "8000",
	image: "assets/images/nhra.jpg"
};
var question15 = {
	question: "What is the first race of the NASCAR season?",
	answers: ["Daytona 500", "Monaco GP", "Indy 500", "Coca-Cola 600"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Daytona 500",
	image: "assets/images/daytona.jpg"
};
var question16 = {
	question: "Porsche was founded in which German city?",
	answers: ["Berlin", "Weissach", "Frankfurt", "Stuttgart"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "Stuttgart",
	image: "assets/images/porschebadge.jpeg"
};
var question17 = {
	question: "What is Mercedes Benz performance division?",
	answers: ["Maybach", "AMG", "Brabus", "RDB"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "AMG",
	image: "assets/images/amg.jpg"
};
var question18 = {
	question: "What is BMW's performace division?",
	answers: ["Alpina", "AC Schnitzer", "M", "Dinan"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "M",
	image: "assets/images/bmw.jpg"
};
var question19 = {
	question: "Pikes Peak Hill Climb takes place in which state?",
	answers: ["Washington", "Utah", "Colorado", "Montana"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Colorado",
	image: "assets/images/pikespeak.jpg"
};
var question20 = {
	question: "The 24 Hours of LeMans takes place in which country?",
	answers: ["France", "Belgium", "Austria", "Switzerland"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "France",
	image: "assets/images/lemans919.jpg"
};

var questionsArray = [question01, question02, question03, question04, question05, question06, question07, question08, question09, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20];

// Functions

	function start () {
		$(".content-div").empty();
		var startButton = $("<button>");
		startButton.text("Start");
		startButton.addClass("start btn btn-default answerBtn");
		$(".content-div").append(startButton);
	};

	function run() {
      intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
      time--;
      $(".timer-div").html("Time Remaining: " + time + " Seconds");
      if (time == 0) {
        if (arrayFinder < questionsArray.length-1) {
        	setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
        	solutionWrite(questionsArray[arrayFinder]);
	    	$(".question-div").html("Incorrect!");
        	stop();
        	unanswered++;
      	}
      	else if (arrayFinder < questionsArray.length) {
      		setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		solutionWrite(questionsArray[arrayFinder]);
	    	$(".question-div").html("Incorrect!");
        	stop();
        	unanswered++;
      	}
      };
    };

    function stop() {
      clearInterval(intervalId);
    };

	function questionWrite (obj) {
		time = 20;
		$(".timer-div").empty();
		$(".timer-div").html("Time Remaining: " + time + " Seconds");
		$(".question-div").empty();
		$(".content-div").empty();
		run ();
		$(".question-div").html(obj.question);
		for (var i = 0; i < obj.answers.length; i++) {
			var answerButton = $("<button>");
			answerButton.addClass("answer btn btn-default answerBtn");
			answerButton.text(obj.answers[i]);
			answerButton.attr("value", obj.values[i]);
			$(".content-div").append(answerButton);
			$(".content-div").append("<br>");
		};
	};

	function solutionWrite (obj) {
		$(".question-div").empty();
		$(".content-div").empty();
		$(".content-div").html("The correct answer was " + obj.correct + "<br>");
		var characterImage = $("<img>");
		characterImage.attr("height", "250");
		characterImage.attr("src", obj.image);
		characterImage.addClass("character")
		$(".content-div").append(characterImage);
		arrayFinder++;
	};

	function startWrite () {
		questionWrite(question01);
	};

	function answerSelect () {
		stop();
		if ($(this).attr("value") == "correct") {
			solutionWrite(questionsArray[arrayFinder]);
			$(".question-div").html("Correct!");
			correct++;
			if (arrayFinder < questionsArray.length) {
				setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
			}
			else if (arrayFinder < questionsArray.length+1) {
		        setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		}
		}
		else if ($(this).attr("value") == "incorrect") {
			solutionWrite(questionsArray[arrayFinder]);
			$(".question-div").html("Incorrect!");
			incorrect++;
			if (arrayFinder < questionsArray.length) {
				setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 2000);
			}
			else if (arrayFinder < questionsArray.length+1) {
		        setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 2000);
      		}
		}
	};

	function endWrite () {
		$(".question-div").empty();
		$(".content-div").empty();
		$(".question-div").html("Here's how you did!");
		$(".content-div").html("<p> Correct: " + correct + "</p>" + "<p> Incorrect: " + incorrect + "</p>" + "<p> Unanswered: " + unanswered + "</p>");
		var resetButton = $("<button>");
		resetButton.addClass("reset btn btn-default answerBtn");
		resetButton.text("Start Over?");
		$(".content-div").append(resetButton);
	}

	function resetClick () {
		arrayFinder = 0;
		incorrect = 0;
		correct = 0;
		unanswered = 0;
		startWrite();
	}

	$(document).on("click", ".start", startWrite);

	$(document).on("click", ".answer", answerSelect);

	$(document).on("click", ".reset", resetClick);
// Running Code

start();