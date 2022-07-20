import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import NavMenu  from './components/navmenu.js';
import Chart from './components/chart.js';
import './components/css/rightbody.css';
import './index.css';
import './components/css/leftbody.css';
import BudgetAndTransaction from './components/budgetandtransaction.js';
import SideBar from './components/sidebar.js';
import TransactionForm from './components/transaction_form.js';



function Body(){
  const [txform, setTxForm] = useState(false);
  const transactionData = [
    {id:1, title: 'Restaurants & Cafe', date: Date().toString(), amount: '400', isVisible: true},
    {id:2, title: 'Travelling', date: Date().toString(), amount: '200', isVisible: true},
    {id:3, title: 'Education', date: Date().toString(), amount: '300', isVisible: true},
    {id:5, title: 'Entertainment', date: Date().toString(), amount: '600', isVisible: true}
  ]
  const pieDataPoints = [
    { y: 20, label: "Education" },
    { y: 25, label: "Grocery" },
    { y: 5, label: "Travel" },
    { y: 15, label: "Entertainment" },
    { y: 10, label: "Healthcare & Other Products" },
    { y: 25, label: "Others" }	
  ];

  const chartDataPoint1 = [
    { x: new Date(2022, 0, 1), y: 120 },
    { x: new Date(2022, 1, 1), y: 135 },
    { x: new Date(2022, 2, 1), y: 144 },
    { x: new Date(2022, 3, 1), y: 103 },
    { x: new Date(2022, 4, 1), y: 93 },
    { x: new Date(2022, 5, 1), y: 129 },
    { x: new Date(2022, 6, 1), y: 143 },
    { x: new Date(2022, 7, 1), y: 156 },
    { x: new Date(2022, 8, 1), y: 122 },
    { x: new Date(2022, 9, 1), y: 106 },
    { x: new Date(2022, 10, 1), y: 137 },
    { x: new Date(2022, 11, 1), y: 142 }
  ];

  const chartDataPoint2  = [
    { x: new Date(2022, 0, 1), y: 110 },
    { x: new Date(2022, 1, 1), y: 0 },
    { x: new Date(2022, 2, 1), y: 95 },
    { x: new Date(2022, 3, 1), y: 138 },
    { x: new Date(2022, 4, 1), y: 325 },
    { x: new Date(2022, 5, 1), y: 400 },
    { x: new Date(2022, 6, 1), y: 0 },
    { x: new Date(2022, 7, 1), y: 0 },
    { x: new Date(2022, 8, 1), y: 50 },
    { x: new Date(2022, 9, 1), y: 65 },
    { x: new Date(2022, 10, 1), y: 73 },
    { x: new Date(2022, 11, 1), y: 300 }
  ];

  const [txData,setTxData] = React.useState(transactionData);
 
  return (
    <>
      <div className="holder">
        {txform  ? <TransactionForm isVisible={txform} setVisibility={setTxForm} txData={txData} setTxData={setTxData}/>:null}
        
        <div className='left_body'>
          <SideBar/>
        </div>

        <div className="right_body">
          <NavMenu/>
          <Chart pieDataPoints={pieDataPoints} chartDataPoint1={chartDataPoint1} chartDataPoint2={chartDataPoint2}/>
          <BudgetAndTransaction isVisible={txform} setVisibility={setTxForm} txData={txData} setTxData={setTxData}/>          
        </div>

      </div>
    </>
  );
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Body/>
);

