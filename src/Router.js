import React from 'react';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Story from './pages/Story';
import Stories from './pages/Stories';
import PageNotFound from './pages/PageNotFound';

export const Router = () => {
    return (<>
        <nav>
            <ul>
            <li>
                <Link to="/">Stories</Link>
            </li>
            </ul>
        </nav>
        <Switch>
            <Route exact path="/">
                <Stories />
            </Route>
            <Route path="/stories/:id">
                <Story/>
            </Route>
            <Route path="/story/:id">
                <Story/>
            </Route>
            <Route path="*">
                <PageNotFound />
            </Route>
        </Switch>
    </>);
}

export default Router;