function sum(a,b, fnToCall) {
    sum = a+b
    fnToCall(sum);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data)
}
function displayResultPassive(data) {
    console.log("Result of the sum is : " + data)
}


const ans = sum(1,3,displayResult)


