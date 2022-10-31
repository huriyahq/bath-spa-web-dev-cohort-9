const output = document.getElementById("output");
const submit = document.getElementById("submit");

// get user input and store to variables
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

// object blueprint
function Person(first, last) {
    this.firstName = first,
    this.lastName = last
}

// call create user function when button is clicked
submit.addEventListener("click", createUser);

// use inputs to populate Person object for new user
function createUser() {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let newUser = new Person(firstName, lastName);
    let message = output.innerHTML = ("Thank you for signing up " + newUser.firstName);
    return message;
};
