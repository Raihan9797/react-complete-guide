
import "./ExpenseFilter.css";

function ExpenseFilter(props) {

    function selectChangeHandler(event) {
        console.log(event.target.value);
        // send up to Expenses
        props.onSelectYear(event.target.value);

    };
    return (
        <div className="expenses-filter">
            <div className='expenses-filter__control'>
                <label for = "years">Filter by year:</label>
                <select 
                name="Years" 
                id="years" 
                value={props.defaultYear}
                onChange={selectChangeHandler}
                >
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;