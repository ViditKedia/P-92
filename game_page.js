number1_name=localStorage.getItem("number1_name");
number2_name=localStorage.getItem("number2_name");
console.log(number1_name);
console.log(number2_name);

number1_score=0;
number2_score=0;

document.getElementById("number1_name").innerHTML=number1_name + ":";
document.getElementById("number2_name").innerHTML=number2_name + ":";

document.getElementById("number1_score").innerHTML= number1_score;
document.getElementById("number2_score").innerHTML= number2_score;

document.getElementById("number_question").innerHTML = "Question Turn-" + number1_name;
document.getElementById("number_answer").innerHTML = "Answer Turn - " +  number_name;

function send() {



    question_word = "<h4 id='word_display'> </h4>"; 
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row = question_word + input_box + check_button ;
     document.getElementById("output").innerHTML = row; 
     document.getElementById("word").value = "";
}

question_turn="player1";
answer_turn="player2";

function check() {
    get_answer=document.getElementById("input_check_box").value;
   answer= get_answer.toLowerCase();
   console.log=("Answer in Lowercase" + answer);

   if (answer== word) {
       if (answer_turn== "player1") {
        number1_score=number1_score + 1; 
         document.getElementById("player1_score").innerHTML=player1_score;
       }
       else{
        number2_score=number2_score + 1; 
        document.getElementById("number2_score").innerHTML=number2_score;
       }
   }

   if (question_turn=="player1") {
    
      question_turn="player2";
       document.getElementById("player_question").innerHTML="Question turn = "+ number2_name;
   }
   else{
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question turn = "+ number1_name;  
   }

   if 
   (answer_turn=="player1") {
      answer_turn="player2";
      document.getElementById("player_answer").innerHTML="Answer Turn = " + number2_name;
   }

   else{
    answer_turn="player1";
    document.getElementById("player_answer").innerHTML="Answer Turn = " + number1_name;
   }

   document.getElementById("output").innerHTML= "";
}
