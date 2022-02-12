//grabbing everything
const dealButton = document.querySelector("#deal-button");
const hitButton = document.querySelector("#hit-button");
const standButton = document.querySelector("#stand-button");
const player = document.querySelector(".player");
const dealer = document.querySelector(".dealer");
const playerScoreDisplay = document.querySelector("#player-score");
const dealerScoreDisplay = document.querySelector("#dealer-score");
const buttonContainer = document.querySelector(".button-container");
const result = document.querySelector(".result");

//misc variables
const cardList = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];
const cardSuits = ["Spades", "Diamonds", "Clubs", "Hearts"];
let playerScore = 0;
let dealerScore = 0;
let mysteryCard = {};

//functions
const dealCards = () => {
  const currentCard = {
    suit: "",
    value: "",
  };
  const randomSuit = Math.floor(Math.random() * cardSuits.length);
  const randomCardList = Math.floor(Math.random() * cardList.length);
  currentCard.suit = cardSuits[randomSuit];
  currentCard.value = cardList[randomCardList];
  return currentCard;
};

const newCard = (user) => {
  const handElement = document.createElement("img");
  const hand = dealCards();

  //dealer version
  if (user === "dealer") {
    if (
      hand.value != "King" &&
      hand.value != "Queen" &&
      hand.value != "Jack" &&
      hand.value != "Ace"
    ) {
      dealerScore = dealerScore + parseInt(hand.value);
    } else if (hand.value == "Ace") {
      if (dealerScore + 11 > 21) {
        dealerScore = dealerScore + 1;
      } else {
        dealerScore = dealerScore + 11;
        dealerHasAce = true;
      }
    } else {
      dealerScore = dealerScore + 10;
    }
    dealerScoreDisplay.innerText = `Score: ${dealerScore}`;
    handElement.className = "dealerCards";
    handElement.src = `./images/${
      hand.value
    }_of_${hand.suit.toLowerCase()}.png`;
    dealer.append(handElement);
  }

  //player version
  if (user === "player") {
    if (
      hand.value != "King" &&
      hand.value != "Queen" &&
      hand.value != "Jack" &&
      hand.value != "Ace"
    ) {
      playerScore = playerScore + parseInt(hand.value);
    } else if (hand.value == "Ace") {
      if (playerScore + 11 > 21) {
        playerScore = playerScore + 1;
      } else {
        playerScore = playerScore + 11;
        playerHasAce = true;
      }
    } else {
      playerScore = playerScore + 10;
    }
    playerScoreDisplay.innerText = `Score: ${playerScore}`;
    handElement.className = "playerCards";
    handElement.src = `./images/${
      hand.value
    }_of_${hand.suit.toLowerCase()}.png`;
    player.append(handElement);
  }
};

const newMysteryCard = () => {
  const handElement = document.createElement("img");
  const hand = dealCards();
  mysteryCard.suit = hand.suit;
  mysteryCard.value = hand.value;
  if (
    hand.value != "King" &&
    hand.value != "Queen" &&
    hand.value != "Jack" &&
    hand.value != "Ace"
  ) {
    dealerScore = dealerScore + parseInt(hand.value);
  } else if (hand.value == "Ace") {
    if (dealerScore + 11 > 21) {
      dealerScore = dealerScore + 1;
    } else {
      dealerScore = dealerScore + 11;
    }
  } else {
    dealerScore = dealerScore + 10;
    dealerHasAce = true;
  }
  dealerScoreDisplay.innerText = "Score: ???";
  handElement.className = "dealerCards";
  handElement.setAttribute("id", "mystery");
  handElement.src = "./images/card_back.png";
  dealer.append(handElement);
};

const revealMysteryCard = () => {
  mysteryPic = document.getElementById("mystery");
  mysteryPic.src = `./images/${
    mysteryCard.value
  }_of_${mysteryCard.suit.toLowerCase()}.png`;
  dealerScoreDisplay.innerText = `Score: ${dealerScore}`;
};

const printResult = (str) => {
  let resultText = document.createElement("h3");
  resultText.innerText = `${str}`;
  resultText.className = "result-message";
  result.append(resultText);
};

const compareScores = () => {
  if (dealerScore > playerScore) {
    printResult("Dealer wins. Press 'Deal' to play again!");
  } else if (dealerScore < playerScore) {
    printResult("You win! Press 'Deal' to play again!");
  } else {
    printResult("It's a tie. Press 'Deal' to play again!");
  }
};

//when you click deal
dealButton.addEventListener("click", () => {
  //reset everything
  player.innerText = "";
  dealer.innerText = "";
  dealerScore = 0;
  playerScore = 0;
  playerHasAce = false;
  dealerHasAce = false;
  if (result.contains(document.querySelector(".result-message"))) {
    result.removeChild(document.querySelector(".result-message"));
  }
  // deal cards
  newCard("player");
  newCard("player");
  newCard("dealer");
  // deal flipped over card
  newMysteryCard();
  // if automatic 21
  if (playerScore == 21) {
    printResult("21! You win! Press 'Deal' to play again!");
  }
});

//when you click hit
hitButton.addEventListener("click", () => {
  //give a new card unless you bust/game is already over
  if (playerScore < 21 && !document.querySelector(".result-message")) {
    newCard("player");
    // if you are about to bust but have an Ace, change Ace value to 1
    if (playerScore > 21 && !document.querySelector(".result-message")) {
      if (playerHasAce === true) {
        playerScore = playerScore - 10;
        playerScoreDisplay.innerText = `Score: ${playerScore}`;
        playerHasAce = !playerHasAce;
      } else {
        printResult("Bust! Dealer wins. Press 'Deal' to play again!");
      }
    }
    //if new card gives you 21 exactly
    if (playerScore == 21 && !document.querySelector(".result-message")) {
      printResult("21! You win! Press 'Deal' to play again!");
    }
  }
});

//when you click stand
standButton.addEventListener("click", () => {
  //reveal flipped card/score
  revealMysteryCard();
  //add dealer cards until you hit 17 or over
  while (dealerScore < 17 && !document.querySelector(".result-message")) {
    newCard("dealer");
  }
  if (dealerScore == 21 && !document.querySelector(".result-message")) {
    printResult("Dealer wins with 21. Press 'Deal' to play again!");
  }
  if (dealerScore > 21 && !document.querySelector(".result-message")) {
    //if dealer us about to bust but they have an Ace, change Ace value to 1
    if (dealerHasAce === true) {
      dealerScore = dealerScore - 10;
      dealerScoreDisplay.innerText = `Score: ${dealerScore}`;
      dealerHasAce = !dealerHasAce;
      while (dealerScore < 16) {
        newCard("dealer");
      }
      compareScores();
    } else {
      printResult("Dealer busts! You win. Press 'Deal' to play again!");
    }
  }
  if (
    dealerScore >= 17 &&
    dealerScore < 21 &&
    !document.querySelector(".result-message")
  ) {
    compareScores();
  }
});
