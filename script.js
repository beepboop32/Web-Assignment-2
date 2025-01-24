let carPos = 0;
window.onload()= function() {
    setInterval(function(){
        document.getElementById
    }, 1000);
}

function cats(event, carName) {
    let i, tabcontent, tabs;

    tabcontent = document.getElementsByClassName("tablinks");
    for (i=0; i<tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabcontent = document.getElementsByClassName("tablinks");
    for (i=0; i<tabcontent.length; i++) {
        tabs[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(carName).style.display = "block";
    event.currentTarget.className += " active";
    


}