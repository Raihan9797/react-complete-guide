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
    };

    // initialize as hidden
    const [isHidden, setIsHidden] = useState(true);

    // show when clicked
    function showNewExpenseHandler() {
        setIsHidden(false);
        // console.log("clicked");
        // setIsHidden(
        //     (prevIsHidden) => {
        //         console.log(prevIsHidden);
        //         return false;
        //     }
        // );
    };

    function hideNewExpenseHandler() {
        console.log("hiding the new expense window");
        setIsHidden(true);
    }
    if (isHidden) {
        return (
            <div className='new-expense'>
                <button onClick={showNewExpenseHandler}>Show add new expense</button>
            </div>
        );
    }

    return <div className = "new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onHide = {hideNewExpenseHandler}></ExpenseForm>
    </div>

};

export default NewExpense;