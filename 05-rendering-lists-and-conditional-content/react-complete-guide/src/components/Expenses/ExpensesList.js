import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
    // console.log(props.content);

    // if there is no content
    if (props.content.length === 0) {
        return (
            <p className='expenses-list__fallback'>
                No Expenses found
            </p>
        )
    }

    return (
        // setting it to ul doesnt really change but semantically better
        <ul className='expenses-list'>
            {props.content.map((expense) => (
                        <ExpenseItem 
                        key = {expense.id}
                        title = {expense.title}
                        amount = {expense.amount}
                        date = {expense.date}
                        />
            ))}
        </ul>
    );


};

export default ExpensesList;