import React, { useState } from 'react'
import TransactionForm from './TransactionForm.js'

import '../styles/transaction.css'

function Transaction(props) {
    const [isEditing, setIsEditingState] = useState(false)

    const editToggler = () => {
        setIsEditingState(prevIsEditingState => (!prevIsEditingState))
    }

    const initInputs = { date: '', title: '', amount: '', category:'' }
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const id = props._id
        props.editTransaction(id, inputs)
        editToggler()
    }

    const dateWithOutTime = props.date.split("T")[0]
    const restructureDate = dateWithOutTime.split("-")
    const dateArr = []
    dateArr.push(restructureDate[1], restructureDate[2], restructureDate[0])
    const date = dateArr.join('-')

    console.log(date)

    return(
        <div className='transactionContainer'>
            { !isEditing ?
                <>
                    <p className='transactionText'>{ date }</p>
                    <h3 className='transactionTitle'>{ props.title }</h3>
                    <p className='transactionText'>${ props.amount.toFixed(2) }</p>
                    <p className='transactionText'>{ props.category }</p>
                    <button onClick={ editToggler } className='transactionBtn'>Edit</button>
                    <button onClick={ (e) => props.deleteTransaction(props._id) } className='transactionBtn'>Delete</button>
                </>
            :
                <>
                    <TransactionForm 
                        inputs={ inputs }
                        handleChange={ handleChange }
                        handleSubmit={ handleSubmit }/>
                    <button onClick={ editToggler } className='transactionBtn'>Close</button>
                </> 
            }
        </div>
    )
}

export default Transaction