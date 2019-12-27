const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, required: true},
    value: { type: Number, min: 0, required: true }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true},
    value: { type: Number, min: 0, required: true },
    status: { type: String, required: false, uppercase: true,
        enum: ['PAID', 'PENDING', 'SCHEDULED'] }
})

const billingCycleSchema = new mongoose.Schema({
    month: { type: String, required: true,
        enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] },
    year: { type: Number, min: 1970, max: 2200, required: true },
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)