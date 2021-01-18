// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

mondayWork()


function wrapAdjective(visualFlare = "*") {
    return function(adjective = "special") {
        return `You are ${visualFlare}${adjective}${visualFlare}!`
    }
}

let Calculator = {
    add: function add(num1, num2) {
        return num1 + num2
    },
    subtract: function subtract(num1, num2) {
        return num1 - num2
    },
    multiply: function multiply(num1, num2) {
        return num1 * num2
    },
    divide: function divide(num1, num2) {
        return num1 / num2
    }
}

function actionApplyer(int, arrayOfFunctions) {
    if (arrayOfFunctions === []) {
        return int
    } else {
        return arrayOfFunctions.reduce(function(currentInt, currentFunc) { 
            return currentFunc(currentInt)
        }, int)
    }
}
