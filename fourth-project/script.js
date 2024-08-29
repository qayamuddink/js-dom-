



let random_number = parseInt((Math.random()*100 + 1)) ;


const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')

const remaining = document.querySelector('.lastResult')

const lowORhigh = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevguess = [] ;
let numGuess = 1 ;

let playGame = true ;

if(playGame){
    submit.addEventListener('click' ,function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // validation 
    if(isNaN(guess)){
        alert("please enter a valid number")
    }
    else if(guess < 1){
        alert('please enter a number more than 1 ')
    }
    else if( guess > 100){
        alert('please enter a number less than 100 ')
    }
    else {
        prevguess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${random_number} `)
            endGame()
        }
        else {
            displayGuess(guess) ;
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === random_number){
        displayMessage(" You guessed it right");
        endGame()
    }else if(guess < random_number){
        displayMessage("Number is too low")
    }
    else if( guess > 100) {
        displayMessage(`Number is too High`)
    }
}

function displayGuess(guess){
    userInput.value = '' ;
    guessSlot.innerHTML += `${guess} , ` ;
    numGuess++;   
    remaining.innerHTML = `${11- numGuess}`
}

function displayMessage(message){
    lowORhigh.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false ;
    newGame()    
}



function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click' ,()=>{ 
        random_number = parseInt(Math.random()*100 + 1) ;
        prevguess = [] ;
        numGuess = 1 ;
        guessSlot.innerHTML = '' ;
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true ;
    })

}


