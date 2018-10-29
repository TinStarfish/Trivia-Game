var Data;
var request = new XMLHttpRequest();
 
loadData();
 
function loadData() {
  request.open('GET', 'https://opentdb.com/api.php?amount=1');
  request.onload = loadComplete;
  request.send();
}
 
function loadComplete(evt) {
  Data = JSON.parse(request.responseText);
  console.log(Data);
  
    document.getElementById('question').innerHTML =Data.results[0].question;
    document.getElementById('answer1').innerHTML ="1. " +  Data.results[0].correct_answer;
    document.getElementById('answer2').innerHTML ="2. " +  Data.results[0].incorrect_answers[0];
    document.getElementById('answer3').innerHTML ="3. " +  Data.results[0].incorrect_answers[1];
    document.getElementById('answer4').innerHTML ="4. " +  Data.results[0].incorrect_answers[2];

    
}