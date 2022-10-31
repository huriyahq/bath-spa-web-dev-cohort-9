// Task: create a toggle button that lets the user switch between light and dark mode.
// Add a class when user clicks the toggle button
// The class will give dark mode colours to the body and some of its children elements.

// Steps: first, create a function that adds or removes a class, depending on if the class already exists.
// Next, attach function to an event using event listener or event attribute (went with an event attribute on a button).

// Function to toggle dark mode on and off.
function toggleMode() {
    // Get the element with the ID custom-body and save it to a variable called body.
    const body = document.getElementById("custom-body");

    // Condition: if body has the dark-mode class
    if (body.classList.contains("dark-mode")) {
        // remove the class (turns dark mode off)
        body.classList.remove("dark-mode");
    } else { // otherwise/else
        // add dark-mode class to body (turns dark mode on)
        body.classList.add("dark-mode");
    }
}
