import React from 'react'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'

let billingCycleForm = props => {
    const { handleSubmit } = props

    return (
        <form role='form' onSubmit={handleSubmit}>
            <div className="box-body">
            <Field name="month" 
                   label="Month"
                   component={labelAndInput} 
                   type="text" 
                   cols="12 4"
                   placeholder="Enter the month"/>

            <Field name="year"
                   label="Year"
                   component={labelAndInput} 
                   type="text" 
                   cols="12 4"
                   placeholder="Enter the year"/>
            </div>
            <div className="box-footer">
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'BillingCycle' })(billingCycleForm)

