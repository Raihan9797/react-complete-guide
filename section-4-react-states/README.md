# Section 4: React States & Working with Events

## 47. Listening to Events and Working with Event Handlers
1. Button element has native DOM events that we can listen to
    - search here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
    - click on "Dom interface". You will see that the HTMLButtonElement comes the Element.
    - The Element has a few Events which has an equivalent in React! eg. `click` has an `onClick` equivalent in React!
2. onClick, we usually POINT to a function! DONT CALL IT
    - this is because when render, we will run through all the code. If we call it at that time then it would be too early in some cases.
    - This might be useful if you want to call something from the start!
3. We can create the function in line or outside
4. Naming convention of functions `xxxHandler` because you dont call it. And its attached to an event listener (onClick)

## 48. How component functions are executed.
1. `clickHandler` changes the var title. And when we check console.log(), it actually changes. BUT React has not rendered it again! Why?
    - Your component is a function, to use it, we need to call it. The first call is done when we render
    - It will call all component functions, then it will call any component functions() called by those functions until there are none left. eg
    ```
    1. index calls app
    2. app calls expenses
    3. expenses calls Card and ExpenseItem
    4. Card done
    5. ExpenseItem calls ExpenseDate
    6. ExpenseDate done
    7. Everything is now rendered.
    ```
2. How to tell React that something changed and needs to be reevaluated? Use States!

## 49. Working with "State"
1. Not a React specific concept
2. `import {useState} from "react"`
3. must directly call INSIDE THE COMPONENT FUNCTION:
```js
function ExpenseItem(props) {
    // useState returns a special variable and a function
    // the function can change the variable
    const [title, setTitle] = useState(props.title);
    const expenseAmt = props.amount.toFixed(2);

    function clickHandler() {
        setTitle("New title has been set!");
    }

```
4. useState returns a special variable and a function. the function is used change the variable which will tell React to call this component function again ie refresh the component!
    - thats why we can use `const` because it doesnt change!
    - this also means the title var wont change, since we didnt actually reassign that value!


## 50. A closer look at the "useState" Hook.
1. useState is for a specific component instance! This state is different for each components. Ie we have 4 ExpenseItems and they all have their own States! So when we change one, it wont change the others! PER COMPONENT INSTANCE BASIS!

## 51: State can be updated in many ways

## 52. Adding form inputs
1. Creating a NewExpense component which has ExpenseForm component
2. Makes use of html components `<form>` and `<input>`
    - recall the type, min, max, step
    - also submit button