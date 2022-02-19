// using spread
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]

const arr3 = [arr1, 4, 5]
console.log(arr1);
console.log(arr2);

// different!
console.log(arr3);


// using spread on objects
const person = {
    name: "Max",
}

const person2 = {
    ...person,
    age: 28
}
console.log(person);
console.log(person2);

// rest operator
const filter = (...args) => {
    // filters out for 1
    return args.filter((ele) => (ele === 1));
}

console.log(filter(1,2,3,1));