var listOfNumbers = ["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9","10","10","11","11","12","12","13","13","14","14","15","15"];
var listOfClasses = ["a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9"];
var secondGuess = false;
var wait = false;
var playerScore0 = 0;
var playerScore1 = 0;
var turn = 0;

$(function(){
  $(".player").html("<h2 class = 'player0'>Blue's Turn</h2>");



  shuffle(listOfNumbers);
  start();
  var num1 = "";
  var num2 = "";
  var class1 = "";
  var class2 = "";
  $(".hide").click(function(){
    if (secondGuess === false && wait === false && $(this).attr("class").includes("hide")){
      $(this).removeClass("hide");
      secondGuess = true;
      var classes = $(this).attr("class");
      var classes_arr  = classes.split(" ");
      class1 = classes_arr[1];
      num1 = listOfNumbers[listOfClasses.indexOf(class1)];
      console.log(num1);
    }
    else if (secondGuess === true && wait === false && $(this).attr("class").includes("hide")){
      $(this).removeClass("hide").delay(1000);
      secondGuess = false;
      var classes = $(this).attr("class");
      var classes_arr  = classes.split(" ");
      class2 = classes_arr[1];
      num2 = listOfNumbers[listOfClasses.indexOf(class2)];
      console.log(num2);
      if(num1 === num2 && class1 !== class2){
        console.log("Matched!");
        wait = true;
        sleepClear(class1, class2, turn);
      }
      else{
        console.log("no match")
        wait = true;
        if(turn === 0){
          turn = 1;
        }
        else{
          turn = 0;
        }
        sleepHide(class1, class2, turn);
      }
    }

  });

});



function check_winner(playerScore0, playerScore1){
  if((playerScore0 + playerScore1) === 15){
    if(playerScore0 > playerScore1){
      $(".player").html("<h2 class = 'player0'>Blue WINS!</h2>");
    }
    else{
      $(".player").html("<h2 class = 'player1'>Red WINS!</h2>");
    }
  }
};


function sleepClear(class1, class2) {
  setTimeout(function(){
    $("."+class1).html("");
    $("."+class2).html("");
    if (turn === 0){
      playerScore0 += 1;
      $("."+class1).addClass("player0");
      $("."+class2).addClass("player0");
    }
    else{
      playerScore1 += 1;
      $("."+class1).addClass("player1");
      $("."+class2).addClass("player1");
    }
    check_winner(playerScore0, playerScore1);
    wait = false;
  }, 1000);
};

function sleepHide(class1, class2) {
  setTimeout(function(){
    $("."+class1).addClass("hide");
    $("."+class2).addClass("hide");
    wait = false;
    if(turn === 0){
      $(".player").html("<h2 class = 'player0'>Blue's Turn</h2>");
    }
    else{
      $(".player").html("<h2 class = 'player1'>Red's Turn</h2>");
    }
  }, 1000);
};



function start(){
  var dict = [];
  for (var i = 0; i<listOfClasses.length;i++){
    var clas = "."+listOfClasses[i];
    $(clas).html("<h1>"+listOfNumbers[i]+"</h1>");
  }

};



function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
