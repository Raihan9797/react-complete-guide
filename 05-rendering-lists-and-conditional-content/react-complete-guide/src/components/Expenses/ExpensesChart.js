import Chart from "../Chart/Chart";

function ExpensesChart(props) {
    const chartDataPoints = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 }
    ];

    // get the month of the filtered expenses
    console.log(props.content);
    for (const expense of props.content) {
        const month = expense.date.getMonth();

        // sum up the value of the month
        chartDataPoints[month].value += expense.amount;
    }



    return (
        <Chart dataPoints = {chartDataPoints}/>
    );

};


export default ExpensesChart;