function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


window.addEventListener("load", function() {
    const icon = document.getElementById("iconimg");
    const bar = document.getElementById("bar");

    const red = getRandomInt(0, 256).toString();
    const green = getRandomInt(0, 256).toString();
    const blue = getRandomInt(0, 256).toString();

    icon.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

});

setInterval(function() {
    const icon = document.getElementById("iconimg");
    

    const red = getRandomInt(0, 256).toString();
    const green = getRandomInt(0, 256).toString();
    const blue = getRandomInt(0, 256).toString();

    icon.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    

}, 10000, false)

