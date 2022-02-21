import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
    console.log(props);
    const expenses = props.expenses;

    const [selectYear, setSelectYear] = useState('2022');

    function selectedYearHandler(selectedYear) {
        setSelectYear(selectYear);
        console.log(selectedYear);
    };

    return (
        <Card className = "expenses">
            <ExpenseFilter defaultYear = {selectYear} onSelectYear = {selectedYearHandler}></ExpenseFilter>

            {expenses.map((expense) => (
                <ExpenseItem 
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
                />
            ))}

        </Card>
    );
}


export default Expenses;