function createPikmin(id, src) {
    let pikmin = document.createElement("img");
    pikmin.src = src;
    pikmin.id = id;
    pikmin.classList.add("fader");
    pikmin.classList.add("pikmin");
    document.getElementById("theBOYS").appendChild(pikmin);
    
    // Remove fader class after animation ends
    pikmin.addEventListener('animationend', () => {
        pikmin.classList.remove("fader");
    });

    return pikmin;
}

let pikmins = [];
for (let i = 0; i < 1; i++) {
    pikmins.push({
        element: createPikmin(`pikmin${i}`, `pikmin.png`),
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        numx: 0,
        numy: 0,
        swap: false,
        lifespan: 5 // Set lifespan to 1 second
    });
}

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
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
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}


window.onload = function() {
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

    setInterval(function() {
        pikmins.forEach(pikmin => {
            if (pikmin.numx < pikmin.x) {
                pikmin.numx += 0.25;
                pikmin.swap = false;
            } else if (pikmin.numx > pikmin.x) {
                pikmin.numx -= 0.25;
                pikmin.swap = true;
            } else {
                pikmin.x = Math.floor(Math.random() * 100);
            }

            if (pikmin.numy < pikmin.y) {
                pikmin.numy += 0.5;
            } else if (pikmin.numy > pikmin.y) {
                pikmin.numy -= 0.5;
            } else {
                pikmin.y = Math.floor(Math.random() * 100);
            }

            pikmin.element.style.left = pikmin.numx + "%";
            pikmin.element.style.top = pikmin.numy + "%";
        });
    }, 10);
}

const interval = setInterval(function() {
    pikmins.forEach((element, index) => {
        pikmins.push({
            element: createPikmin(`pikmin${pikmins.length}`, `pikmin.png`),
            x: Math.floor(Math.random() * 100),
            y: Math.floor(Math.random() * 100),
            numx: element.numx,
            numy: element.numy,
            swap: false,
            lifespan: 5 // Ensure new pikmins also have a lifespan of 1 second
        });
    });
    if (pikmins.length >= 800) {
        clearInterval(interval);
        
    }
}, 1000);

setInterval(function() {
    pikmins.forEach(element => {
        element.lifespan--;
        if (element.lifespan <= 0) {
            element.element.classList.remove("fader");
            element.element.classList.add("fader2");
            
        }
    });
}, 1000); // Adjusted interval to 1000ms to match the 1-second lifespan