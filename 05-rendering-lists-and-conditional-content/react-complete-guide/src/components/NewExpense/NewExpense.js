import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        };
        // console.log(expenseData);
        // transfer to app.js
        props.onAddExpense(expenseData);
        setIsHidden(true);
    };

    // initialize as hidden
    const [isHidden, setIsHidden] = useState(true);

    // show when clicked
    function showNewExpenseHandler() {
        setIsHidden(false);
    };

    function hideNewExpenseHandler() {
        console.log("hiding the new expense window");
        setIsHidden(true);
    }

    return <div className = "new-expense">
        {isHidden && 
        <button onClick={showNewExpenseHandler}>Show add new expense</button>}
        {!isHidden && 
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onHide = {hideNewExpenseHandler}></ExpenseForm>}
    </div>

};

export default NewExpense;