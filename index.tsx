import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect,Link } from "react-router-dom";
import { TopHead } from './components/top-head';
import {Home} from './components/home';
import { TestEmpForm } from './components/test-emp-form';
import {EmpDetailsForm} from './components/emp-detail-form';



class App extends Component {
  render() {
    return (
        <Router>
          <div>
          <TopHead/>
            
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/emp-detail-form" component={EmpDetailsForm} />
                <Route exact path="/test-emp-form" component={TestEmpForm} />
              </Switch>
            </Container>
            
          </div>
        </Router>
      
    );
  }
}

render(<App />, document.getElementById('root'));
