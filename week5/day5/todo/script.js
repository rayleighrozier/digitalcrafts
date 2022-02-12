console.log("hi");

const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector("#add-button");
const pendingContainer = document.querySelector("#pending-container");
const completedContainer = document.querySelector("#completed-container");

addButton.addEventListener("click", () => {
  let userInput = inputBox.value;
  newPendingTask = document.createElement("div");
  newPendingTask.className = "pending-task";
  newPendingTask.className += " all-tasks";

  newCheckBox = document.createElement("input");
  newCheckBox.type = "checkBox";

  newText = document.createElement("p");
  newText.innerText = userInput;
  //   newPendingTask.innerText = userInput;
  newPendingTask.append(newCheckBox);
  newPendingTask.append(newText);
  pendingContainer.append(newPendingTask);
});
