import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        };
        console.log(expenseData);
        // transfer to app.js
        props.onAddExpense(expenseData);
    };

    return <div className = "new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
    </div>

};

export default NewExpense;