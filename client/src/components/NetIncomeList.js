import React, { useEffect, useContext, useState } from 'react'
import { CrudContext } from '../context/CrudProvider.js'
import NetIncome from './NetIncome.js'

import '../styles/netIncomeList.css'

function NetIncomeList() {
    const { userNetIncomes, getUserNetIncomes, addNetIncome, deleteIncome, editIncome } = useContext(CrudContext)


    useEffect(() => {
        getUserNetIncomes()
    }, [])

    const initInputs = { year: '', month: '', income: '' }
    const [inputs, setInputs] = useState(initInputs)

    const mappedUserNetIncomes = userNetIncomes.map(income => 
        <NetIncome 
            editIncome={ editIncome }
            deleteIncome={ deleteIncome }
            { ...income }
            key={ income._id }/>
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
        addNetIncome(inputs)
        setInputs(initInputs)
    }

    return(
        <div className='netIncomeListContainer'>
            <a className="button" href="#popup1">Click Here to Add Monthly Income</a>
            <div id="popup1" className="overlay">
                <div className="popup">
                    <div className='addNewIncome'>
                        <h1 className='addNewIncomeTitle'>Add your monthly income:</h1>
                        <form onSubmit={handleSubmit} className='addIncomeForm'>
                            <input 
                                type='number' 
                                name='year'
                                value={inputs.year}
                                onChange={handleChange}
                                placeholder='Year'/>
                            <select id='userIncomeMonthChoice' name='month' onChange={handleChange}>
                                <option value='select'>---</option>
                                <option value='January'>January</option>
                                <option value='Febuary'>February</option>
                                <option value='March'>March</option>
                                <option value='April'>April</option>
                                <option value='May'>May</option>
                                <option value='June'>June</option>
                                <option value='July'>July</option>
                                <option value='August'>August</option>
                                <option value='September'>September</option>
                                <option value='October'>October</option>
                                <option value='November'>November</option>
                                <option value='December'>December</option>
                            </select>
                            <input 
                                type='number' 
                                name='income'
                                value={inputs.income}
                                onChange={handleChange}
                                placeholder='Income'/>
                            <button className='addIncomeBtn'>Submit</button>
                        </form>
                    </div>
                    <a className="close" href="#">&times;</a>
                </div>
            </div>
            { mappedUserNetIncomes.reverse() }
        </div>
    )
}

export default NetIncomeList 
    
    // var arr = userNetIncomes,
    // result = [];

    // arr.forEach(function (a) {
    // if (!this[a.year]) {
    //     this[a.year] = { year: a.year, month: a.month, income: 0 };
    //     result.push(this[a.year]);
    // }
    // this[a.year].income += a.income;
    // }, Object.create(null));

    // result.sort(function(a, b){
    //     var keyA = new Date(a.year),
    //         keyB = new Date(b.year);
    //     if(keyA > keyB) return -1;
    //     if(keyA < keyB) return 1;
    //     return 0;
    // })