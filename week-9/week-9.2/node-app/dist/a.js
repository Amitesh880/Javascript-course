"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(firstname) {
    console.log("Hello " + firstname);
}
greet("Amitesh");
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3));
function runafter1s(fn) {
    setTimeout(fn, 1000);
}
runafter1s(function () {
    console.log("hi there");
});
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegal({
    firstname: "Amitesh",
    lastname: "Singh",
    age: 18,
    email: "khjbsdhus"
});
function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    // Initialize max with the first defined number
    let max = undefined;
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if (val !== undefined) {
            if (max === undefined || val > max) {
                max = val;
            }
        }
    }
    if (max === undefined) {
        throw new Error("No valid number found in array");
    }
    return max;
}
// Example usage
const values = [3, undefined, 7, 2, undefined, 9];
console.log("Max value:", findMax(values));
function filteredUsers(users) {
    return users.filter(x => x.age >= 18);
}
console.log(filteredUsers([{
        firstname: "Amitesh",
        lastname: "Singh",
        age: 18,
        email: "edwbgfd"
    }, {
        firstname: "Anushk",
        lastname: "Raj",
        age: 16,
        email: "wedbhgvj"
    },]));
//# sourceMappingURL=a.js.map