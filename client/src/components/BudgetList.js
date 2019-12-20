import React, { useState, useContext, useEffect } from 'react'
import { CrudContext } from '../context/CrudProvider.js'
// import { set } from 'mongoose';
import BudgetForm from './BudgetForm.js'

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
    })

    const autoTransportAmt = autoTransport.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const billsUtilitiesAmt = billsUtilities.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const businessServicesAmt = businessServices.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const educationAmt = education.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const entertainmentAmt = entertainment.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const feesChargesAmt = feesCharges.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const financialAmt = financial.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const foodDiningAmt = foodDining.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const giftsDonationsAmt = giftsDonations.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const healthFitnessAmt = healthFitness.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const homeAmt = home.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const kidsAmt = kids.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const miscExpensesAmt = miscExpenses.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const personalCareAmt = personalCare.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const petsAmt = pets.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const shoppingAmt = shopping.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const taxesAmt = taxes.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const transferAmt = transfer.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const travelAmt = travel.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    const uncategorizedAmt = uncategorized.reduce(function(sum, transaction){return sum += transaction.amount}, 0).toFixed(2)
    
    return(
        <div className='budgetListContainer'>
            <h1 className='construction'>***THIS PAGE IS CURRENTLY UNDER CONSTRUCTION.***</h1>
            <div className='budgetListTitles'>
                <h1>Category</h1>
                <h1>Budgeted</h1>
                <h1>Activity</h1>
                <h1>Available</h1>
            </div>
            <div className='budgetListCategoryContainer'>
                <p>Auto & Transport</p>
                <p>Bills & Utilities</p>
                <p>Business Services</p>
                <p>Education</p> 
                <p>Entertainment</p>
                <p>Fees & Charges</p>
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
            <div className='budgetListBudgetedContainer'>
                <BudgetForm 
                    autoTransportAmt={ autoTransportAmt }
                    billsUtilitiesAmt={ billsUtilitiesAmt }
                    businessServicesAmt={ businessServices }
                    educationAmt={ educationAmt }
                    entertainmentAmt={ entertainmentAmt }
                    feesChargesAmt={ feesChargesAmt }
                    financialAmt={ financialAmt }
                    foodDiningAmt={ foodDiningAmt }
                    giftsDonationsAmt={ giftsDonationsAmt }
                    healthFitnessAmt={ healthFitnessAmt }
                    homeAmt={ homeAmt }
                    kidsAmt={ homeAmt }
                    miscExpensesAmt={ miscExpensesAmt }
                    personalCareAmt={personalCareAmt}
                    petsAmt={ petsAmt }
                    shoppingAmt={ shoppingAmt }
                    taxesAmt={ taxesAmt }
                    transferAmt={ transferAmt }
                    travelAmt={ travelAmt }
                    uncategorizedAmt={ uncategorized }
                />
            </div>
            <div className='budgetListActivityContainer'>
                <p>${ autoTransportAmt }</p>
                <p>${ billsUtilitiesAmt }</p>
                <p>${ businessServicesAmt }</p>
                <p>${ educationAmt }</p>
                <p>${ entertainmentAmt }</p>
                <p>${ feesChargesAmt }</p>
                <p>${ financialAmt }</p>
                <p>${ foodDiningAmt }</p>
                <p>${ giftsDonationsAmt }</p>
                <p>${ healthFitnessAmt }</p>
                <p>${ homeAmt }</p>
                <p>${ kidsAmt }</p>
                <p>${ miscExpensesAmt }</p>
                <p>${ personalCareAmt }</p>
                <p>${ petsAmt }</p>
                <p>${ shoppingAmt }</p>
                <p>${ taxesAmt }</p>
                <p>${ transferAmt }</p>
                <p>${ travelAmt }</p>
                <p>${ uncategorizedAmt }</p>
            </div>
            <div className='budgetListAvailableContainer'>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>
                <p>$0</p>

            </div>
        </div>
    )
}

export default BudgetList