import React from 'react'
import { useSelector } from 'react-redux'

const tabContent = props => {
    const selected = useSelector(state => state.tab.selected)
    const isSelected = selected === props.id

    return (
        <div id={props.id}
             className={`tab-pane ${isSelected ? 'active' : ''}`}>
            {props.children}
        </div>
    )
}

export default tabContent
