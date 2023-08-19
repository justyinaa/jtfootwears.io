let allClean = true
let box1 = document.getElementById("textInput");
let box2 = document.getElementById("emailInput");
let box3 = document.getElementById("numberInput");
let message1 = document.getElementById("box1");
let message2 = document.getElementById("box2");
let message3 = document.getElementById("box3");

function clearAll() {
    message1.innerHTML = "";
    message2.innerHTML = "";
    message3.innerHTML = "";
}

function showAlert() {
    clearAll();
    if (box1.value == "") {
        message1.innerHTML = "Field cannot be blank";
        allClean = false
    }
    if (box2.value == "") {
        message2.innerHTML = "Field cannot be blank";
        allClean = false
    }
    if (box3.value == "") {
        message3.innerHTML = "Field cannot be blank";
        allClean = false
    }
    return allClean;
}