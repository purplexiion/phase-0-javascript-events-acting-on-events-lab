// Your code here

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerRight();
    }
});

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(rightNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }

}