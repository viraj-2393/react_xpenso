import React, { useState} from 'react';
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
  const [txData,setTxData] = React.useState(transactionData);
  const pieDataPoints = [
    { y: 20, label: "Education" },
    { y: 25, label: "Grocery" },
    { y: 5, label: "Travel" },
    { y: 15, label: "Entertainment" },
    { y: 10, label: "Healthcare & Other Products" },
    { y: 25, label: "Others" }	
  ];

  const chartDataPoint1 = [];
  txData.map((data,index) => chartDataPoint1.push({x: new Date(2022,index,1), y: Number(data.amount)}));

  const [chartDataPoint,setChartDataPoint] = useState(chartDataPoint1);

  const chartDataPoint2  = [];
  
  return (
    <>
      <div className="holder">
        {txform  ? <TransactionForm isVisible={txform} setVisibility={setTxForm} txData={txData} setTxData={setTxData} chartDataPoint={chartDataPoint} setChartDataPoint={setChartDataPoint}/>:null}
        
        <div className='left_body'>
          <SideBar/>
        </div>

        <div className="right_body">
          <NavMenu/>
          <Chart pieDataPoints={pieDataPoints} chartDataPoint={chartDataPoint} chartDataPoint2={chartDataPoint2}/>
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

