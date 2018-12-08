var Data;
var request = new XMLHttpRequest();

var correctAnswer;
 

loadData();
 
function loadData() {
    request.open('GET', 'https://opentdb.com/api.php?amount=10&type=multiple');
    request.onload = loadComplete;
    request.send();
    
}
 
function loadComplete(evt) {
    Data = JSON.parse(request.responseText);
    console.log(Data);
    document.getElementById('question').innerHTML =Data.results[0].question;
    correctAnswer = Data.results[0].correct_answer;
    
    randomizeFirstAnswer();
    
  
    
}

function AnswerQuestion(buttonLetter) {
    var incorrectLabel = document.getElementById('incorrect');
    
    if(buttonLetter=="A") {
        //console.log("selected A");
        if(document.getElementById('answer1').innerHTML==correctAnswer) {
            answeredCorrectly(); 
            
        } else {
            incorrectLabel.innerHTML="A is Incorrect.";
            
        }
        
    }
    if(buttonLetter=="B") {
        //console.log("selected B");
         if(document.getElementById('answer2').innerHTML==correctAnswer) {
             answeredCorrectly();
            
        } else {
            incorrectLabel.innerHTML="B is Incorrect.";
            
        }
        
    }
    if(buttonLetter=="C") {
        //console.log("selected C");
         if(document.getElementById('answer3').innerHTML==correctAnswer) {
             answeredCorrectly();
            
        } else {
            incorrectLabel.innerHTML="C is Incorrect.";
            
        }
        
    }
    if(buttonLetter=="D") {
        //console.log("selected D");
         if(document.getElementById('answer4').innerHTML==correctAnswer) {
             answeredCorrectly();
            
        } else {
            incorrectLabel.innerHTML="D is Incorrect.";
            
        }
        
    }
    
    
    
    
    
}

function answeredCorrectly() {
    console.log("Correct");
    document.cookie = "score=";
    
}

function randomizeFirstAnswer() {
    
    var randomPosition = Math.floor(Math.random()*4);
    console.log(randomPosition);
    
    if(randomPosition==0) {
        
        document.getElementById('answer1').innerHTML =Data.results[0].correct_answer;
        document.getElementById('answer2').innerHTML =Data.results[0].incorrect_answers[1];
        document.getElementById('answer3').innerHTML =Data.results[0].incorrect_answers[0];
        document.getElementById('answer4').innerHTML =Data.results[0].incorrect_answers[2];
        
    }
    if(randomPosition==1) {
        
        document.getElementById('answer1').innerHTML =Data.results[0].incorrect_answers[1];
        document.getElementById('answer2').innerHTML =Data.results[0].correct_answer;
        document.getElementById('answer3').innerHTML =Data.results[0].incorrect_answers[0];
        document.getElementById('answer4').innerHTML =Data.results[0].incorrect_answers[2];
        
    }
    if(randomPosition==2) {
        
        document.getElementById('answer1').innerHTML =Data.results[0].incorrect_answers[1];
        document.getElementById('answer2').innerHTML =Data.results[0].incorrect_answers[0];
        document.getElementById('answer3').innerHTML =Data.results[0].correct_answer;
        document.getElementById('answer4').innerHTML =Data.results[0].incorrect_answers[2];
        
    }
    if(randomPosition==3) {
        
        document.getElementById('answer1').innerHTML =Data.results[0].incorrect_answers[1];
        document.getElementById('answer2').innerHTML =Data.results[0].incorrect_answers[2];
        document.getElementById('answer3').innerHTML =Data.results[0].incorrect_answers[0];
        document.getElementById('answer4').innerHTML =Data.results[0].correct_answer;
        
    }
    
    
}