import React from 'react';
import {Switch, Route} from "react-router-dom";

import MainPage from "./pages/Main/MainPage";
import NoMatch from "./pages/404/404";

export default function App() {

    return (
        <Switch>
            <Route path={['/', '/film/:id', '/search/:query']} component={MainPage} />
            <Route path='*' component={NoMatch} />
        </Switch>
    )
}
