// function to render a flashcard

function renderCard(word) {
    var cardHTML = '<div class="card" data-id="' + card.id + '">';
    cardHTML += '<div class="card-question">' + card.question + '</div>';
    cardHTML += '<div class="card-answer">' + card.answer + '</div>';
    cardHTML += '</div>';
    return cardHTML;
}

// function to render a multiple choice question with 4 choices as buttons

function renderMultipleChoice(word) {
    var cardHTML = '<div class="card" data-id="' + card.id + '">';
    cardHTML += '<div class="card-question">' + card.question + '</div>';
    cardHTML += '<div class="card-choices">';
    cardHTML += '<button class="card-choice">' + card.choices[0] + '</button>';
    cardHTML += '<button class="card-choice">' + card.choices[1] + '</button>';
    cardHTML += '<button class="card-choice">' + card.choices[2] + '</button>';
    cardHTML += '<button class="card-choice">' + card.choices[3] + '</button>';
    cardHTML += '</div>';
    cardHTML += '</div>';
    return cardHTML;
}

// function to render a writing question that asks for the definition of the word

function renderWriting(word) {
    var cardHTML = '<div class="card" data-id="' + card.id + '">';
    cardHTML += '<div class="card-question">' + card.question + '</div>';
    cardHTML += '<div class="card-choices">';
    cardHTML += '<input type="text" class="card-choice">';
    cardHTML += '</div>';
    cardHTML += '</div>';
    return cardHTML;
}