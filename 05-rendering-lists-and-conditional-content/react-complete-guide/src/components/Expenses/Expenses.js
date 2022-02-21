import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
    // console.log(props);

    const [selectYear, setSelectYear] = useState('2022');

    function selectedYearHandler(selectedYear) {
        setSelectYear(selectedYear);
        console.log(selectedYear);
    };
    
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectYear;
    });

    // default val
    let expensesContent = <p>No Expenses found</p>
    // check if there is content to be shown
    if (filteredExpenses.length > 0) {
        console.log(expensesContent.length)
        expensesContent = filteredExpenses.map((expense) => (
                    <ExpenseItem 
                    key = {expense.id}
                    title = {expense.title}
                    amount = {expense.amount}
                    date = {expense.date}
                    />
        ))
    };

    return (
        <Card className = "expenses">
            <ExpenseFilter 
            defaultYear = {selectYear} 
            onSelectYear = {selectedYearHandler}>
            </ExpenseFilter>

            {expensesContent}

        </Card>
    );
}


export default Expenses;