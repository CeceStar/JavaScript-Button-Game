// Player score number
const scoreNumber = document.querySelector(".scorenumber");
const yourScore = document.querySelector(".your-score");
//Button in the html document
const dontClickBtn = document.querySelector(".button");
//Text over the game window
const firstText = document.querySelector(".text-part");

/// Timer
const timerClock = document.querySelector(".timer");
let seconds = 1000 * 20;

let numberOfClicks = 0;
let highScoreNumber = 0;

//EventListeners
dontClickBtn.addEventListener("mouseover", hover);
dontClickBtn.addEventListener("click", clickBnt);

//
//FUNCTIONS
//

function startTimer() {
  let timer = setInterval(countDown, 1000);
  function countDown() {
    if (seconds >= 10000) {
      timerClock.innerHTML = "0:" + seconds / 1000;
      seconds -= 1000;
    } else if (seconds <= 9000) {
      timerClock.innerHTML = "0:0" + seconds / 1000;
      seconds -= 1000;
    }
    if (seconds < 0) {
      clearInterval(timer);
      dontClickBtn.style;
      alert(
        "I told you " +
          numberOfClicks +
          " times to not click!! You are now BANNED from this website! Don't you ever come back!"
      );
      numberOfClicks = 0;
      seconds = 1000 * 20;
      timerClock.innerHTML = " ";
      firstText.innerHTML = "";
      dontClickBtn.innerHTML = "Ha-ha, you can't click me!";
      setTimeout(function () {
        scoreNumber.innerHTML = " ";
        yourScore.innerHTML = " ";
      }, 5000);
    }
  }
}

function hover() {
  // Random number for bottom.
  let random1 = Math.floor(Math.random() * 90 + 1);
  // Random number for left.
  let random2 = Math.floor(Math.random() * 88 + 1);
  setTimeout(function () {
    dontClickBtn.style.bottom = random1 + "%";
    dontClickBtn.style.left = random2 + "%";
  }, 300); //This last number should be 120/150 to make it hard.
}

function clickBnt() {
  numberOfClicks++;
  console.log(numberOfClicks);
  if (numberOfClicks === 1) {
    startTimer();
    yourScore.innerHTML = "Your score:";
    dontClickBtn.innerHTML = "Don't click me";
    firstText.innerHTML =
      "Oops! You accidentally clicked the button. No worries, but please don't do it again.";
  } else if (numberOfClicks === 2) {
    firstText.innerHTML =
      "Oh no, you clicked again! Please read instructions, The button is not for pressing.";
  } else if (numberOfClicks === 3) {
    firstText.innerHTML = "To whom it concerns, please don't click the button.";
  } else if (numberOfClicks === 4) {
    firstText.innerHTML = "... Why are you clicking?! Do NOT click the button!";
  } else if (numberOfClicks === 5) {
    firstText.innerHTML =
      "Im WARNING you. DO NOT CONTINUE clicking the button!";
  } else if (numberOfClicks === 6) {
    firstText.innerHTML = "Can't you read? Do not. Click. The BUTTON.";
  } else {
    firstText.innerHTML = "STOP CLICKING";
  }
  let scoreAfterClick = numberOfClicks * 100;
  scoreNumber.innerHTML = scoreAfterClick;
  highlightHtmlChanges();
}

function highlightHtmlChanges() {
  scoreNumber.classList.add("transition-score");
  firstText.classList.add("transition");
  setTimeout(function () {
    scoreNumber.style.transition = "all 2s";
    scoreNumber.classList.add(".score");
    firstText.style.transition = "all 2s";
    firstText.classList.add("text-part");
  }, 1000);
  setTimeout(function () {
    scoreNumber.style.transition = "all 1s";
    scoreNumber.classList.remove("transition-score");
    firstText.style.transition = "all 1s";
    firstText.classList.remove("transition");
  }, 1000);
}
