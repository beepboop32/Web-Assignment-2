let num = 0
let opacity = 0.1
setInterval(function() {
    num+=1
    if (num>100) {
        num =0
    }
    else if (num>50) {
        opacity-=0.1
    }
    else if (num<50){
        opacity +=0.1
    }
    else {
        opacity =1
    }
    document.getElementById("jorkingIt").style.left=num+"%";
    document.getElementById("jorkingIt").style.opacity=opacity;
},100)

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}