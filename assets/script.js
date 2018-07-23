/*jslint es6*/
/*global
$
*/
$("document").ready(function () {
    
    var isGameRuning = false, newMsg;
    var score = $("#score");

    if (localStorage.getItem("user")) {
        newMsg = $("<naf-msg>");
        newMsg.attr("data-msg", 2);
        $("body").append(newMsg);
    } else {
        newMsg = $("<naf-msg>");
        newMsg.attr("data-msg", 1);
        $("body").append(newMsg);
    }

    $("#start").on("click", function () {
        startGame();
    });



    function startGame() {

        isGameRuning = true;

        var num = 60, timer;
        score.html('points: 0');
        timer = setInterval(function () {
            if (num) {
                num--;
                $("#timer").html(`Timer: ${num}s`)
            } else {
                clearInterval(interval);
                clearInterval(interval2);
                clearInterval(timer);
                finishGame();
            }
        }, 1000);

        var interval = setInterval(function(){  
             var a = parseInt(Math.random() * 40); 
             var b = parseInt(Math.random() * 300); 
             $("#boxGame" + a + " naf-monkey").animate({
                top: 0 + "%"
             }, 1000 ,function(){
               $("#boxGame"+a+" naf-monkey").delay(b).animate({
                    top:100 + "%" 
               },1000)
            });
        },1300);

        var interval2 = setInterval(function(){  
             var a = parseInt(Math.random()*40); 
             $("#boxGame"+a+" naf-efro").animate({
                top: 0+"%"
             },500 ,function(){
               $("#boxGame"+a+" naf-efro").delay(500).animate({
                    top:100+"%" 
               },1000)
            });
        },4000);
    }

    $("#submit").on("click", function(){
        if(!$("#msg1 input").val()){
            alert("please enter a name!")
        }else{
            localStorage.setItem("user", $("#msg1 input").val());
            localStorage.setItem("score", 0);
            updateHighScore();
        }
    });

    $("#continue").on("click", updateHighScore);
    
    function updateHighScore () {
        $("#player").html(`player: ${localStorage.getItem("user")}`);
        $("#highScore").html(`High Score: ${localStorage.getItem("score")}`);
        $("naf-msg").remove();
    }
    
    function updateScore (difference) {
        var num = score.data("score"), color = getScoreColor(difference);
        
        num = num + difference;
        score.html(`points: ${num}`);
        score.data("score", num);
        if (color)
            score.css("color",color)
    }

    function getScoreColor(scoreDifference){
        if(scoreDifference > 0) return "green";
        else if(scoreDifference < 0) return "red";
    }
    
    function finishGame(){

        isGameRuning=false;

        if(score.data("score")>localStorage.getItem("score")){
            localStorage.setItem("score", score.data("score"));
            newMsg = $("<naf-msg>");
            newMsg.attr("data-msg", 4);
            $("body").append(newMsg);
        }else{
            newMsg = $("<naf-msg>");
            newMsg.attr("data-msg", 3);
            $("body").append(newMsg);
        }
    }

    $("body").on("click",function(e) {
        if (isGameRuning && e.target.id == "monkey"){
           updateScore(1);
        }else if(isGameRuning && $(e.target).attr("class")=="gameUnit"){
            console.log("oopes");
            updateScore(-1);
        }else if(isGameRuning && e.target.id=="efro"){
            updateScore(-2);
        }
  });

});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('../service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


