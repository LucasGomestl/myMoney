import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectedTab } from '../common/tab/tabActions'

const URL = 'http://localhost:3004/api'
const INITIAL_VALUES = {credits: [{}], debts:[{}]}

export function getList() {
    const request = axios.get(URL+'/billingCycles')
        return{
            type: 'BILLING_CYCLES_FETCHED',
            payload: request
        } 
}

export function create(values) {
    return dispatch => {
        axios.post(URL+'/billingCycles', values)
            .then(resp => {
                toastr.success('Success', 'Done')
                dispatch([
                    resetForm('BillingCycle'),
                    getList(),
                    selectedTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}