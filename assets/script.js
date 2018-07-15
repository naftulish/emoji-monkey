$("document").ready(function(){

if(localStorage.getItem("user")){
    var newMsg = $("<naf-msg>");
    newMsg.attr("data-msg", 2);
    $("body").append(newMsg);
}else{
    var newMsg = $("<naf-msg>");
    newMsg.attr("data-msg", 1);
    $("body").append(newMsg); 
}

$("#start").on("click", function(){
    startGame();
});



$("naf-monkey").click(function(){
    var score = $("#score");
    var num = score.data("score"); 
    num++;
    score.html(`points: ${num}`);
    score.data("score", num);
});

function startGame(){
    var num = 60;
    $("#score").html(`points: 0`);
    var timer = setInterval(function(){
        if(num){
           num--;
           $("#timer").html(`Timer: ${num}s`)
        }else{
            clearInterval(interval);
            clearInterval(timer);
            finishGame();
        }
    },1000);

    var interval = setInterval(function(){  
         var a = parseInt(Math.random()*40); 
         $("#boxGame"+a+" naf-monkey").animate({
            top: 0+"%"
         },1000 ,function(){
           $("#boxGame"+a+" naf-monkey").delay(300).animate({
                top:100+"%" 
           },1000)
        });
    },2300);
}

$("#submit").on("click", function(){
    if(!$("#msg1 input").val()){
        alert("please enter a name!")
    }else{
        localStorage.setItem("user", $("#msg1 input").val());
        localStorage.setItem("score", 0);
        $("#player").html(`player: ${$("#msg1 input").val()}`);
        $("#highScore").html(`High Score: 0`);
        $("naf-msg").remove();
    }
});

$("#continue").on("click", function(){
        $("#player").html(`player: ${localStorage.getItem("user")}`);
        $("#highScore").html(`High Score: ${localStorage.getItem("score")}`);
        $("naf-msg").remove();
});

function finishGame(){
    if($("#score").data("score")>localStorage.getItem("score")){
        localStorage.setItem("score", $("#score").data("score"));
        var newMsg = $("<naf-msg>");
        newMsg.attr("data-msg", 4);
        newMsg.on("click", function(){
            $(this).remove();
            $("#highScore").html(`High Score: ${localStorage.getItem("score")}`);
        });
        $("body").append(newMsg);
    }else{
        var newMsg = $("<naf-msg>");
        newMsg.attr("data-msg", 3);
        newMsg.on("click", function(){$(this).remove()});
        $("body").append(newMsg);

    }
}


});