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
var boardArray = [];
//
spaces = [1,2,3,4,5,6,7,8,9];
//
function Game(player1){
  this.players = [];
  this.currentPlayer = player1;
}
function Player(mark) {
  this.mark = mark;
  this.positions = [];
}
//
Player.prototype.addX = function(){
  this.mark.boardArray.push();
}

function Space() {
  spaces =[1,2,3,4,5,6,7,8,9];

}

Space.prototype.markedBy
//
// ["s1", "s6"];
// UI LOGIC
$(document).ready(function(){

  var player1 = new Player("X");
  var player2 = new Player("O");

  $(".O").hide();

  $(".box").click(function(){
    $(this).html(player1.mark);
    var squareId = $(this).attr("id");
    player1.positions.push(squareId);
    console.log(squareId);
    $("#player1header").toggle();
    $("#player2header").toggle();
    $(".X").toggle();
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
  //
  // $(".term-c").click(function(){
  //   $(".definition-c").toggle();
  // });
});
