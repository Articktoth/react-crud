import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Todos from './components/Todos';
import Create from './components/Create';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Header from './components/Header';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />

                <Switch>
                    <Route exact path="/" component={Todos} />
                    <Route exact path="/todos" component={Todos} />
                    <Route exact path="/create" component={Create} />
                    <Route exact path="/delete/:id" component={Delete} />
                    <Route exact path="/edit/:id" component={Edit} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
