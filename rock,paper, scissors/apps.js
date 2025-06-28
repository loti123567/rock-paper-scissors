const computerchoiceDisplay = document.getElementById('computer-choice');
const userchoiceDisplay = document.getElementById('user-choice');
const  resultDisplay = document.getElementById('result');
const possiblechoices = document.querySelectorAll('button');
let userchoice
let computerchoice
let result

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click',(e) => {
userchoice = e.target.id
userchoiceDisplay.innerHTML = userchoice
generatecomputerchoice()
getResult()
}));


function generatecomputerchoice (){
    const  randomNumber =Math.floor (Math.random() * 3) + 1// or yoy can use (possiblechoices.length)
    
    if (randomNumber === 1){
        computerchoice = 'rock'
    }
    if(randomNumber === 2){
        computerchoice = 'scissors'
    }
    if(randomNumber === 3){
        computerchoice = 'paper'
    }
    computerchoiceDisplay.innerHTML = computerchoice
};


function getResult(){
    if(computerchoice === userchoice){
        result = 'its a draw!'
    }
    if(computerchoice === 'rock'&& userchoice === "paper"){
        result = 'you win!'
    }
    if(computerchoice === 'rock'&& userchoice === "scissors"){
        result = 'you lose!'
    }
    if(computerchoice === 'paper'&& userchoice === "scissors"){
        result = 'you win!'
    }
    if(computerchoice === 'paper'&& userchoice === "rock"){
        result = 'you lose!'
    }
    if(computerchoice === 'scissors'&& userchoice === "rock"){
        result = 'you win!'
    }
    if(computerchoice === 'scissors'&& userchoice === "paper"){
        result = 'you lose!'
    }
    resultDisplay.innerHTML= result
};