const suitsCard = document.querySelectorAll(".suits");
const numberCard = document.querySelector(".number");
const button = document.querySelector(".new-cardBtn");
const timer = document.querySelector(".timer");
const suits = ['♥', '♦', '♠', '♣'];
const color = ["black", "red"];
let count = 10; // timer counter


const generateCard = () => {
    let number = Math.floor(Math.random()*13);
    let randomSuits = Math.floor(Math.random()*4);
    let randomColor = Math.floor(Math.random()*2);

    switch(number) {
        case 11: numberCard.innerText = "J";
        break;
        case 12: numberCard.innerText = "Q";
        break;
        case 13: numberCard.innerText = "K";
        break;
        default: numberCard.innerText = number;
        break;
    }
        
    suitsCard[0].innerText = suits[randomSuits];
    suitsCard[1].innerText = suits[randomSuits];

    if (color[randomColor] === "red") {
        numberCard.classList.add("red");
        suitsCard[0].classList.add("red");
        suitsCard[1].classList.add("red");
    }
}

const setTimer = () => {
    if (count === 0) {
        generateCard();
        count = 10;
        timer.innerText = count;
        setTimer();
    }
    else {
        timer.innerText = count;
        count--;
        setTimeout(setTimer, 1000);
    }
}

window.onload = generateCard();
button.addEventListener("click", generateCard);
window.onload = setTimer();



