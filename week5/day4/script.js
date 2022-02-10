const cardList = [
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
  "K",
];
const suitOfCards = [
  { name: "Spades", cards: cardList },
  { name: "Hearts", cards: cardList },
  { name: "Clubs", cards: cardList },
  { name: "Diamonds", cards: cardList },
];
const mainContainer = document.querySelector(".main-container");

const createCards = () => {
  for (const suit of suitOfCards) {
    const cardSuit = document.createElement("div");
    const cardHeader = document.createElement("h1");
    // create individual cards
    cardSuit.append(cardHeader);
    for (const card of suit.cards) {
      const actualCard = document.createElement("div");
      const cardHeader = document.createElement("h3");
      cardHeader.innerText = card;
      actualCard.className = "actualCards";
      actualCard.append(cardHeader);
      cardSuit.append(actualCard);
    }
    cardSuit.className = suit.name;
    cardHeader.innerText = suit.name;

    mainContainer.append(cardSuit);
  }
};

const newButton = document.createElement("button");
newButton.innerText = "click me";
newButton.addEventListener("click", (e) => createCards());
mainContainer.append(newButton);
