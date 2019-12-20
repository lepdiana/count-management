const mongoose = require('mongoose')
const Schema = mongoose.Schema

const budgetSchema = new Schema ({
    autoTransportBudget: {
        type: Number,
        default: 0
    },
    billsUtilitiesBudget: {
        type: Number,
        default: 0
    },
    businessServicesBudget: {
        type: Number,
        default: 0
    },
    educationBudget: {
        type: Number,
        default: 0
    },
    entertainmentBudget: {
        type: Number,
        default: 0
    },
    feesChargesBudget: {
        type: Number,
        default: 0
    },
    financialBudget: {
        type: Number,
        default: 0
    },
    foodDiningBudget: {
        type: Number,
        default: 0
    },
    giftsDonationsBudget: {
        type: Number,
        default: 0
    },
    healthFitnessBudget: {
        type: Number,
        default: 0
    },
    homeBudget: {
        type: Number,
        default: 0
    },
    kidsBudget: {
        type: Number,
        default: 0
    },
    miscExpensesBudget: {
        type: Number,
        default: 0
    },
    personalCareBudget: {
        type: Number,
        default: 0
    },
    petsBudget: {
        type: Number,
        default: 0
    },
    shoppingBudget: {
        type: Number,
        default: 0
    },
    taxesBudget: {
        type: Number,
        default: 0
    },
    transferBudget: {
        type: Number,
        default: 0
    },
    travelBudget: {
        type: Number,
        default: 0
    },
    uncategorizedBudget: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    } 
})

module.exports = mongoose.model('Budget', budgetSchema)