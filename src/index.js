import React from 'react';
import ReactDOM from 'react-dom/client';
import NavMenu  from './components/navmenu.js';
import ExpenseChart from './components/expense_chart.js';
import './components/css/rightbody.css';
function RightBody(){
  return (
    <>
      <div className="right_body">
          <NavMenu/>
          <ExpenseChart/>
      </div>
    </>
  );
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RightBody/>
);

