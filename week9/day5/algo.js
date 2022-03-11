let competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
let results = [0, 0, 1];
const tournamentWinner = (competitions, results) => {
  let scores = {};
  //tally scores (one loop)
  for (i = 0; i < competitions.length; i++) {
    let currentComp = competitions[i];
    let currentResult = results[i];
    //away wins
    if (currentResult === 1) {
      if (scores[currentComp[0]]) {
        scores[currentComp[0]] += 3;
      } else {
        scores[currentComp[0]] = 3;
      }
    }
    //home wins
    else {
      if (scores[currentComp[1]]) {
        scores[currentComp[1]] += 3;
      } else {
        scores[currentComp[1]] = 3;
      }
    }
  }
  console.log("Final scores:", scores);
  let winner = "";
  winnerValue = 0;
  //compare scores (second loop, not nested)
  for (score in scores) {
    if (scores[score] > winnerValue) {
      winner = score;
      winnerValue = scores[score];
    }
  }
  console.log(`The winner is ${winner} with a final score of ${winnerValue}`);
  return winner;
};

tournamentWinner(competitions, results);
