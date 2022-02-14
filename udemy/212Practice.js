var romanToInt = function (s) {
  let numbers = [];
  for (i = 0; i < s.length; i++) {
    if (s[i] == "V") {
      if (s[i - 1] == "I") {
        numbers.push("4");
      } else {
        numbers.push("5");
      }
    }
    if (s[i] == "X") {
      if (s[i + 1] == "L" || s[i + 1] == "C") {
        continue;
      } else if (s[i - 1] == "I") {
        numbers.push("9");
      } else {
        numbers.push("10");
      }
    }
    if (s[i] == "L") {
      if (s[i - 1] == "X") {
        numbers.push("40");
      } else {
        numbers.push("50");
      }
    }
    if (s[i] == "C") {
      if (s[i + 1] == "D" || s[i + 1] == "M") {
        continue;
      } else if (s[i - 1] == "X") {
        numbers.push("90");
      } else {
        numbers.push("100");
      }
    }
    if (s[i] == "D") {
      if (s[i - 1] == "C") {
        numbers.push("400");
      } else {
        numbers.push("500");
      }
    }
    if (s[i] == "M") {
      if (s[i - 1] == "C") {
        numbers.push("900");
      } else {
        numbers.push("1000");
      }
    }
    if (s[i] == "I") {
      if (s[i + 1] == "V" || s[i + 1] == "X") {
        continue;
      } else {
        numbers.push("1");
      }
    }
    numbersFixed = [];
    for (i = 0; i < numbers.length; i++) {
      if (numbers[i].length > 1) {
        numbersFixed.push(numbers[i].charAt(0));
        console.log(numbersFixed);
      } else {
        numbersFixed.push(numbers[i]);
        console.log(numbersFixed);
      }
    }
  }
  console.log(numbersFixed);
};

romanToInt("MCMXCIV"); //supposed to be 1994
romanToInt("III"); //supposed to be 3
