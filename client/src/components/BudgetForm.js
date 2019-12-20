import React, { useState } from 'react'

const BudgetFrom = props => {

    const initBudget = {
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

    const [budget, setBudget] = useState(initBudget)

    const handleChange = e => {
        const { name, value } = e.target
        setBudget({
            [name]: value
        })
    }

    const handleSubmit = e => {
        // e.preventDefault()
        setBudget({
            autoTransportBudget: budget.autoTransportBudget,
            billsUtilitiesBudget: budget.billsUtilitiesBudget,
            businessServicesBudget: budget.businessServicesBudget,
            educationBudget: budget.educationBudget,
            entertainmentBudget: budget.entertainmentBudget,
            feesChargesBudget: budget.feesChargesBudget,
            financialBudget: budget.financialBudget,
            foodDiningBudget: budget.foodDiningBudget,
            giftsDonationsBudget: budget.giftsDonationsBudget,
            healthFitnessBudget: budget.healthFitnessBudget,
            homeBudget: budget.homeBudget,
            kidsBudget: budget.kidsBudget,
            miscExpensesBudget: budget.miscExpensesBudget,
            personalCareBudget: budget.personalCareBudget,
            petsBudget: budget.petsBudget,
            shoppingBudget: budget.shoppingBudget,
            taxesBudget: budget.taxesBudget,
            transferBudget: budget.transferBudget,
            travelBudget: budget.travelBudget,
            uncategorizedBudget: budget.uncategorizedBudget,
        })
    }

    console.log(budget)

    return (
        <div>
            <form id='jsform' onSubmit={ handleSubmit }>
                <input
                    type='number'
                    name='autoTransportBudget'
                    value={ budget.autoTransportBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button onClick={() => {alert('hello')}}>Save</button>
                <br />
                <input
                    type='number'
                    name='billsUtilitiesBudget'
                    value={ budget.billsUtilitiesBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='businessServicesBudget'
                    value={ budget.businessServicesBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='educationBudget'
                    value={ budget.educationBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='entertainmentBudget'
                    value={ budget.entertainmentBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='feesChargesBudget'
                    value={ budget.feesChargesBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='financialBudget'
                    value={ budget.financialBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='foodDiningBudget'
                    value={ budget.foodDiningBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='giftsDonationsBudget'
                    value={ budget.giftsDonationsBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='healthFitnessBudget'
                    value={ budget.healthFitnessBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='homeBudget'
                    value={ budget.homeBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='kidsBudget'
                    value={ budget.kidsBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='miscExpensesBudget'
                    value={ budget.miscExpensesBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='personalCareBudget'
                    value={ budget.personalCareBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='petsBudget'
                    value={ budget.petsBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='shoppingBudget'
                    value={ budget.shoppingBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='taxesBudget'
                    value={ budget.taxesBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='transferBudget'
                    value={ budget.transferBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='travelBudget'
                    value={ budget.travelBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
                <br />
                <input
                    type='number'
                    name='uncategorizedBudget'
                    value={ budget.uncategorizedBudget || '' }
                    onChange={ handleChange }
                    placeholder='0'
                />
                <button>Save</button>
            </form>
        </div>
    )
}

export default BudgetFrom