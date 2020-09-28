const choices = ['paper','rock','scissors'];

const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const winner = document.getElementById('win');

//modal buttons
const modal = document.getElementById('modal');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');



let score = 0;
let userChoice = undefined;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');


        checkWinner();
    });
});

reset.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none';
})

function checkWinner() {
    const computerChoice = pickRandomChoice();

    //update the view
    updateSelection(user_select , userChoice );
    updateSelection(computer_select , computerChoice);

    if(userChoice === computerChoice) {
        //draw
        winner.innerText = 'draw';
    }else if(
        (userChoice === 'paper' && computerChoice === 'rock')
        ||
        (userChoice === 'rock' && computerChoice === 'scissors')||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ){
        //user won
        updateScore();
        winner.innerText = 'win';
    } else {
        //user lost
        winner.innerText = 'lost';
    }

    //show the selection | hide main
    main.style.display = 'none';
    selection.style.display = 'flex';
}

function updateScore(value) {
    score += 1;

    scoreEl.innerText = score;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {
    //class reset
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');

    //update the img
    const img = selectionEl.querySelector('img');
    selectionEl.classList.add('btn-${choice}');
    img.src = './img/icon-${choice}.svg';
    img.alt = choice;
}


openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})