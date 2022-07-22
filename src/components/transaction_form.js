import './css/transaction.css';
import { useState } from 'react';

// function addTransaction(){
//     let copy = [...txData];
//     copy.push({id:"5", title: 'Others', date: Date().toString(), amount: '60', isVisible: true});
//     setTxData(copy);

//   }


function TransactionForm (props){

    const closeWindow = () => {
       props.setVisibility(!props.isVisible);
    }

    const addTransaction = () => {
          if(amount === '' || isNaN(amount)){
            alert('Please enter a valid number.');
            return;
          }
          let copy = [...props.txData];
          copy.push({id:copy.length+1, title: title, date: date, amount: amount, isVisible: true});
          props.setTxData(copy);

          let chartDataPoint_copy = [...props.chartDataPoint];
          chartDataPoint_copy.push({x: new Date(2022,chartDataPoint_copy.length,1), y: Number(amount)});
          props.setChartDataPoint(chartDataPoint_copy);

    }

    let [title,setTitle] = useState('Entertainment');
    let [amount,setAmount] = useState('');
    let date = Date().toString();



    return (
     <>
       <div className='add_transaction_form'>

        <div className='add_transaction_header'>
          <h3> + Add Transaction</h3>
          <button type='button' onClick={closeWindow}>X</button>
        </div>
        <div className='add_transaction_body'>
           <label>
            Enter category:<br/>
            <select value={title} onChange={(e) =>  setTitle(e.target.value)}>
              <option value='Entertainment'>Entertainment</option>
              <option value='Travel'>Travel</option>
              <option value='Education'>Education</option>
              <option value='Health'>Health & Medicines</option>
              <option value='Grocery'>Grocery</option>
              <option value='Others'>Others</option>
            </select>
           </label>

           <label>
            Enter Amount:<br/>
            <input type='text'  onChange={(e) =>  setAmount(e.target.value)}/>
           </label>

           <input type='submit' onClick={addTransaction}/>
        </div>


       </div>
     </>
    );
 }

 export default TransactionForm;