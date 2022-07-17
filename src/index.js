import React from 'react';
import ReactDOM from 'react-dom/client';
import NavMenu  from './components/navmenu.js';
import ExpenseChart from './components/expense_chart.js';
import ExpensePieChart from './components/expense_pie_chart.js';
import './components/css/rightbody.css';
function RightBody(){
  return (
    <>
      <div className="right_body">
          <NavMenu/>
          <div className='charts'>
            <div className='chart1'><ExpenseChart/></div>
            <div className='chart2'><ExpensePieChart/></div>
          </div>
          
      </div>
    </>
  );
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RightBody/>
);

