const buttonStates = ["btn btn-success", "btn btn-warning", "btn btn-danger"]
let state = 0;

setInterval(changeState, 10000);

function displayResult() {
    document.getElementById("myButton").className = buttonStates[state];
}

function changeState() {
    ++state;
    state %= 3;
    displayResult();
}
