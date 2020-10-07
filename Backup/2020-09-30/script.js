// Player score
const scoreNumber = document.getElementById("scorenumber");
const introParagraph = document.querySelector(".first-paragraph");

//Button in the html document
const dontClickBtn = document.querySelector(".button");
let numberOfClicks = 0;

//altert text over the game window
const alertText = document.getElementById("text-part");

//EventListeners
// dontClickBtn.addEventListener("mouseover", hover);
dontClickBtn.addEventListener("click", click);

//
//FUNCTIONS
//
function hover() {
  // Random number for bottom.
  let random1 = Math.floor(Math.random() * 90 + 1);
  // Random number for left.
  let random2 = Math.floor(Math.random() * 88 + 1);
  setTimeout(function () {
    dontClickBtn.style.bottom = random1 + "%";
    dontClickBtn.style.left = random2 + "%";
  }, 150); //This last number should be 120/150 to make it hard.
}

function click() {
  numberOfClicks++;
  console.log(numberOfClicks);
  if (numberOfClicks === 1) {
    alertText.innerHTML =
      "Oops! You accidentally clicked the button. No worries, but please don't do it again.";
  } else if (numberOfClicks === 2) {
    alertText.innerHTML =
      "Oh no, you clicked again! Please read instructions, The button is not for pressing.";
  } else if (numberOfClicks === 3) {
    alertText.innerHTML = "To whom it concerns, please don't click the button.";
  } else if (numberOfClicks === 4) {
    alertText.innerHTML = "... Why are you clicking?! Do NOT click the button!";
  } else if (numberOfClicks === 5) {
    alertText.innerHTML =
      "Im WARNING you. DO NOT CONTINUE clicking the button!";
  } else if (numberOfClicks === 6) {
    alertText.innerHTML = "Can't you read? Do not. Click. The BUTTON.";
  } else {
    alertText.innerHTML = "STOP CLICKING";
  }
  let scoreAfterClick = numberOfClicks * 100;
  scoreNumber.innerHTML = scoreAfterClick;
  highlightHtmlChanges();
}

function highlightHtmlChanges() {
  introParagraph.classList.add("test");
  setTimeout(function () {
    introParagraph.style.transition = "all 3s";
    introParagraph.classList.add("first-paragraph");
  }, 1000);
  setTimeout(function () {
    introParagraph.style.transition = "all 2s";
    introParagraph.classList.remove("test");
  }, 1000);
}

// function goBackChanges(){
//     introParagraph.classList.remove("test");
//     introParagraph.style.transition = "all 5s";
// }

//to create a mouse event enter and leave to maybe give different alter? Look at
//https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
