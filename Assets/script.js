var remainingTime = 75;

var penaltyTime = 10;

var score = 0;

var correctAnswerPoints = 1;

var currentQuestion = 0;

var  endScoreMsg;

$(document).ready(function() {

    $("#start-bt").click(function() {
        startQuiz();
    })

    //This is the stuff we want jQuery to do when it's done loading

    //Display the first question on the HTML

    

    // for (var i = 0; i < questions.length ; i++) {

    //     var questionContainer = $('<div class="question"></div>');

    //     var title = $('<div class="title"></div>');
    //     title.text(questions[i].title);

    //     questionContainer.append(title);

    //     var choicesWrapper = $('<div class="choices-wrapper"></div>');

    //     var firstChoice = $('<div class="choice"></div>');
    //     firstChoice.text(questions[i].choices[0]);
    //     choicesWrapper.append(firstChoice);

    //     var secondChoice = $('<div class="choice"></div>')
    //     secondChoice.text(questions[i].choices[1]);
    //     choicesWrapper.append(secondChoice);

    //     var thirdChoice = $('<div class="choice"></div>')
    //     thirdChoice.text(questions[i].choices[2]);
    //     choicesWrapper.append(thirdChoice);

    //     var fourthChoice = $('<div class="choice"></div>')
    //     fourthChoice.text(questions[i].choices[1]);
    //     choicesWrapper.append(fourthChoice);

    //     questionContainer.append(choicesWrapper);

    //     var ansButton = $('<button qs="' + i + '" type="button" class="btn btn-primary answer-reveal" data-toggle="button" aria-pressed="false" style="background-color: indigo; border-color: indigo; ;">Show Answer</button>');
        
    //     ansButton.click(function(e) {

    //         var questionReference = parseInt($(e.target).attr("qs"));

    //         console.log(questions[questionReference].answer);

    //         $(".answer:eq(" + questionReference + ")").text(questions[questionReference].answer);

    //     });

    //     questionContainer.append(ansButton);
    //     questionContainer.append($('<div class="answer"></div>'));

    //     $("#root").append(questionContainer);
    // }

});

function showQuestion() {
    var questionContainer = $('<div class="question"></div>');

        var title = $('<div class="title"></div>');
        title.text(questions[currentQuestion].title);

        questionContainer.append(title);

        var choicesWrapper = $('<div class="choices-wrapper"></div>');

        var firstChoice = $('<button onclick="answerQuestion(0)" type="button" class="btn btn-primary choice" data-toggle="button" aria-pressed="false" style="background-color: indigo; border-color: indigo; ;"></button>');
        firstChoice.text(questions[currentQuestion].choices[0]);
        choicesWrapper.append(firstChoice);

        var secondChoice = $('<button onclick="answerQuestion(1)" type="button" class="btn btn-primary choice" data-toggle="button" aria-pressed="false" style="background-color: indigo; border-color: indigo; ;"></button>')
        secondChoice.text(questions[currentQuestion].choices[1]);
        choicesWrapper.append(secondChoice);

        var thirdChoice = $('<button onclick="answerQuestion(2)" type="button" class="btn btn-primary choice" data-toggle="button" aria-pressed="false" style="background-color: indigo; border-color: indigo; ;"></button>')
        thirdChoice.text(questions[currentQuestion].choices[2]);
        choicesWrapper.append(thirdChoice);

        var fourthChoice = $('<button onclick="answerQuestion(3)" type="button" class="btn btn-primary choice" data-toggle="button" aria-pressed="false" style="background-color: indigo; border-color: indigo; ;"></button>')
        fourthChoice.text(questions[currentQuestion].choices[3]);
        choicesWrapper.append(fourthChoice);

        questionContainer.append(choicesWrapper);

        // var correctAnswerMsg = $('<div class="answerMsg"></div>');
        // correctAnswerMsg.text("Correct!");

        // questionContainer.append(correctAnswerMsg);

        $("#root").append(questionContainer);
}

function startQuiz() {
    
    $("#start-quiz-message").remove();
    setInterval(tickTimer, 1000);
    showQuestion(); 
    // $(".answerMsg").remove();
    




    //Start the time
    //Show the first question

}

function tickTimer() {
    if (remainingTime > 0) {
        remainingTime--;
    $("#timer").text(remainingTime);
    }
    else {
        // End game
    endScoreMsg.text("Your score is = " + remainingTime);

        
    }

}

function answerQuestion(selectedAnswer) {

    var selectedAnswerText = questions[currentQuestion].choices[selectedAnswer];


    if (selectedAnswerText === questions[currentQuestion].answer){ 
        // $(".answerMsg").text(correctAnswerMsg);
        console.log("correct");
        currentQuestion++
        $(".question").remove();
        showQuestion(); 
    }
    else {
        remainingTime-=penaltyTime
        if (remainingTime <= 0) {
            remainingTime= 0
            endScoreMsg
            // End game quote
        }
        else {
        console.log("incorrect");
        }
        $("#timer").text(remainingTime);
    }
}


