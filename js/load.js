window.addEventListener("load", function() {
    const loader = document.getElementById("loading");
    setTimeout(function(){
        loader.classList.add("loaded");
    }, 1250)
}, false); 