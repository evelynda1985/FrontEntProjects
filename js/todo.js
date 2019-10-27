var add = document.getElementById('add');
var removeAll = document.getElementById('removeall');
var list = document.getElementById('list');

//remove all button
removeAll.onclick = function () {
    list.innerHTML = '';
}

//Add new element in the list
add.onclick = function () {
    addList(list);
    document.getElementById('userinput').value = '';
    document.getElementById('userinput').focus();
}

function addList(targetUl) {
    var inputText = document.getElementById('userinput').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + '');
    var removeButton = document.createElement('button');

    if(inputText !== ''){
        removeButton.className = 'btn btn-sm btn-danger';
        removeButton.innerHTML = '&times; ';
        removeButton.setAttribute('onclick', 'removeMe(this)');

        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
    }
    else{
        alert("Please enter a todo");
    }
}

function removeMe(item) {
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}