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
        // console.log(selectedYear);
    };

    return (
        <Card className = "expenses">
            <ExpenseFilter 
            defaultYear = {selectYear} 
            onSelectYear = {selectedYearHandler}>
            </ExpenseFilter>

            {props.items.map((expense) => (
                <ExpenseItem 
                key = {expense.id}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
                />
            ))}
        </Card>
    );
}


export default Expenses;