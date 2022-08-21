let score1 = document.querySelector('#player1Score')
let score2 = document.querySelector('#player2Score')
/*changing score on-screen */

let player1button = document.querySelector('#playerOne')
let player2button = document.querySelector('#playerTwo')
/*player buttons, updating score buttons */

let resetButton = document.querySelector('#reset')
/*reset score button */

let select = document.querySelector('select')
/*winning score selector */

let winningNum = 1
select.addEventListener('click', winningScore)
function winningScore(event) {
    console.log(select.value)
    winningNum = select.value
    console.log(winningNum)
}
/*function that determines what is the winning score */

let player1Score = 0
player1button.addEventListener('click', function (event) {
    player1Score++
    score1.innerText = `${player1Score}`
    if (player1Score == winningNum) {
        player1button.setAttribute('disabled', '')
        player2button.setAttribute('disabled', '')
        score1.classList.add('winner')
        score2.classList.add('loser')
    }
    console.log(player1Score)
})
/*event listener for player1button */

let player2Score = 0
player2button.addEventListener('click', function (event) {
    player2Score++
    score2.innerText = `${player2Score}`
    if (player2Score == winningNum) {
        player2button.setAttribute('disabled', '')
        player1button.setAttribute('disabled', '')
        score2.classList.add('winner')
        score1.classList.add('loser')
    }
    console.log(player2Score)
})
//*event listener for player2button */

resetButton.addEventListener('click', function () {
    winningNum = 1;
    player1Score = 0;
    score1.innerText = 0;
    player1button.removeAttribute('disabled')
    score1.classList.remove('winner')
    score1.classList.remove('loser')

    select.value = 1

    player2Score = 0;
    score2.innerText = 0;
    player2button.removeAttribute('disabled')
    score2.classList.remove('winner')
    score2.classList.remove('loser')
})
/*reset button function that reverst everything to 
its default values */
