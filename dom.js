/*var headerTitle = document.getElementById('header-title');
console.log(headerTitle);

headerTitle.innerHTML = '<h3>Hello</h3>';

headerTitle.textContent = 'Hello';

var items = document.getElementsByClassName('list-group-item');
console.log(items);

items[2].style.backgroundColor = 'green';

for(var i=0; i<items.length; i++)
{
    items[i].style.fontWeight = 'bold';
}

var collection = document.getElementsByTagName('li');

console.log(collection);

collection[4].style.fontWeight = 'bold';

items[1].style.backgroundColor = 'green';

items[2].style.display = 'none';*/


var itemlist = document.querySelector('#items');

console.log(itemlist.parentNode);

itemlist.parentNode.style.backgroundColor = "#f4f4f4";

//console.log(itemlist.childNodes);

console.log(itemlist.children);

console.log(itemlist.children[1]);

console.log(itemlist.firstChild);

console.log(itemlist.firstElementChild);

console.log(itemlist.nextSibling);

console.log(itemlist.nextElementSibling);


console.log(itemlist.previousSibling);

console.log(itemlist.previousElementSibling);

itemlist.previousElementSibling.style.color = 'green';


var newDiv = document.createElement('div');

console.log(newDiv);

newDiv.className = 'hello';

newDiv.id = 'hello1';

newDiv.setAttribute('title', 'Hello Div');

var newDivText = document.createTextNode('Hello world');

newDiv.appendChild(newDivText);

console.log(newDiv);

var container = document.querySelector('header .container');

var h1 = document.querySelector('header h1');


container.insertBefore(newDiv, h1);

newDiv.style.fontsize = "30px";


