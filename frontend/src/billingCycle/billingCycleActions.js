import axios from 'axios'
import { toastr } from 'react-redux-toastr'

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
    axios.post(URL+'/billingCycles', values)
        .then(resp => {
            toastr.success('Success', 'Done')
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Error', error))
        })
    return{
        type: 'CREATE_BILLING_CYCLE',
    }
}