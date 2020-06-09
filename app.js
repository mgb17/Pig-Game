var scores, roundScore, activePlayer, gamePlaying;

init();

var previousDice;

// **********************ROLL DICE************************
document.querySelector(".btn-roll").addEventListener('click', function() {
    if (gamePlaying) {

        //Random number
    var dice1 = Math.floor(Math.random() * 6 ) + 1;
    var dice2 = Math.floor(Math.random() * 6 ) + 1;


    // Display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    
    
    //Update the round score if the rolled number was not a 1
    if (dice1 !== 1 && dice2 !== 1) {
        //Add score
        roundScore += dice1 +dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore; 

    // } else if (previousDice === 6 && dice === 6) {

    //     scores[activePlayer] = 0;
    //     document.querySelector('#score-' + activePlayer).textContent = '0';
    //     nextPlayer();

    } else {
        //Next Player
        nextPlayer();
    }

    // previousDice = dice;

    }   
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {

        //Add CURRENT score to global score
    scores[activePlayer] += roundScore; //scores[activePlayer] = scores[activePlayer] + roundScore

    // Update the UI (User Interface)
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('#limit').value;
    var winningScore;

    if(input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }

    // Check if player won the game
    if (scores[activePlayer] >= winningScore) {

        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;

    } else {
        // Next player
        nextPlayer()
    }   
    }
});

function nextPlayer () {
    //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

// document.querySelector('#current-' + activePlayer).textContent = dice; 
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;


// 1--*************two 6 dice deletes the entire scores***************
// Then, it is the next player's turn, 
// save the previous dice roll in a seperate variable,

// 2---add input to HTML for setting the winning score
// .value 

// 3 --- Add another dice , two dices in total,
// player loses the current score when one of them is 1
// hint => CSS to position the 2nd dice 











