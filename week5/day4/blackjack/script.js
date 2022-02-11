//figure out how to get ace logic
//figure out how to make window alerts play after the card displays
const dealButton = document.querySelector("#deal-button");
const hitButton = document.querySelector("#hit-button");
const standButton = document.querySelector("#stand-button");
const player = document.querySelector(".player");
const dealer = document.querySelector(".dealer");
const playerScoreDisplay = document.querySelector("#player-score");
const dealerScoreDisplay = document.querySelector("#dealer-score");
const buttonContainer = document.querySelector(".button-container");
// const playerAllCards = []; << may need later
// const dealerAllCards = [];
const result = document.querySelector(".result");
let playerScore = 0;
let dealerScore = 0;
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
  if (user === "dealer") {
    // dealerAllCards.push(hand);<< may need later
    if (
      hand.value != "King" &&
      hand.value != "Queen" &&
      hand.value != "Jack" &&
      hand.value != "Ace"
    ) {
      dealerScore = dealerScore + parseInt(hand.value);
    } else if (hand.value == "Ace") {
      //ace logic
      if (dealerScore + 11 > 21) {
        dealerScore = dealerScore + 1;
      } else {
        dealerScore = dealerScore + 11;
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

  if (user === "player") {
    // playerAllCards.push(hand); << may need later
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

const printResult = (str) => {
  let resultText = document.createElement("h3");
  resultText.innerText = `${str}`;
  resultText.className = "current-result";
  result.append(resultText);
};

dealButton.addEventListener("click", () => {
  player.innerText = "";
  dealer.innerText = "";
  dealerScore = 0;
  playerScore = 0;
  if (result.contains(document.querySelector(".current-result"))) {
    result.removeChild(document.querySelector(".current-result"));
  }
  newCard("dealer");
  newCard("dealer");
  newCard("player");
  newCard("player");
  if (dealerScore == 21) {
    printResult("Dealer wins with 21! Press 'Deal' to play again!");
  }
  if (playerScore == 21) {
    printResult("21! You win! Press 'Deal' to play again!");
  }
});

hitButton.addEventListener("click", () => {
  if (playerScore < 21 && !document.querySelector(".current-result")) {
    newCard("player");
    if (playerScore > 21 && !document.querySelector(".current-result")) {
      printResult("Bust! Dealer wins. Press 'Deal' to play again!");
    }
    if (playerScore == 21 && !document.querySelector(".current-result")) {
      printResult("21! You win!Press 'Deal' to play again!");
    }
  }
});

standButton.addEventListener("click", () => {
  while (dealerScore < 16 && !document.querySelector(".current-result")) {
    newCard("dealer");
  }
  if (dealerScore == 21 && !document.querySelector(".current-result")) {
    printResult("Dealer wins with 21. Press 'Deal' to play again!");
  }
  if (dealerScore > 21 && !document.querySelector(".current-result")) {
    printResult("Dealer busts! You win. Press 'Deal' to play again!");
  }
  if (
    dealerScore >= 17 &&
    dealerScore < 21 &&
    !document.querySelector(".current-result")
  ) {
    if (dealerScore > playerScore) {
      printResult("Dealer wins. Press 'Deal' to play again!");
    } else if (dealerScore < playerScore) {
      printResult("You win! Press 'Deal' to play again!");
    } else {
      printResult("It's a tie. Press 'Deal' to play again!");
    }
  }
});
