console.log("mr munchkins man")
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}
window.onload = function() {
    document.getElementById("MunchkinMan").style.backgroundImage = "mrMunchkinsMan/mrMunchkinsMan.png"
}