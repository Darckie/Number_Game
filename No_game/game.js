"use strict";
/*
console.log(document.querySelector(".message").textContent);
console.log(
  (document.querySelector(".message").textContent = "recorrect number")
);

//handling the values   in the programs
console.log((document.querySelector(".guess").value = 23));
*/
//event listener>>>>>>>>>>>>>>>>>>>>>>>
var numberX = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  console.log(document.querySelector(".message"));
  const guessG = document.querySelector(".guess").value;

  console.log(guessG);
  if (!guessG) {
    console.log(
      "you have not entered invalid number pzz enter the valid number  "
    );
    document.querySelector(".message ").textContent = "INVALID NUMBER";
  }

  // LOOSING  SENERIO
  else if (guessG > numberX) {
    console.log("your number is greater than the actual number try once more");
    document.querySelector(".message").textContent = "GREATER VALUE! TRY MORE";
    score = score - 1;
    console.log((document.querySelector(".score").textContent = score));

    if (score < 0) {
      document.querySelector(".message").textContent = "YOU LOOSE THE GAME";

      document.querySelector(".number").textContent = numberX;
      console.log((document.querySelector(".score").textContent = "0"));
    }
  } else if (guessG < numberX) {
    console.log("you have enter smaller value than the actual one try more ");
    document.querySelector(".message").textContent = "SMALLER VALUE! TRY MORE";
    score = score - 1;
    console.log((document.querySelector(".score").textContent = score));

    if (score < 0) {
      document.querySelector(".message").textContent = "YOU LOOSE THE GAME";

      document.querySelector(".number").textContent = numberX;
      console.log((document.querySelector(".score").textContent = "0"));
    }
  }
  // WINNING SENERIO!
  else if (guessG == numberX) {
    document.querySelector(".message").textContent =
      "YHHH YOU ARE CORRECT.[WINNER WINNER PANEER DINNER.]";
    document.querySelector(".number").textContent = numberX;
    document.querySelector("body").style.backgroundColor = "#009eed";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // INVALID CASE!!!!!!!!!
  } else {
    document.querySelector(".message").textContent = "try again";
  }
});

//restart game:::::::::::::::::::::::::::::::::::

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  numberX = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing..";

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222222";
});
