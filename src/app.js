/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  var first = "A ";
  var adj = [
    "two headed ",
    "flying ",
    "angry ",
    "lonely ",
    "crazy ",
    "glowing ",
    "smelly ",
    "slow ",
    "old "
  ];
  var who = [
    "jogger ",
    "racoon ",
    "dog ",
    "merchant ",
    "driver ",
    "cat ",
    "aliens "
  ];
  var action = [
    "took my ",
    "threw my ",
    "yelled at my ",
    "kicked my ",
    "stole my ",
    "burned my ",
    "bit my ",
    "hit my "
  ];
  var what = [
    "toe ",
    "car ",
    "watch ",
    "shoe ",
    "wallet ",
    "shirt ",
    "keys ",
    "computer ",
    "phone ",
    "sandwich "
  ];
  var where = [
    "on the street",
    "in my house",
    "in my driveway",
    "in front of the office",
    "near the mall",
    "near the toilet",
    "at the bus station"
  ];

  var rdm1 = Math.floor(Math.random() * adj.length);
  var rdm2 = Math.floor(Math.random() * who.length);
  var rdm3 = Math.floor(Math.random() * action.length);
  var rdm4 = Math.floor(Math.random() * what.length);
  var rdm5 = Math.floor(Math.random() * where.length);

  document.querySelector("#theexcuse").innerHTML =
    first + adj[rdm1] + who[rdm2] + action[rdm3] + what[rdm4] + where[rdm5];
};
