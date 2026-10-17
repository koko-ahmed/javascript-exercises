const myList = document.getElementById("myList");

function addElement() {
    const list = document.createElement('li');
    list.textContent = 'New Item';

    myList.appendChild(list);
}

function removeElement() {
    const lastItem = myList.lastElementChild;

    if (lastItem) {
        myList.removeChild(lastItem);
    }else {
        alert("nagu kala wad!");
    }
}