const buttonStates = ["btn btn-success", "btn btn-warning", "btn btn-danger"]
let state = 0

setInterval(changeState, 10000)

function displayResult() {
    document.getElementById("myButton").className = buttonStates[state]
}

function changeState() {
    ++state
    if (state > 2) {
        state = 0
    }
    displayResult()
}
