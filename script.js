let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three")
let pOne = document.querySelector(".pOne")
let pTwo = document.querySelector(".pTwo")
let pThree = document.querySelector(".pThree")


one.addEventListener("click", function() {
    one.className = "four";
    two.className = "div";
    three.className = "div";
    pOne.style.display = "block";
    pTwo.style.display = "none";
    pThree.style.display = "none";



})

two.addEventListener("click", function() {
    one.className = "div";
    two.className = "four";
    three.className = "div";
    pOne.style.display = "none";
    pTwo.style.display = "block";
    pThree.style.display = "none";
})

three.addEventListener("click", function() {
    one.className = "div";
    two.className = "div";
    three.className = "four";
    pOne.style.display = "none";
    pTwo.style.display = "none";
    pThree.style.display = "block";
})