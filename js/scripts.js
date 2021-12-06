// player business Logic
function rollDice() {
  return Math.floor(Math.random() * 5) + 1;
}

function Player(playerName) {
  this.playerName = playerName;
  this.currentScore = 0;
  this.totalScore = 0;
};

Player.prototype.takeTurn = function(){
  let dieResult = rollDice();

  if (dieResult >= 2 && dieResult < 7) {
    this.currentScore += dieResult
  } else {
    this.currentScore = 0;
    switchPlayer();
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.currentScore;
  if (this.totalScore >= 25) {
    alert("You won!");
  } else {
   this.currentScore = 0;
   switchPlayer();
  }
}

let playerOne = new Player("Player 1")
let playerTwo = new Player("Player 2")
let whoseTurn = playerOne

function switchPlayer() {
  if (whoseTurn === playerOne) {
    whoseTurn = playerTwo
  } else if (whoseTurn === playerTwo) {
    whoseTurn = playerOne
  }
}




// let currentScore = 0

// Player.prototype.updatedTotalScore = function(currentScore) {
//   this.totalScore += currentScore;
//   if (this.totalScore >= 100) {
//     alert("You Win!")
//   }
//   if
// }



//UI Logic
$(document).ready(function() {
  $("wrapper clearfix").submit(function(event) {
    event.preventDefualt();
    let player1 = $(".player1");
    let player2 = $(".player2");
    const btnRoll = $(".btn-roll");
    const btnHide = $(".btn-hide");
    const btnNew = $(".btn-new");
  });

  $(".btn-hold").click(function() {
    // call the hold method
    whoseTurn.hold()
  })

  $(".btn-roll").click(function() {
    whoseTurn.takeTurn();
  })

  $("p").on({
    mouseenter: function(){
    $(this).css({"font-style": "italic", "font-weight": "bold","text-decoration": "underline"});
    }
  });
})