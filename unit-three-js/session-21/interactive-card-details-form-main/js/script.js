// Update the details on the card as the user fills in the fields
const form = document.getElementById("checkout-form");
const nameInput = document.getElementById("cname");
const numInput = document.getElementById("cnumber");
const mmInput = document.getElementById("mm");
const yyInput = document.getElementById("yy");
const cvcInput = document.getElementById("cvc");
let validationMsg = document.getElementById("validation-msg");
let errorMsg;
// console log the cardholder name when you type in the input
// When input changes update the card text on the card display using innerHTML

nameInput.addEventListener("input", function (e){
  e.preventDefault();
  // change name as typed
  document.getElementById("cc__name").innerHTML = nameInput.value;
})

numInput.addEventListener("input", function (e){
    // add space after every 4 characters
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, "").replace(/(.{4})/g, "$1 ").trim();
    // change card number as typed
    document.getElementById("cc__number").innerHTML = numInput.value;
})

mmInput.addEventListener("input", function (e){
    e.preventDefault();
    // change exp mm as typed
    document.getElementById("cc__mm").innerHTML = mmInput.value;
})

yyInput.addEventListener("input", function (e){
    e.preventDefault();
    // change exp yy as typed
    document.getElementById("cc__yy").innerHTML = yyInput.value;
})

cvcInput.addEventListener("input", function (e){
    e.preventDefault();
    // change cvc as typed
    document.getElementById("cc__cvc").innerHTML = cvcInput.value;
})
