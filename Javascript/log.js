var a = document.querySelector(".navbar");
a.addEventListener("click", () => {
    var b = document.getElementById("down");
    var dropdown = document.getElementById("ddown");
    var color = document.querySelector(".do");
    var ull = document.getElementById("ull");

    ull.classList.toggle("show");
    dropdown.classList.toggle("show");
    b.classList.toggle("transform");
    a.classList.toggle("color");
})