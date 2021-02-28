const todos = [];

const newItemForm = document.getElementById("newItemForm");
const toDoList = document.getElementById("toDoList");
const resultBox = document.getElementById("displayResult");
const reCalcBtn = document.getElementById("reCalcBtn");

newItemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = document.getElementById("newItem").value;
  if (todos.includes(item) === false) {
    todos.push(item);
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    toDoList.appendChild(li);
  }
  document.getElementById("newItem").value = "";
});

reCalcBtn.addEventListener("click", (e) => {
  if (todos.length !== 0) {
    const todo = todos[Math.floor(Math.random() * todos.length)];
    resultBox.innerText = `You should ${todo}`;
  } else {
    resultBox.innerText = "Please enter at least 1 task";
  }
});
