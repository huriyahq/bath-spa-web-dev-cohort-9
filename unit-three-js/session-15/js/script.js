// create variable for submit button
const submit = document.getElementById("submit");

// call a function when submit button is clicked
submit.addEventListener("click", function(e) {
    // prevent default submit form behaviour
    e.preventDefault();
    // create variable for card element
    const card = document.getElementById("card");
    // change card class to one with flex-direction: column
    card.classList.add("thank-you");
    // create variable for all the radio inputs
    const checkbox = document.getElementsByName("rating");
    // loop through the inputs to see which one is checked
    for(i = 0; i < checkbox.length; i++) {
        //  if the checkbox is checked, store its value in a variable
        if(checkbox[i].checked) {
            let rating = checkbox[i].value;
            // store the thank you message in a variable and add the selected rating to it
            let thankYou = `
            <img src="/tech-challenge/interactive-rating-component-main/images/illustration-thank-you.svg">
            <span class="selected-value">You selected ${rating} out of 5</span>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>`;
            // when the function is called, return the thank you message
            return card.innerHTML = thankYou;
        };
    };
});

