# 1. let and const
ES6 introduces `let` and `const`
1. `let` is the new `var`.
2. use `const` if you are not going to change the val
3. don't use `var` anymore.

4. Running js on vscode: https://www.youtube.com/watch?v=x_2sYpk75Ic
    - Extensions used: JavaScript (ES6) code snippets, Code Runner
    - `Ctrl+Alt+N` to run .js files. `Ctrl+Alt+M` to stop.

# 2. Arrow Functions
```js
// old js way
function myFnc() {
    ...
}

// arrow fn
// list or args in ()
const myFnc = () => {
    ...
}

// concise version: 1 arg, 1 return line
const multiply = number => number * 2;

```
1. arrow fn is a bit shorter
2. Main benefit: no more issues with `this` keyword. 
    - `this` will always keep the context in arrow functions
3. if function uses EXACTLY ONE argument, then you can omit the `()`
4. if function only has a return line. You can put it all in one line, remove the `{}` and `return`.

# 3. Import export
1. `default` exports means you can immediately export without specifying a name
2. non default exports you have to explicitly call the name
    - can alias them using `as`
3. If you get this error:
> SyntaxError: Cannot use import statement outside a module
You will need to create a `package.json` with this data:
```js
{
  "name": "esm",
  "version": "1.0.0",
  "description": "",
  // name of the file importing everything!
  "main": "main_file.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "author": "",
  "license": "ISC"
}
```

# 4. Classes
1. remember constructors
2. functions calling the properties: use `this.property`
3. when extending, make sure to put `super()` in the constructor to access the super class properties and methods.

# 5. Updated Classes

# 6. Spread and Rest `...`
1. Spread: split up array arguments or object properties
- usually used to copy elements from old array to an new array with extra elements
2. Rest: Used to merge a list of function arguments into an array
- usually used in functions to take in all elements and change them to a list.

# 7. Destructuring
1. Slightly different from spread. Used to extract array elements and object properties and store them into variables.

# 8. Reference and Primitive Types
1. Primitives (number, boolean, string etc) are pass by value: ie values are copied
2. Reference types (objects, arrays) are pass by reference ie the pointer is copied.
    - take note, changing properties of one array will change the elements in the other referenced array!
    - use `...` to basically copy the values into a new array!

# 9. Refreshing array functions:
1. use docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
2. recall basic functions like `filter()`, `map()`, `reduce()` but there are many more.