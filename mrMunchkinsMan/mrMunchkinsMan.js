let audios = [];



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