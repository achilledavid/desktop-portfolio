var zindex = 1;

function init(obj) {
    var x;
    var y;
    let header = document.querySelector('.' + obj + '__head');
    let modal = document.querySelector('.' + obj);
    let content = document.querySelector('.' + obj + '__content');

    zindex++;

    document.querySelector(".modal").style.filter = "brightness(60%)";
    document.querySelector(".dev").style.filter = "brightness(60%)";
    document.querySelector(".smash").style.filter = "brightness(60%)";
    document.querySelector(".portfolio").style.filter = "brightness(60%)";


    document.querySelector(".modal__content").style.pointerEvents = "none";
    document.querySelector(".dev__content").style.pointerEvents = "none";
    document.querySelector(".smash__content").style.pointerEvents = "none";
    document.querySelector(".portfolio__content").style.pointerEvents = "none";
    content.style.pointerEvents = "all";

    modal.style.filter = "brightness(100%)";

    header.addEventListener("mousedown", function (event) {
        modal.style.zIndex = zindex;
        document.onmousemove = function (e) {
            x = e.clientX;
            y = e.clientY;
            modal.style.top = y - 5 + "px";
            modal.style.left = x - 5 + "px";
        }
    });

    header.addEventListener("mouseup", function (event) {
        modal.style.top = y - 5 + "px";
        modal.style.left = x - 5 + "px";
        document.onmousemove = function (e) { }
    });
}

function del(obj) {
    let modal = document.querySelector('.' + obj);
    modal.classList.toggle('active');
}

function show(obj) {
    let modal = document.querySelector('.' + obj);
    modal.classList.toggle('active');
}