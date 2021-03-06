import React, { useEffect, useContext, useState } from 'react'
import { CrudContext } from '../context/CrudProvider.js'
import Transaction from './Transaction.js'

import '../styles/transactionList.css'

function TransactionList() {
    const { userTransactions, getUserTransactions, addTransaction, editTransaction, deleteTransaction } = useContext(CrudContext)

    useEffect(() => {
        getUserTransactions()
    }, [])

    const initInputs = { date: '', title: '', amount: '', category:'' }
    const [inputs, setInputs] = useState(initInputs)


    console.log(userTransactions)
    const mappedUserTransactions = userTransactions.map(transaction => 
        <Transaction 
            editTransaction={ editTransaction }
            deleteTransaction={ deleteTransaction }
            { ...transaction }
            key={ transaction._id }/>
    )

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTransaction(inputs)
        setInputs(initInputs)
    }

    return(
        <div className='transactionListContainer'>
            <a className="button" href="#popup1">Click here to add a transaction</a>
            {/* <div>
                <p>Date</p>
                <p>Title</p>
                <p>Category</p>
                <p>Amount</p>
            </div> */}
            <div id="popup1" className="overlay">
                <div className="popup">
                    <div className='addNewTransaction'>
                        <h1 className='addNewTransactionTitle'>Add a transaction:</h1>
                        <form onSubmit={handleSubmit} className='addTransactionForm'>
                            <input 
                                type='date' 
                                name='date'
                                value={inputs.date}
                                onChange={handleChange}
                                placeholder='Date'/>
                            <input 
                                type='text' 
                                name='title'
                                value={inputs.title}
                                onChange={handleChange}
                                placeholder='Title'/>
                            <input 
                                type='number' 
                                name='amount'
                                value={inputs.amount}
                                onChange={handleChange}
                                placeholder='Amount'/>
                            <select id='userTransactionCategoryChoice' name='category' onChange={handleChange}>
                                <option value='select'>---</option>
                                <option value='Auto & Transport'>Auto & Transport</option>
                                <option value='Bills & Utilities'>Bills & Utilities</option>
                                <option value='Business Services'>Business Services</option>
                                <option value='Education'>Education</option>
                                <option value='Entertainment'>Entertainment</option>
                                <option value='Fees & Charges'>Fees & Charges</option>
                                <option value='Financial'>Financial</option>
                                <option value='Food & Dining'>Food & Dining</option>
                                <option value='Gifts & Donations'>Gifts & Donations</option>
                                <option value='Health & Fitness'>Health & Fitness</option>
                                <option value='Home'>Home</option>
                                <option value='Kids'>Kids</option>
                                <option value='Misc Expenses'>Misc Expenses</option>
                                <option value='Personal Care'>Personal Care</option>
                                <option value='Pets'>Pets</option>
                                <option value='Shopping'>Shopping</option>
                                <option value='Taxes'>Taxes</option>
                                <option value='Transfer'>Transfer</option>
                                <option value='Travel'>Travel</option>
                                <option value='Uncategorized'>Uncategorized</option>
                            </select>
                            <button>Submit</button>
                        </form>
                    </div>
                    <a className="close" href="#">&times;</a>
                </div>
            </div>
            { mappedUserTransactions.reverse() }
        </div>
    )
}

export default TransactionList 