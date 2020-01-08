import React, { useState } from 'react'
import axios from 'axios'

export const CrudContext = React.createContext()


axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
}) 

function CrudProvider(props) {
    const initState = {
        userNetIncomes: [],
        userTransactions: [],
        filteredNetIncomes: [],
        userBudgets: []
    }

    const [incomeState, setIncomeState] = useState(initState)
    const [transactionState, setTransactionState] = useState(initState)
    const [budgetState, setBudgetState] = useState(initState)


    const getUserNetIncomes = () => {
        axios.get('/api/netincome/user')
            .then(res => {
                setIncomeState(prevIncomeState => ({
                    ...prevIncomeState, 
                    userNetIncomes: res.data
                }))
            })
            .catch(err => console.log(err))
    }

    const addNetIncome = newNetIncome => {
        axios.post('/api/netincome', newNetIncome)
            .then(res => {
                setIncomeState(prevIncomeState => ({
                    ...prevIncomeState,
                    userNetIncomes: [...prevIncomeState.userNetIncomes, res.data]
                }))
            })
            .catch(err => console.log(err))
    }

    const deleteIncome = (_id) => {
        axios.delete(`/api/netincome/user/${_id}`)
        setIncomeState(prevIncomeState => {
            const filteredNetIncomeArray = prevIncomeState.userNetIncomes.filter(income => {
                return _id !== income._id
            })
            return {userNetIncomes: filteredNetIncomeArray}
        })
    }

    const editIncome = (_id, editIncome) => {
        axios.put(`/api/netincome/user/${_id}`, editIncome)
        .then(res => {
            setIncomeState( prevIncomeState => ({
                userNetIncomes: prevIncomeState.userNetIncomes.map(income => income._id === _id ? res.data : income)
            }))
        })
        .catch(err => console.log(err))
    }

    const getUserTransactions = () => {
        axios.get('/api/transaction/user')
            .then(res => {
                setTransactionState(prevTransactionState => ({
                    ...prevTransactionState, 
                    userTransactions: res.data
                }))
            })
            .catch(err => console.log(err))
    }

    const addTransaction = newTransaction => {
        axios.post('/api/transaction', newTransaction)
            .then(res => {
                setTransactionState(prevTransactionState => ({
                    ...prevTransactionState,
                    userTransactions: [...prevTransactionState.userTransactions, res.data]
                }))
            })
            .catch(err => console.log(err))
    }

    const deleteTransaction = (_id) => {
        axios.delete(`/api/transaction/user/${_id}`)
        setTransactionState(prevTransactionState => {
            const filteredTransactionArray = prevTransactionState.userTransactions.filter(transaction => {
                return _id !== transaction._id
            })
            return {userTransactions: filteredTransactionArray}
        })
    }

    const editTransaction = (_id, editTransaction) => {
        axios.put(`/api/transaction/user/${_id}`, editTransaction)
        .then(res => {
            setTransactionState( prevTransactionState => ({
                userTransactions: prevTransactionState.userTransactions.map(transaction => transaction._id === _id ? res.data : transaction)
            }))
        })
        .catch(err => console.log(err))
    }

    // const handleChangeTransaction = e => {
    //     const { name, value } = e.target
    //     setTransactionState({
    //         [name]: value
    //     })
    // }

    // const handleSubmitTransaction = e => {
    //     axios.post()
    // }

    const getUserBudgets = () => {
        axios.get('/api/budget/user')
            .then(res => {
                setBudgetState(prevBudgetState => ({
                    ...prevBudgetState, 
                    userBudgets: res.data
                }))
            })
            .catch(err => console.log(err))
    }

    const addBudget = newBudget => {
        axios.post('/api/budget', newBudget)
            .then(res => {
                setBudgetState(prevBudgetState => ({
                    ...prevBudgetState,
                    userBudgets: [...prevBudgetState.userBudgets, res.data]
                }))
            })
            .catch(err => console.log(err))
    }

    const deleteBudget = (_id) => {
        axios.delete(`/api/budget/user/${_id}`)
        setBudgetState(prevBudgetState => {
            const filteredBudgetArray = prevBudgetState.userBudgets.filter(budget => {
                return _id !== budget._id
            })
            return {userBudgets: filteredBudgetArray}
        })
    }

    const editBudget = (_id, editBudget) => {
        axios.put(`/api/budget/user/${_id}`, editBudget)
        .then(res => {
            setBudgetState(prevBudgetState => ({
                userBudgets: prevBudgetState.userBudgets.map(budget => budget._id === _id ? res.data : budget)
            }))
        })
        .catch(err => console.log(err))
    }


    return (
        <CrudContext.Provider
            value={{
                userNetIncomes: incomeState.userNetIncomes,
                userTransactions: transactionState.userTransactions,
                getUserNetIncomes: getUserNetIncomes,
                getUserTransactions: getUserTransactions,
                addNetIncome: addNetIncome,
                deleteIncome: deleteIncome,
                editIncome: editIncome,
                addTransaction: addTransaction,
                deleteTransaction: deleteTransaction,
                editTransaction: editTransaction,
                userBudgets: budgetState.userBudgets,
                getUserBudgets: getUserBudgets,
                addBudget: addBudget,
                deleteBudget: deleteBudget,
                editBudget: editBudget
            }}>
            { props.children }
        </CrudContext.Provider>
    )
}

export default CrudProvider