import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
    // get array of values from the datapoints
    const dataPointValues = props.dataPoints.map(datapoint => datapoint.value);
    // get max value from datapointvalues
    const maxValue = Math.max(...dataPointValues);


    return (<div className="chart">
        {props.dataPoints.map(
            (dataPoint) => <ChartBar 
                            key = {dataPoint.label} // using label as the unique value
                            value = {dataPoint.value}
                            maxValue = {maxValue}
                            label = {dataPoint.label}
                            />
        )}
    </div>)
};

export default Chart;