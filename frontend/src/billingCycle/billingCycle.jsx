import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import List from './list'
import Form from './billingCycleForm'
import { showTabs } from '../common/tab/tabActions'
import { create } from './billingCycleActions'


export default props => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(showTabs('tabList', 'tabCreate'))
    })
    return (
        <div>
            <ContentHeader title="Billing Cycles" small="Version 1.0"/>
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label='List' icon='bars' target='tabList'></TabHeader>
                        <TabHeader label='Include' icon='plus' target='tabCreate'></TabHeader>
                        <TabHeader label='Edit' icon='pencil' target='tabUpdate'></TabHeader>
                        <TabHeader label='Delete' icon='trash-o' target='tabDelete'></TabHeader>
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id='tabList'>
                            <List />
                        </TabContent>
                        <TabContent id='tabCreate'>
                            <Form onSubmit={e => dispatch(create(e))}/>
                        </TabContent>
                        <TabContent id='tabUpdate'><h1>Update</h1></TabContent>
                        <TabContent id='tabDelete'><h1>Delete</h1></TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
        </div>
    )}