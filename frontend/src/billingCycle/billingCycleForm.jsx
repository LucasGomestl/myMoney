import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { useDispatch } from 'react-redux'

import labelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions'

let billingCycleForm = props => {
    const { handleSubmit } = props
    const dispatch = useDispatch()
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
                <button type='button' className='btn btn-default'
                        onClick={() => dispatch(init())}>Cancel</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'billingCycle', destroyOnUnmount: false })(billingCycleForm)

