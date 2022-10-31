// GET SUBMIT BUTTON
const submit = document.getElementById("submit");
// GET CLEAR BUTTON
const clear = document.getElementById("clear");
// GET ENTIRE CONTACT SECTION
const sectionText = document.getElementById("contact-section");
// GET P TAG IN HEADER GROUP
const subtitle = document.getElementById("contact-subtitle");

// SAVE FORM INPUTS TO VARIABLES
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let message = document.getElementById("message");

// GIVE USER A MESSAGE WHEN THEY CLICK SUBMIT
submit.addEventListener("click", e => {
    // PREVENT DEFAULT BEHAVIOUR
    e.preventDefault();
    // STORE FIRST NAME VALUE IN VARIABLE
    let fName = firstName.value;
    // EMPTY VARIABLE FOR REPLY
    let reply = "";
    // IF NAME IS EMPTY
    if (fName.length == 0) {
        // CLEAR SUBTITLE AND GIVE STANDARD MESSAGE
        subtitle.innerHTML = "";
        reply = `Hello, you just submitted the fake form, yay!`;
        return sectionText.innerHTML = reply;
    } else {
        // ELSE THE INPUTTED USER'S NAME TO PERSONALISE MESSAGE
        subtitle.innerHTML = "";
        reply = `Hello, ${fName}.<br/>
        You just submitted the fake form, yay!`;
        return sectionText.innerHTML = reply;
    }
});

// CLEAR THE FORM WHEN USER CLICKS THE CLEAR BUTTON
clear.addEventListener("click", e => {
    // PREVENT DEFAULT BEHAVIOUR
    e.preventDefault();
    // CHANGE VALUES TO EMPTY STRINGS
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
});
