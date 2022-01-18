// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair="*") {
    return function(adj="special") {
        return `You are ${flair}${adj}${flair}!`;
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b;
    }, 
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    }, 
    divide: function(a, b) {
        return a / b;
    }
}

function actionApplyer(start,func) {
    for (let i = 0; i < func.length; i++){
        start = func[i](start)
    }
    return start;
}