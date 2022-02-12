//grab
const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector("#add-button");
const pendingContainer = document.querySelector("#pending-container");
const completedContainer = document.querySelector("#completed-container");

//functions
const moveTask = (e) => {
  if (e.path[0].checked) {
    completedContainer.append(e.path[1]);
  } else {
    pendingContainer.append(e.path[1]);
  }
};

const deleteTask = (e) => {
  if (e.path[2].id == "pending-container") {
    pendingContainer.removeChild(e.path[1]);
  }
  if (e.path[2].id == "completed-container") {
    completedContainer.removeChild(e.path[1]);
  }
};

addButton.addEventListener("click", () => {
  let userInput = inputBox.value;
  inputBox.value = "";

  //create div
  newTask = document.createElement("div");
  newTask.className = "task";

  //create checkbox
  newCheckBox = document.createElement("input");
  newCheckBox.type = "checkBox";
  newCheckBox.className = "check-box";
  //move task when checked/unchecked
  newCheckBox.addEventListener("change", (e) => moveTask(e));

  // create p
  newText = document.createElement("p");
  newText.innerText = userInput;

  //create remove button
  newRemove = document.createElement("button");
  newRemove.innerText = "Remove";
  newRemove.className = "remove-button";
  //remove task on click
  newRemove.addEventListener("click", (e) => deleteTask(e));

  //append
  newTask.append(newCheckBox);
  newTask.append(newText);
  newTask.append(newRemove);
  pendingContainer.append(newTask);
});
