import "./ExpenseForm.css";
import {useState} from 'react';

function ExpenseForm () {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function titleChangeHandler(event) {
        // this will store the input into the state and will survive regardless of how many times this function is called!
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
    };
    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
        console.log(event.target.value);
    };
    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
        console.log(event.target.value);
    };
    return <form>
        <div className = "new-expense__controls">
            <div className = "new-expense__control">
                <label>Title</label>
                <input type = "text" onChange = {titleChangeHandler}></input>
            </div>

            <div className = "new-expense__control">
                <label>Amount</label>
                <input type = "number" min = "0.01" step = "0.01" onChange={amountChangeHandler}></input>
            </div>

            <div className = "new-expense__control">
                <label>Date</label>
                <input type = "date" min = "2019-01-01" max = "2022-12-31" onChange = {dateChangeHandler}></input>
            </div>
        </div>
        <div className = "new-expense__actions">
            <button type = "submit">Add Expense</button>
        </div>

    </form>

};

export default ExpenseForm;