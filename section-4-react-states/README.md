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

## 53. Listening to User Input
1. For a start, we listen to EVERY change in user input
    - user onChange() instead of onInput() because onChange() takes not just inputs but also choices like in dropdowns, radios etc.
    - onInput() only reacts to every keystroke
2. These listeners by default take in the event being listened. So onChange() will also take in the events occuring at that point
    - particularly `event.target.value` will give us the inputted value
3. Name it as `titleChangeHandler()`. Rmb only to point, not call onChange.

## 54. Working with multiple states
1. We need to store these inputs before we can submit all of them at once. For this, we use useState! 
2. You can have multiple states ie useState() per component. They are also separate from each other.


## 55. Using just one state (and what's better)
1. Instead of 3 separate slices, you can group them together as an object!
2. use spread `...userInput` to copy all the values, and then just update the keys!
3. Both approaches are fine, but next lecture he'll cover the issues


## 56. Updating state that depends on previous state.
1. **Whenever you update state and depend on previous state DO THIS:
```js
// WRONG METHOD
/*
setUserInput({
    ...userInput,
    enteredTitle: event.target.value
});
*/
setUserInput(
    (prevState) => {
        return {
            ...prevState,
            enteredTitle: event.target.value
        };
    }
);
```
- We do this because React SCHEDULES state updates ie doesnt perform them instantly. If you have many state updates, you might be using an old version.
- Calling a function inside `setUserInput()` will automatically update the state to the latest version.
- **We will be using mutiple state methods moving forward.**


## 57. Handling Form Submission
1. onClick of a button is not the best method for form submission. There is default behavior for forms.
    - If `button` of type `submit` is clicked in a `form`, the form element will emit and Event!
    - so use `onSubmit` in the form element!
2. By default, form submission will clear all the input and refresh the browser.
    - it sends a request to the server
    - since we need to manually combine this, we prevent this default behavior for now using `event.preventDefault();`. this is default js behavior!
3. object property names can be anything. eg. title, amount, date
```js
function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };
};
```

## 58. Two way binding
1. state gives us the ability to do two way binding (vs just using global variables.)
    - we can not only listen to values, we can pass values back
    - this will allow us to clear the input once a person submits the form!
2. Use `value` and put the value back into the element
```js
<div className = "new-expense__control">
    <label>Title</label>
    <input type = "text" value = {enteredTitle} onChange = {titleChangeHandler}></input>
</div>
```
3. **Remember that when chaning values, use `setxxx()` functions instead of reassigning values!
- this is why `const` is useful!


## 59. Child to Parent Component Communication
1. How do we pass data from ExpenseForm to NewExpense to App so that we can create the ExpenseItem? ie go bottom up?
- Basically, in the parent class, create an event listener `onAddExpense` and a function `addExpenseHandler` that takes in the data you need from the child.
- In the child class, once you have the data to pass, call the function using the EventListener className ie `onAddExpense`!
```js
// app.js parent function
  function addExpenseHandler(expense) {
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>

// new expense child component
function NewExpense(props) {
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        };
        // TRANSFER TO PARENT!
        props.onAddExpense(expenseData);
    };

    return <div className = "new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
    </div>
};

```

## 60. Lifting components up
1. Basically, lift as high as you need to.

## Assignment 2: Expenses filter, passing from child to parent
1. Managed to get the result needed, but unecessarily created a state in the child (expensesFilter) component.
2. The answer also recommends 2 way binding from the parent and transferring that value down!