player1_name=localStorage.getItem("player1_name")
player2_name=localStorage.getItem("player2_name")
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+":"
document.getElementById("player2_name").innerHTML=player2_name+":"
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="qustion turn"+player1_name
document.getElementById("player_answer").innerHTML="answer turn"+player2_name
function send(){
    getWord=document.getElementById("word").value
    word=getWord.toLowerCase();
    console.log(word)

    charAt1=word.charAt(1)
    console.log(charAt1);

    length=Math.floor(word.length/2);
    charAt2=word.charAt(length)
    console.log(charAt2)

    length2=word.length-1
    charAt3=word.charAt(length2)
    console.log(charAt3);

    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);
    questionword="<h4 id='word_display'>Q."+remove_charAt3+"</h4>"
    inputbox="<br>answer:<input type='text' id='input_check_box'>"
    checkButton="<br> <br> <button onclick='check()' class='btn btn-info'>check </button>"
    row=questionword+inputbox+checkButton;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
questionturn="player1"
answerturn="player2"
function check(){
    get_anwser=document.getElementById("input_check_box").value
    answer=get_anwser.toLowerCase();
    console.log("answerinlowercase"+answer)
    if (answer==word) {
        if (answerturn=="player1") {
           player1_score=player1_score+1;
           doucument.getElementById("player1_score").innerHTML=player1_score 
        }
        else{
            player2_score=player2_score+1;
            doucument.getElementById("player2_score").innerHTML=player2_score
        }
    }
    if (questionturn=="player1") {
       questionturn="player2"
       doucument.getElementById("player_question").innerHTML="questionturn"+player2_name
    
    }
    else{
        questionturn="player1"
        doucument.getElementById("player_question").innerHTML="questionturn"+player1_name 
    }
    if (answerturn=="player1") {
        answerturn="player2"
        doucument.getElementById("player_answer").innerHTML="answerturn"+player2_name
     
     }
     else{
         answerturn="player1"
         doucument.getElementById("player_answer").innerHTML="awserturn"+player1_name 
     }
}