import React from "react";
import { Switch } from 'react-router-dom'

import MyRoute from './MyRoutes'
import Home from '../pages/Home'
import Login from '../pages/Login'

export default function Routes() {
    return (
        <Switch>
            <MyRoute exact path='/' component={Home} />
            <MyRoute path='*' component={Login} />
        </Switch>
    )
}
