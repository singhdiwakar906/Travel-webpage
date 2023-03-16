function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }
}

function reveal_n() {
    var reveals = document.querySelectorAll(".reveal_n");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight) {
        reveals[i].classList.add("active_n");
        } else {
        reveals[i].classList.remove("active_n");
        }
    }
}

function shift_to_side(){
    var reveals = document.getElementsByClassName('side-shift');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            console.log("doing it");
            reveals[i].style.animationName="moveside";
        } 
        else {
            reveals[i].style.animationName="none";
        }
    }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", shift_to_side);
window.addEventListener("scroll",reveal_n);