import ExpenseChart from "./expense_chart";
import ExpensePieChart from "./expense_pie_chart";
function Chart(props){
  
    return (
      <>
        <div className='charts'>
            <div className='chart1'><ExpenseChart chartDataPoint1={props.chartDataPoint1} chartDataPoint2={props.chartDataPoint2}/></div>
            <div className='chart2'><ExpensePieChart pieDataPoints={props.pieDataPoints}/></div>
          </div>
      </>
    );
}

export default Chart;