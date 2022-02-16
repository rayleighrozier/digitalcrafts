console.log("hi");

const form = document.querySelector("form");

const checkFirstName = (firstName) => {
  if (firstName.length < 2) {
    window.alert("Please put in at least two characters.");
    return false;
  } else {
    return true;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hi");
  //
  //   const firstName = document.querySelector(".firstName").value;
  //   console.log(firstName);
});
