const express = require('express')
const budgetRouter = express.Router()
const Budget = require('../models/budget.js')

budgetRouter.get('/', (req, res, next) => {
    Budget.find((err, budgets) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(budgets)
    })
})

budgetRouter.get('/user', (req, res, next) => {
    Budget.find({user: req.user._id}, (err, usersBudgets) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(usersBudgets)
    })
})

budgetRouter.post('/', (req, res, next) => {
    const newBudget = new Budget(req.body)
    newBudget.user = req.user._id 
    newBudget.save((err, savedBudget) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBudget)
    })
})

budgetRouter.delete("/user/:_id", (req, res, next) => {
    Budget.findByIdAndRemove(req.params._id, (err, userBudgets) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(usersBudgets)
    } )
 })
 
budgetRouter.put("/user/:_id", (req, res) => {
     Budget.findByIdAndUpdate(
         req.params._id, 
         req.body, 
         { new: true }, 
         (err, usersBudgets) => {
             if(err) {
                 res.status(500)
             }
             return res.send(usersBudgets)
         }
     )
 
 })


module.exports = budgetRouter