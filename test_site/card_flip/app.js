document.addEventListener("DOMContentLoaded", () => {
    let flip = document.getElementById("flip-box");

    flip.addEventListener("click", () => {
        flip.classList.toggle("flipped");
    });
});