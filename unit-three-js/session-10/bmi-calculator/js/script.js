// instructions for user
document.getElementById("instructions").innerHTML = "Fill in the form below to calculate your BMI.";
// get input values from index.html and save in variables
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const result = document.getElementById("result");
// when button is clicked, run calculateBMI() function
function calculateBMI() {
    // turn strings to numbers using .value
    // divide heightInput by 100 to turn cm to metres
    const height = (heightInput.value) / 100;
    const weight = weightInput.value;
    const bmi = Math.round(weight / (height * height));
    // change innterText on page to display bmi result
    result.innerHTML = `Your BMI is ${bmi}.`
}

