import React, { useState, useContext, useEffect } from 'react'
import { CrudContext } from '../context/CrudProvider.js'
import { set } from 'mongoose';

import '../styles/budgetList.css'


function BudgetList(){
    const { userTransactions, getUserTransactions } = useContext(CrudContext)

    let autoTransport = []
    let billsUtilities = []
    let businessServices = []
    let education = []
    let entertainment = []
    let feesCharges = []
    let financial = []
    let foodDining = []
    let giftsDonations = []
    let healthFitness = []
    let home = []
    let kids = []
    let miscExpenses = []
    let personalCare = []
    let pets = []
    let shopping = []
    let taxes = []
    let transfer = []
    let travel = []
    let uncategorized = []


    useEffect(() => {
        getUserTransactions()
    }, [])
    
    
    userTransactions.forEach(function(transaction) {
        if (transaction.category) {
            if (transaction.category === 'Auto & Transport'){
                autoTransport.push(transaction)
            } else if (transaction.category === 'Bills & Utilities') {
                billsUtilities.push(transaction)
            } else if (transaction.category === 'Business Services') {
                businessServices.push(transaction)
            } else if (transaction.category === 'Education') {
                education.push(transaction)
            } else if (transaction.category === 'Entertainment') {
                entertainment.push(transaction)
            } else if (transaction.category === 'Fees & Charges') {
                feesCharges.push(transaction)
            } else if (transaction.category === 'Financial') {
                financial.push(transaction)
            } else if (transaction.category === 'Food & Dining') {
                foodDining.push(transaction)
            } else if (transaction.category === 'Gifts & Donations') {
                giftsDonations.push(transaction)
            } else if (transaction.category === 'Health & Fitness') {
                healthFitness.push(transaction)
            } else if (transaction.category === 'Home') {
                home.push(transaction)
            } else if (transaction.category === 'Kids') {
                kids.push(transaction)
            } else if (transaction.category === 'Misc Expenses') {
                miscExpenses.push(transaction)
            } else if (transaction.category === 'Personal Care') {
                personalCare.push(transaction)
            } else if (transaction.category === 'Pets') {
                pets.push(transaction)
            } else if (transaction.category === 'Shopping') {
                shopping.push(transaction)
            } else if (transaction.category === 'Taxes') {
                taxes.push(transaction)
            } else if (transaction.category === 'Transfer') {
                transfer.push(transaction)
            } else if (transaction.category === 'Travel') {
                travel.push(transaction)
            } else if (transaction.category === 'Uncategorized') {
                uncategorized.push(transaction)
            }
        }
    })
    
    return(
        <div>
            <div className='budgetTitles'>
                <h1>Category</h1>
                <h1>Budgeted</h1>
                <h1>Activity</h1>
                <h1>Available</h1>
            </div>
            <div className='category'>
                <p>Auto & Transport</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${autoTransport.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Bills & Utilities</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${billsUtilities.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Business Services</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${businessServices.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Education</p> 
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${education.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Entertainment</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${entertainment.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Fees & Charges</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${feesCharges.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Financial</p>      
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${financial.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Food & Dining</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${foodDining.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Gifts & Donations</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${giftsDonations.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Health & Fitness</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${healthFitness.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Home</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${home.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>            
            <div className='category'>
                <p>Kids</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${kids.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>            
            <div className='category'>
                <p>Misc Expenses</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${miscExpenses.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>            
            <div className='category'>
                <p>Personal Care</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${personalCare.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Pets</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${pets.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Shopping</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${shopping.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Taxes</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${taxes.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Transfer</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${transfer.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Travel</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${travel.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
            <div className='category'>
                <p>Uncategorized</p>
                <form>
                    <input
                        type='number'
                        name='budgeted'
                        value=''
                        placeholder='0'
                    />
                </form>
                <p>${uncategorized.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)}</p>
                <p>$0</p>
            </div>
        </div>
    )
}

export default BudgetList