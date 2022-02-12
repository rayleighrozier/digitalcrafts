console.log("hi");

const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector("#add-button");
const pendingContainer = document.querySelector("#pending-container");
const completedContainer = document.querySelector("#completed-container");

const moveTask = (e) => {
  if (e.path[0].checked) {
    completedContainer.append(e.path[1]);
  } else {
    pendingContainer.append(e.path[1]);
  }
};

addButton.addEventListener("click", () => {
  let userInput = inputBox.value;

  //create div
  newTask = document.createElement("div");
  newTask.className = "pending-task";
  newTask.className += " all-tasks";

  //create checkbox
  newCheckBox = document.createElement("input");
  newCheckBox.type = "checkBox";
  newCheckBox.className = "check-box";
  //move between pending and completed
  newCheckBox.addEventListener("change", (e) => moveTask(e));

  // create p
  //newText is the p -- NOT THE ACTUAL TEXT
  newText = document.createElement("p");
  newText.innerText = userInput;

  //create remove button
  newRemove = document.createElement("button");
  newRemove.innerText = "Remove";
  newRemove.className = "remove-button";

  //appending
  newTask.append(newCheckBox);
  newTask.append(newText);
  newTask.append(newRemove);
  pendingContainer.append(newTask);
});
