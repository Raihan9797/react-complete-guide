import "./ExpenseDate.css";

function ExpenseDate(props) {
    // default just means default lang. can use en-US
    const month = props.date.toLocaleString('default', { month: "short"});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('default', { day: "2-digit"});
    // const day = props.date.getDate();
    // console.log(day);

    return (
    <div className = 'expense-date'>
        <div className = "expense-date__month">{month}</div>
        <div className = "expense-date__year">{year}</div>
        <div className = "expense-date__day">{day}</div>
    </div>
    )
}

export default ExpenseDate;