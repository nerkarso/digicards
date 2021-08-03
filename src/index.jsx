import { VechaiProvider } from '@vechaiui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import About from './pages/about';
import Editor from './pages/editor';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

ReactDOM.render(
  <React.StrictMode>
    <VechaiProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/editor" component={Editor} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </VechaiProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
