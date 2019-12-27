import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import If from '../operator/if'
import {selectedTab} from './tabActions'

export default props => {
    const selected = useSelector(state => state.tab.selected)
    const visible = useSelector(state => state.tab.visible[props.target])
    const dispatch = useDispatch()

    const isSelected = selected === props.target 
    
    return (
        <If test={visible}>
            <li className={isSelected ? 'active' : ''}>
                <a  href="" 
                    onClick={(e) => {e.preventDefault(); dispatch(selectedTab(props.target))}} 
                    data-toggle='tab' 
                    data-target={props.target}>
                        
                <i className={"fa fa-"+props.icon}></i> {props.label}
                </a>
            </li>
        </If>
    )
}