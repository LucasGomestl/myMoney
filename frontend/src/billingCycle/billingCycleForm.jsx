import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { useDispatch, connect } from 'react-redux'

import labelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions'
import ItemList from './itemList'
import Summary from './summary'

let billingCycleForm = props => {
    const { handleSubmit, credits, debts} = props
    const dispatch = useDispatch()

    const calculateSummary = () => {
        const credits = props.credits || [{}]
        const debts = props.debts || [{}]
        const sum = ( t, v ) => t + v
        return {
            sumOfCredits: credits.map(credit => +credit.value || 0).reduce(sum),
            sumOfDebts: debts.map(debt => +debt.value || 0).reduce(sum)
        }
    }

    const { sumOfCredits, sumOfDebts } = calculateSummary()
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

                <Summary credit={sumOfCredits} debt={sumOfDebts}/>

                <ItemList cols='12 6'
                        field='credits'
                        legend='Credits' 
                        list={credits} />

                <ItemList cols='12 6' 
                        field='debts' 
                        legend='Debts' 
                        list={debts}
                        showStatus={true} />
                </div>
            <div className="box-footer">
                <button type='submit' className={'btn btn-'+props.submitClass}>{props.submitLabel}</button>
                <button type='button' className='btn btn-default'
                        onClick={() => dispatch(init())}>Cancel</button>
            </div>
        </form>
    )
}

// const createReduxForm = reduxForm({ form: 'billingCycle' })
// const billingCycleForm = createReduxForm(billingCycleForm)
// export default billingCycleForm


billingCycleForm = reduxForm({ 
        form: 'billingCycle', destroyOnUnmount: false 
    })(billingCycleForm)

const selector = formValueSelector('billingCycle')
billingCycleForm = connect(state => ({ 
    credits : selector(state, 'credits'),
    debts: selector(state, 'debts')
}))(billingCycleForm)

export default billingCycleForm
