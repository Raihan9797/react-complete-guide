import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {

    return (<div className="chart">
        {props.dataPoints.map(
            (dataPoint) => <ChartBar 
                            key = {dataPoint.label} // using label as the unique value
                            value = {dataPoint.value}
                            maxValue = {null}
                            label = {dataPoint.label}
                            />
        )}
    </div>)
};

export default Chart;