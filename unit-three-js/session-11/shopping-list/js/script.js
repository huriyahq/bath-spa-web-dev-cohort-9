// empty array to store shopping items
const list = [];
// declare global variables
const shoppingList = document.getElementById("shopping-list");
const input = document.getElementById("user-input");
const add = document.getElementById("add");
const clearAll = document.getElementById("clear");

// prevent default form behaviour when user clicks add button
add.addEventListener("click", function(event) {
    event.preventDefault();
    // call the checkItem() function
    checkItem();
});
// functions 
// function to check if item is already on the list
function checkItem() {
    let inputItem = input.value.toLowerCase();
    let txt = document.getElementById("display-text");
    if (list.includes(inputItem) == true) {
        // if the item is on the list, tell the user it's there
        txt.innerHTML = "that's already on the list";
        return txt;
    } else if (inputItem === "") {
        // if the user didn't type anything tell them to add something
        txt.innerHTML = "please add an item";
        return txt;
    }  else {
        // call the addItem function
        // then clear input field
        addItem();
        txt.innerHTML = "";
        input.value = "";
    };
};
// function to add the input item to the list
function addItem() {
    // store the value in newItem variable
    const newItem = input.value.toLowerCase();
    // add the value to the end of the list
    list.push(newItem);
    // create a list tag to add the value to 
    const newLi = document.createElement("li");
    newLi.innerHTML = newItem;
    shoppingList.appendChild(newLi);
};
// function to clear everything on the list when clear button is clicked
clearAll.onclick = function clearList() {
    input.value = "";
    document.getElementById("display-text").innerHTML = "";
    shoppingList.innerHTML = "";
    list.forEach(function() {
        list.pop();
        });
};