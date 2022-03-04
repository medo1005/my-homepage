const pics = [
    './src/img/flowers.jpg',
    './src/img/piano.jpg',
    './src/img/storm.jpg',
    './src/img/trees.jpg'
];

const days = [
    'Sun.',
    'Mon.',
    'Tue.',
    'Wed.',
    'Thu.',
    'Fri.',
    'Sat.'
];

let counter = 0;

function slider() {
    counter++;
    counter = counter % pics.length;
    document.getElementById('pics').src = pics[counter];
}

function playSlide() {
    setInterval(slider, 3000)
}

function timeUpdate() {
    // 変数宣言
    let date = new Date();
    let year = date.getFullYear()
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let dt = ("0" + date.getDate()).slice(-2);
    let day = date.getDay();
    let hour = ("0" + date.getHours()).slice(-2);
    let min = ("0" + date.getMinutes()).slice(-2);
    let sec = ("0" + date.getSeconds()).slice(-2);

    document.getElementById("year").innerHTML = year;
    document.getElementById("date").innerHTML = month + "." + dt;
    document.getElementById("day").innerHTML = days[day];
    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
}

window.addEventListener('load', playSlide);
window.addEventListener('DOMContentLoaded', timeUpdate);
setInterval(timeUpdate, 1000)