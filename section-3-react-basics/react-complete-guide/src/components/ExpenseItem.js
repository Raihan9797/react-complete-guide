import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
    // console.log(props)
    // possible to edit vars in a diff var!
    const expenseAmt = props.amount.toFixed(2);

    // brackets to tell js its one liner.
    return (
    <Card className = "expense-item">
        <ExpenseDate date = {props.date}></ExpenseDate>
        <div className = "expense-item__description">
            <h2>{ props.title }</h2>
        </div>
        <div className = "expense-item__price">${ expenseAmt }</div>
    </Card>
    );

}

export default ExpenseItem;