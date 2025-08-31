function greet(firstname: string) {
    console.log("Hello " + firstname)
}
greet("Amitesh")

function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(5, 3));

function runafter1s(fn: () => void) {
    setTimeout(fn, 1000);
}

runafter1s(function () {
    console.log("hi there")
})

interface User {
    firstname: string,
    lastname: string,
    age: number,
    email: string
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true;
    } else {
        return false;
    }
}
isLegal({
    firstname: "Amitesh",
    lastname: "Singh",
    age: 18,
    email: "khjbsdhus"
})

function findMax(arr: (number | undefined)[]): number {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    // Initialize max with the first defined number
    let max: number | undefined = undefined;

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
const values: (number | undefined)[] = [3, undefined, 7, 2, undefined, 9];
console.log("Max value:", findMax(values)); 




function filteredUsers(users:User[]) {
    return users.filter(x=> x.age>=18);
}

console.log(filteredUsers([{
    firstname:"Amitesh",
    lastname:"Singh",
    age:18,
    email:"edwbgfd"
},{
   firstname:"Anushk",
   lastname:"Raj",
   age:16,
   email:"wedbhgvj"
},]))