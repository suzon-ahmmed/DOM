//document.title='Play with DOM'
// console.dir(document.title);
//console.log(document.getElementById('firstDiv'));
// let headerContent = document.getElementById('header');

// console.log(headerContent.textContent);
// console.log(headerContent.innerText);
// headerContent.style.textTransform = 'lowercase';
// console.log(typeof(document));
// console.dir(document);
// console.log(document.body);
// document.title = 'Play with DOM';
// for(let element of document.all){
//    console.log(element);
// }
//get element by id
// console.log(document.links);
// console.log(document.getElementById('header'))
// let headertxt = document.getElementById('header');

// // headertxt.textContent='Try to learn DOM';
// console.log(headertxt.innerText);
// console.log(headertxt.textContent);
// console.log(headertxt.innerHTML);
// headertxt.style.color= 'red';
// headertxt.style.fontSize = '50px';
// console.dir(document);
//className
// let firstUl = document.getElementById('listid');
// let list =firstUl.getElementsByClassName('item');
// for(let i=0; i<list.length; i++){
//    list[i].style.color ='red';

// }

//tag name
// let divui = document.getElementById('listid');
// let tagLi = divui.getElementsByTagName('a');
// console.log(tagLi);
// for(let i=0; i<tagLi.length; i++){
//    tagLi[i].style.textDecoration ='none';
//    tagLi[i].style.padding ='10px';
//    tagLi[i].style.fontSize ='10px';
// }
// let logoimg = document.getElementsByTagName('img');
// console.log(logoimg);
// for(let i=0; i<logoimg.length; i++){
//    logoimg[i].style.width ='100px';
// }

//qurey selector
// let list =  document.querySelector('.item');
// console.log(list);
// let secondList = document.querySelector('.lists-2:last-child');
// let lastItem = secondList.querySelector('.item:last-child');
// console.log(secondList);
// // element.style.color ='red';
// for(element of secondList){
//    element.style.color ='red';
// }
// lastItem.style.color ='red';

// document.querySelectorAll('')
// secondList.style.color ='red';
// let h1_tag = document.getElementsByTagName('input');
// console.log(h1_tag);
// let lastLi = document.querySelector('li:first-child');
// let lastA = lastLi.querySelector('a');
// // console.log(ulList);
// // let items = ulList.querySelector('.item');
// // for(let i=0; i<length.items; i++){
// //    items[i].style.color = 'red';
// // }

// lastA.style.color ='red';
// console.log(lastLi)

// let allLaastChild = document.querySelectorAll('.items:nth-child(2)');



// for(let element of allLaastChild){
//    let allLastA = element.querySelector('.item');
//     allLastA.style.color   ='red';
// }


// console.log(allLaastChild);
// let grandparent = document.querySelector('.nav-list');
// let parent = grandparent.children;
// let chield = parent[0];
// console.log(chield);

/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
 */

//  // select elements & assign them to variables
//  let newTask = document.querySelector('#new-task');
//  let form = document.querySelector('form');
//  let todoUl = document.querySelector('#items');
//  let completeUl = document.querySelector('.complete-list ul');


// // functions
// let createTask = function(task) {
//     let listItem = document.createElement('li');
//     let checkBox = document.createElement('input');
//     let label = document.createElement('label');

//     label.innerText = task;
//     checkBox.type = 'checkbox';

//     listItem.appendChild(checkBox);
//     listItem.appendChild(label);

//     return listItem;
// }

// let addTask = function(event) {
//     event.preventDefault();
//     let listItem = createTask(newTask.value);
//     todoUl.appendChild(listItem);
//     newTask.value = "";
//     // bind the new list item to the incomplete list
//     bindInCompleteItems(listItem, completeTask);
// }

// let completeTask = function() {
//     let listItem = this.parentNode;
//     let deleteBtn = document.createElement('button');
//     deleteBtn.innerText = 'Delete';
//     deleteBtn.className = 'delete';
//     listItem.appendChild(deleteBtn);

//     let checkBox = listItem.querySelector('input[type="checkbox"]');
//     checkBox.remove();
//     completeUl.appendChild(listItem);
//     bindCompleteItems(listItem, deleteTask);
// }

// let deleteTask = function() {
//     let listItem = this.parentNode;
//     let ul = listItem.parentNode;
//     ul.removeChild(listItem);
// }

// let bindInCompleteItems = function(taskItem, checkboxClick) {
//     let checkBox = taskItem.querySelector('input[type="checkbox"]');
//     checkBox.onchange = checkboxClick;
// }

// let bindCompleteItems = function(taskItem, deleteButtonClick) {
//     let deleteButton = taskItem.querySelector('.delete');
//     deleteButton.onclick = deleteButtonClick;
// }

// for(let i=0; i< todoUl.children.length; i++ ) {
//     bindInCompleteItems(todoUl.children[i], completeTask);
// }

// for(let i=0; i< completeUl.children.length; i++ ) {
//     bindCompleteItems(completeUl.children[i], deleteTask);
// }

// form.addEventListener('submit', addTask);

/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
 */
// let grandparent = document.querySelector('.todo-list')
// let parent = grandparent.children;
// let children = parent[1].children;
// console.log(children); 

//direct children
// let grandparent = document.querySelector('.todo-list')

// let children = grandparent.querySelectorAll('.item');
// console.log(children);


// //children to parent
// let children = document.querySelector('.item');
// let parent = children.parentElement;
// console.log(parent);
//children to direct grandparent
// const children = document.querySelector('.item');
// const grandparent = children.closest('.todo-list');
// console.log(grandparent);
// const children1 = document.querySelector('.item:last-chile');



// const divElement = document.createElement('div');
// divElement.className= 'myDiv'
// divElement.setAttribute= ('id', 'myDiv');

// const containerLogo = document.querySelector('.container-logo');
// const logoImg = containerLogo.querySelector('img');
// containerLogo.insertBefore(divElement, logoImg);
// containerLogo.appendChild(divElement);


// todo app
const addTask = document.querySelector('#new-task');
const form = document.querySelector('form');
const addList = document.querySelector('#items');
const compliteUl = document.querySelector('.compite-list ul');

//function for create a task 
let createTask = function (task) {
   let listItem = document.createElement('li');
   let checkBox = document.createElement('input');
   let taskName = document.createElement('label');

   taskName.innerText = task;
   checkBox.type = 'checkbox';

   listItem.appendChild(checkBox);
   listItem.appendChild(taskName);

   return listItem;
}

let addTaskItem = function (event) {
   event.preventDefault();
   let listItem = createTask(addTask.value);

   addList.appendChild(listItem);

   bindInCompliteItem(listItem, compliteTask);
}

let compliteTask = function (event) {
   
}

let bindInCompliteItem = function (taskItem, checkBoxCheck) {
   let checkBox = taskItem.querySelector('input[type="checkbox"]');
   checkBox.oncheck = checkBoxCheck;
}
form.addEventListener('submit', addTaskItem);




