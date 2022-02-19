let num1 = 3;
let num2 = num1;

console.log(num1)
console.log(num2)

// change num1 but not num2
// because num2 COPIED THE VALUE
num1 = 10;
console.log(num1)
console.log(num2)

let person1 = {name: "Max", age : 28};
let person2 = person1;
let person3 = {...person1};

console.log(person1)
console.log(person2)
console.log(person3)
console.log();

// person2 copied the REFERENCE
// person3 copied the VALUES!
// changing vals in person1 will affect person2!
console.log("Changing age from 28 to 30 for person 1!")
person1.age = 30;
console.log(person1)
console.log(person2)
console.log(person3)