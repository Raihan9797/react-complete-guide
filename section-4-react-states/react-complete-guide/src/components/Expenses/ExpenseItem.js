import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    // console.log(props)
    // possible to edit vars in a diff var!
    const expenseAmt = props.amount.toFixed(2);
    let title = props.title

    function clickHandler() {
        title = "title has changed!";
        console.log("Clicked!");
        console.log(title);
    }

    // brackets to tell js its one liner.
    return (
    <Card className = "expense-item">
        <ExpenseDate date = {props.date}></ExpenseDate>
        <div className = "expense-item__description">
            <h2>{ title }</h2>
        </div>
        <div className = "expense-item__price">${ expenseAmt }</div>
        <button onClick = {clickHandler} >Change Title</button>
    </Card>
    );

}

export default ExpenseItem;