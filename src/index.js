import React from 'react';
import ReactDOM from 'react-dom/client';
import NavMenu  from './components/navmenu.js';
import Chart from './components/chart.js';
import './components/css/rightbody.css';
import './index.css';
import './components/css/leftbody.css';
import BudgetAndTransaction from './components/budgetandtransaction.js';
import SideBar from './components/sidebar.js';





function Body(){
  return (
    <>
      <div className="holder">

        <div className='left_body'>
          <SideBar/>
        </div>

        <div className="right_body">
          <NavMenu/>
          <Chart/>
          <BudgetAndTransaction />          
        </div>

      </div>
    </>
  );
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Body/>
);

