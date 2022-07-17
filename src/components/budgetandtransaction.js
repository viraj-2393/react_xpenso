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

  function TransactionStrip() {
    return (
      <>
        <div className='transaction_strip'>
          <div className='transaction_left_content'>
            <div className='transaction_category_icon'>
              <span class="material-icons">local_cafe</span>
            </div>
            <div className='transaction_title_subtitle'>
              <h3>Restaurants & Cafe</h3>
              <p>12 JULY 2022</p>
            </div>
          </div>

          <div className='transaction_right_content'>
            <div className='transaction_amount'>
              <h3>$300</h3>
            </div>
            <div className='remove_transaction'>
            <span class='material-icons'>close</span>
            </div>
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
            <div className="budget_header">
              <h3>Transaction History</h3>
              <span class="material-icons">hdr_strong</span>
             </div>
             <TransactionStrip/>
             <TransactionStrip/>
             <TransactionStrip/>
             <TransactionStrip/>
          </div>
               
        </div>
      </>
    );
  }

  export default BudgetAndTransaction;