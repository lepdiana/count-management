import React from 'react'

const DisplayExpense = (props) => {
    return(
        <div>
            {props.sortedExpense.map((expense, i) => 
                <div key={i} className='expenseContainer'>
                    <h3 className='expenseCategory'>{expense.category}</h3>
                    <p className='expenseAmount'>{expense.amount.toFixed(2)}</p>
                </div>
            )}
        </div>
    )
}

export default DisplayExpense