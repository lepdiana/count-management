import React, { useState, useContext, useEffect } from 'react'
import { CrudContext } from '../context/CrudProvider.js'


function BudgetList(){
    const { userTransactions, getUserTransactions } = useContext(CrudContext)
    const [filteredArr, setFilteredArr] = useState([])


    useEffect(() => {
        getUserTransactions()
    }, [])
    
    
    const category = userTransactions.forEach(function(transaction) {
        if (transaction.category) {
            if (transaction.category === 'Auto & Transport'){
                
            } else if (transaction.category === 'Bills & Utilities') {
                
            } else if (transaction.category === 'Business Services') {
                
            } else if (transaction.category === 'Education') {
                
            } else if (transaction.category === 'Entertainment') {
                
            } else if (transaction.category === 'Fees & Changes') {
                
            } else if (transaction.category === 'Financial') {
                
            } else if (transaction.category === 'Food & Dining') {
                
            } else if (transaction.category === 'Gifts & Donations') {
                
            } else if (transaction.category === 'Health & Fitness') {
                
            } else if (transaction.category === 'Home') {
                
            } else if (transaction.category === 'Kids') {
                
            } else if (transaction.category === 'Misc Expenses') {
                
            } else if (transaction.category === 'Personal Care') {
                
            } else if (transaction.category === 'Pets') {
                
            } else if (transaction.category === 'Shopping') {
                
            } else if (transaction.category === 'Taxes') {
                
            } else if (transaction.category === 'Transfer') {
                
            } else if (transaction.category === 'Travel') {
                
            } else if (transaction.category === 'Uncategorized') {
                
            }
        } else {
            transaction.amount = 0
        }
    })

    console.log(filteredArr)
    
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