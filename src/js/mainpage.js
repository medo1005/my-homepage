const pics = [
    {src: "./src/img/1.jpg", txt: "水色の画像です"},
    {src: "./src/img/2.jpg", txt: "黄緑の画像です"},
    {src: "./src/img/3.jpg", txt: "紫の画像です"}
];

let counter = 0;
let timer = 3000;
let started = 0

function picsSelecter(stat) {
    if (started == 0) {
        started = 1;
        return;
    }
    if (stat == "prev") {
        if (counter == 0) {
            counter = pics.length;
        }
        counter--;
    }
    else if (stat == "next") {
        counter = counter + 1
        if (counter == pics.length) {
            counter = 0
        }
    }
    picsShow();
}

function picsShow() {
    console.log(counter);
    document.getElementById("pic").src = pics[counter].src;
    document.getElementById("pic_detail").innerHTML = pics[counter].txt;
}

window.addEventListener('load', picsShow);
setInterval(picsSelecter, 5000, "next");