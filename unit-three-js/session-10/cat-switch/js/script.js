// get the p element with "greeting" id and change the text inside it
document.getElementById("greeting").innerHTML = "Hello!<br/>Click the buttons to make the cat happy or sad.";


// functions to change the cat image depending on which button is clicked

// this function will change the image to a happy cat
function happyCat() {
    document.getElementById("cat-img").src = "./imgs/happy-cat.png"
};

// this function will change the image to a sad cat
function sadCat() {
    document.getElementById("cat-img").src = "./imgs/sad-cat.png"
};