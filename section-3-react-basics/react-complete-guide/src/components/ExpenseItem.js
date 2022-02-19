import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2021, 6, 31);
    const expenseTitle = "Birthday Cake";
    const expensePrice = 297.20;

    // brackets to tell js its one liner.
    return (
    <div className = "expense-item">
        <div>{ expenseDate.toISOString() }</div>
        <div className = "expense-item__description">
            <h2>{ expenseTitle }</h2>
        </div>
        <div className = "expense-item__price">${ expensePrice.toFixed(2) }</div>
    </div>
    );

}

export default ExpenseItem;