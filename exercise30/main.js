function operator(a, b, callback) {
    return callback(a, b);
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
const result1 = operator(5, 3, multiply);
const result2 = operator(10, 2, divide);
console.log(result1); // Output: 15
console.log(result2); // Output: 5