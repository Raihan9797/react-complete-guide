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