import React, { useState, useContext, useEffect } from 'react'
import { CrudContext } from '../context/CrudProvider.js'


function BudgetList(){
    const { userTransactions, getUserTransactions } = useContext(CrudContext)


    useEffect(() => {
        getUserTransactions()
    }, [])


    return(
        <div>
            <div>
                <h1>Category</h1>
                <p>Auto & Transport</p>
                <p>Bills & Utilities</p>
                <p>Business Services</p>
                <p>Education</p>
                <p>Entertainment</p>
                <p>Fees & Changes</p>
                <p>Financial</p>
                <p>Food & Dining</p>
                <p>Gifts & Donations</p>
                <p>Health & Fitness</p>
                <p>Home</p>
                <p>Kids</p>
                <p>Misc Expenses</p>
                <p>Personal Care</p>
                <p>Pets</p>
                <p>Shopping</p>
                <p>Taxes</p>
                <p>Transfer</p>
                <p>Travel</p>
                <p>Uncategorized</p>
            </div>
            <div>
                <h1>Budgeted</h1>
                <form>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                </form>
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