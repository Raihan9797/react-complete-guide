const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2);

// if you want 3, skip the 2nd ele
[n1, , n3] = numbers;
console.log(n1, n3);


// NOTE: DOES NOT WORK IN THIS COMPILER
// rarely used so its fine
const obj1 = {
    name: "Max",
    age: 28,
}
{age} = obj1;
console.log(age); // 28
console.log(name); // undefined since we didnt query for it