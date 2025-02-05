let audios = [];
let days = [
    "evil burger was in a bar. What did he say? i am evil burger. come back tomorrow for more scariest stories", 
    "I was walking in the park with my wonderful wife, when i stopped to pee pee in a bush. When i was done, i turned around and saw my wife being carted away by James and his minions. I cried out in horrors. Come back tomorrow for more scariest stories",  
    "I was with my husband in the hosptial, when he gave birth?!?!?! it was James! come back tomorrow for more scariest stories", 
    "Thursday", 
    "Friday", 
    "Saturday", 
    "Sunday"
];

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}
window.onload = function() {
    document.getElementById("MunchkinMan").style.backgroundImage = "mrMunchkinsMan/mrMunchkinsMan.png"
}
let audio1 = audios.push(new Audio("larryCream.mp3"));
let audio2 = audios.push(new Audio("4BigGuys.mp3"));
let audio3 = audios.push(new Audio("evilBurger.mp3"));
function meowmeow() {
    let random = Math.floor(Math.random() * audios.length);
    console.log(random);
    let audio = audios[random];
    audio.play();
    audio.onended = function() {
        meowmeow();
    };
};
meowmeow();

window.onload = function() {
    setInterval(function() {
        let date = new Date();
        let day = date.getDay();
        document.getElementById("day").innerHTML = days[day-1];
    }, 1000);
}