// get the p element with "example" id and change the text inside it
document.getElementById("example").innerHTML = "Hello!<br/>Click the buttons to toggle the light on and off.";


// functions to change the image depending on which button is clicked

// this function will change the image to bulb on
function turnOn() {
    document.getElementById("bulb-img").src = "./imgs/pic_bulbon.gif"
};

// this function will change the image to bulb off
function turnOff() {
    document.getElementById("bulb-img").src = "./imgs/pic_bulboff.gif"
};