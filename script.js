var state = 1;
var counter = 0;
setInterval(increaseTime, 1000)
function displayResult() {
    if (state > 3) {
        state = 1
    }
    if (state == 1) {
        document.getElementById("myButton").innerHTML = "Green"
        document.getElementById("myButton").className = "btn btn-success"
    } else if (state == 2) {
        document.getElementById("myButton").innerHTML = "Yellow"
        document.getElementById("myButton").className = "btn btn-warning"
    } else {
        document.getElementById("myButton").innerHTML = "Red"
        document.getElementById("myButton").className = "btn btn-danger"
    }
}
function increaseTime() {
    ++counter
    if (counter == 10) {
        ++state
        counter = 0
        displayResult()
    }
}
function changeState() {
    ++state
    counter = 0
    displayResult()
}