const words = JSON.parse(sessionStorage.getItem("words"));

if (!words) {
    alert("You have not selected a set yet. Please go to the home page and select a set.")
    window.location.href = "../index.html";
}

let flashcardsDone = [];
let multipleChoiceDone = [];
let writingDone = [];
const totalwords = words.length;

function newRound() {
    if (words.length > 0) {
        flashcards();
    } else if (flashcardsDone.length < totalwords) {
        multipleChoiceRound();
    } else if (multipleChoiceDone.length < totalwords) {
        writeRound();
    } else {
        finish();
    }
}

function multipleChoiceRound() {

    const container = document.getElementById('container');

    container.innerHTML = `
    <div class="UI">
        <div class="multiple-choice">
            <div class="question">
                <p id="question"></p>
            </div>
            <div class="answers">
                <button id="answer1"></button>
                <button id="answer2"></button>
                <button id="answer3"></button>
                <button id="answer4"></button>
            </div>
        </div>
    </div>
    `;

    let question = document.getElementById("question");
    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    let answer4 = document.getElementById("answer4");
    let choiceButtons = [answer1, answer2, answer3, answer4]

    let correctAnswers = []

    if (flashcardsDone.lenght >= 5) {
        for (let i = 0; i < 5; i++) {
            let random = Math.floor(Math.random() * flashcardsDone.length);
            correctAnswers.push(flashcardsDone[random]);
            flashcardsDone.splice(random, 1);
        }
    } else {
        for (let i = 0; i < flashcardsDone.length; i++) {
            correctAnswers.push(flashcardsDone[i]);
            flashcardsDone.splice(i, 1);
        }
    }

    console.log(correctAnswers);

    for (let i = 0; i >= correctAnswers.length; i++) {
        let correctButton = Math.floor(Math.random() * 4);
        choiceButtons[correctButton].innerText = correctAnswers[i].def;
        choiceButtons.splice(correctButton, 1);

        for (let j = 0; j >= choiceButtons.length; j++) {
            let random = Math.floor(Math.random() * flashcardsDone.length);
            choiceButtons[j].innerText = flashcardsDone[random].def;
            flashcardsDone.splice(random, 1);
        }
    }
}

function writeRound() {
    alert("Write Round");
}

function showProgressRound(functionName) {
    const container = document.getElementById('container');

    container.innerHTML = `
    <div class="UI">
        <div class="progress">
            <h2>Progress</h2>
            <progress class="progress-bar" value="0" max="${totalwords}"></progress>
        </div>
        <div class="buttons">
            <button id="next-round">Next Round</button>
        </div>
    </div>`;

    let progressBar = document.querySelector(".progress-bar");
    progressBar.value = totalwords - functionName.length;
    let nextRound = document.getElementById("next-round");
    nextRound.addEventListener("click", () => {
        newRound();
    });
}

function finish() {

}

function flashcards() {
    let randomwords = [];
    for (let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * words.length);
        randomwords.push(words[random]);
        words.splice(random, 1);
    }


    const container = document.getElementById('container');

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


    let currentCard = 0;

    let card = document.querySelector(".card");
    let understood = document.getElementById("understood");
    let repeat = document.getElementById("repeat");

    let front = document.getElementById("front");
    let back = document.getElementById("back");

    front.innerText = randomwords[currentCard].word;
    back.innerText = randomwords[currentCard].def;

    card.addEventListener("click", function () {
        card.classList.toggle("flipped");
    });

    understood.addEventListener("click", () => {
        if (randomwords.length > 1) {
            flashcardsDone.push(randomwords[currentCard]);
            randomwords.splice(currentCard, 1);
            card.classList.remove("flipped")
            currentCard = Math.floor(Math.random() * randomwords.length);
            front.innerText = randomwords[currentCard].word;
            back.innerText = randomwords[currentCard].def;
        } else {
            showProgressRound(words);
        }
    });

    repeat.addEventListener("click", () => {
        if (currentCard >= 0) {
            card.classList.remove("flipped")
            currentCard = Math.floor(Math.random() * randomwords.length);
            front.innerText = randomwords[currentCard].word;
            back.innerText = randomwords[currentCard].def;
            words.push(randomwords[currentCard]);
            randomwords.splice(currentCard, 1);
        } else {
            showProgressRound(words);
        }
    });

    if (randomwords.length == 0) {
        showProgressRound(words);
    }
}

newRound()