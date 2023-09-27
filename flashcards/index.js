const container = document.getElementById('container');
let words = JSON.parse(sessionStorage.getItem("words"));

if (!words) {
    alert("No words found, redirecting to home page. to add words go to 'excel reader*' or 'current set*'");
    window.location.href = "../../index.html";
}

container.innerHTML = `
    <div class="UI">
        <div class="card-container">
            <div class="card">
                <div class="card-front">
                    <p id="front"></p>
                </div>
                <div class="card-back">
                    <p id="back"></p>
                </div>
            </div>
        </div>
        <div id="buttons">
            <button id="repeat">Repeat</button>
            <button id="understood">Got it</button>
        </div>
    </div>`;

document.addEventListener("DOMContentLoaded", () => {
    let currentCard = 0;

    let card = document.querySelector(".card");
    let understood = document.getElementById("understood");
    let repeat = document.getElementById("repeat");

    let front = document.getElementById("front");
    let back = document.getElementById("back");

    const btns = document.getElementsByClassName("fav")

    front.innerText = words[currentCard].word;
    back.innerText = words[currentCard].def;

    for (let i = 0; i < btns.length; i++) {

    }

    card.addEventListener("click", function () {
        card.classList.toggle("flipped");
    });

    understood.addEventListener("click", () => {
        if (currentCard + 1 <= words.length) {
            words.splice(currentCard, 1);
            card.classList.remove("flipped")
            currentCard = Math.floor(Math.random() * words.length);
            front.innerText = words[currentCard].word;
            back.innerText = words[currentCard].def;
        }
    });

    repeat.addEventListener("click", () => {
        if (currentCard >= 0) {
            card.classList.remove("flipped")
            currentCard = Math.floor(Math.random() * words.length);
            console.log(currentCard)
            front.innerText = words[currentCard].word;
            back.innerText = words[currentCard].def;
        }
    });
});