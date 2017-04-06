// // BUSINESS LOGIC;
// winningCombos =
// [["s1","s2","s3"],
// ["s4","s5","s6"],
// ["s7","s8","s9"],
// ["s3","s5","s7"],
// ["s1","s5","s9"],
// ["s3","s6","s9"],
// ["s2","s5","s8"],
// ["s1","s4","s7"]];
//
// var boardArray = [];
//
// spaces = [1,2,3,4,5,6,7,8,9];

function Player(mark, active) {
  this.mark = mark;
  this.positions = [];
  this.active = active;
}

// Player.prototype.addX = function(){
//   this.mark.boardArray.push();
// }

Player.prototype.switchTurn = function() {
  for(i=0;i < newGame.totalPositions.length; i++)
  player.positions[i] % 2 === 0;
}

// function Space() {
//   spaces =[1,2,3,4,5,6,7,8,9];
// }

// Space.prototype.markedBy
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
    console.log(newGame.totalPositions);
    console.log(squareId);
    player1.active = 0;
    // player2.active = 1;
    } else {
      $(this).html(player2.mark);
      var squareId = $(this).attr("id");
      player2.positions.push(squareId);
      newGame.totalPositions.push(squareId);
      console.log(newGame.totalPositions);
      console.log(squareId);
      player1.active = 1;
      // player2.active = 0;
      }
    // $("#player1header").toggle();
    // $("#player2header").toggle();
    // $(".board").create method to switch players();
    // $(".X").toggle();
    // console.log(player1.positions);
  });

  // $(".O").click(function(){
  //   $(this).text("O");
  // });

    // $(".O").show();
    // $(".X").hide();
  // });

  // $(".O").click(function(){
  //
  // });
  //
  // $(".term-c").click(function(){
  //   $(".definition-c").toggle();
  // });
});
