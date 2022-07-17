import ExpenseChart from "./expense_chart";
import ExpensePieChart from "./expense_pie_chart";
function Chart(){
    return (
      <>
        <div className='charts'>
            <div className='chart1'><ExpenseChart/></div>
            <div className='chart2'><ExpensePieChart/></div>
          </div>
      </>
    );
}

export default Chart;