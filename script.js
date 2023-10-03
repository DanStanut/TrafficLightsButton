let state = 1
let counter = 10
setInterval(increaseTime, 1000)
function displayResult() {
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
        if (state > 3) {
            state = 1
        }
        counter = 10
    }
    displayResult()
}
function changeState() {
    ++state
    counter = 10
    if (state > 3) {
        state = 1
    }
    displayResult()
}