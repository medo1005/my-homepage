const pics = [
    {src: "./src/img/1.jpg", txt: "水色の画像です"},
    {src: "./src/img/2.jpg", txt: "黄緑の画像です"},
    {src: "./src/img/3.jpg", txt: "紫の画像です"}
];

let counter = 0;
let started = 0

let prev_button;
let next_button;

let time = 10000;
let timer = setInterval(picsSelecter, time, "next");

function picsSelecter(e) {
    if (this.stat == "prev" || e == "prev") {
        if (counter == 0) {
            counter = pics.length;
        }
        counter--;
    }
    else if (this.stat == "next" || e == "next") {
        counter = counter + 1
        if (counter == pics.length) {
            counter = 0
        }
    }
    picsShow();
}

function picsShow() {
    document.getElementById("pic").src = pics[counter].src;
    document.getElementById("pic_detail").innerHTML = pics[counter].txt;
    for (let index = 0; index < pics.length; index++) {
        if (index == counter) {
            document.getElementById("b" + index.toString()).style.backgroundColor = "gray";
        }
        else {
            document.getElementById("b" + index.toString()).style.backgroundColor = "white";
        }
        
    }
}

function setButton() {
    prev_button = document.getElementById("prev");
    next_button = document.getElementById("next");

    prev_button.addEventListener('click', {stat: "prev", handleEvent: picsSelecter});
    prev_button.addEventListener('click', timerReset);
    next_button.addEventListener('click', {stat: "next", handleEvent: picsSelecter});
    next_button.addEventListener('click', timerReset);
}

function timerReset() {
    clearInterval(timer);
    timer = setInterval(picsSelecter, time, "next");
}

window.addEventListener('load', picsShow);
window.addEventListener('load', setButton);

