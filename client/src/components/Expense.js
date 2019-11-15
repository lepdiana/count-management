import React from 'react'

import '../styles/expense.css'

function Expense(props) {
    return(
        <div>
            { props.result.map((expense, i) => 
                <div key={i} className='expenseContainer'>
                    <h3 className='expenseCategory'>{expense.category}</h3>
                    <p className='expenseAmount'>{expense.amount.toFixed(2)}</p>
                </div>
            )}
        </div>
    )
}

export default Expense