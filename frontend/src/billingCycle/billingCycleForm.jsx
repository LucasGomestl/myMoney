import React from 'react'
import { reduxForm, Field } from 'redux-form'

let billingCycleForm = props => {
    const { handleSubmit } = props

    return (
        <form role='form' onSubmit={handleSubmit}>
            <div className="box-body">
            <Field name="month" component="input" type="text" 
                placeholder="Enter the month"/>
            <Field name="year" component="input" type="text" 
                placeholder="Enter the year"/>
            </div>
            <div className="box-footer">
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'BillingCycle' })(billingCycleForm)

