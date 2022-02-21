# Section 5: Rendering Lists and Conditional Content

## 64. Rendering Lists of Data: just use `map()`!
1. In most applications, we wont know how many components we will need eg. we dk how many expenses we need.
2. This is where we store the values users generate in an array. Then display them as a component using map().

## 65. Using Stateful Lists
1. Take the dummy data (dummy expenses) out of the function. The we can usestate on that variable
2. Now use the addExpenseHandler() we made previously to add it to the array!
- RMB: IF STATE DEPENDS ON PREV STATE, USE THE FUNCTION VERSION OF UPDATING STATES TO PREVENT BAD SCHEDULING!
