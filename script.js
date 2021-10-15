"use strict";

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

const cheatPlaceholder = document.querySelector(".cheat-placeholder");
const container = document.querySelector(".flex-container");

const resetTypedCheat = () => {
  cheatPlaceholder.textContent = "";
};

const activeCheat = () => {
  let span = document.createElement("span");
  document.getElementById("message").style.color = "#60b347";
  span.appendChild(document.createTextNode("É HORA DO SHOW"));
  container.append(span);
  resetTypedCheat();
};

let codePosition = 0;
resetTypedCheat();

document.addEventListener("keydown", (e) => {
  if (e.code == konamiCode[codePosition]) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(konamiCode[codePosition]));
    cheatPlaceholder.append(li);

    codePosition++;

    if (codePosition == konamiCode.length) {
      activeCheat();
    }
  } else {
    codePosition = 0;
    resetTypedCheat();
  }
});
