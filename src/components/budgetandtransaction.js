import './css/budget.css';
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

  export default BudgetAndTransaction;