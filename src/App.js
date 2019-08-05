import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import DashboardContainer from './containers/DashboardContainer';
import HotelInfoContainer from './containers/HotelInfoContainer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={DashboardContainer} />
        <Route path="/hotel/:hotelId" component={HotelInfoContainer} />
      </Router>
    </Provider>
  );
}

export default App;
