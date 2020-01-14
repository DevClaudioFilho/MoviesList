import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'

export default function Routes () {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </Switch> 
    )
} 