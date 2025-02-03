function createPikmin(id, src) {
    let pikmin = document.createElement("img");
    pikmin.src = src;
    pikmin.id = id;
    pikmin.className = "pikmin";
    document.getElementById("theBOYS").appendChild(pikmin);
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
        swap: false
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
        });
    });
    if (pikmins.length >= 100) {
        clearInterval(interval);
    }
}, 1000);