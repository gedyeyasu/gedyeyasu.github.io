window.onload=eventhandler;

function eventhandler(){
    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = stop;
    document.getElementById("fontsize").onchange = font;
    document.getElementById("turbo").onclick = speed;
}

var aspeed = 250;
function timer(){
   return aspeed;
}

function start(){
    // clearInterval(anime);
    // document.getElementById("text-area").innerHTML="";
    
    var animeType = document.getElementById("animation").value;
    document.getElementById("stop").disabled=false; 
    document.getElementById("start").disabled=true; 
    var animation = ANIMATIONS[animeType].split("=====\n");
    console.log("animation type: ", animation);
    let i = 0;

    anime = setInterval(()=>{
        document.getElementById("text-area").innerHTML=animation[i];
        i == animation.length-1 ? i=0 : i++;
        //console.log(animation[i]);

    }, aspeed)
    
// document.getElementById("text-area").innerHTML=animation;
}
function stop(){
    clearInterval(anime);
    document.getElementById("start").disabled = false; 
    document.getElementById("text-area").innerHTML = "";
}

function font(){
    var size = document.getElementById("fontsize").value;
    document.getElementById("text-area").style.fontSize = size;
}

function speed(){
    console.log(document.getElementById("turbo").checked);
    if (document.getElementById("turbo").checked) {
        aspeed = 50;
    }
    else{
        aspeed = 250;
    }
    
}


