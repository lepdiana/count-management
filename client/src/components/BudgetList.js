import React, { useContext, useEffect } from 'react'
import { CrudContext } from '../context/CrudProvider.js'


function BudgetList(){
    const { userTransactions, getUserTransactions, addTransaction, editTransaction, deleteTransaction } = useContext(CrudContext)


    useEffect(() => {
        getUserTransactions()
    }, [])

    console.log(userTransactions)
    return(
        <div>
            <div>
                <h1>Category</h1>
            </div>
            <div>
                <h1>Budgeted</h1>
            </div>
            <div>
                <h1>Activity</h1>
            </div>
            <div>
                <h1>Available</h1>
            </div>
        </div>
    )
}

export default BudgetList