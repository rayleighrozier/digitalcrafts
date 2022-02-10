//figure out how to get ace logic
//figure out how to make window alerts play after the card displays
const dealButton = document.querySelector("#deal-button");
const hitButton = document.querySelector("#hit-button");
const standButton = document.querySelector("#stand-button");
const player = document.querySelector(".player");
const dealer = document.querySelector(".dealer");
const playerScoreDisplay = document.querySelector("#player-score");
const dealerScoreDisplay = document.querySelector("#dealer-score");
const playerAllCards = [];
const dealerAllCards = [];
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

function dealCards() {
  const currentCard = {
    suit: "",
    value: "",
  };
  const randomSuit = Math.floor(Math.random() * cardSuits.length);
  const randomCardList = Math.floor(Math.random() * cardList.length);
  currentCard.suit = cardSuits[randomSuit];
  //   add your conditional
  currentCard.value = cardList[randomCardList];
  return currentCard;
}

//separate new card into dealer and player

const newCard = (user) => {
  const handElement = document.createElement("img");
  const hand = dealCards();
  if (user === "dealer") {
    dealerAllCards.push(hand);
    if (
      hand.value != "King" &&
      hand.value != "Queen" &&
      hand.value != "Jack" &&
      hand.value != "Ace"
    ) {
      dealerScore = dealerScore + parseInt(hand.value);
    } else if (hand.value == "Ace") {
      dealerScore = dealerScore + 11;
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
    playerAllCards.push(hand);
    if (
      hand.value != "King" &&
      hand.value != "Queen" &&
      hand.value != "Jack" &&
      hand.value != "Ace"
    ) {
      playerScore = playerScore + parseInt(hand.value);
    } else if (hand.value == "Ace") {
      playerScore = playerScore + 11;
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

dealButton.addEventListener("click", () => {
  newCard("dealer");
  newCard("dealer");
  newCard("player");
  newCard("player");
  if (dealerScore == 21) {
    window.alert("Dealer wins with 21!");
  }
  if (playerScore == 21) {
    window.alert("21! You win!");
  }
});

hitButton.addEventListener("click", () => {
  if (playerScore < 21) {
    newCard("player");
    if (playerScore > 21) {
      window.alert("Bust! Dealer wins.");
    }
    if (playerScore == 21) {
      window.alert("21! You win!");
    }
  }
});

standButton.addEventListener("click", () => {
  while (dealerScore < 17) {
    newCard("dealer");
  }
  if (dealerScore == 21) {
    window.alert("Dealer wins with 21.");
  }
  if (dealerScore > 21) {
    window.alert("Dealer busts! You win.");
  }
  if (dealerScore >= 17 && dealerScore < 21) {
    if (dealerScore > playerScore) {
      window.alert("Dealer wins.");
    } else if (dealerScore < playerScore) {
      window.alert("You win!");
    } else {
      window.alert("It's a tie.");
    }
  }
});
