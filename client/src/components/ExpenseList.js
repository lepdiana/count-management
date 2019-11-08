import React, { useEffect, useContext } from 'react'
import { CrudContext } from '../context/CrudProvider.js'
import Expense from './Expense.js'

import '../styles/expenseList.css'

function TransactionList() {
    const { userTransactions, getUserTransactions } = useContext(CrudContext)

    useEffect(() => {
        getUserTransactions()
    }, [])

    var arr = userTransactions,
    result = [];

    arr.forEach(function (a) {
    if (!this[a.category]) {
        this[a.category] = { date: a.date, category: a.category, title: a.title, amount: 0 };
        result.push(this[a.category]);
    }
    this[a.category].amount += a.amount;
    }, Object.create(null));

    console.log(result)

    return(
        <div className='expenseListContainer'>
            <Expense result={result} />
        </div>
    )
}

export default TransactionList