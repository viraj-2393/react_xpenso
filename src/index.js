import React from 'react';
import ReactDOM from 'react-dom/client';
import './navmenu.css';
import './profile_pic.jpg';
import ExpenseChart from './expense_chart.js';
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
function NavMenu(){
  return (
    <>
      <div className='nav_container'>
        <div className='nav_left'>
          <h1>Overview</h1>
          <p>Hey Viraj, Get your monthly transaction history here!</p>
        </div>
        <div className='nav_right'>
          <span class="material-icons">markunread</span>
          <span class="material-icons">circle_notifications</span>
          <div>
            <img src={require('./profile_pic.jpg')}></img>
          </div>
          
        </div>
      </div>
    </>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RightBody/>
);

