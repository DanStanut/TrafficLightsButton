let state = 1
let counter = 10
setInterval(decreaseTime, 1000)

function buttonDisplay(color, cnt, btnType) {
    document.getElementById("myButton").innerHTML = color + cnt
    document.getElementById("myButton").className = btnType
}

function displayResult() {
    if (state == 1) {
        buttonDisplay("Green ", counter, "btn btn-success")
    } else if (state == 2) {
        buttonDisplay("Yellow ", counter, "btn btn-warning")
    } else {
        buttonDisplay("Red ", counter, "btn btn-danger")
    }
}

function decreaseTime() {
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