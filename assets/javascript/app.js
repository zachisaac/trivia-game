//Javascript Car and Racing Trivia

//Which car manufactuerer was supposed to be sold to Ford in 1962 for 12m dollars?
var question01 = {
    question: "Which car manufactuerer was going to be sold to Ford in 1963?",
    choices: ["Mercury", "Ferrari", "Lincoln", "Aston Martin"],
    answer: "Ferrari",
    wrong: ["Mercury", "Lincoln", "Aston Martin"]
}; 

//The Model T was only available in which color?
var question02 = {
    question: "The Model T was only available in which color?",
    choices: ["White", "Grey", "Black", "Blue"],
    answer: "Black",
    wrong: ["White", "Grey", "Blue"],
};

//Which Manufacteurer started out making tractors?
var question03 = {
    question: "Which car manufactuerer started out making tractors?",
    choices: ["Lamborgini", "Porsche", "Ford", "Chevrolet"],
    answer: "Lamborghini",
    wrong: ["Porsche", "Ford", "Chevrolet"],
};

//Which car Manufacteurer started out working for VW?
var question04 = {
    question: "Which car manufacteurer got his start by working for VW?",
    choices: ["Audi", "BMW", "Mercedes Benz", "Porsche"],
    answer: "Porsche",
    wrong: ["Audi", "BMW", "Mercedes Benz"],
};

//Which car Manufacteurer has more 24 LeMans victories than any other?
var question05 = {
    question: "Which car manufactuerer has the most 24 Hour of LeMans victories?",
    choices: ["Porsche", "Ferrari", "Ford", "Lamborghini"],
    answer: "Porsche",
    wrong: ["Ferrari", "Ford", "Lamborghini"],
};

//Which driver has the most Formula 1 World Championships?
var question06 = {
    qustion: "Which driver has the most F1 World Championships?",
    choices: ["Mario Andretti", "Lewis Hamilton", "Michael Schumacher", "Ayrton Senna"],
    answer: "Michael Schumacher",
    wrong: ["Ayrton Senna", "Mario Andretti", "Lewis Hamilton"],
};

//Which NASCAR driver has the most championships?
var question07 = {
    question: "Which NASCAR driver has the most championships",
    choices: ["Dale Earnhardt", "Jimmie Johnson", "Richard Petty", "All of the above."],
    answer: "All of the above.",
    wrong: ["Dale Earnhardt", "Jimmie Johnson", "Richard Petty"],
}

//The most expensive car ever sold at auction was?
var question08 = {
    question: "What is the most expensive car ever sold at auction?",
    choices: ["Ferrari 250 GTO", "Porsche 550 Spyder", "Bugatti Chiron", "Mercedes 300SL Gullwing"],
    answer: "Ferrari 250 GTO",
    wrong: ["Porsche 550 Spyder", "Bugatti Chiron", "Mercedes 300SL Gullwing"],
}

//The longest race track in the world is call?
var question09 = {
    question: "What is the longest race track in the world?",
    choices: ["Nardo Test Circuit", "Monza", "Nurburgring", "Spa-Francorchamps"],
    answer: "Nurburgring",
    wrong: ["Spa-Francorchamps", "Monza", "Nardo Test Circuit"],
}

//The Ford GT40 get its name because it is...?
var question10 = {
    question: "The Ford GT40 gets it's name because?",
    choices: ["It is 40in wide.", "It is 40in long.", "It is 40 years old.", "It is 40in tall."],
    answer: "It is 40in tall.",
    wrong: ["It is 40in wide.", "It is 40in long.", "It is 40 years old."],
}

//Which Manufactuerer has the most Formula 1 World Championships?
var question11 = {
    question: "Which car manufactuerer has won the most F1 World Championships?",
    choices: ["McLaren", "Williams", "Red Bull F1", "Ferrari"],
    answer: "Ferrari",
    wrong: ["McLaren", "Williams", "Red Bull F1"],
}

//Bruce McLaren is from which country?
var question12 = {
    question: "Bruce McLaren, founder of McLaren is from what country?",
    choices: ["England", "Australia", "Scotland", "New Zealand"],
    answer: "New Zealand",
    wrong: ["England", "Australia", "Scotland"],
}

//The Bugatti Veyron has how many turbos?
var question13 = {
    question: "The Bugatti Veyron has how many turbos?",
    choices: ["2", "4", "1", "0"],
    answer: "4",
    wrong: ["2", "1", "0"],
}

//A NHRA Top Fuel drag car produces how much horsepower?
var question14 = {
    question: "A NHRA Top Fuel drag car produces how much horsepower?",
    choices: ["800", "500", "8,000", "4,000"],
    answer: "8,000",
    wrong: ["800", "500", "4,000"],
}

//What is the first race of the NASCAR season?
var question15 = {
    question: "What is the first race of the NASCAR season?",
    choices: ["Indy 500", "Daytona 500", "Monaco GP", "Coca-Cola 600"],
    answer: "Daytona 500",
    wrong: ["Indy 500", "Monaco GP", "Coca-Cola 600"],
}

//Porsche started in which German city?
var question16 = {
    question: "Porschce was started in which German city?",
    choices: ["Stuttgart", "Berlin", "Weissach", "Frankfurt"],
    answer: "Stuttgart",
    wrong: ["Berlin", "Weissach", "Frankfurt"],
}

//What is Mercedes performance division?
var question17 = {
    question: "What is the the name of Mercedes performance division?",
    choices: ["Maybach", "Sprinter", "BlueTec", "AMG"],
    answer: "AMG",
    wrong: ["Maybach", "Sprinter", "BlueTec"],
}

//What is BMW's performance division?
var question18 = {
    question: "What is the name of BMW's performance division?",
    choices: ["Alpina", "AC Schnitzer", "M", "Dinan"],
    answer: "M",
    wrong: ["Alpina", "AC Schnitzer", "Dinan"],
}

//The Pike Peak Hill Climb takes place in what state?
var question19 = {
    question: "The Pikes Peak Hill Climb take place in what state?",
    choices: ["Washington", "Colorado", "Montana", "Utah"],
    answer: "Colorado",
    wrong: ["Washington", "Montana", "Utah"],
}

//The 24 Hour of LeMans takes place in which country?
var question20 = {
    question: "The 24 of LeMans takes place in which country?",
    choices: ["France", "Belgium", "Austria", "Switzerland"],
    answer: "France",
    wrong: ["Belgium", "Austria", "Switzerland"],
}

//Right Answer
var rightAnswer;

//Wrong Answer
var wrongAnswer;

//Timer
var timer;

//Restart Game
var reset;