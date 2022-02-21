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