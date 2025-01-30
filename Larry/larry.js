let numx = 0
let numy = 40
let peak = false
let edging = false
let opacity = 0
let evil = false;
setInterval(function() {
    document.getElementById("jorkingIt").style.left=numx+"%";
    document.getElementById("jorkingIt").style.top=numy+"%";
    document.getElementById("jorkingIt").style.opacity=opacity;
},1)

setInterval(function() {
    if (numx >= 100){
        edging = true
    }
    else if (numx <= 0){
        edging = false
    }
    
    if (!edging){
        numx += 2
    }
    else{
        numx -= 2
    }
    if (numx<50){
        opacity = 1
    }
    else {
        opacity =1
    }
},50)

setInterval(function() {
    if (numy >= 60){
        peak = true
    }
    else if (numy <= 40){
        peak = false
    }
    
    if (!peak){
        numy += 2
    }
    else{
        numy -= 2
    }
},100)

setInterval(function(){
    if (evil) {
        document.getElementById("body").style.backgroundImage = "url(\"larry.png\")"
        document.getElementById("larryimg").src = "larry.png";
        document.getElementById("wowow").innerText = "Larry."
    } 
    else {
        document.getElementById("body").style.backgroundImage = "url(\"evillarry.png\")"
        document.getElementById("larryimg").src = "evillarry.png";
        document.getElementById("wowow").innerText = "Evil Larry."
    }
    evil = !evil;
},1000)

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}