console.log("it's not so bad");
let dodger = document.getElementById("dodger");

document.addEventListener("DOMContentLoaded", function() {

    document.addEventListener("keydown", function(event){
        if (event.key === "ArrowLeft"){
            moveDodgerLeft()
        };
        if (event.key === "ArrowRight"){
            moveDodgerRight()
        }
    });
});

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers, 10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`
    }
}