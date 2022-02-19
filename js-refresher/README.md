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

const multiply = number => number * 2;

```
1. arrow fn is a bit shorter
2. Main benefit: no more issues with `this` keyword. 
    - `this` will always keep the context in arrow functions
3. if function uses EXACTLY ONE argument, then you can omit the `()`
4. if function only has a return line. You can put it all in one line, remove the `{}` and `return`.
