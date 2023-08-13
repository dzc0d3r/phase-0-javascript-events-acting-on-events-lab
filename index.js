// Your code here


const dodger = document.getElementById("dodger");
const game = document.getElementById("game")

dodger.style.backgroundColor = "#FF69B4";
dodger.style.left = `${(game.clientWidth / 2) - (dodger.clientWidth / 2)}px`





function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 9}px`;
    }
}



function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left + 9}px`;
        if (left + dodger.clientWidth < game.clientWidth) {

        }
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }

});
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});













moveDodgerLeft()


