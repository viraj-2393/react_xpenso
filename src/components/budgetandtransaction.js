import './css/budget.css';
import React from 'react';
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

  function TransactionStrip(props) {
    function deleteThisStrip(){
      const newArr = props.transaction.map((obj,index) => {
        if (index === props.index) {
          return {...obj, isVisible: false};
        }
      
        return obj;
      });
      props.setTransaction(newArr);
    }

    if(props.transaction[props.index].isVisible) return (
      <>
        <div className='transaction_strip'>
          <div className='transaction_left_content'>
            <div className='transaction_category_icon'>
              <span class="material-icons">local_cafe</span>
            </div>
            <div className='transaction_title_subtitle'>
              <h3>{props.transaction[props.index].title}</h3>
              <p>{props.transaction[props.index].date}</p>
            </div>
          </div>

          <div className='transaction_right_content'>
            <div className='transaction_amount'>
              <h3>${props.transaction[props.index].amount}</h3>
            </div>
            <div className='remove_transaction' onClick = {() => deleteThisStrip()}>
            <span class='material-icons'>close</span>
            </div>
          </div>
          
        </div>
      </>
    );
  
   
  }
  
  function BudgetAndTransaction(props){
    const transactionData = [
      {id:"1", title: 'Restaurants & Cafe', date: Date().toString(), amount: '400', isVisible: true},
      {id:"2", title: 'Travelling', date: Date().toString(), amount: '200', isVisible: true},
      {id:"3", title: 'Education', date: Date().toString(), amount: '300', isVisible: true},
      {id:"4", title: 'Entertainment', date: Date().toString(), amount: '600', isVisible: true}
    ]

    const [txData,setTxData] = React.useState(transactionData);

    function addTransaction(){
      let copy = [...txData];
      copy.push({id:"5", title: 'Others', date: Date().toString(), amount: '60', isVisible: true});
      setTxData(copy);

    }

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
            <div className="budget_header">
              <h3>Transaction History</h3>
              {/* <span class="material-icons">hdr_strong</span> */}
              <button type='button' onClick={addTransaction}>+</button>
             </div>

             {txData.map((transaction,index) => 
              <TransactionStrip index={index} transaction={txData} setTransaction={setTxData} /> 
              )}
             
           
          </div>
               
        </div>
      </>
    );
  }

  export default BudgetAndTransaction;