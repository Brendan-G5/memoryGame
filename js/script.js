var listOfNumbers = ["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9","10","10","11","11","12","12","13","13","14","14","15","15"];
var listOfClasses = ["a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9"];
var secondGuess = false;

$(function(){

  shuffle(listOfNumbers);
  start();

  $(".hide").click(function(){
    $(this).removeClass("hide");
    if (secondGuess === false){
      secondGuess = true;
      var classes = $(this).attr("class");
      var classes_arr  = classes.split(" ");
      var letter = classes_arr[1];
      var num = listOfNumbers[listOfClasses.indexOf(letter)];
      console.log(letter);
      console.log(num);
    }
    else{
      secondGuess = false;
    }


  });




});



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
