let names = ["Bob", "Luna", "Smith"];

const reverseNames = (names) => {
  const reverseSingleName = (name) => {
    let reversed = "";
    for (i = name.length - 1; i >= 0; i--) {
      reversed += name[i];
    }
    return reversed;
  };
  for (name in names) {
    names[name] = reverseSingleName(names[name]);
  }
  console.log(names);
  return names;
};

// reverseNames(names);

const capitalizeNames = (names) => {
  for (i = 0; i < names.length; i++) {
    names[i] = names[i].toUpperCase();
  }
  console.log(names);
  return names;
};
// capitalizeNames(names);

const findSmith = (names) => {
  for (i = 0; i < names.length; i++) {
    if (names[i] === "smith" || names[i] === "Smith") {
      console.log(`Smith is at ${i}`);
      return i;
    }
  }
};

findSmith(names);
