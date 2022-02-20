import "./ExpenseForm.css";
import {useState} from 'react';

function ExpenseForm (props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /* // one state input
    const [userInput, setUserInput] = useState(
        {
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        }
    );
    */

    function titleChangeHandler(event) {
        // this will store the input into the state and will survive regardless of how many times this function is called!
        setEnteredTitle(event.target.value);
        console.log(event.target.value);

        // WRONG METHOD
        /*
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
        */
       // CORRECT ONE STATE METHOD
       /*
       setUserInput(
           (prevState) => {
               return {
                   ...prevState,
                   enteredTitle: event.target.value
               };

           }
       );
       */
    };
    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
        // console.log(event.target.value);
    };
    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
        // console.log(event.target.value);
    };

    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // call the function VIA THE CLASSNAME! not the name of the function
        props.onSaveExpenseData(expenseData);

        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };

    return <form onSubmit={submitHandler}>
        <div className = "new-expense__controls">
            <div className = "new-expense__control">
                <label>Title</label>
                <input 
                    type = "text" 
                    value = {enteredTitle} 
                    onChange = {titleChangeHandler}>
                </input>
            </div>

            <div className = "new-expense__control">
                <label>Amount</label>
                <input 
                    type = "number" 
                    min = "0.01" 
                    step = "0.01" 
                    value = {enteredAmount} 
                    onChange={amountChangeHandler}>
                </input>
            </div>

            <div className = "new-expense__control">
                <label>Date</label>
                <input 
                    type = "date" 
                    min = "2019-01-01" 
                    max = "2022-12-31" 
                    value = {enteredDate} 
                    onChange = {dateChangeHandler}>
                </input>
            </div>
        </div>
        <div className = "new-expense__actions">
            <button type = "submit">Add Expense</button>
        </div>

    </form>

};

export default ExpenseForm;