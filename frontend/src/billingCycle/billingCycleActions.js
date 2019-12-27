import axios from 'axios'

const URL = 'http://localhost:3004/api'
const INITIAL_VALUES = {credits: [{}], debts:[{}]}

export function getList() {
    const request = axios.get(URL+'/billingCycles')
        return{
            type: 'BILLING_CYCLES_FETCHED',
            payload: request
        } 
}