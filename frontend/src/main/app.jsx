import React from 'react'
import {HashRouter} from 'react-router-dom'

import '../common/template/dependencies'
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Messages from '../common/msg/messages'


export default props => (
    <HashRouter>
        <div className="wrapper">
            <Header />
            <SideBar />

            <Routes />

            <Footer />
            <Messages />
        </div>
    </HashRouter>
    
)