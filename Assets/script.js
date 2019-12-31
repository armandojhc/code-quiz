$(document).ready(function() {

    //This is the stuff we want jQuery to do when it's done loading

    //Display the first question on the HTML

    

    for (var i = 0; i < questions.length ; i++) {

        var questionContainer = $('<div class="question"></div>');

        var title = $('<div class="title"></div>');
        title.text(questions[i].title);

        questionContainer.append(title);

        var choicesWrapper = $('<div class="choices-wrapper"></div>');

        var firstChoice = $('<div class="choice"></div>');
        firstChoice.text(questions[i].choices[0]);
        choicesWrapper.append(firstChoice);

        var secondChoice = $('<div class="choice"></div>')
        secondChoice.text(questions[i].choices[1]);
        choicesWrapper.append(secondChoice);

        var thirdChoice = $('<div class="choice"></div>')
        thirdChoice.text(questions[i].choices[2]);
        choicesWrapper.append(thirdChoice);

        var fourthChoice = $('<div class="choice"></div>')
        fourthChoice.text(questions[i].choices[1]);
        choicesWrapper.append(fourthChoice);

        questionContainer.append(choicesWrapper);

        var ansButton = $('<button qs="' + i + '" class="answer-reveal">Show Answer</button>');

        ansButton.click(function(e) {

            var questionReference = parseInt($(e.target).attr("qs"));

            console.log(questions[questionReference].answer);

            $(".answer:eq(" + questionReference + ")").text(questions[questionReference].answer);

        });

        questionContainer.append(ansButton);
        questionContainer.append($('<div class="answer"></div>'));

        $("#root").append(questionContainer);
    }

});





// var numbers = [1,4,8,12,5,8];
// var myNumber = numbers[2];

// var person1 = {
//     name: "Ron",
//     age: 35,
//     livesIn: "OH"
// };

// var person2 = {
//     name: "Armando",
//     age: 28,
//     livesIn: "GA"
// };

// var people = [person1, person2];

// //OR

// var people = [
//     {
//         name: "Ron",
//         age: 35,
//         livesIn: "OH"
//     },
//     {
//         name: "Armando",
//         age: 28,
//         livesIn: "GA"
//     }

// ]