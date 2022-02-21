import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    // console.log(props);

    const [selectYear, setSelectYear] = useState('2022');

    function selectedYearHandler(selectedYear) {
        setSelectYear(selectedYear);
        // console.log(selectedYear);
    };
    
    // filter data to be displayed by ExpenseList
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectYear;
    });


    return (
        <Card className = "expenses">
            <ExpenseFilter 
            defaultYear = {selectYear} 
            onSelectYear = {selectedYearHandler}>
            </ExpenseFilter>

            <ExpensesList
            content = {filteredExpenses}
            />
        </Card>
    );
}


export default Expenses;