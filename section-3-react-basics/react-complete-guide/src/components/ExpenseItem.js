import "./ExpenseItem.css";

function ExpenseItem() {
    // brackets to tell js its one liner.
    return (
    <div className = "expense-item">
        <div>31 July 2022</div>
        <div className = "expense-item__description">
            <h2>Birthday Cake</h2>
        </div>
        <div className = "expense-item__price">$297.20</div>
    </div>
    );

}

export default ExpenseItem;