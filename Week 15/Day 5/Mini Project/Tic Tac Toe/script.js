//Setup Variables

//Array that keeps track of whats in each square of the board
var origBoard;

//Buttons to select symbol
var buttonX = document.getElementById("x");

var buttonO = document.getElementById("o");

//default symbol players
var huPlayer = 'O';
//constant of the AI
var aiPlayer = 'X';



//Array of Array's for winning combinations of the board
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

//store variable by selecting each element "cell" on the board
const cells = document.querySelectorAll('.cell');

//function to start the game
startGame();

//defining the start function "what happens when the game starts"
function startGame() {

  //hide board
  document.querySelector(".board").style.display = "none";

  //select the endgame element to not display also when we replay
	document.querySelector(".endgame").style.display = "none";

  //when restarted choose again the user can choose the symbol
  document.querySelector("#start").style.display = "block";

  //if the user chooses the X symbol to play, the AI will be the opposite one
  buttonX.addEventListener('click', function () {

           huPlayer = 'X';
           aiPlayer = 'O';
           document.querySelector("#start").style.display = "none";
           document.querySelector(".board").style.display = "table";

        });

  //if the user chooses the O symbol to play, the AI will be the opposite one
  buttonO.addEventListener('click', function () {

           huPlayer = 'O';
           aiPlayer = 'X';
           document.querySelector("#start").style.display = "none";
           document.querySelector(".board").style.display = "table";

        });


  //Load to the origBoard variable All the Number Keys from 0 to 9
	origBoard = Array.from(Array(9).keys());
  console.log(origBoard);

  //Loop to Remove all the X's and O's from the board when we start
	for (var i = 0; i < cells.length; i++) {

    //there will be nothing in the cell
		cells[i].innerText = '';

    //remove the background color from the highlighted squares of the winner when started
		cells[i].style.removeProperty('background-color');

    //call a click function to turnClick
		cells[i].addEventListener('click', turnClick, false);
	}
}





//square click function, taking turns between human player and AI
function turnClick(square) {

  //if the origBoard from 0 - 9 when a turn is taken and replaces an index with an X or O instead of the number index, either by the human or AI. If it is still equal to a "number" then that spot is still available to be filled by the players, so we run the turns.
  if (typeof origBoard[square.target.id] == 'number'){

    console.log(square.target.id);
  // call the turn function for the human player
	turn(square.target.id, huPlayer)

  //turn for the AI player, after the human player turns or the AI turns, check if its a Tie Game if not make next turn to the AI player
  if (!checkTie()) turn(bestSpot(), aiPlayer);

  }

}

//turn function, takes 2 parameters: SquareId and the human player
function turn(squareId, player) {
  // set the origBoard var to the player that took turn on the spot
	origBoard[squareId] = player;
  // update the display to see the spot clicked by the player
	document.getElementById(squareId).innerText = player;

  //whenever a turn is taken, check if the game has been won
  let gameWon = checkWin(origBoard, player)
  //if game has been won call the gameOver function
  if (gameWon) gameOver(gameWon)
}

//function to check the Win, takes parameters: other version of the board and the player
function checkWin(board, player) {
  //find all the places index on the board that have been played by the player
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null; //if no one wins, it will display null

  //loop trough every win combo to check if the game has been won
	for (let [index, win] of winCombos.entries()) {
    // if through every element in the win combo, check if the player has played in every spot that counts as a win on the board. "this will go on a loop till the last spot that has a win combo"
		if (win.every(elem => plays.indexOf(elem) > -1)) {
      // if it is like that, then the player has won and assign to know witch indexes are the win combo and witch player has won.
			gameWon = {index: index, player: player};
			break;
		}
	}
  // display the gameWon: null for a draw or if it has been won it will display the indexes and witch player won.
	return gameWon;
}

//when the game finishes it will be game over, so we call a function for that, taking as parameter gameWon.
function gameOver(gameWon) {
  //loop to highlight all the squares that are part of the winning combo
	for (let index of winCombos[gameWon.index]) {
		document.getElementById(index).style.backgroundColor =
			gameWon.player == huPlayer ? "#3366ff" : "#ff0000"; //set the background color to blue for human player and red foe AI player.
	}
  // loop through every cell in order to not make the user click anymore squares because the game is over
	for (var i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', turnClick, false); //make cell un clickable
	}
  //if there is a winner, check to see who won and display the corresponding text
  declareWinner(gameWon.player == huPlayer ? "You win!" : "You lose!");
}

//function to declare who won
function declareWinner(who) {
  // set the end game div style to display block
	document.querySelector(".endgame").style.display = "block";
  //set the end game div text to display if the user wins, loses or a Tie
	document.querySelector(".endgame .text").innerText = who;
}


//function to discover the empty squares "the ones with numbers and not X and O's"
function emptySquares() {
	return origBoard.filter(s => typeof s == 'number'); //filter all elements on the board to see if it is a number, if it is then return it.
}

//find the spot for the AI to play
function bestSpot() {
  //return the result of the minimax function
  return minimax(origBoard, aiPlayer).index;
	/*return emptySquares()[0]; //finds the first spot of the squares that is empty*/
}

//function for a Tie case
function checkTie() {
  // if every square is filled then its a tie, so we loop
	if (emptySquares().length == 0) {
    //loop through every cell
		for (var i = 0; i < cells.length; i++) {
      //change the cells background color to green
			cells[i].style.backgroundColor = "#009900";
      //enable the user to un click
			cells[i].removeEventListener('click', turnClick, false);
		}
    //function to declare a Tie message
		declareWinner("Tie Game!")
    //if its a Tie then return true
		return true;
	}
  // return false if its not a Tie
	return false;
}

//Defining Minimax "Recursive" Function, takes 2 arguments: newBoard and Player
function minimax(newBoard, player) {
  //define indexes in the available spot in the board using emptySquares func
	var availSpots = emptySquares(newBoard);

  //check for a state when someone is winning
	if (checkWin(newBoard, huPlayer)) {
    //return a value if O wins return -10
		return {score: -10};
    //else if X wins return 10
	} else if (checkWin(newBoard, aiPlayer)) {
		return {score: 10};
    //if the length of the available spots is 0 return 0 (no more room to play)
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
  //collect the scores from the empty spots to evaluate
	var moves = [];
  //loop through empty spots while collecting each moves index score
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
    //set the index number of the empty spot to the index property of the move object
		move.index = newBoard[availSpots[i]];
    //set the empty spot on the board to the current player
		newBoard[availSpots[i]] = player;

    //call the minimax function with the other player and the newly changed board
		if (player == aiPlayer) {
			var result = minimax(newBoard, huPlayer);
      //store the object result from the minmax function that has a score property  to the move object
			move.score = result.score;
      //if the minimax function does not find a terminal state it will recursively keep going level by level until it finds a terminal state
		} else {
			var result = minimax(newBoard, aiPlayer);
			move.score = result.score;
		}

    //reset newBoard to what it was before
		newBoard[availSpots[i]] = move.index;

    //push the move object to the moves array
		moves.push(move);
	}

  //evaluate the best move in the moves array
  //it should choose the best score when the AI is playing
  //it should choose the lowest score when the human is playing
  var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
    //loop through the moves array
		for(var i = 0; i < moves.length; i++) {
      //if a move has a higher score than best score
			if (moves[i].score > bestScore){
        //store that move
				bestScore = moves[i].score;
        //in case for moves with similar score only the firs one will be stored
				bestMove = i;
			}
		}
	} else {
    //if the player is the human evaluate the same way but it will be set to a lower score
    //set to a high number
		var bestScore = 10000;
    //loop through move array
		for(var i = 0; i < moves.length; i++) {
      //for a move with the lowest score
			if (moves[i].score < bestScore) {
        //store the move
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

  //return the object stored in bestMove
	return moves[bestMove];
}
