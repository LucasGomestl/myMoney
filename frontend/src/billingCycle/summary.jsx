import React from 'react'

import Grid from '../common/grid/grid'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resume</legend>
            <div className='row'>
                <ValueBox cols='12 4' 
                          color='green' 
                          icon='bank' 
                          value={`$ ${credit}`}
                          text='Credits Amount' />

                <ValueBox cols='12 4' 
                          color='red' 
                          icon='credit-card'
                          value={`$ ${debt}`} 
                          text='Debts Amount'/>

                <ValueBox cols='12 4' 
                          color='blue' 
                          icon='money'
                          value={`$ ${credit - debt}`}
                          text='Total' />
            </div>
        </fieldset>
    </Grid>
)