import React, {useState, useEffect} from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'



export default props => {
    const URL = 'http://localhost:3004/api'
    const [credit, setCredit] = useState(0)
    const [debt, setDebt] = useState(0)

    useEffect(() => {
        axios.get(URL+'/billingCycles/summary')
            .then(resp => { 
                let { credit, debt } = resp.data
                
                setCredit(credit)
                setDebt(debt)
            })
    })

    const formatedCredit = credit.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.')
    const formatedDebt = debt.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.')
    let total = (credit-debt)
    total = total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.')

    return(
        <div>
            <ContentHeader title='Dashboard' small='Version 1.0'/>
            <Content>
                <div className='row'>
                    <ValueBox cols="12 4" color="green" icon="bank"
                            value={'$ '+formatedCredit} text="Credits" />
                    <ValueBox cols="12 4" color="red" icon="credit-card"
                            value={'$ '+formatedDebt} text="Debts" />
                    <ValueBox cols="12 4" color="blue" icon="money"
                            value={'$ '+total} text="Total" />
                </div>
            </Content>
        </div>
    )
}