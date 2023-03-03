var headerTitle = document.getElementById('header-title');
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
