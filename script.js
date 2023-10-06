let state = 1
setInterval(changeState, 10000)

function buttonDisplay(color, btnType) {
    document.getElementById("myButton").innerHTML = color
    document.getElementById("myButton").className = btnType
}

function displayResult() {
    if (state == 1) {
        buttonDisplay("Green ", "btn btn-success")
    } else if (state == 2) {
        buttonDisplay("Yellow ", "btn btn-warning")
    } else {
        buttonDisplay("Red ", "btn btn-danger")
    }
}

function changeState() {
    ++state
    if (state > 3) {
        state = 1
    }
    displayResult()
}