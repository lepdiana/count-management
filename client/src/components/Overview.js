import React, { useContext, useEffect } from 'react'
import { CrudContext } from '../context/CrudProvider.js'

import '../styles/overview.css'

function Overview() {
    const { userNetIncomes, getUserNetIncomes, userTransactions, getUserTransactions  } = useContext(CrudContext)

    useEffect(() => {
        getUserNetIncomes()
        getUserTransactions()
    }, [])

    let netIncomeTotal = 0
    for (let i=0; i < userNetIncomes.length; i++) {
        netIncomeTotal = netIncomeTotal += userNetIncomes[i].income
    }

    let transactionTotal = 0
    for (let i=0; i < userTransactions.length; i++) {
        transactionTotal = transactionTotal += userTransactions[i].amount
    }

    let overallTotal = netIncomeTotal - transactionTotal

    return (
        <div className='overviewContainer'>
            <h3 className='overviewText'>Inflow: <h3 className='overviewInflow'>${ netIncomeTotal.toFixed(2) }</h3></h3>
            <h3 className='overviewText'>Outflow: <h3 className='overviewOutflow'>-${ transactionTotal.toFixed(2) }</h3></h3>
            <h3 className='overviewText'>Total: ${ overallTotal.toFixed(2) }</h3>
        </div>
    )
}

export default Overview