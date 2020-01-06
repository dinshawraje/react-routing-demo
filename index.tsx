import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import { TopHead } from './components/top-head';
import {Home} from './components/home';
import { TestEmpForm } from './components/test-emp-form';
import {EmpDetailsForm} from './components/emp-detail-form';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
 

  render() {
    return (
      <div>
      < TopHead />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route exact path="/test-emp-form" component={withRouter(TestEmpForm)} />
            <Route exact path={'/emp-detail-form'} component={withRouter(EmpDetailsForm)} />
          </Switch>
        </Router>
      </Container>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
