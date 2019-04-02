function rollDice(){
  var die1 = document.getElementById('dice1');
  var die2 = document.getElementById('dice2');
  var status = document.getElementById('status');
  var d1 = Math.floor(Math.random() * 20) + 1;
  var d2 = Math.floor(Math.random() * 20) + 1;

  var diceTotal = d1+d2;

  die1.innerHTML = d1;
  die2.innerHTML = d2;

  status.innerHTML = "You rolled "+diceTotal+".";

  if(d1 == d2){
    status.innerHTML = "";
    status.innerHTML += " You rolled a DOUBLE!"
  }
}
