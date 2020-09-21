var dragonEle = document.body.querySelector(".dragon");
var user = Number(
  prompt("Enter the damage to be dealt to the dragon, between 1 and 5.")
);
var userHealth = 0;
var dragonHealth = 0;
while (user >= 0 && user <= 5) {
  while (userHealth <= 5 || dragonHealth <= 10) {
    damage = Math.floor(Math.random() * user + 1);
    var dragon = Math.floor(Math.random() * 2 + 1);
    document.body.querySelector(".dragon").innerHTML =
      "The dragon has hit you and did " +
      dragon +
      " unit of damage. You hit the dragon and did " +
      damage +
      " unit of damage!";

    dragonHealth += damage;
    userHealth += dragon;
  }
}
dragonHealth += damage;
userHealth += dragon;
while (user > 5) {
  damage = 1;
  var dragon = Math.floor(Math.random() * 2 + 1);
  document.body.querySelector(".dragon").innerHTML =
    "The dragon has hit you and did " +
    dragon +
    " unit of damage. You hit the dragon and did " +
    damage +
    " unit of damage!";
}
dragonHealth += damage;
userHealth += dragon;
while (userHealth > 5 || dragonHealth > 10) {
  if (userHealth > 5) {
    dragonEle.innerHTML = "Dragon has defeated you, play again.";
    if (dragonHealth > 10) {
      dragonEle.innerHTML =
        "You won. The dragon has been slayed, Congratulations.";
    }
  }
}