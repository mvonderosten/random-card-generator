/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRanSuit());
  document.querySelector(".card").innerHTML = generateRanNum();
};

let generateRanNum = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let rannum = Math.floor(Math.random() * numbers.length);

  return numbers[rannum];
};

let generateRanSuit = () => {
  let suit = ["heart", "spade", "diamond", "club"];

  let ranSuit = Math.floor(Math.random() * suit.length);

  return suit[ranSuit];
};
