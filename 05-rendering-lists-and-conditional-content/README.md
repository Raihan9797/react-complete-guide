# Section 5: Rendering Lists and Conditional Content

## 64. Rendering Lists of Data: just use `map()`!
1. In most applications, we wont know how many components we will need eg. we dk how many expenses we need.
2. This is where we store the values users generate in an array. Then display them as a component using map().

## 65. Using Stateful Lists
1. Take the dummy data (dummy expenses) out of the function. The we can usestate on that variable
2. Now use the addExpenseHandler() we made previously to add it to the array!
- RMB: IF STATE DEPENDS ON PREV STATE, USE THE FUNCTION VERSION OF UPDATING STATES TO PREVENT BAD SCHEDULING!

## 66. Understanding "Keys"
1. React renders list using a concepts which improves its efficiency and minizes bugs.
2. Go to developer tools. You will see that when you add a new item, React creates an element at the back (even though you put it at the front).
    - Thats because React only knows that your array changed (ie size increased). So it loops through each item to check that the positioning is correct. So it will "move" the new div up to the first element where its supposed to be.
    - This can also be a serious issue when each item in the list also has a state. The old first item might be overwritten by the new first item and thus lose all its previous states!
3. For React to know where a new item should be added or changed, we use the `key` prop!
    - `key` can be added to any component or even an HTML element. Adding this will help React identify individual items. In our case, we need unique keys for each item.
4. We need to find a unique id to help react. Usually if we pull data from a database (which has unique values) this will be easy. We can use primitive values. In our case, we used the expense.id as the unique key which is based on Math.random().
    - He says you can do (expense, index) => {...} which auto has an index BUT, that index is not directly tied to the element and will thus still have bugs.


## Assignment 3: Working with lists
* Use the date selector to filter the expenses in the list.
1. My solution was all inside the return() function. Was unsure of where exactly the expenses list would be affected if i used filter. So by doing it directly, I didnt have to worry about no changes.
2. The instructor solution created a `const filteredExpenses` and did the same filter() i used. Then in the return function he used that variable instead of the `props.items`.


## 67. Conditional Content
1. What if our filter has no elements? Would be better if we told them there is no data. This is where we use CONDITIONAL CONTENT.
    - We can use `if` or `for` loops in the return() segment! But we can use **ternary operators**.
2. Quick shortcut for ternary operators! When using `&&`, js automatically returns the second argument once we know the first to be true!
```js
// basic ternary operator
{filteredExpenses.length === 0 ? <p>No Expenses Found.</p> :
filteredExpenses.map((expense) => (
    <ExpenseItem 
    key = {expense.id}
    title = {expense.title}
    amount = {expense.amount}
    date = {expense.date}
    />
))
}

// ternary shortcut
{filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
{filteredExpenses.length > 0 && 
filteredExpenses.map((expense) => (
    <ExpenseItem 
    key = {expense.id}
    title = {expense.title}
    amount = {expense.amount}
    date = {expense.date}
    />
))
}
```
3. If this is still too verbose in the JSX code. We can use a variable with a default value (eg. no content found) made of jsx content! Then we can check if there is data to render!
    - set a default content variable (`let expensesContent`)
    - check the data (`filteredExpenses`) to see if there is data to show. If there is assign `expensesContent` to the data. Otherwise do nth!


## 68. Adding conditional return statements
1. Restructure expenses component to remove the list
2. If your entire JSX content (the `return(...)` part) changes, you can use `if(...) return(...)`. You couldnt do this in `Expenses.js` since the list was only a part of the component!
3. Changing <div> to <ul> doesnt really work better. But semantically it is better.

## Assignment 4: Add new expense that can be toggled to hide
1. My solution works, though it sometimes has a the error in console:
> Form submission canceled because the form is not connected
    - First idea was to use a boolean toggle, `isHidden` as a state that we can switch.
    - I did a full conditional returns (2 returns based on the isHidden). Which may be why the error of no form occurs because it will not render the form at all if toggled as hidden.
    - 2 functions: showNewExpenseHandler() and hideNewExpenseHandler() that toggles the boolean.
    - in `ExpenseForm.js` I create a cancel button that uses onClick to toggle. Need to point to the parent function using prop. The button used `type = "cancel"`.
    - The add expense also calls the parent function once you submit the form.

2. Instructors solution slightly different.
    - Same boolean toggle
    - However he used the same div and selected which to show depending on the boolean. Still has the same error
    - same 2 functions to toggle the boolean
    - **in `ExpenseForm.js` he just points to the function instead of creating a new function that calls the cancel button**. This is because the function is just to call the toggle. No extra function is needed.
    - cancel button uses `type = "button"`. dont think there is a cancel type.
    - **the add expense also doesnt call the hide function. In `Expense.js` he actually calls it inside the function itself.**


## 69. Adding a chart (nice!)
1. Create Chart and Chart bar components. Very abstract because we just discuss what we want and pretend like we have it eg. assuming the props will be an dict, has value label etc.

## 70. Adding Dynamic styles
1. Fleshing out Chart bar component. Remember that the bars should have a similar max height and that its filled relative to the max height. So how much we need to color the bar is DYNAMIC! How do we go about doing this?
```js
function ChartBar(props) {
    let barFillHeight = "0%";

    if (props.max > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    // dynamic setting of height
    return (<div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style = {{height: barFillHeight}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>

    </div>)
};
```
    - use the `style` keyword. It actually takes in an object basically to match the css object form.
    - for properties with a dash eg. `background-color`, use `"background-color"` or `backgroundColor` to change the style properties!
