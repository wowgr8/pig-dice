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

  let dice = Math.floor(Math.random() * 6) + 1;




//UI Logic



