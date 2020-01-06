import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectedTab } from '../common/tab/tabActions'

const URL = 'http://localhost:3004/api'
const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(URL+'/billingCycles')
        return{
            type: 'BILLING_CYCLES_FETCHED',
            payload: request
        } 
}

export function create(values) {
    return submit('post', values)
}

export function update(values) {
    return submit('put', values)
}

export function remove(id) {
    const confirm = () => {
        axios.delete(URL+'/billingCycles/'+id)
        .then(resp => {
            toastr.success('Success')
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Error', error))
        })
    }
    toastr.confirm('Are you sure about that?', {onOk: () => confirm()})
    return ({type: ''})
}


export function submit(method, values) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](URL+'/billingCycles/'+id, values)
        .then(resp => {
            toastr.success('Success')
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Error', error))
        })
    }
}

export function showMethod(billingCycle, method) {
    return [
        showTabs('tab'+method),
        selectedTab('tab'+method),
        initialize('billingCycle', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectedTab('tabList'),
        getList(),
        initialize('billingCycle', INITIAL_VALUES)
    ]
}