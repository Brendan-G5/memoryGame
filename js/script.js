var listOfNumbers = ["0","0","1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9","10","10","11","11","12","12","13","14","14","15","15"];
var listOfClasses = ["a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9"];


$(function(){

  shuffle(listOfNumbers);
  var clas = '.'+listOfClasses[0];
  $(clas).html("<h1>"+listOfNumbers[0]+"</h1>");
  var dict = start();

  console.log(dict);




  $(".card").click(function(){
    console.log("Card Clicked");
    $(this).css("background-color","rgba(255, 0, 0, 0)");
  });




});



function start(){
  var dict = [];
  for (var i = 0; i<listOfClasses.length;i++){
    var clas = "."+listOfClasses[i];
    $(clas).html("<h1>"+listOfNumbers[i]+"</h1>");
    dict.push({
      key:   listOfClasses[i],
      value: listOfNumbers[i]
    });
  }
  return dict;
};



function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
