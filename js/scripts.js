// // BUSINESS LOGIC;
var winArray =
[["s1","s2","s3"],
["s4","s5","s6"],
["s7","s8","s9"],
["s3","s5","s7"],
["s1","s5","s9"],
["s3","s6","s9"],
["s2","s5","s8"],
["s1","s4","s7"]];

Player.prototype.winner = function(x) {
  return winArray.some(function(y){
    return y.every(function(num){
        return x.includes(num);
    });
  });
}

function Player(mark, active) {
  this.mark = mark;
  this.positions = [];
  this.active = active;
}

function Game(player1){
  this.players = [];
  this.currentPlayer = player1;
  this.totalPositions = [];
}

// UI LOGIC
$(document).ready(function(){

  var player1 = new Player("X", 1);
  var player2 = new Player("O", 0);
  var newGame = new Game(player1);
  newGame.players.push(player1, player2);

  $(".box").click(function(){

    if (player1.active === 1) {
    $(this).html(player1.mark);
    var squareId = $(this).attr("id");
    player1.positions.push(squareId);
    newGame.totalPositions.push(squareId);
    console.log(player1.positions);
    player1.active = 0;
    } else {
      $(this).html(player2.mark);
      var squareId = $(this).attr("id");
      player2.positions.push(squareId);
      newGame.totalPositions.push(squareId);
      console.log(player2.positions);
      player1.active = 1;
    }
    if (player1.winner() === true) {
      alert("you win!");
    }
    if (player2.winner() === true) {
      alert("you win!");
    }
  });
});
