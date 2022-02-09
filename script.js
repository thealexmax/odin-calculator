function displayNumber(number) {
    let content = document.getElementById("display");
    if(number == "+" || number == "-" || number == "x" || number == "/") {
        calculate();
    }
    content.innerHTML += number;
}

function clearDisplay() {
    document.getElementById("display").innerHTML = "";
}

function backspace() {
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0, -1);
}

function calculate() {
    let userInput = document.getElementById("display").innerHTML;
    let value1 = 0;
    let value2 = null;
    let result = null;
    let mode = null;
    for(i = 0; i < userInput.length; i++) {
        if(userInput[i] != "+" && userInput[i] != "-" && userInput[i] != "x" && userInput[i] != "/") {
            if(mode == null) {
                if(value1 == 0) value1 = userInput[i];
                else value1 += userInput[i];
            } else {
                if(value2 == null) value2 = userInput[i];
                else value2 += userInput[i];
            }
        } else {
            switch(userInput[i]) {
                case "+":
                    mode = "add";
                    break;
                case "-":
                    mode = "sub";
                    break;
                case "x":
                    mode = "prod";
                    break;
                case "/":
                    mode = "div";
                    break;
            }
        }
    }
    if(value2 == null || mode == null) {
        result = value1;
        document.getElementById("display").innerHTML = result;
        return;
    }
    switch(mode) {
        case "add":
            result = parseInt(value1) + parseInt(value2);
            break;
        case "sub":
            result = parseInt(value1) - parseInt(value2);
            break;
        case "prod":
            result = parseInt(value1) * parseInt(value2);
            break;
        case "div":
            result = parseInt(value1) / parseInt(value2);
            break;
    }
    document.getElementById("display").innerHTML = result;
}