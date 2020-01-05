var remainingTime = 75;

var penaltyTime = 10;

var score = 0;

var correctAnswerPoints = 1;

var currentQuestion = 0;

var  endScoreMsg;

var gameIsOver = false;

$(document).ready(function() {

    $("#start-bt").click(function() {
        startQuiz();
    })

   

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

// Added but not working 
function showEndGame () {
    var endGameMsg = $('<div class="endGameDiv"></div>');
    endGameMsg.text("Game Over!");
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
    if (gameIsOver === false) {
        if (remainingTime > 0) {
            remainingTime--;
        $("#timer").text(remainingTime);
        }
        else {
            $(".question").remove();
            gameIsOver=true;
            endQuiz();
            
        }
    }


}

function answerQuestion(selectedAnswer) {

    var selectedAnswerText = questions[currentQuestion].choices[selectedAnswer];



    if (selectedAnswerText === questions[currentQuestion].answer){ 
        // $(".answerMsg").text(correctAnswerMsg);
        console.log("correct");
        currentQuestion++
        $(".question").remove();
        if (questions.length === currentQuestion) {
            gameIsOver = true;
            endQuiz();

        } else {
            showQuestion();     
        }
        
    }
    else {
        remainingTime-=penaltyTime
        if (remainingTime <= 0) {
            remainingTime= 0
            gameIsOver=true;
            endQuiz();

        }
        else {
        console.log("incorrect");
        }
        $("#timer").text(remainingTime);
    }
}

function highestScorebutton() { 
    var initials= $(".initials").val();

    

    var newHighScore = {
        name: initials,
        score: remainingTime
    }

    var highScores = localStorage.getItem("highScores");

    if (highScores === null) {
        highScores = []
    } else {
        highScores = JSON.parse(highScores);
    }

    highScores.push(newHighScore);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    
}

function endQuiz() {
    var endGameMsg = $('<div class="endGameDiv"></div>');
    endGameMsg.html("Game Over!<br>Your score is: " + remainingTime + "<br>");

    var highestScorebutton= $('<button onclick="highestScorebutton()" type="button" class="btn btn-primary choice" data-toggle="button" aria-pressed="false" style="background-color: indigo; border-color: indigo; ;">Submit</button>')

    var textBox= $('<input type="text" class= "initials"/>')

    endGameMsg.append(highestScorebutton);
    endGameMsg.append(textBox);
    $("#root").append(endGameMsg);
}




