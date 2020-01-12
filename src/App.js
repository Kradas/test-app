import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import { store } from './store';
import Dashboard from './routes/Dashboard';
import HotelInfo from './routes/HotelInfo';

import './App.scss';

const App = () => (
  <Container className='layout'>
    <Provider store={store}>
      <Router basename="/test-app/">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/hotel/:hotelId" component={HotelInfo} />
        </Switch>
      </Router>
    </Provider>
  </Container>
);

export default App;
