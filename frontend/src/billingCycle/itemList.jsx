import React from 'react'
import { useDispatch } from 'react-redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Grid from '../common/grid/grid'
import Input from '../common/form/input'
import If from '../common/operator/if'

const itemList = props => {
    const dispatch = useDispatch()

    function add(index, item = {}) {
        dispatch(arrayInsert('billingCycle', props.field, index, item))
    }

    function remove(index) {
        if(props.list.length > 1) {
            dispatch(arrayRemove('billingCycle', props.field, index))
        }
    }

    function renderRows(){
        const list = props.list || []
    
        return list.map((item, index) => 
            <tr key={index}>
                <td>
                    <Field name={`${props.field}[${index}].name`} component='input' component={Input} 
                    placeholder='Enter the name'/>
                </td>
                <td>
                    <Field name={`${props.field}[${index}].value`} component='input' component={Input}
                    placeholder='Enter the value'/>
                </td>
                <If test={props.showStatus}>
                    <td>
                        <Field name={`${props.field}[${index}].status`} component='input' component={Input}
                        placeholder='Enter the status'/>
                    </td>
                </If>
                <td>
                    <button type='button' className='btn btn-success'
                        onClick={() => add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type='button' className='btn btn-warning'
                        onClick={() => add(index + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type='button' className='btn btn-danger'
                        onClick={() => remove(index)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    }
    return (
        <Grid cols={props.cols}>
            <fieldset>
                <legend>{props.legend}</legend>
                <table className='table'>
                    <thead className='table'>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <If test={props.showStatus}>
                                <th>Status</th>
                            </If>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </fieldset> 
        </Grid>
    )
}

export default itemList
