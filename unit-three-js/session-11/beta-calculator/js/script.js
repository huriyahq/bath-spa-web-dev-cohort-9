// retrieve the values user has input and store them in variables
value1 = document.getElementById("value-1");
value2 = document.getElementById("value-2");
result = document.getElementById("result");


 // assign onclick functions to each buttin
document.getElementById("add").onclick = function(x, y) {
    x = value1.value;
    y = value2.value;
    answer = parseInt(x) + parseInt(y);
    return result.innerHTML = `${answer}`;
 }

document.getElementById("subtract").onclick = function(x, y) {
    x = value1.value;
    y = value2.value;
    answer = parseInt(x) - parseInt(y);
    return result.innerHTML = `${answer}`;
 }

 document.getElementById("multiply").onclick = function(x, y) {
    x = value1.value;
    y = value2.value;
    answer =  parseInt(x) * y;
    return result.innerHTML = `${answer}`;
 }

 document.getElementById("divide").onclick = function(x, y) {
    x = value1.value;
    y = value2.value;
    answer = parseInt(x) / parseInt(y);
    return result.innerHTML = `${answer}`;
 }

