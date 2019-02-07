var score = 0;

$(".power1").click(function(){
  $(".power1").hide();
  $("#countdown").show(); 
});
$(".power2").click(function(){
  $(".power2").hide();
});
$(".power3").click(function(){
  $(".power3").hide();
});
$(".power4").click(function(){
  $(".power4").hide();
});
$(".power5").click(function(){
  $(".power5").hide();
  $(".next").fadeIn();
});
$(".restart").click(function(){
  $(".power").fadeIn();
  $(".levelone").text("collect 10 books in order to move onto the next level");
  $(".level1").text("Level 1: Malala");
  $(".next").fadeOut();
   $(".next2").fadeOut();
});

var timeleft = 30;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
  }
}, 1000);


    

$(".next").click(function(){
  $(".passion1").fadeIn();
  $(".passion2").fadeIn();
  $(".passion3").fadeIn();
  $(".passion4").fadeIn();
  $(".passion5").fadeIn();
  $(".passion6").fadeIn();
  $(".passion7").fadeIn();
  $(".passion8").fadeIn();
  $(".passion9").fadeIn();
  $(".passion10").fadeIn();
  $(".passion11").fadeIn();
  $(".passion12").fadeIn();
  $(".next").fadeOut();
  score=0;
  $(".score").text(score);
  $("#countdown").fadeOut();
  $("#countdown2").fadeIn();
  $(".level1").text("level 2: Michelle Obama");
  $(".levelone").text("Click and collect all the images of the girl using the jumprope to gain points and move onto the next level!");
});



$(".passion1").click(function(){
  $(".passion1").hide();
  $("#countdown2").show();
  
});
$(".passion2").click(function(){
  $(".passion2").hide();
});
$(".passion3").click(function(){
  $(".passion3").hide();
});
$(".passion4").click(function(){
  $(".passion4").hide();
});
$(".passion5").click(function(){
  $(".passion5").hide();
});
$(".passion6").click(function(){
  $(".passion6").hide();
});
$(".passion7").click(function(){
  $(".passion7").hide();
});
$(".passion8").click(function(){
  $(".passion8").hide();
});
$(".passion9").click(function(){
  $(".passion9").hide();
});
$(".passion10").click(function(){
  $(".passion10").hide();
});
$(".passion11").click(function(){
  $(".passion11").hide();
});
$(".passion12").click(function(){
  $(".passion12").hide();
  $(".next2").fadeIn();
});
$(".next2").click(function(){
    $(".next2").hide();
    $(".level1").text("Level 3: Ada Lovelace");
    $(".levelone").text("collect all the computers!");
    $(".computer1").fadeIn();
    $(".computer2").fadeIn();
    $(".computer3").fadeIn();
    $(".computer4").fadeIn();
    $(".computer5").fadeIn();
    $(".computer6").fadeIn();
    $(".computer7").fadeIn();
    $(".computer8").fadeIn();
    $(".computer9").fadeIn();
    $(".computer10").fadeIn();
    $(".computer11").fadeIn();
    $(".computer12").fadeIn();
    $(".computer13").fadeIn();
    $(".computer14").fadeIn();
    $(".computer15").fadeIn();
     score=0;
  $(".score").text(score);
});
$(".computer1").click(function(){
  $(".computer1").hide();
});
$(".computer2").click(function(){
  $(".computer2").hide();
});
$(".computer3").click(function(){
  $(".computer3").hide();
});
$(".computer4").click(function(){
  $(".computer4").hide();
});
$(".computer5").click(function(){
  $(".computer5").hide();
});
$(".computer6").click(function(){
  $(".computer6").hide();
});
$(".computer7").click(function(){
  $(".computer7").hide();
});
$(".computer8").click(function(){
  $(".computer8").hide();
});
$(".computer9").click(function(){
  $(".computer9").hide();
});
$(".computer10").click(function(){
  $(".computer10").hide();
});
$(".computer11").click(function(){
  $(".computer11").hide();
});
$(".computer12").click(function(){
  $(".computer12").hide();
});
$(".computer13").click(function(){
  $(".computer13").hide();
});
$(".computer14").click(function(){
  $(".computer14").hide();
});
$(".computer15").click(function(){
  $(".computer15").hide();
  $(".finish").fadeIn();
  $(".level1").text("CLICK FINISH TO GET TO THE FINAL STAGE AND THE BIG SURPRISE!");
});
$(".finish").click(function(){
  $(".level1").fadeOut();
  $(".finish").fadeOut();
  $(".restart").fadeOut();
  $(".levelone").text("ERROR");
   $("body").css("background-image","url('https://media.giphy.com/media/aEEwpc2rznY1W/giphy.gif')");
   $(".EXIT").fadeIn();
});
$(".EXIT").click(function(){
    $(".power1").fadeIn();
     $(".power2").fadeIn();
     $(".power3").fadeIn(); 
     $(".power4").fadeIn(); 
     $(".power5").fadeIn();
  $(".levelone").text("collect all books in order to move onto the next level");
  $(".next").fadeOut();
   $(".next2").fadeOut();
   $(".restart").fadeIn();
   $(".level1").fadeIn();
   $(".level1").text("Level 1: Malala");
   $(".EXIT").fadeOut();
   $("body").css("background-image","url('https://images4.alphacoders.com/574/574726.jpg')");
    score=0;
  $(".score").text(score);
});


$(".scoreable").click(function(){
    score = score + 2;
    $(".score").text(score);
});


    



     