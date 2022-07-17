import React from 'react';
import ReactDOM from 'react-dom/client';
import NavMenu  from './components/navmenu.js';
import ExpenseChart from './components/expense_chart.js';
import ExpensePieChart from './components/expense_pie_chart.js';
import './components/css/rightbody.css';
import './index.css';
import './components/css/leftbody.css';

function ProductName(){
  return (
    <>
      <h1 style={{color:'#3547AC'}}>Xpenso</h1>
    </>
  );
}

function SideBarMenuItem(props){
  return (
    <>
      <div className={props.className}>
        <span class="material-icons">{props.icon}</span>
      </div>
    </>
  );
}

function BudgetAndTransactionStrip(props){
  return (
    <>
     <div className='budget_card'>
             <div className='budget_card_left'>
              <div className='budget_card_icon_container'>
                <span class="material-icons">{props.icon}</span>
              </div>
              <div className='budget_data'>
                  <h4>{props.title}</h4>
              </div>
             </div>
             <div className='budget_card_right'>
              <h1>${props.amount}</h1>
             </div>
             
      </div>
    </>
  );
}

function BudgetAndTransaction(props){
  return (
    <>
      <div className="budgetandtransaction">
        <div className='budget'>
           <div className="budget_header">
            <h3>Goal Budget</h3>
            <span class="material-icons">hdr_strong</span>
           </div>
           <BudgetAndTransactionStrip icon='airplane_ticket' title='Travel' amount='500'/>
           <BudgetAndTransactionStrip icon='school' title='Education' amount='400'/>
           <BudgetAndTransactionStrip icon='movie' title='Entertainment' amount='199'/>
           <BudgetAndTransactionStrip icon='ramen_dining' title='Grocery' amount='1500'/>
           <BudgetAndTransactionStrip icon='assignment' title='Others' amount='2000'/>
           
        </div>
        <div className='transaction'>

        </div>
             
      </div>
    </>
  );
}

function RightBody(){
  return (
    <>
      <div className="holder">
        <div className='left_body'>
          <ProductName/>
          <SideBarMenuItem icon="space_dashboard" className="sidebaritem active_side_menu"/>
          <SideBarMenuItem icon="insights" className="sidebaritem"/>
          <SideBarMenuItem icon="receipt_long" className="sidebaritem"/>
          <SideBarMenuItem icon="military_tech" className="sidebaritem"/>
          <SideBarMenuItem icon="settings_suggest" className="sidebaritem"/>
          <SideBarMenuItem icon="logout" className="sidebaritem"/>

        </div>
        <div className="right_body">
          <NavMenu/>

          <div className='charts'>
            <div className='chart1'><ExpenseChart/></div>
            <div className='chart2'><ExpensePieChart/></div>
          </div>

          <BudgetAndTransaction />

          
      </div>
      </div>
    </>
  );
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RightBody/>
);

