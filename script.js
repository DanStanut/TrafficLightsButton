var state = 1;
var counter = 10;
setInterval(increaseTime, 1000)
function displayResult() {
    if (state > 3) {
        state = 1
    }
    if (state == 1) {
        document.getElementById("myButton").innerHTML = "Green " + counter
        document.getElementById("myButton").className = "btn btn-success"
    } else if (state == 2) {
        document.getElementById("myButton").innerHTML = "Yellow " + counter
        document.getElementById("myButton").className = "btn btn-warning"
    } else {
        document.getElementById("myButton").innerHTML = "Red " + counter
        document.getElementById("myButton").className = "btn btn-danger"
    }
}
function increaseTime() {
    --counter
    if (counter == 0) {
        ++state
        counter = 10
    }
    displayResult()
}
function changeState() {
    ++state
    counter = 10
    displayResult()
}