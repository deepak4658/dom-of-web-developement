var itemList = document.querySelector('#items');
// Parent Node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='red';
// ParentElement 
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='yellow';

// ChildNode
// console.log(itemList.childNodes);

// ChildrenNode
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='red';

// first child 
// console.log(itemList.firstChild);

// // first element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

// Last element child
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';

// // next sibling 
// console.log(itemList.nextSibling);
// itemList.nextSibling.textContent='Hello 4';

// previous sibling 
// console.log(itemList.previousSibling);
//  itemList.previousSibling.textContent='Hello 2';

// previous Element sibling 
//  console.log(itemList.previousElementSibling);
//   itemList.previousElementSibling.style.color='red';

// create Element 
// create a div 

var newDiv= document.createElement('div');
// add class
newDiv.className='hello';

// add id
newDiv.id= 'hello1';

// add attribute

newDiv.setAttribute('title', 'Hello Div');

// create text node 
var newdivText= document.createTextNode('Hello World');

// add text to div 

newDiv.appendChild(newdivText);
var container= document.querySelector('header .container');
var h1= document.querySelector('header  h1');
// var ul= document.querySelector('header ul');
console.log(newDiv);
newDiv.style.fontSize='40px';
// container.insertBefore(newDiv, ul);
container.insertBefore(newDiv, h1);
