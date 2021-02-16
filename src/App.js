import React from 'react';
import {Switch, Route} from "react-router-dom";

import MainPage from "./pages/Main/MainPage";
import NoMatch from "./pages/404/404";
import SearchPage from './pages/SearchPage/SearchPage'
import MoviePage from "./pages/MoviePage/MoviePage";


export default function App() {

    return (
        <Switch>
            <Route exact path={'/'} component={MainPage} />
            <Route path={'/film/:id'} component={MoviePage} />
            <Route path={'/search/:query'} component={SearchPage} />
            <Route path='*' component={NoMatch} />
        </Switch>
    )
}
