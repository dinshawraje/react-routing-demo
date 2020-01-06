import React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from "react-router-dom";

import { TopHead } from './components/top-head';
import {Home} from './components/home';
import { TestEmpForm } from './components/test-emp-form';
import {EmpDetailsForm} from './component/emp-detail-form'

export const Routes = () =>
    <Switch>
        <Route exact path={'/'} component={withRouter(Home)} />
        <Route exact path={'/emp-detail-form'} component={withRouter(EmpDetailsForm)} />
        <Route path={'/test-emp-form'} component={withRouter(TestEmpComponent)} />
        <Redirect to={'/'}/>
    </Switch>;