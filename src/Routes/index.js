import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Movie from '../pages/Movie'

export default function Routes () {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:imdbID" component={Movie} />
        </Switch> 
    )
} 