

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

function switchPage(num) {
    switch(num) {
        case 0:
            window.location.href = 'James/james.html';
            break
        case 1:
            window.location.href = 'Larry/larry.html';
            break
        case 2:
            window.location.href = 'mrMunchkinsMan/mrMunchkinsMan.html';
            break
    }
}