// Concept of callbacks

function sum(a,b,fnToCall) {
    let ans = a + b
    fnToCall(ans);
}

function printResult(ans) {
    console.log("Result of the sum is "+ans);
}

function printResultPassive(ans) {
    console.log("Sum's result is "+ans);
}

sum(2,8,printResultPassive);
