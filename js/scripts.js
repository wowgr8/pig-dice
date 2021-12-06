// player business Logic
function Player(playerName, currentScore, totalScore) {
  this.playerName = playerName;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
};

let currentScore = 0

Player.prototype.updatedTotalScore = function(currentScore) {
  this.totalScore += currentScore;
  if (thistory.totalScore >= 100) {
    alert("You Win!")
  }
  if 
}

Player.prototype.displayUserScore = function(currentScore) {
  
}



//Dice logic
  //Rolling Dice
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}



//let dice = Math.floor(Math.random() * 6) + 1;         






//UI Logic
$(document).ready(function() {
  $("wrapper clearfix").submit(function(event) {
    event.preventDefualt();
    let player1 = $(".player1");
    let player2 = $(".player2");
    const btnRoll = $(".btn-roll");
    const btnHide = $(".btn-hide");
    const btnNew = $(".btn-new");

    
    
  })
})


