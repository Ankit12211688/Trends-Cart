var minus = document.querySelector("#minus");
var num = document.querySelector("#number");
var plus = document.querySelector("#plus");
var img = document.getElementById("bigbox");

var z = 1;

minus.addEventListener("click", () => {
    if (z > 1) {
        z--;
        num.innerHTML = z;
    }
})

plus.addEventListener("click", () => {
    z++;
    num.innerHTML = z;
})

function changeImg1() {
    img.src = "/Image/c1.jpg";
}

function changeImg2() {
    img.src = "/Image/c2.jpg";
}

function changeImg3() {
    img.src = "/Image/c3.jpg";
}

function changeImg4() {
    img.src = "/Image/c4.jpg";
}

function changeImg5() {
    img.src = "/Image/c5.jpg";
}

function changeImg6() {
    img.src = "/Image/c6.webp";
}