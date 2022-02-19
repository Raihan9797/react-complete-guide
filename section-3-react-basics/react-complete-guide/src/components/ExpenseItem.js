import "./ExpenseItem.css";

function ExpenseItem(props) {
    // console.log(props)
    // possible to edit vars in a diff var!
    const expenseAmt = props.amount.toFixed(2);
    // default just means default lang. can use en-US
    const month = props.date.toLocaleString('default', { month: "short"});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('default', { day: "2-digit"});
    // const day = props.date.getDate();
    // console.log(day);

    // brackets to tell js its one liner.
    return (
    <div className = "expense-item">
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
        <div className = "expense-item__description">
            <h2>{ props.title }</h2>
        </div>
        <div className = "expense-item__price">${ expenseAmt }</div>
    </div>
    );

}

export default ExpenseItem;