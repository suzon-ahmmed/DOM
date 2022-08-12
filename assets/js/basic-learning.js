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


// // todo app
// const addTask = document.querySelector('#new-task');
// const form = document.querySelector('form');
// const addList = document.querySelector('#items');
// const compliteUl = document.querySelector('.compite-list ul');

// //function for create a task 
// let createTask = function (task) {
//    let listItem = document.createElement('li');
//    let checkBox = document.createElement('input');
//    let taskName = document.createElement('label');

//    taskName.innerText = task;
//    checkBox.type = 'checkbox';

//    listItem.appendChild(checkBox);
//    listItem.appendChild(taskName);

//    return listItem;
// }

// let addTaskItem = function (event) {
//    event.preventDefault();
//    let listItem = createTask(addTask.value);

//    addList.appendChild(listItem);

//    bindInCompliteItem(listItem, compliteTask);
// }

// let compliteTask = function (event) {

// }

// let bindInCompliteItem = function (taskItem, checkBoxCheck) {
//    let checkBox = taskItem.querySelector('input[type="checkbox"]');
//    checkBox.oncheck = checkBoxCheck;
// }
// form.addEventListener('submit', addTaskItem);


// const upgradeDate = document.getElementById('updated-date');
// const curentDate = new Date();
// console.log(curentDate);


// basic DOM 

// function validateForm() {
//    let x = document.forms["myForm"]['fname'].value;

//    if (isNaN(x) || x < 1 || x > 10) {
//       alert('Please enter between 1 to 10.');
//    }
//    else {
//       document.getElementById('demo').innerHTML = x;
//    }
//    // console.log(x);

//    return false;
// }

// function changeStyle() {
//    const ptag = document.getElementById('demo');
//    ptag.style.color = 'red';

// }

// function myBox() {
//    const box = document.getElementById('animate');
//    let pos = 0;

//    const interval =  setInterval(anymate, 5);

//    function anymate() {
//       if (pos < 350) {
//          pos++;
//          box.style.top = pos + 'px';
//          box.style.left = pos + 'px';
//       }else{
//          clearInterval(interval);
//       }

//    }
// }

// // const hscript = document.querySelector('#hScript');
// // hscript.src = "./assets/js/try.js";

// const eventListen = document.querySelector('#btnId');

// // eventListen.addEventListener('click', myBox);
// eventListen.addEventListener('click', function(){
//    console.log('hello world');
// });


// DOM navigate
//  const pt = document.getElementById('demo');

//  const way1 = pt.innerHTML;
//  console.log(way1 + ' innerHTML');

//  const way2 = pt.firstChild.nodeValue;
//  console.log(way2 + ' firstChild.nodeValue'); 

//  const way3 = pt.childNodes[0].nodeValue;
//  console.log(way3 + ' childNodes[0].nodeValue');

//DOM Nodes

// const newP = document.createElement('p');
// const textNode = document.createTextNode('This id new p');

// newP.appendChild(textNode);

// const div = document.getElementById('div1');
// // div.appendChild(newP);
// const p1 = document.getElementById('p1');
// const p2 = document.getElementById('p2');
// // div.insertBefore(newP, p1);
// div.insertBefore(newP, p2);

// div.removeChild(p2);


// Mordan Javascript ES6 

// arrowFunction 
// const arroeF = () => 10;

// const input = document.querySelector('.search');
// const result = document.querySelector('.result');
// const thanks = document.querySelector('.thanks');

// function show() {
//    result.innerHTML = this.value;
//    let self = this;
//    setTimeout(function () {
//       thanks.innerHTML = `Thanks! You are write: ${self.value}`;
//    }, 1000);
// }

// input.addEventListener('keyup', show);

// // ternary operator 

// let age = 50;

// const type = age >= 50 ? 'Old' : age >= 18 ? 'Adelt' : age < 9 ? 'Child' : 'young';
// console.log(type);

// //  array map 
const arr = [1, 2, 3, 4, 5];
// console.log('main array: ' + arr);

// const arr2 = arr.map((value) => {
//    return value * 2;
// })
// console.log('array map(): ' + arr2);

// // array resuce()

// const sum = arr.reduce((previousValue, currentValue) => {
//    return previousValue + currentValue;
// }, 0)

// console.log('array resuce(): ' + sum);


// // spread operator 
// // array spread 
const newArr = [1, 2, 3, 4, 5, 6];

// // const resultArr = newArr.concat(arr, arr2); //using concate 
// const resultArr = [...newArr, 10, 20, 30, 40, 50, 60];
// console.log('result array: ' + resultArr);

// const copyOfArr = [...arr];
// arr.push(60);
// console.log(copyOfArr);
// console.log(arr);

// // object spread 
// const a1 = {
//    a: 7,
//    b: 8,
// };
// const a2 = {
//    x: 3,
//    y: 4,
// }
// const margeObj = {
//    ...a1,
//    ...a2,
// }
// console.log(margeObj);

// //rest opoerator

function rest(a, ...parms) {
   // console.log(typeof arguments);

   console.log(a); //a = 1 because a teake the first parameter  
   console.log(parms);

}
rest(1, 2, 3, 4, 5);

// object distructring 

const user = {
   name: 'John',
   age: 36,
   email: 'john@example.com',
   eduection: {
      degree: 'masters',
   }
}

const { eduection:
   { degree: title } = {} } = user;
console.log(title);

// array distructring 
// let [a, b] = arr; //set a=1, b=2
// let [,a,,,b] = arr; //set a=2, b=5

const nestedArr = [1, 2, [3, 100, 200], 4, 5, 6];
let [, , [, a], , , b] = nestedArr; //set a=100, b=6
console.log(a, b);
// swap value 
let m = 1;
let n = 2;
[n, m] = [m, n];
console.log(m, n);


// emport and export 


// copywithin() methode of array
// array.copyWithin (target, start, end) target is required, start defoult teake 0 and end takes length of array

console.log(arr);
const exp = arr.copyWithin(3,1,2);
console.log(exp);