import React, { useState, useContext, useEffect } from 'react'
import { CrudContext } from '../context/CrudProvider.js'

const BudgetFrom = props => {

    const { userBudgets, getUserBudgets, addBudget, deleteBudget, editBudget } = useContext(CrudContext)

    const initBudgetState = {
        autoTransportBudget: '',
        billsUtilitiesBudget: '',
        businessServicesBudget: '',
        educationBudget: '',
        entertainmentBudget: '',
        feesChargesBudget: '',
        financialBudget: '',
        foodDiningBudget: '',
        giftsDonationsBudget: '',
        healthFitnessBudget: '',
        homeBudget: '',
        kidsBudget: '',
        miscExpensesBudget: '',
        personalCareBudget: '',
        petsBudget: '',
        shoppingBudget: '',
        taxesBudget: '',
        transferBudget: '',
        travelBudget: '',
        uncategorizedBudget: '',
    }

    const [budgetState, setBudgetState] = useState(initBudgetState)

    const handleChange = event => {
        const { name,value } = event.target.value
        this.setState({
            [name]: value
        })
    }

    return (
        <div>
            <form id='autoTransportForm'>
                <input
                    type='number'
                    name='autoTransportBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='billsUtilitiesForm'>
                <input
                    type='number'
                    name='billsUtilitiesBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='businessServicesForm'>
                <input
                    type='number'
                    name='businessServicesBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='educationForm'>
                <input
                    type='number'
                    name='educationBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='entertainmentForm'>
                <input
                    type='number'
                    name='entertainmentBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='feesChargesForm'>
                <input
                    type='number'
                    name='feesChargesBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='financialForm'>
                <input
                    type='number'
                    name='financialBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='foodDiningForm'>
                <input
                    type='number'
                    name='foodDiningBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form  id='giftsDonationsForm'>
                <input
                    type='number'
                    name='giftsDonationsBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form  id='healthFitnessForm'>
                <input
                    type='number'
                    name='healthFitnessBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='homeForm'>
                <input
                    type='number'
                    name='homeBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='kidsForm'>
                <input
                    type='number'
                    name='kidsBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='miscExpensesForm'>
                <input
                    type='number'
                    name='miscExpensesBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='personalCareForm'>
                <input
                    type='number'
                    name='personalCareBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='petsForm'>
                <input
                    type='number'
                    name='petsBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='shoppingForm'>
                <input
                    type='number'
                    name='shoppingBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='taxes'>
                <input
                    type='number'
                    name='taxesBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='transferForm'>
                <input
                    type='number'
                    name='transferBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='travelForm'>
                <input
                    type='number'
                    name='travelBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
            <form id='uncategorizedForm'>
                <input
                    type='number'
                    name='uncategorizedBudget'
                    value=""
                    onChange=""
                    placeholder='0'
                />
                <button style={{marginLeft: 5, paddingLeft: 5, paddingRight: 5}}>Save</button>
            </form>
        </div>
    )
}

export default BudgetFrom
    // const initBudget = {
    //     autoTransportBudget: '',
    //     billsUtilitiesBudget: '',
    //     businessServicesBudget: '',
    //     educationBudget: '',
    //     entertainmentBudget: '',
    //     feesChargesBudget: '',
    //     financialBudget: '',
    //     foodDiningBudget: '',
    //     giftsDonationsBudget: '',
    //     healthFitnessBudget: '',
    //     homeBudget: '',
    //     kidsBudget: '',
    //     miscExpensesBudget: '',
    //     personalCareBudget: '',
    //     petsBudget: '',
    //     shoppingBudget: '',
    //     taxesBudget: '',
    //     transferBudget: '',
    //     travelBudget: '',
    //     uncategorizedBudget: '',
    // }
    
    // const [budget, setBudget] = useState(initBudget)
    
    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setBudget({
    //         [name]: value
    //     })
    // }
    
    // const handleSubmit = e => {
    //     // e.preventDefault()
    //     setBudget({
    //         autoTransportBudget: budget.autoTransportBudget,
    //         billsUtilitiesBudget: budget.billsUtilitiesBudget,
    //         businessServicesBudget: budget.businessServicesBudget,
    //         educationBudget: budget.educationBudget,
    //         entertainmentBudget: budget.entertainmentBudget,
    //         feesChargesBudget: budget.feesChargesBudget,
    //         financialBudget: budget.financialBudget,
    //         foodDiningBudget: budget.foodDiningBudget,
    //         giftsDonationsBudget: budget.giftsDonationsBudget,
    //         healthFitnessBudget: budget.healthFitnessBudget,
    //         homeBudget: budget.homeBudget,
    //         kidsBudget: budget.kidsBudget,
    //         miscExpensesBudget: budget.miscExpensesBudget,
    //         personalCareBudget: budget.personalCareBudget,
    //         petsBudget: budget.petsBudget,
    //         shoppingBudget: budget.shoppingBudget,
    //         taxesBudget: budget.taxesBudget,
    //         transferBudget: budget.transferBudget,
    //         travelBudget: budget.travelBudget,
    //         uncategorizedBudget: budget.uncategorizedBudget,
    //     })
    // }