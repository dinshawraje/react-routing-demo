import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { TopHead } from './components/top-head';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './components/home'

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
 

  render() {
    return (
      <div>
      < TopHead />
      <Home/>

        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
