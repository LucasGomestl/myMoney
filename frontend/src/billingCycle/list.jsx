import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from './button'
import { getList, showMethod, remove } from './billingCycleActions'

const billingCycleList = () => {

    const list = useSelector(state => state.billingCycle.list) || []
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getList())
    },[getList()])

const renderRows = () => list.map(billingCycle => (
    <tr key={billingCycle._id}>
            <td>{billingCycle.month}</td>
            <td>{billingCycle.year}</td>
            <td>
                <Button type='warning' icon='pencil' click={() => dispatch(showMethod(billingCycle, 'Update'))}/>
                <Button type='danger' icon='trash' click={() => dispatch(remove(billingCycle._id))}/>
            </td>
    </tr>
))

    return (
        
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Year</th>
                        <th className="table-actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
            
        
    )
}

export default billingCycleList
