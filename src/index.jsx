import PageNotFound from '@/pages/404';
import About from '@/pages/about';
import Home from '@/pages/home';
import MakerEdit from '@/pages/maker/edit';
import MakerNew from '@/pages/maker/new';
import PressRoom from '@/pages/press-room';
import Signin from '@/pages/signin';
import Signup from '@/pages/signup';
import '@/styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
        <Route path="/press-room" component={PressRoom} />
        <Route path="/maker/new" component={MakerNew} />
        <Route path="/maker/:id" component={MakerEdit} />
        <Route path="/" component={Home} exact />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
