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
let grandparent = document.querySelector('.nav-list');
let parent = grandparent.children;
let chield = parent[0];
console.log(chield);


