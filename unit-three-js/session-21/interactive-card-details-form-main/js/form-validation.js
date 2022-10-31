const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function(e) {
    // e.preventDefault();
    let validationMsg = document.getElementById("validation-msg");

    // Cardholder name validation
    const cardholder = document.getElementById("cname");
    const getName = cardholder.value;
    let nameIsValid = false;

    if(getName === "" || getName == null) {
        validationMsg.innerText = "Please enter the cardholder name";
        nameIsValid = false;
    } else {
        nameIsValid = true;
    }

    // Card number validation
    const cardNum = document.getElementById("cnumber");
    const getNum = cardNum.value;
    const cardNumRegex = /[^a-z]{16}/;
    const checkCardNum = cardNumRegex.test(getNum);
    let numIsValid = false;
    if(getNum === "" || getNum == null) {
            validationMsg.innerText = "Please enter a card number";
            numIsValid = false;
        } else if (checkCardNum == false) {
            validationMsg.innerText = "The card number is not valid";
            numIsValid = false;
        } else {
            numIsValid = true;
        }
    
    // Card month validation
    const mmExp = document.getElementById("mm");
    const getMM = mmExp.value;
    const mmRegex = /[^a-z]{2}/;
    const checkMM = mmRegex.test(getMM);
    let mmIsValid = false;
    if(getMM === "" || getMM == null) {
            validationMsg.innerText = "Please enter the card's expiration month";
            mmIsValid = false;
        } else if (checkMM == false) {
            validationMsg.innerText = "Please enter the card's expiration month in the format MM";
            mmIsValid = false;
        } else {
            mmIsValid = true;
        }

    // Card year validation
    const yyExp = document.getElementById("yy");
    const getYY = yyExp.value;
    const yyRegex = /[^a-z]{2}/;
    const checkYY = yyRegex.test(getYY);
    let yyIsValid = false;
    if(getYY === "" || getYY == null) {
            validationMsg.innerText = "Please enter the card's expiration year";
            yyIsValid = false;
        } else if (checkYY == false) {
            validationMsg.innerText = "Please enter the card's expiration year in the format YY";
            yyIsValid = false;
        } else {
            yyIsValid = true; 
        }

    // Card cvc validation
    const cvc = document.getElementById("cvc");
    const getCVC = cvc.value;
    const cvcRegex = /[^a-z]{3}/;
    const checkCVC = cvcRegex.test(getCVC);
    let cvcIsValid = false;
    if(getCVC === "" || getCVC == null) {
            validationMsg.innerText = "Please enter a cvc number";
            cvcIsValid = false;
        } else if (checkCVC == false) {
            validationMsg.innerText = "The cvc number is not valid";
            cvcIsValid = false;
        } else {
            cvcIsValid = true;
        }

    if ((nameIsValid == true) && (numIsValid == true) && (mmIsValid == true) && (yyIsValid == true) && (cvcIsValid == true)) {
        let formAccepted = document.querySelector(".checkout__form");
        formAccepted.innerHTML = `
            <div class="accepted-container">
                <img src="./images/icon-complete.svg"/>
                <h2>Thank You!</h2>
                <p>We've added your card details</p>
                <a href="index.html">
                    <button class="btn">Continue</button>
                </a>
            </div>`
        return formAccepted;
    } else if ((nameIsValid == false) && (numIsValid == false) && (mmIsValid == false) && (yyIsValid == false) && (cvcIsValid == false)) {
        validationMsg.innerText = "Can't submit an empty form!";
    } else {
        console.log("Invalid input");
    }
});