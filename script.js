const buttonStates = ["btn btn-success", "btn btn-warning", "btn btn-danger"]
let state = 0

setInterval(changeState, 10000)

function buttonDisplay(btnType) {
    document.getElementById("myButton").className = btnType
}

function displayResult() {
    buttonDisplay(buttonStates[state]);
}

function changeState() {
    ++state
    if (state > 2) {
        state = 0
    }
    displayResult()
}
