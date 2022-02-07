// Write a function tipAmount that is given the bill amount and
// the level of service (one of good, fair and poor) and
// returns the dollar amount for the tip. Based on:
// good -> 20% fair -> 15% bad -> 10%

function tipAmount(bill, service) {
  if (service === "good" && Number.isInteger(bill)) {
    return bill * 0.2;
  } else if (service === "fair" && Number.isInteger(bill)) {
    return bill * 0.15;
  } else if (service === "bad" && Number.isInteger(bill)) {
    return bill * 0.1;
  } else {
    return "not a valid input";
  }
}

// Write a function totalAmount that takes the same arguments as tipAmount
// except it returns the total as the tip amount plus the bill amount.
// This function may make use of tipAmount as a sub-task.

function totalAmount(bill, service) {
  if (
    (service === "good" && Number.isInteger(bill)) ||
    (service === "fair" && Number.isInteger(bill)) ||
    (service === "bad" && Number.isInteger(bill))
  ) {
    return bill + tipAmount(bill, service);
  } else {
    return "not a valid input";
  }
}
