/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Suzon Ahmmed
 * Motivated by : Sumit Saha ( Learn with Sumit )
 * Date: 08/105/2022
 *
 */

// elements selection
let newTask = document.querySelector("#new-task");

let form = document.querySelector("form");
let incompleteList = document.querySelector("#incomplete-list");
let completeList = document.querySelector("#complete-list");

// same task name are not allowed

// function validateForm() {
//    let incompleteTaskValue = incompleteList.querySelectorAll('li label');
//    for (let i = 0; i < incompleteTaskValue.length; i++) {
//       if (incompleteTaskValue[i].innerHTML == newTask.value) {
//          alert('This task already have in incomplete list.');
//          return false;
//          // newTask.value = "";
//       }
//    }
//  }

// for (let i = 0; i < incompleteTaskValue.length; i++) {
//    if (incompleteTaskValue[i].innerHTML == newTask.value) {
//       alert('This task already have in incomplete list.');
//       console.log(incompleteTaskValue[i].innerHTML);
//       // newTask.value = "";
//    }
// }
let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkbox = document.createElement("input");
  let label = document.createElement("label");

  label.innerHTML = task;
  checkbox.type = "checkbox";

  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  return listItem;
};

let incompleteTask = function (event) {
  event.preventDefault();

  let listItem = createTask(newTask.value);
  incompleteList.appendChild(listItem);
  newTask.value = "";

  bindInCompleteItem(listItem, completeTask);
};

let completeTask = function () {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeList.appendChild(listItem);
  bindCompleteItem(listItem, deleteTask);
};

let deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

let bindInCompleteItem = function (taskItem, putIntoCompleteList) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = putIntoCompleteList;
};

let bindCompleteItem = function (taskItem, deleteFromCompleteList) {
  let deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteFromCompleteList;
};

for (let i = 0; i < incompleteList.children.length; i++) {
  bindInCompleteItem(incompleteList.children[i], completeTask);
}

for (let i = 0; i < completeList.children.length; i++) {
  bindCompleteItem(completeList.children[i], deleteTask);
}

form.addEventListener("submit", incompleteTask);
