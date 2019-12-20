import React from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'

export default props => (
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
                    
                </TabsContent>
            </Tabs>
        </Content>
    </div>
)