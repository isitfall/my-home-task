import React from 'react';
import {Switch, Route, Link} from "react-router-dom";

import MainPage from "./pages/Main/MainPage";
import NoMatch from "./pages/404/404";
import SearchPage from './pages/SearchPage/SearchPage'


export default function App() {

    return (
        <Switch>
            <Route exact path={'/'} component={MainPage} />
            <Route path={'/search/:query'} component={SearchPage} />
            <Route path='*' component={NoMatch} />
        </Switch>
    )
}
